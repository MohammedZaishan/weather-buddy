import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = (props) => {

    useEffect(() => {
        props.navigation.navigate('Login')
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ 
                fontSize: 30,
                color: '#000'
             }}>Weather Buddy</Text>
        </View>
    )
}

export default Splash
