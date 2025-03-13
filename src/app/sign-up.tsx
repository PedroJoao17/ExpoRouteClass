import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

import { router, useLocalSearchParams } from "expo-router"

export default function SignUp() {
    const {name} = useLocalSearchParams()

    function back() {
        router.navigate("/")
    }
    return (
        <View style={styles.container}>

            <Text>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={back}>
                <Text style={styles.back}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    back: { fontSize: 16, fontWeight: "bold", color: "#FFF" },
    button: { backgroundColor: "#000", padding: 32, paddingVertical: 10, borderRadius: 10 },
})
