import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  image: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
  },  
  card: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: '80%',
      marginTop: '40%',
      borderRadius: 20,
      maxHeight: 380,
      paddingBottom: '30%',
  },
  heading: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: '10%',
      marginTop: '5%',
      marginBottom: '30%',
      color: 'black',
  },
  form: {
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: '5%',
  },
  inputs: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '10%',
  },  
  input: {
      width: '80%',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingTop: 10,
      fontSize: 16, 
      minHeight: 40,
  },
  button: {
      width: '80%',
      backgroundColor: 'black',
      height: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '400'
  },
  buttonAlt: {
      width: '80%',
      borderWidth: 1,
      height: 40,
      borderRadius: 50,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
  },
  buttonAltText: {
      color: 'black',
      fontSize: 16,
      fontWeight: '400',
  },
  message: {
      fontSize: 16,
      marginVertical: '5%',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
});


export default styles