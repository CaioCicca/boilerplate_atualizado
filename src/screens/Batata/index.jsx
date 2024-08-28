import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import MyButton from "../../components/MyButton"
import BigTitle from '../../components/BigTitle'
import styles from './styles'
import { useState } from 'react'

export default function Batata() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [protagonista, setProtagonista] = useState("");

  const cadastrar = () => {
    console.log(`Nome do filme: ${nomeFilme} - Protagonista: ${protagonista}`)
  }
  return (
    <View style={styles.container}>
      <BigTitle name={'Batata'}/>
      <MyButton screen={"Contact"} name={"Go to Contact"}/>
      <MyButton screen={"Home"} name={"Go to Home"}/>
      <View>
        <BigTitle name={'Cadastrou'}/>
        <TextInput 
        placeholder='nome do filme'
        value={nomeFilme}
        onChangeText={setNomeFilme}
        />
        <TextInput 
        placeholder='Protagonista'
        value={protagonista}
        onChangeText={setProtagonista}
        />
        <TouchableOpacity onPress={cadastrar}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}