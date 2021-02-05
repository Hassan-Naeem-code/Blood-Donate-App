import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import AllDonor from '../Bottom_tabs/all-donor';
import DonorDetail from '../Bottom_tabs/donor-details';
import UserProfile from '../Bottom_tabs/user-profile';
import EditProfile from '../Bottom_tabs/edit-profile';
import FindDonorComponent from '../Bottom_tabs/find-donor';
import ShowDonorInfo from '../Bottom_tabs/show_donor_info';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const {Screen, Navigator} = Tab;
 
const Home = ()=>{
return(
  <Stack.Navigator>
    <Stack.Screen name="AllDonor" component={AllDonor} options={{headerShown: false}} />
    <Stack.Screen name="DonorDetail" component={DonorDetail} options={{headerShown: false}} />
  </Stack.Navigator>
)
}

const FindDonor=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="FindDonorComponent" component={FindDonorComponent} options={{headerShown: false}} />
    <Stack.Screen name="ShowDonorInfo" component={ShowDonorInfo} options={{headerShown: false}} />
  </Stack.Navigator>
  )
}

const User = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="UserProfile" component={UserProfile} options={{headerShown: false}} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />
    </Stack.Navigator>
  )
  }

const Navs = ()=> {
    return (
        <Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            }  else if (route.name === 'FindDonor') {
              iconName = focused ? 'address-card' : 'address-card-o';
            } else if (route.name === 'User') {
              iconName = focused ? 'user' : 'user-o';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: '#000',
          tabStyle: {
            backgroundColor: 'white',
            borderColor: 'white',
          },
        }}>
        <Screen name="Home" component={Home} />
        <Screen
          name="FindDonor"
          component={FindDonor}
        />
        <Screen name="User" component={User} />
      </Navigator>
    )
}

export default Navs;