import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function LibraryCard({ title, episodes, updated, items, iconName, bg }) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: bg }]}>
        <MaterialCommunityIcons name={iconName} size={38} color="#2C2C2C" />
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <Ionicons name="albums-outline" size={16} color="#555" />
          <Text style={styles.meta}>{episodes}</Text>

          <Ionicons name="time-outline" size={16} color="#555" style={styles.timeIcon} />
          <Text style={styles.meta}>{updated}</Text>
        </View>

        <Text style={styles.item}>{items[0]}</Text>
        <Text style={styles.item}>{items[1]}</Text>

        <Text style={styles.more}>+ more</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 18,
    flexDirection: "row",
    marginTop: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },

  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  details: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1C",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  meta: {
    marginLeft: 4,
    fontSize: 13,
    color: "#555",
  },

  timeIcon: {
    marginLeft: 10,
  },

  item: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },

  more: {
    marginTop: 6,
    color: "#73C8D2",
    fontWeight: "600",
    fontSize: 14,
  },
});
