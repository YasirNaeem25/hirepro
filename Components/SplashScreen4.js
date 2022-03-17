import React from 'react';
import {
    Text,
    View,
    StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { AppColours, Icone_styles, SplasherScreen4_Style } from './ColourClass';

export default function SplashScreen4({navigation}) {
    return (

        <View style={[styles.Page_Main_view, AppColours.MainColours]}  >

            <View style={SplasherScreen4_Style.Skip_View_Style}>
                <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen5')}>
                    <Text style={SplasherScreen4_Style.Skip_Text_Style}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={SplasherScreen4_Style.HireIt_View_Style}>
                <Text style={SplasherScreen4_Style.HireIt_Text_Style}>Why to choose HirePr
                </Text>
                <Image style={styles.Circle_image} source={require('../Components/src/circle.png')}></Image>
                <Image style={styles.vup_image} source={require('../Components/src/vup.png')}></Image>
                <Image style={styles.vdn_image} source={require('../Components/src/vdn.png')}></Image>

                <Text style={SplasherScreen4_Style.Description_Text_Style}>Years of industry exposure have helped HirePro {'\n'}
                    set up a diverse service pool, covering all areas{'\n'}
                    essential for any business to thrive in the  best {'\n'}
                    professionals  with solid  track record.We select{'\n'}
                    them  through a lengthy & strict vetting  process{'\n'}
                    , So you get the best services for
                    {'\n'} the best rates.
                </Text>

                <Image style={SplasherScreen4_Style.Image_Style}
                    source={require('../Components/src/splashscreen4pic.png')}>
                </Image>

            </View>
            <View style={SplasherScreen4_Style.icon_View_Style}>
                <Icon style={Icone_styles.Icone_style_1} name="circle" />
                <Icon style={Icone_styles.Icone_style_2} name="circle" />
                <Icon style={[Icone_styles.Icone_style_3, styles.colour]} name="circle" />
                <Icon style={Icone_styles.Icone_style_4} name="circle" />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    Page_Main_view: {
        flex: 1
    },
    Circle_image: {
        width: 7,
        height: 7,
        left: 318,
        top: -28,
    },
    vup_image: {
        width: 14.33,
        height: 6.75,
        left: 313,
        top: -28,
    },
    vdn_image: {
        width: 14.33,
        height: 6.75,
        left: 313,
        top: -25,
    },
    colour: {
        backgroundColor: '#ffff',
        color: '#ffff'
    },

})


