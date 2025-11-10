import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={{flex: 1, flexDirection: 'row', gap: 8}}>
            <Image source={{uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCCdrDeKsHXBLelWVOZ_ZlT6QsB2lhDCcHI8vkPl8b4PwdqJn0"}} style={{width: 30, height: 30, borderRadius: 20 }} />
        <Text style={styles.logo}>HealthCast</Text>
        </View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.title}>Understand medical conditions with</Text>
        <Text style={styles.highlight}>doctor-approved audio</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>Browse Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%" },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0a84ff",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#fff",
  },
  textBlock: { marginTop: 20 },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1e293b",
    lineHeight: 28,
  },
  highlight: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0a84ff",
  },
  button: {
    backgroundColor: "#0a84ff",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    shadowColor: "#0a84ff",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
});