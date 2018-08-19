import React from 'react';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';
import { StyleSheet, Image } from 'react-native';

import Main from './src/Main';
import { Home } from './src/screens';
import store from './src/datastore/store';
import database from './src/datastore/database';

console.disableYellowBox = true;

// const IntroStack = StackNavigator({
//   register: Register,
//   login: Login,
// });

// const MainStack = SwitchNavigator({
//   intro: IntroStack,
//   main: Tabs,
// });

// class HamburgerIcon extends React.Component {

//   toggleDrawer=()=>{
//     console.log(this.props.navigationProps);
//     this.props.navigationProps.toggleDrawer();
//   }
 
//   render() {
//     return (
//       <View style={{ flexDirection: 'row', height: 200, width: "100%", backgroundColor: "black" }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
//           <Image
//             source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
//             style={{ width: 25, height: 25, marginLeft: 5}}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./assets/bubble.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//     headerLeft : <HamburgerIcon />,
//     headerStyle: {
//       backgroundColor: '#FF9800'
//     },
//     headerTintColor: '#fff',
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./assets/arrow.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//     headerLeft : <HamburgerIcon />,
//     headerStyle: {
//       backgroundColor: '#FF9800'
//     },
//     headerTintColor: '#fff',
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

class App extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/arrow.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor() {
    super();
    this.state = {
      // firebase things?
    };

    database.init();
  }

  componentDidMount() {
    firebase.database().ref('garages')
      .once('value')
      .then(snapshot => {
      });
  }

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;

// const MyApp = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

// export default MyApp;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
