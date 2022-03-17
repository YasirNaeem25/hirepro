import { StyleSheet } from 'react-native'

const AppColours = StyleSheet.create({
    MainColours: {
        backgroundColor: '#33BD94',
    },
    Header_color: {
        backgroundColor: '#E5E5E5',
    },
    Main_Color_Header_icon: {
        color: '#33BD94',
    },
    Home_screen_module_colours: {
        backgroundColor: '#E5E5E5',
    },
    Text_colours: {
        color: '#33BD94',

    },
    Button_style: {

        width: 304,
        height: 50,
        borderRadius: 7,
        backgroundColor: '#EFFFFA',
    },
    Button_Text: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center',
        top: 15,
        lineHeight: 20,
    },
    Button_Proceed_Style: {
        width: 304,
        height: 50,
        borderRadius: 7,
        backgroundColor: '#33BD94',
    },
    Button_Proceed_Text: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        top: 15,
        lineHeight: 20,
        color: '#FFFF',
    },
    Text_Description: {
        fontFamily: 'Metropolis',
        fontWeight: 'normal',
        fontSize: 20,
        left: 32,
        lineHeight: 20,
        textAlign: 'justify',
        color: '#949494',
    },
    Modal_Btn_BackGround_Colours: {
        backgroundColor: '#EFFFFA',
    },
})

const ButtonStyle = StyleSheet.create({
    buttonsContainer: {
        position: 'absolute',
        left: 27,
        top: 580,
        width: 304,
        height: 50,
        backgroundColor: '#33BD94s',
        borderRadius: 7,
        shadowOpacity: 20,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 5,
    },
    Btn_Text_Style: {
        color: '#ffff',
        fontSize: 16,
        fontWeight: 'bold',
        top: 17,
        textAlign: 'center',
    },
})

//// ...........................................Splasher_screen2_styling............

const SplasherScreen2_style = StyleSheet.create({

    Skip_View_Style: {
        position: 'absolute',
        width: 34,
        height: 20,
        left: 310,
        top: 25,
    },
    Skip_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFFFF',
    },
    HireIt_View_Style: {
        position: 'absolute',
        width: 350,
        height: 66,
        top: 135,
    },
    HireIt_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 28,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    Description_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 15.4,
        textAlign: 'justify',
        color: '#FFFFFF',
        marginLeft: 15,
        top: 13,
        width: 352,
    },
    Image_View_style: {
        top: 5,
        height: 330,
        alignItems: 'center',
        left: 10,

    },
    Image_Style: {
        height: 360,
        alignItems: 'center',
    },
    icon_View_Style: {
        width: 54.43,
        height: 10.43,
        top: 624,
        left: 187,
        position: 'absolute',
    },



})

//// ...........................................Splasher_screen2_Icone_styling............

const Icone_styles = StyleSheet.create({
    Icone_style_1: {
        width: 12,
        height: 12,
        backgroundColor: '#A4FFE2',
        right: 40,
        borderRadius: 70,
        color: '#A4FFE2',
    },
    Icone_style_2: {
        width: 12,
        height: 12,
        borderRadius: 70,
        backgroundColor: '#A4FFE2',
        color: '#A4FFE2',
        top: -12,
        right: 24
    },
    Icone_style_3: {
        width: 12,
        height: 12,
        borderRadius: 70,
        backgroundColor: '#A4FFE2',
        color: '#A4FFE2',
        top: -24,
        right: 8,
    },
    Icone_style_4: {
        width: 12,
        height: 12,
        borderRadius: 70,
        backgroundColor: '#A4FFE2',
        color: '#A4FFE2',
        top: -36,
        right: -10
    },
})


//// ...........................................Splasher_screen3__styling............


const SplasherScreen3_Style = StyleSheet.create({
    Skip_View_Style: {
        position: 'absolute',
        width: 34,
        height: 20,
        left: 310,
        top: 25,
    },
    Skip_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFFFF',
    },
    HireIt_View_Style: {
        position: 'absolute',
        width: 350,
        height: 66,
        top: 135,
    },
    HireIt_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 28,
        textAlign: 'center',
        color: '#FFFFFF',
        //  left:7,
    },
    Description_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 15.4,
        textAlign: 'justify',
        color: '#FFFFFF',
        marginLeft: 15,
        top: 13,
        width: 352,
    },
    Image_View_style: {
        top: 20,
        height: 330,
        alignItems: 'center',
        left: 10,

    },
    Image_Style: {
        height: 360,
        alignItems: 'center',
        right: 22,
    },
    icon_View_Style: {
        width: 54.43,
        height: 10.43,
        top: 624,
        left: 187,
        position: 'absolute',
    },


})

