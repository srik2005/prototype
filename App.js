import * as React from 'react';
import {View} from 'react-native';

import HomeScreen from './HomeScreen';
import AdviceScreen from './AdviceScreen';
import{createAppContainer,createSwitchNavigator  }from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:20,backgroundColor:"black"}}>
  <AppContainer/>
     
        
      </View>


    );
  }
}
var AppNavigator = createSwitchNavigator({
HomeScreen: HomeScreen,
AdviceScreen: AdviceScreen,


})
const AppContainer = createAppContainer(AppNavigator)
