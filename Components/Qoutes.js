import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppColours } from './ColourClass';
import Header from './Header';
import SubmitModal from './SubmitModal';
import Modal from "react-native-modal";


export default function QoutesScreen() {

    const [Visible, setVisible] = useState(false)

    useEffect(() => {


        setTimeout(() => {
            setVisible(false);
        }, 7000);
    }, []);

    function showModal() {
        setVisible(true)
    }

    return (

        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>
            <Header />

            {/* /////  ............ React Js Modal............../// */}
            <Modal isVisible={Visible}>
                <SubmitModal>

                </SubmitModal>
            </Modal>

            <Text style={[AppColours.Text_colours, styles.Style_Text]}>
                Let’s Quote Us!
            </Text>

            <View style={styles.All_Button_container} >

                <TextInput placeholder='First Name' style={styles.Button_style}>
                </TextInput>
                <Icon style={styles.image_tick_style} size={19} name="user" />

                <TextInput placeholder='Last Name' style={styles.Button_style}>
                </TextInput>
                <Icon style={styles.image_tick_style} size={19} name="user" />

                <TextInput placeholder='Email' style={styles.Button_style}>
                </TextInput>
                <Fontisto style={styles.image_tick_style} size={19} name="email" />

                <TextInput placeholder='Phone Number' style={styles.Button_style}>
                </TextInput>
                <MaterialCommunityIcons style={styles.image_tick_style} size={19} name="phone-dial" />

                <TextInput placeholder='Important Attachments (Optional)' style={styles.Button_style}>
                </TextInput>
                <MaterialCommunityIcons style={styles.image_tick_style} size={24} name="attachment" />

                <TextInput placeholder='Additional notes...' style={[styles.Button_style, { height: 102, textAlign: 'auto' }]}>
                </TextInput>

                <TouchableOpacity style={[AppColours.Button_Proceed_Style, styles.Btn_View]}
                    onPress={() => showModal()}>
                    <Text style={AppColours.Button_Proceed_Text}>Submit</Text>
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
        top: -10
    },
    image_tick_style: {
        left: 270,
        top: -36
        //  top:-24,
    },
    Btn_View: {
        top: 90,
    },
    Image_view: {
        left: 14,
        top: -6,

    },
    Button_style: {
        width: 304,
        height: 50,
        borderRadius: 7,
        backgroundColor: '#F2F2F2',
    },
    Button_Text: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
        top: 15,
        lineHeight: 20,
    },
})

