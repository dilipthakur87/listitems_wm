import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItemProps} from '../Interfaces/ListItemInterface';

const ListItem = (props: ListItemProps) => {
  const {item, isSelected, onSelect} = props;

  const handlePress = () => {
    onSelect(item.id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.listItemContainer}>
        <View
          style={[
            styles.item,
            {backgroundColor: isSelected ? 'blue' : 'white'},
          ]}
        />
        <Text style={{fontSize: 16}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 8,
  },
});

export default ListItem;
