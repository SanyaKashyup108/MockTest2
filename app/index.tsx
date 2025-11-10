import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import CategoryCard from "../Components/Catagorycard";
import PlaylistCard from "../Components/Playlistcard";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={ui.wrapper}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={ui.mainHeading}>Understand medical{"\n"}conditions with</Text>
      <Text style={ui.subHeading}>doctor-approved audio</Text>

      <TouchableOpacity style={ui.actionBtn}>
        <Text style={ui.actionText}>Explore Library</Text>
      </TouchableOpacity>

      <View style={ui.inputContainer}>
        <Ionicons name="search" size={20} color="#A0A0A0" />
        <TextInput
          placeholder="Search symptoms or conditions..."
          placeholderTextColor="#777"
          style={ui.textField}
        />
      </View>

      <Text style={ui.sectionHeader}>Browse by Categories</Text>

      <View style={ui.cardRow}>
        <CategoryCard icon="lungs" bg="#E4FAEF" label="Body" />
        <CategoryCard icon="heart-pulse" bg="#FFEAEA" label="Symptoms" />
        <CategoryCard icon="pill" bg="#F0E9FF" label="Treatment" />
      </View>

      <View style={ui.sectionTop}>
        <Text style={ui.sectionHeader}>Doctor-Curated Playlists</Text>
        <Text style={ui.linkText}>View all</Text>
      </View>

      <PlaylistCard name="book" title="Chronic Pain" episodes="8 episodes" />
      <PlaylistCard  name="person-sharp" title="Mindfulness for Sleep" episodes="8 episodes" />
      <PlaylistCard name="heart" title="Healthy Heart Basics" episodes="12 episodes" />
      </ScrollView>

    </View>

  );
}

const ui = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F8FBFF",
    paddingHorizontal: 22,
    paddingTop: 15,
  },

  mainHeading: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 20,
    lineHeight: 33,
    color: "#1B1B1B",
  },

  subHeading: {
    fontSize: 25,
    fontWeight: "700",
    color: "#2A73FF",
  },

  actionBtn: {
    backgroundColor: "#2A73FF",
    paddingVertical: 13,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 18,
    shadowColor: "#2A73FF",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },

  actionText: {
    color: "#FFFFFF",
    fontWeight: "600",
    letterSpacing: 0.4,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },

  textField: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
    color: "#333",
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    color: "#1C1C1C",
  },

  sectionTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },

  linkText: {
    color: "#2A73FF",
    fontWeight: "600",
    fontSize: 14,
  },
});
