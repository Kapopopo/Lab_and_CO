// app/index.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import ProgressBar from "@/components/ProgressBar";
import { colors, radii } from "@/constants/theme";

export default function ConnectScreen() {
  const router = useRouter();
  const [connecting, setConnecting] = useState(false);
  const [progress, setProgress] = useState(0);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const val = await AsyncStorage.getItem("trakr_connected");
      if (val === "1") {
        router.replace("/(tabs)");
      } else {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ color: colors.muted, marginTop: 10 }}>Chargement...</Text>
      </View>
    );
  }


  const handleConnect = async () => {
    setConnecting(true);
    setProgress(5);

    // petite progression simulée
    const steps = [20, 35, 55, 75, 92, 100];
    for (const s of steps) {
      await new Promise((r) => setTimeout(r, 500));
      setProgress(s);
    }

    await AsyncStorage.setItem("trakr_connected", "1");
    router.replace("/(tabs)"); // on affiche l’app complète
  };

  const handleSkip = async () => {
    // optionnel: permettre d'entrer sans appairage (debug)
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <AnimatedBlobs />

      <View style={styles.card}>
        <View style={styles.logo} />
        <Text style={styles.brand}>TRAKR</Text>
        <Text style={styles.title}>Connexion aux lunettes</Text>
        <Text style={styles.sub}>
          Appaire tes <Text style={{ color: colors.primary, fontWeight: "800" }}>lunettes TRAKR</Text> pour activer le HUD, la
          boussole, la carte et toutes les fonctionnalités.
        </Text>

        <View style={styles.statusBox}>
          <Text style={styles.statusLabel}>État</Text>
          <Text style={styles.statusValue}>
            {connecting ? "Recherche & appairage..." : "En attente de connexion"}
          </Text>
          <View style={{ marginTop: 8 }}>
            <ProgressBar value={progress} />
          </View>
          {connecting && (
            <View style={styles.loadingRow}>
              <ActivityIndicator />
              <Text style={styles.loadingTxt}>Scan BLE · GPS · Services</Text>
            </View>
          )}
          <View style={styles.kv}>
            <Text style={styles.k}>Modèle</Text>
            <Text style={styles.v}>TRAKR Glass v1</Text>
          </View>
          <View style={styles.kv}>
            <Text style={styles.k}>N° série</Text>
            <Text style={styles.v}>TG-23-914A</Text>
          </View>
        </View>

        <Pressable
          style={[styles.btn, connecting && styles.btnDisabled]}
          onPress={handleConnect}
          disabled={connecting}
        >
          <Text style={styles.btnTxt}>{connecting ? "Connexion..." : "Connecter les lunettes"}</Text>
        </Pressable>

        <Pressable style={styles.ghost} onPress={handleSkip} disabled={connecting}>
          <Text style={styles.ghostTxt}>Continuer sans connecter (démo)</Text>
        </Pressable>

        <Text style={styles.footer}>
          Palette: <Text style={{ color: colors.primary }}>#8bcdf2</Text> & <Text style={{ color: colors.muted }}>#d3d3d3</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 20, justifyContent: "center" },
  card: {
    backgroundColor: "#111936cc",
    borderColor: "#ffffff14",
    borderWidth: 1,
    borderRadius: radii.xl,
    padding: 20,
  },
  logo: { width: 54, height: 54, borderRadius: 16, backgroundColor: colors.primary, marginBottom: 10 },
  brand: { color: colors.primary, fontWeight: "900", letterSpacing: 3, marginBottom: 6 },
  title: { color: colors.ink, fontSize: 22, fontWeight: "900", marginBottom: 6 },
  sub: { color: "#c7d3ff", opacity: 0.9 },
  statusBox: {
    marginTop: 16,
    backgroundColor: "#0f152c",
    borderColor: "#ffffff14",
    borderWidth: 1,
    borderRadius: radii.lg,
    padding: 14,
  },
  statusLabel: { color: colors.muted, fontSize: 12 },
  statusValue: { color: colors.ink, fontWeight: "700", marginTop: 2 },
  loadingRow: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 10 },
  loadingTxt: { color: colors.muted },
  kv: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },
  k: { color: colors.muted },
  v: { color: colors.ink, fontWeight: "700" },
  btn: {
    marginTop: 16,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  btnDisabled: { opacity: 0.7 },
  btnTxt: { color: "#0a0f1f", fontWeight: "900" },
  ghost: {
    marginTop: 10,
    backgroundColor: "#ffffff10",
    borderColor: "#ffffff22",
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  ghostTxt: { color: "#e8f1ff", fontWeight: "700" },
  footer: { color: "#c7d3ff", opacity: 0.7, textAlign: "center", marginTop: 14 },
});
