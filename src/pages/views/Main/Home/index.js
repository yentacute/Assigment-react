import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({product,products}) => {
  return (
        <div className="col-sm-9 padding-right">
        <div className="features_items">{/*features_items*/}
          <h2 className="title text-center">Features Items</h2>
          {product.map(products =>(
          <div className="col-sm-4">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <Link to={`/product/${products.id}`}><img src={products.image} alt="" /></Link>
                  <h2><Link to={`/product/${products.id}`} className="text-info">{products.name}</Link></h2>
                  <p className="author">{products.category}</p>
                  <p className="pricesale">
                    <span className="finalsale">{products.price}đ</span>
                    <span className="sale-tag sale-tag-square">-36%</span>
                  </p>
                  <p className="underline">{products.fakeprice}đ</p>	
                  <span className="star"><i className="fa fa-star" /></span>
                </div>	
              </div>
            </div>
          </div>
            ))}
        </div></div>
  )
}

Home.propTypes = {

}

export default Home
