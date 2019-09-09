<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
//web route
Route::group([
		'prefix' => '/admin',
		'middleware' => 'auth',
		'namespace' => 'Backend'
	], function() {

	Route::get('', function() {
		return redirect()->route('admin-users-list');
	});
	
	//USER
	Route::get('/users/list', 'UserController@list')->name('admin-users-list');

	//Category
	Route::get('/categories', 'CategoryController@list')->name('categories-list');
	Route::match(['get', 'post'], '/categories/create', 'CategoryController@create')->name('categories-create');
	Route::match(['get', 'post'], '/categories/edit/{id}', 'CategoryController@edit')->name('categories-edit');

	Route::match(['get', 'post'], '/dashboard', function() {
		return view('backend.dashboard.index');
	})->name('dashboard');
});
Route::get('logout', 'Auth\LoginController@logout')->name('logout');

//react route
Route::group([
		'prefix' => '/api',
		'middleware' => 'auth',
		'namespace' => 'API'
	], function() {

	Route::match(['get', 'post'], '/users', 'UserController@list')->name('api-user-list');
	Route::post('/users/delete/{id}', 'UserController@delete')->name('api-user-delete');

});

Route::view('/{any}', 'welcome')
    ->where('any', '.*');

