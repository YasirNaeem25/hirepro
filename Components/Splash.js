import React, { useEffect ,useState} from 'react';
import {
  Text,
  View,
  StyleSheet, Image,StatusBar
} from 'react-native';

import { AppColours } from './ColourClass';


export default function Splash({ navigation }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('SplashScreen2')
      
    }, 3000);
  }, [])


  return (
    
    
    <View style={[styles.MainView, AppColours.MainColours]}  >
      <StatusBar backgroundColor='#33BD94'/>
      <Image style={styles.logoView} source={require('../Components/src/applogo.jpg')}></Image>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({

  MainView: {
    flex: 1,
  },
  logoView: {
    position: 'absolute',
    width: 195.95,
    height: 47,
    left: 90,
    top: 309,
    right: 116.4,
    alignItems: 'center',
    justifyContent: 'center',


  }




})


