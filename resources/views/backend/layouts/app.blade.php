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
    <link href="{{asset('css/backend/sb-admin.min.css')}}" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @yield('add-on-header')
</head>
<body>
    <div id="wrapper">
        @include('backend.layouts._sidebar')

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">
                @include('backend.layouts._topbar')
                <div class="container-fluid">
                    <h1 class="h3 mb-4 text-gray-800">@yield('header-title')</h1>
                    @yield('content')
                </div>
            </div>

            @include('backend.layouts._footer')
        </div>
    </div>
    <script src="{{asset('js/app.js/')}}"></script>
    <script src="{{asset('js/frontend/frontend.js/')}}"></script>
    <script src="{{asset('js/backend/sb-admin.min.js')}}"></script>
</body>

</html>
