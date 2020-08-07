import React from 'react'
// import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom';

const DetailProduct = ({products}) => {
    let { id } = useParams();
    const product= products.find( product=>product.id === id);
    console.log(products);
    return (
        <div className="col-sm-9 padding-right">
      
      <div className="product-details">
    <div className="col-sm-5">
      <div className="view-product">
        <img src={product.image} alt=""  />
      </div>
    </div>
    <div className="col-sm-7">
      <div className="product-information">
        <h2>{product.name}</h2>
        <span>
          <span>{product.price}đ</span>
          <label>Quantity:</label>
          <input type="text" defaultValue={3} />
          <button type="button" className="btn btn-fefault cart">
            <i className="fa fa-shopping-cart" />
            Add to cart
          </button>
        </span>
    <p><b>Miêu tả ngắn:</b> {product.shortdecription}</p>
        <p><b>Condition:</b> New</p>
      </div>
    </div>
  </div>
  <div className="category-tab shop-details-tab">
    <div className="col-sm-12">
      <ul className="nav nav-tabs">
        <li className="active"><a href="#details" data-toggle="tab">Details</a></li>
      </ul>
    </div>
    <div className="col-sm-12">
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      
  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    </div>
  </div>
</div>

    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
