import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { colors } from '@/constants/theme';

export default function Toggle({ value = false, onChange }: { value?: boolean; onChange?: (v: boolean) => void }) {
  const active = useSharedValue(value ? 1 : 0);

  const knob = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(active.value ? 22 : 0, { duration: 200 }) }],
  }));
  const bg = useAnimatedStyle(() => ({
    backgroundColor: withTiming(active.value ? colors.primary : '#ffffff22', { duration: 200 }),
  }));

  const onPress = () => {
    active.value = active.value ? 0 : 1;
    onChange?.(!!active.value);
  };

  return (
    <Pressable onPress={onPress} style={styles.wrap}>
      <Animated.View style={[styles.track, bg]}>
        <Animated.View style={[styles.knob, knob]} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingVertical: 4 },
  track: {
    width: 48,
    height: 26,
    borderRadius: 999,
    justifyContent: 'center',
    padding: 3,
    borderWidth: 1,
    borderColor: '#ffffff33',
  },
  knob: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'white' },
});
