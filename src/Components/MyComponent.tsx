import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Item} from '../Interfaces/ListItemInterface';
import ListItem from './ListItem';

interface MyComponentProps {
  items: Item[];
}

const MyComponents = ({items}: MyComponentProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <View style={styles.componentContainer}>
      <TextInput
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        placeholder="Search items..."
        style={styles.input}
      />
      <FlatList
        data={searchTerm !== '' ? filteredItems : items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem
            item={item}
            isSelected={selectedItems.includes(item.id)}
            onSelect={handleSelectItem}
          />
        )}
      />
      {searchTerm !== '' && (
        <TouchableOpacity onPress={() => setSearchTerm('')}>
          <View style={styles.clearBtn}>
            <Text style={{color: 'white'}}>Clear Search</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    margin: 8,
  },

  clearBtn: {
    backgroundColor: 'gray',
    padding: 8,
    margin: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
});

export default MyComponents;
