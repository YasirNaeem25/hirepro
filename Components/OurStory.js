import React from 'react';
import {
    Text,
    View,
    StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';
import { AppColours } from './ColourClass';
import Header from './Header';

export default function OurStory() {
    return (
        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>
            <ScrollView style={styles.scroll_view_style}>
                <Header />
                <View >
                    <Text style={[styles.Text_style, AppColours.Text_colours]}>
                        We Would like to Share{'\n'} Our Achievements with you:
                    </Text>
                </View>

                <View style={styles.Group1_view}>
                    <Text style={[{ fontWeight: 'bold', textAlign: 'center', fontSize: 28, top: 45, },
                    AppColours.Text_colours]}>5+
                    </Text>
                    <Text style={[styles.Group1_Text_1, AppColours.Text_colours]}>Years in Business</Text>
                </View>

                <View style={styles.Group2_view}>
                    <Text style={[{ fontWeight: 'bold', textAlign: 'center', fontSize: 28, top: 45, },
                    AppColours.Text_colours]}>150+
                    </Text>
                    <Text style={[styles.Group1_Text_1, AppColours.Text_colours]}>Team Members</Text>
                </View>

                <View style={styles.Group3_view}>

                    <View style={styles.Group1_view}>
                        <Text style={[{ fontWeight: 'bold', textAlign: 'center', fontSize: 28, top: 45, },
                        AppColours.Text_colours]}>20+
                        </Text>
                        <Text style={[styles.Group1_Text_1, AppColours.Text_colours]}>Worldwide Clients</Text>
                    </View>

                    <View style={styles.Group2_view}>
                        <Text style={[{ fontWeight: 'bold', textAlign: 'center', fontSize: 28, top: 45, },
                        AppColours.Text_colours]}>50+
                        </Text>
                        <Text style={[styles.Group1_Text_1, AppColours.Text_colours]}>Projects Completed</Text>
                    </View>
                </View>

                <View style={styles.Group4_view}>

                    <View style={styles.Group1_view}>
                        <Text style={[{ fontWeight: 'bold', textAlign: 'center', fontSize: 28, top: 45, },
                        AppColours.Text_colours]}>300+
                        </Text>
                        <Text style={[styles.Group1_Text_1, AppColours.Text_colours]}>Active Users</Text>
                    </View>

                    <View style={styles.Group2_view}>
                        <Text style={[{ fontWeight: 'bold', textAlign: 'center', fontSize: 28, top: 45, },
                        AppColours.Text_colours]}>$600K+
                        </Text>
                        <Text style={[styles.Group1_Text_1, AppColours.Text_colours]}>Anual Revenue</Text>
                    </View>

                    <Text style={[AppColours.Text_colours, styles.Text_success_story]}>
                        Our “Success Story”</Text>

                    <Text style={[styles.Detail_success_story, AppColours.Text_Description]}>
                        Believe us or not ! <Text style={{ fontWeight: 'bold' }} >It’s not a
                            castle in the sky but a truth !</Text>
                        {'\n'}We have started with honesty, dedication, and professionalism
                        so now we are protecting our clients’ trust in order to provide the
                        best we have.{'\n'}{'\n'}{'\n'}
                        We have earned the trust of over 20 clients worldwide.
                        HirePro is blessed with quality 150+ resources equipped with the
                        perfect set of abilities to revolutionize our client’s businesses
                        with IT in order to fulfill their needs ina professional manner.
                    </Text>

                    <Text style={[AppColours.Text_colours, styles.Text_question]}>
                        There must be a question!        “Why would we have a high satisfaction rate?”
                    </Text>

                    <Text style={[AppColours.Text_Description, styles.question_description]}>
                        The answer is simple; we have hired our resources by focusing on Quality,
                        not just quantity. After a thorough interview,
                        we hire professionals like our name says “HirePro”
                    </Text>

                    <TouchableOpacity style={[AppColours.Button_Proceed_Style, styles.Btn_Style]}>
                        <Text style={AppColours.Button_Proceed_Text}> Give us a try!</Text>
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
        width: 316,
        height: 79,
        top: 42,
        left: 30,
        lineHeight: 20,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    Group1_view: {
        flex: 3,
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 160.34,
        top: 35,
        left: 30,
        borderRadius: 7,

        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 12,

        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    Group1_Text_1: {

        top: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    Group2_view: {
        //   flex: 3,
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 160.34,
        top: -125,
        left: 197,
        borderRadius: 7,
        elevation: 25,
    },

    Group3_view: {
        top: -140,
    },
    Group4_view: {
        top: -280,
    },
    Text_success_story: {
        // position:'absolute',
        width: 243,
        left: 75.5,
        top: -95,
        fontSize: 25,
        fontWeight: 'bold',
    },

    Detail_success_story: {

        width: 304,
        height: 356,
        fontSize: 20,
        left: 32,
        top: -75,
    },
    Text_question: {
        width: 304,
        height: 69,
        left: 25.5,
        top: -45,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 20,
        fontStyle: 'normal',
        fontFamily: 'Metropolis',
    },
    question_description: {
        top: -30,
        width: 304,
        height: 130,
        lineHeight: 22,
    },

    Btn_Style: {
        left: 30,
        top: 229,
    }






})

