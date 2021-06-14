import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ViewMoreText from 'react-native-view-more-text';
import RoundButtonDetailedPlace from './RoundButtonDetailedPlace';
import StarRating from 'react-native-star-rating';
import SimplePlaces from '../components/SimplePlaces';

const PlaceDetailScreen = ({ navigation }) => {

  const width = wp('100%');
  const height = hp('40%');

  const [defaultRating, setDefaultRating] = useState(4);
  const [active, setActive] = useState(0);
  const images = [
    'https://images.pexels.com/photos/4346353/pexels-photo-4346353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/6077783/pexels-photo-6077783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5117800/pexels-photo-5117800.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/4131522/pexels-photo-4131522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/6102477/pexels-photo-6102477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
 
  const handleChange = (value) => {
    setDefaultRating(value);
  }
  
  renderViewMore =(onPress) =>{
    return(
      <Text style={{fontSize: 12, color: '#41BBB5'}} onPress={onPress}>Read more</Text>
    )
  };

  renderViewLess = (onPress) =>{
    return(
      <Text style={{fontSize: 12, color: '#41BBB5'}} onPress={onPress}>Read less</Text>
    )
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
            <ScrollView
              pagingEnabled
              horizontal
              onScroll={change}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              style={{width, height}} >

              {images.map((image, index) => (
                <Image
                  key={index}
                  source={{uri: image}}
                  style={{width, height, resizeMode: 'cover'}}
                />
              ))}
              <TouchableOpacity style={{position: 'absolute', padding: '2%', marginLeft: wp('5%'), marginTop: hp('2%')}} onPress={() => navigation.navigate('Favourite')}>
                <FontAwesome name={"long-arrow-left"} size={20} color={"white"} style={{ }}/>
              </TouchableOpacity>
              <FontAwesome name={"share-alt"} size={20} color={"white"} style={{position: 'absolute', padding: '2%', marginLeft: wp('83%'), marginTop: hp('2%')}}/>
              <FontAwesome name={"heart-o"} size={20} color={"white"} style={{position: 'absolute', padding: '2%', marginLeft: wp('90%'), marginTop: hp('2%')}}/>
              <View style={{position: 'absolute', backgroundColor: '#41BBB5',marginTop: hp('34%'), height: hp('6%'), width: wp('28%'), borderTopRightRadius: 10, justifyContent: 'center'}}>
              <Text style={{ fontSize: 14, color: 'white',marginLeft: hp('1%')}}> 12000/Night</Text>
              </View>
            </ScrollView>
            <View style={styles.pagination}>
                {images.map((i, k) => (
                <Text key={k} style={k === active ? styles.activeDot : styles.dot}>
                    •
                  </Text>
                ))}
            </View>
        </View>

        <View>
          <View style={{marginTop: hp('3%'), marginLeft: wp('2%')}}>
            <Text style={{fontSize: 10}}>Private Room in Apartment</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Classical Apartment on the Royal Mile</Text>
            <View style = {{marginTop: hp('1%'), flexDirection: 'row'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              
                <RoundButtonDetailedPlace placeName="1 Guest" />
                <RoundButtonDetailedPlace placeName="1 Bed" />
                <RoundButtonDetailedPlace placeName="1 Bedroom" />
                <RoundButtonDetailedPlace placeName="1 Shared Bath" />
            </ScrollView>
          </View>
          <View style={{marginTop: hp('1%'), padding: 5}}>
            <ViewMoreText
            numberOfLines={3}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}
            >
            <Text style={{marginTop: hp('1%'), fontSize: 12, color: '#414141', padding: 10}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Text>
            </ViewMoreText>
          </View>

          <View style={{height: hp('15%'), backgroundColor: '#EFF2F7', flexDirection: 'row', alignItems: 'center'}}>
            <View style={{ marginLeft: wp('2%')}}>
              <Image source={require('../assets/images/chinies.jpg')} style={{borderRadius: 30, height: 60, width: 60}}/>
            </View>
            <View style={{marginLeft: wp('4%')}}>
              <Text style={{fontSize: 14, color: '#414141', fontWeight: 'bold'}}>Brendon William</Text>
              <Text style={{fontSize: 12, color: '#414141'}}>San Francisco, California, United State</Text>
            </View>
          </View>

          <View style={{marginTop: hp('3%'), marginLeft: wp('2%')}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Amenities</Text>
            
            <View style={{flexDirection: 'row', marginTop: hp('1%')}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome name="circle" size={8} color={'#545454'}/>
                <Text style={{marginLeft: wp('2%')}}>Air Conditioning</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp('10%')}}>
                <FontAwesome name="circle" size={8} color={'#545454'}/>
                <Text style={{marginLeft: wp('2%')}}>Dryer</Text>
              </View>
            </View>
            
            <View style={{flexDirection: 'row', marginTop: hp('1%')}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome name="circle" size={8} color={'#545454'}/>
                <Text style={{marginLeft: wp('2%')}}>Essentials</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp('19.5%')}}>
                <FontAwesome name="circle" size={8} color={'#545454'}/>
                <Text style={{marginLeft: wp('2%')}}>Hot Water</Text>
              </View>
            </View>

            <View style={{marginTop: hp('3%')}}>
              <TouchableOpacity style={{ flexDirection: 'row'}}>
                <Text style={{fontSize: 14, color: '#41BBB5'}}>see all amenities</Text>
                <FontAwesome name="long-arrow-right" size={15} color={'#41BBB5'} style={{marginLeft: wp('2%'), marginTop: hp('0.5%')}}/>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.5, marginRight: wp('5%')}}>

            </View>
            
            <View style={{marginTop: hp('3%'), marginLeft: wp('2%'), flexDirection: 'row'}}>
              <View style={{height: hp('10%'), width: wp('25%'), alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: 'white'}}>
                  <FontAwesome name="bed" size={13}/>
                  <Text style={{fontSize: 10}}>1 double bed</Text>
              </View>

              <View style={{height: hp('10%'), width: wp('25%'), alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: 'white', marginLeft: wp('5%')}}>
                  <FontAwesome name="bed" size={13}/>
                  <Text style={{fontSize: 10}}>1 single bed</Text>
              </View>
            </View>

            <View style={{marginTop: hp('3%'), marginLeft: wp('2%')}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#414141'}}>Location</Text>
              <Text style={{fontSize: 14, color: '#414141'}}>Johar Town, Lahore</Text>
              <ViewMoreText
              numberOfLines={2}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              >
              <Text style={{marginTop: hp('1%'), fontSize: 12, color: '#414141', padding: 10}}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </Text>
            </ViewMoreText>
            <Image source={require('../assets/images/chinies.jpg')} style={{ height: hp('30%'), width: wp('85%')}}/>
            <Text style={{fontSize: 12, color: '#535353'}}>Exact Location will be provided after booking</Text>

            <View style={{marginTop: hp('2%')}}>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#535353'}}>Checkin</Text>
                <Text style={{fontSize: 12, color: '#535353', marginLeft: wp('37%')}}>10AM - 12AM (midnight)</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#535353'}}>Checkout</Text>
                <Text style={{fontSize: 12, color: '#535353', marginLeft: wp('61%')}}>10AM</Text>
              </View>
            </View>

            <View style={{marginTop: hp('2%')}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>House Rules</Text>

              <View style={{flexDirection: 'row', marginTop: hp('1%')}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome name="circle" size={8} color={'#545454'}/>
                <Text style={{marginLeft: wp('2%')}}>No Smoking</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp('10%')}}>
                <FontAwesome name="circle" size={8} color={'#545454'}/>
                <Text style={{marginLeft: wp('2%')}}>No Pets</Text>
              </View>
            </View>
            
            <View style={{flexDirection: 'row', marginTop: hp('1%')}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome name="circle" size={8} color={'#545454'}/>
                <Text style={{marginLeft: wp('2%')}}>No Infants</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: wp('13%')}}>
                <FontAwesome name="circle" size={8} color={'#545454'}/>
                <Text style={{marginLeft: wp('2%')}}>No Parties or Events</Text>
              </View>
            </View>

            <View style={{marginTop: hp('3%'), flexDirection: 'row'}}>
              <TouchableOpacity style={{flexDirection: 'row', marginLeft: wp('2%')}}>
                <Text style={{fontSize: 14, color: '#41BBB5'}}>see all rules</Text>
                <FontAwesome name="long-arrow-right" size={15} color={'#41BBB5'} style={{marginLeft: wp('2%'), marginTop: hp('0.5%')}}/>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.5, marginRight: wp('5%')}}>

            </View>

            <View style={{marginTop: hp('5%'), flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Connect with Host</Text>
            <TouchableOpacity style={{flexDirection: 'row', marginLeft: wp('36%')}}>
              <Text style={{fontSize: 14, color: '#41BBB5'}}>Messages</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: hp('5%'), borderBottomColor: '#414141', borderBottomWidth: 0.5, marginRight: wp('5%')}}>

            </View>

            <View style={{marginTop: hp('3%')}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Reviews</Text>
            <View style={{marginTop: hp('3%'), flexDirection: 'row'}}>
            <Image source={require('../assets/images/chinies.jpg')} style={{borderRadius: 25, height: 50, width: 50}}/>
            <View style={{marginLeft: wp('3%'), marginTop: hp('1.5%')}}>
              <Text style={{fontSize: 12, color: '#535353'}}>John Deo</Text>
              <Text style={{fontSize: 10, color: '#535353'}}>10 Nov</Text>
            </View>
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

            <ViewMoreText
              numberOfLines={2}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              >
              <Text style={{marginTop: hp('1%'), fontSize: 12, color: '#414141', padding: 10, marginRight: wp('2%')}}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </Text>
            </ViewMoreText>

            <View style={{marginTop: hp('2%'), flexDirection: 'row', marginLeft: wp('48%')}}>
              <TouchableOpacity style={{flexDirection: 'row', marginLeft: wp('2%')}}>
                <Text style={{fontSize: 14, color: '#41BBB5'}}>View all Reviews</Text>
                <FontAwesome name="long-arrow-right" size={15} color={'#41BBB5'} style={{marginLeft: wp('2%'), marginTop: hp('0.5%')}}/>
              </TouchableOpacity>
            </View>

            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.5, marginRight: wp('5%')}}></View>

            <View style={{marginTop: hp('3%')}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Spaces you may like</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop: hp('2%')}}>
                <SimplePlaces />
                <SimplePlaces />
                <SimplePlaces />
                <SimplePlaces />

            </ScrollView>
            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.5, marginRight: wp('5%')}}></View>

            </View>
            </View>
          </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: wp('5%'), marginVertical: hp('2%')}}>
          <View>
            <Text style={{fontSize:12, color: '#414141', fontWeight: 'bold'}}>Rs 10000/Night</Text>
            <View style ={styles.lastStar}>
                <StarRating
                    fullStarColor={'#41BBB5'}
                    disabled={false}
                    maxStars={5}
                    starSize={10}
                    rating={defaultRating}
                    selectedStar={(rating) => handleChange(rating)}
                />
                <Text style = {{marginTop: -3, fontSize: 10, color: '#535353'}}> (4.8)</Text>
              </View>
          </View>
          <TouchableOpacity style={styles.buttonFilter}
                //  onPress={() => navigation.navigate('Imageslider')}
                >
                  <Text style = {{color: 'white', fontSize: 13, alignItems: 'center', marginTop: hp('1%')}}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
     </ScrollView>
  );
}

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    // bottom: -15,
    alignSelf: 'flex-end',
    marginTop: hp('33%'),
    paddingHorizontal: wp('4%')
  },
  dot: {
    color: 'white',
    fontSize: hp('5%'),
  },
  activeDot: {
    color: '#41BBB5',
    fontSize: hp('5%'),
  },
  starContainer: {
    flexDirection: 'row', 
    marginTop: hp('4%'), 
    marginLeft: wp('35%'), 
    color: '#41BBB5'
  },
  lastStar: {
    flexDirection: 'row', 
    marginTop: hp('1%'),  
    color: '#41BBB5'
  },
  buttonFilter: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    marginLeft: wp('35%'),
    backgroundColor: '#EE2073',
  },
});
