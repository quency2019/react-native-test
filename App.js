import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Nav from "./src/navigator/index"

// import HomeScreen from './src/route/Home'
// import DetailsScreen from './src/route/Index'
// import TestScreen from './src/route/Test'

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Details: {
//     screen: DetailsScreen,
//   },
//   Test:{
//     screen:TestScreen
//   }
  
// },
// {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: 'green',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold',
//         },

//     }
// }
// );


// const TabNavigator = createBottomTabNavigator(
//   {
//     Main: {
//       screen: AppNavigator,
//       navigationOptions: ({ navigation }) => {

//         return {
//           tabBarLabel:'主页面',
//           tabBarIcon: ({ focused }) => {
//             return (
//               <Image
//               style={{width: 30, height:30}}
//               source={
//                 focused
//                   ? require('./images/tabs/cart_normal.png')
//                   : require('./images/tabs/cart_focus.png')
//               }
//             />
//             )
//           }
//         }
//       }
//     },
//     Test:{
//       screen: AppNavigator,
//         navigationOptions: {
//             // 底部导航
//           tabBarLabel:'测试页面',
//           tabBarIcon: ({ focused }) => {
//          return (
//             <Image
//              style={{width: 30, height:30}}
//              source={
//             focused
//             ? require('./images/tabs/cart_normal.png')
//                   : require('./images/tabs/cart_focus.png')
//            }
//          />
//         )
//   }
//       }
//     }
//   },
//   {
//     initialRouteName: 'Main',
//     tabBarOptions: {
//       activeTintColor: 'gold',
//       inactiveTintColor: 'gray',
//       style: {
//         height: 50,
//       }
//     },
//     defaultNavigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state;

//       return {
//         gesturesEnabled: false
//       }
//     }
//   }
// );


// const AppContainer = createAppContainer(TabNavigator)

class App extends Component {
  render() {
    return (
      <Nav/>
    )
  }
}

export default App;