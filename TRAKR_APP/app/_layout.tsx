// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Écran de connexion (par défaut) */}
      <Stack.Screen name="index" />
      {/* Groupe d’onglets */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
