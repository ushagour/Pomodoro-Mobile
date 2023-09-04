import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <Swipeable renderRightActions={() => (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            height: '100%',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Delete</Text>
        </View>
      </TouchableOpacity>
    )}>
      {/* Render your list item here */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 16,
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderColor: '#ccc',
        }}
      >
        <Text>List Item Content</Text>
      </View>
    </Swipeable>
  );
};

export default ListItemDeleteAction;