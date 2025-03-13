import { Stack } from "expo-router"

export default function Layout() {
    return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{title: "Entrar"}}/>
        <Stack.Screen name="sign-up" options={{title: "Criar Conta"}}/>
    </Stack>
    )
}