//// ...........................................Splasher_screen4_styling............
const SplasherScreen4_Style = StyleSheet.create({
    Skip_View_Style: {
        position: 'absolute',
        width: 34,
        height: 20,
        left: 310,
        top: 25,
    },
    Skip_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFFFF',
    },
    HireIt_View_Style: {
        position: 'absolute',
        width: '95%',
        height: 110,
        top: 135,
        right: 20,
    },
    HireIt_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 28,
        textAlign: 'center',
        color: '#FFFFFF',
        //  left:7,
    },
    Description_Text_Style: {
        fontFamily: 'Metropolis',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 15.4,
        textAlign: 'justify',
        color: '#FFFFFF',
        marginLeft: 32,
        top: 3,
        width: 352,
    },
    Image_View_style: {
        top: 5,
        height: 300,
        alignItems: 'center',
        left: 10,
        right: 30,
        //width:250,
        //  backgroundColor:'red',
    },
    Image_Style: {
        top: -20,
        width: 320,
        left: 22,

    },
    icon_View_Style: {
        width: 54.43,
        height: 10.43,
        top: 624,
        left: 187,
        position: 'absolute',
    },


})

//..............................................Splasher_screen5_stytling............

const SplasherScreen5_Style = StyleSheet.create({
    Text_style: {
        position: 'absolute',
        width: 295,
        height: 70,
        top: 120,
        left: 34,
        color: '#FFFFFF',
        fontFamily: 'Metropolis',
        fontStyle: 'normal',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 22,
    },
    Group_View_text: {
        //    backgroundColor: 'red',
        width: 295,
        height: 343,
        left: 34,
        top: 220,
    },

    Text_Style_You_share: {
        position: 'absolute',
        width: 193,
        height: 22,
        left: 64,
        right: 100,
        top: 13,
        bottom: 300,
        fontFamily: 'Metropolis',
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    Style_Bulb: {

        left: 16.91,
        top: -35,
    },
    Style_Line: {

        left: 25,
        top: -25,
    },
    Text_Style_Hire_pro: {
        position: 'absolute',
        width: 240,
        height: 60,
        left: 64,
        top: 40,
        bottom: 219,
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 14,
    },

    Text_Style_Pick_choose: {
        position: 'absolute',
        height: 23,
        width: 143,
        top: 126,
        left: 64,
        fontSize: 20,
        lineHeight: 20,
        color: '#FFFFFF',
        bottom: 290,
        fontWeight: 'bold',
        // backgroundColor:'grey',
    },

    Text_Style_ShowCase: {
        position: 'absolute',
        width: 240,
        height: 60,
        left: 64,
        top: 161,
        bottom: 219,
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 14,
        // backgroundColor:'grey',
    },

    Text_Style_sitBack: {
        position: 'absolute',
        height: 23,
        width: 183,
        top: 238,
        left: 64,
        fontSize: 20,
        lineHeight: 20,
        color: '#FFFFFF',
        bottom: 290,
        fontWeight: 'bold',
    },
    Text_Style_Professional: {
        position: 'absolute',
        width: 240,
        height: 68,
        left: 64,
        top: 273,
        bottom: 219,
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 14,
        // backgroundColor:'grey',
    },

    Style_Rectangle2: {

        //left:16.91,
        top: -25,
    },
    Style_LetterPad: {

        left: 16.91,
        top: -60,
    },
    Style_Line2: {

        left: 25,
        top: -45,
    },

    Style_Rectangle3: {

        //left:16.91,
        top: -45,
    },
    Style_db: {

        left: 16.91,
        top: -82,
    },
    icon_View_Style: {
        width: 54.43,
        height: 10.43,
        top: 654,
        left: 187,
        position: 'absolute',
    },

    colour: {
        backgroundColor: '#ffff',
        color: '#ffff'
    },
})



export {
    AppColours,
    ButtonStyle,
    SplasherScreen2_style, Icone_styles,
    SplasherScreen3_Style,
    SplasherScreen4_Style,
    SplasherScreen5_Style,
   
}

