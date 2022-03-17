import React from 'react';
import {
    Text,
    View,
    StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';

import { AppColours } from './ColourClass';
import Header from './Header';

export default function TermsConditions({navigation}) {
    return (
        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>
            <ScrollView style={styles.scroll_view_style}>
                <Header />
                <View >
                    <Text style={[styles.Text_style, AppColours.Text_colours]}>
                        Terms & Conditions
                    </Text>
                </View>
                <View style={styles.Description_area}>
                    <Text style={[AppColours.Text_Description, styles.Description]}>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla non felis non mauris iaculis vulputate et tristique tellus.
                        Phasellus eu cursus velit, nec facilisis ligula.
                        Integer sit amet pellentesque purus.
                        Pellentesque ultrices turpis elementum magna pellentesque tincidunt.
                        Ut lacinia finibus rhoncus. Donec eu dapibus neque, quis placerat mi.
                        Praesent porta purus et est euismod facilisis.{'\n'}{'\n'}

                        Proin sed tellus et orci imperdiet sollicitudin at in metus.
                        Aenean blandit nec mi euismod pellentesque.
                        In ullamcorper ante sit amet hendrerit maximus.
                        Vestibulum fermentum ante in nisl ultricies blandit.
                        In dolor massa, elementum eu turpis at, luctus volutpat lacus.
                        Pellentesque mollis dignissim odio, placerat imperdiet neque hendrerit sed.
                        Morbi dictum dui ac magna dictum, non iaculis odio suscipit.{'\n'}{'\n'}

                        Ut a tellus volutpat, dignissim turpis in, tristique sapien.
                        Aliquam dignissim nec leo quis sodales. Nunc accumsan pellentesque mauris,
                        eu accumsan ligula efficitur in.
                        Phasellus pharetra lacus laoreet,
                        iaculis eros quis, pulvinar nulla.
                        Curabitur sit amet sodales sapien. Nunc congue vulputate est,
                        sed laoreet ipsum rutrum nec.
                        Nullam sed vulputate metus.
                        Integer at diam in dui mattis consectetur sit amet vel nulla.
                        Donec tempor turpis mi, at convallis nulla aliquam vitae.
                        Pellentesque est nibh, imperdiet ut purus at, sodales viverra massa.
                        Mauris eu consequat risus.{'\n'}{'\n'}

                        Morbi mollis condimentum ligula eu sagittis.
                        Phasellus blandit elementum quam at consequat.
                        Nam posuere efficitur congue.
                        Maecenas tempor elit quam, id eleifend libero pretium et.
                        Aliquam ut libero vel risus mattis ullamcorper.
                        Donec sed quam tortor. Morbi molestie tincidunt quam venenatis auctor.
                        Fusce in volutpat sem. Aliquam pulvinar nisl ac mollis sagittis.
                        Donec dapibus tellus at orci congue, in pellentesque nisi cursus.
                        Nulla efficitur suscipit erat, id euismod eros convallis venenatis.
                        Praesent sed lacus eros. {'\n'}{'\n'}

                        Sed bibendum porta eros, non varius lectus dignissim nec.
                        Maecenas id tellus eget augue rutrum interdum fringilla sed orci.
                        In et felis ligula. Vivamus tristique convallis lectus in laoreet.
                        Ut eu magna eu metus luctus malesuada.{'\n'}{'\n'}

                        Morbi volutpat pulvinar justo, eget accumsan odio laoreet vel.
                        Pellentesque a nisi dolor. Donec interdum nulla at vulputate blandit.
                        Proin cursus gravida justo, sit amet commodo massa dictum eu.
                        Aenean sed pretium nisi, non porttitor eros. Maecenas lacinia pretium diam,
                        sit amet blandit erat ornare et. Vestibulum malesuada ut purus id elementum.
                    </Text>

                    <TouchableOpacity style={[AppColours.Button_Proceed_Style, styles.btn_Style]}
                    onPress={()=>navigation.navigate('PrivacyPolicy')}>
                        <Text style={AppColours.Button_Proceed_Text}>Privacy Policy</Text>
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
        height: 1200,
        //     backgroundColor: 'red',

    },
    Text_style: {
        width: 250,
        height: 56,
        top: 47,
        left: 70,
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
        lineHeight: 26,
    },
    btn_Style: {
        left: 30,
        top: 32,
    },
    Description: {
        top: 35,
        width: 304,
        fontSize: 16,
    },
    Description_area: {
        height: 1500,
        padding: 10,
    }

})

