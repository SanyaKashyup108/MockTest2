import { View, Text, StyleSheet, Image } from "react-native";

export default function TopBar() {
  return (
    <View style={uiHeader.container}>
      <View style={uiHeader.brandRow}>
        <Image
          source={{
            uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCCdrDeKsHXBLelWVOZ_ZlT6QsB2lhDCcHI8vkPl8b4PwdqJn0",
          }}
          style={uiHeader.logo}
        />
        <Text style={uiHeader.title}>MediCast</Text>
      </View>

      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZnF8ElwCzCgHGTNVnaElToLnw3zE4AgEVQ&s",
        }}
        style={uiHeader.profileImg}
      />
    </View>
  );
}

const uiHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: "#F9FCFF",
  },

  brandRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 8,
    color: "#1B3A57",
  },

  profileImg: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#D6E4FF",
  },
});
