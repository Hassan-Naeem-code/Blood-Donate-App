import React, {useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// @components
import styles from './styles';

const Splash = () => {
  // const navigation = useNavigation();
  useEffect(() => {
    // const timer = setTimeout(() => navigation.navigate('Login'), 4000);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, []);

  return (
    <View style={styles.main_container}>
      <Image
        source={require('../../assets/Images/blood-drop.jpg')}
        style={styles.main_image}
      />
      {/* <View style={styles.firstWrapper}>
        <Img
          local={true}
          resizeMode={'contain'}
          style={styles.splashLogo}
          src={appLogos.logo}
        />
      </View>
      <View style={styles.secondWrapper}>
        <Text style={styles.splashHeading}>{t('splashHeading')}</Text>
        <Text style={styles.splashText}>{t('splashText')}</Text>
        <TouchableOpacity activeOpacity={0.9} onPress={handleNavigate}>
          <Img
            local={true}
            resizeMode={'contain'}
            style={styles.splashButton}
            src={appImages.splashButtonImage}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Splash;
