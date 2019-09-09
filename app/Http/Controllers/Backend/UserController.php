<?php
namespace App\Http\Controllers\Backend;

class UserController extends Controller {

	public function list() {
		return view('backend.users.list');
	}
}