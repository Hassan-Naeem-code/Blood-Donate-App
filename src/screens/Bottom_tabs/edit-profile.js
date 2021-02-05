import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {updateUserInfo} from '../../../Store/actions/auth';
import {useDispatch,useSelector} from 'react-redux';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const getUser = useSelector(({auth}) => {
    return auth.auth;
  });
  const [name, setName] = useState(getUser.name);
  const [email, setEmail] = useState(getUser.email);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [blood_group, setBloodGroup] = useState(getUser.blood_group);
  const [profileImage, setProfileImage] = useState(
    'https://firebasestorage.googleapis.com/v0/b/blood-donation-app-32279.appspot.com/o/life-blood-centre-formerly-known-as-rajkot-voluntary-blood-bank-research-centre-blood-transfusion-hospital-png-favpng-XViDdzGVhhjgcEEuBnb7hPSqL_t.jpg?alt=media&token=e52f77db-a56e-4373-a33a-da595f3030aa',
  );
  const [coverImage, setCoverImage] = useState(
    'https://firebasestorage.googleapis.com/v0/b/blood-donation-app-32279.appspot.com/o/images.jpg?alt=media&token=1d16ae22-beef-4756-8d9e-6b7a6d8b38ec',
  );
  const check_Validate_sign_up = () => {
    if (
      name == '' ||
      email == '' ||
      address == '' ||
      number == '' ||
      blood_group == '' ||
      (name == '' && email == '' && number == '' && blood_group == '' && address == '')
    ) {
      ToastAndroid.show('Please Fill Up All The Fields', 2000);
    } else {
      let user = {
        name,
        email,
        address,
        number,
        blood_group,
        profileImage,
        coverImage,
        id: getUser.id
      };
      dispatch(updateUserInfo(user,navigation));
    }
  };
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
            <ScrollView>
              {/* <Image
              source={require('../../assets/Images/drop.png')}
              style={styles.login_image}
            /> */}
              <Text style={styles.titleStyle}>EDIT PROFILE</Text>
              <Form style={styles.w_100}>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input
                    value={name}
                    onChangeText={(text) => {
                      setName(text);
                    }}
                    editable={false}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                    }}
                    editable={false}
                  />
                </Item>
                <Item floatingLabel>
                  <Label>Blood Group </Label>
                  <Input
                    value={blood_group}
                    onChangeText={(text) => {
                      setBloodGroup(text);
                    }}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Address</Label>
                  <Input
                    value={address}
                    onChangeText={(text) => {
                      setAddress(text);
                    }}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Mobile Number</Label>
                  <Input
                    value={number}
                    onChangeText={(text) => {
                      setNumber(text);
                    }}
                    keyboardType={'numeric'}
                  />
                </Item>
              </Form>
              <TouchableOpacity
                style={styles.btn}
                onPress={check_Validate_sign_up}>
                <Text style={styles.btn_text}>
                  Submit{' '}
                  <Fontisto name={'blood-drop'} size={20} color={'#fff'} />
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    marginVertical: 10,
  },
  centerContentStyle: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  main_view: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
  },
  second_view: {
    flex: 1,
    backgroundColor: 'red',
  },
  inner_view_under_second_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    alignSelf: 'center',
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
    textAlign: 'center',
  },
});
