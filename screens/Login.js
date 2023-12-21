import React,{ useState, useEffect} from "react";
import { Text, View, StyleSheet, TouchableHighlight , Image} from "react-native";
import { TextInput } from "react-native-paper";
import { useMyContextController, login } from "../context"
export const Login = ({navigation})=>{
    console.log("Navigation object:", navigation);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [controller, dispatch] = useMyContextController();
    const {userLogin} = controller;
    useEffect(() => {
        console.log("useEffect triggered");
        if (userLogin !== null) 
        {
            navigation.replace("Tab");
        }
      }, [userLogin]);
    const onSubmit =()=>{
        login(dispatch,email,password);
        
    }
    return (
        <View style={styles.container}>
             <Image style={styles.img} source={require('../assets/images/userlogin.jpg')} />
                    <Text style={styles.text}>Login</Text>
                    <TextInput
                        style={styles.item}
                        placeholder="Nhập  email"
                        autoCapitalize='none' 
                        value={email}
                        onChangeText={text=>setEmail(text)} 
                    >
                    </TextInput>
                    <TextInput
                        style={styles.item}
                        placeholder="Nhập mật khẩu "
                        autoCapitalize='none' 
                        value={password}
                        onChangeText={text=>setPassword(text)}
                        secureTextEntry ={!showPassword}
                        right={<TextInput.Icon icon='eye' style={{marginTop: 20}}  onPress={() => setShowPassword(!showPassword)}/>}
                    >
                    </TextInput>
                
                <TouchableHighlight
                    style={styles.btn}
                    onPress={onSubmit}
                >
                    <Text style={styles.txt}>Login</Text>
                </TouchableHighlight>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: "center"
      },
    item:{
        borderColor: "gray",
        width: "85%",
        height:35,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom:20
    },
    btn:{
        width: "85%",
        backgroundColor: "blue",
        borderRadius: 10,
        paddingVertical: 10,
    },
    txt:{
        textAlign: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 15,
        color: "white"
    },
    img: {
        width: 200,
        height: 150,
        alignSelf: 'center',
      },
    text:{
        fontSize: 30,
        fontWeight: "bold",
        color: "blue",
        marginBottom:15,
        textAlign: 'center'
      },
});