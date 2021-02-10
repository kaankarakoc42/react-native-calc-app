import React from 'react';
import {Text,View,TouchableOpacity,Dimensions} from 'react-native';
import styles from './styles'

const w=Dimensions.get("window").width
const h=Dimensions.get("window").height

class CalcApp extends React.Component{
  constructor(props){
   super(props)
   this.props=props
   this.state={
     result:""
   }
   this.createTabs=this.createTabs.bind(this)
   this.exec=this.exec.bind(this)
  }

  createTabs(...tabs){
    var tabslist=[]
    for(var i=0;i<tabs.length;i++){
      var rows=[]
      var tabstyle={width:w/tabs[i].length,height:(h*(5/10))/tabs.length, borderWidth:1,borderColor:"black",alignItems:"center",backgroundColor:"lightgray", justifyContent:"center",alignContent:"center"}
      for(var ii=0;ii<tabs[i].length;ii++){
       const tab=tabs[i][ii]
       rows.push(
         <TouchableOpacity onPress={()=>{this.setState({result:this.state.result+tab})}} key={tabs[i][ii]} style={tabstyle}>
           <Text style={styles.tabText}>{tab}</Text>  
         </TouchableOpacity>
       )
       }
       tabslist.push(<View key={rows[0].key} style={{flexDirection:"row"}}>{rows}</View>)
    }
    return tabslist

  }

  equal(res){
    try
    {
      this.setState({result:eval(res.replace("=","")).toString()})
    }
    catch
    {
      this.setState({result:"HATA"})
      setTimeout(()=>{this.setState({result:""})},2000)
    }
  }
  
  clear(){
    this.setState({result:""})
  }
  back(){
    this.setState({result:this.state.result.slice(0,this.state.result.length-5)})
  }
  exec(){
    var res = this.state.result
    res=res.replace("x"," * ")
    res=res.replace("÷"," / ")
    res=res.replace("HATA"," ")
    res=res.replace("^"," ** ")
    if(res.includes("Back"))
      this.back()
    if(res.includes("C"))
      this.clear()
    if(res.includes("="))
      this.equal(res)

    
    return this.state.result
  }

  render(){
    return(
    <View style={styles.container}>

        <View style={styles.title}>
            <Text  style={styles.titleText}>Hesap makinesi</Text>
        </View>

        <View style={styles.resultContainer}>
           <Text  style={{fontSize:25}}>{this.exec()}</Text>
        </View>

        <View style={styles.tabsField}>
             {this.createTabs(["C","Back","="],["1","2","3","÷"],["4","5","6","x"],["7","8","9","^"],["+","0","-","="])}
        </View>

    </View>
    )
  }


}


export default CalcApp;