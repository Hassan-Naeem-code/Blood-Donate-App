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
  ToastAndroid,
} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {logInUserEmailPassword} from '../../../Store/actions/auth';
import {useDispatch} from 'react-redux';
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate_login = () => {
    if (email == '' || password == '' || (email == '' && password == '')) {
      ToastAndroid.show('Please Fill The Fields', 2000);
    } else {
      let user = {
        email,
        password,
      };
      dispatch(logInUserEmailPassword(user));
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
            {/* <Image
              source={require('../../assets/Images/drop.png')}
              style={styles.login_image}
            /> */}
            <Text style={styles.titleStyle}>Blood Donation App</Text>
            <Form style={styles.w_100}>
              <Item floatingLabel>
                <Label>Username or Email Address</Label>
                <Input
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                  secureTextEntry={true}
                />
              </Item>
            </Form>
            <TouchableOpacity style={styles.btn} onPress={validate_login}>
              <Text style={styles.btn_text}>
                Login <Fontisto name={'blood-drop'} size={20} color={'#fff'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={styles.route_text}>
                Don't Have An Account Sign Up {''}
                <Fontisto name={'blood-drop'} size={20} color={'red'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
  },
  centerContentStyle: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  main_view: {
    flex: 3,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
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
});
