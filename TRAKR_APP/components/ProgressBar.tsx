import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { colors } from '@/constants/theme';

export default function ProgressBar({ value = 0 }: { value?: number }) {
  const w = useSharedValue(0);
  useEffect(() => {
    w.value = withTiming(Math.max(0, Math.min(100, value)), { duration: 800 });
  }, [value]);
  const s = useAnimatedStyle(() => ({ width: `${w.value}%` }));

  return (
    <View style={styles.wrap}>
      <Animated.View style={[styles.bar, s]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { height: 10, backgroundColor: '#ffffff20', borderRadius: 999, overflow: 'hidden' },
  bar: { height: '100%', backgroundColor: colors.primary },
});
