import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductDetail = ({result}) => {
 return <View style = {styles.containerStyle}>
      <Image 
      style = {styles.imageStyle} 
      source={{uri: result.thumbnail}} 
      />
      <Text style = {styles.titleStyle} numberOfLines={2}> {result.title} </Text>
      <Text style = {styles.ratingsStyle}>  {result.rating.toFixed(1)} stars, {result.reviews.length} reviews </Text>
    </View>
};

const styles = StyleSheet.create({
  containerStyle: {
     marginLeft: 15
  },
   imageStyle: {
    height: 130,
    width: 180,
    borderRadius: 5,
    backgroundColor: "lightgray"
   },
   titleStyle: {
    width: 160,
    fontWeight: "bold",
    textAlign: "left",
    flex: 1, 
    flexWrap: "wrap",
   },
   ratingsStyle: {
    color: "gray",
    textAlign: "left"
   }

});

export default ProductDetail;
