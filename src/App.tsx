import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import BottomNav from './components/BottomNav';

const Login = lazy(() => import('./views/Login'));
const Home = lazy(() => import('./views/Home'));
const DriverRequests = lazy(() => import('./views/DriverRequests'));
const DriverActiveTrips = lazy(() => import('./views/DriverActiveTrips'));
const DriverCreateRoute = lazy(() => import('./views/DriverCreateRoute'));
const Trips = lazy(() => import('./views/Trips'));
const MapView = lazy(() => import('./views/MapView'));
const Profile = lazy(() => import('./views/Profile'));
const EditProfile = lazy(() => import('./views/EditProfile'));
const Settings = lazy(() => import('./views/Settings'));

const PageFallback = () => (
  <div className="min-h-screen bg-zinc-900 flex items-center justify-center text-emerald-500 text-sm">
    Cargando vista…
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center text-emerald-500">
        Cargando…
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;

  return (
    <>
      {children}
      <BottomNav />
    </>
  );
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver/requests"
          element={
            <ProtectedRoute>
              <DriverRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/driver/active"
          element={
            <ProtectedRoute>
              <DriverActiveTrips />
            </ProtectedRoute>
          }
        />
        <Route
          path="/driver/create-route"
          element={
            <ProtectedRoute>
              <DriverCreateRoute />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trips"
          element={
            <ProtectedRoute>
              <Trips />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <MapView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
