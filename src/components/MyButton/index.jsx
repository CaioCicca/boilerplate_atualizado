import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Title from '../Title';

const MyButton = ({ screen, name }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen)}>
            <Title name={name}/>
        </TouchableOpacity>
    )
}

export default MyButton
