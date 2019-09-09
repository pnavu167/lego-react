<?php
namespace App\Models;

use Illuminate\Support\Facades\DB;

class Category extends AppModel {

	protected $table = 'categories';

	protected $hidden = [];

    public function images()
    {
        return $this->hasMany('App\Models\Image', 'object_id', 'id')->where('object_type', 'categories');
    }

    public function products() {
    	return $this->belongsToMany('App\Models\Product', 'categories_products', 'category_id', 'product_id');
    }

    public function search() {
        $query = self::query();
        $list = $query->where([
            'deleted' => 0,
            'status' => 1
        ])->get();
        return $list;
    }
    public function createCategory($inputs) {
        $new = new Category();
        $new->name = $inputs['name'];
        $new->code = $inputs['code'];
        $new->save();
        return $new->id;
    }
}