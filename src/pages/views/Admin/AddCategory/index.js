import React,{useState} from 'react'
// import PropTypes from 'prop-types'
import {useForm} from "react-hook-form"
import {  
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
 } from "react-router-dom";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import axios from 'axios'

const AddCategory = ({cateData}) => {
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onAddForm = data => {
        cateData(data)
        history.push('/admin/category')
  };
    
    return (
        <div>
            <h2>Thêm danh mục</h2>
            <form onSubmit={handleSubmit(onAddForm)}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="cate_name" ref={register} />
                {errors.name && "Tên không được để trống"}
                </div>    
                <div className="form-group">
                <label htmlFor="short_decription">description</label>
                <textarea type="text" className="form-control" name="description" ref={register}  />
                {errors.name && "Tên không được để trống"}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
