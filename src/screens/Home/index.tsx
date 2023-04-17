import { View, Text, TextInput } from "react-native";
import { MagnifyingGlass } from 'phosphor-react-native'
import { styles } from './styles'



export function Home () {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>O melhor do entretenimento!</Text>
            <View style={styles.containerInput}>
                <TextInput placeholder="Buscar" style={styles.input}/>
                <MagnifyingGlass color="#FFF" size={25} weight="light" />
            </View>
        </View>
    )
}