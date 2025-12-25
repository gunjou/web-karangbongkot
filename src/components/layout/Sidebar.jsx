import { useState } from "react";
import {
  X,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import headerImage from "../../assets/icon.png"; // sesuaikan path

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(() => {
    if (location.pathname.startsWith("/penduduk")) return "penduduk";
    if (location.pathname.startsWith("/surat")) return "surat";
    return null;
  });
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40 w-64
        bg-white dark:bg-gray-900
        border-r dark:border-gray-700
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {/* Logo / Icon */}
          <img
            src={headerImage}
            alt="Logo Desa"
            className="w-10 h-10 rounded object-contain"
          />

          {/* Text */}
          <div className="flex flex-col">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.01">
              Sistem Administrasi Desa
            </p>
            <h1 className="font-bold text-lg leading-snug">Karang Bongkot</h1>
          </div>
        </div>

        {/* Close button (mobile) */}
        <button
          onClick={onClose}
          className="lg:hidden text-gray-600 dark:text-gray-300"
        >
          <X size={20} />
        </button>
      </div>

      {/* ===== MENU ===== */}
      <nav className="p-4 space-y-1 text-sm">
        <MenuItem icon={LayoutDashboard} label="Dashboard" to="/" />

        <MenuDropdown
          icon={Users}
          label="Data Penduduk"
          isOpen={openMenu === "penduduk"}
          active={location.pathname.startsWith("/penduduk")}
          onClick={() => toggleMenu("penduduk")}
        >
          <SubMenuItem label="Daftar Penduduk" to="/penduduk/semua" />
          <SubMenuItem label="Penduduk Tetap" to="/penduduk/tetap" />
          <SubMenuItem label="Penduduk Datang" to="/penduduk/datang" />
          <SubMenuItem label="Penduduk Pindah" to="/penduduk/pindah" />
        </MenuDropdown>

        <MenuDropdown
          icon={FileText}
          label="Surat"
          isOpen={openMenu === "surat"}
          active={location.pathname.startsWith("/surat")}
          onClick={() => toggleMenu("surat")}
        >
          <SubMenuItem label="Surat Masuk" to="/surat/masuk" />
          <SubMenuItem label="Surat Keluar" to="/surat/keluar" />
          <SubMenuItem label="Arsip Surat" to="/surat/arsip" />
        </MenuDropdown>

        <MenuItem icon={Settings} label="Pengaturan" to="/pengaturan" />
      </nav>
    </aside>
  );
};

export default Sidebar;

const MenuItem = ({ icon: Icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      w-full flex items-center gap-3 px-3 py-2 rounded-md
      transition
      ${
        isActive
          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-medium"
          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      }
      `
    }
  >
    <Icon size={18} />
    <span>{label}</span>
  </NavLink>
);

const MenuDropdown = ({
  icon: Icon,
  label,
  isOpen,
  onClick,
  active,
  children,
}) => (
  <div>
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-between
        px-3 py-2 rounded-md transition
        ${
          active
            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />
        <span>{label}</span>
      </div>
      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>

    {isOpen && <div className="ml-9 mt-1 space-y-1">{children}</div>}
  </div>
);

const SubMenuItem = ({ label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      block w-full px-3 py-1.5 rounded-md text-sm transition
      ${
        isActive
          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      }
      `
    }
  >
    {label}
  </NavLink>
);
