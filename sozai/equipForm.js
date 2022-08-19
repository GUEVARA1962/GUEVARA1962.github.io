(function (document){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//�C�x���g�Z�b�g
var addEvent = function (elm, type, func) {
	//�ǉ�
	elm./*@if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//�A�����[�h�ō폜
	window./*@if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@if (@_jscript_version < 9) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//����h��
addEvent(document.getElementById("b_search"),"click",function () {
var searchMei = document.getElementById("equip").value;
if (!searchMei) return;

var BouguName = {"h":"���h��","b":"���h��","a":"�r�h��","w":"���h��","l":"�r�h��","d":"�����i","p":"�����i","t":"�V�L��","f":"�V����","c":"�J�t","s":"�V�W��","n":"�l�R","H":"�o��","B":"�o��"},
	BouguId = {"h":"head","b":"body","a":"arm","w":"wst","l":"leg","d":"deco","c":"decocf","p":"decosp","n":"deconk","t":"decot","f":"decof","s":"sigil","H":"head_pertnya","B":"body_pertnya"},
	BukiName = {0:"�匕",1:"�w�r�B�{�E�K��",2:"�n���}�[",3:"�����X",4:"�Ў茕",5:"���C�g�{�E�K��",6:"�o��",7:"����",8:"��J",9:"�K�������X","A":"�|","B":"������","C":"�X���b�V���A�b�N�X","D":"�}�O�l�b�g�X�p�C�N","a":"�o�匕","b":"�o�n���}�["},
	BukiId = {0:"taiken",1:"heavy",2:"hammer",3:"lance",4:"katate",5:"right",6:"souken",7:"tachi",8:"horn",9:"gunlance","A":"yumi","B":"tonfa","C":"slaxe","D":"magspike","a":"taiken_partnya","c":"hammer_partnya"},
	MST_Equip = setBuki();

var txt = "<table><tr><th style=\"width:7em;\">������</th><th style=\"width:10em;\">���햼</th></tr>";
for (var i in MST_Equip.Name) {
	if (MST_Equip.Name[i].indexOf(searchMei) !== -1) {
		var eq_rui = i.charAt(0),
			eq_id = i.substring(1,5),
			eq_name = MST_Equip.Name[i],
			sp = "";
		if (MST_Equip.G.indexOf(eq_rui+eq_id) !== -1) { //G����
			sp = "_g";
		} else if (MST_Equip.SP.indexOf(eq_rui+eq_id) !== -1) { //SP����
			sp = "_sp";
		} else if (MST_Equip.Neko.indexOf(eq_rui+eq_id) !== -1) { //���˂�����
			sp = "_n";
		} else if (MST_Equip.Sinka.indexOf(eq_rui+eq_id) !== -1) { //�i������
			sp = "_s";
		}
		txt += "<tr><td>" + BukiName[eq_rui] + "</td><td><a href='../buki/" + BukiId[eq_rui] + sp + ".htm#l" + eq_id + "'>" + eq_name + "</a></tr>";
	}
}
document.getElementById("tblBuki").innerHTML = txt + "<table>";

MST_Equip = setBougu();
var txt = "<table><tr><th style=\"width:4em;\">����</th><th style=\"width:10em;\">�h�</th></tr>";
var txts = "<table><tr><th style=\"width:4em;\">�����i</th><th style=\"width:10em;\">������</th></tr>";
for (var i in MST_Equip.Name) {
	if (MST_Equip.Name[i].indexOf(searchMei) !== -1) {
		var eq_rui = i.charAt(0),
			eq_id = i.substring(1,5),
			eq_name = MST_Equip.Name[i],
			sp = "";
		if (eq_rui === "d" || eq_rui === "n" || eq_rui === "c" || eq_rui === "p" || eq_rui === "s" || eq_rui === "t" || eq_rui === "f") {
			txts += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/" + BouguId[eq_rui] + ".htm#l" + eq_id + "'>" + eq_name + "</a></td></tr>";
		} else {
			//�h��
			if (eq_name.lastIndexOf("SP") !== -1) {
				txt += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/" + BouguId[eq_rui] + "sp.htm#l" + eq_id + "'>" + eq_name + "</a></td></tr>";
			} else {
				txt += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/_tree.htm#" + BouguId[eq_rui].charAt(0) + eq_id + "'>" + eq_name + "</a></td></tr>";
			}
		}
	}
}
document.getElementById("tblBougu").innerHTML = txt + "</table>";
document.getElementById("tblDec").innerHTML = txts + "</table>";
});

document.getElementById("equip").focus();

//�A�����[�h�ޔ�
addEvent(window,"unload",function () {
document.cookie = "equip=" + [escape(document.getElementById("equip").value),document.documentElement.scrollTop].join(":");
});
//�I�����[�h
var w = document.cookie;
if (w.indexOf("equip=") !== -1) {
	w = w.split("equip=")[1].split(":");
	document.getElementById("equip").value = unescape(w[0]);
	/*@if (@_jscript_version < 9) 
	document.getElementById("b_search").fireEvent("onclick");
	@else@*/
	var evt = document.createEvent("MouseEvents");
	evt.initEvent("click", false, true);
	document.getElementById("b_search").dispatchEvent(evt);
	/*@end@*/
	window.scrollTo(0,parseInt(w[1]));
};

})(document);
