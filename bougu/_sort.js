setTimeout(function (){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//�C�x���g�Z�b�g
var addEvent = function (elm, type, func) {
	//�ǉ�
	elm./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//�A�����[�h�ō폜
	window./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@cc_on @if (true) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//���X�g�Z�b�g
var selectSet = function(e,v) {
	var m = v.length;
	/*@if (@_jscript_version < 9)
	e.options.length = m;
	for (var i = 0; i < m; e.options[i].value = e.options[i].text = v[i++]);
	@else@*/
	e.length = 0;
	for (var i = 0,o; i < m; i++){
		o = document.createElement("option");
		o.setAttribute("value", v[i]);
		o.appendChild(document.createTextNode(v[i]));
		e.appendChild(o.cloneNode(true));
	}
	/*@end@*/
};
var selectSetGroup = function(e,v) {
	var m = v.length;
	e.length = 0;
	for (var j = 0,g; j < m; j++){
		g = document.createElement("optgroup");
		g.label = v[j][0];
		var w = v[j][1], n = w.length;
		for (var i = 0,o; i < n ;i++){
			o = document.createElement("option");
			o.setAttribute("value", w[i]);
			o.appendChild(document.createTextNode(w[i]));
			g.appendChild(o.cloneNode(true));
		}
		e.appendChild(g.cloneNode(true));
	}
};

//HTML�Ƀ{�^���ǉ�

//�����ݒ�
var armorCK = location.pathname.indexOf("deco") === -1,
	tH = document.getElementsByTagName("thead")[0].rows[0],
	dt = document.createElement("div"),
	i = document.createElement("input"),
	s = document.createElement("select");
dt.className = "m",i.type = "button";
//���̃\�[�g
i.value = "���O",i.title = "���O���Ƀ\�[�g";
dt.appendChild(i.cloneNode(false));
tH.cells[0].appendChild(dt);
if (armorCK) {
	//�h��\�[�g
	i.value = "�h��",i.title = "�h�䏇�Ƀ\�[�g";
	dt.appendChild(i.cloneNode(false));
	//���A����
	s.title = "���A�ōi����";
	selectSet(s,["ڱ","11","10","9","8","7","6","5","4","3","2","1"]);
	s.selectedIndex = 0;
	dt.appendChild(s.cloneNode(true));
	var ckRare_F = function (e) {
		return e === "ڱ" ? function(){return true} : function (cell) {return +cell.firstChild.nodeValue <= e};
	};
	//�ϐ��\�[�g
	s.style.display = "block",s.title = "�ϐ����Ƀ\�[�g";
	selectSet(s,["��","��","��","��","�X","��"]);
	tH.cells[3].appendChild(s.cloneNode(true));
	//�X������
	s.title = "�X���b�g�ōi����";
	selectSet(s,["��","3","2","1"]);
	tH.cells[5].removeChild(tH.cells[5].childNodes.item(1));
	tH.cells[5].appendChild(s.cloneNode(true));
	var ckSlot_F = function (e) {
		return e === "��" ? function(){return true} : function (cell) {return cell.lastChild.nodeValue.split("/")[1] >= e;};
	};
} else { //�����i
	//G����
	s.title = "GR�ōi����";
	selectSet(s,["GR","GX","GF","G"]);
	s.selectedIndex = 0;
	if (location.pathname.indexOf("deco.htm") === -1) s.style.display = "none";
	dt.appendChild(s.cloneNode(true));
	var ckGr_F = function (e) {
		return e === "GR" ? function(){return true} : 
				e === "GX" ? function (cell) {return cell.firstChild.nodeValue.indexOf("�ˎ�GX") !== -1 || cell.firstChild.nodeValue.indexOf("����GX") !== -1;} :
				e === "GF" ? function (cell) {return cell.firstChild.nodeValue.indexOf("�ˎ�GF") !== -1 || cell.firstChild.nodeValue.indexOf("����GF") !== -1;} :
							function (cell) {return cell.firstChild.nodeValue.indexOf("�ˎ�f") !== -1 || cell.firstChild.nodeValue.indexOf("����f") !== -1;};
	};
	//�f�ލi�肱��
	var dt = document.createElement("div"),
		i = document.createElement("input");
	i.type = "text",i.title = "�f�ނōi����";
	dt.appendChild(i.cloneNode(false));
	i.type = "button",i.value = "�i����",i.title = "�f�ނōi����";
	dt.appendChild(i.cloneNode(false));
	tH.cells[7].appendChild(dt);
	var ckSozai_F = function (e) {
		return e === "" ? function(){return true} : function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf(e) !== -1;}
	};
}
//�X�L������
s.style.display = "block",s.title = "�X�L���ōi����";
if (location.pathname.indexOf("deconk") !== -1) {
	selectSetGroup(s,[
	["�X�L��",["�I��"]],
	["�U���n",["�U��","��S","�x��","�Α�������","����������","����������","�X��������","����������","���p","�S��p","�ђʓ���","���哊��","��ჍU��","�����U��","�ōU��","����U��"]],
	["�h��n",["�h��","���ː_�o","���ˏp"]],
	["�̗́E�X�^�~�i�n",["�̗�"]],
	["��Ԉُ�n",["��","���","����","�C��"]],
	["�ϐ��n",["�S�ϐ�","�Αϐ�","���ϐ�","���ϐ�","�X�ϐ�","���ϐ�"]],
	["�ی�n",["�h��","�ϐk","����","�_��"]],
	["�A�C�e���E�����n",["�S�l�J�p","�񕜓J�p","�d���J�p","�㩏p"]],
	["��V�n",["�^"]],
	["���̑��n",["���A��","�����p","����p","�J�p","�ړ����x"]]
	]);
} else if (location.pathname.indexOf("decotk") !== -1 || location.pathname.indexOf("decotf") !== -1) {
	selectSet(s,["�I��"]);
	s.style.display = "none";
} else {
	selectSetGroup(s,[
	["�X�L��",["�I��"]],
	["�U���n",["����","�U��","��C�T","��M","�B�l","�M�]","�Ɍ�","�I��","����","�ό�","�����̐S��","����U��","����","�Α����U��","�������U��","�������U��","�X�����U��","�������U��","�����U��","���e����","�C�p�t","�ە�","�J�������l","�̏p","�t��","�{","���","�r����","���","�f�H","���ߒZ�k","���߈З�","����J��","�K�オ��","�K����","���e","���C����","�Z��","�Ҍ�","����","�Ґi","����","��_�˔j","���q���v","�s��"]],
	["�h��n",["������","����","�h��","�v��","�K�[�h���\","�����h��","�Ƃ񂸂�"]],
	["�̗́E�X�^�~�i�n",["�̗�","�񕜑��x","��","�z��","�򑐊w","�C�͉�","�͂�ւ�","�X�^�~�i","�H��","�H������V"]],
	["���m�n",["�����t","�a�ꖡ","�I��","����","��","������","�ғŌ�","��჌�","������","�Ή���","������","���_��","�X����","������","�Ў茕�Z","�o���Z","�匕�Z","�����Z","�ȋZ","��J�Z","���Z","�e���Z","�����Z","�������Z","���a�ȋZ","���p","���_"]],
	["�K���i�[�n",["�ˎ�","�ʏ�e����","�ђʒe����","�U�e����","�ʏ�e�ǉ�","�ђʒe�ǉ�","�U�e�ǉ�","�֒e�ǉ�","�g�U�e�ǉ�","�ŕr�ǉ�","��ვr�ǉ�","�����r�ǉ�","����","����","���U��","����","�A��","���U","����","���","�����ˌ�","�e����","�e�ېߖ�p","�_��","��","�d�e�Z","�y�e�Z","�|�Z"]],
	["��Ԉُ�n",["��","���","����","�Ϗ�Ԉُ�","�C��","�E�L","�ϐ�","����","�Ζh��DOWN","�ϐ�","���j�ϐ�","���͑ϐ�","�����ϐ�","�����ϐ�"]],
	["�ϐ��n",["�S�ϐ��t�o","�Αϐ�","���ϐ�","�X�ϐ�","���ϐ�","���ϐ�"]],
	["�ی�n",["�O�E�̌��","���o�ی�","�ϐk","����","���ݖ���","�Ϗ�","�ϊ�","�x��","�n�`","�����","��𐫔\","�������","�󂯐g","�R��","����","��Ζh��"]],
	["�A�C�e���E�����n",["�����t","���ʎ���","�L��","�C�܂���","����","����","��l","���Ă�","�ނ�","����������","�B���p","�����ݒu","�S�r","�i�C�t�g��"]],
	["MAP�T�m�n",["�n�}","�痢��","�C�z","����"]],
	["�̎�^���n",["�^��","�������W","�̎�","�������","����S"]],
	["��V�n",["�^�C","�����X�^�[","����"]],
	["���̑��n",["�u���[�_�[","�J","�Ђ�߂�","�ߊl���","�~��","�������","�ړ����x","��","�x��","����","�㏞","���m����","����","���[�p","�X�E�n��"]]
	]);
}
tH.cells[4].appendChild(s.cloneNode(true));
tH.cells[4].appendChild(s.cloneNode(true));
var ckSkill_F = function (e) {
	return e === "�I��" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf(">"+e+"<") !== -1;};
	};
//�H�ِ���
if (armorCK || location.pathname.indexOf("decocz") !== -1) {
	s = document.createElement("select");
	s.title = "�H�قōi����";
	selectSet(s,["�H��","�X�L���g�g��","�M�]����","�I������","��������","�Z������","�X�E�n������","��������","��������","�ϐk����","�ϓŋ���","�ϖ�჋���","�ϐ�������","�z������","��������","�x������","�e�ېߖ�p����","�K�[�h���\����","�K��������","�ە�����","���ˋ���","�I������","���C��������","��������","������","��������","�Ґi����"]);
	tH.cells[4].appendChild(s.cloneNode(true));
	var ckTeni_F = function (e) {
		return e === "�H��" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf("�u"+e) !== -1;};
		};
}
tH=dt=i=s=null;

//�t�B���^�[
if (armorCK) {
	//�h��
	var filter = function () {
		var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
			tr = document.getElementsByTagName("tbody")[0].rows, 
			N = tr.length,
			ckRare = ckRare_F(s[0].value),
			ckSkill1 = ckSkill_F(s[2].value),
			ckSkill2 = ckSkill_F(s[3].value),
			ckTeni = ckTeni_F(s[4].value),
			ckSlot = ckSlot_F(s[5].value);
		for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckRare(cel[2]) && ckSkill1(cel[4]) && ckSkill2(cel[4]) && ckTeni(cel[4]) && ckSlot(cel[5]) ? "" : "none";
		}
	var taisort = function () {
		var s1 = document.getElementsByTagName("thead")[0].getElementsByTagName("select")[1].selectedIndex;
		if (!s1) return false;
		s1--
		
		var marker = document.createElement("tbody"),
			tB = document.getElementsByTagName("tbody")[0],
			tr = tB.rows,
			N = tr.length,
			x = [];
		for (var i = 0; i  <N; i++) {
			x[i] = tr[i].style.display ? [0] : [+tr[i].cells[3].childNodes[s1*2].nodeValue.substring(2)];
			x[i].row = tr[i];
		}
		x.sort(function(a, b){return b - a});
		for (var i = 0; i < N; marker.appendChild(x[i++].row));
		tB.parentNode.replaceChild( marker,tB );
		}
} else if (location.pathname.indexOf("decocz") !== -1) {
	//�����i
	var filter = function () {
		var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
			i = document.getElementsByTagName("thead")[0].getElementsByTagName("input"),
			tr = document.getElementsByTagName("tbody")[0].rows,
			N = tr.length;
			ckGr = ckGr_F(s[0].value),
			ckSkill1 = ckSkill_F(s[1].value),
			ckSkill2 = ckSkill_F(s[2].value),
			ckTeni = ckTeni_F(s[3].value),
			ckSozai = ckSozai_F(i[1].value);
		for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckGr(cel[0]) && ckSkill1(cel[4]) && ckSkill2(cel[4]) && ckTeni(cel[4]) && ckSozai(cel[7]) ? "" : "none";
		}
} else {
	//�����i
	var filter = function () {
		var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
			i = document.getElementsByTagName("thead")[0].getElementsByTagName("input"),
			tr = document.getElementsByTagName("tbody")[0].rows,
			N = tr.length;
			ckGr = ckGr_F(s[0].value),
			ckSkill1 = ckSkill_F(s[1].value),
			ckSkill2 = ckSkill_F(s[2].value),
			ckSozai = ckSozai_F(i[1].value);
		for (var i = 0,cel; i < N; i++) cel = tr[i].cells,tr[i].style.display = ckGr(cel[0]) && ckSkill1(cel[4]) && ckSkill2(cel[4]) && ckSozai(cel[7]) ? "" : "none";
		}
}

var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
if (armorCK) {
	addEvent(s[0],"change",filter);
	addEvent(s[1],"change",taisort);
	addEvent(s[2],"change",filter);
	addEvent(s[3],"change",filter);
	addEvent(s[4],"change",filter);
	addEvent(s[5],"change",filter);
	//�h��
} else {
	//�����i
	for (var i = 0,max = s.length; i < max; addEvent(s[i++],"change",filter));
	addEvent(document.getElementsByTagName("thead")[0].getElementsByTagName("input")[1],"change",filter);
}
s=null;

//�C�x���g�o�^
addEvent(document,"click",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.tagName === "INPUT"){
		var marker = document.createElement("tbody"),
			tB = document.getElementsByTagName("tbody")[0],
			tr = tB.rows,
			N = tr.length,
			x = [];
		switch (t.title) {
		case "���O���Ƀ\�[�g":
			var Fulltohalf = (function (){
				var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZ�������������������������������������������ܦݱ������������������������������������������ܦݧ�����������������������������������������ζ�����������������������γ";
				var zen = "�O�P�Q�R�S�T�U�V�W�X�D�C�|�{�`�a�b�c�d�e�i�g�h�i�j�k�l�m�n�o�p�q�r�s�t�u�v�w�x�y�A�C�E�G�I�J�L�N�P�R�T�V�X�Z�\�^�`�c�e�g�i�j�k�l�m�n�q�t�w�z�}�~���������������������������������������������������������������ĂƂȂɂʂ˂̂͂Ђӂւق܂݂ނ߂�������������񂟃@���B���D���F���H���b�Ⴣ�ヅ�僇�������������������������Âłǂ΂тԂׂڂς҂Ղ؂ۃK�M�O�Q�S�U�W�Y�[�]�_�W�d�f�h�o�r�u�x�{�p�s�v�y�|��";
				return function (strVal) {
					for (var i = 0,str = "",m = strVal.length,c,n; i<m; i++){
						c = strVal.charAt(i),n = zen.indexOf(c,0);
						str += n >= 0 ? han.charAt(n) : "�" + c;
					}
					return str;
				}
			})();
			for (var i = 0; i < N; x[i] = [Fulltohalf(tr[i].cells[0].firstChild.nodeValue)], x[i].row=tr[i++]);
			x.sort();
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		case "�h�䏇�Ƀ\�[�g":
			for (var i = 0; i < N; x[i] = [tr[i].cells[5].lastChild.nodeValue.split("/")[0]], x[i].row=tr[i++]);
			x.sort(function(a, b){return b - a});
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		}
	}
});
}, 32);
