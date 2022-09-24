import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput underlineColorAndroid={'#cc1100'} style={{ width: '90%' }} />
      <TextInput underlineColorAndroid={'#cc1100'} style={{ width: '90%' }} />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('SelectPlace');
        }}>
        <Text style={{ fontSize: 15 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
