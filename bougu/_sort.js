setTimeout(function (){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//CxgZbg
var addEvent = function (elm, type, func) {
	//ÇÁ
	elm./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//A[hÅí
	window./*@cc_on @if (true) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@cc_on @if (true) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//XgZbg
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

//HTMLÉ{^ÇÁ

//úÝè
var armorCK = location.pathname.indexOf("deco") === -1,
	tH = document.getElementsByTagName("thead")[0].rows[0],
	dt = document.createElement("div"),
	i = document.createElement("input"),
	s = document.createElement("select");
dt.className = "m",i.type = "button";
//¼Ì\[g
i.value = "¼O",i.title = "¼OÉ\[g";
dt.appendChild(i.cloneNode(false));
tH.cells[0].appendChild(dt);
if (armorCK) {
	//hä\[g
	i.value = "hä",i.title = "häÉ\[g";
	dt.appendChild(i.cloneNode(false));
	//A§À
	s.title = "AÅiÝ";
	selectSet(s,["Ú±","11","10","9","8","7","6","5","4","3","2","1"]);
	s.selectedIndex = 0;
	dt.appendChild(s.cloneNode(true));
	var ckRare_F = function (e) {
		return e === "Ú±" ? function(){return true} : function (cell) {return +cell.firstChild.nodeValue <= e};
	};
	//Ï«\[g
	s.style.display = "block",s.title = "Ï«É\[g";
	selectSet(s,["","Î","","","X","´"]);
	tH.cells[3].appendChild(s.cloneNode(true));
	//X§À
	s.title = "XbgÅiÝ";
	selectSet(s,["½Û","3","2","1"]);
	tH.cells[5].removeChild(tH.cells[5].childNodes.item(1));
	tH.cells[5].appendChild(s.cloneNode(true));
	var ckSlot_F = function (e) {
		return e === "½Û" ? function(){return true} : function (cell) {return cell.lastChild.nodeValue.split("/")[1] >= e;};
	};
} else { //üi
	//G§À
	s.title = "GRÅiÝ";
	selectSet(s,["GR","GX","GF","G"]);
	s.selectedIndex = 0;
	if (location.pathname.indexOf("deco.htm") === -1) s.style.display = "none";
	dt.appendChild(s.cloneNode(true));
	var ckGr_F = function (e) {
		return e === "GR" ? function(){return true} : 
				e === "GX" ? function (cell) {return cell.firstChild.nodeValue.indexOf("ËìGX") !== -1 || cell.firstChild.nodeValue.indexOf("ìGX") !== -1;} :
				e === "GF" ? function (cell) {return cell.firstChild.nodeValue.indexOf("ËìGF") !== -1 || cell.firstChild.nodeValue.indexOf("ìGF") !== -1;} :
							function (cell) {return cell.firstChild.nodeValue.indexOf("Ëìf") !== -1 || cell.firstChild.nodeValue.indexOf("ìf") !== -1;};
	};
	//fÞiè±Ý
	var dt = document.createElement("div"),
		i = document.createElement("input");
	i.type = "text",i.title = "fÞÅiÝ";
	dt.appendChild(i.cloneNode(false));
	i.type = "button",i.value = "iÝ",i.title = "fÞÅiÝ";
	dt.appendChild(i.cloneNode(false));
	tH.cells[7].appendChild(dt);
	var ckSozai_F = function (e) {
		return e === "" ? function(){return true} : function (cell) {return cell./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/.indexOf(e) !== -1;}
	};
}
//XL§À
s.style.display = "block",s.title = "XLÅiÝ";
if (location.pathname.indexOf("deconk") !== -1) {
	selectSetGroup(s,[
	["XL",["Ið"]],
	["Un",["U","ïS","x¹","Î®«­»","®«­»","®«­»","X®«­»","´®«­»","p","Sáp","ÑÊ±","Áå±","áU","°U","ÅU","ÁêU"]],
	["hän",["hä","½Ë_o","½Ëp"]],
	["ÌÍEX^~in",["ÌÍ"]],
	["óÔÙín",["Å","á","°","Câ"]],
	["Ï«n",["SÏ«","ÎÏ«","Ï«","Ï«","XÏ«","´Ï«"]],
	["Ûìn",["h¹","Ïk","³","_Í"]],
	["ACeE²n",["SlJp","ñJp","d»Jp","áã©p"]],
	["ñVn",["^"]],
	["»Ì¼n",["AÍ","­±p","ãp","ãJp","Ú®¬x"]]
	]);
} else if (location.pathname.indexOf("decotk") !== -1 || location.pathname.indexOf("decotf") !== -1) {
	selectSet(s,["Ið"]);
	s.style.display = "none";
} else {
	selectSetGroup(s,[
	["XL",["Ið"]],
	["Un",["","U","êCT","êM","Bl","M]","É","I","®","Ï","¨ÌS¾","ÁêU","öï","Î®«U","®«U","®«U","X®«U","´®«U","®«U","e­»","Cpt","Û","J«¼l","Ìp","t«","{","êÍ","r«","èû","fH","­ßZk","­ßÐÍ","íJ«","Kãªè","K","¬e","C«","Z","æÒ","","Òi","³","ê_Ëj","q±v","sÞ"]],
	["hän",["¶½Í","½Ë","hä","vÇ","K[h«\","©®hä","Æñ¸ç"]],
	["ÌÍEX^~in",["ÌÍ","ñ¬x","ñ","z","òw","CÍñ","ÍçÖè","X^~i","H","H¢µñV"]],
	["mn",["¤¬t","aê¡","I¬"," "," ","","ÒÅ","á","°","Î","","_","X","´¤","ÐèZ","oZ","åZ","¾Z","ÈZ","ëÂJZ","Z","eZ","Z","ú´Z","¥aÈZ","p","_"]],
	["Ki[n",["Ëè","Êíe­»","ÑÊe­»","Ue­»","ÊíeÇÁ","ÑÊeÇÁ","UeÇÁ","ÖeÇÁ","gUeÇÁ","ÅrÇÁ","árÇÁ","°rÇÁ","","¸Ë","U","¬Ë","AË","U","½®","îË","¸§Ë","e²","eÛßñp","_","ó","deZ","yeZ","|Z"]],
	["óÔÙín",["Å","á","°","ÏóÔÙí","Câ","EL","Ïá","ºÑ","ÎhäDOWN","Ï","jÏ«","¥ÍÏ«","»Ï«","Ï«"]],
	["Ï«n",["SÏ«to","ÎÏ«","Ï«","XÏ«","Ï«","´Ï«"]],
	["Ûìn",["OEÌìè","®oÛì","Ïk","³","Ý³ø","Ï","Ï¦","xú","n`","´ñð","ñð«\","ñð£","ó¯g","R»","ª«","âÎhä"]],
	["ACeE²n",["²t","øÊ±","Læ","CÜ®ê","±","­¨","ël","÷Ä«","Þè","²¬÷¦","Bàp","¬Ýu","Sr","iCtg¢"]],
	["MAPTmn",["n}","ç¢á","Cz","ø®"]],
	["Ìæ^Àn",["^À","¬ûW","Ìæ","¬æè","½íS"]],
	["ñVn",["^C","X^[","³Í"]],
	["»Ì¼n",["u[_[","ãJ","Ðçß«","ßlãè","~","¢½íè","Ú®¬x","","x","¶","ã","m½¬","","²[p","XEn¶"]]
	]);
}
tH.cells[4].appendChild(s.cloneNode(true));
tH.cells[4].appendChild(s.cloneNode(true));
var ckSkill_F = function (e) {
	return e === "Ið" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf(">"+e+"<") !== -1;};
	};
//HÙ§À
if (armorCK || location.pathname.indexOf("decocz") !== -1) {
	s = document.createElement("select");
	s.title = "HÙÅiÝ";
	selectSet(s,["HÙ","XLgg£","M]­»","I­»","®­»","Z­»","XEn¶­»","¨ð­»","³­»","Ïk­»","ÏÅ­»","Ïá­»","Ï°­»","z­»","¨­»","x­»","eÛßñp­»","K[h«\­»","K­»","Û­»","½Ë­»","I¬­»","C«­»","­»","­»","³­»","Òi­»"]);
	tH.cells[4].appendChild(s.cloneNode(true));
	var ckTeni_F = function (e) {
		return e === "HÙ" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf("u"+e) !== -1;};
		};
}
tH=dt=i=s=null;

//tB^[
if (armorCK) {
	//hï
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
	//üi
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
	//üi
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
	//hï
} else {
	//üi
	for (var i = 0,max = s.length; i < max; addEvent(s[i++],"change",filter));
	addEvent(document.getElementsByTagName("thead")[0].getElementsByTagName("input")[1],"change",filter);
}
s=null;

//Cxgo^
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
		case "¼OÉ\[g":
			var Fulltohalf = (function (){
				var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZ±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ¦Ý±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ¦Ý§§¨¨©©ªª««¯¯¬¬­­®®¶·¸¹º»¼½¾¿ÀÁÂÃÄÊËÌÍÎÊËÌÍÎ¶·¸¹º»¼½¾¿ÀÁÂÃÄÊËÌÍÎÊËÌÍÎ³";
				var zen = "OPQRSTUVWXDC|{`abcdeighijklmnopqrstuvwxyACEGIJLNPRTVXZ\^`cegijklmnqtwz}~ ¢¤¦¨©«­¯±³µ·¹»½¿ÂÄÆÈÉÊËÌÍÐÓÖÙÜÝÞßàâäæçèéêëíðñ@¡B£D¥F§HÁbáãåª¬®°²´¶¸º¼¾ÀÃÅÇÎÑÔ×ÚÏÒÕØÛKMOQSUWY[]_Wdfhorux{psvy|";
				return function (strVal) {
					for (var i = 0,str = "",m = strVal.length,c,n; i<m; i++){
						c = strVal.charAt(i),n = zen.indexOf(c,0);
						str += n >= 0 ? han.charAt(n) : "Þ" + c;
					}
					return str;
				}
			})();
			for (var i = 0; i < N; x[i] = [Fulltohalf(tr[i].cells[0].firstChild.nodeValue)], x[i].row=tr[i++]);
			x.sort();
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		case "häÉ\[g":
			for (var i = 0; i < N; x[i] = [tr[i].cells[5].lastChild.nodeValue.split("/")[0]], x[i].row=tr[i++]);
			x.sort(function(a, b){return b - a});
			for (var i = 0; i < N; marker.appendChild(x[i++].row));
			tB.parentNode.replaceChild( marker,tB );
			break;
		}
	}
});
}, 32);
