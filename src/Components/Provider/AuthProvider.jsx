import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null)
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)

            if (currentUser) {
                const userInfo = { email: currentUser.email, name: currentUser.displayName };
                fetch('https://apex-kare-estates-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.token) {
                            localStorage.setItem('Access-token', data.token)
                            setLoading(false)
                        }
                    })
            } else {
                // to do: remove the token
                localStorage.removeItem('Access-token')
                setLoading(false)
            }
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { user, loading, createUser, userSignIn, logOut, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
