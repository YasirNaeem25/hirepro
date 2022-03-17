import React from 'react';
import {
    Text,
    View,
    StyleSheet, TouchableOpacity,Image
} from 'react-native';

import { AppColours } from './ColourClass';
import Header from './Header';
export default function ContactUs({navigation}) {
    return (
        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>

            <Header />
            <View >
                <Text style={[styles.Text_style, AppColours.Text_colours]}>
                    Feel Free to Contact Us!
                </Text>
            </View>

            <View style={styles.Group1_view}>
                <View style={styles.Group_view} >
                    <Image style={styles.image_style}
                        source={require('../Components/src/letter.png')}>
                    </Image>
                    <Text style={[styles.Name_Style]}>
                        Simply drop us an email at{'\n'}

                        <Text style={[styles.Text_Box1, AppColours.Text_colours]}>
                            hello@letshirepro. com </Text>{'\n'}

                        You'll receive a reply within 24 hours.
                    </Text>

                </View>

                <View style={[styles.Group_view, { top: 90 }]} >
                    <Image style={styles.image_style}
                        source={require('../Components/src/phone.png')}>

                    </Image>

                    <Image style={styles.Group_2_image}
                        source={require('../Components/src/dial.png')}>
                    </Image>

                    <Text style={[styles.Name_Style2]}>
                        Give us a ring at{'\n'}

                        <Text style={[styles.Text_Box1, AppColours.Text_colours]}>
                        +92 303 0279747 </Text>{'\n'}Our experts are standing by 24 hours {'\n'} from 9 AM to 9 PM EST.
                    </Text>

                </View>
                <TouchableOpacity style={[AppColours.Button_Proceed_Style,styles.btn_Style]}
                onPress={()=>navigation.navigate('TermsConditions')}>
                    <Text style={AppColours.Button_Proceed_Text}>Lets Quote Us !</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    Page_Main_view: {
        flex: 1,
        backgroundColor: 'grey',
    },
    scroll_view_style: {
        flex: 2,
        left: -5,
    },
    Text_style: {
        width: 310,
        height: 26,
        top: 42,
        left: 30,

        fontFamily: ' Metropolis',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 26,
        textAlign: 'center',
    },
    Group1_view: {
        top: 15,
        flex: 2,
        height: 1700,
    },
    Group_view: {
        top: 65,
        backgroundColor: '#FFFFFF',
        width: 304,
        height: 212,
        left: 30,
        borderRadius: 7,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,

    },
    Text2_style: {
        width: 304,
        height: 105,
        top: 25,
    },
    image_style: {
        top: 32,
        left: 115,
        borderRadius: 50,
        width: 74,
        height: 74
    },
    Name_Style: {
        color:'#949494',
        width: 304,
        height: 60,
        left: 4,
        top: 35,
        lineHeight: 21,
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
    },
    Text_Box1: {
        padding: 5,
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 23,
    },

    Group_2_image: {
        left: 140,
        top: -20
    },
    Name_Style2:{
        top:5,
        width:336,
        height:80,
        left:-12,
        fontSize:16,
        textAlign:'center',
        color:'#949494',  
    },
    btn_Style: {
        left: 30,
        top: 145,

    },

})

