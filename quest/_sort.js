(function(){
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
//���X�g�Z�b�g
var selectSet = function(e,v) {
	var m = v.length;
	/*@if (@_jscript_version < 9)
	e.options.length = m;
	for (var i = 0;i < m;e.options[i].value = e.options[i].text = v[i++]);
	@else@*/
	e.length = 0;
	for (var i = 0,o;i < m;i++){
		o = document.createElement("option");
		o.setAttribute("value", v[i]);
		o.appendChild(document.createTextNode(v[i]));
		e.appendChild(o.cloneNode(true));
	}
	/*@end@*/
};

//HTML�Ƀ{�^���ǉ�
var tH = document.getElementsByTagName("thead")[0].rows[0],
	i = document.createElement("input"),
	s = document.createElement("select");
i.type = "button",i.style.display = s.style.display = "block",
i.style.marginRight = i.style.marginLeft = s.style.marginRight = "auto";

//�ꏊ
s.title = "�ꏊ�ōi�荞��";
selectSet(s,["�ꏊ","����","����","���n","��R","�ΎR","���C","�X�u","��","���J","���n","����","�ɊC","�Ԕ�","�|��","��","���_","��","���Z��","�����","�Ⓡ"]);
s.selectedIndex = 0;
tH.cells[2].appendChild(s.cloneNode(true));
//�^�[�Q�b�g
s.title = "�^�[�Q�b�g�ōi�荞��";
selectSet(s,["�^�[�Q�b�g","�A�C���[","�A�J���g����","�A�N���E���@�V��","�A�N���E�W�F�r�A","�A�m���p�e�B�X","�A�r�I���O","�A�v�P���X","�A�v�g�m�X","�A�}�c�}�K�c�`","�A���K�m�X","�A���m�E��","�C�[�I�X","�C�i�K�~","�C�r���W���[","�C�r���W���[�I","�C�����K�����K","�C�����N�b�N","�C�����N�b�N����","���@���T�u���X","���H�[�W����","���H���K�m�X","���H���K�m�X����","�E���K���L��","�E���L�[","�G�M�����X","�G�X�s�i�X","�G�X�s�i�X����","�G�X�s�i�X�󏭎�","�G���[���I��","�G���y","�I�I�i�Y�`","�I�f�B�o�g���X","�K�E�V�J","�K�X���o�Y��","�K�m�g�g�X","�K�m�g�g�X����","�K�u���X","�K�~�U�~","�J���E�I���K����","�K���o�_�I��","�K���I�X","�J���^���X","�M�A�I���O","�M�A�m�X","�L����","�N�A���Z�v�X","�O�@���]����","�N�V�����_�I��","�N�X�o�~","�O���r���X","�O���r���X����","�O���A�h���X","�O�����[�u��","�P�I�A���{��","�Q�l�|�X","�Q�����X","�Q�����X����","�P���r","�S�A�E�}�K��","�S�E�K���t","�R�R���A","�S�S���A","�S���K�m�X","�R���K","�V�F���K�I����","�V���K���E�}�K��","�V�����e�B�G��","�V���E�O���M�U�~","�W���I�E�K","�W���I�E�K����","�[�i�Z���X","�[�����E�X","�Z�����M�I�X","�^�C�N���U���U","�_�C�~���E�U�U�~","�嗋����","�`���`���u�[","�f�B�A�u���X","�f�B�A�u���X����","�f�B�I���b�N�X","�e�B�K���b�N�X","�f�B�X�t�B���A","�e�I�E�e�X�J�g��","�f�����K�E�A","�g�A�E�e�X�J�g��","�h�D�����f�B��","�h�X�C�[�I�X","�h�X�K���I�X","�h�X�Q�l�|�X","�h�X�t�@���S","�h�X�����|�X","�h�h�u�����S","�h���M�����X","�g���h�N���X","�i�i�E�e�X�J�g��","�i���K�N���K","�m�m�E�I���K����","�o�T�����X","�o�o�R���K","�p���A�v���A","�n���h�����O","�o�����K��","�q�v�m�b�N","�q�v�m�b�N�󏭎�","�q�v�m�b�N�ɐB��","�q���W�L�L","�t�@���m�b�N","�t�H���N����","�u���L�f�B�I�X","�u�����S","�u���b�N","�u���t�@���S","�t���t��","�t���t������","�x���I���X","�x���L�����X","�|�J��","�|�J���h��","�|�|","�{�K�o�h����","�|�{���o����","�~�E��","�~�h�K����","�~���{���A�X","�~���{���A�X�y�g���z","�~���{���A�X�y�c���z","�����M�i�X","�������[","���X","���m�u���X","���m�u���X����","���I�U�~","���}�N���C","���}�c�J�~","���[�W����","�����B�G���e","�����B�G���e�ҋ���","���I�V��������","���I�V������������","�����S�X�^","�����|�X","���I���C�A","���I���C�A����","���I���C�A�󏭎�","���I���E�X","���I���E�X����","���I���E�X�󏭎�","���R�f�B�I��","���r�f�B�I��"]);
tH.cells[6].appendChild(s.cloneNode(true));
var ckTtarget_F = function (e) {
	if (e === "�^�[�Q�b�g") {
		return function(){return true};
	} else {
		var reg = new RegExp(">"+e+"[�O-�X].+��|>"+e+"��");
		return function (cell) {return reg.test(">"+cell.innerHTML.replace("�A�N���E�W�F�r�A���","�A�N���E�W�F�r�A").replace("�q�v�m�b�N���","�q�v�m�b�N�ɐB��").split("���").join("����").split("�ώ�").join(""));};
	}
};
/*�������͈��������������̂Ŗv
var ckTtarget = function (cell,s) {
		return s === "-" ? true : (cell.innerHTML.indexOf(s) === 0 || cell.innerHTML.indexOf(">"+s) >= 1);
	}
*/

//HR
s.title = "HR�ōi�荞��";
if (location.pathname.indexOf("_g") !== -1 && location.pathname.indexOf("_go") === -1) {
	selectSet(s,["�f�q","1�ȏ�"]);
} else {
	selectSet(s,["�g�q","100�ȏ�","91�ȏ�","81�ȏ�","71�ȏ�","61�ȏ�","51�ȏ�","41�ȏ�","31�ȏ�","22�ȏ�","17�ȏ�","15�ȏ�","11�ȏ�","8�ȏ�","5�ȏ�","3�ȏ�","2","1"]);
}
tH.cells[7].appendChild(s.cloneNode(true));
var ckHr_F = function (e) {
	if (e === "�g�q" || e === "�f�q") {
		return function(){return true};
	} else {
		e = parseInt(e);
		return function (cell) {
			if (!cell.firstChild) return true;   //�w��Ȃ�

			var wk = cell.firstChild.nodeValue.replace("-","");

			if (wk.indexOf("�ȏ�") !== -1) {
				return parseInt(wk.substring(2))  <= e;
			} else if (wk.indexOf("�ȉ�") !== -1) {
				return parseInt(wk.substring(2))  >= e;
			} else {
				var hantei = wk.substring(2).split("�`");
				return hantei[0] <= e && hantei[1] >= e;
			}
		}
	}
};

//�G��
s.title = "�G�߂ōi�荞��";
selectSet(s,["�G��","���g��","�����","�ɐB��"]);
s.style.position = "relative",s.style.top = "0",s.style.right = "-150px";
tH.cells[1].appendChild(s.cloneNode(true));
var ckField_F = function (e1,e2) {
	if (e1 === "�ꏊ" && e2 === "�G��") {
		return function(){return true};
	} else if (e1 !== "�ꏊ" && e2 !== "�G��") {
		return function (cell) {return cell.firstChild.nodeValue.indexOf(e1) !== -1 && cell.childNodes[2].nodeValue === e2;};
	} else if (e1 !== "�ꏊ") {
		return function (cell) {return cell.firstChild.nodeValue.indexOf(e1) !== -1;};
	} else {
		return function (cell) {return cell.childNodes[2].nodeValue === e2;};
	}
};

//���z�\�[�g
i.value = "���z",i.title = "���z���Ƀ\�[�g";
tH.cells[4].appendChild(i.cloneNode(false));

//HRP�\�[�g
i.value = "�߲��",i.title = "�߲�ď��Ƀ\�[�g";
tH.cells[5].appendChild(i.cloneNode(false));

tH=i=s=null;

//�C�x���g�̂݃\�[�g���Ă݂�
if (location.pathname.indexOf("ev_") !== -1) {
	var marker = document.createElement("tbody"),
		tB = document.getElementsByTagName("tbody")[0],
		tr = tB.rows,
		N = tr.length,
		x = [],
		date = new Date(),
		dateTxt = (date.getFullYear() + "/" + ("00" + (date.getMonth() + 1)).slice(-2) + "/" + ("00" + date.getDate()).slice(-2));

	for (var i = 0,w = ""; i<N;) {
		w = tr[i].cells[1].lastChild.firstChild.nodeValue.split("�`")[1];
		if (tr[i].className !== "h" && w < dateTxt) tr[i].className = "h";	//���Ԃ��߂������\��
		x[i] = [w + ("000" + i).slice(-3)],
		x[i].row = tr[i++];
	}
	//x.sort(function(a, b){return b < a});
	x.sort();
	for (var i = 0; i<N; marker.appendChild(x[i++].row));
	tB.parentNode.replaceChild( marker,tB );
}
//�t�B���^�[
var filter = function () {
	var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
		tr = document.getElementsByTagName("tbody")[0].rows,
		N = tr.length;
	//���
	if (document.getElementById("top")) {
		var sw = document.getElementById("top").getElementsByTagName("span");
		if (sw[0].style.color !== "") { //���T���̂�
			var ckLine = function (tr) {return tr.className === "" || tr.className === "e" || tr.className === "r";};
		} else if (sw[1].style.color !== "") { //�S��
			var ckLine = function () {return true;};
		} else { //�p�~����
			var ckLine = function (tr) {return tr.className !== "h";};
		}
	} else {
		var ckLine = function () {return true;};
	}
	var ckField = ckField_F(s[1].value,s[0].value),ckTtarget = ckTtarget_F(s[2].value),ckHr = ckHr_F(s[3].value);
	for (var i = 0; i < N; i++ ) {
		tr[i].style.display = ckLine(tr[i]) && ckField(tr[i].cells[2]) && ckTtarget(tr[i].cells[6]) && ckHr(tr[i].cells[7]) ? "" : "none";
		/*@if (@_jscript_version <= 5.7)
		if (tr[i].style.display === "" && tr[i].cells[0].style.borderStyle === "none") {
			tr[i].cells[0].style.borderStyle = tr[i].cells[1].style.borderStyle = tr[i].cells[2].style.borderStyle = tr[i].cells[3].style.borderStyle = tr[i].cells[4].style.borderStyle = tr[i].cells[5].style.borderStyle = tr[i].cells[6].style.borderStyle = tr[i].cells[7].style.borderStyle = "ridge";
		} else if (tr[i].style.display !== "" && tr[i].cells[0].style.borderStyle !== "none") {
			tr[i].cells[0].style.borderStyle = tr[i].cells[1].style.borderStyle = tr[i].cells[2].style.borderStyle = tr[i].cells[3].style.borderStyle = tr[i].cells[4].style.borderStyle = tr[i].cells[5].style.borderStyle = tr[i].cells[6].style.borderStyle = tr[i].cells[7].style.borderStyle = "none";
		}
		/*@end@*/
	}
}

var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
for (var i = 0,max = s.length; i < max; addEvent(s[i++],"change",filter));
s=null;
if (document.getElementById("top")){
	addEvent(document.getElementById("top"),"click",
	function (evt) {
		/*@if (@_jscript_version < 9)
		var t = evt.srcElement;
		@else@*/
		var t = evt.target;
		/*@end@*/
		if (t.tagName === "SPAN"){
			var sw = document.getElementById("top").getElementsByTagName("span");
			sw[0].style.color = sw[1].style.color = sw[2].style.color = "";
			t.style.color = "red";
			filter();
			if (sw[1].style.color !== "") { //�S�ĕ\���̏ꍇ
				/*@if (@_jscript_version < 9)
				document.styleSheets[0].addRule( "table#list tr.h", "display: block;");
				document.styleSheets[0].addRule( "table#list tr.h", "display: table-row;");
				@else@*/
				document.styleSheets[0].insertRule( "table#list tr.h { display: table-row;} ",document.styleSheets[0].cssRules.length );
				/*@end@*/
			}
		}
	});
}

addEvent(document,"click",
function (evt) {
	/*@if (@_jscript_version < 9)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.tagName === "INPUT"){
		var marker = document.createElement("tbody"),
			tB = document.getElementsByTagName("tbody")[0],
			tr = tB.rows,
			N = tr.length
			x = [];
		x.sum = function (cell){
				return parseInt(cell.firstChild.nodeValue) + parseInt(cell.childNodes[2].nodeValue) + parseInt(cell.childNodes[4].nodeValue);
			}
		switch (t.title) {
		case "���z���Ƀ\�[�g":
			var col = 4;
			marker.id = "Z"+tB.id.charAt(0);
			break;
		case "�߲�ď��Ƀ\�[�g":
			var col = 5;
			marker.id = "H"+tB.id.charAt(0);
			break;
/*		case "�ꏊ���Ƀ\�[�g":
			var col = 2;
			break;
*/		}
		for (var i = 0; i < N; x[i] = [x.sum(tr[i].cells[col])], x[i].row=tr[i++]);
		x.sort(function(a, b){return b - a});
		for (var i = 0; i < N; marker.appendChild(x[i++].row));
		tB.parentNode.replaceChild( marker,tB );
	}
});

