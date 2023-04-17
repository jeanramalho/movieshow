import { View, Text, TextInput } from "react-native";
import { styles } from './styles'



export function Home () {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>O melhor entretenimento para você!</Text>
            <View style={styles.containerInput}>
                <TextInput placeholder="Buscar" />
            </View>
        </View>
    )
}