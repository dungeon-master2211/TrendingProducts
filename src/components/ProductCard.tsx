import { StyleSheet, Text, View ,Button,Image} from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'

type ProductProp = PropsWithChildren<{
    product:Product
}>

const ProductCard = ({product}:ProductProp) => {
  return (
    <View style={styles.productCard}>
        <View style={styles.imageContainer}>
            <Image source={{uri:product.thumbnail}} style={styles.thumbnail}/>
        </View>
        <View style={styles.productDetail}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productDesc}>{product.description.slice(0,50)}...</Text>
            <Text style={styles.productRating}>{product.rating}</Text>
            <Text style={styles.productPrice}>₹ {product.price}</Text>
        </View>
      
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    productCard:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        backgroundColor:'#fbffe3',
        padding:8,
        borderRadius:8,
        elevation:8,
        
    },
    imageContainer:{
        flex:0.4
    },
    productDetail:{
        flex:0.6,
        justifyContent:'space-evenly',
        
    },
    productTitle:{
        color:'#000000',
        fontSize:18,
        fontWeight:'700'

    },
    productDesc:{
        color:'#000000',
        fontWeight:'300'
    },
    productRating:{
        backgroundColor:'#7ab317',
        width:40,
        padding:5,
        borderRadius:4
    },
    productPrice:{
        color:'#000000',
        fontSize:18,
        fontWeight:'500'
    },
    thumbnail:{
        width:100,
        height:100
    }
})