import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Category = ({item, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text
        style={[
          styles.categoryStyle,
          selectedCategory === item && {
            color: '#ffffff',
            backgroundColor: '#E96E6E',
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#938F8F',
    backgroundColor: '#DFDCDC',
    paddingVertical: 10,
    paddingHorizontal: 16,
    textAlign: 'center',
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 8,
  },
  selectedCategory: {
    backgroundColor: '#E96E6E',
  },
  selectedText: {
    color: '#ffffff',
  },
});
