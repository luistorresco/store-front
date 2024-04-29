
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.menuBarContainer}>
      <Icon name="search" size={24} color="#333" style={styles.searchIcon} />
      <TextInput
        style={styles.menuBarInput}
        placeholder="Search..."
        placeholderTextColor="#666"
        onChangeText={setSearchQuery} // Actualiza la búsqueda en el componente principal
        value={searchQuery}
      />
    </View>
  );
};

// Asegúrate de que los estilos no se solapen con los del componente App
const styles = StyleSheet.create({
  menuBarContainer: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    alignSelf: 'center',
  },
  searchIcon: {
    marginRight: 20,
  },
  menuBarInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default MenuBar;

