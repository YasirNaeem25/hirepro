import React from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { AppColours } from './ColourClass';

export default function SubmitModal() {
    return (
        
            <View style={styles.modalStyle}>
                {/* <Icon style=
                    {{ color: '#949494', left: 318, top: 20 }}
                    size={24} name="circle-with-cross" /> */}

                <Image style={{ left: 104, top: 57, }}
                    source={require('../Components/src/finishpic.png')}>
                </Image>
                <Text style={[AppColours.Main_Color_Header_icon,
                styles.Title_Text]}>
                    Submition Successful !
                </Text>
                <Text style={{ fontSize: 18, fontWeight: '600', top: 60, left: 60 }}>
                    Your Quote has been Submitted
                </Text>
                <Feather style={styles.image}
                    size={19} name="smile" />

                <Text style={[AppColours.Main_Color_Header_icon,
                styles.Title_Text,{left:80,top:40}]}>
                    We’ll contact you within 24 hours.
                </Text>

            </View>
    )
}
const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: 128,
        width: 375,
        left: -20,
        top: 187,
        borderRadius: 7,
        marginBottom: 350,
    },
    Title_Text: {
        width: 294,
        height: 20,
        left: 90,
        top: 67,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 20,
        fontStyle: 'normal'
    },
    image:{
         backgroundColor: '#FFD700', 
         width: 20,
          borderRadius: 50,
          top:38,
          left:315,

    },
})
