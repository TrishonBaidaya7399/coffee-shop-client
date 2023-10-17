import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config"


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // const aUser = auth.currentUser;
    // const removeUser = (aUser)=>{
    //     deleteUser(aUser)
    // }

    const userInfo ={
        user,
        loading,
        createUser,
        signInUser,
        // removeUser,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;