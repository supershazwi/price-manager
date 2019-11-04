import React, { Component } from "react";
import { getProduct } from "../services/productService";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { Link } from "react-router-dom";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {
        title: "",
        source: {
          shop: "",
          price: []
        },
        trackers: []
      },
      data: {
        labels: [],
        datasets: []
      },
      individualItems: []
    };
  }

  async componentDidMount() {
    const { data: selectedProduct } = await getProduct(
      this.props.match.params.id
    );

    this.setState({
      selectedProduct: selectedProduct
    });

    let priceHistories = this.state.selectedProduct.trackers[0].pricehistory;
    let x;
    let labels = [];

    console.log(priceHistories);

    for (x in priceHistories) {
      labels.push(moment(priceHistories[x].date).format("Do MMM YY"));
    }

    console.log(labels);

    let dataSets = [];
    let trackers = this.state.selectedProduct.trackers;
    let shops = [];

    for (x in trackers) {
      priceHistories = trackers[x].pricehistory;
      let y;
      let priceData = [];
      for (y in priceHistories) {
        priceData.push(priceHistories[y].price);
      }

      let o = Math.round,
        r = Math.random,
        s = 255;
      let colorString =
        "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ",";
      let backgroundColorString = colorString + "0.4)";
      let borderColorString = colorString + "1)";

      let dataSet = {
        label: trackers[x].shop + " | " + trackers[x].title,
        fill: false,
        lineTension: 0.1,
        backgroundColor: backgroundColorString,
        borderColor: borderColorString,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: borderColorString,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: borderColorString,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: priceData
      };

      dataSets.push(dataSet);
      if (!shops.includes(trackers[x].shop)) {
        shops.push(trackers[x].shop);
      }
      shops.sort();
    }

    let individualItems = [];
    let z;
    for (z in shops) {
      let shopCategoryObj = {};
      shopCategoryObj.shopCategory = shops[z];
      shopCategoryObj.shops = [];

      individualItems.push(shopCategoryObj);
    }

    for (z in trackers) {
      let index = individualItems.findIndex(
        item => item.shopCategory === trackers[z].shop
      );
      let shopItem = {};
      shopItem.url = trackers[z].url;
      shopItem.title = trackers[z].title;
      individualItems[index].shops.push(shopItem);
    }

    this.setState({
      data: {
        labels: labels,
        datasets: dataSets
      },
      individualItems: individualItems
    });
  }

  renderPrices() {
    const price = this.state.selectedProduct.source.price;
    if (price.length > 1)
      return (
        "$" +
        this.state.selectedProduct.source.price[0] +
        " - $" +
        this.state.selectedProduct.source.price[1]
      );
    return "$" + this.state.selectedProduct.source.price;
  }

  render() {
    return (
      <React.Fragment>
        <div className="row pt-3">
          <div className="col-lg-12">
            <h6>{this.state.selectedProduct.title}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {this.renderPrices()} : {this.state.selectedProduct.source.shop}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <Line data={this.state.data} legend={{ position: "top" }} />
          </div>
        </div>
        <hr />
        <div className="row pb-3">
          <div className="col-lg-12">
            {this.state.individualItems.map((individualItem, i) => (
              <div key={i} className="pb-3">
                <h6 key={i} style={{ marginBottom: 0 }}>
                  {individualItem.shopCategory}
                  <sup>
                    <span className="badge badge-light">
                      {individualItem.shops.length}
                    </span>
                  </sup>
                </h6>
                {individualItem.shops.map((shop, k) => (
                  <div className="pt-0" key={k}>
                    <a href={shop.url} key={k} target="_blank">
                      {shop.title}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
