import React, { useState } from "react";

function UploadProducts() {
  let [product, setProduct] = useState({
    product: {
      productName: "",
      brand: "",
      qty: "",
      price: "",
      category: "",
    },
  });
  let productHandler = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
    console.log(product);
  };

  return (
    <React.Fragment>
      <h1 className="text-center">
        Functional Comp Forom Example - React Hook
      </h1>
      <div className="container col-xs-4 m-5">
        <form>
          <div className="form-group">
            <input
              type="text"
              value={product.name}
              name="productName"
              placeholder="Product Name"
              className="form-control"
              onChange={productHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="price"
              value={product.price}
              placeholder="Price"
              className="form-control"
              onChange={productHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="brand"
              value={product.brand}
              placeholder="Brand"
              className="form-control"
              onChange={productHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="QTY"
              name="qty"
              value={product.qty}
              className="form-control"
              onChange={productHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={product.category}
              placeholder="Category"
              name="category"
              className="form-control"
              onChange={productHandler}
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default UploadProducts;
