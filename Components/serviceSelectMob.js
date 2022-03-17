import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet, Image, TouchableOpacity, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'

import { AppColours } from './ColourClass';
import Header from './Header';


export default function ServiceSelectMob({ navigation }) {
    return (

        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>
            <Header />
            <Text style={[AppColours.Text_colours, styles.Style_Text]}>
                Our core services include:
            </Text>

            <View style={styles.All_Button_container} >


                <TouchableOpacity style={styles.Button_style} >
                    <Text style={styles.Button_Text}>Web Development</Text>
                    <Fontisto style={[AppColours.Main_Color_Header_icon, styles.image_Style]} size={19} name="world-o" />
                    <Icon style={[AppColours.Main_Color_Header_icon, styles.image_tick_style]} size={19} name="checkcircleo" />
                </TouchableOpacity>

                <TouchableOpacity style=
                    {[AppColours.Button_style, styles.Style_Mobile, AppColours.MainColours]}
                >

                    <Text style={[AppColours.Button_Text, { color: '#FFFF' }]}>Mobile App Development</Text>
                    <Icon style={[AppColours.Main_Color_Header_icon, styles.image_Style, { color: '#FFFF' }]} size={19} name="mobile1" />
                    <Icon style={[AppColours.Main_Color_Header_icon, styles.image_tick_style, { color: '#FFFF' }]} size={19} name="checkcircleo" />
                </TouchableOpacity>

                <TouchableOpacity style={[AppColours.Button_style, styles.Style_Net]}>
                    <Text style={AppColours.Button_Text}>.Net Development</Text>
                    <Image style={styles.Image_view}
                        source={require('../Components/src/dotnet.png')}>
                    </Image>
                    <Icon style={[AppColours.Main_Color_Header_icon, styles.image_tick_style]} size={19} name="checkcircleo" />
                </TouchableOpacity>

                <TouchableOpacity style={[AppColours.Button_style, styles.Style_Graphic]}
                    onPress={() => navigation.navigate('ServiceSelectGraphic')}>
                    <Text style={AppColours.Button_Text}>Graphic Designing</Text>
                    <Image style={styles.Image_view}
                        source={require('../Components/src/graphic.png')}>
                    </Image>
                    <Icon style={[AppColours.Main_Color_Header_icon, styles.image_tick_style]} size={19} name="checkcircleo" />
                </TouchableOpacity>

                <TouchableOpacity style={[AppColours.Button_style, styles.Style_SQA]}>
                    <Text style={AppColours.Button_Text}>SQA Services</Text>
                    <Image style={styles.Image_view}
                        source={require('../Components/src/sqa.png')}>
                    </Image>

                    <Icon style={[AppColours.Main_Color_Header_icon, styles.image_tick_style]} size={19} name="checkcircleo" />
                </TouchableOpacity>

                <TouchableOpacity style={[AppColours.Button_style, styles.Style_PM]}>
                    <Text style={AppColours.Button_Text}>Project Management</Text>
                    <Image style={styles.Image_view}
                        source={require('../Components/src/projectmanagement.png')}>
                    </Image>
                    <Icon style={[AppColours.Main_Color_Header_icon, styles.image_tick_style]} size={19} name="checkcircleo" />
                </TouchableOpacity>

                <TouchableOpacity style={[AppColours.Button_style, styles.Style_Digital]}>
                    <Text style={AppColours.Button_Text}>Digtal Marketing</Text>
                    <Image style={styles.Image_view}
                        source={require('../Components/src/digital.png')}>
                    </Image>
                    <Icon style={[AppColours.Main_Color_Header_icon, styles.image_tick_style]} size={19} name="checkcircleo" />
                </TouchableOpacity>

                <TouchableOpacity style={[AppColours.Button_Proceed_Style, styles.Btn_View]}>
                    <Text style={AppColours.Button_Proceed_Text}>Proceed</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    Page_Main_view: {
        flex: 1,
    },
    Style_Text: {
        width: 331,
        height: 26,
        top: 27,
        left: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 26,
        fontStyle: 'normal',
        fontFamily: 'Metropolis'
    },
    All_Button_container: {
        width: 304,
        height: 600,
        left: 37,
        top: 40,
    },
    image_Style: {
        left: 14,
        top: -7
    },
    image_tick_style: {
        left: 270,
        top: -26
        //  top:-24,
    },
    Style_Mobile: {
        top: 20,
    },
    Style_Net: {
        top: 40,
    },
    Style_Graphic: {
        top: 60,
    },
    Style_SQA: {
        top: 80,
    },
    Style_PM: {
        top: 100,
    },
    Style_Digital: {
        top: 120,
    },

    Btn_View: {
        top: 160,
    },
    Image_view: {
        left: 14,
        top: -6,

    },


    Button_style: {

        width: 304,
        height: 50,
        borderRadius: 7,
        backgroundColor: '#EFFFFA',

        // backgroundColor:'red'
    },
    Button_Text: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
        top: 15,
        lineHeight: 20,

    },

})

