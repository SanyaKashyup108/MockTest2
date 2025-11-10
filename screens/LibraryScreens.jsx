import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Categories } from '../assets/data/Categories';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://icon-library.com/images/voice-icon-png/voice-icon-png-13.jpg',
            }}
          />
          <Text style={styles.text}>HealthCast</Text>
        </View>

        <Image
          style={styles.avatar}
          source={{
            uri: 'https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg?w=360',
          }}
        />
      </View>

      {/* Heading & Search */}
      <View style={styles.headingContainer}>
        <Text style={styles.libraryTitle}>Library</Text>
        <Text style={styles.subtitle}>Doctor's approved audio episodes</Text>

        <TextInput
          placeholder="Search for symptom or condition..."
          style={styles.searchInput}
          placeholderTextColor="#7B7B8C"
        />
      </View>

      {/* Pills Section (FlatList horizontally) */}
      <FlatList
        data={Categories} // only show first 3 like in image
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.pill}>
            <Image source={{ uri: item.icon }} style={styles.pillIcon} />
            <Text style={styles.pillText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.pillContainer}
      />
      
      <View></View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F2FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#DCE7F9',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 36,
    height: 36,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
    color: '#1B1B1B',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headingContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  libraryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E3A8A',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    fontSize: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  // Pills section
  pillContainer: {
    paddingHorizontal: 20,
    marginTop: 18,
  },
  pill: {
    flexDirection: 'row',
    
    // backgroundColor: '#FFFFFF',
    // paddingHorizontal: 14,
    // paddingVertical: 10,
    borderRadius: 45,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#1E3A8A',
    // shadowColor: '#000',
    // shadowOpacity: 0.05,
    // shadowRadius: 3,
    // elevation: 1,
  },
  pillIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
    tintColor: '#1E3A8A',
  },
  pillText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E3A8A',
  },
});
