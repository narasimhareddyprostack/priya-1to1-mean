import React, { useState } from "react";

function UploadProducts() {
  let [product, setProduct] = useState({
    product: {
      productName: "",
      brand: "",
      price: "",
      category: "",
    },
  });
  let productNameHandler = (event) => {
    setProduct({
      ...product,
      productName: event.target.value,
    });
  };
  let priceHandler = (event) => {
    setProduct({ ...product, price: event.target.value });
    console.log(product);
  };
  return (
    <React.Fragment>
      <h1 className="text-center">
        Functional Comp Forom Example - React Hook
      </h1>
      <div className="container col-xs-2 m-5">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Product Name"
              className="form-control"
              onChange={productNameHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Price"
              className="form-control"
              onChange={priceHandler}
            />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Brand" className="form-control" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="QTY" className="form-control" />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Category"
              className="form-control"
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default UploadProducts;
