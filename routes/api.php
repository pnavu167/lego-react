<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/login', 'API\AuthenticateController@login');

Route::group([
		'middleware' => 'auth:api',
		'namespace' => 'API'
	], function() {
	Route::get('listUser', 'UserController@list');
	Route::get('user', 'UserController@getUser');
});

Route::group([
		'namespace' => 'API'
	], function() {
	Route::get('categories', 'CategoryController@list');
	Route::get('products', 'ProductController@list');
});


