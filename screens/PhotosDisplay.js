import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {createRef, useEffect, useRef, useState} from 'react';
import {back, Home, play} from '../assets/Index';
const PhotosDisplay = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeout, settimeout] = useState(false);
  const [current, setCurrent] = useState();
  const [slideShow, setSlideShow] = useState(false);
  const {data} = route.params;
  const videoRef = createRef();
  let {width: ScreenWidth, height: Screenheight} = Dimensions.get('window');

  const handleSlideShow = ele => {
    setSlideShow(true);
    console.log(data.photos.length);
  };
  setTimeout(function () {
    if (current < data.photos.length) {
      settimeout(!timeout);
    }
  }, 3000);
  useEffect(() => {
    setCurrent(prev => prev + 1);

    if (current == data.photos.length - 1) {
      setModalVisible(false);
      setCurrent('');
      setSlideShow(false);
    }
  }, [slideShow == true && timeout]);
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.cardContent}
        data={data.photos}
        numColumns={3}
        keyExtractor={item => item.toString()}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true), setCurrent(index);
                }}>
                <Image
                  style={[
                    styles.image,
                    {width: ScreenWidth / 3.1, height: ScreenWidth / 2},
                  ]}
                  source={item}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Modal
                transparent={true}
                style={styles.modal}
                visible={modalVisible}
                onRequestClose={() => {}}>
                <View style={{flex: 1, backgroundColor: '#000'}}>
                  <View></View>
                  {data.photos.map((ele, pos) => {
                    return (
                      <>
                        {pos == current && (
                          <View style={{}} key={pos.toString()}>
                            <ImageBackground
                              style={{
                                width: ScreenWidth,
                                height: Screenheight - 100,
                              }}
                              source={ele}
                              resizeMode="cover">
                              <View
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  width: '100%',
                                }}>
                                <View style={styles.headerSection}>
                                  <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                      setModalVisible(false);
                                    }}>
                                    <Image
                                      source={back}
                                      style={styles.topImage}></Image>
                                  </TouchableOpacity>
                                  <Text style={styles.header}>RECEPTION</Text>
                                  <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                      navigation.navigate('Home'),
                                        setModalVisible(false);
                                    }}>
                                    <Image
                                      source={Home}
                                      style={styles.topImage}></Image>
                                  </TouchableOpacity>
                                </View>
                              </View>
                              <View
                                style={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  width: '100%',
                                }}>
                                <View style={styles.headerSection}>
                                  <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => handleSlideShow(ele)}>
                                    <Image
                                      style={styles.topImage}
                                      source={play}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </ImageBackground>
                          </View>
                        )}
                      </>
                    );
                  })}
                </View>
              </Modal>
            </View>
          );
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
        }}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Photos')}>
            <Image source={back} style={styles.topImage}></Image>
          </TouchableOpacity>
          <Text style={styles.header}>{data.name}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Image source={Home} style={styles.topImage}></Image>
          </TouchableOpacity>
        </View>
      </View>
      {/* <ScrollView style={styles.cardContent}>
        {data.photos.map(ele => {
          return (
            <View style={{flexDirection:"row",flexWrap:"wrap",backgroundColor:"#fff"}}>
              <Image style={styles.image} source={ele} resizeMode="cover" />
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

export default PhotosDisplay;

const styles = StyleSheet.create({
  cardContent: {
    margin: 1,
  },
  image: {
    // width: 300,
    // height: 450,
    margin: 4,
    flexGrow: 2,
    marginHorizontal: 4,
  },
  videos: {
    width: '100%',
    height: 300,
    backgroundColor: '#000',
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    height: 100,
  },
  topImage: {
    width: 60,
    height: 60,
  },
  header: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 60,
    width: 60,
    height: 60,
    marginHorizontal: 30,
    borderColor: '#fff',
  },
  modal: {
    flex: 1,
  },
});
