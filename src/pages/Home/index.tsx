import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../models';
import Carousel from '@/pages/Home/Carousel';
import {useMount} from 'ahooks';

interface IProps {
  navigation: RootStackNavigation;
}

const Index = (props: IProps) => {
  const dispatch = useDispatch();
  useMount(() => {
    dispatch({type: 'home/fetchCarousels'});
  });
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
      <Text>Home</Text>
      <Button title="跳转到详情页" onPress={onPress} />
      <Carousel />
    </View>
  );
};
export default Index;
