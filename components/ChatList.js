import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DATA = [
  {
    id: '01',
    Cname: 'John Doe',
    day: 'Fri',
    message: 'See You Soon'
  },
  {
    id: '2',
    Cname: 'Ali Hassan',
    day: 'Fri',
    message: 'will meet again'
  },
  {
    id: '3',
    Cname: 'Ahmad',
    day: 'Thr',
    message: 'See You again'
  },
  {
    id: '4',
    Cname: 'Umar',
    day: 'Thr',
    message: 'See You Soon'
  },
  {
    id: '5',
    Cname: 'Adnan',
    day: 'Mon',
    message: 'See You again'
  },
  {
    id: '6',
    Cname: 'Kami',
    day: 'Mon',
    message: 'See You again'
  },
  {
    id: '7',
    Cname: 'Dani',
    day: 'Mon',
    message: 'See You again'
  },
];

const Item = ({ Cname, day, message}) => (
  <View style={{marginTop: hp('3%'), flexDirection: 'row', marginHorizontal: wp('5%')}}>

      <Image source={require('../assets/images/chinies.jpg')} style={{borderRadius: 25, height: 50, width: 50}}/>
        <View>
        
        <View style={{marginLeft: wp('3%'), marginTop: hp('1%'), flexDirection: 'row'}}>
          <Text style={{fontSize: 14, color: '#414141', fontWeight: 'bold'}}>{Cname}</Text>
          <Text style={{fontSize: 10, color: '#8F8F8F', marginLeft: wp('50%'), marginTop: hp('0.5%')}}>{day}</Text>
        </View>

        <View style={{marginLeft: wp('3%'), flexDirection: 'row'}}>
          <Text style={{fontSize: 14, color: '#8F8F8F',}}>{message}</Text>
        </View>

        <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.3}}></View>
        
        </View>
        
    </View>
);

const ChatList = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={props.onPress}>
    <Item Cname={item.Cname} day={item.day} message={item.message} />
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
    </View>
  );
}

export default ChatList;

const styles = StyleSheet.create({
    buttonFilter: {
      width: 15,
      height: 15,
      borderRadius: 7,
      marginLeft: wp('40%'),
      alignItems: 'center',
      backgroundColor: '#EE2073',
    },
  });
