import React, { useState }  from 'react';
import * as Font from 'expo-font';
import SplashScreen from './screens/SplashScreen';
import { AppLoading } from 'expo';
import Navigator from './routes/homestack';

export default function App() {
    return(
      <Navigator />
    );
  
}

