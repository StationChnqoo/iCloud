import {AppRegistry, StatusBar, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import {name as appName} from './app.json';
import Stacks from './src/navigation';
import { useEffect } from 'react';

const iCloud = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <View style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <Stacks />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => iCloud);
