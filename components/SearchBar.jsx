import React from "react";
import { View, TextInput, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  const tags = [
    { name: "Asthma", color: "#64b5f6" },
    { name: "Chest pain", color: "#f48fb1" },
    { name: "Heart diseases", color: "#ffb74d" },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#94a3b8" />
        <TextInput
          placeholder="Search for symptom or condition..."
          placeholderTextColor="#94a3b8"
          style={styles.input}
        />
      </View>
      <FlatList
        data={tags}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.tag, { backgroundColor: item.color + "20" }]}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text style={[styles.tagText, { color: item.color }]}>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 12, paddingRight: 6 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#1e293b",
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  tagText: {
    fontWeight: "500",
    fontSize: 14,
  },
});