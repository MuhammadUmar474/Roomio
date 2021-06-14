import React from 'react';
import { View, Text, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SearchContact = () => {
  return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
        <View style = {{ height: hp('7%'), width: wp('90%'), marginTop: hp('10%'), marginHorizontal: wp('5%')}}>
            <View style = {{
                flexDirection: 'row',
                backgroundColor: 'white',
                shadowOffset: { width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 3,
                }}>
                <FontAwesome name = {"search"} size = {18} color={'#ABABAB'} style = {{marginTop: ('3.5%'), marginLeft: wp('3%')}} />
                <TextInput 
                underlineColorAndroid = "transparent"
                placeholder = " Search Contact "
                placeholderTextColor = "grey"
                style = {{ flex: 1, fontSize: 14, backgroundColor: 'white', color: '#ABABAB', marginLeft: wp('1%')}}
                />
            </View>
        </View>
    </View>
  );
}

export default SearchContact;
