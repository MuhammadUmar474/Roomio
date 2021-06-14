import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet, Modal, Pressable } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const PrivateRoom = ({navigation}) => {

    const [Adult, setAdult] = useState(0);
    const [Children, setChildren] = useState(0);
    const [Infant, setInfant] = useState(0);

    const [defaultRating, setDefaultRating] = useState(3); 
    const [modalVisible, setModalVisible] = useState(false);

    const handleChange = (value) => {
        setDefaultRating(value);
      } 

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            
            <View style={{height: hp('7%'), backgroundColor: '#fff', justifyContent: 'center', elevation: 5}}>
                <TouchableOpacity
                style={{justifyContent:'flex-start', marginLeft: wp('2%')}}
                    onPress={() => navigation.navigate('Explore')} 
                >
                    <FontAwesome name={"long-arrow-left"} size={25} />
                </TouchableOpacity>
            </View>

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
                    <View>
                        <TouchableOpacity style={{alignItems: 'flex-end', padding: 5, marginRight: wp('2%')}}
                         onPress={() => setModalVisible(false)}>
                            <FontAwesome name="times" size={15}/>
                        </TouchableOpacity>
                    </View>
            <View style={{marginTop: hp('1%')}}>
              <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>Adult</Text>

                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setAdult(Math.max(0, Adult - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>
                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Adult}</Text>
                    <Pressable 
                    onPress ={() => setAdult(Adult + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>Children</Text>
                    <Text style = {{fontSize: 10, color: '#414141'}}>Under Age of 12</Text>
                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setChildren(Math.max(0, Children - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>
                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Children}</Text>
                    <Pressable 
                    onPress ={() => setChildren(Children + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style = {styles.row}>
                <View>
                    <Text style = {{fontSize: 14, color: '#414141'}}>Infant</Text>
                    <Text style = {{fontSize: 10, color: '#414141'}}>Under Age of 2</Text>
                </View>
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable 
                    onPress ={() => setInfant(Math.max(0, Infant - 1))}
                    style = {styles.buttonNegative}
                    >
                        <Text style ={{fontSize: 12, color: '#EE2073'}}>-</Text>
                    </Pressable>
                    <Text style ={{marginHorizontal: 10, fontSize: 16}}>{Infant}</Text>
                    <Pressable 
                    onPress ={() => setInfant(Infant + 1)}
                    style = {styles.buttonPositive}
                    >
                        <Text style ={{fontSize: 12, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
                </View>
            </View> 

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('5%'), marginTop: hp('2%'), elevation: 5}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 14, color: '#414141', marginTop: 2}}> Cancel </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSave}
                //  onPress={() => navigation.navigate('Imageslider')}
                >
                  <Text style = {{color: 'white', fontSize: 13, alignItems: 'center', marginTop: hp('1%')}}>Apply Filter</Text>
                </TouchableOpacity>
              </View>
                </View>
                </View>
            </Modal>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: wp('3%'), marginTop: hp('4%')}}>
                <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/images/chinies.jpg')} style={{ height: 80, width: 90, borderRadius: 3}}/>
                <View style={{marginLeft: wp('1%'), flexShrink: 1}}>
                    <Text style={{fontSize: 12, color: '#EE2073'}}>Private Room</Text>
                    <Text style={{fontSize: 15, color: '#414141', fontWeight: 'bold', marginLeft: wp('1%')}}>Classical Appartment on the Royal Mine</Text>
                    <View style ={{flexDirection: 'row', marginTop: hp('1%'), color: '#41BBB5',marginLeft: wp('1%')}}>
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
                  <Text style={{fontSize: 14, color: '#41BBB5', fontWeight: '700', marginTop: -5, marginLeft: wp('30%')}}>12000/Night</Text>
                </View>

                </View>

                </View>


            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.2, marginHorizontal: wp('4%')}}></View>

            <View style={{marginHorizontal: wp('4%'), marginTop: hp('4%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontSize: 10, color: '#1D1D1D', fontWeight: 'bold'}}>Check in</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, color: '#41BBB5', fontWeight: '700'}}>12</Text>
                        <View style={{marginTop: hp('1%'), marginLeft: wp('1%')}}>
                            <Text style={{fontSize: 14, color: '#414141'}}>Sep 2019</Text>
                            <Text style={{fontSize: 10, color: '#8F8F8F'}}>Wednesday</Text>
                        </View>
                    </View>
                </View>

                <FontAwesome name="long-arrow-right" size={20} style={{marginTop: hp('2%')}}/>

                <View>
                    <Text style={{fontSize: 10, color: '#1D1D1D', fontWeight: 'bold'}}>Check out</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, color: '#41BBB5', fontWeight: '700'}}>14</Text>
                        <View style={{marginTop: hp('1%'), marginLeft: wp('1%')}}>
                            <Text style={{fontSize: 14, color: '#414141'}}>Sep 2019</Text>
                            <Text style={{fontSize: 10, color: '#8F8F8F'}}>Friday</Text>
                        </View>
                    </View>
                </View>

            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.2, marginHorizontal: wp('4%')}}></View>

            <View style={{marginHorizontal: wp('4%'), marginTop: hp('4%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14, color: '#535353', fontWeight: 'bold'}}>Guests</Text>

                <TouchableOpacity
                onPress={() => setModalVisible(true)}
                >
                <Text style={{fontSize: 14, color: '#41BBB5', fontWeight: 'bold'}}>1 guest</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.2, marginHorizontal: wp('4%')}}></View>

            <View style={{marginHorizontal: wp('3%'), marginTop: hp('4%')}}>
            <Text style={{fontSize: 14, color: '#535353', fontWeight: 'bold'}}>Fee & Tax Details</Text>

            <View style={{marginTop: hp('4%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12, color: '#535353'}}>Rs 10000 x 2 night</Text>
                <Text style={{fontSize: 12, color: '#535353'}}>20000</Text>
            </View>

            <View style={{marginTop: hp('1%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12, color: '#535353'}}>Cleaning Fee</Text>
                <Text style={{fontSize: 12, color: '#535353'}}>500</Text>
            </View>

            <View style={{marginTop: hp('1%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12, color: '#535353'}}>Service Fee</Text>
                <Text style={{fontSize: 12, color: '#535353'}}>350</Text>
            </View>

            <View style={{marginTop: hp('1%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 12, color: '#535353'}}>Occupancy taxes & fees</Text>
                <Text style={{fontSize: 12, color: '#535353'}}>3000</Text>
            </View>

            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.2, marginHorizontal: wp('4%')}}></View>

            <View style={{marginHorizontal: wp('4%'), marginTop: hp('4%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 14, color: '#535353', fontWeight: 'bold'}}>Total</Text>
                <Text style={{fontSize: 14, color: '#535353', fontWeight: 'bold'}}>23850</Text>
            </View>

            <View style={{marginTop: hp('3%'), borderBottomColor: '#414141', borderBottomWidth: 0.2, marginHorizontal: wp('4%')}}></View>

            <View style={{marginHorizontal: wp('3%'), marginTop: hp('4%')}}>
                <Text style={{fontSize: 14, color: '#535353', fontWeight:'700'}}>Payment Method</Text>
                <View style={{marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={require('../assets/images/visa.png')} style={{ height: 20, width: 50}}/>
                <Image source={require('../assets/images/paypal.png')} style={{ height: 20, width: 50}}/>
                <Image source={require('../assets/images/mastercard.png')} style={{ height: 20, width: 50}}/>
                </View>
                <Text style={{fontSize: 12, color: '#787878', marginTop: hp('4%')}}>Card Number</Text>
                
                <View style={styles.cardRound}>
                <TextInput 
                placeholder = " 01364 54 "
                placeholderTextColor = "grey"
                style = {{ flex: 1, fontSize: 17, backgroundColor: 'white', color: '#535353', marginHorizontal: wp('2%')}}
                />
                </View>

                <View style={{marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12, color: '#787878', marginTop: hp('1%')}}>NAME ON CARD</Text>
                    <Text style={{fontSize: 12, color: '#787878', marginTop: hp('1%')}}>EXP DATE</Text>
                    <Text style={{fontSize: 12, color: '#787878', marginTop: hp('1%'), marginRight: wp('15%')}}>CVV</Text>
                </View>
                <View style={{marginTop: hp('1%'), flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={styles.cardName}>
                    <TextInput 
                    placeholder = ""
                    style = {{ flex: 1, fontSize: 17, backgroundColor: 'white', color: '#535353', marginHorizontal: wp('2%')}}
                    />
                    </View>

                    <View style={styles.cardEXP}>
                    <TextInput 
                    placeholder = "MM/YY"
                    style = {{ flex: 1, fontSize: 17, backgroundColor: 'white', color: '#535353', marginHorizontal: wp('2%')}}
                    />
                    </View>

                    <View style={styles.cardCVV}>
                    <TextInput 
                    placeholder = ""
                    style = {{ flex: 1, fontSize: 17, backgroundColor: 'white', color: '#535353', marginHorizontal: wp('2%')}}
                    />
                    <FontAwesome name="question-circle" size={15} style={{marginTop: hp('2%'), marginRight: wp('2%')}}/>
                    </View>
                </View>

                <View style={{marginTop: hp('3%')}}></View>

            </View>
            </ScrollView>
            <View style={{marginHorizontal: wp('3%'), marginTop: hp('4%'), elevation: 5}}> 
                <TouchableOpacity
                style={styles.checkoutButton}
                >
                    <Text style={{fontSize: 14, color: '#FFFFFF', fontWeight: 'bold'}}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    cardRound: {
        width: wp('90%'),
        height: hp('8%'),
        marginTop: hp('1%'),
        marginLeft: wp('1%'),
        padding: 2,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#EE2073B3',
      },
      cardName: {
        width: wp('40%'),
        height: hp('8%'),
        padding: 2,
        borderRadius: 25,
        elevation: 5,
        backgroundColor: '#fff'
      },
      cardEXP: {
        width: wp('25%'),
        height: hp('8%'),
        padding: 2,
        borderRadius: 30,
        elevation: 5,
        backgroundColor: '#fff'
      },
      cardCVV: {
        width: wp('25%'),
        height: hp('8%'),
        padding: 2,
        borderRadius: 30,
        elevation: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
      },
      checkoutButton: {
        width: wp('90%'),
        height: hp('7%'),
        marginLeft: wp('1%'),
        borderRadius: 2,
        backgroundColor: '#EE2073',
        justifyContent: 'center',
        alignItems: 'center',
      },
      centeredView: {
        flex: 1,
        marginTop: hp('27%'),
        alignItems: 'center',
      },
      modalView: {
        height: hp('45%'),
        width: wp('90%'),
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
        padding: 15,
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
      buttonSave: {
        width: wp('25%'),
        height: hp('6%'),
        padding: 2,
        borderRadius: 2,
        alignItems: 'center',
        backgroundColor: '#EE2073',
      },
})
export default PrivateRoom;
