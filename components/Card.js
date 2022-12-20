import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Card = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onpress(props.data)}
      //   style={({pressed}) => ({
      //     width: 300,
      //     height: 350,
      //     backgroundColor: '#fff',
      //     margin: 5,
      //     borderWidth: 2,
      //     borderColor: '#fff',
      //   })}
      style={styles.card}>
      <ImageBackground source={props.image} style={{flex: 1}}>
        <View style={styles.textContent}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 350,
    margin: 5,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  textContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 50,
  },
});
