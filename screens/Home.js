import {
  Button,
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppContext} from '../App';
import React, {useState, useEffect, useContext} from 'react';
import backgroundImage from '../assets/backgroundImage.webp';
const Home = ({navigation}) => {
  const {videosActive, setVideosActive} = useContext(AppContext);
  console.log('Home', videosActive);
  const {width, height} = Dimensions.get('window');
  const [orientation, setOrientation] = useState('portrait');
  console.log(width, height);
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      console.log(isPortrait() ? 'portrait' : 'landscape');
      setOrientation(isPortrait() ? 'portrait' : 'landscape');
    });
  }, []);
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={backgroundImage}
        resizeMode="cover">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
          <View style={styles.headerContent}>
            <Text
              style={[
                styles.header,
                {top: orientation == 'portrait' ? 280 : 100},
              ]}>
              WEDDING EVENT
            </Text>
          </View>
          <View style={styles.buttonSection}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Photos', {orientation})}>
              <Text style={styles.buttonText}>PHOTOS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // style={({pressed}) => ({
              //   // backgroundColor: pressed
              //   //   ? 'rgba(255, 255, 255, 0.5)'
              //   //   : 'rgba(255, 255, 255, 0.05)',
              //   opacity: pressed ? 0.2 : 1,
              //   borderWidth: 5,
              //   borderColor: '#fff',
              //   display: 'flex',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              //   width: 250,
              //   height: 100,
              //   margin: 20,
              // })}
              onPress={() => setVideosActive(true)}
              style={styles.button}>
              <Text style={styles.buttonText}>VIDEOS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    color: '#fff',
    fontSize: 75,
    position: 'absolute',
    fontWeight: '500',
  },
  buttonSection: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // backgroundColor: 'transparent',
    width: 250,
    height: 100,
    borderColor: '#fff',
    borderWidth: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '500',
  },
});
