import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

export default function PlaylistItem({ title, episodes, icon }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <FontAwesome6 name={icon} size={26} color="#0a84ff" />
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{episodes} episodes</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={22} color="#cbd5e1" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  textBlock: { flex: 1, marginLeft: 12 },
  title: { fontSize: 16, fontWeight: "600", color: "#1e293b" },
  subtitle: { color: "#64748b", marginTop: 2 },
});