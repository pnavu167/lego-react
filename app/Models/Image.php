<?php
namespace App\Models;

use Illuminate\Support\Facades\DB;

class Image extends AppModel {

	protected $table = 'images';

	protected $fillable = [
        'image',
        'object_id',
        'object_type',
        'status',
        'deleted'
    ];

    public $timestamps = false;

    public function image()
    {
        return $this->morphTo();
    }

    public function createImage($image) {
        $new = new Image();
        $new->image = $image['image'];
        $new->object_id = $image['object_id'];
        $new->object_type = $image['object_type'];
        $new->save();
        return $new->id;
    }
}