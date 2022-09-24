import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {launchCamera} from 'react-native-image-picker';

let options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose Photo from Custom Option',
      },
    ],
    storageOptions: {
      skipBackup: false,
      path: 'images',
    },
  };

const Upload = () => {

    const [ image, setImage ] = useState('')

    const calllaunchCamera = () => {
        launchCamera(options, response => {
          if (response.didCancel) {
            alert('User cancelled image picker');
          } else if (response.error) {
            alert('ImagePicker Error: ' + response.error);
          } else if (response.customButton) {
            alert('User tapped custom button: ' + response.customButton);
          } else {
            let source = response.assets[0];
            console.log(source.uri);
            setImage(source.uri)
          }
        });
      };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Image source={{uri: image}} resizeMode="contain" style={{ width: '100%', height: '90%' }} />
            <TouchableOpacity style = {{ margin: 10 }} onPress={() => calllaunchCamera()}>
                <Text>Capture Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{ margin: 10 }} onPress={() => {}}>
                <Text>Upload</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Upload
