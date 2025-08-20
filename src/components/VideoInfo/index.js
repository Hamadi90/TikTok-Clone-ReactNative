import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import TextTicker from "react-native-text-ticker";
import iconMusic from "../../../assets/music.png";

export default function VideoInfo({ item }) {
  return (
    <View style={styles.content}>
      <View style={styles.InnerContent}>
        <TouchableOpacity>
          <Text style={styles.name}>{item.author.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.description} numberOfLines={5}>
            {item.description}
          </Text>
        </TouchableOpacity>
        <Text style={styles.hashtags}>{item.hashtags}</Text>
        <TouchableOpacity>
          <Text style={styles.translate}>VER TRADUÇÂO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.componentMusic}>
          <View style={styles.imageIconMusic}>
            <Image style={styles.iMusic} source={iconMusic} />
          </View>
          <TextTicker
            style={styles.nameMusic}
            duration={4000}
            loop
            bounce={false}
            repeatSpacer={70}
            marqueeDelay={1000}
            shouldAnimateTreshold={40}
          >
            I Don’t Care - Ed Sheeran Part Justin Bieber
          </TextTicker>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "75%",
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 3
  },
  InnerContent: {
    width: "100%",
    position: "relative",
    bottom: 0,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    flexDirection: "column"
  },

  name: { color: "white", marginVertical: 3, fontSize: 15, fontWeight: "bold" },
  description: { color: "white", marginTop: 2, fontSize: 15 },
  hashtags: { color: "white", fontWeight: "bold" },
  componentMusic: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: 190
  },
  imageIconMusic: {
    marginRight: 15
  },
  iMusic: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  nameMusic: {
    color: "white",
    fontSize: 15
  },
  translate: {
    fontWeight: "bold",
    color: "white",
    marginVertical: 5
  }
});
