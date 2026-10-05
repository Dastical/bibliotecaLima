 import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="aula-componente" />
      <Stack.Screen name="aula-rotas" />
      <Stack.Screen name="recomendacao" />
      <Stack.Screen name="aula-jsx" />
      <Stack.Screen name="aula-fundamentos" />
      <Stack.Screen name="aula-auth" />
      <Stack.Screen name="aula-dados" />
    </Stack>
  );
}