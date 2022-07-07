import React, { useContext, useState } from "react";
import styles, { KeyBoardView, 
    Container, 
    TextInput,
    Button
} from "./styles";
import { Text, Image} from "react-native";
import logo from '../../../assets/Logo.png'
import { useNavigation } from "@react-navigation/native";
// import { AuthContext } from "../../context/context";




function Login()  {
    
    const navigation = useNavigation()
    // const {user, password} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
     const user="Aluno"
    const password= "123"
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const logar = () => {

        if ( usuario === user && senha === password) {
            setLoading(true)
            alert("Loguei CaRaY")
            navigation.navigate("Drawer");
            
        }else {
            setLoading(false)
            alert("Login ou senha inválido, tente novamente!")
        }
        
    };

    return (
        <KeyBoardView >
           
            {/* <Header/> */}
           
            
            <Container >
            <Image source={logo}/>
                <TextInput  
                    
                    placeholderTextColor="rgba(168, 165, 165, 0.62)"
                    placeholder="Login"
                    onChangeText={text=>setUsuario(text)}
                    />

                <TextInput 
                    
                    placeholderTextColor="rgba(168, 165, 165, 0.62)"
                    placeholder="Senha"
                    onChangeText={text=>setSenha(text)}
                    secureTextEntry
                    />
                <Button onPress={() => logar()} >
                    <Text style={styles.btn}>Login</Text>
                </Button>
             
            </Container>
        </KeyBoardView>
    )
}


export default Login;