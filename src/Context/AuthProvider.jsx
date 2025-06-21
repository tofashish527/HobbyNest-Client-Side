import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { app } from '../firebase.init';
import { AuthContext } from './AuthContext';
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loguser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((result) => {
                //console.log("Google Sign-In result:", result.user);
                return result;
            });
    };

    const logout = () => {
        return signOut(auth);
    }



    useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //console.log("Auth state changed. Current user:", currentUser);
    setUser(currentUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);


   const userinfo={
    createuser,loguser,signInWithGoogle,user,setUser,logout,loading,setLoading
   }
    return (
            <AuthContext value={userinfo}>
                {children}
            </AuthContext>
    );
};

export default AuthProvider;
