setTimeout(function (){
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

//�����ݒ�
var tH = document.getElementsByTagName("thead")[0].rows[0],
	dt = document.createElement("div"),
	s = document.createElement("select");
dt.className="m",s.style.display="block",s.title="�X�L���ōi����";
selectSet(s,[
"�������","�U���͕␳","�����l","��Ԉُ�l","��S��","�h���","�X�^���l","�򗳎����","���������","�b�k�����","���������","��b�����","�b�������","�C�������","�×������","���^����","�|�|�|�|�|�|","�ҏ�","����","��������","�[�����","�ɐB������","���g������","���������","���j������","�Ηj������","���j������","�ؗj������","���j������","�y�j������","���j������","�Ǘ��l�̗F","�C���̗F","�_�E�W���O","��l��","�����̃X�X��","�O�[�N�̗F","�z���N�̗F","��V���","�o�����","�G�H","��̉�","������","���Ƃ�","�����R�l","����","����","���˒ǉ�","�����˒ǉ�","���˖���","�r�M���˒ǉ�","�o���X�^�ߖ�","�����|����","�����Ў苭��","�����͈͊g��","�Z����[�Ў�]","�Z����[�o��]","�Z����[�匕]","�Z����[����]","�Z����[��]","�Z����[�e��]","�Z����[��]","�Z����[�J]","�Z�ω�[�Ў�]","�Z�ω�[�o��]","�Z�ω�[�匕]","�Z�ω�[����]","�Z�ω�[��]","�Z�ω�[�e��]","�Z�ω�[��]","�Z�ω�[�J]","�Z�ω�[�y�e]","�Z�ω�[�d�e]","�Z�ω�[�|]","���[�`UP","�C���ω�","�����ω��P","�����ω��Q","�����ω��R","�Ȏ˕ω�","���A�x�ω�","�C������","�Z����[�|]","�l�R�u���[�_�[","�e�ω�","��������[�匕]","��������[��]","��������[��]","��������[�Ў�]","��������[�o��]","��������[����]","��������[�J]","��������[�e��]","��������[��]","�Z����[��]","�嗳�����","�����ړ����x","�Z����[����]","�Z����[�d�e]","�匕����","�d�e����","�ȋ���","������","�Ў茕����","�y�e����","�o������","��������","��J����","�e������","�|����","����������","��������","���a�ȋ���","�Ďg�p�ҋ@����","���ʎ���","[�H]�Αϐ�","[�H]���ϐ�","[�H]�X�ϐ�","[�H]���ϐ�","[�H]���ϐ�","[�H]������","[�H]����","[�H]�U����","[�H]�����l","[�H]�ړ����x","[��]�U����","[��]�����l","[��]��S��","[��]��Ԉُ�","[��]�X�^���l","[��]������","[��]�S�ϐ�"
]);
tH.cells[1].appendChild(s.cloneNode(true));
tH.cells[1].appendChild(s.cloneNode(true));
var ckSkill_F = function (e) {
	return e === "�������" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf(">"+e+"<") !== -1;};
	};
tH=dt=s=null;

//�����i
var filter = function () {
	var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
		tr = document.getElementsByTagName("tbody")[0].rows,
		N = tr.length,
		ckSkill1 = ckSkill_F(s[0].value);
		ckSkill2 = ckSkill_F(s[1].value);
	for (var i = 0; i < N; i++) tr[i].style.display = ckSkill1(tr[i].cells[1]) && ckSkill2(tr[i].cells[1]) ? "" : "none";
}

var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
for (var i = 0, max = s.length; i < max; addEvent(s[i++],"change",filter));
s=null;

}, 32);
