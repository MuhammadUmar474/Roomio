import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../../components/SearchBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Places from '../../components/Places';
import FPlaces from '../../components/FPlaces';
import SimplePlaces from '../../components/SimplePlaces';
import RoundButton from '../../components/RoundButton';


const Favourite = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style = {{flex: 1, backgroundColor: 'white'}}>
          <View>
            <SearchBar />
          </View>

          <View style = {{marginTop: hp('4%'), marginLeft: wp('3%'), flexDirection: 'row'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={16}>
              
                <RoundButton placeName="Entire Place"/>
                <RoundButton placeName="Private Room"/>
                <RoundButton placeName="Hotel Room"/>
                <RoundButton placeName="Best Room"/>
                <RoundButton placeName="Free Room"/>
              
            </ScrollView>
          </View>

          <View style = {{marginTop: hp('5%')}}>
            <Text style ={styles.featureHeader}>Featured Spaces</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Place Details')}>
            <FPlaces />
            </TouchableOpacity>
          </View>

          <View style = {{ backgroundColor: 'transparent'}}>
            <Text style = {styles.featureHeader}>Top Rated Spaces</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} style={{marginTop: hp('2%')}}>
              <SimplePlaces />
              <SimplePlaces />
              <SimplePlaces />
              <SimplePlaces />

            </ScrollView>

          </View>

          <View style = {{ backgroundColor: 'transparent'}}>
            <Text style = {styles.featureHeader}>Explore Spaces Around You</Text>
          <View style={{marginTop: hp('2%'), flexDirection: 'row'}}>
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - DHA" />
              <SimplePlaces imageUri={require('../../assets/images/chinies.jpg')} Name="PRIVATE ROOM - JOHAR TOWN" />

            </View>

          </View>
      

      </SafeAreaView>
    </ScrollView>
    );
}
export default Favourite;

const styles = StyleSheet.create({
    featureHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: wp('4%'),
    },
})
