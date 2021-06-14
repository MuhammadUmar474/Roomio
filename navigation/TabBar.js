import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/tabbarscreens/Explore';
import Favourite from '../screens/tabbarscreens/Favourite';
import Trip from '../screens/tabbarscreens/Trip';
import Inbox from '../screens/tabbarscreens/Inbox';
import Login from '../screens/tabbarscreens/Login';
import PlaceDetailScreen from '../components/PlaceDetailScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PrivateRoom from '../screens/PrivateRoom';
import ChatScreen from '../components/ChatScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function FavouriteScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourite"
        component={Favourite}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Place Details"
        component={PlaceDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function InboxScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Chat Screen"
        component={ChatScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

function ExploreScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Private"
        component={PrivateRoom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions = {{
          activeTintColor: 'red',
          inactiveTintColor: 'grey',
          style: {
              backgroundColor: 'white',
              borderTopWidth: 0,
              shadowOffset: { width: 5, height: 3},
              shadowColor: 'black',
              shadowOpacity: 0.5,
              elevation: 5,
          }
      }}>
        <Tab.Screen 
        name="Explore" 
        component={ExploreScreen}
        options = {{
            tabBarLabel: 'Explore',
            tabBarIcon: () => (
                <FontAwesome name = {"search"} size = {24} />
              ),
        }}
        />

        <Tab.Screen 
        name="Favourite" 
        component={FavouriteScreen}
        options = {{
            tabBarLabel: 'Favourite',
            tabBarIcon: () => (
                <FontAwesome name = {"heart"} size = {24} />
              ),
        }}
        />

        <Tab.Screen 
        name="Trip" 
        component={Trip}
        options = {{
            tabBarLabel: 'Trip',
            tabBarIcon: () => (
                <FontAwesome name = {"plane"} size = {24} />
              ),
        }}
        />

        <Tab.Screen 
        name="Inbox" 
        component={InboxScreens}
        options = {{
            tabBarLabel: 'Inbox',
            tabBarIcon: () => (
                <FontAwesome name = {"inbox"} size = {24} />
              ),
        }}
        />

        <Tab.Screen 
        name="Login" 
        component={Login}
        options = {{
            tabBarLabel: 'Login',
            tabBarIcon: () => (
                <FontAwesome name = {"user"} size = {24} />
              ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabBar;
