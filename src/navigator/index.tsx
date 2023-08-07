import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import {Platform, StyleSheet} from 'react-native';

export type RootStackParamLIst = {
  BottomTabs: {
    screen?: string;
  };
  Detail: {
    id: number;
  };
};
export type RootStackNavigation = StackNavigationProp<RootStackParamLIst>;

let Stack = createStackNavigator<RootStackParamLIst>();
// { navigator screen}
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerMode: 'float',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          // headerStatusBarHeight: StatusBar.currentHeight,
          headerStyle: {
            // backgroundColor: '#f86442',
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }),
          },
        }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen
          options={{
            headerTitle: '详情页',
          }}
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
