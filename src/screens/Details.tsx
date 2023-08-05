import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootElementType } from '../App'
import ProductDetail from '../components/ProductDetail'
import ProductDetailShimmer from '../components/ProductDetailShimmer'

type Prop = NativeStackScreenProps<RootElementType,'Details'> 
const Details = ({navigation,route}:Prop) => {
  const [productDetail,setProductDetail] = useState<Product|undefined>(undefined)
  const id = route.params.productId
  const url = `https://dummyjson.com/products/${id}`
  async function getProductDetails(){
    const res= await fetch(url)
    const body = await res.json()
    setProductDetail(body)
  }
  useEffect(()=>{
    getProductDetails()
  },[])
  if(productDetail == undefined) return <ProductDetailShimmer/>
  return (
    <ProductDetail {...productDetail}/>
  )
}

export default Details

const styles = StyleSheet.create({
  smallText:{color:'#000000'}
})