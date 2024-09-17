import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ProductCard from '../components/ProductCard';
import Category from '../components/Category';

const categories = [
  'All',
  "Women's Clothing",
  "Men's Clothing",
  'Electronics',
  'jewelery',
];
const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderCategory = ({item}) => {
    return (
      <Category
        item={item}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    );
  };
  // Filter products based on the selected category
  const filterProducts = () => {
    if (selectedCategory === 'All') {
      return data;
    }
    return data.filter(
      product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase(),
    );
  };

  return (
    <View style={styles.container}>
      <Header />

      {/* Products List filtered based on selected category */}

      <FlatList
        data={filterProducts()}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom : 150}}
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>
            {/*Input */}
            <View style={styles.inputContainer}>
              <View style={styles.searchContainer}>
                <Fontisto name={'search'} size={26} color={'#c0c0c0'} />
              </View>
              <TextInput style={styles.textInput} placeholder="Search" />
            </View>
            {/* Categories List */}
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
          
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  matchText: {
    fontSize: 28,
    color: '#000000',
    // padding: 10,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    height: 48,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
  },
  searchContainer: {
    marginHorizontal: 10,
  },
});
