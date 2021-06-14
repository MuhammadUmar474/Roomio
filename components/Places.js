import React, { useState, Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import { SliderBox } from 'react-native-image-slider-box';

class Places extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image          // Local image
      ]
    };
  }
  render(){
  return (
    <View style={{height: hp('38%'), width: wp('44%'), margin: wp('1.5%')}}>
          <View style={{flex: 2, marginLeft: wp('1%')}}>
            <SliderBox 
              style={{width: wp('42%'), height: hp('38%'), resizeMode: 'cover'}} 
              images={this.state.images}
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
            />
          </View>
               <View style={{flex: 1, padding: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 10}}>ISLAMABAD</Text>

                <View style ={{flexDirection: 'row', marginTop: 5, color: '#41BBB5'}}>
                  <StarRating
                      fullStarColor={'#41BBB5'}
                      emptyStarColor={'#41BBB5'}
                      disabled={false}
                      maxStars={1}
                      starSize={9}
                      // rating={defaultRating}
                      // selectedStar={(rating) => handleChange(rating)}
                  />
                  <Text style = {{marginTop: -3, fontSize: 9}}> 4.8 (60)</Text>
                </View>
                <Text style={{fontWeight: 'bold', marginTop: hp('0.2%'), fontSize: 14}}>Classical Apartment on the Royal Mile</Text>
                <Text style={{fontWeight: 'bold', marginTop: hp('0.2%'), color: '#41BBB5', fontSize: 12}}>Rs 10000/night</Text>
               </View>
          </View>
  );
}
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: hp('5%'),
  },
  activeDot: {
    color: '#FFF',
    fontSize: hp('5%'),
  },
});

export default Places;
