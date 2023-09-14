import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';

import { Chat, History, Setting } from '@/screens';

export type ChatStackParamList = {
  Chat: undefined;
  Setting: undefined;
  History: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ navigation }) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => <Button title="Setting" onPress={() => navigation.openDrawer()} />,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <Button title="History" onPress={() => navigation.navigate('History')} />,
        })}
      />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
}

export const ChatNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={() => <Setting />}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
};
