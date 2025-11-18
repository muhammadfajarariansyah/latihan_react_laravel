import React, { useState } from "react";
import axios from "axios";

const InputDataPegawai = () => {
    const [form, setForm] = useState({
        nama: "",
        jabatan: "",
        gaji: ""
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/pegawai", form);
            alert("Pegawai berhasil ditambahkan!");
            setForm({ nama: "", jabatan: "", gaji: "" });
        } catch (error) {
            console.error(error);
            alert("Gagal menambahkan pegawai");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Tambah Pegawai</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nama:</label><br />
                    <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Jabatan:</label><br />
                    <input
                        type="text"
                        name="jabatan"
                        value={form.jabatan}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Gaji:</label><br />
                    <input
                        type="number"
                        name="gaji"
                        value={form.gaji}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: "15px" }}>
                    Simpan
                </button>
            </form>
        </div>
    );
};
export default InputDataPegawai;
