import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList
} from "react-native";

import TextTicker from "react-native-text-ticker";

const { width, height = height - 50 } = Dimensions.get("window");

import profile from "../../../assets/perfil-marlon.jpg";
import iconPlus from "../../../assets/iconplus.png";
import api from "../../services/api.js";

import { Video } from "expo-av";

import VideoInfo from "../../components/VideoInfo";
import VideoActions from "../../components/VideoActions";

function Feed() {
  const [feed, setfeed] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentItem(viewableItems[0].item.id);
    }
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  });

  function handleLike(item) {
    const newFeed = feed.map(feedItem => {
      if (feedItem.id === item.id) {
        return {
          ...feedItem,
          liked: !feedItem.liked
        };
      }
      return feedItem;
    });
    setfeed(newFeed);
  }

  useEffect(() => {
    async function LoadFeed() {
      try {
        const response = await api.get("/feed?_expand=author&_limit=5");
        const data = response.data.map(item => ({ ...item, liked: false }));
        setfeed(data);
      } catch (error) {
        console.log("Erro da busca: " + error);
      }
    }

    LoadFeed();
  }, []);

  return (
    <SafeAreaView>
      <View style={[{ zIndex: 7 }, styles.header]}>
        <View>
          <TouchableOpacity>
            <Text style={styles.textLeftHeader}>Seguindo</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.spanCenterHeader}>|</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.textRightHeader}>Para você</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={feed}
          keyExtractor={item => item.id}
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig.current}
          renderItem={({ item }) => (
            <View style={[styles.page_container, styles.post]}>
              <View style={styles.video}>
                <Video
                  source={{
                    //  uri: "https://drive.google.com/file/d/1dO3vE8iOz8xoikcNeaJYhbQsUv3kbOgJ/view"
                    // uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                    uri: item.video_url
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  resizeMode="contain"
                  shouldPlay={currentItem === item.id}
                  bounce={false}
                  isLooping
                  style={styles.videoPlayer}
                  useNativeControls={false}
                />
              </View>
              <VideoInfo item={item} />
              <VideoActions item={item} handleLike={handleLike} />
            </View>
          )}
          pagingEnabled
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height,
    backgroundColor: "black",
    zIndex: 1,
    alignSelf: "stretch"
  },
  post: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    zIndex: 2,
    alignSelf: "stretch",
    position: "relative",
    bottom: 30
  },
  page_container: {
    flex: 1,
    width,
    height
  },
  video: {
    width: "100%",
    flex: 1,
    zIndex: 2
  },
  videoPlayer: {
    width: "100%",
    zIndex: 2,
    flex: 1
  },
  header: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
    left: 75,
    alignItems: "center"
  },
  spanCenterHeader: { color: "white", fontSize: 10 },
  textLeftHeader: {
    color: "grey",
    paddingHorizontal: 10,
    fontSize: 20
  },

  textRightHeader: {
    color: "white",
    paddingHorizontal: 10,
    fontSize: 23,
    fontWeight: "bold"
  }
});

export default Feed;
