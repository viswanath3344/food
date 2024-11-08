import react, { useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import Products from "../api/Products";
import { useEffect } from "react";

const DetailScreen = ({ route }) => {
    const id = route.params.id;
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

    useEffect(() => {
         getProductImages(id)   
    }, [])

    if(!productImages) {
        return null
    }

    return <View>
        <Text> {id} </Text>
        <FlatList 
           horizontal
           data={productImages}
           keyExtractor={(productImage) => { return productImage}}
           renderItem={({item}) => {
            return <Image style = {{height: 100, width: 200, marginLeft: 20, backgroundColor: "yellow", borderRadius: 20}} source={{uri: item}}/>
           }}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
};

export default DetailScreen