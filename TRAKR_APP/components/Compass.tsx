import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Magnetometer } from 'expo-sensors';
import { colors } from '@/constants/theme';

function angleFromVector({ x, y }: { x: number; y: number }) {
  let angle = Math.atan2(y, x) * (180 / Math.PI);
  angle += 180; // 0-360
  return Math.round(angle);
}

export default function Compass() {
  const [heading, setHeading] = useState(0);
  const rot = useSharedValue(0);

  useEffect(() => {
    Magnetometer.setUpdateInterval(500);
    const sub = Magnetometer.addListener((data) => {
      const deg = angleFromVector(data as any);
      setHeading(deg);
      rot.value = withTiming(deg, { duration: 300 });
    });
    return () => sub.remove();
  }, []);

  const needle = useAnimatedStyle(() => ({ transform: [{ rotate: `${rot.value}deg` }] }));

  return (
    <View style={styles.dial}>
      <Animated.View style={[styles.needle, needle]} />
      <View style={styles.center} />
      <Text style={styles.cap}>{heading}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dial: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ffffff22',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f152c',
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  needle: {
    position: 'absolute',
    width: 2,
    height: 90,
    backgroundColor: '#ef4444',
    top: 15,
    borderRadius: 2,
    shadowColor: '#ef4444',
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  center: { width: 14, height: 14, backgroundColor: '#d3d3d3', borderRadius: 8 },
  cap: { position: 'absolute', bottom: 10, color: colors.ink, fontWeight: '700' },
});
