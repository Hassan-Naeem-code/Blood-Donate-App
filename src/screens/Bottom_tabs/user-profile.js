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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {signOut} from '../../../Store/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const getUser = useSelector(({auth}) => {
    return auth.auth;
  });
  console.log('User data is here', getUser);
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
            <ScrollView>
              <View style={styles.area_for_donor_card}>
                <View style={styles.container}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri:
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIASM7DD3BCZPnM801mQhaycwPCVi3rix3Gw&usqp=CAU',
                      }}
                      style={styles.coverImage}
                    />
                    <TouchableOpacity
                      style={styles.edit_btn}
                      onPress={() => {
                        navigation.navigate('EditProfile');
                      }}>
                      <FontAwesome name={'edit'} size={25} color={'white'} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.profileImage}>
                    <Image
                      source={{
                        uri:
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyHFl4plGPmSyoMFgfXDVnX1ZLwd-j3eJgw&usqp=CAU',
                      }}
                      style={{width: 100, height: 100, borderRadius: 50}}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.area_for_donor_card_detail}>
                <View style={styles.inner_view_under_second_view}>
                  <View style={styles.flex_2}>
                    <Image
                      source={{uri: getUser?.profileImage}}
                      style={{width: '70%', height: 60, borderRadius: 100}}
                    />
                  </View>
                  <View style={styles.flex_3}>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_7}>
                        <Text style={styles.nameStyle}>{getUser?.name}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex_2_center}>
                    <Text style={styles.bloodStyle}>
                      <MaterialCommunityIcon
                        name={'blood-bag'}
                        size={20}
                        color={'red'}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.area_for_donor_card_detail}>
                <View style={styles.inner_view_under_second_view}>
                  <View style={styles.flex_2}>
                    <Image
                      source={require('../../assets/Images/mobile.png')}
                      style={{width: '70%', height: 60, borderRadius: 100}}
                    />
                  </View>
                  <View style={styles.flex_3}>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_7}>
                        <Text style={styles.numberStyle}>
                          {getUser?.number
                            ? getUser?.number
                            : 'Mobile Number Not Verified'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex_2_center}>
                    <Text style={styles.bloodStyle}>
                      <MaterialCommunityIcon
                        name={'blood-bag'}
                        size={20}
                        color={'red'}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.area_for_donor_card_detail}>
                <View style={styles.inner_view_under_second_view}>
                  <View style={styles.flex_2}>
                    <Image
                      source={require('../../assets/Images/address.png')}
                      style={{width: '70%', height: 60, borderRadius: 100}}
                    />
                  </View>
                  <View style={styles.flex_3}>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_7}>
                        <Text style={styles.numberStyle}>
                          {getUser?.address
                            ? getUser?.address
                            : 'Address Not Verified'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex_2_center}>
                    <Text style={styles.bloodStyle}>
                      <MaterialCommunityIcon
                        name={'blood-bag'}
                        size={20}
                        color={'red'}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.area_for_donor_card_detail}>
                <View style={styles.inner_view_under_second_view}>
                  <View style={styles.flex_2}>
                    <Image
                      source={require('../../assets/Images/blood.jpg')}
                      style={{width: '70%', height: 60, borderRadius: 100}}
                    />
                  </View>
                  <View style={styles.flex_3}>
                    <View style={styles.flex_row}>
                      <View style={styles.flex_7}>
                        <Text style={styles.numberStyle}>
                          Blood Group: {getUser?.blood_group}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.flex_2_center}>
                    <Text style={styles.bloodStyle}>
                      <MaterialCommunityIcon
                        name={'blood-bag'}
                        size={20}
                        color={'red'}
                      />
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserProfile;

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
  // area_for_donor_card_detail: {
  //   backgroundColor: 'white',
  //   padding: 10,
  //   borderRadius: 10,
  //   elevation: 5,
  //   marginVertical: 15,
  // },
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
    backgroundColor: 'white',
    padding: 10,
  },
  area_for_donor_card_detail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 5,
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
    backgroundColor: 'white',
    borderRadius: 5,
    width: '40%',
    padding: 13,
    marginVertical: 8,
    alignSelf: 'center',
  },
  btn_text: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
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
  flex_3_center: {
    flex: 3,
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
  firstArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  secondArea: {
    flex: 5,
    backgroundColor: '#FFFEDF',
  },
  innerAreaOfSecond: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  thirdArea: {
    flex: 1,
    backgroundColor: 'green',
  },
  imageContainer: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  profileImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  edit_btn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
