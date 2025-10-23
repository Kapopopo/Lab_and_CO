import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radii } from '@/constants/theme';

export default function HUDCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ marginTop: 8 }}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111936cc',
    borderColor: '#ffffff14',
    borderWidth: 1,
    borderRadius: radii.lg,
    padding: 14,
    flex: 1,
  },
  title: { color: colors.ink, fontWeight: '700', fontSize: 16, opacity: 0.92 },
});
