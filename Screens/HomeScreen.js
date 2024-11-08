import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBarComponent from "./components/SearchBar"
import useProducts from "./hooks/useProducts";
import ProductList from "./components/ProductList";

const HomeScreen = function () {
  const [text, setText] = useState("");
  const [searchApi, products, errorMessage] = useProducts();

  const filterProducts = (min, max) => {
    const filteredProducts = products.filter((product) => {
      if (product.rating > min && product.rating <= max) {
        return product
      }
    })
    return filteredProducts;
  }

  return <View style={{ backgroundColor: 'white', flex: 1 }}>
    <SearchBarComponent
      searchText={text}
      onChangeText={newText => { setText(newText) }}
      onSubmit={() => { searchApi(text) }}
    />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <ScrollView>
      <ProductList title="High-rated Products" products={filterProducts(4.0, 5.0)} />
      <ProductList title="Medium-rated Products" products={filterProducts(3.0, 4.0)} />
      <ProductList title="Low-rated Products" products={filterProducts(0, 3.0)} />
    </ScrollView>
  </View>
};

export default HomeScreen;