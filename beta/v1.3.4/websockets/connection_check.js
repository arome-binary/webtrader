define([],function(){var a=null;return{init:function(b,c){$(document).everyTime(15e3,null,function(){var d=(new Date).getTime()-(a||(new Date).getTime());d>=6e4?c&&$.each(c,function(a,d){var e=d.chartIDs;if(b.send(JSON.stringify({forget:c[a].tickStreamingID})),c[a].tickStreamingID=null,e&&e.length>0){var f={ticks:e[0].instrumentCode,end:"latest",passthrough:{instrumentCdAndTp:a.toUpperCase()}};b.send(JSON.stringify(f))}}):b.send(JSON.stringify({ping:"1"}))})},process:function(){a=(new Date).getTime()}}});