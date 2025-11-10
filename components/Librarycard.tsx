import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function LibraryCard({ title, episodes, updated, items, iconName, bg }) {
  return (
    <View style={uiCard.container}>
      <View style={[uiCard.iconWrap, { backgroundColor: bg }]}>
        <MaterialCommunityIcons name={iconName} size={38} color="#2C2C2C" />
      </View>

      <View style={uiCard.contentArea}>
        <Text style={uiCard.header}>{title}</Text>

        <View style={uiCard.infoRow}>
          <Ionicons name="albums-outline" size={16} color="#555" />
          <Text style={uiCard.infoText}>{episodes}</Text>

          <Ionicons
            name="time-outline"
            size={16}
            color="#555"
            style={uiCard.timeIcon}
          />
          <Text style={uiCard.infoText}>{updated}</Text>
        </View>

        <Text style={uiCard.desc}>{items[0]}</Text>
        <Text style={uiCard.desc}>{items[1]}</Text>

        <Text style={uiCard.link}>+ more</Text>
      </View>
    </View>
  );
}

const uiCard = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 18,
    flexDirection: "row",
    marginTop: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  iconWrap: {
    width: 70,
    height: 70,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  contentArea: {
    flex: 1,
    marginLeft: 12,
  },

  header: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1C",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  infoText: {
    marginLeft: 4,
    fontSize: 13,
    color: "#555",
  },

  timeIcon: {
    marginLeft: 10,
  },

  desc: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },

  link: {
    marginTop: 6,
    color: "#2A73FF",
    fontWeight: "600",
    fontSize: 14,
  },
});
