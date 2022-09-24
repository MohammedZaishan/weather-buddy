import React from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';

const SelectPlace = props => {
  const array = [
    'Bangalore',
    'Chennai',
    'Kochi',
    'Hyderabad',
    'Mumbai',
    'Delhi',
  ];

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style = {{ margin: 10 }} onPress={() => {}}>
                <Text>View weather of the place</Text>
            </TouchableOpacity>
      <TextInput underlineColorAndroid={'#cc1100'} style={{width: '90%'}} />
      <FlatList
        data={array}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => props.navigation.navigate('Upload')}>
            <Text style={{fontSize: 15, color: '#000', padding: 10}}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SelectPlace;
