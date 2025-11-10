import { View, Text, StyleSheet } from "react-native";

export default function FilterChip({ label }) {
  return (
    <View style={styles.chip}>
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    marginRight: 10,
  },
});
