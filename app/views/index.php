<!DOCTYPE html><html><head><meta charset="utf-8"><title>utag</title><meta name="description" content=""><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="/assets/fonts/openSans/OpenSans.css"><link rel="stylesheet" href="/utag.min.css"></head><body data-ng-app="utag"><!--[if lt IE 7]><p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]--><div class="container"><div class="header"></div><div class="content" data-ng-view=""></div><div class="footer"></div></div><script type="text/javascript">function demoDragover(event){
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
        }</script><script src="/vendors.min.js"></script><script src="/utag.min.js"></script></body></html>