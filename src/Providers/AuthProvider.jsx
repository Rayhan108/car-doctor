import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebasecongiq";
export const authContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    console.log('current user:',currentUser);
    setLoading(false)
})
return ()=>{
    return unsubscribe()
}
    },[])

    const authInfo={
createUser,loading,login,user
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;