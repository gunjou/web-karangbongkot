import { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiBell,
  FiLogOut,
  FiUser,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = ({ onMenuClick }) => {
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const user = {
    name: "Admin Desa",
    role: "Administrator",
    initial: "AD",
    notifications: 3,
  };

  // CLOSE DROPDOWN JIKA KLIK DI LUAR
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setOpenNotif(false);
      }

      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="
      sticky top-0 z-30 h-16
      bg-white dark:bg-gray-900
      border-b dark:border-gray-700
      text-gray-900 dark:text-gray-100
      flex items-center justify-between px-4
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="lg:hidden text-xl">
          <FiMenu />
        </button>
        <span className="font-semibold text-lg">{""}</span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 relative">
        <ThemeToggle />

        {/* NOTIFICATION */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setOpenNotif(!openNotif);
              setOpenProfile(false);
            }}
            className="
              w-9 h-9 rounded-full
              flex items-center justify-center
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition
            "
          >
            <FiBell />
            {user.notifications > 0 && (
              <span
                className="
                absolute top-2 right-2
                w-2 h-2 rounded-full
                bg-red-500
              "
              />
            )}
          </button>

          {openNotif && (
            <div
              className="
              absolute right-0 mt-2 w-72
              bg-white dark:bg-gray-900
              border dark:border-gray-700
              rounded-lg shadow-lg
              overflow-hidden
            "
            >
              <div className="p-3 font-medium border-b dark:border-gray-700">
                Notifikasi
              </div>
              <div className="max-h-60 overflow-auto">
                <div className="p-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  Surat masuk baru
                </div>
                <div className="p-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  Data penduduk diperbarui
                </div>
                <div className="p-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                  Permohonan surat baru
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="relative flex items-center gap-2" ref={profileRef}>
          {/* Avatar / Initial (TIDAK CLICKABLE) */}
          <div
            className="
      w-9 h-9 rounded-full
      bg-green-600 text-white
      flex items-center justify-center
      font-semibold
    "
          >
            {user.initial}
          </div>

          {/* Nama & Role (TIDAK CLICKABLE) */}
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <span className="block text-[11px] text-gray-500 dark:text-gray-400 mt-[2px]">
              {user.role}
            </span>
          </div>

          {/* ARROW BUTTON (CLICKABLE) */}
          <button
            onClick={() => {
              setOpenProfile(!openProfile);
              setOpenNotif(false);
            }}
            className="
      p-1 rounded-md
      hover:bg-gray-100 dark:hover:bg-gray-800
      transition
    "
            aria-label="Toggle profile menu"
          >
            <FiChevronDown
              className={`transition-transform ${
                openProfile ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* DROPDOWN */}
          {openProfile && (
            <div
              className="
        absolute right-0 top-full mt-2 w-48
        bg-white dark:bg-gray-900
        border dark:border-gray-700
        rounded-lg shadow-lg
        overflow-hidden
        z-50
      "
            >
              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                <FiUser /> Profil
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                <FiSettings /> Pengaturan
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800">
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
