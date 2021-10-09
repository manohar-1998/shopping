import axios from "axios";
export const checkoutapi = async ()=> axios.post(`http://localhost:5000/api/checkout`);
export const getproducts = async ()=> axios.get(`https://fakestoreapi.com/products`);