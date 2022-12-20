import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Card from '../components/Card';
import {
  backgroundImage,
  back,
  Home,
  weddingCard,
  receptionCard,
  reception1,
  reception2,
  reception3,
  reception4,
  reception5,
  wedding1,
  wedding2,
  wedding3,
  wedding4,
  wedding5,
  t4,
  t6,
  t1,
  t3,t5
} from '../assets/Index';
import {AppContext} from '../App';
const collection = [
  {
    id: 1,
    name: 'wedding',
    cardImage: weddingCard,
    photos: [wedding2, wedding5, wedding3, wedding4, wedding1, t1],
  },
  {
    id: 2,
    name: 'reception',
    cardImage: receptionCard,
    photos: [reception1, reception2, reception3, reception4, reception5, t1],
  },
  {
    id: 3,
    name: 'family',
    cardImage: t3,
    photos: [t4, wedding5, wedding3, wedding4, wedding1, t1],
  },
  {
    id: 4,
    name: 'friends',
    cardImage: t6,
    photos: [t6, t1, reception3, t3, reception5, t5],
  },
];

const Photos = ({navigation, route}) => {
  const [photosSelected, setPhotosSelected] = useState('');

  const handlePress = data => {
    // setPhotosSelected(name);
    // console.log(photosSelected);
    navigation.navigate('photosDisplay', {data});
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={backgroundImage}
        resizeMode="cover">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}}>
          <View style={styles.headerSection}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Image source={back} style={styles.image}></Image>
            </TouchableOpacity>
            <Text style={styles.header}>PHOTOS</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Image source={Home} style={styles.image}></Image>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.cardContent}>
          <Card text="WEDDING" image={weddingCard} />

          <Card text="RECEPTION" image={receptionCard} />
        </View> */}
          <FlatList
            horizontal
            contentContainerStyle={styles.cardContent}
            data={collection}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View>
                  <Card
                    text={item.name}
                    image={item.cardImage}
                    data={item}
                    id={item.id}
                    onpress={handlePress}
                  />
                </View>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
    padding: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  header: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 60,
    width: 60,
    height: 60,
    marginHorizontal: 30,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginLeft: 20,
  },
});
