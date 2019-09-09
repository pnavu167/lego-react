@extends('backend.layouts.app')
@section('header-title', 'Dashboard')
@section('add-on-header')
	<script type="text/javascript">
		var host = {!!
			json_encode([
				'baseUrl' => url('/'),
				'csrfToken' => csrf_token()
			])
		!!};
	</script>
@endsection
@section('content')
<div id="dashboard">
</div>
@endsection