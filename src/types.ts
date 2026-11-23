// 1. Type Alias & Union Type (Main: Status Tugas Kuliah)
export type StatusTugas = "Belum Selesai" | "Selesai";

// 2. Interface & Primitive Types (number, string, boolean)
export interface TugasKuliah {
  id: number;           // Primitive type: number
  judul: string;        // Primitive type: string
  mataKuliah: string;   // Primitive type: string
  deadline: string;     // Primitive type: string
  status: StatusTugas;  // Union type
  prioritas: boolean;   // Primitive type: boolean
}

// 3. Generics Sederhana & Array
export interface KoleksiData<T> {
  items: T[];           // Array of Generic T
  total: number;        // Primitive type: number
}

// 4. Filter Status Type Alias
export type FilterStatus = "Semua" | StatusTugas;
