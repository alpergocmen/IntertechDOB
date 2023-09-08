import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Button,
  Modal, 
  ActivityIndicator,
  TouchableOpacity
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
  const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
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
      const apiUrl = 'https://idvisionlast.azurewebsites.net/process_front';
      
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
     
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <TouchableOpacity
        onPress={takePhoto}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          width: "20%",
          padding: 10,
          borderRadius: 5,
          alignSelf:"flex-end",
          marginRight: "50%",
          right: 35,
          top: 107.5,
          marginBottom: 50,
          transform: [{ rotate: '90deg' }], 
        }}
      >
        <Image
          source={require("../assets/icons8camera100-1.png")}
          style={{ alignSelf: "center", width: 55, height: 55 }} 
        />

      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LandingPageTrueOnYuz")}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          width: "20%",
          padding: 10,
          borderRadius: 5,
          alignSelf:"flex-end",
          marginRight: "25%",
          marginBottom: 50,
          transform: [{ rotate: '90deg' }], 
        }}
      >
        <Image
          source={require("../assets/arrow-2.png")}
          style={{ alignSelf: "center", width: 55, height: 20 }} 
        />
      </TouchableOpacity>
      </View> 
      
      <View style={styles.cameraScreen}>
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
          /> 
      </View>
      <View style={styles.overlay}></View>
      <View style={styles.overlay2}></View>
      <View style={styles.overlay3}></View>
      <View style={styles.overlay4}></View>
      <View style={styles.areaForIdCard} />
      <Text style={styles.kimlikNYz}>Kimlik Ön Yüz</Text>
      <Modal visible={isLoading} transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <ActivityIndicator size="large" color="blue" />
            <Text>Processing...</Text>
          </View>
        </View>
      </Modal>
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
    marginLeft: "1%",
    marginRight: "1%",
    width: "88%",
    height: "65%",
    position: "absolute",
    flex: 1,
    
  },
  camera: {
    flex: 1,
  },
  areaForIdCard: {
    top: "30%",
    alignSelf: "center",
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: "#e83e45",
    borderWidth: 1,
    width: "55%",
    height: "39%",
    position: "absolute",
    //transform: [{ rotate: "90deg" }],
  },
  kimlikNYz: {
    top: "50%",
    left: "70%",
    fontSize: FontSize.size_xl,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    width: 150,
    height: 44,
    margin: 5,
    position: "absolute",
    transform: [{ rotate: "90deg" }]
  },
  kimlikOnYuz: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: "18.75%",
    left: "1%",
    right: "10.55%",
    bottom: "70%", 
    backgroundColor: "rgba(0,0,0,0.7)",
    
  },
  overlay2: {
    position: "absolute",
    top: "68.75%",
    left: "1%",
    right: "10.55%",
    bottom: "16%", 
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  overlay3: {
    position: "absolute",
    top: "30%",
    left: "77.5%",
    right: "10.5%",
    bottom: "31.25%", 
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  overlay4: {
    position: "absolute",
    top: "30%",
    left: "1%",
    right: "77.5%",
    bottom: "31.25%", 
    backgroundColor: "rgba(0,0,0,0.7)"
  }
});

export default KimlikOnYuz;