import React, { useState } from "react";
import PegawaiList from "./components/PegawaiList";
import InputDataPegawai from "./components/InputDataPegawai";

function App() {
  const [page, setPage] = useState("list"); // default tampil daftar pegawai

  return (
    <div style={{ padding: "20px" }}>
      <h1>Aplikasi Pegawai</h1>


      <button onClick={() => setPage("list")}>Daftar Pegawai</button>
      <button onClick={() => setPage("input")}>Input Pegawai</button>

      <hr />

      {/* Tampilkan komponen berdasarkan state */}
      {page === "list" && <PegawaiList />}
      {page === "input" && <InputDataPegawai />}
    </div>
  );
}

export default App;
