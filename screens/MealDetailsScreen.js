import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{selectedMeal.title}</Text>
    </View>
  );
}

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => 
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favourite'
          iconName='ios-star'
          onPress={() => { }} />
      </HeaderButtons> 
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold'
  }
});

export default MealDetailsScreen;
