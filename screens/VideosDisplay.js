import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Video from 'react-native-video';
import {videosDisplayBackground, back, Home, play} from '../assets/Index';
import {AppContext} from '../App';
const VideosDisplay = props => {
  const {
    videosDisplayActive,
    setVideosDisplayActive,
    videosActive,
    setVideosActive,
  } = useContext(AppContext);
  const [showModel, setShowModel] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();
  const handleBack = () => {
    setVideosDisplayActive(false);
  };
  const handleBackHome = () => {
    setVideosActive(false);
    setVideosDisplayActive(false);
    props.setData('');
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={videosDisplayBackground}
        resizeMode="cover">
        <View style={{backgroundColor:'rgba(0,0,0,0.5)',flex:1}}>
          <View
            style={styles.headerSection}
            onPress={() => setVideosActive(false)}>
            <TouchableOpacity style={styles.button} onPress={handleBack}>
              <Image source={back} style={styles.topImage}></Image>
            </TouchableOpacity>
            <Text style={styles.header}>{props.data.name}</Text>
            <TouchableOpacity style={styles.button} onPress={handleBackHome}>
              <Image source={Home} style={styles.topImage}></Image>
            </TouchableOpacity>
          </View>

          {/* <Video
          controls={true}
          source={vid1}
          onBuffer={() => {}}
          onError={() => {}}
          muted={false}
          resizeMode="cover"
          style={{width: '100%', height: "100%", backgroundColor: '#000'}}
        /> */}
          <FlatList
            contentContainerStyle={styles.cardContent}
            horizontal
            data={props.data.thumbnail}
            keyExtractor={item => item.toString()}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View style={styles.card}>
                    <ImageBackground
                      source={item}
                      style={{flex: 1}}
                      resizeMode="cover">
                      <TouchableOpacity
                        onPress={() => {
                          setShowModel(true), setCurrentVideo(index);
                        }}
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1,
                          backgroundColor: 'rgba(0,0,0,0.3)',
                        }}>
                        <Image source={play} style={styles.playImage} />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                  <Modal
                    transparent={false}
                    style={styles.modal}
                    visible={showModel}
                    onRequestClose={() => {}}>
                    <View>
                      <Text onPress={() => setShowModel(false)}>Cancel</Text>
                      {props.data.video.map((ele, pos) => {
                        return (
                          <>
                            {pos == currentVideo && (
                              <Video
                                controls={true}
                                source={ele}
                                onBuffer={() => {}}
                                onError={() => {}}
                                muted={false}
                                resizeMode="cover"
                                style={{
                                  width: '100%',
                                  height: 1200,
                                  backgroundColor: '#000',
                                }}
                              />
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideosDisplay;

const styles = StyleSheet.create({
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
  card: {
    width: 450,
    height: 350,
    margin: 4,
    borderWidth: 5,
    borderColor: '#fff',
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  playImage: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 80,
  },
});
