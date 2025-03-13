import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

import { router, Link } from "expo-router"

export default function Index() {
    function signUp() {
        router.navigate("/sign-up")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={styles.label}>
                    Criar Conta
                </Text>
            </TouchableOpacity>

            <Link href="/product/25">Abrir produto</Link>

            <Link href={{ pathname: "/home" }}>Ir para a home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 32 },
    label: { fontSize: 16, fontWeight: "bold", color: "#FFF" },
    button: { backgroundColor: "#000", padding: 32, paddingVertical: 10, borderRadius: 10 },
})