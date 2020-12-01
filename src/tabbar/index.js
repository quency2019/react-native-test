import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Iconshouye from '../iconfont/Iconshouye'
import Iconshenqing from '../iconfont/Iconshenqing'
import Iconshenpi from '../iconfont/Iconshenpi'
import Iconwode from '../iconfont/Iconwode'

import HomePage from '../HomePage'
import ChatPage from '../Tab1Page'
import FriendPage from '../Tab2Page'
import MyPage from '../Tab3Page'
import Icon from "react-native-vector-icons/Ionicons";
const RouteConfigs = {
  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
                focused ?<Iconshouye color="#26a2ff" size="24" />:<Iconshouye color={tintColor} size="24" />

        
      ),
      tabBarOnPress:(obj)=>{
        console.log('chat tabbar press!');
        obj.defaultHandler()

        //obj.navigation.navigate('ChatPage')

      },
    })
  },
  ChatPage: {
    screen: ChatPage,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '申请',
      tabBarIcon: ({focused, tintColor}) => (
        focused ?<Iconshenqing color="#26a2ff" size="20" />:<Iconshenqing color={tintColor} size="20" />

      ),
      tabBarOnPress:(obj)=>{
        console.log('chat tabbar press!');
        obj.defaultHandler()
      },
    })
  },
  FriendPage: {
    screen: FriendPage,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "审批",
      tabBarIcon: ({focused, tintColor}) => ( 
        focused ?<Iconshenpi color="#26a2ff" size="20" />:<Iconshenpi color={tintColor} size="20" />

      ),
      tabBarOnPress:(obj)=>{
        console.log('friend tabbar press!');
        obj.defaultHandler()
      },
    })
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => (
        focused ?<Iconwode color="#26a2ff" size="22" />:<Iconwode color={tintColor} size="22" />

      ),
   
      tabBarOnPress:async (obj)=>{
        console.log('my tabbar press!');
        obj.defaultHandler()
      },
    })
  },
}

const TabNavigatorConfig = {
  initialRouteName: 'HomePage',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  lazy: true,
  // tabBarComponent: props => (<CustomTabbarComponent />)
}

const TabNavigator = createBottomTabNavigator(
  RouteConfigs,
  TabNavigatorConfig
)

export default TabNavigator
