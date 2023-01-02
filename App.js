import React, {createContext, useState} from 'react';

import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Photos from './screens/Photos';
import {NavigationContainer} from '@react-navigation/native';
import PhotosDisplay from './screens/PhotosDisplay';
import Videos from './screens/Videos';
import VideosDisplay from './screens/VideosDisplay';
export const AppContext = createContext([]);
const Stack = createStackNavigator();
const App = () => {
  const [videosActive, setVideosActive] = useState(false);
  const [videosDisplayActive, setVideosDisplayActive] = useState(false);
  console.log('APP', videosActive);
  // const link =
  //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  return (
    <>
      <AppContext.Provider
        value={{
          videosActive,
          setVideosActive,
          videosDisplayActive,
          setVideosDisplayActive,
        }}>
        {videosActive ? (
          <>
            <Videos />
            {/* {!videosDisplayActive && <Videos />} */}
            {/* {videosDisplayActive && <VideosDisplay />} */}
          </>
        ) : (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{header: () => null}}
                name="Home"
                component={Home}
              />
              <Stack.Screen
                options={{header: () => null}}
                name="Photos"
                component={Photos}
                videosActive={videosActive}
              />
              <Stack.Screen
                options={{header: () => null}}
                name="photosDisplay"
                component={PhotosDisplay}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </AppContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
