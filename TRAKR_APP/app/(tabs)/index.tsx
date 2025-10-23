import { View, Text, StyleSheet, Pressable } from "react-native";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import HUDCard from "../../components/HUDCard"
import ProgressBar from "../../components/ProgressBar"
import Compass from "../../components/Compass";
import { colors, radii } from "../../constants/theme";
import * as Clipboard from "expo-clipboard";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [km, setKm] = useState(0.0);
  const [elev, setElev] = useState(0);
  const [pace, setPace] = useState("0:00");
  const [hr, setHr] = useState("--");
  const [batG, setBatG] = useState(76);
  const [batP, setBatP] = useState(56);
  const [gps, setGps] = useState(82);
  const [ble, setBle] = useState(94);

  useEffect(() => {
    const i = setInterval(() => {
      setKm(v => +(v + (Math.random() * 0.4 + 0.2)).toFixed(1));
      setElev(e => e + Math.floor(Math.random() * 8 - 4));
      const m = Math.floor(Math.random() * 4) + 5;
      const s = String(Math.floor(Math.random() * 60)).padStart(2, "0");
      setPace(`${m}:${s}`);
      setBatG(70 + Math.floor(Math.random() * 20));
      setBatP(40 + Math.floor(Math.random() * 40));
      setGps(60 + Math.floor(Math.random() * 35));
      setBle(80 + Math.floor(Math.random() * 15));
    }, 2500);
    return () => clearInterval(i);
  }, []);

  const sos = async () => {
    await Clipboard.setStringAsync("TRAKR SOS: 45.832, 6.865");
    alert("🚨 SOS transmis avec votre position !");
  };

  return (
    <View style={styles.container}>
      <AnimatedBlobs />
      <Text style={styles.title}>TRAKR</Text>
      <Text style={styles.subtitle}>
        Lunettes connectées pour la randonnée intelligente
      </Text>

      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.val}>{km.toFixed(1)} km</Text>
          <Text style={styles.lab}>Distance</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.val}>{elev} m</Text>
          <Text style={styles.lab}>Dénivelé +</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.val}>{pace}</Text>
          <Text style={styles.lab}>Allure</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.val}>{hr} bpm</Text>
          <Text style={styles.lab}>Cardio</Text>
        </View>
      </View>

      <View style={styles.row}>
        <HUDCard title="Batterie lunettes">
          <ProgressBar value={batG} />
        </HUDCard>
        <HUDCard title="Batterie téléphone">
          <ProgressBar value={batP} />
        </HUDCard>
      </View>
      <View style={styles.row}>
        <HUDCard title="Signal GPS">
          <ProgressBar value={gps} />
        </HUDCard>
        <HUDCard title="Bluetooth">
          <ProgressBar value={ble} />
        </HUDCard>
      </View>

      <View style={styles.compass}>
        <Compass />
      </View>

      <View style={styles.buttons}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Démarrer une sortie</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.ghost]} onPress={sos}>
          <Text style={styles.btnText}>SOS</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 20 },
  title: {
    color: colors.primary,
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 40,
  },
  subtitle: {
    color: colors.muted,
    textAlign: "center",
    opacity: 0.9,
    marginBottom: 20,
  },
  metrics: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  metric: {
    backgroundColor: "#111936cc",
    borderColor: "#ffffff14",
    borderWidth: 1,
    borderRadius: radii.md,
    padding: 10,
    width: "47%",
    marginBottom: 10,
  },
  val: { color: colors.primary, fontWeight: "800", fontSize: 18 },
  lab: { color: colors.muted, fontSize: 12 },
  row: { flexDirection: "row", gap: 10, marginTop: 10 },
  compass: { alignItems: "center", marginTop: 20 },
  buttons: { flexDirection: "row", gap: 10, justifyContent: "center", marginTop: 20 },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 14,
  },
  ghost: {
    backgroundColor: "#ffffff11",
    borderWidth: 1,
    borderColor: "#ffffff22",
  },
  btnText: { color: "#0a0f1f", fontWeight: "800" },
});
