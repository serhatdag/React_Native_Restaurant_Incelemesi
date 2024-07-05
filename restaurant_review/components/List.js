import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Dimensions,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    Modal
} from 'react-native'
import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { styles } from '../styles/ListStyles';

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;



const List = ({navigation}) => {

    const [basic_data, setBasicData] = useState([]);
    const [text_data, setTextData] = useState([]);
    const [text, setText] = useState("");
    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        database()
        .ref('Restaurants')
        .once('value')
        .then(snapshot => {
            setBasicData(snapshot.val());
            console.log("yüklendi");
        });
    },[])

    useEffect(()=>{
      if(text.length == 0){
        setTextData([])
      }
      else{
        let obj = [];
        if (text.length > 0 && basic_data) {
          for (let x = 0; x < basic_data.length; x++) {
              if (basic_data[x]["name"].toLowerCase().includes(text.toLowerCase())) { 
                  obj.push(basic_data[x]);
              }
          }
          setTextData(obj);
        }
      }
      
    },[text])

    const FlatlistFunc = ({item}) => {
        const [url, setUrl] = useState("");

        useEffect(()=>{
            if(basic_data){
                const goUrl = async () =>{
                    const uri = await storage().ref(item.desc_photo_id).getDownloadURL();
                    setUrl(uri)
                }
                goUrl()
            }
        },[])
        
        return(
            <View style={styles.flatlist_container} >
                {
                url
                ?
                <TouchableOpacity style={styles.flatlist_touch} onPress={()=>{goDetail(item)}} >
                    <Image source={{uri:url}} style={styles.flatlist_image}/>
                    <View style={styles.flatlist_bar} >
                      <Text style={styles.flatlist_name} >{item.name}</Text>
                      <View style={styles.flatlist_bar_bottom} >
                        <Text style={styles.flatlist_rate} >{item.rating}/10</Text>
                        <Text style={styles.flatlist_location} >{item.location}</Text>
                      </View>                      
                    </View>                    
                </TouchableOpacity>                
                :                
                <Text>görsel yükleniyor</Text>
                }
            </View>
            
        )
    }

    const goDetail = (data) => {
      navigation.navigate("Detail",{
        drink: data.menu.drink,
        food: data.menu.food,
        name: data.name,
        photo: data.desc_photo_id,
        rating: data.rating
      })
    }

    return (
        <SafeAreaView  style={styles.container} >
        <StatusBar backgroundColor={"#eeebe5"} barStyle={"dark-content"} />
        <Modal transparent={true} animationType='slide' visible={visible}>
          <View style={styles.modal_container} >
            <View style={styles.modal_content} >
              <Text style={styles.modal_text} >Serhat Dağ tarafından hazırlanan bu aplikasyonda, tüm restaurant isimleri ve menüler hayal ürünü olup; fotoğraflar "unsplash.com" ve "pexels.com" sitelerinden temin edilmiştir. </Text>
              <TouchableOpacity style={styles.modal_touch} onPress={()=>(setVisible(false))} >
                <Text style={styles.modal_touch_text} >KAPAT</Text>
              </TouchableOpacity>
            </View>

            
            
          </View>
        </Modal>

        <View style={styles.logo_container}>
            <View style={styles.logo_view}>
            <Image style={styles.logo} source={require("../images/logo.png")} />
            </View>
            <View style={styles.logo_text_view} >          
            <Text style={styles.logo_text}>RESTAURANT</Text>
            <Text style={styles.logo_text}>REVIEW</Text>
            </View>
        </View>

        <View style={styles.search} >
            <TextInput
              style={styles.txt_input}
              placeholder='restaurant ara'
              value={text}
              onChangeText={
                (value)=>{
                  setText(value);                  
                }}
            />
        </View>

        <View style={styles.flatlist_view} >
            {
                <FlatList
                    data={text_data.length>0 ?text_data : basic_data }
                    renderItem={({item})=><FlatlistFunc item = {item} />}
                    keyExtractor={(item)=>item.id.toString()}
                    numColumns={2}
                    style={styles.flatlist}
                    columnWrapperStyle={styles.row}
                />
                
            }
        </View>
        </SafeAreaView>
        
    )
}

export default List;

