import { Search, Filter, Eye, Pencil, Trash2 } from "lucide-react";

const dummyData = [
  {
    nik: "3201012345678901",
    nama: "Budi Santoso",
    jk: "L",
    ttl: "Mataram, 15/03/1985",
    agama: "Islam",
    pekerjaan: "PNS",
    status: "Aktif",
  },
  {
    nik: "3201012345678902",
    nama: "Siti Aminah",
    jk: "P",
    ttl: "Praya, 12/09/1990",
    agama: "Islam",
    pekerjaan: "Guru",
    status: "Aktif",
  },
  {
    nik: "3201012345678903",
    nama: "Ahmad Yani",
    jk: "L",
    ttl: "Pujut, 10/11/1978",
    agama: "Islam",
    pekerjaan: "Wiraswasta",
    status: "Aktif",
  },
];

const PendudukSemua = () => {
  return (
    <div className="space-y-4">
      {/* ===== FILTER BAR ===== */}
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Cari berdasarkan NIK, nama, atau alamat..."
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg
              border dark:border-gray-700
              bg-gray-50 dark:bg-gray-800
              focus:outline-none"
          />
        </div>

        <select className="px-3 py-2 text-sm rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <option>Semua</option>
          <option>Aktif</option>
          <option>Non Aktif</option>
        </select>

        <button className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
          <Filter size={16} />
          Filter Lainnya
        </button>
      </div>

      {/* ===== TABLE ===== */}
      <div className="border dark:border-gray-700 rounded-xl overflow-hidden">
        <div className="p-4 border-b dark:border-gray-700">
          <h2 className="font-semibold">
            Daftar Penduduk ({dummyData.length})
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <Th>NIK</Th>
                <Th>Nama</Th>
                <Th>JK</Th>
                <Th>Tempat, Tanggal Lahir</Th>
                <Th>Agama</Th>
                <Th>Pekerjaan</Th>
                <Th>Status</Th>
                <Th align="text-center">Aksi</Th>
              </tr>
            </thead>

            <tbody>
              {dummyData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <Td>{item.nik}</Td>
                  <Td>{item.nama}</Td>
                  <Td>{item.jk}</Td>
                  <Td>{item.ttl}</Td>
                  <Td>{item.agama}</Td>
                  <Td>{item.pekerjaan}</Td>
                  <Td>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      {item.status}
                    </span>
                  </Td>
                  <Td className="text-right">
                    <div className="flex justify-end gap-2">
                      <IconButton icon={Eye} />
                      <IconButton icon={Pencil} />
                      <IconButton icon={Trash2} danger />
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendudukSemua;

/* ===== KOMPONEN KECIL ===== */

const IconButton = ({ icon: Icon, danger }) => (
  <button
    className={`p-2 rounded-md transition
      ${
        danger
          ? "text-red-600 hover:bg-red-100"
          : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
      }
    `}
  >
    <Icon size={16} />
  </button>
);

const Th = ({ children, align }) => (
  <th className={`px-4 py-3 font-medium text-left ${align ?? ""}`}>
    {children}
  </th>
);

const Td = ({ children, className }) => (
  <td className={`px-4 py-3 ${className ?? ""}`}>{children}</td>
);
