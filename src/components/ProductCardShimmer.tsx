import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductCardShimmer = () => {
    const data = Array(7).fill('')
  return (
    <View style={styles.mainContainer}>
      {data.map((item,index)=><View key={index} style={styles.card}></View>)}
    </View>
  )
}

export default ProductCardShimmer

const styles = StyleSheet.create({
    mainContainer:{
        padding:8,
    },
    card:{
        width:'auto',
        height:100,
        backgroundColor:'#e7e4d5',
        borderRadius:10,
        marginVertical:8
    }
})