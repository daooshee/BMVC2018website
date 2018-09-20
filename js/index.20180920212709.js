(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-1480.png' : 'images/zhan-tie-tu-xiang-740.png');
$('.js-2').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-1320.png' : 'images/zhan-tie-tu-xiang-660.png');
$('.js-3').attr('src', (dpi>1) ? 'images/denoise-evaluation-original-1322.jpg' : 'images/denoise-evaluation-original-661.jpg');
$('.js-4').attr('src', (dpi>1) ? 'images/decomposition-1328.jpg' : 'images/decomposition-664.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});