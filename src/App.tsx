import { useState } from "react";
import type { TugasKuliah, StatusTugas, KoleksiData } from "./types";
import "./App.css";

function App() {
  const appName: string = import.meta.env.VITE_APP_NAME || "Task Manager Kuliah";
  const appVersion: string = import.meta.env.VITE_APP_VERSION || "1.0.0";

  const [daftarTugas, setDaftarTugas] = useState<TugasKuliah[]>([
    {
      id: 1,
      judul: "Membuat Aplikasi Web React + TS",
      mataKuliah: "Pengembangan Aplikasi Web",
      deadline: "2026-11-30",
      status: "Belum Selesai",
      prioritas: true,
    },
  ]);

  const [judul, setJudul] = useState<string>("");
  const [mataKuliah, setMataKuliah] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [prioritas, setPrioritas] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);

  const dataKoleksi: KoleksiData<TugasKuliah> = {
    items: daftarTugas,
    total: daftarTugas.length,
  };

  const handleSimpan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!judul.trim() || !mataKuliah.trim()) return;

    if (editId !== null) {
      setDaftarTugas(
        daftarTugas.map((tugas) =>
          tugas.id === editId
            ? { ...tugas, judul, mataKuliah, deadline, prioritas }
            : tugas
        )
      );
      setEditId(null);
    } else {
      const tugasBaru: TugasKuliah = {
        id: Date.now(),
        judul,
        mataKuliah,
        deadline: deadline || "Tanpa tenggat",
        status: "Belum Selesai",
        prioritas,
      };
      setDaftarTugas([...daftarTugas, tugasBaru]);
    }

    setJudul("");
    setMataKuliah("");
    setDeadline("");
    setPrioritas(false);
  };

  const handleEdit = (tugas: TugasKuliah) => {
    setEditId(tugas.id);
    setJudul(tugas.judul);
    setMataKuliah(tugas.mataKuliah);
    setDeadline(tugas.deadline === "Tanpa tenggat" ? "" : tugas.deadline);
    setPrioritas(tugas.prioritas);
  };

  const handleHapus = (id: number) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  const toggleStatus = (id: number) => {
    setDaftarTugas(
      daftarTugas.map((tugas) => {
        if (tugas.id === id) {
          const statusBaru: StatusTugas =
            tugas.status === "Belum Selesai" ? "Selesai" : "Belum Selesai";
          return { ...tugas, status: statusBaru };
        }
        return tugas;
      })
    );
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Academic Planner</p>
          <h1 className="app-title">{appName}</h1>
          {/* <p className="app-subtitle">Catatan tugas & tenggat waktu perkuliahan</p> */}
        </div>
        <span className="version-pill">v{appVersion}</span>
      </header>

      <form onSubmit={handleSimpan} className="form-panel">
        <h2 className="panel-heading">
          {editId !== null ? "Perbarui Tugas" : "Tambah Tugas Baru"}
        </h2>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="judul-tugas">Judul Tugas</label>
            <input
              id="judul-tugas"
              type="text"
              placeholder="Contoh: Laporan Praktikum Basis Data"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="mata-kuliah">Mata Kuliah</label>
            <input
              id="mata-kuliah"
              type="text"
              placeholder="Contoh: Pengembangan Aplikasi Web"
              value={mataKuliah}
              onChange={(e) => setMataKuliah(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="deadline-tugas">Deadline</label>
            <input
              id="deadline-tugas"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </div>

        <div className="form-footer">
          <label className="priority-toggle">
            <input
              type="checkbox"
              checked={prioritas}
              onChange={(e) => setPrioritas(e.target.checked)}
            />
            <span>Tandai sebagai prioritas tinggi</span>
          </label>

          <div className="action-group">
            {editId !== null && (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setEditId(null);
                  setJudul("");
                  setMataKuliah("");
                  setDeadline("");
                  setPrioritas(false);
                }}
              >
                Batal
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {editId !== null ? "Simpan Perubahan" : "+ Tambah Tugas"}
            </button>
          </div>
        </div>
      </form>

      <section aria-label="Daftar Tugas">
        <div className="list-header">
          <h2 className="panel-heading">Daftar Tugas</h2>
          <span className="list-meta">{dataKoleksi.total} tugas tercatat</span>
        </div>

        {dataKoleksi.items.length === 0 ? (
          <div className="empty-box">
            Belum ada tugas kuliah. Tambahkan tugas pertamamu di atas.
          </div>
        ) : (
          <div className="task-stack">
            {dataKoleksi.items.map((tugas) => (
              <article
                key={tugas.id}
                className={`task-card ${tugas.status === "Selesai" ? "is-done" : ""}`}
              >
                <div className="task-main">
                  <div className="tag-row">
                    <span className="tag tag-course">{tugas.mataKuliah}</span>
                    {tugas.prioritas && (
                      <span className="tag tag-priority">Prioritas</span>
                    )}
                    <span
                      className={`tag ${
                        tugas.status === "Selesai" ? "tag-done" : "tag-pending"
                      }`}
                    >
                      {tugas.status}
                    </span>
                  </div>
                  <h3 className="task-title">{tugas.judul}</h3>
                  <p className="task-deadline">Deadline: {tugas.deadline}</p>
                </div>

                <div className="task-controls">
                  <button
                    type="button"
                    onClick={() => toggleStatus(tugas.id)}
                    className="btn btn-soft"
                  >
                    {tugas.status === "Belum Selesai" ? "Tandai Selesai" : "Batalkan"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEdit(tugas)}
                    className="btn btn-ghost"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHapus(tugas.id)}
                    className="btn btn-danger-soft"
                  >
                    Hapus
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer style={{ textAlign: "center", marginTop: "2.5rem", padding: "1.5rem 0", color: "#64748b", fontSize: "0.85rem", borderTop: "1px solid #e2e8f0" }}>
        <p>&copy; 2026 <strong>Ulya Mutiara</strong> • Tugas 6 Pemrograman Aplikasi Web (Vite + React + TypeScript)</p>
      </footer>
    </div>
  );
}

export default App;