import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetailShimmer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shimmerImage}></View>
      <View style={styles.shimmerText}></View>
      <View style={styles.shimmerText}></View>
      <View style={styles.shimmerText}></View>
    </View>
  )
}

export default ProductDetailShimmer

const styles = StyleSheet.create({
    container:{
        padding:8
    },
    shimmerImage:{
        width:'auto',
        height:400,
        backgroundColor:'gray'
    },
    shimmerText:{
        width:200,
        height:20,
        backgroundColor:'gray',
        marginVertical:10
    }

})