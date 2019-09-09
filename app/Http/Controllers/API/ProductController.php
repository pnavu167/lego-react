<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use Helper;

use Auth;

class ProductController {

    public function list() {
    	$productModel = new Product();
    	$products = $productModel->search();
    	$helper = new Helper();
    	foreach($products as $product) {
    		$images = $product->images()->get();
            $listImageName = [];
            if(!$images->isEmpty()) {
                foreach($images as $image) {
                    $listImageName[] = $helper->getFileUrl('products', $image->image);
                }
            }
    		
    		$response[] = [
    			'id' => $product->id,
    			'name' => $product->name,
    			'code' => $product->code,
                'price' => round($product->price, 2),
    			'images' => $listImageName,
    			'description' => $product->description,
                'created_at' => $product->created_at,
                'updated_at' => $product->updated_at
    		];
    	}
    	return response()->json($response);
    }
}