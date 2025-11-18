<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    public function index()
    {
        return Pegawai::all();
    }

    public function store(Request $request)
    {
        return Pegawai::create($request->all());
    }

    public function show($id)
    {
        return Pegawai::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $pegawai = Pegawai::findOrFail($id);
        $pegawai->update($request->all());
        return $pegawai;
    }

    public function destroy($id)
    {
        Pegawai::findOrFail($id)->delete();
        return response()->json(['message' => 'deleted']);
    }
}
