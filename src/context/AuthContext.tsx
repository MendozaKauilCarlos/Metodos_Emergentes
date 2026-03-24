import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';

interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: 'passenger' | 'driver';
}

interface AuthContextType {
  user: User | any | null;
  userData: UserData | null;
  loading: boolean;
  loginAsDemo: (role: 'passenger' | 'driver') => void;
  logoutDemo: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
  loginAsDemo: () => {},
  logoutDemo: () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | any | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);

  // Funciones para el Modo Demo
  const loginAsDemo = (role: 'passenger' | 'driver') => {
    setIsDemo(true);
    setUser({ uid: 'demo-user-123', email: 'demo@ridetoclass.com' });
    setUserData({
      uid: 'demo-user-123',
      email: 'demo@ridetoclass.com',
      displayName: 'Usuario Demo',
      role: role
    });
  };

  const logoutDemo = () => {
    setIsDemo(false);
    setUser(null);
    setUserData(null);
  };

  const logout = async () => {
    if (isDemo) {
      logoutDemo();
    } else {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    }
  };

  useEffect(() => {
    if (isDemo) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (isDemo) return; // Ignorar Firebase si estamos en demo
      
      setUser(firebaseUser);
      
      if (firebaseUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            const d = userDoc.data() as Record<string, unknown>;
            setUserData({
              uid: firebaseUser.uid,
              email: (d.email as string | null) ?? firebaseUser.email ?? null,
              displayName: (d.displayName as string | null) ?? (d.name as string | null) ?? null,
              role: d.role as UserData['role'],
            });
          } else {
            setUserData(null);
          }
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isDemo]);

  return (
    <AuthContext.Provider value={{ user, userData, loading, loginAsDemo, logoutDemo, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
