import {  Text } from 'react-native'
import styles from "./styles"

const Title = ({name}) => {
  return <Text style={styles.title}>{name}</Text>
}

export default Title