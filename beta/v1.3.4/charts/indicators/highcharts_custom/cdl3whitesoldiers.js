define(["charts/indicators/highcharts_custom/indicator_base","highstock"],function(a){function b(b,c){var d=c,e=c-1,f=c-2,g=a.extractPriceForAppliedTO(a.OPEN,b,f),h=a.extractPriceForAppliedTO(a.CLOSE,b,f),i=(a.extractPriceForAppliedTO(a.LOW,b,f),a.extractPriceForAppliedTO(a.OPEN,b,e)),j=a.extractPriceForAppliedTO(a.CLOSE,b,e),k=(a.extractPriceForAppliedTO(a.LOW,b,e),a.extractPriceForAppliedTO(a.OPEN,b,d)),l=a.extractPriceForAppliedTO(a.CLOSE,b,d),m=(a.extractPriceForAppliedTO(a.LOW,b,d),a.extractPriceForAppliedTO(a.HIGH,b,d),h>g),n=g>h,o=j>i,p=i>j,q=l>k,r=k>l,s=m&&o&&i>g&&h>i&&q&&k>i&&j>k,t=n&&p&&g>i&&i>h&&r&&i>k&&k>j;return{isBullishContinuation:t,isBearishContinuation:s}}var c={},d={};return{init:function(){!function(a,e,f){function g(a,e){{var g=this;g.chart}for(var h in d)if(d[h]&&d[h].options&&d[h].options.data&&d[h].options.data.length>0&&c[h].parentSeriesID==g.options.id){var i=g.options.data,j=(c[h].period,f.findDataUpdatedDataPoint(i,a));if(j>=1){var k=b(i,j),l=null;k.isBullishContinuation?l={x:i[j].x||i[j][0],title:'<span style="color : blue">TWS</span>',text:"Three Advancing White Soldiers : Bull"}:k.isBearishContinuation&&(l={x:i[j].x||i[j][0],title:'<span style="color : red">TWS</span>',text:"Three Advancing White Soldiers : Bear"});for(var m=-1,n=d[h].data.length-1;n>=0;n--)if((d[h].data[n].x||d[h].data[n][0])==(i[j].x||i[j][0])){m=n;break}l?(e&&m>=0&&d[h].data[m].remove(),d[h].addPoint(l)):m>=0&&d[h].data[m].remove()}}}a&&!a.Series.prototype.addCDL3WHITESOLDIERS&&(a.Series.prototype.addCDL3WHITESOLDIERS=function(a){var f=this.options.id;a=e.extend({parentSeriesID:f},a);var g="_"+(new Date).getTime(),h=this.options.data||[];if(h&&h.length>0){for(var i=[],j=2;j<h.length;j++){var k=b(h,j),l=k.isBullishContinuation,m=k.isBearishContinuation;l&&i.push({x:h[j].x||h[j][0],title:'<span style="color : blue">TWS</span>',text:"Three Advancing White Soldiers : Bull"}),m&&i.push({x:h[j].x||h[j][0],title:'<span style="color : red">TWS</span>',text:"Three Advancing White Soldiers : Bear"})}var n=this.chart;c[g]=a;d[g]=n.addSeries({id:g,name:"CDL3WHITESOLDIERS("+a.period+")",data:i,type:"flags",onSeries:f,shape:"flag",turboThreshold:0},!1,!1),e(d[g]).data({isIndicator:!0,indicatorID:"cdl3whitesoldiers",parentSeriesID:a.parentSeriesID}),n.redraw()}return g},a.Series.prototype.removeCDL3WHITESOLDIERS=function(a){var b=this.chart;c[a]=null,b.get(a).remove(!1),d[a]=null,b.redraw()},a.wrap(a.Series.prototype,"addPoint",function(a,b,d,e,h){a.call(this,b,d,e,h),f.checkCurrentSeriesHasIndicator(c,this.options.id)&&g.call(this,b)}),a.wrap(a.Point.prototype,"update",function(a,b,d,e){a.call(this,b,d,e),f.checkCurrentSeriesHasIndicator(c,this.series.options.id)&&g.call(this.series,b,!0)}))}(Highcharts,jQuery,a)}}});