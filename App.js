import React, { useState, useEffect } from "react";
import { StatusBar, FlatList, View, Switch, TextInput } from "react-native"; // Import TextInput here
import { useTheme } from "./hooks/useTheme";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import ShoeCard from "./components/ShoeCard";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import styles, { cardMargin } from "./styles";

const minItemWidth = 160; // Este es el ancho mínimo para las tarjetas de zapatos

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredShoes, setFilteredShoes] = useState([]); 
  const { windowWidth, numColumns } = useWindowDimensions(minItemWidth);
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch(
          "https://maverick-fs8k.onrender.com/shoes/"
        );
        const data = await response.json();
        setShoes(data);
        setFilteredShoes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShoes();
  }, []);

  useEffect(() => {
    const results = shoes.filter(shoe =>
      shoe.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredShoes(results);
  }, [searchQuery, shoes]);

  const cardWidth = windowWidth / numColumns - 2 * cardMargin;
  const themeStyles = isDarkTheme ? styles.darkTheme : styles.lightTheme;

  const renderItem = ({ item }) => (
    <ShoeCard item={item} cardWidth={cardWidth} isDarkTheme={isDarkTheme} />
  );

  return (
    <View style={[styles.container, themeStyles]}>
      <MenuBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> 
      <Switch
        trackColor={{ false: "#767577", true: "#f4f3f4" }}
        thumbColor={isDarkTheme ? "#767577" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isDarkTheme}
        style={styles.switch}
      />
      <FlatList
        data={filteredShoes} // Use filtered shoes here
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        key={`${numColumns}-${windowWidth}`}
        columnWrapperStyle={styles.row}
      />
      <StatusBar style={isDarkTheme ? "light" : "dark"} />
      <Footer />
    </View>
  );
};

export default App;