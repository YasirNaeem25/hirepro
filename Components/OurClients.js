import React from 'react';
import {
    Text,
    View,
    StyleSheet, TouchableOpacity, ScrollView, Image
} from 'react-native';
import { AppColours } from './ColourClass';
import Header from './Header';

export default function OurClient({navigation}) {
    return (
        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>
            <ScrollView style={styles.scroll_view_style}>
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

                    <View style={[styles.Group_view, styles.Group2_view]} >
                        <Image style={styles.image_style}
                            source={require('../Components/src/paal.png')}>
                        </Image>
                        <Text style={[styles.Name_Style, AppColours.Text_colours]}>
                            Paal Gulliksen CEO DineHome
                        </Text>
                        <Image style={styles.Image_star}
                            source={require('../Components/src/stars.png')}>
                        </Image>

                        <Text style={[AppColours.Text_Description, styles.Image_group_Des, { height: 289, }]}>
                            HirePro operations team including developers and designers that has been
                            working on a huge project in Norway named DineHome.
                            They have built a huge and complicated website, Android app and IOS app, optimising our SEO. Hire Pro has a highly competent team who is working hard to reach my goals and the quality / support I want. They provided almost a 24h fast and professional service. DineHome can highly recommend HirePro developers and the other value. for those who need advanced technical service,
                            SEO optimising and Digital marketing and we will of course continue to work with them.
                        </Text>

                    </View>

                    <View style={[styles.Group_view, styles.Group3_view]} >
                        <Image style={styles.image_style}
                            source={require('../Components/src/lars.png')}>
                        </Image>
                        <Text style={[styles.Name_Style, AppColours.Text_colours]}>
                            Lars {'\n'}CEO AGS
                        </Text>
                        <Image style={styles.Image_star}
                            source={require('../Components/src/stars.png')}>
                        </Image>

                        <Text style={[AppColours.Text_Description,
                        styles.Image_group_Des, { height: 246, lineHeight: 18 }]}>
                            I have found HirePro with references and
                            my all tasks are complicated calculation based solution and
                            this was the reason for my restlessness.
                            HirePro have not only covered this project and also
                            make me restful enough to give my other projects as well
                            on a regular basis.Not only just quality I was amazed by
                            seeing the price of the Pro Level developers.
                            It would be a very reasonable deal if anybody wanted to hire Professionals.
                        </Text>

                    </View>

                    <View style={[styles.Group_view, styles.Group4_view]} >
                        <Image style={styles.image_style}
                            source={require('../Components/src/martin.png')}>
                        </Image>
                        <Text style={[styles.Name_Style, AppColours.Text_colours]}>
                            Martin{'\n'}PM Splinter
                        </Text>
                        <Image style={styles.Image_star}
                            source={require('../Components/src/stars.png')}>
                        </Image>

                        <Text style={[AppColours.Text_Description,
                        styles.Image_group_Des, { height: 246, lineHeight: 18 }]}>
                            I have found HirePro with references and my
                            all tasks are complicated calculation based solution
                            and this was the reason for my restlessness.
                            HirePro have not only covered this project and also make me restful enough
                            to give my other projects as well on a regular basis.
                            Not only just quality I was amazed by seeing the price of the Pro Level developers.
                            It would be a very reasonable deal if anybody wanted to hire Professionals.
                        </Text>

                    </View>

                    <TouchableOpacity style={[AppColours.Button_Proceed_Style, styles.btn_Style]}
                    onPress={()=>navigation.navigate('OurClientHistory')}>
                        <Text style={AppColours.Button_Proceed_Text}>Give us a try!</Text>
                    </TouchableOpacity>




                </View>




            </ScrollView>
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
        top: 215

    },

})

