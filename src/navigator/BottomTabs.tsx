import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from '@/pages/Account';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import {RootStackParamLIst} from '@/navigator/index';
import {
  RouteProp,
  TabNavigationState,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import Icon from '@/assets/iconfont';
import HomeTabs from '@/navigator/HomeTabs';

export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();
type Route = RouteProp<RootStackParamLIst, 'BottomTabs'> & {
  state?: TabNavigationState<{}>;
};

const getHeaderTitle = (route: Route) => {
  const routeName =
    route?.state?.routes[route?.state?.index].name ||
    route?.params?.screen ||
    'HomeTabs';
  switch (routeName) {
    case 'HomeTabs':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '账户';
    default:
      return '首页';
  }
};

const BottomTabs = () => {
  const navigation = useNavigation();
  const routes = useNavigationState(state => state.routes);
  useEffect(() => {
    const tmpData = routes?.[0] as unknown as Route;
    navigation.setOptions({
      headerTitle: getHeaderTitle(tmpData),
    });
  }, [navigation, routes]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f86442',
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-shouye" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: '我听',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-shoucang" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Found"
        component={Found}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-faxian" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
