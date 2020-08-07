import React, { useState } from 'react'
import { useHistory, useParams,browserHistory } from 'react-router-dom';

const EditCategory = ({ oldData,upDateCate }) => {
    console.log(oldData)
    let {id} = useParams();
    const oldCate = oldData.filter(cate => cate.id==id);
    console.log(oldCate)
    const[currentValue,setCurrentValue] = useState(oldCate);
    console.log(currentValue)
    const handleChange = ()=>{

    }
    const handleSubmit = ()=>{
        
    }


    return (
        <div>
            <h2>Sửa Danh Mục</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="cate_name" onChange={handleChange} value={currentValue.cate_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="short_decription">description</label>
                    <textarea type="text" className="form-control" name="description" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

EditCategory.propTypes = {

}

export default EditCategory
