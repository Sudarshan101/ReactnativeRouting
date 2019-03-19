import React from "react";
import { View, Text, Button } from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Welcome from "../Components/welcome/welcome"
import Login from "../Components/login/login"


const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Login: {screen: Login}, 
},
{
  initialRouteName: "Welcome",
  headerMode: "none",
  swipeEnabled: false
});
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;