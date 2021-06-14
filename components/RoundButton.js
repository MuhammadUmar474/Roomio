import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RoundButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonLogin}
        onPress={props.onPress}
        >
          <Text style = {{color: '#ABABAB', fontWeight: 'bold', fontSize: 13}}>{props.placeName}</Text>
        </TouchableOpacity>
  );
}
const styles = StyleSheet.create ({
    buttonLogin: {
        width: '22%',
        padding: 6,
        borderRadius: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ABABAB',
        marginHorizontal: wp('2%')
      },
})
export default RoundButton;
