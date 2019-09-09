<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableCategoriesProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_products', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('category_id')->nullable();
            $table->bigInteger('product_id')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->tinyInteger('deleted')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories_products');
    }
}
