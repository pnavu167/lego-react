@extends('backend.layouts.app')
@section('header-title', 'List Categories')
@section('content')
<div class="card shadow mb-4">
	<div class="card-header py-3">
		<h6 class="m-0 font-weight-bold text-primary"></h6>
	</div>
	<div class="card-body">
		<div class="table-responsive">
			<table class="table table-bordered" width="100%" cellspacing="0">
				<thead>
					<tr>
						<th>Id</th>
						<th>Code</th>
						<th>Name</th>
						<th>
							<a href="{{route('categories-create')}}" class="btn btn-primary">
								<i class="fa fa-plus" aria-hidden="true"></i>
							</a>
						</th>
					</tr>
				</thead>
				<tbody>
					@foreach($categories as $category)
					<tr>
						<td>{{$category->id}}</td>
						<td>{{$category->code}}</td>
						<td>{{$category->name}}</td>
						<td>
							<a href="{{route('categories-edit', ['id' => $category->id])}}" class="btn btn-primary">
								<i class="fa fa-pencil-alt" aria-hidden="true"></i>
							</a>
							<a href="" class="btn btn-danger">
								<i class="fa fa-trash"></i>
							</a>
						</td>
					</tr>
					@endforeach
				</tbody>
			</table>
		</div>
	</div>
</div>
@endsection