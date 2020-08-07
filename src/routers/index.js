import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/AddProduct'
import EditProduct from '../pages/views/Admin/EditProductForm';

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import DetailProduct from '../pages/views/Main/DetailProduct';
import Category from '../pages/views/Admin/Category';
import AddCategory from '../pages/views/Admin/AddCategory';
import EditCategory from '../pages/views/Admin/EditCategory';
const Routers = ({ products, remove,productAdd,upDatePro,removeCategory,categories,cateAdd}) => {
    const onHandleUpdate = (id, product) => {
        upDatePro(id, product)
        console.log(product)
    }
    const updateData = (id,oldData)=>{
        
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/product'>
                                <ProductsManager 
                                products={products} 
                                onRemove={remove}
                                
                               />
                            </Route>
                            <Route path="/admin/addproduct">
                                <AddProduct onAdd={productAdd} cate={categories}  /> 
                            </Route>
                            <Route path="/admin/editProduct/:id" >
                                <EditProduct pro={products} upDatePro={onHandleUpdate} /> 
                            </Route>
                            <Route path='/admin/category'>
                                <Category 
                                    categories={categories} 
                                    onRemoveCate={removeCategory}
                                />
                            </Route>
                            <Route path='/admin/addcate'>
                                <AddCategory 
                                    cateData={cateAdd} 
                                    onRemoveCate={removeCategory}
                                />
                            </Route>
                            <Route path='/admin/editcate/:id'>
                                <EditCategory 
                                    oldData={categories} 
                                    upDateCate={updateData}
                                />
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home  product={products}  />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/product/:id">
                                <DetailProduct products={products} /> 
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
