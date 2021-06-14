import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FormInput from './components/FormInput';


const App = () => {
    return (
      <View style = {styles.container}>
        <Text style = {styles.textHeader}>Welcome Back !</Text>

        <FormInput 
              placeholderText="John Doe"
              iconType="person"
        />

        <FormInput 
              placeholderText="Password"
              iconType="lock-closed"
        />

        <TouchableOpacity style={styles.buttonLogin}
        //  onPress={() => navigation.navigate('Imageslider')}
        >
          <Text style = {{color: '#fff', fontWeight: 'bold', fontSize: 15}}>LOGIN</Text>
        </TouchableOpacity>

        <Text style = {{fontWeight: 'bold', fontSize: 15, marginTop: '8%', marginLeft: '25%'}}>Or Login Using Social account</Text>

        <View style = {styles.iconContainer}>
          <FontAwesome style = {styles.socialIconsStyle} name = {"facebook-square"} size = {40} />
          <FontAwesome style = {styles.socialIconsStyle} name = {"twitter-square"} size = {40} />
          <FontAwesome style = {styles.socialIconsStyle} name = {"google"} size = {40} />
        </View>

        <View style={styles.noAccount}>
            <Text style = {{fontSize: 15}} >Don't have an account?</Text>
          <TouchableOpacity
            // onPress={() => navigation.navigate('Signup')}
          >
          <Text style = {{fontSize: 15, fontWeight: 'bold', color: 'blue'}}>  Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 20,
  },
  buttonLogin: {
    width: '90%',
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: '10%',
    marginLeft: 20,
  },
  iconContainer: {
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop: '5%',
  },
  socialIconsStyle: {
    color: 'blue',
    margin: 10,
  },
  noAccount: {
    marginTop: '5%',
    justifyContent: 'center',
    fontSize: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
}) 
