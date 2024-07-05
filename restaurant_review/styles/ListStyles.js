import { StyleSheet } from "react-native";
import { width } from "../components/List";
import { height } from "../components/List";

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
    },
    logo_view:{
      justifyContent:"center",
      alignItems:"center",
    },
    logo:{
      resizeMode:"contain",
      height:(height*10)/100,
      width:(height*10)/100,
      borderRadius: width /20
    },
      logo_text_view:{
      justifyContent:"center",
      marginLeft: "5%"
    },
    logo_text:{    
      fontFamily:"comic_sans",
      color:"#000405",
      fontSize:22,
    },
    search:{
      backgroundColor: "#eeebe5",    
      borderRadius: width / 24,
      width:"100%",
      height:(height*5)/100,
      marginTop: (height*5)/100,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
  
      elevation: 6,
      
    },
    txt_input:{
      backgroundColor: "#eeebe5",
      width:"100%",
      maxWidth:"100%",
      height:(height*5)/100,
      borderWidth:1,
      borderColor:"#67645c",
      borderRadius: width / 24,
      paddingHorizontal: "5%"
    },
    flatlist_view:{
      width:"100%",
      height: (height * 71) /100,
      marginTop: "10%",
      paddingBottom:(height*2)/100
    },
    flatlist:{
      width:"100%",
      height:"100%",
    },
    row: {
      flex: 1,
      justifyContent: 'space-between'    
    },
    flatlist_touch:{
      flex:1,
      borderRadius:width/30,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,                  
      elevation: 5
    },
    flatlist_image:{
      aspectRatio: 1,
      width:"100%",
      borderRadius: width/30,
    },
    flatlist_bar:{
      backgroundColor:"#f8f4ec",
      width:"100%",
      height:(height*10)/100,
      borderRadius:width/30,
      marginTop:-(height*3)/100,
      justifyContent:"space-around",
      alignItems:"center",
      position:"relative"
    },
    flatlist_name:{
      fontFamily:"comic_sans",
      color:"#000405",
      fontSize:width/25,
      maxWidth:"100%"
    },
    flatlist_rate:{
      fontFamily:"comic_sans",
      color:"#000405",
      
    },
    flatlist_container:{
      width:"50%",
      padding:"3%"
    },
    flatlist_location:{    
      color:"red",
      fontFamily:"comic_sans",
    },
    flatlist_bar_bottom:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%"
    },
    modal_container:{
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    },
    modal_content:{
      width:"80%",
      height:"80%",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"white",
      borderRadius:width/20,
      paddingHorizontal:"5%",
      position:"relative"
    },
    modal_text:{
      fontFamily:"comic_sans",
      color:"#000405",
      fontSize: width/20,
      textAlign:"justify"
    },
    modal_touch:{
      position:"absolute",
      bottom:"5%",
      backgroundColor:"#000405",
      width:"30%",
      height:"5%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: width/60
    },
    modal_touch_text:{
      color:"white"
    }
    
  })