import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AppContext} from '../App';
import {
  back,
  Home,
  play,
  backgroundImage,
  weddingCard,
  receptionCard,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  vid1,
  vid2,
  vid3,
  vid4,
  vid5,
  vid6,
} from '../assets/Index';
import Card from '../components/Card';
import VideosDisplay from './VideosDisplay';
const collection = [
  {
    id: 1,
    name: 'teaser',
    cardImage: receptionCard,
    thumbnail: [t1, t5, t3],
    video: [vid1, vid5, vid3],
  },
  {
    id: 2,
    name: 'wedding',
    cardImage: weddingCard,
    thumbnail: [t4, t5, t6],
    video: [vid4, vid5, vid6],
  },
  {
    id: 3,
    name: 'trailer',
    cardImage: receptionCard,
    thumbnail: [t4, t5, t6],
    video: [vid4, vid5, vid6],
  },
  {
    id: 4,
    name: 'complete recording',
    cardImage: weddingCard,
    thumbnail: [t4, t5, t6],
    video: [vid4, vid5, vid6],
  },
  {
    id: 5,
    name: 'sangeet',
    cardImage: receptionCard,
    thumbnail: [t4, t5, t6],
    video: [vid4, vid5, vid6],
  },
  {
    id: 6,
    name: 'mehendi',
    cardImage: weddingCard,
    thumbnail: [t4, t5, t6],
    video: [vid4, vid5, vid6],
  },
];

const Videos = () => {
  const {
    videosActive,
    setVideosActive,
    setVideosDisplayActive,
    videosDisplayActive,
  } = useContext(AppContext);
  const {height, width} = Dimensions.get('window');
  const [data, setData] = useState();
  const handleBack = () => {
    setVideosActive(false);
    console.log('VIDEOS FUNCTION', videosActive);
  };
  function handlePress(element) {
    setVideosDisplayActive(true);
    setData(element);
  }
  return (
    <>
      {!videosDisplayActive && (
        <View style={styles.container}>
          <ImageBackground
            style={{flex: 1}}
            source={backgroundImage}
            resizeMode="cover">
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
              <View
                style={styles.headerSection}
                onPress={() => setVideosActive(false)}>
                <TouchableOpacity style={styles.button} onPress={handleBack}>
                  <Image source={back} style={styles.topImage}></Image>
                </TouchableOpacity>
                <Text style={styles.header}>VIDEOS</Text>
                <TouchableOpacity style={styles.button} onPress={handleBack}>
                  <Image source={Home} style={styles.topImage}></Image>
                </TouchableOpacity>
              </View>
              <FlatList
                contentContainerStyle={styles.cardContent}
                horizontal
                data={collection}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({item}) => {
                  return (
                    <Card
                      text={item.name}
                      image={item.cardImage}
                      data={item}
                      id={item.id}
                      onpress={handlePress}
                    />
                  );
                }}
              />
            </View>
          </ImageBackground>
        </View>
      )}
      {videosDisplayActive && <VideosDisplay data={data} setData={setData} />}
    </>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {flex: 1},
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
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginBottom:50
  },
});
