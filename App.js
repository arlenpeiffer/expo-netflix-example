import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import HomeStackNavigator from 'components/navigation/HomeStackNavigator';
import { COLORS } from 'constants/styles';
import styled from 'styled-components/native';
import { createAppContainer } from 'react-navigation';

const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
`;

// const AppContainer = styled.View`
//   flex: 1;
//   background-color: ${COLORS.GREY.BLACK_RUSSIAN};
// `;

const drawerRouteConfig = {
  Home: {
    screen: HomeStackNavigator
  }
};

const CustomDrawerContentComponent = props => {
  <DrawerContainer>
    <DrawerItems {...props} />
  </DrawerContainer>;
};

const drawerNavigatorConfig = {
  contentComponent: props => <CustomDrawerContentComponent {...props} />
};

const AppDrawer = createDrawerNavigator(
  drawerRouteConfig,
  drawerNavigatorConfig
);

const AppContainer = createAppContainer(HomeStackNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer>
        <StatusBar hidden={true} />
        <AppDrawer />
      </AppContainer>
    );
  }
}
// const App = createAppContainer(HomeStackNavigator);

export default App;
