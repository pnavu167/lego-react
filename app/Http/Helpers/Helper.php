<?php
namespace App\Http\Helpers;

use Storage;

class Helper {

	const storagePath = '/public/images';

	public function getImagePath($path) {
		return self::storagePath.'/'.$path;
	}

	public function uploadFile($file, $path, $fileName = null) {
		$destinationPath = $this->getImagePath($path);

		if(empty($fileName)) {
			$now = date('Y-m-d H:i:s');
			$fileName = strtotime($now).'_'.self::randomString().'.'.$file->getClientOriginalExtension();
		}

		$test = Storage::putFileAs($destinationPath, $file, $fileName);
		return $fileName;
	}

	public function getFileUrl($path, $fileName) {
		$destinationPath = $this->getImagePath($path).'/'.$fileName;
		$url = Storage::url($destinationPath);
		return $url;
	}

	public static function randomString($length = 8)
    {
        $characters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}