import React, { useEffect, useState } from "react";
import axios from "axios";

const PegawaiList = () => {
    const [pegawai, setPegawai] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/pegawai")
        .then((res) => setPegawai(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div style={{ padding: 20 }}>
        <h2>Daftar Pegawai</h2>
        <table border="1" cellPadding="10" style={{ width: "100%" }}>
            <thead>
            <tr>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Gaji</th>
            </tr>
            </thead>
            <tbody>
            {pegawai.map((p) => (
                <tr key={p.id}>
                <td>{p.nama}</td>
                <td>{p.jabatan}</td>
                <td>{p.gaji}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default PegawaiList;
