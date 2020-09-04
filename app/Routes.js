import React from 'react'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import SideMenu from './screens/SideMenu'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "@react-navigation/drawer/src/navigators/createDrawerNavigator";

const Stack = createStackNavigator()

function AppStack(){
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerTransparent: true, title: false}}
        >
            <Stack.Screen name="Welcome" component={Home} />
            <Stack.Screen name="About Me" component={About} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    )
}

const Drawer = DrawerNavigator();

function AppDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="AppStack" drawerContent={SideMenu}>
                <Drawer.Screen name="AppStack" component={AppStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppDrawer;
