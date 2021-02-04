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

const AB_Positive = ()=> {
    return (
        <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DonorDetail');
          }}>
          <View style={styles.area_for_donor_card}>
            <View style={styles.inner_view_under_second_view}>
              <View style={styles.flex_2}>
                <Image
                  source={require('../../assets/Images/background-banner.jpg')}
                  style={{width: '80%', height: 80, borderRadius: 100}}
                />
              </View>
              <View style={styles.flex_3}>
                <View style={styles.flex_row}>
                  <View style={styles.flex_7}>
                    <Text style={styles.nameStyle}>Name Here</Text>
                  </View>
                </View>
                <View style={styles.flex_row}>
                  <View style={styles.flex_7}>
                    <Text style={styles.numberStyle}>
                      <MaterialCommunityIcon
                        name={'cellphone-iphone'}
                        size={20}
                        color={'white'}
                      />{' '}
                      Mobile Number
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.flex_2_center}>
                <Text style={styles.bloodStyle}>
                  AB+{' '}
                  <MaterialCommunityIcon
                    name={'blood-bag'}
                    size={20}
                    color={'white'}
                  />
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DonorDetail');
          }}>
          <View style={styles.area_for_donor_card}>
            <View style={styles.inner_view_under_second_view}>
              <View style={styles.flex_2}>
                <Image
                  source={require('../../assets/Images/background-banner.jpg')}
                  style={{width: '80%', height: 80, borderRadius: 100}}
                />
              </View>
              <View style={styles.flex_3}>
                <View style={styles.flex_row}>
                  <View style={styles.flex_7}>
                    <Text style={styles.nameStyle}>Name Here</Text>
                  </View>
                </View>
                <View style={styles.flex_row}>
                  <View style={styles.flex_7}>
                    <Text style={styles.numberStyle}>
                      <MaterialCommunityIcon
                        name={'cellphone-iphone'}
                        size={20}
                        color={'white'}
                      />{' '}
                      Mobile Number
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.flex_2_center}>
                <Text style={styles.bloodStyle}>
                  AB+{' '}
                  <MaterialCommunityIcon
                    name={'blood-bag'}
                    size={20}
                    color={'white'}
                  />
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
    )
}


export default AB_Positive;
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
        color: 'white',
      },
      numberStyle: {
        fontSize: 16,
        fontWeight: '900',
        color: 'white',
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
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 5,
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
  