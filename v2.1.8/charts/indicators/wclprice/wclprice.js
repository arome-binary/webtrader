define(["jquery","common/rivetsExtra","jquery-ui","color-picker","ddslick"],function(a,b){function c(){a(this).dialog("close")}function d(d,e){require(["css!charts/indicators/wclprice/wclprice.css"]),require(["text!charts/indicators/wclprice/wclprice.html","text!charts/indicators/indicators.json"],function(f,g){f=a(f),f.appendTo("body"),g=JSON.parse(g);var h=g.wclprice,i={title:h.long_display_name,description:h.description};b.bind(f[0],i),f.find("#wclprice_line_stroke").each(function(){a(this).colorpicker({position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})});var j="Solid";a("#wclprice_dash_style").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#wclprice_dash_style .dd-selected-image").css("max-width","115px"),j=b.selectedData.value}}),a("#wclprice_dash_style .dd-option-image").css("max-width","115px"),f.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"wclprice-ui-dialog",buttons:[{text:"OK",click:function(){var b={stroke:a("#wclprice_line_stroke").css("background-color"),strokeWidth:parseInt(a("#wclprice_stroke_width").val()),dashStyle:j};a(a(".wclprice").data("refererChartID")).highcharts().series[0].addIndicator("wclprice",b),c.call(f)}},{text:"Cancel",click:function(){c.call(this)}}]}),f.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),a.isFunction(e)&&e(d)})}return{open:function(b){return 0===a(".wclprice").length?void d(b,this.open):void a(".wclprice").data("refererChartID",b).dialog("open")}}});