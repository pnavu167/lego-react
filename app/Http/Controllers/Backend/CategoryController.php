<?php
namespace App\Http\Controllers\Backend;

use App\Models\Category;
use App\Models\Image;
use Request;
use Helper;

class CategoryController extends Controller {

	const object_type = 'categories';

	public function list() {
		$categoryModel = new Category();
		$categories = $categoryModel->search();
		return view('backend.categories.list', [
			'categories' => $categories
		]);
	}

	public function create() {
		$request = Request::instance();
		$helper = new Helper();

		$inputs = $request->all();
		
		$type = false;
		if($request->isMethod('POST')) {
			$image = $request->file('image');
			\DB::transaction(function () use ($inputs, $helper, $image, $request, &$type) {
				//new category
			 	$categoryModel = new Category();
			 	$categoryId = $categoryModel->createCategory($inputs);

			 	//get name for image
                $now = date('Y_m_d_H_i_s');
                if(!empty($inputs['image'])) {
                	$fileName = $now.'_'.$categoryId.'.'.$image->getClientOriginalExtension();
					$imageName = $helper->uploadFile($inputs['image'], 'categories',  $fileName);
					$imageData = [
						'image' => $imageName,
						'object_id' => $categoryId,
						'object_type' => self::object_type
					];
					//create new image
					$imageModel = new Image();
					$newImage = $imageModel->createImage($imageData);
					$type = true;
                }
				
            });
		}
		if($type) {
			$request->session()->flash('success', 'Success insert new category');
			return redirect()->route('categories-list');
		}
		return view('backend.categories.create');
	}

	public function edit($id) {
		$request = Request::instance();
		$helper = new Helper();
		$categoryModel = new Category();
		$inputs = $request->all();
		$category = $categoryModel->findById($id);
		if($category->isEmpty()) {
			abort(404);
		}

		return view('backend.categories.edit', [
			'category' => $category
		]);
	}
}