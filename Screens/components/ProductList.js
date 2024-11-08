import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ProductDetail from "./ProductDetail";
import { useNavigation } from "@react-navigation/native";

const ProductList = ({title, products}) => {
  const navigation = useNavigation()
   if (!products.length) {
    return null
   }
    return <View>
      <Text style = {styles.titleStyle}>{title}</Text>
       <FlatList 
        showsHorizontalScrollIndicator = "false"
        horizontal
        data={products}
        keyExtractor={(product) => { return product.id}}
        renderItem={({item}) => {
          return (
          <TouchableOpacity 
          onPress={() => navigation.navigate("Detail", {id: item.id})}
          >
          <ProductDetail result = {item} />
          </TouchableOpacity>
          )
         }}
      /> 
    </View>
}

const styles = StyleSheet.create({
   titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 4,
    marginTop: 14
   }
});


export default ProductList;
