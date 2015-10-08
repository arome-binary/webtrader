define(["jquery","modernizr","common/util"],function(a){function b(){require(["charts/chartWindow"],function(b){var c=80;isSmallView()&&(c=100);var d=1,e=1,f=20,h=a(".chart-dialog").dialog("option","minWidth"),i=a(".chart-dialog").dialog("option","minHeight");isSmallView()&&(h=a(window).width()-2*f,i=a(window).height()-c);var j=g*h+(g-1)*f,k=a(window).width()-j,l=Math.round(k/2)-f,m=window;a(".chart-dialog").each(function(){if(1==d)var j=l;else if(d>1)var j=l+(h+f)*(d-1);var k=-c+2;m=window,m==window&&(k=(e-1)*i+e*c),m=a(this).dialog("option",{position:{my:"left+"+j+" top"+(0>k?"-":"+")+k,at:"left top",of:m},width:h,height:i}),b.triggerResizeEffects(a(this).dialog("widget").find(".chart-dialog")),++d>g&&(d=1,++e,m=window)})})}var c=null,d=[{symbol:"R_25",name:"Random 25 Index",timeperiod:"1d",chartType:"candlestick"},{symbol:"R_50",name:"Random 50 Index",timeperiod:"8h",chartType:"line"},{symbol:"R_75",name:"Random 75 Index",timeperiod:"4h",chartType:"ohlc"},{symbol:"R_100",name:"Random 100 Index",timeperiod:"2h",chartType:"spline"}],e=a(window).width(),f=a(window).height(),g=Math.floor(e/370),h=Math.floor(f/410);return(isSmallView()||0>=h||0>=g)&&(h=1,g=1),{init:function(){return tileObject=a("li.tile"),c=a("li.closeAll").click(function(){a(".chart-dialog").length>0&&a(".chart-dialog").dialog("close")}),require(["charts/chartWindow"],function(c){tileObject.click(function(){b()});var e=g*h;a(d).each(function(a,d){e>a&&c.addNewWindow(d.symbol,d.name,d.timeperiod,function(){b()},d.chartType)})}),this},tile:function(){b()},closeAll:function(){c||c.click()}}});