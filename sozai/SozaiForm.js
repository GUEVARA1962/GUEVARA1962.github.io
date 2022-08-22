/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
(function (document){
//�Œ�
var item_id = location.search.substring(1,5).toUpperCase(),
	MST_Item = setItem(),
	MST_Quest = setQuest(),
	MST_Saisyu = setSaisyu(),
	MST_Mos = setMonster(),
	MST_Other = setOther(),
	Quest_Season = ["","�F���g��","�F�ɐB��","�F�����"],
	Quest_Time = ["","/��","/��"],
	Saisyu_Name = ["�ėp","����","����","���n","��R","�ΎR","�X�u","��", "���C","�}�����_","��","��","�����","���Z���K","���J","�Ⓡ","���n","����","�ɊC","�Ԕ�","����","�ʂ̑�"],
	Saisyu_Id	= ["",	"mitu","saba","numa","yuki","kaza","mori","tou","zyu", "def",		"toride","siro","kessen","tougi",	"kyou","sima","kou", "shio","kyoku","hana","bya","sai"];
setItem = setQuest = setSaisyu = setMonster = setOther = null;
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
//------------------------------------����----------
var item = MST_Item[item_id];
if (typeof item === 'undefined') {
	document.getElementById("loading").style.display="none";
	//�{�^��
	if (location.search.charAt(5) === "W") {
		document.getElementById("b_back").value = "����";
		addEvent(document.getElementById("b_back"),"click",function () {window.close();});
	} else {
		addEvent(document.getElementById("b_back"),"click",function () {history.back();});
	}
	return;
}
document.getElementById("d_mei").firstChild.nodeValue = item[0];
document.getElementById("d_rea").firstChild.nodeValue = isNaN(item[1]) ? item[1].replace("X","[��zX]") : item[1];
document.getElementById("d_buy").firstChild.nodeValue = item[2] + "z";
document.getElementById("d_stock").firstChild.nodeValue = item[3];
if (+item[4] >= 5000) {
	document.getElementById("d_hrmei").firstChild.nodeValue = "-";
	document.getElementById("d_hr").firstChild.nodeValue = "-";
} else if (+item[4] >= 3000) {
	document.getElementById("d_hrmei").firstChild.nodeValue = "GSR";
	document.getElementById("d_hr").firstChild.nodeValue = item[4] - 3000;
} else if (+item[4] >= 2000) {
	document.getElementById("d_hrmei").firstChild.nodeValue = "GR";
	document.getElementById("d_hr").firstChild.nodeValue = item[4] - 2000;
} else if (+item[4] >= 1000) {
	document.getElementById("d_hrmei").firstChild.nodeValue = "SR";
	document.getElementById("d_hr").firstChild.nodeValue = item[4] - 1000;
} else {
	document.getElementById("d_hr").firstChild.nodeValue = item[4];
}
document.getElementById("d_setu").firstChild.nodeValue = item[6];

//------------------------------------�̎�----------
var creSaiLink = function (data,obj,rank,season) {
	if (!data) return;
	for (var i = 0,list = data.split(","),m = list.length,txt = ""; i < m; i++) {
		var w = list[i].split("|"),
			map_id = Saisyu_Id[w[0]] + "-";
		txt += Saisyu_Name[w[0]] + " �G���A�F" +
				(w[3].indexOf("h") !== -1	? w[3].replace("h"," <span id=\"" + map_id + w[1] + "." + map_id + rank + "." + w[2] + "." + season + i + "\"><span class=h>��</span> ")
											: w[3].replace("y"," <span id=\"" + map_id + w[1] + "." + map_id + rank + "." + w[2] + "." + season + i + "\"><span class=y>��</span> ")
				) + "%</span>" +
				(w.length > 4	? " <span id=\"" + map_id + w[4] + "." + map_id + rank + "." + w[5] + "." + season + i + "\"><span class=y>��</span> " + w[6] + "%</span><br>"
								: "<br>");
	}
	obj.innerHTML = txt.replace(/s /g,"�̌@ ").replace(/m /g,"���� ").replace(/t /g,"�ނ� ");
	if (m > 4) {
		obj.style.height = "5em";
		obj.style.overflow = "auto";
	}
}
//����
if (MST_Saisyu.Kai[item_id]) {
	var sai = MST_Saisyu.Kai[item_id].split("^");
	creSaiLink(sai[0],document.getElementById("sai_kaion"),"kai","on");
	creSaiLink(sai[1],document.getElementById("sai_kaikan"),"kai","kan");
	creSaiLink(sai[2],document.getElementById("sai_kaihan"),"kai","han");
}
//���
if (MST_Saisyu.Zyoui[item_id]) {
	var sai = MST_Saisyu.Zyoui[item_id].split("^");
	creSaiLink(sai[0],document.getElementById("sai_zyouion"),"zyoui","on");
	creSaiLink(sai[1],document.getElementById("sai_zyouikan"),"zyoui","kan");
	creSaiLink(sai[2],document.getElementById("sai_zyouihan"),"zyoui","han");
}
//���r
if (MST_Saisyu.Sugo[item_id]) {
	var sai = MST_Saisyu.Sugo[item_id].split("^");
	creSaiLink(sai[0],document.getElementById("sai_sugoon"),"sugo","on");
	creSaiLink(sai[1],document.getElementById("sai_sugokan"),"sugo","kan");
	creSaiLink(sai[2],document.getElementById("sai_sugohan"),"sugo","han");
}
//G��
if (MST_Saisyu.G[item_id]) {
	var sai = MST_Saisyu.G[item_id].split("^");
	creSaiLink(sai[0],document.getElementById("sai_gon"),"g","on");
	creSaiLink(sai[1],document.getElementById("sai_gkan"),"g","kan");
	creSaiLink(sai[2],document.getElementById("sai_ghan"),"g","han");
}
//------------------------------------�����X�^�[----------
var creMosLink = function (data,obj) {
	if (!data) return;
	for (var i = 0,list = data.split(","),m = list.length,txt = ""; i < m; i++) {
		var w = list[i].split("|");
		txt += "<a href=\"../mons/" + w[0] + "_h.html\">" + MST_Mos.Name[w[0]] + "</a> " + w[1] + "<br>";
	}
	obj.innerHTML = txt;
}
creMosLink(MST_Mos.Kai[item_id],document.getElementById("mos_kai"));
creMosLink(MST_Mos.Zyoui[item_id],document.getElementById("mos_zyoui"));
creMosLink(MST_Mos.Sugo[item_id],document.getElementById("mos_sugo"));
creMosLink(MST_Mos.G[item_id],document.getElementById("mos_g"));
//------------------------------------�N�G�X�g----------
var creQueLink = function (data,obj) {
	if (!data) return;
	for (var i = 0,list = data.split(","),m = list.length,txt = ""; i < m; i++) {
		var w = MST_Quest.Name[list[i].substring(0,4)].split(","),hosyu = list[i].substring(6).split("%");
		txt += "<a href=\"../quest/" + w[0] + ".htm#l" + list[i].substring(0,4) + "\"" + (w[1].charAt(4) ? " class="+w[1].charAt(4) : "") + ">" + MST_Quest.Btype[parseInt(w[1].substring(0,2),16)] + Quest_Season[w[1].charAt(2)] + Quest_Time[w[1].charAt(3)] + "�F" + w[3] + MST_Quest.Qtype[parseInt(w[2],16)] + w[4] + "</a> " + MST_Quest.Htype[parseInt(list[i].substring(4,6),16)] + " �� " + (hosyu.length === 1 ? hosyu[0] + "��" : hosyu[0] + "�� (" + hosyu[1] + "%)") + "<br>";
	}
	obj.innerHTML = txt;
}
creQueLink(MST_Quest.Kai[item_id],document.getElementById("que_kai"));
creQueLink(MST_Quest.Zyoui[item_id],document.getElementById("que_zyoui"));
creQueLink(MST_Quest.Sugo[item_id],document.getElementById("que_sugo"));
creQueLink(MST_Quest.G[item_id],document.getElementById("que_g"));
//------------------------------------�X����----------
if (MST_Other.Shop[item_id]) {
	var ShopName = ["�����i��{�j","�����i���Ёj","�����i�e�r���j","�����i����j","�����i�哬�Z��j","�����i�G�݁j","�����i�M���h�v��P�����j","�H�މ�","������","�˓I","�c�V���b�v","�}�C�g���G�݉�","�l�b�g�J�t�F�V���b�v","��l��","�C����","����A�C�e����","�c��t","�哢���C����","�V�L��","�̕P(�����j","�̕P(��������j","����(����҂�)","�������","�����(����)","�n���Z���l�R","�c�}����","���[�t�F�X"];
	for (var i = 0,list = MST_Other.Shop[item_id].split(","),m = list.length,txt = ""; i < m; txt += ShopName[+list[i].substring(0,2)] + list[i++].substring(2) + "�Ŕ̔�<br>");
	document.getElementById("shop").innerHTML = txt;
}
//------------------------------------����----------
var CyougoType = ["","","�}�J�Ђ��̒فE","�j���J�Ђ��̒فF","�}�C�K�[�f���F","","�}�C�g���`�����F",""],
	CyougoName = ["�����F","�}�C�g�������FLV","CP�����F","�v��P�����F","���ʒ����F","��`������F","�����M�����F","��`�J�t�f�ތ����F"],
	JijiMei = ["����/���C��F","�X�u��F","���n��F","������F","��R��F","���J��F","���n��F","������F","�ɊC��F","�|�щ�����F","��F"];
if (MST_Other.Cyougo[item_id]) {
	var JijiMeiKoukan = [" �ƌ����u�g�b�e�I�L�v�ō��m��"," �ƌ����u�I�^�J���v�ō��m��"," �ƌ��� �ǂ���ł����m��"," �ƌ��� �ǂ���ł���m��"," �ƌ���"],
		GalleryName = ["�M�������[���F","�M�������[���f�F"],
		GalleryPont =["1999�|�C���g�ȉ��̏ܕi ","2000�|�C���g�ȏ�̏ܕi ","10000�|�C���g�ȏ�̏ܕi ","20000�|�C���g�ȏ�̏ܕi ","40000�|�C���g�ȏ�̏ܕi ","60000�|�C���g�ȏ�̏ܕi ","60000�|�C���g�ȏ�̏ܕi ","80000�|�C���g�ȏ�̏ܕi ","90000�|�C���g�ȏ�̏ܕi ","100000�|�C���g�ȏ�̏ܕi "],
		GardenName = ["���T��","�|��","���Ă�","�̌@","���̐��b","�@��o����","�������l�R"],
		BoukenName = ["Lv1 �����Δ�","Lv1 ���̗������������̕��n","Lv1 ���̊|���������n","Lv1 �΂������΂������n","Lv2 ���ꂢ�ȌΊ�","Lv2 ��Ղ�������ꏊ","Lv2 �댯�ȓł̏��n","Lv2 ���؂̂���[�΂̕��n","Lv2 �n�◬��铴�A","Lv3 ��ՂƂȂ����ꏊ","Lv3 �P������₷���ꏊ","Lv3 ���Ⴂ���R��","Lv3 �`�������܂ꂻ���ȏꏊ","Lv3 �M������Ό��t��","(�H)�W�����Ƃ��Đ��L���ꏊ","(�H)�����S�X�^�̑�","(�H)�����̑�","(�H)�哬�Z��t��","(�H)�閧�̔�����","LV3 �����A���Β��ӂ̕��n","Lv3 ���������ԓy�̒J","Lv3 ���̍��肪���鐅��","(SR�H) ������������","GR �g���ł����ܒn","GR �ΖL���Ȑ���","GR �P���ǖʂ̓���","GR �n�ʂ�����ꏊ","GR(�H) �Â�����̂��鑐��","GR600 �ԕق������U�镽�n","GR600 酉J�̍~��u","GR600 �X�ᐁ��������","GR600 �����˂��ꏊ","GR600(�H) �댯�A���̓��A","GR600(�H) ���؂̐����Ȃ��r�n"],
		BoukenRank = [" �ōő� ","��1 �ōő� ","��2 �ōő� ","��3(HR31) �ōő� ","HR1�`10 �ōő� ","HR11�`20 �ōő� ","HR21�`30 �ōő� ","HR31�` �ōő� ","HR100�` �ōő� ","HR1�` �� ","HR1�`16 �� ","HR1�`30 �� ","HR1�`99 �� ","HR17�` �� ","HR17�`30 �� ","HR17�`99 �� ","HR31�` �� ","HR31�`99 �� ","HR51�` �� ","HR100�` �� ","GR600�` �� "],
		BoukenDan = ["(��i) ","(���i) "],
		MakaTubo = [" ��5�������Ђ���(���F)"," ��5���ȏ�Ђ���(���F)"," ��10���ȏ�Ђ���(�F)"," ��15���ȏ�Ђ���(�ΐF)"," ��20���ȏ�Ђ���(���F)"," ��30���ȏ�Ђ���(�ԐF)"],
		NyakaTubo = ["������ 0:�� �܂ŒЂ���� ","������ 1�F�� �܂ŒЂ���� ","������ 2�F�� �܂ŒЂ���� ","������ 3�F�� �܂ŒЂ���� ","������ 4�F�� �܂ŒЂ���� ","������ 5�`�F�� �܂ŒЂ���� ","������ 6�`�F�� �܂ŒЂ���� "];
	for (var i = 0,list = MST_Other.Cyougo[item_id].split(","),m = list.length,txt = ""; i < m; i++) {
		txt += CyougoType[list[i].charAt(0)];
		switch (list[i].charAt(0)) {
		case "0": //����
			txt += CyougoName[list[i].charAt(1)] + list[i].substring(2) + "<br>";
			break;
		case "1": //����
			txt += JijiMei[list[i].charAt(1)] + list[i].substring(2,list[i].length-1) + JijiMeiKoukan[list[i].charAt(list[i].length-1)] + "<br>";
			break;
		case "2": //��
			txt += list[i].substring(1,9) + MakaTubo[list[i].charAt(9)] + "<br>";
			break;
		case "3": //�j���J
			txt += list[i].substring(1,6) + NyakaTubo[list[i].charAt(6)] + list[i].substring(7) + "<br>";
			break;
		case "4": //�}�C�K�[�f��
			txt += GardenName[list[i].charAt(1)] + BoukenRank[list[i].substring(2,4)-0] + list[i].substring(4) + "<br>";
			break;
		case "5": //�M�������[
			txt += GalleryName[list[i].charAt(1)] + GalleryPont[list[i].charAt(2)] + list[i].substring(3) + "<br>";
			break;
		case "6": //�`��
			txt += BoukenName[list[i].substring(1,3)-0] + BoukenDan[list[i].charAt(3)] + list[i].substring(4) + "<br>";
			break;
		default:
			txt += list[i].substring(1) + "<br>";
			break;
		}
	}
	document.getElementById("cyougou").innerHTML = txt.replace(/\|[0-9A-F]{4}/g, function(s1){return " <a href=\"../sozai/sozai.htm?" + s1.substring(1) + "\">" + MST_Item[s1.substring(1)][0] + "</a> "}).replace(/K\d+\%/g, function(s1){return "�� (" + s1.substring(1) + ")"}).replace(/K/g,"�� ");
}
if (MST_Quest.Lot[item_id]) { //����
	for (var i = 0,list = MST_Quest.Lot[item_id].split(","),m = list.length,txt = ""; i < m; i++) {
		var w = MST_Quest.Name[list[i].substring(0,4)].split(","),hosyu = list[i].substring(6).split("%");
		txt += "<a href=\"../quest/" + w[0] + ".htm#l" + list[i].substring(0,4) + "\"" + (w[1].charAt(4) ? " class="+w[1].charAt(4) : "") + ">" + MST_Quest.Btype[parseInt(w[1].substring(0,2),16)] + Quest_Season[w[1].charAt(2)] + Quest_Time[w[1].charAt(3)] + "�F" + w[3] + MST_Quest.Qtype[parseInt(w[2],16)] + w[4] + "</a> " + MST_Quest.Htype[parseInt(list[i].substring(4,6),16)] + " �� " + (hosyu.length === 1 ? hosyu[0] + "��" : hosyu[0] + "�� (" + hosyu[1] + "%)") + "<br>";
	}
	document.getElementById("cyougou").innerHTML = (MST_Other.Cyougo[item_id] ? document.getElementById("cyougou").innerHTML : "") + txt.replace(/HR\D/g,"SR");
}
//------------------------------------���̑��̗��p----------
if (MST_Other.Riyou[item_id]) {
	for (var i = 0,list = MST_Other.Riyou[item_id].split(","),m = list.length,txt = ""; i < m; i++) {
		txt += CyougoType[list[i].charAt(0)].replace("�E","�F");
		switch (list[i].charAt(0)) {
		case "0": //����
			txt += CyougoName[list[i].charAt(1)] + list[i].substring(2) + "�쐬<br>";
			break;
		case "1": //����
			txt += JijiMei[list[i].charAt(1)] + list[i].substring(2) + "�ƌ����\<br>";
			break;
		case "7": //��
			txt += list[i].substring(1) + "<br>";
			break;
		default:
			txt += list[i].substring(1) + "������\<br>";
			break;
		}
	}
	document.getElementById("riyou").innerHTML = txt.replace(/\|[0-9A-F]{4}/g, function(s1){return " <a href=\"../sozai/sozai.htm?" + s1.substring(1) + "\">" + MST_Item[s1.substring(1)][0] + "</a> "}).replace(/K\d+\%/g, function(s1){return "�� (" + s1.substring(1) + ")"}).replace(/K/g,"�� ").replace(/M/g,"�������� ");
}
if (MST_Quest.Riyou[item_id]) { //�N�G�X�g
	for (var i = 0,list = MST_Quest.Riyou[item_id].split(","),m = list.length,txt = ""; i < m; i++) {
		var w = MST_Quest.Name[list[i].substring(0,4)].split(",");
		txt += "<a href=\"../quest/" + w[0] + ".htm#l" + list[i].substring(0,4) + "\"" + (w[1].charAt(4) ? " class="+w[1].charAt(4) : "") + ">" + MST_Quest.Btype[parseInt(w[1].substring(0,2),16)] + Quest_Season[w[1].charAt(2)] + Quest_Time[w[1].charAt(3)] + "�F" + w[3] + MST_Quest.Qtype[parseInt(w[2],16)] + w[4] + "</a> ��" + list[i].substring(5) + "�� " +(list[i].charAt(4) === "N" ? "�[�i<br>" : "�󒍂ŏ���<br>");
	}
	document.getElementById("riyou").innerHTML = (MST_Other.Riyou[item_id] ? document.getElementById("riyou").innerHTML : "") + txt.replace(/HR\D/g,"SR");
}

//------------------------------------�̎�MAP�\��----------
var showMap = function (evt){
	/*@if (@_jscript_version < 9)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.tagName === "SPAN") {
		var txt = (t.id || t.parentNode.id).split(".");
		document.getElementById("sai_map").src = "../img/saisyu/" + txt[0] + ".png";
		document.getElementById("sai_link").href = "../saisyu/"+ txt[1]+".htm#l"+ txt[2];
		document.getElementById("sai_link").style.display = "";
	}
}
//�C�x���g�Z�b�g
addEvent(document.getElementById("sai_kaion"),"click",showMap);
addEvent(document.getElementById("sai_kaikan"),"click",showMap);
addEvent(document.getElementById("sai_kaihan"),"click",showMap);
addEvent(document.getElementById("sai_zyouion"),"click",showMap);
addEvent(document.getElementById("sai_zyouikan"),"click",showMap);
addEvent(document.getElementById("sai_zyouihan"),"click",showMap);
addEvent(document.getElementById("sai_sugoon"),"click",showMap);
addEvent(document.getElementById("sai_sugokan"),"click",showMap);
addEvent(document.getElementById("sai_sugohan"),"click",showMap);
addEvent(document.getElementById("sai_gon"),"click",showMap);
addEvent(document.getElementById("sai_gkan"),"click",showMap);
addEvent(document.getElementById("sai_ghan"),"click",showMap);

//�{�^��
if (location.search.charAt(5) === "W") {
	document.getElementById("b_back").value = "����";
	addEvent(document.getElementById("b_back"),"click",function () {window.close();});
} else {
	addEvent(document.getElementById("b_back"),"click",function () {history.back();});
}
MST_Item = MST_Quest = MST_Saisyu = MST_Mos = MST_Other =null;

//����h��
addEvent(document.getElementById("b_yt"),"click",function () {
var BouguName = {"h":"���h��","b":"���h��","a":"�r�h��","w":"���h��","l":"�r�h��","d":"�����i","p":"�����i","c":"�J�t","t":"�V�L��","f":"�V����","k":"�V����","z":"�J�t�y","s":"�V�W��","n":"�l�R","H":"�o��","B":"�o��"},
	BouguId = {"h":"head","b":"body","a":"arm","w":"wst","l":"leg","d":"deco","c":"decocf","p":"decosp","n":"deconk","t":"decotr","f":"decotf","k":"decotk","z":"decocz","s":"sigil","H":"head_pertnya","B":"body_pertnya"},
	BukiName = {0:"�匕",1:"�w�r�B�{�E�K��",2:"�n���}�[",3:"�����X",4:"�Ў茕",5:"���C�g�{�E�K��",6:"�o��",7:"����",8:"��J",9:"�K�������X","A":"�|","B":"������","C":"�ׯ������","D":"ϸ�ȯĽ�߲�","a":"�o�匕","c":"�o�n���}�["},
	BukiId = {0:"taiken",1:"heavy",2:"hammer",3:"lance",4:"katate",5:"right",6:"souken",7:"tachi",8:"horn",9:"gunlance","A":"yumi","B":"tonfa","C":"slaxe","D":"magspike","a":"taiken_partnya","c":"hammer_partnya"},
	Craft = {0:"���Y",1:"����",2:"G���Y",3:"G����",4:"G�m��"},
	MST_Equip = setBuki();
if (MST_Equip.Sozai[item_id]) {
	var txt = "<table><tr><th style=\"width:7em;\">������</th><th style=\"width:10em;\">���햼</th><th style=\"width:2.5em;\">����</th><th style=\"width:2em;\">��</th></tr>";
	for (var i = 0,su_sum = 0,list = MST_Equip.Sozai[item_id].split(","),m = list.length; i < m; i++) {
		var eq_rui = list[i].charAt(0),
			eq_id = list[i].substring(1,5),
			eq_cra = list[i].charAt(5),
			su = list[i].substring(6),
			eq_name = MST_Equip.Name[eq_rui+eq_id],
			sp = "",
			lv = "";
		if (eq_cra === "2" || eq_cra === "3" || eq_cra === "4") { //G����
			sp = "_g";
			if (eq_cra === "4") {
				lv = +list[i].substring(6,8);
				su = list[i].substring(8);
			}
		} else if (MST_Equip.SP.indexOf(eq_rui+eq_id) !== -1) { //SP����
			sp = "_sp";
		} else if (MST_Equip.Neko.indexOf(eq_rui+eq_id) !== -1) { //���˂�����
			sp = "_n";
		} else if (MST_Equip.Sinka.indexOf(eq_rui+eq_id) !== -1) { //�i������
			sp = "_s";
		}
		txt += "<tr><td>" + BukiName[eq_rui] + "</td><td><a href='../buki/" + BukiId[eq_rui] + sp + ".htm#l" + eq_id + lv + "'>" + eq_name + "</a></td><td>" + Craft[eq_cra] + lv + "</td><td style=\"text-align:right;\">" + su + "</td></tr>";
		su_sum += +su;
	}
	document.getElementById("tblBuki").innerHTML = txt + "<tr><td colspan=4 style=\"text-align:right;\">" + su_sum + "</td></tr></table>";
}
MST_Equip = setBougu();
if (MST_Equip.Sozai[item_id]) {
	var txt = "<table><tr><th style=\"width:4em;\">����</th><th style=\"width:10em;\">�h�</th><th style=\"width:1.5em;\">LV</th><th style=\"width:2em;\">��</th></tr>";
	var txts = "<table><tr><th style=\"width:4em;\">�����i</th><th style=\"width:10em;\">������</th><th style=\"width:2em;\">��</th></tr>";
	for (var i = 0,su_sum = 0,list = MST_Equip.Sozai[item_id].split(","),m = list.length; i < m; i++) {
		var eq_rui = list[i].charAt(0),
			eq_id = list[i].substring(1,5),
			lv = list[i].charAt(5),
			su = list[i].substring(6),
			eq_name = MST_Equip.Name[eq_rui+eq_id],
			sp = "";
		if (eq_rui === "d" || eq_rui === "n" || eq_rui === "c" || eq_rui === "p" || eq_rui === "s" || eq_rui === "t" || eq_rui === "f" || eq_rui === "k" || eq_rui === "z") {
			//�����i�J�t
			txts += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/" + BouguId[eq_rui] + ".htm#l" + eq_id + "'>" + eq_name + "</a></td><td style=\"text-align:right;\">" + su + "</td></tr>";
		} else {
			//�h��
			if (eq_name.lastIndexOf("SP") !== -1) {
				txt += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/" + BouguId[eq_rui] +  "sp.htm#l" + eq_id + "'>" + eq_name + "</a></td><td style=\"text-align:center;\">" + lv.replace("0","��") + "</td><td style=\"text-align:right;\">" + su + "</td></tr>";
			} else {
				txt += "<tr><td>" + BouguName[eq_rui] + "</td><td><a href='../bougu/_tree.htm#" + BouguId[eq_rui].charAt(0) + eq_id + "'>" + eq_name + "</a></td><td style=\"text-align:center;\">" + lv.replace("0","��") + "</td><td style=\"text-align:right;\">" + su + "</td></tr>";
			}
		su_sum += +su;
		}
	}
	if (su_sum) document.getElementById("tblBougu").innerHTML = txt + "<tr><td colspan=4 style=\"text-align:right;\">" + su_sum + "</td></tr></table>";
	document.getElementById("tblDec").innerHTML = txts + "<tr><td colspan=4 style=\"text-align:right;\"></td></tr></table>";
}
MST_Equip = setBuki = setBougu = null;
document.getElementById("b_yt").disabled = true;
});

document.getElementsByTagName("table")[0].style.width = "auto";
document.getElementById("loading").style.display="none";
document.getElementById("b_yt").disabled = false;

//�A�����[�h�ޔ�
addEvent(window,"unload",function () {
document.cookie = "item=" + [item_id,Number(document.getElementById("b_yt").disabled),document.documentElement.scrollTop].join(":");
});
//�I�����[�h
var w = document.cookie;
if (w.indexOf("item=" + item_id) !== -1) {
	w = w.split("item=")[1].split(":");
	if (w[1] === "1") {
		/*@if (@_jscript_version < 9) 
		document.getElementById("b_yt").fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", false, true);
		document.getElementById("b_yt").dispatchEvent(evt);
		/*@end@*/
	}
	window.scrollTo(0,parseInt(w[2]));
};

})(document);
