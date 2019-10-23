import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'components/screens/HomeScreen';
import ShowDetailsScreen from 'components/screens/ShowDetailsScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Main: { screen: HomeScreen },
    ShowDetails: { screen: ShowDetailsScreen }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);

export default HomeStackNavigator;
