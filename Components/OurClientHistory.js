import React from 'react';
import {
    Text,
    View,
    StyleSheet, TouchableOpacity,Image
} from 'react-native';
import { AppColours,Icone_styles} from './ColourClass';
import Header from './Header';
import Icon from 'react-native-vector-icons/Entypo';


export default function OurClientHistory({navigation}) {
    return (
        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>
            <Header />
            <View >
                <Text style={[styles.Text_style, AppColours.Text_colours]}>
                    Our Testimonials
                </Text>
            </View>
            <Text style={[AppColours.Text_Description, styles.Text2_style]}>

                We have dozens of clients and endless success stories to boast of.
                So, it’s about time you get that right from the horse’s mouth.

            </Text>
            <View style={styles.Group1_view}>
                <View style={styles.Group_view} >
                    <Image style={styles.image_style}
                        source={require('../Components/src/yansel.png')}>
                    </Image>
                    <Text style={[styles.Name_Style, AppColours.Text_colours]}>
                        Yansel Sanchez CEO Doocado
                    </Text>
                    <Image style={styles.Image_star}
                        source={require('../Components/src/stars.png')}>
                    </Image>
                    <Text style={[AppColours.Text_Description, styles.Image_group_Des]}>
                        I have been working with hirepro for a couple of years.
                        It was more than just a requirement and project success thing to me.
                        It is also a relationship building with these technical geeks where
                        I feel comfortable to provide my all the projects and also set my mind at ease.
                    </Text>
                </View>

                <View style={styles.iconStyle}>
                    <Icon style={[Icone_styles.Icone_style_1,{backgroundColor:'#D2D2D2',color:'#D2D2D2'}]} name="circle" />
                    <Icon style={[Icone_styles.Icone_style_2,{backgroundColor:'#D2D2D2',color:'#D2D2D2'}]} name="circle" />
                    <Icon style={[Icone_styles.Icone_style_3,{backgroundColor:'#D2D2D2',color:'#D2D2D2'}]} name="circle" />
                    <Icon style={[Icone_styles.Icone_style_4,{backgroundColor:'#33BD94',color:'#33BD94'}]} name="circle" />
                </View>
                <TouchableOpacity style={[AppColours.Button_Proceed_Style, styles.btn_Style]}
                onPress={()=>navigation.navigate('ContactUs')}>
                    <Text style={AppColours.Button_Proceed_Text}>Give us a try!</Text>
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
        width: 217,
        height: 80,
        top: 42,
        left: 80,
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
    },
    Group1_view: {
        top: 15,
        flex: 2,
        height: 1700,
    },
    Group_view: {
        top: 15,
        backgroundColor: '#FFFFFF',
        width: 304,
        height: 276,
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
        top: 26,
        left: 34,
        borderRadius: 50,
        width: 60,
        height: 60
    },
    Name_Style: {
        width: 102,
        height: 46,
        left: 103,
        top: -20,
        //  lineHeight:11,
        fontWeight: 'bold',
    },
    Image_star: {
        top: -32.5,
        left: 104,
    },
    Image_group_Des: {
        width: 252.76,
        height: 148.46,
        top: -15,
        textAlign: 'justify',
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Metropolis',
        lineHeight: 16,
    },
    Group2_view: {
        top: 57,
        height: 416,
    },

    Group3_view: {
        top: 92,
        height: 356,
    },
    Group4_view: {
        top: 132,
        height: 356,
    },
    btn_Style: {
        left: 30,
        top: 115
    },
    iconStyle:{
        width:39,
        height:9.55,
        left:195,
        top:100,        
    }

})

