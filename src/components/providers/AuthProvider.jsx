import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
//create auth
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const user = {
        displayName: "Omar Faruk",
    }
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