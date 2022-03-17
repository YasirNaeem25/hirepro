import React from 'react';
import {
    Text,
    View,
    StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { AppColours, Icone_styles,SplasherScreen3_Style} from './ColourClass';

export default function SplashScreen3({navigation}) {
    return (
       
        <View style={[styles.Page_Main_view, AppColours.MainColours]}  >

            <View style={SplasherScreen3_Style.Skip_View_Style}>
                <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen4')}>
                    <Text style={SplasherScreen3_Style.Skip_Text_Style}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={SplasherScreen3_Style.HireIt_View_Style}>
                <Text style={SplasherScreen3_Style.HireIt_Text_Style}>Quick,Easy,and Seamless !
                </Text>
                <Text style={SplasherScreen3_Style.Description_Text_Style}>We showcase to you the best talent pool.You choose{'\n'}
                    the best resources according to your needs & budget, {'\n'}
                    that’s all about it. That’s all it takes to hire certified{'\n'}
                    professionalswith HirePro.
                </Text>

                <View style={SplasherScreen3_Style.Image_View_style}>
                    <Image style={SplasherScreen3_Style.Image_Style} source={require('../Components/src/splashscreen3pic.png')}></Image>
                </View>
            </View>
            <View style={SplasherScreen3_Style.icon_View_Style}>
                <Icon style={Icone_styles.Icone_style_1} name="circle" />
                <Icon style={[Icone_styles.Icone_style_2,styles.colour]} name="circle" />
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


