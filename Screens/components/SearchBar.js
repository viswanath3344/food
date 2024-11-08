import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Feather from '@expo/vector-icons/Feather';

const SearchBarComponent = ({searchText, onChangeText, onSubmit}) => {
    return <View style = {styles.backgroundStyle}>
        <Feather name="search" style = {styles.iconStyle}/>
        <TextInput 
          autoComplete="false"
          autoCorrect = "false"
          placeholder="Search"
          style = {styles.inputStyle}
          value = {searchText}
          onChangeText={onChangeText}
          onEndEditing={onSubmit}
        /> 
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#f2f2f2",
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 8,
        borderRadius: 5,
        height: 50,
       // alignItems: "center"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
       fontSize: 35,
       alignSelf: 'center',
       marginHorizontal: 15
    }
})

export default SearchBarComponent;