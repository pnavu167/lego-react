<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class UserController {

    public function list() {
    	$users = User::search();
    	return response()->json($users);
    }

    public function getUser(Request $request) {
    	$user =  $request->user();
    	$response = [
    		'name' => $user['name'],
    		'email' => $user['email'],
    		'birthday' => $user['birthday'],
    		'phone' => $user['phone'],
    		'avatar'  => $user['avatar'],
    		'createdAt' => date('d-m-y', strtotime($user['created_at'])),
    		'updatedAt' => date('d-m-y', strtotime($user['updated_at']))
    	];

    	return response()->json($response);
    }

    public function delete($id, Request $request) {
        $userModel = new User();

        $status = $userModel->deleteUser($id);
        if($status) {
            $msg = 'Success deleted user.';
        } else {
            $msg = 'Error has occured.';
        }

        return response()->json(['message' => $msg]);
    }
}
