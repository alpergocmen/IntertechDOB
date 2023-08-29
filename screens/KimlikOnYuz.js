import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TakeAShoot from "../components/TakeAShoot";
import GoForward from "../components/GoForward";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { Camera } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';

const KimlikOnYuz = () => {
  const navigation = useNavigation();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    try {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true, exif: false };
        const photo = await cameraRef.current.takePictureAsync(options); 
        const photoPath = photo.uri;
        
        uploadImage(photoPath);
      }
    } catch (error) {
        console.error('Error taking the photo.');
      }
  }
  const uploadImage = async (photoPath) => {
    const photoData = new FormData();
    photoData.append("file", {uri: photoPath, name:'image.jpg', filename: 'image', type: 'image/jpg'});
    console.log("Form Data:", photoData);
    
    //sendPhotoToAPI(photoData)
  }
  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
    console.log(Camera.Type);
  };

  return (
    <View style={styles.kimlikOnYuz}>
      <Image
        style={[
          styles.blueAbstractBackgroundNewGIcon,
          styles.statusBarDarkPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <View style={styles.header}>
        <TouchableHighlight
          style={[styles.component1, styles.logo1IconPosition]}
          underlayColor="#fff"
          onPress={() => navigation.navigate("Info")}
        >
          <>
            <View
              style={[styles.component1Child, styles.statusBarDarkPosition]}
            />
            <Image
              style={styles.component1Item}
              contentFit="cover"
              source={require("../assets/arrow-1.png")}
            />
          </>
        </TouchableHighlight>
        <Image
          style={[styles.logo1Icon, styles.logo1IconPosition]}
          contentFit="cover"
          source={require("../assets/logo-1.png")}
        />
      </View>
      <Image
        style={[styles.statusBarDark, styles.statusBarDarkPosition]}
        contentFit="cover"
        source={require("../assets/status-bar--dark2.png")}
      />
      <TakeAShoot onTakeAShootPress={takePhoto} />
      <GoForward
        imagePlaceholderText={require("../assets/arrow-2.png")}
        onGoForwardPress={() => navigation.navigate("LandingPageTrueOnYuz")}
      />
      <View style={styles.cameraScreen} > 
          <Camera style={styles.camera} type={type} ref={cameraRef}>
          </Camera>
      </View>
      <View style={styles.areaForIdCard} />
      <Text style={styles.kimlikNYz}>Kimlik Ön Yüz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarDarkPosition1: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  logo1IconPosition: {
    height: 47,
    top: 5,
    position: "absolute",
  },
  statusBarDarkPosition: {
    display: "none",
    position: "absolute",
  },
  blueAbstractBackgroundNewGIcon: {
    width: "100%",
    height: "100%",
  },
  component1Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gainsboro,
    width: "100%",
  },
  component1Item: {
    height: "47%",
    width: "58.65%",
    top: "25.43%",
    right: "23.53%",
    bottom: "27.56%",
    left: "17.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component1: {
    width: 40,
    opacity: 0.5,
    left: 19,
  },
  logo1Icon: {
    left: 82,
    width: 210,
  },
  header: {
    top: 44,
    width: 311,
    height: 57,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarDark: {
    height: 44,
    width: 375,
    top: 0,
    left: 0,
  },
  cameraScreen: {
    top: 156,
    backgroundColor: Color.black,
    width: 300,
    height: 500,
    left: 19,
    position: "absolute",
  },
  camera: {
    position: 'absolute',
    flex: 1,
  },
  areaForIdCard: {
    top: 219,
    left: 56,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: "#e83e45",
    borderWidth: 1,
    width: 225,
    height: 375,
    position: "absolute",
  },
  kimlikNYz: {
    top: "50%",
    left: "70%",
    fontSize: FontSize.size_xl,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    width: 150,
    height: 44,
    margin: 5,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  kimlikOnYuz: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default KimlikOnYuz;