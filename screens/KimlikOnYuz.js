import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  TouchableHighlight,
  Text,
  Button
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

  const [permission, requestPermission] = Camera.useCameraPermissions();

  // Permission alma:
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePhoto = async () => {
    try {
      if (cameraRef.current) {
        const options = { quality: 1, base64: true, exif: false };
        const photo = await cameraRef.current.takePictureAsync(options); 
        
        base64_data = photo.base64    
        processImage(base64_data)
      }
    } catch (error) {
        console.error('Error taking the photo.');
      }
  }

  const processImage = async (base64_code) => {
    try {
      const apiUrl = 'https://idvisiontest.azurewebsites.net/process_front';
      
      base64_code = " \"" + base64_code + "\""
      const requestData = {
        "on_yuz_image" : base64_code,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();
      const onYuzSonucValue = responseData.on_yuz_sonuc;
      console.log("Kimlik on yuz sonuc: " + onYuzSonucValue)

      if (onYuzSonucValue === true) {
        navigation.navigate("LandingPageTrueOnYuz");
      } else {
        navigation.navigate("LandingPageFalseOnYuz");
      }

    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  return (
    <View style={styles.kimlikOnYuz}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.backLayer]} // Apply backLayer style
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
        propTop="87.5%"
        propLeft="55%"
        propTop1="34.22%"
        propRight="19.5%"
        propBottom="34.22%"
        propLeft1="19%"
        imagePlaceholderText={require("../assets/arrow-2.png")}
        onGoForwardPress={() => navigation.navigate("LandingPageTrueOnYuz")}
      />
      <View style={styles.cameraScreen}>
        <Camera style={styles.camera} type={type} ref={cameraRef} />
      </View>
      <View style={styles.areaForIdCard} />
      <Text style={styles.kimlikNYz}>Kimlik Ön Yüz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goforward: {
    borderColor: "red",
    borderWidth:"3",
    top: "50%"
  },
  backLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0, // Set a lower zIndex to move it to the back
  },
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
    borderColor: "black",
    borderWidth: 3,
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
    flex: 1,
  },
  areaForIdCard: {
    top: 219,
    left: 56,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#e83e45",
    borderWidth: 1,
    width: 220,
    height: 360,
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