import React, { PureComponent } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends PureComponent {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{ padding: 10, backgroundColor: 'lightgrey' }}
        >
          <Text>Go to settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class SettingsScreen extends PureComponent {
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('willFocus', () =>
      Alert.alert('SettingsScreen#willFocus')
    );
    this.blurListener = navigation.addListener('willBlur', () =>
      Alert.alert('SettingsScreen#willBlur')
    );
  }

  componentWillUnmount() {
    this.focusListener.remove();
    this.blurListener.remove();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Text>Settings!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{ padding: 10, backgroundColor: 'lightgrey' }}
        >
          <Text>Go to home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{ padding: 10, backgroundColor: 'lightgrey' }}
        >
          <Text>Go to settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});
