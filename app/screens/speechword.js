import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput ,TouchableOpacity,Text,ImageBackground,ScrollView,Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';
import React from 'react';
import dataspeech from '../../dataspeech';
import { render } from 'react-dom';

const {width:WIDTH} =Dimensions.get('window');
export default function speechword() {
  
    
  const [name, setName] = React.useState("");

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  React.useEffect(listAllVoiceOptions);

   speakGreeting=(a)=>{
      const greeting = ` `+a;
      const options = {
        voice: "en-us-x-sfg-local",
        pitch: 1.2,
        rate: 0.5
      };
      Speech.speak(greeting, options)
  };


  return (
      
    <ImageBackground style = {styles.vw1a} source={{uri:'https://w0.peakpx.com/wallpaper/194/510/HD-wallpaper-just-study-saying.jpg'}}>
        <LinearGradient colors={[ '#6bdb919e' , '#6bdb919e' , '#73e9bb9e' , '#b9f5dc9e']} style={styles.container}> 
        <View style={{ backgroundColor:'#e2e9e5',width:'100%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{justifyContent:'center',}}>
          <Text style={{fontSize:40}}>{dataspeech.user.id}</Text>
        </View>
        </View>
     <ScrollView >
     {
                                
                                [...Array(10)].map((o,n) => {
                                   
                                    return(
                            
                            
                                <View key={n} style={styles.container}>
   
                                        <View style={{flexWrap:'wrap',flexDirection:'row'}}>
                                                       <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
                                                                <View style={{flex:1,justifyContent:'center',}}>
                                                                        <Text style={{fontSize:25}}>{dataspeech.user.list[n].word}</Text>
                                                                </View>
                                                                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                                                            
                                                                            <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                                                                                      <Text>{dataspeech.user.list[n].speak}</Text>
                                                                            </View>
                                                                            <View style={{flex:1,alignItems:'center'}}>
                                                                                    <TouchableOpacity onPress={()=>speakGreeting('bin')}>
                                                                                            <Text style={{fontSize:25}}>🔈 </Text>                          
                                                                                    </TouchableOpacity>
                                                                            </View>
                                                                        </View>
                                                                        <View style={{flex:1,justifyContent:'center'}}>
                                                                                     <Text>{dataspeech.user.list[n].mean}</Text>
                                                                        </View>
                                                          </View>
                                        </View>
                                        
                                </View>
                            
                                
                                         )
                                               
                                                            }
                                                  )
                            }
 
</ScrollView>
    
    </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  vw1a:{
    height:'100%',
    width:'100%',
    zIndex:100,
    flexDirection:'column',
    borderRadius:20,
},
  input: {
    alignSelf: 'stretch',
    height: 20,
    borderBottomWidth: 2,
    borderBottomColor: "red",
    margin: 8
  }
});
