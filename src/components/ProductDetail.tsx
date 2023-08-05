import { StyleSheet, Text, View,ScrollView,Image, useWindowDimensions,TouchableOpacity } from 'react-native'
import React from 'react'

const ProductDetail = (product:Product) => {
    const {width,height} = useWindowDimensions()
  return (
    <ScrollView style={styles.mainContainer}>
        <View>
            <Image style={[{width:width,height:height*0.5}]} source={{uri:product.images[0]}}/>
        </View>
        <View style={styles.mainDescription}>
            <Text style={styles.titleText}>{product.title}</Text>
            <View style={styles.keyword}>
                <Text style={styles.keywordText}>{product?.brand}</Text>
                <Text style={styles.keywordText}>{product?.category}</Text>
            </View>
            <Text style={styles.descriptionText}>{product?.description}</Text>
        </View>
        <View style={styles.ratingContainer}>
            <Text style={styles.ratingStar}>⭐⭐⭐⭐</Text>
            <Text style={styles.ratingText}>{product?.rating}</Text>
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.discount}>{product?.discountPercentage}% off</Text>
            <Text style={styles.strikePrice}>₹{Math.round(product?.price+(product?.price*product?.discountPercentage/100))}</Text>
            <Text style={styles.price}>₹{product?.price}</Text>
        </View>
        <View>
            <Text style={[styles.supportText]}>+99 secured packaging Fee</Text>
            <Text style={[styles.supportText]}>EMI starts from ₹ {Math.round(product?.price/4)}</Text>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.addtocart}>
                <Text style={styles.addtocartText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buynow}>
                <Text style={styles.buynowText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
      <Text style={styles.smallText}></Text>
    </ScrollView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    mainContainer:{
        padding:8
    },
    titleText:{
        fontSize:40,
        fontWeight:'800',
        color:'#000000'
    },
    smallText:{
        color:'#000000'
    },
    mainDescription:{
        flex:1,
        justifyContent:'space-between'
    },
    keyword:{
        flexDirection:'row'
    },
    keywordText:{
        color:'#000000',
        borderRadius:10,
        borderColor:'#000000',
        borderWidth:0.5,
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:8,
        fontSize:15,
        fontWeight:'400'
    },
    descriptionText:{
        color:'#000000',
        fontSize:25,
        fontWeight:'300'
    },
    ratingContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    ratingStar:{
        fontSize:20,
        marginRight:8
    },
    ratingText:{
        fontSize:20,
        fontWeight:'300',
        color:'#FFFFFF',
        backgroundColor:'green',
        paddingVertical:2,
        paddingHorizontal:8,
        borderRadius:10
    },
    priceContainer:{
        flexDirection:'row',
        paddingVertical:18
    },
    discount:{
        color:'green',
        fontSize:30,
        marginRight:10
    },
    strikePrice:{
        color:'gray',
        textDecorationLine: 'line-through',
        fontSize:30,
        marginRight:10

    },
    price:{
        color:'#000000',
        fontSize:30,
        marginRight:10
    },
    supportText:{
        color:'#000000',
        fontSize:20
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingVertical:10
    },
    addtocart:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:8
        
    },
    addtocartText:{
        color:'#000000',
        
    },
    buynow:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
        paddingVertical:10,
        borderRadius:8
    },
    buynowText:{
        
    }
    
})