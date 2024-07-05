import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { styles } from '../styles/DetailStyles';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;



const Detail = ({route, navigation}) => {
  const {drink, food, name, photo, rating} = route.params;
  const [photo_url, setPhotoUrl] = useState("");

  useEffect(()=>{
    if(photo){
      const goUri = async () => {
        const uri = await storage().ref(photo).getDownloadURL();
        setPhotoUrl(uri);
      }
      goUri();
    }
  },[])
 
const FoodItem = ({item}) => {
  const [photo_uri, setPhotoUri] = useState("");

  useEffect(()=>{
    if(item.photo_url){
      const goUri = async () =>{
        uri = await storage().ref(item.photo_url).getDownloadURL();
        setPhotoUri(uri)
      }
      goUri();
    }
  },[])
  return(
    <View style={styles.flatlist_food_view} >
      <Text style={styles.food_name} >{item.name}</Text>
      {
        photo_uri.length > 0
        ?
        <Image source={{uri:photo_uri}} style={styles.flatlist_image} />
        :
        <Text style={styles.loading} >yükleniyor</Text>
      }
      <Text  style={styles.food_price} >{item.price} ₺</Text>
    </View>
  )
}

const DrinkItem = ({item}) => {
  const [photo_uri, setPhotoUri] = useState("");

  useEffect(()=>{
    if(item.photo_url){
      const goUri = async () =>{
        uri = await storage().ref(item.photo_url).getDownloadURL();
        setPhotoUri(uri)
      }
      goUri();
    }
  },[])

  return(
    <View style={styles.flatlist_food_view} >
      <Text style={styles.food_name} >{item.name}</Text>
      {
        photo_uri.length > 0
        ?
        <Image source={{uri:photo_uri}} style={styles.flatlist_image} />
        :
        <Text style={styles.loading} >yükleniyor</Text>
      }
      <Text  style={styles.food_price} >{item.price} ₺</Text>
    </View>
  )
}



  return (
      <SafeAreaView  style={styles.container} >
        <StatusBar backgroundColor={"#eeebe5"} barStyle={"dark-content"} />

        <View style={styles.logo_container}>
            <View style={styles.logo_view}>
              {
                photo_url.length > 0
                ?
                <Image style={styles.logo} source={{uri:photo_url}} />
                :
                <Image style={styles.logo} source={require("../images/logo.png")} />
              }
              <Text style={styles.rating} >{rating}</Text>
              
            </View>
            <View style={styles.logo_text_view} >          
              <Text style={styles.logo_text}>RESTAURANT</Text>
              <Text style={styles.logo_text}>REVIEW</Text>
            </View>
            
            <TouchableOpacity onPress={()=>{navigation.goBack()}} >
              <Icon style={styles.back_icon}  name="arrow-back" size={width/15} />
            </TouchableOpacity>
            
        </View>

        <View style={styles.content_container} >

          <Text style={styles.menu_text} >MENÜ</Text>
          

          <View style={styles.flatlist_food_container}>
            <Text style={styles.title_text} >Yiyecekler</Text>
            <FlatList
              data={food}
              renderItem={({item}) => <FoodItem item={item}/> }
              style={styles.flatlist_food}
            />
          </View>

          

          <View style={styles.flatlist_drink_container}>
          <Text style={styles.title_text} >İçecekler</Text>
            <FlatList
              data={drink}
              renderItem={({item}) => <DrinkItem item={item}/> }
              style={styles.flatlist_drink}
            />
          </View>
          
        </View>
      </SafeAreaView>
      
  )
}

export default Detail;

