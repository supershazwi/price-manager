import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/productService";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const { data: products } = await getProducts();
    this.setState({ products: products });
  }

  render() {
    let a = this.state.products.filter(product => {
      return product.title.charAt(0) === "A";
    });
    let b = this.state.products.filter(product => {
      return product.title.charAt(0) === "B";
    });
    let c = this.state.products.filter(product => {
      return product.title.charAt(0) === "C";
    });
    let d = this.state.products.filter(product => {
      return product.title.charAt(0) === "D";
    });
    let e = this.state.products.filter(product => {
      return product.title.charAt(0) === "E";
    });
    let f = this.state.products.filter(product => {
      return product.title.charAt(0) === "F";
    });
    let g = this.state.products.filter(product => {
      return product.title.charAt(0) === "G";
    });
    let h = this.state.products.filter(product => {
      return product.title.charAt(0) === "H";
    });
    let i = this.state.products.filter(product => {
      return product.title.charAt(0) === "I";
    });
    let j = this.state.products.filter(product => {
      return product.title.charAt(0) === "J";
    });
    let k = this.state.products.filter(product => {
      return product.title.charAt(0) === "K";
    });
    let l = this.state.products.filter(product => {
      return product.title.charAt(0) === "L";
    });
    let m = this.state.products.filter(product => {
      return product.title.charAt(0) === "M";
    });
    let n = this.state.products.filter(product => {
      return product.title.charAt(0) === "N";
    });
    let o = this.state.products.filter(product => {
      return product.title.charAt(0) === "O";
    });
    let p = this.state.products.filter(product => {
      return product.title.charAt(0) === "P";
    });
    let q = this.state.products.filter(product => {
      return product.title.charAt(0) === "Q";
    });
    let r = this.state.products.filter(product => {
      return product.title.charAt(0) === "R";
    });
    let s = this.state.products.filter(product => {
      return product.title.charAt(0) === "S";
    });
    let t = this.state.products.filter(product => {
      return product.title.charAt(0) === "T";
    });
    let u = this.state.products.filter(product => {
      return product.title.charAt(0) === "U";
    });
    let v = this.state.products.filter(product => {
      return product.title.charAt(0) === "V";
    });
    let w = this.state.products.filter(product => {
      return product.title.charAt(0) === "W";
    });
    let x = this.state.products.filter(product => {
      return product.title.charAt(0) === "X";
    });
    let y = this.state.products.filter(product => {
      return product.title.charAt(0) === "Y";
    });
    let z = this.state.products.filter(product => {
      return product.title.charAt(0) === "Z";
    });

    return (
      <div className="row pt-3">
        <div className="col-lg-4">
          <h2>
            A{" "}
            <sup>
              <span className="badge badge-light">{a.length}</span>
            </sup>
          </h2>
          {a.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            B{" "}
            <sup>
              <span className="badge badge-light">{b.length}</span>
            </sup>
          </h2>
          {b.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            C{" "}
            <sup>
              <span className="badge badge-light">{c.length}</span>
            </sup>
          </h2>
          {c.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            D{" "}
            <sup>
              <span className="badge badge-light">{d.length}</span>
            </sup>
          </h2>
          {d.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            E{" "}
            <sup>
              <span className="badge badge-light">{e.length}</span>
            </sup>
          </h2>
          {e.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            F{" "}
            <sup>
              <span className="badge badge-light">{f.length}</span>
            </sup>
          </h2>
          {f.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            G{" "}
            <sup>
              <span className="badge badge-light">{g.length}</span>
            </sup>
          </h2>
          {g.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            H{" "}
            <sup>
              <span className="badge badge-light">{h.length}</span>
            </sup>
          </h2>
          {h.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            I{" "}
            <sup>
              <span className="badge badge-light">{i.length}</span>
            </sup>
          </h2>
          {i.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
        </div>
        <div className="col-lg-4">
          <h2>
            J{" "}
            <sup>
              <span className="badge badge-light">{j.length}</span>
            </sup>
          </h2>
          {j.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            K{" "}
            <sup>
              <span className="badge badge-light">{k.length}</span>
            </sup>
          </h2>
          {k.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            L{" "}
            <sup>
              <span className="badge badge-light">{l.length}</span>
            </sup>
          </h2>
          {l.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            M{" "}
            <sup>
              <span className="badge badge-light">{m.length}</span>
            </sup>
          </h2>
          {m.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            N{" "}
            <sup>
              <span className="badge badge-light">{n.length}</span>
            </sup>
          </h2>
          {n.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            O{" "}
            <sup>
              <span className="badge badge-light">{o.length}</span>
            </sup>
          </h2>
          {o.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            P{" "}
            <sup>
              <span className="badge badge-light">{p.length}</span>
            </sup>
          </h2>
          {p.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            Q{" "}
            <sup>
              <span className="badge badge-light">{q.length}</span>
            </sup>
          </h2>
          {q.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            R{" "}
            <sup>
              <span className="badge badge-light">{r.length}</span>
            </sup>
          </h2>
          {r.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
        </div>
        <div className="col-lg-4">
          <h2>
            S{" "}
            <sup>
              <span className="badge badge-light">{s.length}</span>
            </sup>
          </h2>
          {s.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            T{" "}
            <sup>
              <span className="badge badge-light">{t.length}</span>
            </sup>
          </h2>
          {t.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            U{" "}
            <sup>
              <span className="badge badge-light">{u.length}</span>
            </sup>
          </h2>
          {u.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            V{" "}
            <sup>
              <span className="badge badge-light">{v.length}</span>
            </sup>
          </h2>
          {v.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            W{" "}
            <sup>
              <span className="badge badge-light">{w.length}</span>
            </sup>
          </h2>
          {w.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            X{" "}
            <sup>
              <span className="badge badge-light">{x.length}</span>
            </sup>
          </h2>
          {x.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            Y{" "}
            <sup>
              <span className="badge badge-light">{y.length}</span>
            </sup>
          </h2>
          {y.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
          <h2>
            Z{" "}
            <sup>
              <span className="badge badge-light">{z.length}</span>
            </sup>
          </h2>
          {z.map(product => (
            <div className="row pl-3" key={product._id}>
              <a href={`/products/${product._id}`} target="_blank">
                {product.title}
              </a>
            </div>
          ))}
          <br />
        </div>
      </div>
    );
  }
}

export default ProductList;
