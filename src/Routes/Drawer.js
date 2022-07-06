// import { createDrawerNavigator } from "@react-navigation/drawer";
// //import contato
// //no Stack Nav. posso por o name com o nome real. mas no drawer é bom por diferente ex: HomeDrawer
// const Drawer = createDrawerNavigator();

// const MyDrawer = () => {
//     return (
//         <Drawer.Navigator>
//             {/* chamar as rotas/paginas que quero aqui */}
//             <Drawer.Screen name="RotaPrivada" component={RotasPrivadas} />
//             {!!user ? <RotasPrivadas /> : <RotasPublicas />} por contatos dentro das privadas também (além de publicas)
//         </Drawer.Navigator>
//     );
// };

// export default MyDrawer;

import { createDrawerNavigator } from "@react-navigation/drawer";
import Contatos from "../screens/Contatos";
//import Logout from "../screens/Logout/logout";
import Produto from "../screens/Produto";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Produto" component={Produto} />
            <Drawer.Screen name="Contatos" component={Contatos} />
            {/* <Drawer.Screen name="Logout" component={Logout} /> */}
        </Drawer.Navigator>
    );
};

export default MyDrawer;