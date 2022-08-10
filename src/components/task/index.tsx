import React from 'react';
import { Text, View } from 'react-native';

type TaskProp = {
  title: string;
  description: string;
};

export const Task = ( { title = '', description = '' }: TaskProp) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};
