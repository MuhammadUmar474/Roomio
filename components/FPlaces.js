import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import PlaceDetailScreen from './PlaceDetailScreen';
// import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';

const FPlaces = () => {

  const [defaultRating, setDefaultRating] = useState(4)
 
  const handleChange = (value) => {
    setDefaultRating(value);
  }

  return (
    <View style={styles.container}>
            <View style={{flex: 2}}>
              <Image source={require('../assets/images/chinies.jpg')}
               style={{flex:1, height: null, width: null, resizeMode: 'cover'}} />
                <FontAwesome name={"heart"} size={20} color={"red"} style={{position: 'absolute', padding: '2%', marginLeft: wp('80%')}}/>
            </View>
               <View style = {{marginTop: hp('1%')}}>
                <Text style={styles.cityName}>Islamabad</Text>
                <Text style={styles.description}>Classical Apartment on the Royal Mile</Text>
                <View style ={{flexDirection: 'row'}}>
                <Text style={styles.price}>Rs 10000/night</Text>
                <View style ={styles.starContainer}>
                <StarRating
                    fullStarColor={'#41BBB5'}
                    disabled={false}
                    maxStars={5}
                    starSize={10}
                    rating={defaultRating}
                    selectedStar={(rating) => handleChange(rating)}
                />
                <Text style = {{marginTop: -6}}> (4.8)</Text>
                </View>
                </View>
               </View>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp('45%'), 
    width: wp('95%'), 
    margin: hp('0.5%'), 
    marginLeft: wp('2%'), 
    padding: 10,
    shadowOffset: { width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 3,
  },
  cityName: {
    fontWeight: 'bold', 
    marginLeft: wp('1%'), 
    marginTop: hp('0.5%'), 
    color: '#EE2073', 
    fontSize: 12
  },
  description: {
    fontWeight: 'bold', 
    marginLeft: wp('1%'), 
    marginTop: hp('0.5%'), 
    fontSize: 14
  },
  price: {
    fontWeight: 'bold', 
    marginLeft: wp('1%'), 
    marginTop: hp('0.5%'), 
    color: '#41BBB5', 
    fontSize: 12
  },
  starContainer: {
    flexDirection: 'row', 
    marginTop: 7, 
    marginLeft: wp('45%'), 
    color: '#41BBB5'
  },

})

export default FPlaces;