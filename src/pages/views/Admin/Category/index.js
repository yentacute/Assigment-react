import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom' 
// import EditProduct from '../EditProduct'

const Category = ({ categories, onRemoveCate }) => {
    const removeCate = (id) => {
        onRemoveCate(id)
    }
    const[searchValue,setSearchValue]= useState("");
    const [filterCategories,setFilterCategories] = useState([]);
    useEffect(() => {
        setFilterCategories(
            categories.filter(cate => cate.cate_name.toLowerCase().includes(searchValue.toLowerCase()))
        )
    }, [searchValue,categories])
    return (
        <div>
            {/* Page Heading */}
            <Link to="/admin/addproduct" className="btn btn-success">Thêm</Link>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1><span>Tổng Danh mục: {categories.length}</span>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Danh Mục</h6>
                </div>
                <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e =>setSearchValue(e.target.value)} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Miêu tả</th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterCategories.map(({id,cate_name,description,created_at}, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index +1}</th>
                                        <td>{cate_name}</td>
                                        <td>{description}</td>
                                        <td>{created_at}</td>
                                        <td >
                                            <Link className="btn btn-success btn-sm" to={`/admin/editcate/${id}`}>Sửa</Link>
                                            <button className="btn btn-primary btn-sm" onClick={() => removeCate(id)} >Xóa</button>
                                            
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

Category.propTypes = {

}

export default Category
