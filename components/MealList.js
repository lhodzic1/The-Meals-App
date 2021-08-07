import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from './MealItem';

const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetails', params: {
                            mealId: itemData.item.id
                        }
                    });
                }} />
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={props.items}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '95%' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealList;
