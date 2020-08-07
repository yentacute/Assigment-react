import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom' 
// import EditProduct from '../EditProduct'

const ProductsManager = ({ products, onRemove}) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
    const[searchValue,setSearchValue]=useState("");
    const [filterProduct,setFilterProduct] = useState([]);
    useEffect(() => {
       setFilterProduct(
        products.filter(product =>{
            return (
                product.name.toLowerCase().includes(searchValue.toLowerCase())
            ) 
         }
       )
       )
    }, [searchValue,products])
    return (
        <div>
            {/* Page Heading */}
            <Link to="/admin/addproduct" className="btn btn-success">Thêm</Link>
            
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>

                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e =>setSearchValue(e.target.value)} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
    <span>Tổng sản phẩm:{products.length}</span>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Fake Price</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">description</th>
                                    <th scope="col">category</th>
                                    <th scope="col">created_at</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterProduct.map((product, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.fakeprice}</td>
                                        <td><img src={product.image} alt="" width="50" /></td>
                                        <td>{product.description}</td>
                                        <td>{product.cate_id}</td>
                                        <td>{product.created_at}</td>

                                        <td >
                                            <Link className="btn btn-success btn-sm" to={`/admin/editProduct/${product.id}`}>Sửa</Link>
                                            <button className="btn btn-primary btn-sm" onClick={() => removeHandle(product.id)} >Xóa</button>
                                            
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

ProductsManager.propTypes = {

}

export default ProductsManager
