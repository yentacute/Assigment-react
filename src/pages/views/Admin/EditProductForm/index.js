import React,{useState} from 'react'
import {useForm} from "react-hook-form"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useHistory, useParams} from 'react-router-dom';

const EditProduct = ({upDatePro,pro}) => {
    let { id } = useParams();
    let history = useHistory();
    const res = pro.find(x => x.id === id);

    console.log(res)
    const [currentProduct, setCurrentProduct] = useState(res);
    const handleChange = (e) => {
        e.preventDefault();
        upDatePro(currentProduct);
        history.push('/admin/products');
    }
    const handleSubmit = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            {/* <h2>Thêm sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" value={currentProduct.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="price">price</label>
                <input type="text" className="form-control" name="price"  onChange={handleChange}  />
                </div>
                <div className="form-group">
                <label htmlFor="price">Fake Price</label>
                <input type="text" className="form-control" name="fakeprice" onChange={handleChange}  />
             
                </div>
                <div className="form-group">
                    <label>Miêu tả</label>
                    <textarea name="description" ></textarea>
                </div>
                <div className="form-group">
                <label htmlFor="image">image</label>
                <input type="text" className="form-control" name="image"   onChange={handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="category">category</label>
                <input type="text" name="cate_id"  className="form-control" onChange={handleChange} />
               
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
        </div>
    )
}

export default EditProduct
