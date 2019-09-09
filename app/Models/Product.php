<?php
namespace App\Models;

use Illuminate\Support\Facades\DB;

class Product extends AppModel {

	protected $table = 'products';

	protected $hidden = [];

    public function images()
    {
        return $this->hasMany('App\Models\Image', 'object_id', 'id')->where('object_type', 'products');
    }

    public function categories() {
    	return $this->belongsToMany( 'App\Models\Category', 'categories_products', 'product_id', 'category_id' );
    }

    public function search() {
    	$query = self::query();
    	$query->where([
    		'status' => 1,
    		'deleted' => 0
    	]);
    	$list = $query->get();
    	return $list;
    }
}