import { Outlet, useLocation } from "react-router-dom";
import { Plus, Upload, Download } from "lucide-react";

const PendudukLayout = () => {
  const location = useLocation();

  // ===== IDENTIFIKASI SUB MENU =====
  const isSemua = location.pathname.includes("/penduduk/semua");
  const isTetap = location.pathname.includes("/penduduk/tetap");
  const isDatang = location.pathname.includes("/penduduk/datang");
  const isPindah = location.pathname.includes("/penduduk/pindah");

  const getTitle = () => {
    if (isSemua) return "Daftar Penduduk";
    if (isTetap) return "Penduduk Tetap";
    if (isDatang) return "Penduduk Datang";
    if (isPindah) return "Penduduk Pindah";
    return "Data Penduduk";
  };

  const getSubtitle = () => {
    if (isDatang) return "Penduduk yang datang ke desa";
    if (isPindah) return "Penduduk yang pindah dari desa";
    return "Pengelolaan data penduduk desa";
  };

  return (
    <div className="space-y-6">
      {/* ===== HEADER ===== */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{getTitle()}</h1>
          <p className="text-sm text-gray-500">{getSubtitle()}</p>
        </div>

        {/* ===== ACTION BUTTON ===== */}
        <div className="flex gap-2">
          <ActionButton icon={Download} label="Export" />
          <ActionButton icon={Upload} label="Import" />

          {/* Tambah bisa beda label / logic */}
          <ActionButton
            icon={Plus}
            label={
              isDatang
                ? "Tambah Penduduk Datang"
                : isPindah
                ? "Tambah Penduduk Pindah"
                : "Tambah Penduduk"
            }
            primary
          />
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default PendudukLayout;

/* ===== BUTTON ===== */
const ActionButton = ({ icon: Icon, label, primary }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition
      ${
        primary
          ? "bg-black text-white hover:bg-gray-800"
          : "border hover:bg-gray-100 dark:hover:bg-gray-800"
      }
    `}
  >
    <Icon size={16} />
    {label}
  </button>
);
