import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import CategoryCard from "../Components/Catagorycard";
import PlaylistCard from "../Components/Playlistcard";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.mainHeading}>
          Understand medical{"\n"}conditions with
        </Text>
        <Text style={styles.subHeading}>doctor-approved audio</Text>

        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>Explore Library</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Ionicons name="search" size={20} color="#A0A0A0" />
          <TextInput
            placeholder="Search symptoms or conditions..."
            placeholderTextColor="#777"
            style={styles.textField}
          />
        </View>

        <View style={styles.tagsContainer}>
          <View style={styles.tagAsthma}>
            <View style={styles.dotAsthma} />
            <Text style={styles.textAsthma}>Asthma</Text>
          </View>

          <View style={styles.tagChest}>
            <View style={styles.dotChest} />
            <Text style={styles.textChest}>Chest pain</Text>
          </View>

          <View style={styles.tagHeart}>
            <View style={styles.dotHeart} />
            <Text style={styles.textHeart}>Heart diseases</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Browse by Categories</Text>

        <View style={styles.cardRow}>
          <CategoryCard icon="lungs" bg="#E4FAEF" label="Body" />
          <CategoryCard icon="heart-pulse" bg="#FFEAEA" label="Symptoms" />
          <CategoryCard icon="pill" bg="#F0E9FF" label="Treatment" />
        </View>

        <View style={styles.sectionTop}>
          <Text style={styles.sectionHeader}>Doctor-Curated Playlists</Text>
          <Text style={styles.linkText}>View all</Text>
        </View>

<View style={styles.card}>
        <View style={styles.iconBox1}>
          <Ionicons name="bandage" size={22} color="#7B61FF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Chronic Pain</Text>
          <Text style={styles.cardSub}>8 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox2}>
          <Ionicons name="moon" size={22} color="#F472B6" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Mindfulness for Sleep</Text>
          <Text style={styles.cardSub}>8 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox3}>
          <Ionicons name="heart-circle" size={22} color="#FF6B6B" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Health Heart Basics</Text>
          <Text style={styles.cardSub}>12 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>
      <View style={styles.card}>
        <View style={styles.iconBox4}>
          <Ionicons name="fitness-outline" size={22} color="#22B07D" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Fitness Routine</Text>
          <Text style={styles.cardSub}>6 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox2}>
          <Ionicons name="leaf-outline" size={22} color="#F472B6" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>Healthy Living</Text>
          <Text style={styles.cardSub}>10 episodes</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#999" />
      </View>

      


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: "#56C7FA",
  },

  actionBtn: {
    backgroundColor: "#56C7FA",
    paddingVertical: 13,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 18,
    shadowColor: "#56C7FA",
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

  tagsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
    gap: 8,
  },

  tagAsthma: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E4FAEF",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textAsthma: {
    fontSize: 13,
    fontWeight: "500",
    color: "black",
  },
  dotAsthma: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
    backgroundColor: "#22B07D",
  },
    card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: 14,
    padding: 12,
    marginTop: 10,
  },
  iconBox1: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#EDEBFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  iconBox2: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#FDE7F3",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  iconBox3: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#FFECEC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
   iconBox4: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#E8F9F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#111827",
    fontSize: 15,
  },
  cardSub: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },



  tagChest: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF7E6",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textChest: {
    fontSize: 13,
    fontWeight: "500",
    color: "black",
  },
  dotChest: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
    backgroundColor: "#FFB100",
  },

  tagHeart: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFECEC",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textHeart: {
    fontSize: 13,
    fontWeight: "500",
    color: "black",
  },
  dotHeart: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
    backgroundColor: "#FF6B6B",
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
    color: "#56C7FA",
    fontWeight: "600",
    fontSize: 14,
  },
});
