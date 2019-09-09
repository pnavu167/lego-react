@if(Session::has('success'))
	<div class="mb-3 p-3 bg-gradient-success text-white">{{ Session::get('success') }}</div>
@elseif(Session::has('error'))
	<div class="mb-3 p-3 bg-gradient-danger text-white">{{ Session::get('error') }}</div>
@endif