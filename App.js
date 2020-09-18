import React, { Component } from 'react';
import { Button, StyleSheet, View, TouchableOpacity, Alert,Text} from 'react-native';


export default class ButtonExample extends Component {
  constructor() {
    super();
    this.state = {
      pirmas:true,
      antras:true,
      trecias:true,
      ketvirtas:true,
    };
  }
 
  changeColor1(){
    if (this.state.pirmas===true)
    {
      this.setState({
        pirmas:false,
      });
      this.ChangeColorFunction()
    }
    else if (this.state.pirmas===false)
    {
      this.setState({
        pirmas:true,
      });
      
    }
  }
  changeColor2(){
    if (this.state.antras===true)
    {
      this.setState({
        antras:false,
      });
      this.ChangeColorFunction()
    }
    else if (this.state.antras===false)
    {
      this.setState({
        antras:true,
      });
      
    }
    
  }
  changeColor3(){
    if (this.state.trecias===true)
    {
      this.setState({
        trecias:false,
      });
      this.ChangeColorFunction()
    }
    else if (this.state.trecias===false)
    {
      this.setState({
        trecias:true,
      });
      
    }
    
  }
  changeColor4(){
    if (this.state.ketvirtas===true)
    {
      this.setState({
        ketvirtas:false,
      });
      this.ChangeColorFunction()
    }
    else if (this.state.ketvirtas===false)
    {
      this.setState({
        ketvirtas:true,
      });
      
    }
    
  }

  ChangeColorFunction=()=>
  {
  var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  this.setState({
  ColorHolder : ColorCode
  })
  }

  render() {
    const color1=this.state.pirmas?'black':this.state.ColorHolder;
    const color2=this.state.antras?'black':this.state.ColorHolder;
    const color3=this.state.trecias?'black':this.state.ColorHolder;
    const color4=this.state.ketvirtas?'black':this.state.ColorHolder;
    
    return (
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <Button
          onPress={() =>this.changeColor1() }
            title="Button1"
            color='green' 
          />
          <Button
          onPress={() =>this.changeColor2() }
            title="Button2"
            color='green'
          />
          <Button
          onPress={() =>this.changeColor3() }
            title="Button3"
            color='green'
          />
          <Button
          onPress={() =>this.changeColor4() }
            title="Button4"
            color='green'
          />
        </View>
        
        <View style={styles.boxContainer}>
          <TouchableOpacity 
          style={{height:35,backgroundColor:color1,justifyContent:'center'}}>
            <Text style={{color:'white',textAlign:'center',fontSize:25}}>Box1</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{height:35,backgroundColor:color2,justifyContent:'center'}}>
            <Text style={{color:'white',textAlign:'center',fontSize:25}}>Box2</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{height:35,backgroundColor:color3,justifyContent:'center'}}>
            <Text style={{color:'white',textAlign:'center',fontSize:25}}>Box3</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{height:35,backgroundColor:color4,justifyContent:'center'}}>
            <Text style={{color:'white',textAlign:'center',fontSize:25}}>Box4</Text>
          </TouchableOpacity> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: "yellow",
    borderRadius: 10,
  },
   buttonContainer: {
     flex:1,
     backgroundColor: 'pink',
     flexDirection: 'column',
     justifyContent: 'space-around',
     alignItems: 'center',
     
  },
  boxContainer:{
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});


