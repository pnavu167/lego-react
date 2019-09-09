<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use Helper;

use Auth;

class CategoryController {

    public function list() {
    	$categoryModel = new Category();
    	$categories = $categoryModel->search();
    	$helper = new Helper();
    	foreach($categories as $category) {
    		$image = $category->images()->first()->image;

    		$imageName = $helper->getFileUrl('categories', $image);
    		$response[] = [
    			'id' => $category->id,
    			'name' => $category->name,
    			'code' => $category->code,
    			'image' => $imageName,
    			'description' => $category->description
    		];
    	}
    	return response()->json($response);
    }
}