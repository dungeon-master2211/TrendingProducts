import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import ProductCard from '../components/ProductCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootElementType } from '../App'
import ProductCardShimmer from '../components/ProductCardShimmer'

type Prop = NativeStackScreenProps<RootElementType,'Home'>

const Home = ({navigation}:Prop) => {
    const [productData,setProductData] = useState<Product[]>([])
    async function getData(){
        const res = await fetch('https://dummyjson.com/products')
        const body = await res.json()
        
        setProductData(body.products)
    }
    useEffect(()=>{
        getData()
    },[])
    if(productData.length==0) return <ProductCardShimmer/>
  return (
          <View style={styles.mainContainer}>
            <Text style={styles.headerText}>Products</Text>
              <FlatList
              data={productData}
              renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate('Details',{productId:item.id})}>
                <ProductCard product={item}/>
              </TouchableOpacity>}
              keyExtractor={item=>item.id.toString()}
              />
          </View>

  )
}

export default Home

const styles = StyleSheet.create({
    loadingText:{
        color:'#000000'
    },
    headerText:{
        color:'#000000',
        fontSize:30
    },
    mainContainer:{
        padding:10,
        marginBottom:40
        
    }
})