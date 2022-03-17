import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Entypo';
import { AppColours } from './ColourClass';
import { useNavigation } from '@react-navigation/native';


export default function NodeJsModal() {
    return (
        <View style={styles.modalStyle}>
            <Icon style=
                {{ color: '#949494', left: 318, top: 20 }}
                size={24} name="circle-with-cross" />
            <Text style={styles.Title_Text}>Node JS</Text>

            <Text style={styles.Text_Description}>
                Node.js (Node)is   an  open      source development
                platform  for   executing JavaScript code server-side.
                Node   is useful for developing applications that require a  persistent
                connection   from  the browser to the server and is
                often  used for  real-time  applications  such  as chat,
                news  feeds  and  web   push notifications
            </Text>

            <Text style={styles.Text_Hiring}>Hiring Preferences</Text>

            <Text style={styles.Text_exp} >Experience:</Text>
            <View style={styles.box_view_Text}>


                <TouchableOpacity style=
                    {[styles.box1View, AppColours.Modal_Btn_BackGround_Colours]}>
                    <Text style={[AppColours.Text_colours, styles.box1View_Text_style]}> 1 {'\n'} Year</Text>
                </TouchableOpacity>

                <TouchableOpacity style=
                    {[styles.box1View, AppColours.Modal_Btn_BackGround_Colours, { top: -16, left: 130 }]}>
                    <Text style={[AppColours.Text_colours, styles.box1View_Text_style]}> 2 {'\n'} Year</Text>
                </TouchableOpacity>
                <View style={styles.box3View}>

                    <TouchableOpacity style=
                        {[styles.box1View, AppColours.MainColours]}>
                        <Text style={[AppColours.Button_Proceed_Text, styles.box1View_Text_style]}> 4 {'\n'} Year</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ top: -184, left: 220 }}>
                    <TouchableOpacity style=
                        {[styles.box1View, AppColours.Modal_Btn_BackGround_Colours]}>
                        <Text style={[AppColours.Text_colours, styles.box1View_Text_style]}> other</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[styles.Text_exp, { top: -80 }]}>Payment: </Text>

            <View style={{ top: -30, left: 40 }}>
                <TouchableOpacity style={[AppColours.Button_Proceed_Style, { width: 130, top: -45 }]}>
                    <Text style={AppColours.Button_Proceed_Text}>Per Hour</Text>
                </TouchableOpacity>
            </View>
            <View style={{ top: -125, left: 180 }}>
                <TouchableOpacity style={[AppColours.Button_Proceed_Style, { width: 130, backgroundColor: '#EFFFFA' }]}>
                    <Text style={[AppColours.Button_Proceed_Text, AppColours.Text_colours]}> Per Month </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.Text_JsPro}>You are Hiring a <Text style={{ fontWeight: 'bold' }}>Node JS</Text>  Pro for </Text>

            <View style={{ top: -105, left: 120 }}>
                <TouchableOpacity style={[AppColours.Button_Proceed_Style, { width: 130, backgroundColor: '#EFFFFA' }]}>
                    <Text style={[AppColours.Button_Proceed_Text, AppColours.Text_colours]}> $12.00</Text>
                </TouchableOpacity>
            </View>

           

        </View>


        // </Modal >
    )
}
const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        height: 100,
        width: 365,
        left: -20,
        top: 67,
        borderRadius: 7,
    },
    Title_Text: {
        width: 99,
        height: 24,
        left: 126,
        top: 24,

        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,

    },
    Text_Description: {
        width: 304,
        height: 200,
        left: 30,
        top: 35,
        fontSize: 17,
        lineHeight: 20,
        color: '#949494',

    },
    Text_Hiring: {
        width: 217,
        height: 24,
        left: 76,
        top: 24,
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,


    },
    Text_exp: {
        width: 114,
        height: 20,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        top: 30,
        left: 31,

    },
    box1View: {
        width: 61,
        height: 61,
        top: 45,
        left: 55,
        borderRadius: 7,
    },
    box1View_Text_style: {
        top: 14,
        fontSize: 18,
        fontWeight: '600',
        width: 46,
        height: 59,
        lineHeight: 18,
        textAlign: 'center',
        left: 5,
    },
    box_view_Text: {
        height: 200,
        left: -20
    },
    box3View: {
        top: -122,
        left: 148
    },
    Text_JsPro: {
        width: 304,
        height: 20,
        fontSize: 17,
        color: '#565656',
        lineHeight: 20,
        textAlign: 'center',
        left: 20,
        top: -115,


    }
})
