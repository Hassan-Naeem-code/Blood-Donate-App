import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {signOut} from '../../../Store/actions/auth';
import {useDispatch} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import A_POS from '../Blood_groups/a_positive';
import A_NEG from '../Blood_groups/a_negative';
import AB_POS from '../Blood_groups/ab_positive';
import B_POS from '../Blood_groups/b_positive';
import O_POS from '../Blood_groups/o_positive';

const Tab = createMaterialTopTabNavigator();

const FindDonor = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.second_view}>
          <View style={styles.inner_view_under_second_view}>
            <View style={styles.empty_view}></View>
            <View style={styles.image_view}>
              <Image
                source={require('../../assets/Images/blood-drop.jpg')}
                style={styles.main_image}
              />
            </View>
            <View style={styles.empty_view}></View>
          </View>
        </View>
        <View style={styles.centerContentStyle}>
          <View style={styles.main_view}>
            <View style={styles.inner_view_under_second_view_margin}>
              <View style={styles.flex_5_center}>
                <Text style={styles.titleStyle}>Blood Donation App </Text>
              </View>
              <View style={styles.flex_2_center}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(signOut());
                  }}>
                  <Text style={styles.color_white}>
                    {' '}
                    {'  '}
                    <AntDesign name={'logout'} size={20} color={'white'} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Tab.Navigator>
              <Tab.Screen name="A_POS" component={A_POS} />
              <Tab.Screen name="A_NEG" component={A_NEG} />
              <Tab.Screen name="AB_POS" component={AB_POS} />
              <Tab.Screen name="B_POS" component={B_POS} />
              <Tab.Screen name="O_POS" component={O_POS} />
            </Tab.Navigator>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default FindDonor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  numberStyle: {
    fontSize: 16,
    fontWeight: '900',
    color: 'red',
  },
  bloodStyle: {
    fontSize: 16,
    fontWeight: '900',
  },
  centerContentStyle: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  main_view: {
    flex: 3,
    backgroundColor: 'red',
    elevation: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  second_view: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_view_under_second_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_view_under_second_view_margin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  area_for_donor_card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  empty_view: {
    flex: 2,
  },
  image_view: {
    flex: 3,
  },
  main_image: {
    width: '100%',
    height: 170,
  },
  login_image: {
    width: '60%',
    height: 150,
  },
  w_100: {
    width: '100%',
  },
  btn: {
    backgroundColor: 'red',
    borderRadius: 25,
    width: '50%',
    padding: 13,
    marginVertical: 15,
  },
  btn_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
  route_text: {
    color: 'red',
    fontSize: 19,
    fontWeight: 'bold',
  },
  color_white: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  flex_5_center: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_center: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  flex_7: {
    flex: 7,
  },
  flex_row: {
    flexDirection: 'row',
  },
});
