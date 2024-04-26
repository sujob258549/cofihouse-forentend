import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";


export const AuthContext = createContext(null);

const Firebase = ({ children }) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true); // Corrected typo: setLoader instead of setloder
    const auth = getAuth(app);

    // create a user
    const createUser = (email, password) => {
        setLoader(false); 
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn=(email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const useInfo = {
        user,
        loader,
        createUser,
        signIn
    };
    return (
        <AuthContext.Provider value={useInfo}>
            {children}
        </AuthContext.Provider>
    );

    
};

export default Firebase;