<!DOCTYPE html><html><head><meta charset="utf-8"><title>utag</title><meta name="description" content=""><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="assets/fonts/openSans/OpenSans.css"><link rel="stylesheet" href="vendors.min.css"><link rel="apple-touch-icon" sizes="57x57" href="assets/favicons/apple-touch-icon-57x57.png"><link rel="apple-touch-icon" sizes="114x114" href="assets/favicons/apple-touch-icon-114x114.png"><link rel="apple-touch-icon" sizes="72x72" href="assets/favicons/apple-touch-icon-72x72.png"><link rel="apple-touch-icon" sizes="144x144" href="assets/favicons/apple-touch-icon-144x144.png"><link rel="apple-touch-icon" sizes="60x60" href="assets/favicons/apple-touch-icon-60x60.png"><link rel="apple-touch-icon" sizes="120x120" href="assets/favicons/apple-touch-icon-120x120.png"><link rel="apple-touch-icon" sizes="76x76" href="assets/favicons/apple-touch-icon-76x76.png"><link rel="apple-touch-icon" sizes="152x152" href="assets/favicons/apple-touch-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="assets/favicons/apple-touch-icon-180x180.png"><link rel="shortcut icon" href="assets/favicons/favicon.ico"><link rel="icon" type="image/png" href="assets/favicons/favicon-192x192.png" sizes="192x192"><link rel="icon" type="image/png" href="assets/favicons/favicon-160x160.png" sizes="160x160"><link rel="icon" type="image/png" href="assets/favicons/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/png" href="assets/favicons/favicon-16x16.png" sizes="16x16"><link rel="icon" type="image/png" href="assets/favicons/favicon-32x32.png" sizes="32x32"><meta name="msapplication-TileColor" content="#da532c"><meta name="msapplication-TileImage" content="assets/favicons/mstile-144x144.png"><meta name="msapplication-config" content="assets/favicons/browserconfig.xml"><link rel="stylesheet" href="utag.min.css"></head><body data-ng-app="utag" data-ng-controller="AuthCtrl"><!--[if lt IE 7]><p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]--><div class="wrapper"><div class="header"><div id="user-menu" data-ng-controller="AuthCtrl"><button id="user-login" data-ng-click="login()">Login</button> <button id="user-logout" data-ng-click="logout()">Logout</button></div></div><div class="content" data-ng-view=""></div><div class="footer"></div></div><script type="text/javascript">function demoDragover(event){
			event.preventDefault();
			event.dataTransfer.dropEffect = 'copy';
		}</script><script src="vendors.min.js"></script><script src="utag.min.js"></script></body></html>