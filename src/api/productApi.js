import http from "./axiosHttp";
const getAll = () => {
    return http.get("product");
};

const get = id => {
    return http.get(`/product/${id}`);
};

const create = data => {
    return http.post("product/", data);
};

const update = (id, data) => {
    return http.put(`/product/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/product/${id}`);
};
const getCate =()=>{
    return http.get("/category");
}
const addCate = data=>{
    return http.post(`/category/`,data);
}
const deleteCate =(id)=>{
    return http.delete(`/category/${id}`);
}
const cateUpdate =(id,data)=>{
    return http.put(`/category/${id}`,data);
}
export default {
    getAll,
    get,
    create,
    update,
    remove,
    getCate,
    addCate,
    deleteCate,
    cateUpdate
    
};