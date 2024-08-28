import {  Text } from 'react-native'
import styles from "./styles"

const BigTitle = ({name}) => {
  return <Text style={styles.title}>{name}</Text>
}

export default BigTitle