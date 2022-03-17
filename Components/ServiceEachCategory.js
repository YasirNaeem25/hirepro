import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet, ScrollView, TouchableOpacity, Button
} from 'react-native';
import { AppColours } from './ColourClass';
import Header from './Header';
import Icon from 'react-native-vector-icons/AntDesign';
import NodeJsModal from './NodeJsModal';
import Modal from "react-native-modal";
import ReactJsModal from './ReactJsModal';
import ShopifyModal from './ShopifyModal';



export default function ServiceEachCategory({ navigation }) {

    const [Visible, setVisible] = useState(false)

    const [reactModal, setreactModal] = useState(false)
    const [shopifyModal, setshopifyModal] = useState(false)

    function ModalNodeJs() {
        setVisible(true)
    }

    function ModalNodeJsClose() {
        setVisible(false)
    }

    function ModalReactJs() {
        setreactModal(true)
    }

    function ModalReactJsClose() {
        setreactModal(false)

    }

    function ModalShopify() {
        setshopifyModal(true)
    }

    function ModalShopifyclose() {
        setshopifyModal(false)

    }
    return (
        <View style={[styles.Page_Main_view, AppColours.Home_screen_module_colours]}>
            <ScrollView style={styles.scroll_view_style}>
                <Header />

                {/* /////  ............ Node Js Modal............../// */}
                <Modal isVisible={Visible}>
                    <NodeJsModal />
                    <TouchableOpacity style={[AppColours.Button_Proceed_Style, { top: 10, left: 10 }]}
                        onPress={ModalNodeJsClose}
                    >
                        <Text style={AppColours.Button_Proceed_Text}>Done</Text>
                    </TouchableOpacity>

                </Modal>

                {/* /////  ............ React Js Modal............../// */}
                <Modal isVisible={reactModal}>
                    <ReactJsModal />
                    <TouchableOpacity style={[AppColours.Button_Proceed_Style, { top: 10, left: 10 }]}
                        onPress={ModalReactJsClose}
                    >
                        <Text style={AppColours.Button_Proceed_Text}>Done</Text>
                    </TouchableOpacity>

                </Modal>

                {/* /////  ............ Shopify Modal............../// */}
                <Modal isVisible={shopifyModal}>
                    <ShopifyModal/>
                    
                    <TouchableOpacity style={[AppColours.Button_Proceed_Style, { top: 10, left: 10 }]}
                        onPress={ModalShopifyclose}
                    >
                        <Text style={AppColours.Button_Proceed_Text}>Done</Text>
                    </TouchableOpacity>

                </Modal>



                <Text style={[styles.Text1_style, AppColours.Text_colours]}>
                    Our Web  Development  & {'\n'}Designing team excel in:
                </Text>

                <View>
                    <Text style={styles.Text_Backend}>Back-end Development</Text>
                    <Icon style=
                        {[AppColours.Main_Color_Header_icon, styles.image_tick_style]}
                        size={19} name="checkcircleo" />
                    <Text style={styles.Style_Language}>Laravel</Text>


                    <Icon
                        style={[AppColours.Main_Color_Header_icon,
                        styles.image_tick_style, { top: -5 }]} size={19} name="checkcircle" />
                    <TouchableOpacity onPress={ModalNodeJs}>
                        <Text style={[styles.Style_Language, { top: -40 }]}>Node JS</Text>
                    </TouchableOpacity>


                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -25 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -59 }]}>Codeigniter</Text>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -45 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -79 }]}> PHP</Text>
                </View>

                <View style={{ top: -85 }}>

                    <Text style={styles.Text_Backend}>Front-end Development</Text>
                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style]} size={19} name="checkcircle" />
                    <TouchableOpacity onPress={ModalReactJs}>
                        <Text style={styles.Style_Language}>React JS</Text>
                    </TouchableOpacity>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -5 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -40 }]}>Angular JS</Text>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -25 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -59 }]}>HTML</Text>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -45 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -79 }]}> CSS</Text>
                </View>

                <View style={{ top: -170 }}>
                    <Text style={[styles.Text_Backend, { left: -88 }]}>CMS</Text>
                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style]} size={19} name="checkcircle" />
                    <Text style={styles.Style_Language}>WordPress</Text>



                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -5 }]} size={19} name="checkcircleo" />
                    <TouchableOpacity onPress={ModalShopify}>
                    <Text style={[styles.Style_Language, { top: -40 }]}>Shopify</Text>
                    </TouchableOpacity>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -25 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -59 }]}>Magento</Text>
                </View>

                <Text style={[styles.App_Text, AppColours.Text_colours]}>Our App Development team{'\n'} specializes in:</Text>

                <View style={{ top: -200, height: 77 }}>
                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style]} size={19} name="checkcircleo" />
                    <Text style={styles.Style_Language}>Native Android App Development</Text>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -5 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -40 }]}>React Native</Text>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -25 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -59 }]}>Swift</Text>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -45 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -80 }]}>Java</Text>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -65 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -100 }]}>kotlin</Text>

                    <Icon style={[AppColours.Main_Color_Header_icon,
                    styles.image_tick_style, { top: -85 }]} size={19} name="checkcircleo" />
                    <Text style={[styles.Style_Language, { top: -119 }]}>Flutter</Text>
                </View>
                <TouchableOpacity style={[AppColours.Button_Proceed_Style, { top: -15, left: 30 }]}
                onPress={()=>navigation.navigate('QoutesScreen')}>
                    <Text style={AppColours.Button_Proceed_Text}>Proceed</Text>
                </TouchableOpacity>

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
        height: 400,
    },
    Text1_style: {
        width: 282,
        height: 92,
        top: 42,
        left: 50,
        fontSize: 20,
        fontStyle: 'normal',
        lineHeight: 20,
        textAlign: 'center',
        fontFamily: 'Metropolis',
        fontWeight: 'bold',
    },

    Text_Backend: {
        top: 15,
        width: 275,
        height: 40,
        left: 10,

        fontSize: 24,
        fontStyle: 'normal',
        lineHeight: 26,
        textAlign: 'center',
        fontFamily: 'Metropolis',
        fontWeight: '600',
        color: '#565656',
    },
    image_tick_style: {
        left: 25,
        top: 16,
        width: 28,
        height: 37,
    },
    Style_Language: {
        width: 270,
        height: 19,
        fontWeight: '500',
        left: 55,
        top: -19,
        fontSize: 16,
        lineHeight: 16,
        fontStyle: 'normal',
    },

    App_Text: {
        width: 317,
        height: 49,
        //   backgroundColor:'red',
        top: -200,
        left: 25,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',

    },
})

