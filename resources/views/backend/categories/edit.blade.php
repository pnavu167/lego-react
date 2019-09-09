@extends('backend.layouts.app')

@section('header-title', 'Edit Category')
<?php 
	$routeName = route('categories-edit');
?>
@section('content')

@include('backend.categories._form', ['routeName' => $routeName])
@endsection