import React from "react";

import { Image, Text, StyleSheet } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Feed from "../screens/Feed";
import Find from "../screens/Find";
import Plus from "../screens/Plus";
import MessageBox from "../screens/MessageBox";
import Profile from "../screens/Profile";

import message from "../../assets/windowscomments-grey.png";
import userProfile from "../../assets/userProfile.png";
import search from "../../assets/search-grey.png";
import plusTikTokWhite from "../../assets/plusTikTok-white.png";
import home from "../../assets/home.png";

const iconMap = {
  Inicio: home,
  Descobrir: search,
  Plus: plusTikTokWhite,
  "Caixa de Entrada": message,
  Eu: userProfile
};

const Routes = createBottomTabNavigator(
  {
    Inicio: Feed,
    Descobrir: Find,
    Plus: {
      screen: Plus,
      navigationOptions: {}
    },
    "Caixa de Entrada": MessageBox,
    Eu: Profile
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "grey",
      showLabel: false,
      style: styles.tabBar
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconName = iconMap[routeName];
        const isPlus = routeName === "Plus";

        return (
          <>
            <Image
              source={IconName}
              style={[
                styles.icon,
                isPlus ? styles.iconPlus : styles.iconDefault
              ]}
            />
            {isPlus ? null : (
              <Text style={styles.label}>{routeName}</Text>
            )}
          </>
        );
      }
    })
  }
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "black",
    height: 57,
    borderTopColor: "grey",
    borderTopWidth: 0.19,
    paddingVertical: 7
  },
  icon: {
    resizeMode: "contain"
  },
  iconDefault: {
    width: 25,
    height: 25
  },
  iconPlus: {
    width: 43,
    height: 28
  },
  label: {
    color: "grey",
    fontSize: 10
  }
});

export default createAppContainer(Routes);
