<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Lego') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="{{asset('lib/fontawesome/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    
    <!-- Slick -->
    <link href="{{ asset('plugins/slick/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('plugins/slick/slick-theme.css') }}" rel="stylesheet">
    
    <!-- Custom -->
    <link href="{{ asset('css/frontend/frontend.css') }}" rel="stylesheet">
</head>
<body>
    <div id="root">
        
    </div>
    
    
    <script src="{{asset('js/app.js/')}}"></script>

    <!-- Slick -->
    <script src="{{asset('plugins/slick/slick.min.js/')}}"></script>
    
    <!-- Highcharts -->
    <script src="{{asset('plugins/highcharts/code/highcharts.js/')}}"></script>
    <!-- Custom -->
    <script src="{{asset('js/frontend/frontend.js/')}}"></script>
</body>

</html>
