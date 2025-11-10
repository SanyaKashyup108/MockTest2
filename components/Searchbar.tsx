import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.box}>
      <Ionicons name="search" size={20} color="#777" />
      <TextInput
        placeholder="Search for symptom or condition..."
        style={{ marginLeft: 8, flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 12,
    borderRadius: 18,
    alignItems: "center",
  },
});
