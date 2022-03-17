import React from 'react';
import {
    Text,
    View,
    StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { AppColours,SplasherScreen2_style ,Icone_styles } from './ColourClass';

export default function SplashScreen2({navigation}) {
    return (
        <View style={[styles.Page_Main_view, AppColours.MainColours]}  >

            <View style={SplasherScreen2_style.Skip_View_Style}>
                <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen3')}>
                    <Text style={SplasherScreen2_style.Skip_Text_Style}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={SplasherScreen2_style.HireIt_View_Style}>
                <Text style={SplasherScreen2_style.HireIt_Text_Style}>Hire IT Professionals
                    {'\n'}

                    at very affordable prices.
                </Text>
                <Text style={SplasherScreen2_style.Description_Text_Style}>Make   the   most of  HirePro’s  150+  Seasoned  IT{'\n'}
                    Professionals   to   Boost   Your   Online   Presence. {'\n'}
                    HirePro has experts   who usher ease  of  mind  for{'\n'}
                    you.
                </Text>

                <View style={SplasherScreen2_style.Image_View_style}>
                    <Image style={SplasherScreen2_style.Image_Style} source={require('../Components/src/splashscreen2.png')}></Image>
                </View>
            </View>
            <View style={SplasherScreen2_style.icon_View_Style}>

                <Icon style={[Icone_styles.Icone_style_1,styles.colour]} name="circle" />
                <Icon style={Icone_styles.Icone_style_2} name="circle" />
                <Icon style={Icone_styles.Icone_style_3} name="circle" />
                <Icon style={Icone_styles.Icone_style_4} name="circle" />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    Page_Main_view: {
        flex: 1
    },
    colour:{
        backgroundColor:'#ffff',
        color:'#ffff'
    },
})


