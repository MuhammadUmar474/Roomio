import React from 'react';
import { View, Text, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View style = {{flex: 1}}>
        <View style = {{ height: 50, marginTop: 20}}>
            <View style = {{
                flexDirection: 'row', padding: 5,
                backgroundColor: 'white', marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 3,
                }}>
                <FontAwesome name = {"search"} size = {18} color={'#ABABAB'} style = {{marginTop: 10, marginLeft: 2}} />
                <TextInput 
                underlineColorAndroid = "transparent"
                placeholder = "   Try  'Islamabad' "
                placeholderTextColor = "grey"
                style = {{ flex: 1, fontWeight: '700', backgroundColor: 'white', color: '#ABABAB'}}
                />
                <FontAwesome name = {"check"} size = {18} color={'#ABABAB'} style = {{marginTop: 10, marginLeft: 30}} />
            </View>
        </View>
    </View>
  );
}

export default SearchBar;
