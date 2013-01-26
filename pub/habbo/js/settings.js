var FriendManagement=Class.create({initialize:function(f){var a=this;var o={currentCategoryId:0,pageListLimit:30,pageNumber:1,sortColumn:null};a.options=Object.extend(o,f||{});var l=function(A){a.options.currentCategoryId=A};var h=function(A){a.options.pageListLimit=A};var x=function(A){a.options.pageNumber=A
};var q=function(A){a.options.sortColumn=A};var g=function(A){Tips.get(A).hideTip()};var j=function(){new Ajax.Updater("category-options",habboReqPath+"/friendmanagement/ajax/updatecategoryoptions",{method:"get"})};var k=function(){var B=$("friend-list-form").serialize();if(B){var C=$("category-list-select");
var A=C.options[C.selectedIndex].value;if(A!=0){B=B+"&moveCategoryId="+A}if(a.options.currentCategoryId!=0){B=B+"&categoryId="+a.options.currentCategoryId}new Ajax.Updater("friend-list",habboReqPath+"/friendmanagement/ajax/movefriends",{method:"post",parameters:B+"&pageSize="+a.options.pageListLimit})
}};var t=function(){var B="pageNumber="+a.options.pageNumber+"&pageSize="+a.options.pageListLimit;var A=$("friend_query").value;if(A!=""){B=B+"&searchString="+A}if(a.options.currentCategoryId!=0){B=B+"&categoryId="+a.options.currentCategoryId}if(a.options.sortColumn){B=B+"&sortColumn="+a.options.sortColumn
}new Ajax.Updater("friend-list",habboReqPath+"/friendmanagement/ajax/viewcategory",{method:"get",parameters:B,onComplete:function(D,C){$("category-item-"+a.options.currentCategoryId).addClassName("selected-category")}})};var z=function(A){h(A.id.substring(10));t()};var p=function(A){var B=A.id.substring(14);
if(B!=a.options.currentCategoryId){$("friend_query").value="";$("category-item-"+a.options.currentCategoryId).removeClassName("selected-category");l(B);t()}};var n=function(A){x(A.id.substring(5));t()};var v=function(A){var B=A.id.substring(16);Tips.get("category-button-delete-"+B).hideTip();new Ajax.Updater("category-list",habboReqPath+"/friendmanagement/ajax/deletecategory",{method:"post",parameters:"categoryId="+B,onComplete:function(D,C){j();
l(0);x(1);t()}})};var m=function(A){var C=A.id.substring(23);var B=L10N.get("friendmanagement.tooltip.deletecategory").replace(/\%category_id\%/g,C);new Tip("category-button-delete-"+C,B,{className:"bubbletip left",title:" ",hook:{target:"topRight",tip:"bottomRight"},offset:{x:130,y:-3},startEvent:null,endEvent:null});
Tips.get("category-button-delete-"+C).showTip();Event.observe("delete-category-"+C,"click",function(D){Event.stop(D);v(Event.element(D))});Event.observe("cancel-cat-delete-"+C,"click",function(D){Event.stop(D);g("category-button-delete-"+C)})};var u=function(){var A=$("friend_query").value;A=A.strip();
if(A){q(null);new Ajax.Updater("friend-list",habboReqPath+"/friendmanagement/ajax/viewcategory",{method:"post",parameters:"searchString="+encodeURIComponent(A)+"&pageSize="+a.options.pageListLimit})}};var y=function(B){var A="friendId="+B+"&pageSize="+a.options.pageListLimit;Tips.get("remove-friend-button-"+B).hideTip();
if(a.options.currentCategoryId!=0){A=A+"&categoryId="+a.options.currentCategoryId}new Ajax.Updater("friend-list",habboReqPath+"/friendmanagement/ajax/deletefriends",{method:"post",parameters:A})};var w=function(A){var C=A.id.substring(21);var B=L10N.get("friendmanagement.tooltip.deletefriend").replace(/\%friend_id\%/g,C);
new Tip("remove-friend-button-"+C,B,{className:"bubbletip left",title:" ",hook:{target:"topRight",tip:"bottomRight"},offset:{x:60,y:-3},startEvent:null,endEvent:null});Tips.get("remove-friend-button-"+C).showTip();Event.observe($("delete-friend-"+C),"click",function(D){y(C)});Event.observe($("remove-friend-can-"+C),"click",function(D){g("remove-friend-button-"+C)
})};var e=function(){Tips.remove($("delete-friends"));var A=$("friend-list-form").serialize();if(A){if(a.options.currentCategoryId!=0){A=A+"&categoryId="+a.options.currentCategoryId}new Ajax.Updater("friend-list",habboReqPath+"/friendmanagement/ajax/deletefriends",{method:"post",parameters:A+"&pageSize="+a.options.pageListLimit})
}Event.observe($("delete-friends"),"click",function(B){Event.stop(B);s()})};var s=function(){new Tip("delete-friends",L10N.get("friendmanagement.tooltip.deletefriends"),{className:"bubbletip left",title:" ",hook:{target:"topRight",tip:"bottomRight"},offset:{x:60,y:-3},startEvent:null,endEvent:null});
Tips.get("delete-friends").showTip();Event.observe($("delete-friends-button"),"click",function(A){e()});Event.observe($("cancel-delete-friends"),"click",function(A){g("delete-friends")})};var i=function(){var A=$F("category-name");new Ajax.Updater("category-list",habboReqPath+"/friendmanagement/ajax/createcategory",{method:"post",parameters:"name="+encodeURIComponent(A),onComplete:function(C,B){j()
}})};var c=function(B){var C=B.id.substring(21);$("category-name-"+C).hide();$("category-field-"+C).show();var A=$("category-input-"+C);A.focus();A.select();$("category-button-delete-"+C).hide();$("category-button-edit-"+C).hide();$("category-button-cancel-"+C).show();$("category-button-save-"+C).show()
};var r=function(A){var B=A.id.substring(23);$("category-name-"+B).show();$("category-field-"+B).hide();$("category-button-delete-"+B).show();$("category-button-edit-"+B).show();$("category-button-cancel-"+B).hide();$("category-button-save-"+B).hide()};var b=function(A){var B=/^category[^\d]*([\d]+)$/.exec(A.id)[1];
var C=$("category-input-"+B).value;new Ajax.Updater("category-list",habboReqPath+"/friendmanagement/ajax/editCategory",{method:"post",parameters:"name="+encodeURIComponent(C)+"&categoryId="+B,onComplete:function(E,D){j()}})};var d=function(A){var C=Element.up(A,"th");var D=$w(C.className).grep(/^friend\-/);
if(D.length>0){var B=D[0].substr(D[0].indexOf("-")+1);q(B);t()}};Event.observe($("friend-management-container"),"click",Event.delegate({".category-default":function(A){Event.stop(A);x(1);p(Event.element(A))},".open-category":function(A){Event.stop(A);x(1);p(Event.element(A))},".delete-category-tip":function(A){Event.stop(A);
m(Event.element(A))},".edit-category":function(A){Event.stop(A);c(Event.element(A))},".cancel-edit-category":function(A){Event.stop(A);r(Event.element(A))},".save-category":function(A){Event.stop(A);b(Event.element(A))},".add-category":function(A){Event.stop(A);i()},".friend-list-page":function(A){Event.stop(A);
n(Event.element(A))},".remove-friend":function(A){Event.stop(A);w(Event.element(A))},".category-limit":function(A){Event.stop(A);z(Event.element(A))},".select-all":function(A){Event.stop(A);$$("#friend-list-table input[type=checkbox]").each(function(B){B.checked=true})},".deselect-all":function(A){Event.stop(A);
$$("#friend-list-table input[type=checkbox]").each(function(B){B.checked=false})},".friend-move a *":function(A){Event.stop(A);k()},".friend-del a *":function(A){Event.stop(A);s()},".friendlist-search a *":function(A){Event.stop(A);u()},"a.sort":function(A){Event.stop(A);d(Event.element(A))}}));Event.observe($("friend-management-container"),"keypress",Event.delegate({"#friend_query":function(A){if(A.keyCode==Event.KEY_RETURN){Event.stop(A);
u()}},"#category-name":function(A){if(A.keyCode==Event.KEY_RETURN){Event.stop(A);i()}},".edit-category-name":function(A){if(A.keyCode==Event.KEY_RETURN){Event.stop(A);b(Event.element(A))}}}))}});