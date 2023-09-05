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
import { Camera, requestMicrophonePermissionsAsync } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';

let name = "";
let surname = "";
let gender = "";

const Selfie = () => {
  const navigation = useNavigation();
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    try {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true, exif: false };
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
      
      const apiUrl = 'https://idvisionlast.azurewebsites.net/process_face';
      
      base64_code = " \"" + base64_code + "\""
      const requestData = {
        "yuz_image" : base64_code,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();
      const yuzSonucValue = responseData.yuz_kontrol_sonuc;

      name = responseData.name;
      surname = responseData.surname;
      gender = responseData.gender

      console.log("Yuz sonuc: " + yuzSonucValue)
      console.log("Name: " + name)
      console.log("Surname: " + surname)
      console.log("Gender: " + gender)

      if (yuzSonucValue === true) {
        navigation.navigate("LandingPage2");
      } else {
        navigation.navigate("Login");
      }

    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  return (
    <View style={styles.selfie}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.backLayer]} // Apply backLayer style
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Pressable
          style={[styles.component1, styles.logo1IconPosition]}
          onPress={() => navigation.navigate("CallCenter")}
        >
          <View style={styles.component1Child} />
          <Image
            style={styles.component1Item}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.logo1Icon, styles.logo1IconPosition]}
          contentFit="cover"
          source={require("../assets/logo-1.png")}
        />
      </View>
      <TakeAShoot onTakeAShootPress={takePhoto} />
      <GoForward
        imagePlaceholderText={require("../assets/arrow-2.png")}
        propTop={689}
        propLeft={202}
        propTop1="34.22%"
        propRight="19.5%"
        propBottom="34.22%"
        propLeft1="19%"
        onGoForwardPress={() => navigation.navigate("LandingPage2")}
      />
      <Text style={styles.OnKamera}>Ön Kamera</Text>
      <View style={styles.cameraScreenContainer}>
      <Camera
        style={styles.cameraScreen} // Use styles.cameraScreen
        type={type}
        ref={cameraRef}
        />
      </View>
    </View>
  );
};

export const userInfo = {
  name: name,
  surname: surname,
  gender: gender,
};

const styles = StyleSheet.create({
  backLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0, // Set a lower zIndex to move it to the back
  },
  statusBarDark: {
    height: 44,
    width: 375,
    top: 0,
    left: 0,
  },
  statusBarDarkPosition1: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  statusBarDarkPosition: {
    display: "none",
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  logo1IconPosition: {
    height: 47,
    top: 5,
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
    display: "none",
    position: "absolute",
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
    left: 19,
    width: 40,
    opacity: 0.5,
  },
  logo1Icon: {
    left: 82,
    width: 210,
  },
  header: {
    top: 44,
    width: 311,
    height: 57,
    overflow: "hidden",
  },
  OnKamera: {
    top: 135,
    left: 113,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    width: 150,
    height: 20,
    position: "absolute",
  },
  selfie: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    overflow: "hidden",
  },

  cameraScreenContainer: {
    width: "80%", // Use percentage-based width
    aspectRatio: 3 / 4, // Maintain the aspect ratio (width / height)
    borderRadius: 10, // Rounded corners
    overflow: "hidden",
  },

  cameraScreen: {
    width: "100%", // Use 100% width to match the container
    height: "100%", // Use 100% height to match the container
  },
});

export default Selfie;
