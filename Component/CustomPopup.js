import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const CustomPopup = ({ visible, onClose, onOk, customText, customImage }) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Image source={customImage} style={styles.popupImage} />
          <Text style={styles.popupText}>{customText}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelbuttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onOk} style={styles.okButton}>
              <Text style={styles.okbuttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 36,
    width: 338,
    height: 200,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'Gill Sans',
    textAlign: 'center'
  },
  popupImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
    marginTop: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF80B5',
    borderWidth: 1,
    padding: 10,
    borderRadius: 35,
    marginTop: 15,
    width: 104,
    height: 36,
  },
  okButton: {
    backgroundColor: '#FF80B5',
    padding: 10,
    borderRadius: 35,
    marginTop: 15,
    width: 104,
    height: 36,
  },
  okbuttonText: {
    color: 'white',
    textAlign: 'center',
  },
  cancelbuttonText: {
    color: '#FF80B5',
    textAlign: 'center',
  },
});


export default CustomPopup;
