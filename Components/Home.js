import React from 'react';
import {
    Text,
    View,
    StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { AppColours } from './ColourClass';
import Header from './Header';

export default function Home({ navigation }) {

    return (

        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>
            <Header />
            <View >
                <Text style={[styles.Text_style, AppColours.Text_colours]}>
                    Good Evening !        We are Glad to see you!
                </Text>
                <Text style={styles.Text2_style}>
                    What Type of Hiring Model Suits You Best?
                </Text>
            </View>
            <ScrollView >
                <View style={styles.uper_View}>

                    <View style={styles.Group1_View_Style}>
                        {/* <TouchableOpacity onPress={()=>navigation.navigate('ServiceCoreGreen')}> */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DrawerNavigation', { screen: 'ServiceEachCategory' })}>
                            <Image style={styles.Image1_style}
                                source={require('../Components/src/vector1.png')}>
                            </Image>
                            <Text style={styles.Group1_Text_View}>Full-Time Employee</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Group2_View_Style}>
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('DrawerNavigation', { screen: 'ServiceEachCategory' })}>
                            <Image style={styles.Image1_style}
                                source={require('../Components/src/vector2.png')}>
                            </Image>
                            <Text style={styles.Group1_Text_View}>Freelancer</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Group3_View_Style}>

                        <TouchableOpacity onPress={() =>
                            navigation.navigate('DrawerNavigation', { screen: 'ServiceEachCategory' })}>
                            <Image style={styles.Image1_style}
                                source={require('../Components/src/vector3.png')}>
                            </Image>
                            <Text style={styles.Group1_Text_View}>Hire a Team</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    Page_Main_view: {
        flex: 1,
    },
    Text_style: {
        width: 188,
        height: 40,
        top: 42,
        left: 31,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 20,
        fontStyle: 'normal',
        fontFamily: 'absolute',
    },
    Text2_style: {
        width: 256,
        height: 44,
        top: 77,
        left: 61,
        // right:81,
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'normal',
        lineHeight: 20,
        textAlign: 'center',
        color: '#565656',
        fontFamily: ' Metropolis'
    },
    Group1_View_Style: {
        backgroundColor: '#EFFFFA',
        width: 294,
        height: 172,
        // top: 112,
        borderRadius: 7,
        left: 37,
        paddingRight: 37,
    },
    Image1_style: {
        top: 45,
        left: 100,

    },
    Group1_Text_View: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 20,
        textAlign: 'center',
        top: 60,
        left: 19,
        fontFamily: 'Metropolis',

    },

    Group2_View_Style: {
        backgroundColor: '#EFFFFA',
        width: 294,
        height: 172,
        top: 25,
        borderRadius: 7,
        left: 37,
        paddingRight: 37,
    },
    Group3_View_Style: {
        backgroundColor: '#EFFFFA',
        width: 294,
        height: 172,
        top: 50,
        borderRadius: 7,
        left: 37,
        paddingRight: 37,
        bottom: 86,
    },

    uper_View: {
        flex: 3,
        top: 90,
        // backgroundColor: 'red',
        height: 692,

    },
})


