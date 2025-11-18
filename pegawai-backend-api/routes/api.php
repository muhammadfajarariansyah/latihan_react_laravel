<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PegawaiController;
Route::apiResource('pegawai', PegawaiController::class);