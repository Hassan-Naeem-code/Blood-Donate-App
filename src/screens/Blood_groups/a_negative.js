import React, {useState, useEffect} from 'react';
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
import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {signOut, bring_A_Negative} from '../../../Store/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const A_Negative = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const wait = (time) => {
    setTimeout(() => {
      setRefreshing(false);
    }, time);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(bring_A_Negative('A-',user.uid));
      }
    });
    wait(1200);
  }, []);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(bring_A_Negative('A-',user.uid));
      }
    });
  }, []);
  const getanegative = useSelector(({auth}) => {
    return auth.anegative;
  });
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          {getanegative
            && getanegative.length >
              0 ? (
                getanegative.map((item, index) => {
                  return (
                    <View style={styles.area_for_donor_card} key={index}>
                      <View style={styles.inner_view_under_second_view}>
                        <View style={styles.flex_2}>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('ShowDonorInfo',{data:item});
                            }}>
                            <Image
                              source={{uri: item.profileImage}}
                              style={{
                                width: '70%',
                                height: 60,
                                borderRadius: 100,
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.flex_3}>
                          <View style={styles.flex_row}>
                            <View style={styles.flex_7}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('ShowDonorInfo',{data:item});
                                }}>
                                <Text style={styles.nameStyle}>
                                  {item.name}
                                </Text>
                              </TouchableOpacity>
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
                                {item.number
                                  ? item.number
                                  : 'Mobile Number Not Verified'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.flex_2_center}>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('ShowDonorInfo',{data:item});
                            }}>
                            <Text style={styles.bloodStyle}>
                              {item.blood_group}{' '}
                              <MaterialCommunityIcon
                                name={'blood-bag'}
                                size={20}
                                color={'white'}
                              />
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  );
                })
              ): null}
      </ScrollView>
    </View>
  );
};

export default A_Negative;
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
