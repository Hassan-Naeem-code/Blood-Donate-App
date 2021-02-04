import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Home/login';
import Signup from '../Home/signup';
import BottomNavs from '../Home/navs';
import UserProfile from '../Bottom_tabs/user-profile';
import AllDonors from '../Bottom_tabs/all-donor';
import DonorDetails from '../Bottom_tabs/donor-details';
import EditProfile from '../Bottom_tabs/edit-profile';
import FindDonor from '../Bottom_tabs/find-donor';
import A_Negitive from '../Blood_groups/a_negative';
import AB_Positive from '../Blood_groups/ab_positive';
import B_Positive from '../Blood_groups/b_positive';
import O_Positive from '../Blood_groups/o_positive';
import {useSelector,useDispatch} from 'react-redux';
import {fetchUserInfo} from '../../../Store/actions/auth';

const Stack = createStackNavigator();
const {Screen, Navigator} = Stack;
const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchUserInfo(user.uid));
      }
    });
  }, []);
  const getState = useSelector(({auth}) => {
    return auth.auth;
  });
  return (
    <NavigationContainer>
      {getState ? (
        <Navigator>
          <Screen
            name="BottomNavs"
            component={BottomNavs}
            options={{headerShown: false}}
          />
          <Screen
            name="UserProfile"
            component={UserProfile}
            options={{headerShown: false}}
          />
          <Screen
            name="AllDonors"
            component={AllDonors}
            options={{headerShown: false}}
          />
          <Screen
            name="DonorDetails"
            component={DonorDetails}
            options={{headerShown: false}}
          />
          <Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Screen
            name="FindDonor"
            component={FindDonor}
            options={{headerShown: false}}
          />
           <Screen
            name="B_Positive"
            component={B_Positive}
            options={{headerShown: false}}
          />
           <Screen
            name="A_Negitive"
            component={A_Negitive}
            options={{headerShown: false}}
          />
           <Screen
            name="AB_Positive"
            component={AB_Positive}
            options={{headerShown: false}}
          />
           <Screen
            name="O_Positive"
            component={O_Positive}
            options={{headerShown: false}}
          />
        </Navigator>
      ) : (
        <Navigator>
          <Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Navigator>
      )}
    </NavigationContainer>
  );
};
export default Navigation;
