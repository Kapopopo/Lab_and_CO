import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { colors } from '@/constants/theme';

export default function AnimatedBlobs() {
  const x1 = useSharedValue(0), y1 = useSharedValue(0);
  const x2 = useSharedValue(0), y2 = useSharedValue(0);
  const x3 = useSharedValue(0), y3 = useSharedValue(0);

  useEffect(() => {
    x1.value = withRepeat(withTiming(20, { duration: 6000 }), -1, true);
    y1.value = withRepeat(withTiming(-15, { duration: 7000 }), -1, true);
    x2.value = withRepeat(withTiming(-25, { duration: 8000 }), -1, true);
    y2.value = withRepeat(withTiming(30, { duration: 9000 }), -1, true);
    x3.value = withRepeat(withTiming(18, { duration: 7000 }), -1, true);
    y3.value = withRepeat(withTiming(-22, { duration: 6500 }), -1, true);
  }, []);

  const s1 = useAnimatedStyle(() => ({ transform: [{ translateX: x1.value }, { translateY: y1.value }] }));
  const s2 = useAnimatedStyle(() => ({ transform: [{ translateX: x2.value }, { translateY: y2.value }] }));
  const s3 = useAnimatedStyle(() => ({ transform: [{ translateX: x3.value }, { translateY: y3.value }] }));

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Animated.View style={[styles.blob, styles.b1, s1]}>
        <LinearGradient colors={[colors.primary, colors.muted]} style={styles.fill} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
        <BlurView intensity={30} style={StyleSheet.absoluteFill} />
      </Animated.View>
      <Animated.View style={[styles.blob, styles.b2, s2]}>
        <LinearGradient colors={['#8bcdf299', '#4aa7da66']} style={styles.fill} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} />
        <BlurView intensity={25} style={StyleSheet.absoluteFill} />
      </Animated.View>
      <Animated.View style={[styles.blob, styles.b3, s3]}>
        <LinearGradient colors={['#d3d3d388', '#8bcdf244']} style={styles.fill} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} />
        <BlurView intensity={20} style={StyleSheet.absoluteFill} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  blob: { position: 'absolute', width: 220, height: 220, borderRadius: 120, opacity: 0.25 },
  fill: { flex: 1, borderRadius: 120 },
  b1: { top: -60, left: -40 },
  b2: { bottom: -80, right: -40 },
  b3: { top: '40%', left: -60, width: 180, height: 180, borderRadius: 100 },
});
