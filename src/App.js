import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";

import PendudukLayout from "./pages/penduduk/PendudukLayout";
import DaftarPenduduk from "./pages/penduduk/DaftarPenduduk";
import PendudukTetap from "./pages/penduduk/PendudukTetap";
import PendudukPindah from "./pages/penduduk/PendudukPindah";
import PendudukDatang from "./pages/penduduk/PendudukDatang";

import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== DEFAULT → LOGIN ===== */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* ===== LOGIN ===== */}
        <Route path="/login" element={<Login />} />

        {/* ===== DASHBOARD ===== */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/penduduk" element={<PendudukLayout />}>
            <Route path="semua" element={<DaftarPenduduk />} />
            <Route path="tetap" element={<PendudukTetap />} />
            <Route path="datang" element={<PendudukDatang />} />
            <Route path="pindah" element={<PendudukPindah />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
