import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const FormInput = ({placeholderText, iconType}) => {
    return (
        <View style = {styles.textInput}>
          <Ionicons style = {styles.iconStyle} name = {iconType} size = {15} />
          <TextInput style = {styles.textInputStyle}
          placeholder= {placeholderText}
          />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        width: '90%',
        elevation: 10,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 30,
        marginLeft: 20,
      },
      iconStyle: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textInputStyle: {
        marginLeft: 5,
        fontSize: 15,
      }
});