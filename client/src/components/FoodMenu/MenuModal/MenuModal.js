import { React } from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./stylesMenuModal";
const MenuModal = (props) => {
  const { confirmation, setConfirmation, onPress } = props;

  const hiddenModal = () => {
    setConfirmation(false);
  };

  return (
    <Modal visible={confirmation ? true : false} transparent>
      <View style={styles.centered}>
        <View style={styles.container}>
          <Image
            source={require("../../../../assets/Icons/questionIcon.png")}
          />
          <Text style={styles.text}>Confirmar el pedido</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#979797" }]}
              onPress={hiddenModal}
            >
              <Text style={styles.textButton}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPress}
              style={[styles.button, { backgroundColor: "#EB7828" }]}
            >
              <Text style={styles.textButton}>Si</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MenuModal;
