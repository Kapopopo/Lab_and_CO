import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "../../components/ProgressBar";
import { colors, radii } from "../../constants/theme";

const Row = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <View style={{ width: "48%" }}>
      <ProgressBar value={value} />
    </View>
  </View>
);

export default function ChallengesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Défis & objectifs</Text>
      <Row label="Sommet 500 m+" value={60} />
      <Row label="Itinéraire 10 km" value={35} />
      <Row label="Rythme < 7:00" value={80} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  title: { color: "#e8f1ff", fontWeight: "800", fontSize: 18, marginBottom: 8 },
  row: {
    borderWidth: 1,
    borderColor: "#ffffff22",
    backgroundColor: "#111936cc",
    borderRadius: radii.lg,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: { color: "#e8f1ff" },
});
