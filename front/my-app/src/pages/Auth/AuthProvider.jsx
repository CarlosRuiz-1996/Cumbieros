import { createContext, useState , useEffect} from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// console.log(cookies);

export const AuthContext = createContext();
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    // console.log(cookies.get("nombre"))
    // useEffect(() => {
        // setUser({
        //     id: cookies.get("id"), 
        //     name: cookies.get("nombre"),
        //     rol: cookies.get("rol")
        //     })
            // console.log("ok test:", cookies);
    // }, []);

    const contexValue= {
        user, 
        login (){
            setUser({
                    id: cookies.get("id"), 
                    name: cookies.get("nombre"),
                    rol: cookies.get("rol")
                    })
        },
        logout(){   
            setUser(null)
        }, 
        isLogged(){
            return !!user
        }, 

    }

    return <AuthContext.Provider value={contexValue}>
        {children}
    </AuthContext.Provider>
}



export default AuthProvider;