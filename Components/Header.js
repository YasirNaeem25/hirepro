import React from 'react';
import {
    View,
    StyleSheet,TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { AppColours} from './ColourClass';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
    const navigation = useNavigation();


    return (
        
        

        <View style={[styles.Page_Main_view,AppColours.Header_color]}  >
             <StatusBar backgroundColor="#E5E5E5"  />
             <TouchableOpacity onPress={()=> navigation.openDrawer()}>
             
             <Icon style={[styles.icone_style,AppColours.Main_Color_Header_icon]} name="three-bars" />
             </TouchableOpacity>
        </View>

    );
};
const styles = StyleSheet.create({
    Page_Main_view: { 
        height:50,            
    },
    icone_style:{
        fontSize:30,
        top:22,
        height:28,
        width:24,
       left:26.6,
        
    }

})


