import React from 'react';
import {
    Text,
    View,
    StyleSheet, Image, TouchableOpacity, Button, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { AppColours, Icone_styles, SplasherScreen5_Style, ButtonStyle } from './ColourClass';

export default function SplashScreen5({navigation}) {
    return (

        <View style={[styles.Page_Main_view, AppColours.MainColours]}  >
            <StatusBar backgroundColor="#33BD94" />
            <Text style={SplasherScreen5_Style.Text_style}>Your journey to hire experienced
                professionals seamlessly begins here with HirePro.
            </Text>

            <View style={SplasherScreen5_Style.Group_View_text}>

                <Text style={SplasherScreen5_Style.Text_Style_You_share}>
                    You Share, We Care
                </Text>
                <Text style={SplasherScreen5_Style.Text_Style_Hire_pro}>
                    On HirePro, You share your concerns with us.
                    We dig deep into your issues, identify your hiring goals,
                    and spin the roulette wheel.
                </Text>
                <Image
                    source={require('../Components/src/rectangle.png')}>
                </Image>
                <Image style={SplasherScreen5_Style.Style_Bulb}
                    source={require('../Components/src/bulb.png')}>
                </Image>
                <Image style={SplasherScreen5_Style.Style_Line}
                    source={require('../Components/src/vectorLine.png')}>
                </Image>

                <Text style={SplasherScreen5_Style.Text_Style_Pick_choose}>
                    Pick ‘n Choose
                </Text>
                <Text style={SplasherScreen5_Style.Text_Style_ShowCase}>
                    We showcase you the best of our resources
                    and All you need to do is go through their
                    profile and hire an IT professional
                    that suits you best.
                </Text>
                <Image style={SplasherScreen5_Style.Style_Rectangle2}
                    source={require('../Components/src/rectangle.png')}>
                </Image>
                <Image style={SplasherScreen5_Style.Style_LetterPad}
                    source={require('../Components/src/letterPad.png')}>
                </Image>
                <Image style={SplasherScreen5_Style.Style_Line2}
                    source={require('../Components/src/vectorLine.png')}>
                </Image>

                <Text style={SplasherScreen5_Style.Text_Style_sitBack}>
                    Sit Back and Relax
                </Text>
                <Text style={SplasherScreen5_Style.Text_Style_Professional}>
                    With our top-notch professionals at your disposal,
                    all you need to do is sit back and relax.
                    They know their job well and make sure to
                    go above and beyond your expectations.
                </Text>
                <Image style={SplasherScreen5_Style.Style_Rectangle3}
                    source={require('../Components/src/rectangle.png')}>
                </Image>
                <Image style={SplasherScreen5_Style.Style_db}
                    source={require('../Components/src/db2.png')}>
                </Image>
                <Image style={SplasherScreen5_Style.Style_db}
                    source={require('../Components/src/db.png')}>
                </Image>
                <Image style={SplasherScreen5_Style.Style_db}
                    source={require('../Components/src/db.png')}>
                </Image>
            </View>

            <TouchableOpacity style={ButtonStyle.buttonsContainer} onPress={()=>navigation.navigate('Home')} >
                <Text style={ButtonStyle.Btn_Text_Style} >Let's Hire Pro</Text>
            </TouchableOpacity>


            <View style={SplasherScreen5_Style.icon_View_Style}>
                <Icon style={Icone_styles.Icone_style_1} name="circle" />
                <Icon style={Icone_styles.Icone_style_2} name="circle" />
                <Icon style={Icone_styles.Icone_style_3} name="circle" />
                <Icon style={[Icone_styles.Icone_style_4, SplasherScreen5_Style.colour]} name="circle" />
            </View>


        </View>

    );
};

const styles = StyleSheet.create({
    Page_Main_view: {
        flex: 1
    },

})


