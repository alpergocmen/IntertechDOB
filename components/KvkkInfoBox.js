import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,ScrollView } from 'react-native';
import jsonData from '../assets/kvkk.json';

const KvkkInfoBox = () => {
    const [modalVisible, setModalVisible] = useState(false);
  
    const longText = jsonData
    console.log(longText);
    
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={[styles.modalText, styles.header] }>{longText.identity}</Text>
                <Text style={[styles.modalText, styles.header2] }>{longText.dataController}</Text>
                <Text style={styles.modalText }>{longText.dataControllerDetails}</Text>
                <Text style={[styles.modalText, styles.header2] }>{longText.processingPurposes}</Text>
                <Text style={styles.modalText }>{longText.processingPurposesDetails}</Text>
                <Text style={[styles.modalText, styles.header2] }>{longText.sharingWithThirdParties}</Text>
                <Text style={styles.modalText }>{longText.sharingWithThirdPartiesDetails}</Text>
                <Text style={[styles.modalText, styles.header2] }>{longText.collectionMethodAndLegalBasis}</Text>
                <Text style={styles.modalText }>{longText.collectionMethodAndLegalBasisDetails}</Text>
                <Text style={[styles.modalText, styles.header2] }>{longText.rightsOfDataSubjects}</Text>
                <Text style={styles.modalText }>{longText.rightsOfDataSubjectsDetails}</Text>
                <Text style={styles.modalText }>{longText.conclusion}</Text>
              </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Tamam</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>KVKK Aydınlatma Metni</Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    header2: {
      fontSize: 13,
      textDecorationLine: "underline",
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      width: "100%",
      borderRadius: 20,
      padding: 10,
      marginTop: 20,
    },
    buttonOpen: {
      margin: 150,  
      top: "20%"
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
        
      fontSize: 20,  
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  
  export default KvkkInfoBox;
  