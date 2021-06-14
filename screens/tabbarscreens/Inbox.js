import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ChatList from '../../components/ChatList';
import SearchContact from '../../components/SearchContact';

const Inbox = ({navigation}) => {

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <SearchContact />
      </View>
      
      <Pressable onPress={() => navigation.navigate('Chat Screen')} style={{marginHorizontal: wp('5%'), marginTop: hp('20%')}}>
        <Text style={{fontSize: 16, color: '#535353', fontWeight: 'bold'}}>Unread Messages</Text>
        <View style={{marginTop: hp('3%'), flexDirection: 'row'}}>
            <Image source={require('../../assets/images/chinies.jpg')} style={{borderRadius: 25, height: 50, width: 50}}/>
            <View>
            
            <View style={{marginLeft: wp('3%'), marginTop: hp('1%'), flexDirection: 'row'}}>
              <Text style={{fontSize: 14, color: '#414141', fontWeight: 'bold'}}>John Deo</Text>
              <Text style={{fontSize: 10, color: '#8F8F8F', marginLeft: wp('50%')}}>Fri</Text>
            </View>

            <View style={{marginLeft: wp('3%'), flexDirection: 'row'}}>
              <Text style={{fontSize: 14, color: '#8F8F8F',}}>See You Soon !</Text>
              <TouchableOpacity style={styles.buttonFilter}
                //  onPress={() => navigation.navigate('Imageslider')}
                >
                  <Text style = {{color: 'white', fontSize: 12, alignItems: 'center'}}>2</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.3}}></View>
            
            </View>
          </View>
      </Pressable>

        <View>
          <View style={{marginHorizontal: wp('5%'), marginTop: hp('3%')}}>
            <Text style={{fontSize: 16, color: '#535353', fontWeight: 'bold'}}>All Messages</Text>
          </View>
          <ScrollView
            style={{marginVertical: hp('1%')}} 
            showsVerticalScrollIndicator={false}>
            <ChatList onPress={() => navigation.navigate('Chat Screen')}/>
          </ScrollView>
        </View>
    </View>
  );
}

export default Inbox;

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
