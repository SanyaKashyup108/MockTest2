import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feather from '@expo/vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreens from '../screens/ProfileScreens';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import LibraryScreens from '../screens/LibraryScreens';
import PlaylistsScreen from '../screens/PlaylistsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
   
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';

              } else if (route.name === 'Library') {
            iconName = 'folder-open';
          } else if (route.name === 'Playlists') {
            iconName = 'mic';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {

              iconName = focused ? 'settings' : 'settings-outline';
            }
            

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Library" component={LibraryScreens} />
           <Tab.Screen name="Playlists" component={PlaylistsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreens} />
       
      </Tab.Navigator>
  
  );
}