import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategorySection from '../components/CategorySection';
import PlaylistSection from "../components/PlaylistsSection";

export default function Home() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#e8f2ff", "#f4f9ff"]}
        style={styles.fixedHeader}
      >
        <Header />
      </LinearGradient>
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 280, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar />
        <CategorySection />
        <PlaylistSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f9ff" },
  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 4,
  },
  scrollArea: { flex: 1 },
});