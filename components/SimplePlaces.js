import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Modal, Pressable, TouchableOpacity, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatepickerRange from '../components/react-native-range-datepicker/RangeDatepicker/index';
import StarRating from 'react-native-star-rating';
import Graph from './Graph';
// import Rheostat from "react-native-rheostat";

const SimplePlaces = () => {

  const [Room, setRooms] = useState(0);
  const [Bed, setBeds] = useState(0);
  const [Bathroom, setBathrooms] = useState(0);

  // useEffect(()=>{
  //   console.log("Test Room", Room);
  //   console.log("Test Bed", Bed);
  //   console.log("Test BathRoom", Bathroom);
  // })

  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const width = wp('42%');
  const height = hp('38%');

  const [defaultRating, setDefaultRating] = useState(3);
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

  return (
    <View style={{height: hp('38%'), width: wp('44%'), margin: wp('1.5%')}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('-4%')}}>
            <TouchableOpacity
              style={{justifyContent:'flex-start'}}
                onPress={() => setModalVisible(!modalVisible)} 
            >
                <FontAwesome name={"arrow-left"} size={25} />
            </TouchableOpacity>

                <Text style={{fontSize: 13, color: '#414141', fontWeight: 'bold', marginTop: 2}}> Filters </Text>

            <TouchableOpacity 
            >
                <Text style={{fontSize: 14, color: '#414141', marginTop: 2}}> Reset </Text>
            </TouchableOpacity>

              
            </View>

            <Text style={{fontSize: 16, color: '#414141', fontWeight: 'bold', marginTop: hp('1%')}}>Property Type</Text>

            <View style = {{ height: hp('8%'), marginTop: hp('2%')}}>
            <View style = {{
                flexDirection: 'row', padding: 5,
                backgroundColor: 'white',
                shadowOffset: { width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 3,
                borderRadius: 40
                }}>
                <TextInput 
                underlineColorAndroid = "transparent"
                placeholder = " Select Property Type "
                placeholderTextColor = "grey"
                style = {{ flex: 1, fontWeight: '700', backgroundColor: 'white', color: '#ABABAB'}}
                />
            </View>
            </View>

            <View style={{marginTop: hp('1%')}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#414141'}}>Price Range</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#414141'}}>900 to 10000</Text>
              </View>
              <Text style={{color: '#414141'}}>The average price per night is 900</Text>

              {/* <Rheostat values={demoTwoValues} min={0} max={100} 
              snap snapPoints={demoSnaps}/> */}
              <View>
                <Graph />
              </View>

            </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: hp('1%'), color: '#414141'}}>Availability</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14, marginTop: hp('1.5%'), color: '#414141'}}>Check in/Check out</Text>
                <TouchableOpacity style={styles.buttonCalender}
                onPress={() => setSecondModalVisible(true)}
                >
                  <Text style = {{color: 'white', fontSize: 13, alignItems: 'center', marginTop: hp('1%')}}>Show Calender</Text>
                </TouchableOpacity>
              </View>

              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: hp('2%'), color: '#414141'}}>Rooms and Beds</Text>

              <View>
              <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>1 Room</Text>
                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setRooms(Math.max(0, Room - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>

                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Room}</Text>

                    <Pressable 
                    onPress ={() => setRooms(Room + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>2 Bed</Text>
                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setBeds(Math.max(0, Bed - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>

                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Bed}</Text>

                    <Pressable 
                    onPress ={() => setBeds(Bed + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>1 Bathroom</Text>
                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setBathrooms(Math.max(0, Bathroom - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>

                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Bathroom}</Text>

                    <Pressable 
                    onPress ={() => setBathrooms(Bathroom + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('7%')}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 14, color: '#414141', marginTop: 2}}> Cancel </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonFilter}
                //  onPress={() => navigation.navigate('Imageslider')}
                >
                  <Text style = {{color: 'white', fontSize: 13, alignItems: 'center', marginTop: hp('1%')}}>Save</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setSecondModalVisible(!secondModalVisible);
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('-3%')}}>
            <TouchableOpacity
              style={{justifyContent:'flex-start'}}
                onPress={() => setSecondModalVisible(!secondModalVisible)} 
            >
                <FontAwesome name={"arrow-left"} size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{fontSize: 14, color: '#414141', marginTop: 2}}> Reset </Text>
            </TouchableOpacity>
            </View>
              <DatepickerRange
              startDate = '13052017'
              untilDate = '26062017'
              onConfirm = {( startDate, untilDate ) => this.setState({ startDate, untilDate })}
              />

              <TouchableOpacity style={styles.buttonFilterCalender}
              //  onPress={() => navigation.navigate('Imageslider')}
              >
                <Text style = {{color: 'white', fontSize: 13, alignItems: 'center', marginTop: hp('1%')}}>Apply Filter</Text>
              </TouchableOpacity>

          </View>
        </View>
      </Modal>

      
          <View style={{flex: 2}}>
            <ScrollView
              pagingEnabled
              horizontal
              onScroll={change}
              scrollEventThrottle={16}
              showHorizontalScrollIndicator={false}
              style={{width, height}} >

              {images.map((image, index) => (
                <Image
                  key={index}
                  source={{uri: image}}
                  style={{width, height, resizeMode: 'cover'}}
                />
              ))}
              <FontAwesome name={"heart"} size={20} color={"red"} style={{position: 'absolute', padding: '2%', marginLeft: wp('36%')}}/>
            </ScrollView>
            <View style={styles.pagination}>
                {images.map((i, k) => (
                <Text key={k} style={k === active ? styles.activeDot : styles.dot}>
                    •
                  </Text>
                ))}
          </View>
            </View>
               <Pressable style={{flex: 1, padding: 2}} onPress={() => setModalVisible(true)}>
                <Text style={{fontWeight: 'bold', fontSize: 10}}>ISLAMABAD</Text>

                <View style ={{flexDirection: 'row', marginTop: 5, color: '#41BBB5'}}>
                  <StarRating
                      fullStarColor={'#41BBB5'}
                      emptyStarColor={'#41BBB5'}
                      disabled={false}
                      maxStars={1}
                      starSize={9}
                      rating={defaultRating}
                      selectedStar={(rating) => handleChange(rating)}
                  />
                  <Text style = {{marginTop: -2, fontSize: 9}}> 4.8 (60)</Text>
                </View>
                <Text style={{fontWeight: 'bold', marginTop: hp('0.2%'), fontSize: 14}}>Classical Apartment on the Royal Mile</Text>
                <Text style={{fontWeight: 'bold', marginTop: hp('0.2%'), color: '#41BBB5', fontSize: 12}}>Rs 10000/night</Text>
               </Pressable>
          </View>
  );
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
  centeredView: {
    flex: 1,
    marginTop: hp('3.5%'),
    alignItems: 'center',
  },
  modalView: {
    height: hp('85%'),
    width: wp('90%'),
    backgroundColor: "white",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonCalender: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#EE2073',
  },
  buttonFilter: {
    width: wp('30%'),
    height: hp('6%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    backgroundColor: '#EE2073',
  },
  buttonFilterCalender: {
    width: wp('30%'),
    height: hp('6%'),
    marginLeft: wp('40%'),
    padding: 2,
    borderRadius: 2,
    alignItems: 'center',
    backgroundColor: '#EE2073',
  },
  buttonPositive: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE2073',
    borderColor: '#EE2073'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  buttonNegative: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EE2073'
  },
});

export default SimplePlaces;
