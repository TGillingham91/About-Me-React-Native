import React from 'react'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import SideMenu from './screens/SideMenu'
import {createStackNavigator} from "@react-navigation/stack";
import {Text, View} from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "@react-navigation/drawer/src/navigators/createDrawerNavigator";


const Stack = createStackNavigator()

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

function AppStack(){
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    )
}

const Drawer = DrawerNavigator();

function AppDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="AppStack" drawerContent={SideMenu} >
                <Drawer.Screen name="AppStack" component={AppStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppDrawer;
