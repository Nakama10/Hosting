function buttonUp(){var e=$(".sb-search-input").val();e=$.trim(e).length,0!==e?$(".sb-search-submit").css("z-index","99"):($(".sb-search-input").val(""),$(".sb-search-submit").css("z-index","-999"))}$(function(){$(".info").click(function(){$(".info").fadeOut(),$(".dialog-box").fadeIn(),$(".dialog-overlay").fadeTo("normal",.4)}),$(".closer").click(function(){$(".info").fadeIn(),$(".dialog-box").fadeOut(),$(".dialog-overlay").fadeOut()})}),$(function(){$(window).scroll(function(){$(this).scrollTop()>100?$("#BounceToTop").slideDown(200):$("#BounceToTop").slideUp(300)}),$(document.body).append('<div id="loading"></div>'),$(window).on("beforeunload",function(){$("#loading").fadeIn(1e3).delay(6e3).fadeOut(1e3)}),$("#BounceToTop").click(function(){$("body,html").animate({scrollTop:0},800).animate({scrollTop:25},200).animate({scrollTop:0},150).animate({scrollTop:10},100).animate({scrollTop:0},50)})}),function(e){e.fn.hoverTimeout=function(i,n,o,s){return this.each(function(){var a=null,t=e(this);t.hover(function(){clearTimeout(a),a=setTimeout(function(){n.call(t)},i)},function(){clearTimeout(a),a=setTimeout(function(){s.call(t)},o)})})}}(jQuery),function(e){e.fn.iklanaccordion=function(i){return i=jQuery.extend({active:1,hovertimeout:300,sUpSpeed:500,sDownSpeed:500,sUpEasing:null,sDownEasing:null},i),this.each(function(){var n=e(this),o=n.children("div[data-header]"),s=i.active-1;o.each(function(){e(this).hide().before('<h2 class="iklan-header">'+e(this).data("header")+"</h2>")}),n.children("div:eq("+s+")").show().prev().css("margin-top","-47px").addClass("active"),n.find(".iklan-header").hoverTimeout(i.hovertimeout,function(){n.children("h2").removeClass("active").animate({marginTop:0}),o.slideUp(i.sUpSpeed,i.sUpEasing).animate({marginTop:-47}),e(this).addClass("active").next().slideDown(i.sDownSpeed,i.sDownEasing)})})}}(jQuery),$(function(){$(".iklan-teks-sidebar").iklanaccordion(),$(".iklan-teks-post-footer").iklanaccordion()}),$(".info-icon").hover(function(){$(".info-iklan").animate({right:0},500,"easeInOutExpo")},function(){$(".info-iklan").animate({right:-103},500,"easeInOutExpo")}),$("#cssmenu ul ul li:odd").addClass("odd"),$("#cssmenu ul ul li:even").addClass("even"),$("#cssmenu > ul > li > a").click(function(){$("#cssmenu li").removeClass("active"),$(this).closest("li").addClass("active");var e=$(this).next();return e.is("ul")&&e.is(":visible")&&($(this).closest("li").removeClass("active"),e.slideUp("slow")),e.is("ul")&&!e.is(":visible")&&($("#cssmenu ul ul:visible").slideUp("slow"),e.slideDown("slow")),0==$(this).closest("li").find("ul").children().length?!0:!1}),$(document).ready(function(){var e=$(".sb-icon-search"),i=$(".sb-search-input"),n=$(".sb-search"),o=!1;$(document).mouseup(function(){1==o&&(i.val(""),$(".sb-search-submit").css("z-index","-999"),e.click())}),e.mouseup(function(){return!1}),n.mouseup(function(){return!1}),e.click(function(){0==o?(n.addClass("sb-search-open"),o=!0):(n.removeClass("sb-search-open"),o=!1)})})