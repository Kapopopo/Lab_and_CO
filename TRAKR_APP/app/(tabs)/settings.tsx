import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import * as Sharing from "expo-sharing";
import { colors, radii } from "@/constants/theme";
// ... imports existants
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const router = useRouter();
const logout = async () => {
  await AsyncStorage.removeItem("trakr_connected");
  router.replace("../");
};



export default function SettingsScreen() {
  const [firmware, setFirmware] = useState("1.0.0");

  const checkFW = () => {
    setTimeout(() => setFirmware("1.0.1 ✓"), 1000);
  };

  const sharePos = async () => {
    try {
      await Sharing.shareAsync("", { dialogTitle: "Partager position TRAKR" });
    } catch {
      alert("Impossible de partager.");
    }
  };

  const Row = ({ left, right }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{left}</Text>
      {right}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>

      <Row left="Style HUD" right={<Text style={styles.pill}>Minimal</Text>} />
      <Row
        left="Mise à jour du firmware"
        right={
          <Pressable style={styles.btnGhost} onPress={checkFW}>
            <Text style={styles.btnGhostTxt}>Vérifier</Text>
          </Pressable>
        }
      />
      <Row left="Version" right={<Text style={styles.value}>{firmware}</Text>} />
      <Row
        left="Partager la position"
        right={
          <Pressable style={styles.btn} onPress={sharePos}>
            <Text style={styles.btnTxt}>Partager</Text>
          </Pressable>
        }
      />

      <Row
        left="Se déconnecter"
        right={
          <Pressable style={[styles.btnGhost, { borderColor: "#ef4444aa" }]} onPress={logout}>
            <Text style={[styles.btnGhostTxt, { color: "#ffb4b4" }]}>Déconnecter</Text>
          </Pressable>
        }
      />

      <Text style={styles.footer}>
        © {new Date().getFullYear()} TRAKR · Couleurs #8bcdf2 & #d3d3d3
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: "#e8f1ff", fontWeight: "800", fontSize: 18, marginBottom: 8 },
  row: {
    backgroundColor: "#111936cc",
    borderColor: "#ffffff22",
    borderWidth: 1,
    borderRadius: radii.lg,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: { color: "#e8f1ff" },
  value: { color: colors.primary, fontWeight: "700" },
  pill: { color: "#c7d3ff", opacity: 0.9 },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  btnTxt: { color: "#0a0f1f", fontWeight: "800" },
  btnGhost: {
    backgroundColor: "#ffffff11",
    borderWidth: 1,
    borderColor: "#ffffff22",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  btnGhostTxt: { color: "#e8f1ff", fontWeight: "700" },
  footer: { color: "#c7d3ff", opacity: 0.7, marginTop: 16, textAlign: "center" },
});
