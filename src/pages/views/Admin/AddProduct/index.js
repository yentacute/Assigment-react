import React,{useState} from 'react'
// import PropTypes from 'prop-types'
import {useForm} from "react-hook-form"
import {useHistory} from 'react-router-dom';
import firebase from '../../../../firebase'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import axios from 'axios'

const AddProduct = ({onAdd,cate}) => {
    let history= useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onAddForm = data => {
        let file =data.image[0];
        let storageRef = firebase.storage().ref(`image/${file.name}`);
        storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url)=>{
                console.log(url)
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
            })
        })
        onAdd(data)
        history.push('/admin/product')
  };
    
    return (
        <div>
            <h2>Thêm sản phẩm</h2>
            <form onSubmit={handleSubmit(onAddForm)}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" ref={register} />
                {errors.name && "Tên không được để trống"}
    
                </div>
                <div className="form-group">
                <label htmlFor="price">price</label>
                <input type="text" className="form-control" name="price" ref={register} />
                {errors.name && "Tên không được để trống"}
             
                </div>
                <div className="form-group">
                <label htmlFor="price">Fake Price</label>
                <input type="text" className="form-control" name="fakeprice"  ref={register}  />
                {errors.name && "Tên không được để trống"}
           
                </div>
                <div className="form-group">
                <label htmlFor="image">image</label>
                <input type="file"  className="form-control"  name="image" ref={register} />
                {errors.name && "Tên không được để trống"}
 
                </div>
                <div className="form-group">
                <label htmlFor="short_decription">description</label>
                <textarea type="text" className="form-control" name="description" ref={register}  />
                {errors.name && "Tên không được để trống"}
               
                </div>
                <div className="form-group">
                    <label htmlFor="cate">Cate_id</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="cate_id" ref={register}>
                        {cate.map(category =>
                            <option value={category.id}  key={category.id}>
                                {category.cate_name}
                            </option>
                        )}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
