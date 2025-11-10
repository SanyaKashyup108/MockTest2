import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../Components/Header";
import SearchBar from "../Components/Searchbar";
import FilterChip from "../Components/Filterchip";
import LibraryCard from "../Components/Librarycard";

export default function Library() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <Text style={styles.heading}>Library</Text>
      <Text style={styles.subtitle}>Doctor-approved health audio sessions</Text>

      <SearchBar />

      <View style={styles.filterRow}>
        <FilterChip label="Categories" />
        <FilterChip label="Symptoms" />
        <FilterChip label="Duration" />
      </View>

      <LibraryCard
        title="Body Systems"
        episodes="12 Episodes"
        updated="Updated 3 Jun"
        items={["❤️ How your heart works", "🫁 Breathing and the lungs"]}
        iconName="lungs"
        bg="#E9FFF5"
      />

      <LibraryCard
        title="Medical Conditions"
        episodes="27 Episodes"
        updated="Updated 1 Jun"
        items={["🔥 Managing high blood pressure", "😔 Understanding depression"]}
        iconName="medical-bag"
        bg="#FFF2DA"
      />

      <LibraryCard
        title="Diagnostics"
        episodes="12 Episodes"
        updated="Updated 29 May"
        items={["📊 Understanding your ECG", "🔬 What an MRI can tell you"]}
        iconName="magnify-scan"
        bg="#F3EEFF"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FBFF",
    paddingHorizontal: 22,
    paddingTop: 18,
  },

  heading: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1B2B4A",
    marginTop: 18,
    letterSpacing: 0.3,
  },

  subtitle: {
    color: "#6B7280",
    fontSize: 15,
    marginBottom: 14,
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
});
