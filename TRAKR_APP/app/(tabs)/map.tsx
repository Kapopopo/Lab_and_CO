import { View, Text, StyleSheet } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import { colors } from "@/constants/theme";

export default function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 45.832,
    longitude: 6.865,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [trail, setTrail] = useState([{ latitude: 45.832, longitude: 6.865 }]);

  useEffect(() => {
    const i = setInterval(() => {
      setTrail(t => {
        const last = t[t.length - 1];
        const next = {
          latitude: last.latitude + (Math.random() * 0.001),
          longitude: last.longitude + (Math.random() * 0.001),
        };
        return t.concat(next).slice(-80);
      });
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={region}>
        <Polyline coordinates={trail} strokeColor={colors.primary} strokeWidth={5} />
        <Marker coordinate={trail[trail.length - 1]} title="Moi" />
      </MapView>
      <View style={styles.hud}>
        <Text style={styles.hudText}>Trace active · {trail.length} points</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hud: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    backgroundColor: "#111936cc",
    borderColor: "#ffffff22",
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
  },
  hudText: { color: "#e8f1ff", textAlign: "center" },
});
