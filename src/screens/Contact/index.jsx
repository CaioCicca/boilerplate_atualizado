import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Contact() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Contact Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}