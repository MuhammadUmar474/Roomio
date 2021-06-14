import React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import SearchBar from '../../components/SearchBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Places from '../../components/Places';
import SimplePlaces from '../../components/SimplePlaces';
import RoundButton from '../../components/RoundButton';

const Explore = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style = {{flex: 1, backgroundColor: 'white'}}>
          <View>
            <SearchBar />
          </View>

          <View style = {{marginTop: hp('4%'), marginLeft: wp('3%'), flexDirection: 'row'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
              
                <RoundButton placeName="Entire Place"/>
                <RoundButton placeName="Private Room" onPress={() => navigation.navigate('Private')}/>
                <RoundButton placeName="Hotel Room"/>
                <RoundButton placeName="Best Room"/>
                <RoundButton placeName="Free Room"/>
              
            </ScrollView>
          </View>

          <View style = {{ backgroundColor: 'transparent', marginLeft: wp('1%'), marginTop: hp('4%')}}>
            <Text style = {styles.featureHeader}>Top Rated Spaces</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: hp('2%')}}>
                <SimplePlaces />
                <SimplePlaces />
                <SimplePlaces />
                <SimplePlaces />

            </ScrollView>

          </View>

          <View style = {{ backgroundColor: 'transparent', marginLeft: wp('1%')}}>
            <Text style = {styles.featureHeader}>Explore Spaces Around You</Text>
          <View style={{marginTop: hp('2%'), flexDirection: 'row'}}>
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - DHA" />
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - JOHAR TOWN" />

          </View>

          <View style={{marginTop: hp('2%'), flexDirection: 'row'}}>
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - DHA" />
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - JOHAR TOWN" />

          </View>

          <View style={{marginTop: hp('2%'), flexDirection: 'row'}}>
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - DHA" />
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - JOHAR TOWN" />

          </View>

          </View>

      </SafeAreaView>
    </ScrollView>
  );
}

export default Explore;

const styles = StyleSheet.create({
  featureHeader: {
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: wp('4%'),
  },
})
