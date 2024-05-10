import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)

    const handleCreateUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSigInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleLogoutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser)
            setLoding(false)
            console.log('current user', currentUser);
            // if user exists then issue a token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
                    
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    }) 
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        handleCreateUser,
        handleSigInUser,
        handleLogoutUser

    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;