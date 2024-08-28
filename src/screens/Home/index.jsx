import { View, Text } from 'react-native'

import MyButton from "../../components/MyButton"
import BigTitle from '../../components/BigTitle';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <BigTitle name={'Home'}/>
      <MyButton screen={"Contact"} name={"Go to Contact"}/>
      <MyButton screen={"Batata"} name={"Go to Batata"}/>
    </View>
  )
}