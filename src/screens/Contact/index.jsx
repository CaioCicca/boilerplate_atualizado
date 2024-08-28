import { View, Text } from 'react-native'
import MyButton from '../../components/MyButton';

import BigTitle from '../../components/BigTitle';
import styles from './styles';

export default function Contact() {
  return (
    <View style={styles.container}>
      <BigTitle name={'Contact'}/>
      <MyButton screen={'Home'} name={'Go to Home'}/>
    </View>
  )
}