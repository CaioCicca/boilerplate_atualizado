import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

export default function Contact() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}