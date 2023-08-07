import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {
          width: 80,
        },
        tabBarIndicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home1" component={Home} />
      <Tab.Screen name="Home2" component={Home} />
    </Tab.Navigator>
  );
};
export default HomeTabs;
