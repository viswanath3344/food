import { useState, useEffect } from "react";
import Products from "../../api/Products"

export default () => {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("search API called")
    try {
      const response = await Products.get('/products/search', {
        params: {
          limit:50,
          q: searchTerm
        }
      });
      setProducts(response.data.products)
    } catch (err) {
      setErrorMessage("Something went wrong!!")
    }
  }

  useEffect(()=> {
    searchApi("phone")
  }, [])

  return [searchApi, products, errorMessage] ;
};