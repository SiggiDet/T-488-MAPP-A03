import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Include Imports Here 
const Cinema = <Text>Hello</Text>
const Upcoming = <Text>Hello</Text>

//Screen names
const cinemaName = "Cinema";
const upcomingName = "Upcoming";

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={cinemaName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === cinemaName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === upcomingName) {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={cinemaName} component={Upcoming} />
        <Tab.Screen name={upcomingName} component={Cinema} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Footer;