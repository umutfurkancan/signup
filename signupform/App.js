

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
     <View style={styles.kutu}>
     <Text style={styles.yazi}>FACEBOOK</Text>
        <TextInput style={styles.icerik} placeholder="Kullanıcı Adı" 
        underlineColorAndroid={'transparent'} />
        <TextInput style={styles.icerik} placeholder="E-mail" />
        <TextInput style={styles.icerik} placeholder="Şifre" 
        secureTextEntry={true}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Kayıt Ol</Text>


        </TouchableOpacity>


     </View>
    </>
  );
};

const styles = StyleSheet.create({
  kutu:{
    alignSelf:'stretch',
    flex:1,
    backgroundColor:'#3333CC',
    alignItems:'center',
    justifyContent:'center',
    paddingLeft:30,
    paddingRight:60,
    
    
   
  },
  yazi:{
    color:'#fff',
    fontSize:24,
    paddingBottom:10,
    marginBottom:40,
    borderBottomColor:'#199187',
    borderBottomWidth:1,
  },
  icerik:{
    color:'#fff',
    fontSize:15,
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    borderBottomWidth:1,
    borderBottomColor:'#f8f8f8'
  },
  button:{
  alignSelf:'stretch',
  alignItems:'center',
  padding:10,
  backgroundColor:'#FF0000',
  marginTop:30,
  }






});

export default App;
