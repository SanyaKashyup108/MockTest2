import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CategoryCard({ icon, bg, label }) {
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <MaterialCommunityIcons name={icon} size={40} color="#333" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "30%",
    padding: 18,
    borderRadius: 20,
    alignItems: "center",
  },
  label: { marginTop: 8, fontWeight: "600" },
});
