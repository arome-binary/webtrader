define(["common/util"],function(){return{tickReceived:function(a,b,c,d,e){if(a&&a.chartIDs&&a.chartIDs.length>0){var f=$(a.chartIDs[0].containerIDWithHash).data("timeperiod");if(f){var g=void 0;if(isTick(f))e.insert({instrumentCdAndTp:b,time:c,open:d,high:d,low:d,close:d});else{if(g=e.chain().find({instrumentCdAndTp:b}).simplesort("time",!0).limit(1).data(),!g||g.length<=0)return;g=g[0],d<g.low?g.low=d:d>g.high&&(g.high=d),g.close=d,e.update(g)}for(var h in a.chartIDs){var i=a.chartIDs[h],j=$(i.containerIDWithHash).highcharts();if(j){var k=j.get(b);if(k){var l=$(i.containerIDWithHash).data("type");if(isTick(f))k.addPoint([c,d]);else{var m=k.data[k.data.length-1];l&&isDataTypeClosePriceOnly(l)?m.update([m.x,d]):g&&m.update([m.x,g.open,g.high,g.low,g.close])}}}}}}}}});