/**
*
* @license Guriddo jqGrid JS - v4.7.1 - 2015-02-05
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./JsonXml","./grid.base"],a):a(jQuery)}(function(a){"use strict";a.jgrid=a.jgrid||{},a.extend(a.jgrid,{saveState:function(b,c){if(c=a.extend({useStorage:!0,storageType:"localStorage",beforeSetItem:null,compression:!1,compressionModule:"LZString",compressionMethod:"compressToUTF16"},c||{}),b){var d,e,f="",g="",h=a("#"+b)[0];if(h.grid){if(e=a(h).data("inlineNav"),e&&h.p.inlineNav&&a(h).jqGrid("setGridParam",{_iN:e}),e=a(h).data("filterToolbar"),e&&h.p.filterToolbar&&a(h).jqGrid("setGridParam",{_fT:e}),f=a(h).jqGrid("jqGridExport",{exptype:"jsonstring",ident:"",root:""}),a(h.grid.bDiv).find(".ui-jqgrid-btable tr:gt(0)").each(function(a,b){g+=b.outerHTML}),a.isFunction(c.beforeSetItem)&&(d=c.beforeSetItem.call(h,f),null!=d&&(f=d)),c.compression&&c.compressionModule)try{d=window[c.compressionModule][c.compressionMethod](f),null!=d&&(f=d,g=window[c.compressionModule][c.compressionMethod](g))}catch(i){}if(c.useStorage&&a.jgrid.isLocalStorage())try{window[c.storageType].setItem("jqGrid"+h.p.id,f),window[c.storageType].setItem("jqGrid"+h.p.id+"_data",g)}catch(i){22===i.code&&alert("Local storage limit is over!")}return f}}},loadState:function(b,c,d){if(d=a.extend({useStorage:!0,storageType:"localStorage",clearAfterLoad:!1,beforeSetGrid:null,decompression:!1,decompressionModule:"LZString",decompressionMethod:"decompressFromUTF16"},d||{}),b){var e,f,g,h,i,j=a("#"+b)[0];if(j.grid&&a.jgrid.gridUnload(b),d.useStorage)try{c=window[d.storageType].getItem("jqGrid"+j.id),g=window[d.storageType].getItem("jqGrid"+j.id+"_data")}catch(k){}if(c){if(d.decompression&&d.decompressionModule)try{e=window[d.decompressionModule][d.decompressionMethod](c),null!=e&&(c=e,g=window[d.decompressionModule][d.decompressionMethod](g))}catch(k){}if(e=a.jgrid.parse(c),e&&"object"===a.type(e)){a.isFunction(d.beforeSetGrid)&&(f=d.beforeSetGrid(e),f&&"object"===a.type(f)&&(e=f));var l=function(a){var b;return b=a},m={reccount:e.reccount,records:e.records,lastpage:e.lastpage,shrinkToFit:l(e.shrinkToFit),data:l(e.data),datatype:l(e.datatype),grouping:l(e.grouping)};e.shrinkToFit=!1,e.data=[],e.datatype="local",e.grouping=!1,e.navGrid=!1,e.inlineNav&&(h=l(e._iN),e._iN=null,delete e._iN),e.filterToolbar&&(i=l(e._fT),e._fT=null,delete e._fT);var n=a("#"+b).jqGrid(e);n.append(g),n.jqGrid("setGridParam",m),e.storeNavOptions&&n.jqGrid("navGrid",e.pager,e.navOptions,e.editOptions,e.addOptions,e.delOptions,e.searchOptions,e.viewOptions),e.inlineNav&&h&&(n.jqGrid("setGridParam",{inlineNav:!1}),n.jqGrid("inlineNav",e.pager,h)),e.filterToolbar&&i&&(n.jqGrid("setGridParam",{filterToolbar:!1}),n.jqGrid("filterToolbar",i)),n[0].updatepager(!0,!0),d.clearAfterLoad&&(window[d.storageType].removeItem("jqGrid"+j.id),window[d.storageType].removeItem("jqGrid"+j.id+"_data"))}else alert("can not convert to object")}}},setRegional:function(b,c){a.jgrid.saveState(b,{storageType:"sessionStorage"}),a.jgrid.loadState(b,null,{storageType:"sessionStorage",beforeSetGrid:function(a){return a.regional=c.regional,a.force_regional=!0,a}});var d=a("#"+b)[0],e=a(d).jqGrid("getGridParam","colModel"),f=-1,g=a.jgrid.getRegional(d,"nav");a.each(e,function(a){return this.formatter&&"actions"===this.formatter?(f=a,!1):void 0}),-1!==f&&g&&a("#"+b+" tbody tr").each(function(){var b=this.cells[f];a(b).find(".ui-inline-edit").attr("title",g.edittitle),a(b).find(".ui-inline-del").attr("title",g.deltitle),a(b).find(".ui-inline-save").attr("title",g.savetitle),a(b).find(".ui-inline-cancel").attr("title",g.canceltitle)})}}),a.jgrid.extend({jqGridImport:function(b){return b=a.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"roots>grid",data:"roots>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},b||{}),this.each(function(){var c=this,d=function(b,d){var e,f,g,h=a(d.xmlGrid.config,b)[0],i=a(d.xmlGrid.data,b)[0];if(xmlJsonClass.xml2json&&a.jgrid.parse){e=xmlJsonClass.xml2json(h," "),e=a.jgrid.parse(e);for(g in e)e.hasOwnProperty(g)&&(f=e[g]);if(i){var j=e.grid.datatype;e.grid.datatype="xmlstring",e.grid.datastr=b,a(c).jqGrid(f).jqGrid("setGridParam",{datatype:j})}else a(c).jqGrid(f);e=null,f=null}else alert("xml2json or parse are not present")},e=function(b,d){if(b&&"string"==typeof b){var e=!1;a.jgrid.useJSON&&(a.jgrid.useJSON=!1,e=!0);var f=a.jgrid.parse(b);e&&(a.jgrid.useJSON=!0);var g=f[d.jsonGrid.config],h=f[d.jsonGrid.data];if(h){var i=g.datatype;g.datatype="jsonstring",g.datastr=h,a(c).jqGrid(g).jqGrid("setGridParam",{datatype:i})}else a(c).jqGrid(g)}};switch(b.imptype){case"xml":a.ajax(a.extend({url:b.impurl,type:b.mtype,data:b.impData,dataType:"xml",complete:function(e,f){"success"===f&&(d(e.responseXML,b),a(c).triggerHandler("jqGridImportComplete",[e,b]),a.isFunction(b.importComplete)&&b.importComplete(e)),e=null}},b.ajaxOptions));break;case"xmlstring":if(b.impstring&&"string"==typeof b.impstring){var f=a.parseXML(b.impstring);f&&(d(f,b),a(c).triggerHandler("jqGridImportComplete",[f,b]),a.isFunction(b.importComplete)&&b.importComplete(f),b.impstring=null),f=null}break;case"json":a.ajax(a.extend({url:b.impurl,type:b.mtype,data:b.impData,dataType:"json",complete:function(d){try{e(d.responseText,b),a(c).triggerHandler("jqGridImportComplete",[d,b]),a.isFunction(b.importComplete)&&b.importComplete(d)}catch(f){}d=null}},b.ajaxOptions));break;case"jsonstring":b.impstring&&"string"==typeof b.impstring&&(e(b.impstring,b),a(c).triggerHandler("jqGridImportComplete",[b.impstring,b]),a.isFunction(b.importComplete)&&b.importComplete(b.impstring),b.impstring=null)}})},jqGridExport:function(b){b=a.extend({exptype:"xmlstring",root:"grid",ident:"	",addOptions:{}},b||{});var c=null;return this.each(function(){if(this.grid){var d,e=a.extend(!0,{},a(this).jqGrid("getGridParam"),b.addOptions);if(e.rownumbers&&(e.colNames.splice(0,1),e.colModel.splice(0,1)),e.multiselect&&(e.colNames.splice(0,1),e.colModel.splice(0,1)),e.subGrid&&(e.colNames.splice(0,1),e.colModel.splice(0,1)),e.knv=null,e.treeGrid)for(d in e.treeReader)e.treeReader.hasOwnProperty(d)&&(e.colNames.splice(e.colNames.length-1),e.colModel.splice(e.colModel.length-1));switch(b.exptype){case"xmlstring":c="<"+b.root+">"+xmlJsonClass.json2xml(e,b.ident)+"</"+b.root+">";break;case"jsonstring":c=xmlJsonClass.toJson(e,b.root,b.ident,!1),b.root&&(c="{"+c+"}")}}}),c},excelExport:function(b){return b=a.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",exportOptions:{}},b||{}),this.each(function(){if(this.grid){var c;if("remote"===b.exptype){var d=a.extend({},this.p.postData);d[b.oper]=b.tag;var e=jQuery.param(d);c=-1!==b.url.indexOf("?")?b.url+"&"+e:b.url+"?"+e,window.location=c}}})}})});