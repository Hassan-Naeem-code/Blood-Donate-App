import {RESTAURANT_FOOD_ADD} from '../constants/actiontypes';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export function restaurantFoodAddProcess(food, navigation) {
  return async (dispatch) => {
    await firestore().collection('dishes').add(food);
    ToastAndroid.show('Food Dish Added Successfully', 2000);
    navigation.navigate('RestaurantHome');
  };
}

export function fecthAllDishes(uid) {
  return async (dispatch) => {
    let dishItem = await firestore()
      .collection('dishes')
      .where('uid', '==', uid)
      .get();
    dishItem.forEach(function (doc) {
      let dish = doc.data();
      dish.id = doc.id;
      dispatch({type: RESTAURANT_FOOD_ADD, payload: dish});
    });
  };
}
