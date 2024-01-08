import { createContext } from "react";

const AuthProvider = ({ children }) => {
    const AuthContext = createContext(null);
    const user = {
        displayName: "Omar Faruk";
    }
    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;