import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PlaylistCard({ title,name, episodes }) {
  return (
    <View style={styles.card}>
      <Ionicons name={name} size={32} color="#4C6EF5" />
      
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.episodes}>{episodes}</Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color="#666" style={{ marginLeft: "auto" }} />
    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  
  title: { 
    fontSize: 16, 
    fontWeight: "600" 
},

  episodes: { 
    fontSize: 13, 
    color: "#666" 
},

});
