import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CategorySection() {
  const categories = [
    { icon: "body-outline", label: "Body", bg: "#b3e5fc" },
    { icon: "pulse-outline", label: "Symptoms", bg: "#ffcdd2" },
    { icon: "medkit-outline", label: "Treatment", bg: "#d1c4e9" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Browse by category</Text>
      <View style={styles.row}>
        {categories.map((cat, i) => (
          <TouchableOpacity key={i} style={[styles.card, { backgroundColor: cat.bg }]}>
            <Ionicons name={cat.icon} size={34} color="#333" />
            <Text style={styles.label}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  title: { fontSize: 18, fontWeight: "600", color: "#1e293b", marginBottom: 12 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  card: {
    width: "30%",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  label: { marginTop: 10, fontWeight: "600", color: "#1e293b" },
});