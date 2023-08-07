import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {useSelector} from 'react-redux';
import {RootState} from '../models';

interface IProps {
  navigation: RootStackNavigation;
}

const Home = (props: IProps) => {
  const homeState = useSelector<RootState, RootState['home']>(
    state => state.home,
  );
  const onPress = () => {
    props.navigation.navigate('Detail', {
      id: 100,
    });
  };
  return (
    <View>
      <Text>Home{homeState.num}</Text>
      <Button title="跳转到详情页" onPress={onPress} />
    </View>
  );
};
export default Home;
