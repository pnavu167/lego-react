<div class="row justify-content-center">
	<div class="card o-hidden border-0 shadow-lg my-5 col-lg-6 align-center">
		<div class="card-body p-0">
			<div class="row">
				<div class="col-lg-12">
					<div class="p-5">
						@include('backend.shared._flash_session')
						<form action="{{$routeName}}" method="POST" enctype="multipart/form-data" >
							<div class="row">
								@csrf
								<div class="col-sm-12 mb-3">
									<input type="text" class="form-control" id="category-name" name="name" placeholder="Category Name">
								</div>
								<div class="col-sm-12 mb-3">
									<input type="text" class="form-control" id="category-code" name="code" placeholder="Category Code">
								</div>
								<div class="col-sm-12 mb-3">
									<input type="file" class="form-control" id="category-image" name="image">
								</div>
								<div class="col-sm-12">
									<button type="submit" class="btn btn-success col-sm-3">Save</button>
									<a href="{{route('categories-list')}}" class="btn btn-secondary col-sm-3">Cancel</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>