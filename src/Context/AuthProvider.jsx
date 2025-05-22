import React from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase.init';
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   
   const createuser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }
     const loguser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      };
   const userinfo={
    createuser,loguser,signInWithGoogle 
   }
    return (
            <Authcontext value={userinfo}>
                {children}
            </Authcontext>
    );
};

export default AuthProvider;
//import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// const authdata={
  //      user,setUser,createUser,logUser,logout,loading,setLoading,resetPassword,signInWithGoogle
    //}