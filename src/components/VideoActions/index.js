import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import iconPlus from "../../../assets/iconplus.png";
import whiteHeart from "../../../assets/white-heart-fill.png";
import redHeart from "../../../assets/red-heart.png";
import comment from "../../../assets/comment.png";
import whatsapp from "../../../assets/WhatsApp_Logo.png";

export default function VideoActions({ item, handleLike }) {
  return (
    <View style={styles.contentIcon}>
      <View style={styles.contentIconProfile}>
        <TouchableOpacity>
          <Image
            source={{ uri: item.author.avatar }}
            style={styles.iconProfile}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={iconPlus} style={styles.iconPlusProfile} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsAction}>
        <View style={styles.contentIconAction}>
          <TouchableOpacity onPress={() => handleLike(item)}>
            <Image
              source={item.liked ? redHeart : whiteHeart}
              style={styles.iconAction}
            />
          </TouchableOpacity>
          <Text style={styles.textActions}>153.1K</Text>
        </View>
        <TouchableOpacity style={styles.contentIconAction}>
          <Image source={comment} style={styles.iconAction} />
          <Text style={styles.textActions}>208</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentIconAction}>
          <Image source={whatsapp} style={styles.iconWhatsapp} />
          <Text style={styles.textActions}>Compar-tilhar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconsMusic}>
        <TouchableOpacity>
          <Image
            source={{ uri: item.author.avatar }}
            style={styles.iconMusic}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentIcon: {
    width: "20%",
    position: "absolute",
    bottom: 11,
    right: 0,
    alignItems: "center",
    zIndex: 3
  },
  contentIconProfile: {
    alignItems: "center",
    marginBottom: 2
  },

  iconProfile: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 1
  },
  iconPlusProfile: {
    height: 35,
    width: 25,
    position: "relative",
    bottom: 20,
    zIndex: 5,
    resizeMode: "contain"
  },
  iconsAction: {
    alignItems: "center",
    marginBottom: 20
  },
  contentIconAction: {
    alignItems: "center",
    marginBottom: 13
  },
  iconAction: {
    height: 40,
    width: 40
  },
  iconWhatsapp: {
    height: 40,
    width: 40,
    resizeMode: "cover",
    borderRadius: 20
  },
  textActions: { color: "white", textAlign: "center", width: 54 },
  iconMusic: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 30
  }
});