//�A�����[�h�ޔ�
addEvent(window,"unload",function () {
var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
	dispflg = "";
if (document.getElementById("top")) {
	var sw = document.getElementById("top").getElementsByTagName("span");
	if (sw[0].style.color !== "") { //���T���̂�
		dispflg = 0;
	} else if (sw[1].style.color !== "") { //�S��
		dispflg = 1;
	} else { //�p�~����
		//dispflg = 2;
	}
}
document.cookie = "quest=" + [location.pathname,s[0].selectedIndex,s[1].selectedIndex,s[2].selectedIndex,s[3].selectedIndex,document.getElementsByTagName("tbody")[0].id,dispflg,document.documentElement.scrollTop].join("!");
});
//�I�����[�h
var w = document.cookie;
if (w.indexOf("quest=" + location.pathname) !== -1) {
	w = w.split("quest=")[1].split("!");
	var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
	if (w[1]+w[2]+w[3]+w[4] > 0) {
		s[0].selectedIndex = w[1];
		s[1].selectedIndex = w[2];
		s[2].selectedIndex = w[3];
		s[3].selectedIndex = w[4];
		filter();
	}
	//�\�[�g
	if (w[5] !== "") {
		var i = document.getElementsByTagName("thead")[0].getElementsByTagName("input");
		if (w[5].length === 2) {
			/*@if (@_jscript_version < 9) 
			i[w[5].charAt(1) === "Z" ? 0 : 1].fireEvent( "onclick" );
			@else@*/
			var evt = document.createEvent("MouseEvents");
			evt.initEvent("click", true, true);
			i[w[5].charAt(1) === "Z" ? 0 : 1].dispatchEvent(evt);
			/*@end@*/
		}
		/*@if (@_jscript_version < 9) 
		i[w[5].charAt(0) === "Z" ? 0 : 1].fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		i[w[5].charAt(0) === "Z" ? 0 : 1].dispatchEvent(evt);
		/*@end@*/
	}
	//���T���݂̂Ȃ�
	if (w[6] !== "") {
		/*@if (@_jscript_version < 9) 
		document.getElementById("top").getElementsByTagName("span")[+w[6]].fireEvent( "onclick" );
		@else@*/
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		document.getElementById("top").getElementsByTagName("span")[+w[6]].dispatchEvent(evt);
		/*@end@*/
	}
//	window.scrollTo(0,parseInt(w[7]));
};
//�p�~�N�G�X�g
if (location.pathname.indexOf("x") !== -1) { //�S�ĕ\���̏ꍇ
	/*@if (@_jscript_version < 9)
	document.styleSheets[0].addRule( "table#list tr.h", "display: block;");
	document.styleSheets[0].addRule( "table#list tr.h", "display: table-row;");
	@else@*/
	document.styleSheets[0].insertRule( "table#list tr.h { display: table-row;} ",document.styleSheets[0].cssRules.length );
	/*@end@*/
}

})();
