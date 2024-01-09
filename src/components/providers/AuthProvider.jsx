import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
//create auth
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    //create sign up user
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //create login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // create logOut user
    const logOut = () => {
        signOut(auth);
    }
    //Get the currently signed-in user
    const unsubscribe =onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        return ()=>{
            return unsubscribe()
        }
    })
    const authInfo = {
        user,
        signUp,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;