import React from 'react';
import { LogBox, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Splash from './Components/Splash';
import SplashScreen2 from './Components/SplashScreen2';
import SplashScreen3 from './Components/SplashScreen3';
import SplashScreen4 from './Components/SplashScreen4';
import SplashScreen5 from './Components/SplashScreen5';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './Components/Home';
import ServiceCoreGreen from './Components/ServiceCoreGreen';
import OurStory from './Components/OurStory';
import OurClient from './Components/OurClients';
import TermsConditions from './Components/TermsCondition';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ContactUs from './Components/ContactUs';
import OurClientHistory from './Components/OurClientHistory';
import ServiceEachCategory from './Components/ServiceEachCategory';
import QoutesScreen from './Components/Qoutes';
import ServiceSelectMob from './Components/serviceSelectMob';
import ServiceSelectGraphic from './Components/ServiceSelectGraphic';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs
  ([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ])

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {

  const Customdrawer = props => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: '#33BD94', height: 226 }} >
        </View>
        <DrawerItemList {...props}>
        </DrawerItemList>
      </DrawerContentScrollView>
    )
  }

  const DrawerNavigator = () => {
    return (


      <Drawer.Navigator drawerContent={(props) => <Customdrawer{...props} />}>

        <Drawer.Screen name='DrawerNavigation' component={DrawerNavigation}
          options={{
            headerShown: false, drawerLabel: 'Our Story', drawerIcon: ({ size }) => (
              <Icon
                name="contacts"
                size={20}
                color='#33BD94'
              />
            ),
          }} />

        <Drawer.Screen name='Home' component={Home} options={{
          headerShown: false, drawerLabel: 'Home', drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={20}
              color='#33BD94'
            />
          ),
        }} />

        <Drawer.Screen name='ContactUs' component={ContactUs} options={{
          headerShown: false, drawerLabel: 'Contact Us'
          , drawerIcon: ({ size }) => (
            <FontAwesome
              name="line-chart"
              size={20}
              color='#33BD94'
            />
          ),
        }} />

        <Drawer.Screen name='Our Client' component={OurClient} options={{
          headerShown: false
          , drawerIcon: () => (
            <Feather
              name="users"
              size={20}
              color='#33BD94'
            />
          )
        }} />

        <Drawer.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{
          headerShown: false
          , drawerIcon: () => (
            <Icon
              name="filetext1"
              size={20}
              color='#33BD94'
            />
          )
        }} />

        <Drawer.Screen name='TermsConditions' component={TermsConditions} options={{
          headerShown: false, drawerLabel: 'Terms & Conditions'
          , drawerIcon: () => (
            <MaterialIcons
              name="privacy-tip"
              size={20}
              color='#33BD94'
            />
          )
        }} />

      </Drawer.Navigator>
    )
  }

  function DrawerNavigation() {
    return (
      <Stack.Navigator >
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='SplashScreen3' component={SplashScreen3} options={{ headerShown: false }} />
        <Stack.Screen name='SplashScreen2' component={SplashScreen2} options={{ headerShown: false }} />
        <Stack.Screen name='SplashScreen4' component={SplashScreen4} options={{ headerShown: false }} />
        <Stack.Screen name='SplashScreen5' component={SplashScreen5} options={{ headerShown: false }} />
        <Stack.Screen name='ServiceSelectMob' component={ServiceSelectMob} options={{ headerShown: false }} />
        <Stack.Screen name='ServiceEachCategory' component={ServiceEachCategory} options={{ headerShown: false }} />
        <Stack.Screen name='ServiceSelectGraphic' component={ServiceSelectGraphic} options={{ headerShown: false }} />
        <Stack.Screen name='ServiceCoreGreen' component={ServiceCoreGreen} options={{ headerShown: false }} />
        <Stack.Screen name='QoutesScreen' component={QoutesScreen} options={{ headerShown: false }} />
        <Stack.Screen name='OurClientHistory' component={OurClientHistory} options={{ headerShown: false }} />
        <Stack.Screen name='OurStory' component={OurStory} options={{ headerShown: false }} />

      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer initialRouteName="Splash">
      <DrawerNavigator />
    </NavigationContainer>

  );
}


