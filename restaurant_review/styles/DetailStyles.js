import { StyleSheet } from "react-native";
import { width } from "../components/Detail";
import { height } from "../components/Detail";

export const styles = StyleSheet.create({
    container:{
      backgroundColor: "#eeebe5",
      flex:1,
      padding:"5%"
    },
    logo_container:{
      width:"100%",
      height: (height*10)/100, //klavye açıldığında yüksekliği değişmesin diye bu tenkikte dinamik yükseklik değeri verdim
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    logo_view:{
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
    },
    logo:{
      resizeMode:"cover",
      height:(height*10)/100,
      width:(height*10)/100,
      borderRadius: width /20
    },
      logo_text_view:{
      justifyContent:"center",
      marginLeft: "-13%"
    },
    logo_text:{    
      fontFamily:"comic_sans",
      color:"#000405",
      fontSize:22,
    },
    back_icon:{
        color:"#000405",
    },
    rating:{
        fontFamily:"comic_sans",
        color:"#000405",
        fontSize: width/25,
        position:"absolute",
        top: (height*10)/100
    },
    content_container:{
      width:"100%",
      height:"85%",
      marginTop:"10%"
    },
    menu_text:{
      alignSelf:"center",
      fontFamily:"comic_sans",
      fontSize: width/15,
      color:"#6F4E37"
    },
    title_text:{
      alignSelf:"flex-start",
      fontFamily:"comic_sans",
      fontSize: width/18,
      color:"#6F4E37"
    },
    flatlist_food:{
      width:"100%",
      height:"100%",
    },
    flatlist_food_container:{
      width:"100%",
      height:"45%",
      
      
    },
    flatlist_drink_container:{
      width:"100%",
      height:"45%",
      marginTop:"5%"
    },
    flatlist_drink:{
      width:"100%",
      height:"100%",
    },
    flatlist_food_view:{
      backgroundColor: "#eeebe5",
      flexDirection:"row",
      alignItems:"center",
      paddingHorizontal:"3%",
      width:"100%",
      position:"relative",
      justifyContent:"space-between",
      height:(height*10)/100, borderRadius:width/35,
      marginVertical:"2.5%", 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    food_name:{
      color:"#6F4E37",
      fontFamily:"comic_sans",
      fontSize: width/25
    },
    food_price:{
      color:"#6F4E37",
      fontFamily:"comic_sans",
      fontSize: width/25
    },
    flatlist_image:{
      width:(height*8)/100, height:(height*8)/100, position:"absolute", marginLeft:((width*50)/100)-(((height*8)/100)/1.5), borderRadius:width/35
    },
    loading:{
      position:"absolute",marginLeft:"50%"
    }
    
  })