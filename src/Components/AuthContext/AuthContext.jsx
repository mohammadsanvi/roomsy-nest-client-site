import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile
} from 'firebase/auth';
import { auth } from '../../Firebase_Init/firebase_init';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

 const updateUserProfile = async (name, photoURL) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoURL,
  });

  setUser({
    ...auth.currentUser,
    displayName: name,
    photoURL: photoURL,
  });
};


  const logOut = () =>
    signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser)
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};
