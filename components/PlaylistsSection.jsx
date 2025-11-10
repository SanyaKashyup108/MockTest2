import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaylistItem from "./PlaylistItem";

export default function PlaylistSection() {
  const playlists = [
    { title: "Chronic Pain", episodes: 8, icon: 'folder-plus' },
    { title: "Mindfulness for Sleep", episodes: 6, icon: 'spa' },
    { title: "Health Heart Basics", episodes: 12, icon: 'heart' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Doctor-curated playlists</Text>
        <Text style={styles.link}>See all</Text>
      </View>
      {playlists.map((item, i) => (
        <PlaylistItem key={i} title={item.title} episodes={item.episodes} icon={item.icon} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: "600", color: "#1e293b" },
  link: { color: "#0a84ff", fontWeight: "500" },
});