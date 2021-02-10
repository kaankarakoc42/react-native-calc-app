import { StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';

var styles=StyleSheet.create({
container:{
flex:1,
top:StatusBar.currentHeight
},
title:{
    height:"10%",
    borderWidth:1,
    borderColor:"black",
    alignItems:"center",
    justifyContent:"center"
},
titleText:{
    fontSize:22
},
resultContainer:{
    height:"40%",
    borderWidth:1,
    borderColor:"black",
    alignItems:"center",
    justifyContent:"center"
},
tabsField:{
height:"50%",
flexDirection:"column",
},

tabText:{
    fontSize:20,
}
})

export default styles;