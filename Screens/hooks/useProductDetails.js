import react, { useState } from "react";
import Products from "../../api/Products";

export default () => {
    const [productImages, setProductImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getProductImages = async (id) => {
        try{
        const response = await Products.get(`products/${id}`);
        console.log(response.data.images);
        setProductImages(response.data.images);
        }catch (error) {
          setErrorMessage("Something went wrong!")
        }
    }

    return [productImages, getProductImages, errorMessage];
};