@extends('backend.layouts.app')

@section('header-title', 'Create Category')
<?php 
	$routeName = route('categories-create');
?>
@section('content')

@include('backend.categories._form', ['routeName' => $routeName])
@endsection