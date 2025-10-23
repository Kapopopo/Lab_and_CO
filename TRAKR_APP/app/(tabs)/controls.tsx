import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Toggle from "../../components/Toogle";
import { colors, radii } from "../../constants/theme";

export default function ControlsScreen() {
  const [night, setNight] = useState(false);
  const [offline, setOffline] = useState(true);
  const [autopause, setAutopause] = useState(false);
  const [voice, setVoice] = useState(true);

  const Row = ({ label, value, onChange }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Toggle value={value} onChange={onChange} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contrôles rapides</Text>
      <Row label="Mode Nuit" value={night} onChange={setNight} />
      <Row label="Cartes hors-ligne" value={offline} onChange={setOffline} />
      <Row label="Auto-pause" value={autopause} onChange={setAutopause} />
      <Row label="Annonces vocales" value={voice} onChange={setVoice} />
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
});
