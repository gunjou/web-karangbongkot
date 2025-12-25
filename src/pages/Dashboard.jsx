import { Users, FileText, MessageSquare, Folder } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      {/* TITLE */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <h3 className="text-sm">
          Selamat datang di Sistem Administrasi Desa Karang Bontok
        </h3>
      </div>

      {/* ===== CARD ATAS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <TopCard
          title="Total Penduduk"
          value="1.332"
          icon={Users}
          iconBg="bg-blue-50"
          iconColor="text-blue-500"
        />
        <TopCard
          title="Pemohon Aktif"
          value="22"
          icon={FileText}
          iconBg="bg-green-50"
          iconColor="text-green-500"
        />
        <TopCard
          title="Pengaduan"
          value="02"
          icon={MessageSquare}
          iconBg="bg-orange-50"
          iconColor="text-orange-500"
        />
        <TopCard
          title="Dokumen"
          value="1.298"
          icon={Folder}
          iconBg="bg-purple-50"
          iconColor="text-purple-500"
        />
      </div>

      {/* ===== KONTEN BAWAH ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Aktivitas Terbaru */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-5">
          <h2 className="font-semibold">Aktivitas Terbaru</h2>
          <p className="text-sm text-gray-500 mb-4">
            Aktivitas sistem dalam 24 jam terakhir
          </p>

          <ActivityItem
            name="Budi Santoso"
            action="mengajukan Surat Keterangan Tidak Mampu"
            time="5 menit yang lalu"
            status="Menunggu"
          />
          <ActivityItem
            name="Siti Aminah"
            action="melaporkan jalan rusak di RT 02"
            time="1 jam yang lalu"
            status="Diproses"
          />
          <ActivityItem
            name="Lurah Desa"
            action="mengunggah Perdes No. 5/2025"
            time="2 jam yang lalu"
            status="Selesai"
          />
          <ActivityItem
            name="Ahmad Yani"
            action="mengajukan Surat Domisili"
            time="3 jam yang lalu"
            status="Selesai"
          />
        </div>

        {/* KANAN */}
        <div className="space-y-6">
          {/* Statistik Cepat */}
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-5">
            <h2 className="font-semibold mb-4">Statistik Cepat</h2>
            <StatRow label="Kepala Keluarga" value="847" />
            <StatRow label="Laki-laki" value="1.456" />
            <StatRow label="Perempuan" value="1.391" />
            <StatRow label="Permohonan Bulan Ini" value="67" />
          </div>

          {/* Saldo Kas */}
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-5">
            <h2 className="font-semibold mb-2">Saldo Kas Desa</h2>
            <p className="text-2xl font-bold mb-4">Rp 125.450.000</p>

            <div className="text-sm space-y-1">
              <p className="text-green-600">
                + Rp 45.000.000{" "}
                <span className="text-gray-500">Pemasukan Bulan Ini</span>
              </p>
              <p className="text-red-600">
                - Rp 32.500.000{" "}
                <span className="text-gray-500">Pengeluaran Bulan Ini</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
const TopCard = ({ title, value, icon: Icon, iconBg, iconColor }) => (
  <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-4 flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
    <div className={`p-2 rounded-lg ${iconBg}`}>
      <Icon size={20} className={iconColor} />
    </div>
  </div>
);
const ActivityItem = ({ name, action, time, status }) => {
  const badge = {
    Menunggu: "bg-gray-200 text-gray-700",
    Diproses: "bg-yellow-200 text-yellow-800",
    Selesai: "bg-black text-white",
  };

  return (
    <div className="flex justify-between items-start py-3 border-t dark:border-gray-700">
      <div>
        <p className="text-sm">
          <span className="font-medium">{name}</span> {action}
        </p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${badge[status]}`}>
        {status}
      </span>
    </div>
  );
};
const StatRow = ({ label, value }) => (
  <div className="flex justify-between text-sm py-1">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);
