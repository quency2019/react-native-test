import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from '../Login'
import RegisterPage from '../Register'

import TabNavigator from '../tabbar'
import NoLoginTabNavigator from '../noLoginTabbar'
import HomeDetailPage from '../Details'
import ChatDetailPage from '../Details'
import FriendDetailPage from '../Details'
import MyDetailPage from '../Details'

import StartPage from '../Start'

const StartNavigator = createStackNavigator(
  {
    Start:{
      screen: StartPage,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  },
  {}
)


const LoginNavigator = createStackNavigator(
  {
    Login:{
      screen:LoginPage,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Register: { screen: RegisterPage }
  },
  {
    initialRouteName: 'Login'
  }
)


const AppNavigator = createStackNavigator(
  {
    TabNavigator: { screen: TabNavigator },
    // 在此路由声明
    HomeDetail: { screen: HomeDetailPage },
    ChatDetail: { screen: ChatDetailPage },
    FriendDetail: { screen: FriendDetailPage },
    MyDetail: { screen: MyDetailPage },
  },
  {
    initialRouteName: 'TabNavigator',
    defaultNavigationOptions: { // 默认头部样式
      headerTintColor: 'white',
      title:"Header",
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30
      },
    },
    onTransitionStart:()=>{
      // card跳转动画开始时要调用的函数，执行取消键盘等操作
    },
    onTransitionEnd:()=>{
      // card跳转动画结束时要调用的函数。
    }
  }
)


const NoLoginAppNavigator = createStackNavigator(
  {
    TabNavigator: { screen: NoLoginTabNavigator },
    // 路由在此声明
  },
  {
    initialRouteName: 'TabNavigator',
    defaultNavigationOptions: { // 默认头部样式
      headerTintColor: 'green',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30
      },
    },
    onTransitionStart:()=>{
      // card跳转动画开始时要调用的函数
    },
    onTransitionEnd:()=>{
      // card跳转动画结束时要调用的函数。
    }
  }
)

// 直接切换，createAnimatedSwitchNavigator可以动画切换
const SwitchNavigator = createSwitchNavigator(
  {
    // 多个无关联的路由树
    StartRoute: { screen: StartNavigator },
    LoginRoute: { screen: LoginNavigator },
    AppRoute: { screen: AppNavigator },
    NoLoginAppRoute: { screen: NoLoginAppNavigator },
  },
  { initialRouteName: 'StartRoute' }
);


export default createAppContainer(SwitchNavigator);
