import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

import { router, useLocalSearchParams } from "expo-router"

export default function Product() {

    const { id } = useLocalSearchParams()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                ID do produto: {id}
            </Text>

            <TouchableOpacity onPress={() => router.back }>
                <Text>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 32 },
    title: { fontSize: 22, color: "#000" },
})