import React, { useState, useEffect } from 'react';
// import Products from './components/Products';
import apiRequest from './api/productApi';
import Routers from './routers'
import axios from 'axios'
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setcategories] = useState([]);
    useEffect(() => {
      const getProduct = async() => {
        try{
            const { data } = await apiRequest.getAll();
            console.log(data);
            setProducts(data)
        }catch(errors){

        }
      }
      const getCate = async() => {
        try{
            const { data } = await apiRequest.getCate();
            console.log(data);
            setcategories(data)
        }catch(errors){

        }
      }
      getCate();
      getProduct();
       
    }, []);
    const onHandleRemove = async (id) => {
      try {
        const { data } = await apiRequest.remove(id);
        const newProducts = products.filter(product => product.id !== data.id);
        setProducts(newProducts);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
  
    }
  const handleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
        setProducts({
          ...products,
          data
        })
      
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  const onHandleUpdate = async (updateProduct)=>{
    try {
      const{id,data} =await apiRequest.update(updateProduct);
 
    }
    catch (error) {
      console.log()
    }
  }
const onDeleteCate = async (id) =>{
  try {
    const {data} = await apiRequest.deleteCate(id);
    console.log(data)
    const newCate = categories.filter(cate => cate.id !== data.id);
    setcategories(newCate)
  } catch (error) {
    console.log(error)
  }
}
const handleAddCate = async (cateData)=>{
  try {
    const {data} = await apiRequest.addCate(cateData);
    setcategories({
      ...categories,
      data
    })
    
  } catch (error) {
    console.log(error)
  }
    
}
const handleUpdate = async (cateOld)=>{
  
}

  return (
    <div className="App">
      <Routers  products= {products} 
                remove={onHandleRemove}
                productAdd={handleAdd}
                updateProduct={onHandleUpdate}
                removeCategory ={onDeleteCate}
                categories ={categories}
                cateAdd ={handleAddCate}
                CateUpdate ={handleUpdate}
                 />
    </div>
  )

}
export default App;