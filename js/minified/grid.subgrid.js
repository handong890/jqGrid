/**
*
* @license Guriddo jqGrid JS - v4.7.1 - 2015-02-05
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid.extend({setSubGrid:function(){return this.each(function(){var b,c,d=this,e={plusicon:"ui-icon-plus",minusicon:"ui-icon-minus",openicon:"ui-icon-carat-1-sw",expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0};if(d.p.subGridOptions=a.extend(e,d.p.subGridOptions||{}),d.p.colNames.unshift(""),d.p.colModel.unshift({name:"subgrid",width:a.jgrid.cell_width?d.p.subGridWidth+d.p.cellLayout:d.p.subGridWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0}),b=d.p.subGridModel,b[0])for(b[0].align=a.extend([],b[0].align||[]),c=0;c<b[0].name.length;c++)b[0].align[c]=b[0].align[c]||"left"})},addSubGridCell:function(a,b){var c,d,e="";return this.each(function(){e=this.formatCol(a,b),d=this.p.id,c=this.p.subGridOptions.plusicon}),'<td role="gridcell" aria-describedby="'+d+'_subgrid" class="ui-sgcollapsed sgcollapsed" '+e+"><a style='cursor:pointer;'><span class='ui-icon "+c+"'></span></a></td>"},addSubGrid:function(b,c){return this.each(function(){var d=this;if(d.grid){var e,f,g,h,i,j=function(b,c,e){var f=a("<td align='"+d.p.subGridModel[0].align[e]+"'></td>").html(c);a(b).append(f)},k=function(b,c){var e,f,g,h=a("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),i=a("<tr></tr>");for(f=0;f<d.p.subGridModel[0].name.length;f++)e=a("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+d.p.direction+"'></th>"),a(e).html(d.p.subGridModel[0].name[f]),a(e).width(d.p.subGridModel[0].width[f]),a(i).append(e);a(h).append(i),b&&(g=d.p.xmlReader.subgrid,a(g.root+" "+g.row,b).each(function(){if(i=a("<tr class='ui-widget-content ui-subtblcell'></tr>"),g.repeatitems===!0)a(g.cell,this).each(function(b){j(i,a(this).text()||"&#160;",b)});else{var b=d.p.subGridModel[0].mapping||d.p.subGridModel[0].name;if(b)for(f=0;f<b.length;f++)j(i,a(b[f],this).text()||"&#160;",f)}a(h).append(i)}));var k=a("table:first",d.grid.bDiv).attr("id")+"_";return a("#"+a.jgrid.jqID(k+c)).append(h),d.grid.hDiv.loading=!1,a("#load_"+a.jgrid.jqID(d.p.id)).hide(),!1},l=function(b,c){var e,f,g,h,i,k,l=a("<table cellspacing='0' cellpadding='0' border='0'><tbody></tbody></table>"),m=a("<tr></tr>");for(g=0;g<d.p.subGridModel[0].name.length;g++)e=a("<th class='ui-state-default ui-th-subgrid ui-th-column ui-th-"+d.p.direction+"'></th>"),a(e).html(d.p.subGridModel[0].name[g]),a(e).width(d.p.subGridModel[0].width[g]),a(m).append(e);if(a(l).append(m),b&&(i=d.p.jsonReader.subgrid,f=a.jgrid.getAccessor(b,i.root),void 0!==f))for(g=0;g<f.length;g++){if(h=f[g],m=a("<tr class='ui-widget-content ui-subtblcell'></tr>"),i.repeatitems===!0)for(i.cell&&(h=h[i.cell]),k=0;k<h.length;k++)j(m,h[k]||"&#160;",k);else{var n=d.p.subGridModel[0].mapping||d.p.subGridModel[0].name;if(n.length)for(k=0;k<n.length;k++)j(m,h[n[k]]||"&#160;",k)}a(l).append(m)}var o=a("table:first",d.grid.bDiv).attr("id")+"_";return a("#"+a.jgrid.jqID(o+c)).append(l),d.grid.hDiv.loading=!1,a("#load_"+a.jgrid.jqID(d.p.id)).hide(),!1},m=function(b){var c,e,f,g;if(c=a(b).attr("id"),e={nd_:(new Date).getTime()},e[d.p.prmNames.subgridid]=c,!d.p.subGridModel[0])return!1;if(d.p.subGridModel[0].params)for(g=0;g<d.p.subGridModel[0].params.length;g++)for(f=0;f<d.p.colModel.length;f++)d.p.colModel[f].name===d.p.subGridModel[0].params[g]&&(e[d.p.colModel[f].name]=a("td:eq("+f+")",b).text().replace(/\&#160\;/gi,""));if(!d.grid.hDiv.loading)switch(d.grid.hDiv.loading=!0,a("#load_"+a.jgrid.jqID(d.p.id)).show(),d.p.subgridtype||(d.p.subgridtype=d.p.datatype),a.isFunction(d.p.subgridtype)?d.p.subgridtype.call(d,e):d.p.subgridtype=d.p.subgridtype.toLowerCase(),d.p.subgridtype){case"xml":case"json":a.ajax(a.extend({type:d.p.mtype,url:a.isFunction(d.p.subGridUrl)?d.p.subGridUrl.call(d,e):d.p.subGridUrl,dataType:d.p.subgridtype,data:a.isFunction(d.p.serializeSubGridData)?d.p.serializeSubGridData.call(d,e):e,complete:function(b){"xml"===d.p.subgridtype?k(b.responseXML,c):l(a.jgrid.parse(b.responseText),c),b=null}},a.jgrid.ajaxOptions,d.p.ajaxSubgridOptions||{}))}return!1},n=0;a.each(d.p.colModel,function(){(this.hidden===!0||"rn"===this.name||"cb"===this.name)&&n++});var o=d.rows.length,p=1;for(void 0!==c&&c>0&&(p=c,o=c+1);o>p;)a(d.rows[p]).hasClass("jqgrow")&&(d.p.scroll&&a(d.rows[p].cells[b]).unbind("click"),a(d.rows[p].cells[b]).bind("click",function(){var c=a(this).parent("tr")[0];if(f=d.p.id,e=c.id,i=a("#"+f+"_"+e+"_expandedContent"),a(this).hasClass("sgcollapsed")){if(h=a(d).triggerHandler("jqGridSubGridBeforeExpand",[f+"_"+e,e]),h=h===!1||"stop"===h?!1:!0,h&&a.isFunction(d.p.subGridBeforeExpand)&&(h=d.p.subGridBeforeExpand.call(d,f+"_"+e,e)),h===!1)return!1;d.p.subGridOptions.reloadOnExpand===!0||d.p.subGridOptions.reloadOnExpand===!1&&!i.hasClass("ui-subgrid")?(g=b>=1?"<td colspan='"+b+"'>&#160;</td>":"",a(c).after("<tr role='row' id='"+f+"_"+e+"_expandedContent' class='ui-subgrid'>"+g+"<td class='ui-widget-content subgrid-cell'><span class='ui-icon "+d.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(d.p.colNames.length-1-n,10)+"' class='ui-widget-content subgrid-data'><div id="+f+"_"+e+" class='tablediv'></div></td></tr>"),a(d).triggerHandler("jqGridSubGridRowExpanded",[f+"_"+e,e]),a.isFunction(d.p.subGridRowExpanded)?d.p.subGridRowExpanded.call(d,f+"_"+e,e):m(c)):i.show(),a(this).html("<a style='cursor:pointer;'><span class='ui-icon "+d.p.subGridOptions.minusicon+"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded"),d.p.subGridOptions.selectOnExpand&&a(d).jqGrid("setSelection",e)}else if(a(this).hasClass("sgexpanded")){if(h=a(d).triggerHandler("jqGridSubGridRowColapsed",[f+"_"+e,e]),h=h===!1||"stop"===h?!1:!0,h&&a.isFunction(d.p.subGridRowColapsed)&&(h=d.p.subGridRowColapsed.call(d,f+"_"+e,e)),h===!1)return!1;d.p.subGridOptions.reloadOnExpand===!0?i.remove(".ui-subgrid"):i.hasClass("ui-subgrid")&&i.hide(),a(this).html("<a style='cursor:pointer;'><span class='ui-icon "+d.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed"),d.p.subGridOptions.selectOnCollapse&&a(d).jqGrid("setSelection",e)}return!1})),p++;d.p.subGridOptions.expandOnLoad===!0&&a(d.rows).filter(".jqgrow").each(function(b,c){a(c.cells[0]).click()}),d.subGridXml=function(a,b){k(a,b)},d.subGridJson=function(a,b){l(a,b)}}})},expandSubGridRow:function(b){return this.each(function(){var c=this;if((c.grid||b)&&c.p.subGrid===!0){var d=a(this).jqGrid("getInd",b,!0);if(d){var e=a("td.sgcollapsed",d)[0];e&&a(e).trigger("click")}}})},collapseSubGridRow:function(b){return this.each(function(){var c=this;if((c.grid||b)&&c.p.subGrid===!0){var d=a(this).jqGrid("getInd",b,!0);if(d){var e=a("td.sgexpanded",d)[0];e&&a(e).trigger("click")}}})},toggleSubGridRow:function(b){return this.each(function(){var c=this;if((c.grid||b)&&c.p.subGrid===!0){var d=a(this).jqGrid("getInd",b,!0);if(d){var e=a("td.sgcollapsed",d)[0];e?a(e).trigger("click"):(e=a("td.sgexpanded",d)[0],e&&a(e).trigger("click"))}}})}})});