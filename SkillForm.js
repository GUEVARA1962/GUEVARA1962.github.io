/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
var SkillForm = (function (document){
//���@�[�W�����`�F�b�N
if (document.getElementById("version").firstChild.nodeValue !== "20190429") alert("����ɓ��삵�Ȃ��\��������܂��B�����[�h���邩�A�L���b�V���������Ă��������B");
//�Œ�
var CK_IE6 = typeof document.documentElement.style.maxHeight === "undefined";
var CK_IE9 = false;
/*@if (@_jscript_version == 10) //IE10
	CK_IE9 = true;
@elif (@_jscript_version == 9) //IE9
	CK_IE9 = true;
@elif (@_jscript_version == 5.8) //IE8
	CK_IE9 = false;
@else
	CK_IE9 = false;
@end
@*/

var CK_MAC = navigator.userAgent.toUpperCase().indexOf("MAC") !== -1,
	I_bNAME = 0,I_bSEX = 1,I_bTYPE = 2,I_bRARE = 3,I_bGR = 4,I_bF = 5,I_bW = 6,I_bT = 7,I_bD = 8,I_bI = 9,I_bSN1 = 10,I_bSP1 = 11,I_bSN2 = 12,I_bSP2 = 13,I_bSN3 = 14,I_bSP3 = 15,I_bSN4 = 16,I_bSP4 = 17,I_bSN5 = 18,I_bSP5 = 19,I_bUPGBACK = 20,I_bRECIPE1 = 21,I_bHR1 = 22,I_bLVUPPTN = 23,I_bLVMAX = 24,I_bZENY = 25,I_bDEF = 26,I_bSLOT1 = 27,I_bSLOT7 = 28,I_bZENYPTN = 29,I_bDEFPTN = 30,I_bSLOTPTN = 31,I_bUPGCNT = 32,I_bCRE = 33,I_bDEC = 34,I_bCLASS = 35,I_bTrSLOT = 36,I_bTeni = 37,I_bDOC = 38,I_bIMG = 39,
	I_sID = 0,I_sLV = 1,I_sS1 = 2,I_sS2 = 3,I_sS3 = 4,I_sT1 = 5,I_sT2 = 6,I_sT3 = 7,
	I_iSozai1 = 0,I_iSozai2 = 1,I_iSozai3 = 2,I_iSozai4 = 3,I_iSozai5 = 4,I_iSozai6 = 5,I_iSozai7 = 6,I_iHR1 = 7,I_iHR2 = 8,I_iHR3 = 9,I_iHR4 = 10,I_iHR5 = 11,I_iHR6 = 12,I_iHR7 = 13,
	BUINAME = ["head","body","arm","wst","leg","deco"],
	MAKENAME = {"":"",1:"",2:"�c",3:"�J�t�F",4:"�ۋ�",5:"���T","-":"",e:"�C�x���g",es:"�C�x/��q��",s:"��q��",t:"�����",u:"�}����",m:"��l��",c:"�p���[�l",g:"�K�`��",k:"�L�b�g",i:"��ʓV",p:"�p�b�P"},
	CLASSTYPE = {"":" ",A:"�r�o",B:"����",C:"�V��",D:"�e��",E:"�g�b",F:"���",G:"G�e��",H:"���",I:"�f��",J:"G���",K:"��`",L:"G��`",M:"�n��",N:"�V�L",O:"�J�I",P:"�H��",Q:"�H�َ��",
					SP:"A",HC:"E",Shugo:"FJQ",GClass:"IJPQ",Gosyu:"B",Tenran:"C",Hasyu:"DG",Resyu:"H",Sisyu:"M",Tenro:"N"},
	TYPENAME = ["���p","���m","�K���i�["],
	SEXNAME = ["�j��","�j����","������"],
	TENFUNAME = ["�Ȃ�","�����ǉ�","��Ԓǉ�","��S�ǉ�","�e�ǉ�","","","","","","","","","","","","","[�Ў�]�^���]�a","[�o��]�n�ŏp","[�匕]�ガ����","[�匕]�K�[�h�a�T","[�匕]�K�[�h�a�U","[����]�юh��","[�e��]�����a�グ","[��]���ړ��p�T","[��]���ړ��p�U","[��]���ړ��p�V","�X�^���l","�����͈͊g��"],
	TENKOKUNAME = ["�Ȃ�","�a�ꖡUP","�X�L��UP","�U����UP","�����E���UP","�����␳","�����r��UP","�h���UP","�_���[�W�y��","�̗͎�����","�f���h��","�Ґi����"],
	TENINAME = ["�Ȃ�","�X�L���g�g��+1","�X�L���g�g��+2","�X�L���g�g��+3","�X�L���g�g��+4","�X�L���g�g��+5","�X�L���g�g��+6","�X�L���g�g��+7","�M�]����+1","�M�]����+2","�I������+1","�I������+2","��������","�Z������+1","�Z������+2","�X�E�n������","�X�E�n������","��������+1","��������+2","��������+3","��������+1","��������+2","��������+3","��������+4","�ϐk����+1","�ϐk����+2","�ϓŋ���+1","�ϓŋ���+2","�ϖ�჋���+1","�ϖ�჋���+2","�ϐ�������+1","�ϐ�������+2","�z������+1","�z������+2","��������","�x������","�e�ېߖ�p����+1","�e�ېߖ�p����+2","�K�[�h���\����+1","�K�[�h���\����+2","�K��������+1","�K��������+2","�ە�����+1","�ە�����+2","���ˋ���+1","���ˋ���+2","���ˋ���+3","�I������","���C��������","��������","������","��������","�Ґi����"],
	MST_Equip = {},MST_Item = {},MST_Series_List = [],MST_Deco_List = [],MST_Item = setItem();
setItem = null;
var MST_Skill_List = [
["�U���n",[161/*����*/,21/*�U��*/,155/*��C�T*/,169/*��M*/,18/*�B�l*/,205/*�M�]*/,173/*�Ɍ�*/,207/*�I��*/,197/*����*/,202/*�ό�*/,190/*�����̐S��*/,47/*����U��*/,220/*����*/,111/*�Α����U��*/,112/*�������U��*/,113/*�������U��*/,114/*�X�����U��*/,115/*�������U��*/,142/*�����U��*/,50/*���e����*/,81/*�C�p�t*/,162/*�ە�*/,85/*�J�������l*/,91/*�̏p*/,170/*�t��*/,165/*�{*/,65/*���*/,217/*�r����*/,222/*���*/,116/*�f�H*/,128/*���ߒZ�k*/,179/*���߈З�*/,141/*����J��*/,154/*�K�オ��*/,184/*�K����*/,198/*���e*/,199/*���C����*/,201/*�Z��*/,210/*�Ҍ�*/,214/*����*/,216/*�Ґi*/,218/*����*/,219/*��_�˔j*/,223/*���q���v*/,206/*�s��*/]],
["�h��n",[164/*������*/,157/*����*/,56/*�h��*/,212/*�v��*/,5/*�K�[�h���\*/,4/*�����h��*/,90/*�Ƃ񂸂�*/]],
["�̗́E�X�^�~�i�n",[31/*�̗�*/,7/*�񕜑��x*/,6/*��*/,183/*�z��*/,186/*�򑐊w*/,143/*�C�͉�*/,51/*�͂�ւ�*/,67/*�X�^�~�i*/,71/*�H��*/,16/*�H������V*/]],
["���m�n",[45/*�����t*/,15/*�a�ꖡ*/,194/*�I��*/,159/*����*/,32/*��*/,118/*������*/,120/*�ғŌ�*/,121/*��჌�*/,122/*������*/,123/*�Ή���*/,124/*������*/,125/*���_��*/,126/*�X����*/,127/*������*/,129/*�Ў茕�Z*/,130/*�o���Z*/,131/*�匕�Z*/,132/*�����Z*/,133/*�ȋZ*/,134/*��J�Z*/,135/*���Z*/,136/*�e���Z*/,211/*�����Z*/,187/*�������Z*/,224/*���a�ȋZ*/,147/*���p*/,200/*���_*/]],
["�K���i�[�n",[171/*�ˎ�*/,38/*�ʏ�e����*/,11/*�ђʒe����*/,23/*�U�e����*/,39/*�ʏ�e�ǉ�*/,12/*�ђʒe�ǉ�*/,24/*�U�e�ǉ�*/,60/*�֒e�ǉ�*/,8/*�g�U�e�ǉ�*/,108/*�ŕr�ǉ�*/,109/*��ვr�ǉ�*/,110/*�����r�ǉ�*/,172/*����*/,196/*����*/,68/*���U��*/,160/*����*/,62/*�A��*/,28/*���U*/,52/*����*/,176/*���*/,69/*�����ˌ�*/,34/*�e����*/,180/*�e�ېߖ�p*/,213/*�_��*/,221/*��*/,137/*�d�e�Z*/,138/*�y�e�Z*/,139/*�|�Z*/]],
["��Ԉُ�n",[46/*��*/,57/*���*/,25/*����*/,148/*�Ϗ�Ԉُ�*/,13/*�C��*/,74/*�E�L*/,75/*�ϐ�*/,79/*����*/,146/*�Ζh��DOWN*/,149/*�ϐ�*/,204/*���j�ϐ�*/,151/*���͑ϐ�*/,150/*�����ϐ�*/,208/*�����ϐ�*/]],
["�ϐ��n",[26/*�S�ϐ��t�o*/,53/*�Αϐ�*/,58/*���ϐ�*/,76/*�X�ϐ�*/,10/*���ϐ�*/,59/*���ϐ�*/]],
["�ی�n",[156/*�O�E�̌��*/,36/*���o�ی�*/,77/*�ϐk*/,54/*����*/,49/*���ݖ���*/,30/*�Ϗ�*/,29/*�ϊ�*/,152/*�x��*/,73/*�n�`*/,215/*�����*/,64/*��𐫔\*/,178/*�������*/,95/*�󂯐g*/,9/*�R��*/,102/*����*/,191/*��Ζh��*/]],
["�A�C�e���E�����n",[174/*�����t*/,66/*���ʎ���*/,78/*�L��*/,14/*�C�܂���*/,44/*����*/,92/*����*/,175/*��l*/,80/*���Ă�*/,40/*�ނ�*/,37/*����������*/,61/*�B���p*/,140/*�����ݒu*/,166/*�S�r*/,144/*�i�C�t�g��*/]],
["MAP�T�m�n",[35/*�n�}*/,27/*�痢��*/,17/*�C�z*/,188/*����*/]],
["�̎�^���n",[3/*�^��*/,63/*�������W*/,22/*�̎�*/,72/*�������*/,192/*����S*/]],
["��V�n",[2/*�^�C*/,70/*�����X�^�[*/,104/*����*/]],
["���̑��n",[167/*�u���[�_�[*/,100/*�J*/,94/*�Ђ�߂�*/,105/*�ߊl���*/,153/*�~��*/,145/*�������*/,181/*�ړ����x*/,182/*��*/,195/*�x��*/,163/*����*/,158/*�㏞*/,185/*���m����*/,189/*����*/,203/*���[�p*/,209/*�X�E�n��*/]]];
var MST_Skill = [
["�Ȃ�",	,,									],
["��g",	,,									],
["�^�C",	146,1,		,-20,161	,-10,160	,10,158	,20,159				],
["�^��",	132,,				,10,97					],
["�����h��",	108,,				,10,44					],
["�K�[�h���\",	107,1,		,-15,43	,-10,42	,10,40	,20,41				],
["��",	149,,			,-10,166	,10,165					],
["�񕜑��x",	97,1,		,-20,30	,-10,29	,10,27	,20,28				],
["�g�U�e�ǉ�",	121,,				,10,68	,15,69	,20,70			],
["�R��",	128,1,		,-20,91	,-10,90	,10,88	,20,89				],
["���ϐ�",	137,1,	,-20,127	,-15,126	,-10,125	,10,122	,15,123	,20,124			],
["�ђʒe����",	115,,				,10,55					],
["�ђʒe�ǉ�",	118,,				,10,59	,15,60	,20,61			],
["�C��",	91,1,			,-10,9	,10,7	,20,8				],
["�C�܂���",	145,1,		,-15,157	,-10,156	,10,154	,15,155				],
["�a�ꖡ",	99,1,			,-10,32	,10,31	,20,293				],
["�H������V",	125,,				,10,77	,15,78				],
["�C�z",	95,,			,-10,20	,10,19					],
["�B�l",	101,1,				,10,35	,15,36	,20,37	,35,284	,50,285	],
["�L���",	,,									],
["�L����",	,,									],
["�U��",	126,1,				,10,79	,15,80	,25,81	,50,286	,80,287	],
["�̎�",	143,1,		,-15,152	,-10,151	,10,149	,15,150				],
["�U�e����",	116,,				,10,56					],
["�U�e�ǉ�",	119,,				,10,62	,15,63	,20,64			],
["����",	90,1,			,-10,6	,10,4	,20,5				],
["�S�ϐ��t�o",	133,,	,-20,103	,-15,102	,-10,101	,10,98	,15,99	,20,100			],
["�痢��",	148,1,				,10,163	,15,164				],
["���U",	110,1,			,-10,49	,10,46	,15,47	,20,48			],
["�ϊ�",	140,1,		,-20,143	,-10,142	,10,139	,15,141	,25,297			],
["�Ϗ�",	139,1,		,-20,138	,-10,137	,10,134	,15,136	,25,296			],
["�̗�",	96,1,	,-20,26	,-15,25	,-10,24	,10,21	,15,22	,20,23	,30,291	,40,292	],
["��",	100,,				,10,33					],
["��L�扻",	,,									],
["�e����",	151,,				,10,172					],
["�n�}",	142,,				,10,147					],
["���o�ی�",	129,1,				,10,92	,15,93	,25,288			],
["����������",	150,1,			,-10,170	,10,167	,15,168	,20,169			],
["�ʏ�e����",	114,,				,10,54					],
["�ʏ�e�ǉ�",	117,,					,15,58				],
["�ނ�",	147,,				,10,162					],
["------",	,,									],
["------",	,,									],
["------",	,,									],
["����",	109,,				,10,45					],
["�����t",	104,1,			,-10,39	,10,38	,20,398				],
["��",	92,1,			,-10,12	,10,10	,20,11				],
["����U��",	122,,				,10,71					],
["��",	,,									],
["���ݖ���",	130,,				,10,94					],
["���e����",	123,,				,10,72					],
["�͂�ւ�",	124,1,		,-15,76	,-10,75	,10,73	,15,74				],
["����",	113,1,				,10,52	,15,53	,20,482			],
["�Αϐ�",	134,1,	,-20,109	,-15,108	,-10,107	,10,104	,15,105	,20,106			],
["����",	141,1,				,10,144	,15,145	,20,146	,30,349		],
["�J",	,,									],
["�h��",	127,1,	,-20,87	,-15,86	,-10,85	,10,82	,15,83	,25,84	,35,294	,45,295	],
["���",	89,1,			,-10,3	,10,1	,20,2				],
["���ϐ�",	135,1,	,-20,115	,-15,114	,-10,113	,10,110	,15,111	,20,112			],
["���ϐ�",	138,1,	,-20,133	,-15,132	,-10,131	,10,128	,15,129	,20,130			],
["�֒e�ǉ�",	120,,				,10,65	,15,66	,20,67			],
["�B���p",	152,,				,10,173					],
["�A��",	112,,				,10,51					],
["�������W",	144,,				,10,153					],
["��𐫔\",	154,1,				,10,177	,20,178				],
["���",	155,,			,-15,181	,10,179	,15,180	,21,179	,30,181		],
["���ʎ���",	156,,			,-10,183	,10,182					],
["�X�^�~�i",	157,1,			,-10,185	,10,184	,20,289				],
["���U��",	158,,				,10,186					],
["�����ˌ�",	159,1,			,-10,188	,10,187	,20,290				],
["�����X�^�[",	160,,				,10,189					],
["�H��",	161,,			,-10,191	,10,190					],
["�������",	162,,				,15,192					],
["�n�`",	163,1,		,-15,196	,-10,195	,10,193	,15,194				],
["�E�L",	93,,				,10,14					],
["�ϐ�",	94,,				,10,17					],
["�X�ϐ�",	136,1,	,-20,121	,-15,120	,-10,119	,10,116	,15,117	,20,118			],
["�ϐk",	164,1,				,15,197	,25,350				],
["�L��",	131,1,			,-10,385	,10,95	,20,96	,30,384			],
["����",	165,1,				,10,198	,15,199				],
["���Ă�",	166,1,			,-10,202	,10,200	,15,201				],
["�C�p�t",	167,1,				,10,203	,20,298	,35,299			],
["------",	168,,				,10,206	,15,205	,25,204			],
["------",	169,,			,-10,210	,10,209	,15,208	,25,207			],
["------",	170,,				,10,211					],
["�J�������l",	171,,				,10,212					],
["------",	172,,				,10,213					],
["------",	173,,				,10,215	,15,214				],
["------",	174,,				,10,216					],
["------",	175,,				,10,217					],
["�Ƃ񂸂�",	176,,				,10,218					],
["�̏p",	177,1,				,10,219	,20,359				],
["����",	178,1,				,10,220	,20,360				],
["------",	179,,				,10,221					],
["�Ђ�߂�",	180,,				,10,222					],
["�󂯐g",	181,,				,10,223					],
["------",	182,,				,10,224					],
["------",	183,,				,10,225					],
["------",	184,,				,10,226					],
["------",	185,,				,10,227					],
["�J",	186,,				,10,228					],
["------",	187,,				,10,229					],
["����",	82,1,				,10,230	,20,231	,30,232			],
["------",	188,,				,10,233					],
["����",	189,1,				,10,234	,20,300				],
["�ߊl���",	190,1,				,10,235	,20,301				],
["------",	191,,				,10,236					],
["------",	192,,				,10,237					],
["�ŕr�ǉ�",	193,,				,10,238					],
["��ვr�ǉ�",	194,,				,10,239					],
["�����r�ǉ�",	195,,				,10,240					],
["�Α����U��",	196,1,				,10,241	,20,242				],
["�������U��",	197,1,				,10,243	,20,244				],
["�������U��",	198,1,				,10,245	,20,246				],
["�X�����U��",	199,1,				,10,247	,20,248				],
["�������U��",	200,1,				,10,249	,20,250				],
["�f�H",	201,,				,10,251		,20,252			],
["----",	202,,				,10,253					],
["������",	203,1,				,10,254	,15,255	,20,256			],
["������",	204,,				,10,257	,15,258	,20,259			],
["�ғŌ�",	205,1,				,10,260	,15,261	,20,262			],
["��჌�",	206,1,				,10,263	,15,264	,20,265			],
["������",	207,1,				,10,266	,15,267	,20,268			],
["�Ή���",	208,1,				,10,269	,15,270	,20,271			],
["������",	209,1,				,10,272	,15,273	,20,274			],
["���_��",	210,1,				,10,278	,15,279	,20,280			],
["�X����",	211,1,				,10,275	,15,276	,20,277			],
["������",	212,1,				,10,281	,15,282	,20,283			],
["���ߒZ�k",	213,1,			,-10,304	,10,303	,20,302				],
["�Ў茕�Z",	1,,2			,-10,308	,10,307	,20,306	,30,305			],
["�o���Z",	2,,2			,-10,312	,10,311	,20,310	,30,309			],
["�匕�Z",	3,,2			,-10,316	,10,315	,20,314	,30,313			],
["�����Z",	4,,2			,-10,320	,10,319	,20,318	,30,317			],
["�ȋZ",	5,,2			,-10,324	,10,323	,20,322	,30,321			],
["��J�Z",	6,,2			,-10,328	,10,327	,20,326	,30,325			],
["���Z",	7,,2			,-10,332	,10,331	,20,330	,30,329			],
["�e���Z",	8,,2			,-10,336	,10,335	,20,334	,30,333			],
["�d�e�Z",	12,,2			,-10,340	,10,339	,20,338	,30,337			],
["�y�e�Z",	13,,2			,-10,344	,10,343	,20,342	,30,341			],
["�|�Z",	14,,2			,-10,348	,10,347	,20,346	,30,345			],
["�����ݒu",	83,1,				,10,351	,20,352				],
["����J��",	79,,				,10,353					],
["�����U��",	80,,			,-10,355	,10,354					],
["�C�͉�",	81,1,			,-10,358	,10,357	,20,356				],
["�i�C�t�g��",	86,1,				,10,361	,20,362				],
["�������",	87,,				,10,363	,15,364	,25,365			],
["�Ζh��DOWN",	88,,				,10,366					],
["���p",	85,1,				,10,367	,20,368				],
["�Ϗ�Ԉُ�",	84,1,			,-10,371	,10,369	,20,370	,30,491			],
["�ϐ�",	51,,1			,-10,387	,10,386					],
["�����ϐ�",	53,,1			,-10,389	,10,388					],
["���͑ϐ�",	54,,1			,-10,391	,10,390					],
["�x��",	41,,1				,10,392					],
["�~��",	49,,1				,10,393					],
["�K�オ��",	39,,1				,15,394					],
["��C�T",	40,,1				,10,395					],
["�O�E�̌��",	30,,1				,10,399	,15,400	,20,401			],
["����",	31,,1				,10,402	,15,403	,20,404	,16384,518		],
["�㏞",	28,,1				,10,396					],
["����",	25,,1				,10,405	,15,406	,20,407			],
["����",	29,,1				,15,397					],
["����",	16,,1			,10,408	,15,409	,20,410	,30,411	,40,412	,50,524	],
["�ە�",	33,,1				,10,413	,20,414	,16384,517			],
["����",	23,,1				,10,415	,20,416	,30,417			],
["������",	42,,1			,-10,421	,10,418	,15,419	,30,420			],
["�{",	45,,1				,15,422	,20,423				],
["�S�r",	46,,1				,10,424	,20,425				],
["�u���[�_�[",	47,,1				,10,426					],
["������",	78,,				,10,427	,20,428				],
["��M",	17,,1				,10,429	,20,430	,30,431			],
["�t��",	48,,1				,10,432	,20,433				],
["�ˎ�",	34,,1				,15,434	,20,526				],
["����",	35,,1				,10,435	,15,436	,20,437			],
["�Ɍ�",	19,,1			,-10,440	,15,439					],
["�����t",	38,,1			,-10,444	,10,441	,15,442	,20,443			],
["��l",	50,,				,10,445	,20,446				],
["���",	26,,1				,10,447	,15,448	,20,449			],
["�A��(�폜)",	,,									],
["�������",	56,,1				,10,457					],
["���߈З�",	57,,1				,10,455	,20,456				],
["�e�ېߖ�p",	58,,1				,10,453	,20,454				],
["�ړ����x",	59,,1				,10,451	,20,452				],
["��",	60,,1			,-10,459	,10,458					],
["�z��",	61,,1				,10,460	,20,461				],
["�K����",	62,,				,10,462	,20,463				],
["���m����",	65,,1				,20,464					],
["�򑐊w",	66,,1				,10,465					],
["�������Z",	10,,2			,-10,469	,10,468	,20,467	,30,466			],
["����",	67,,				,10,471					],
["����",	68,,1				,10,472	,15,473				],
["�����̐S��",	70,,1				,10,474					],
["��Ζh��",	74,,						,20,475			],
["����S",	77,1,			,-10,478	,10,477	,15,476				],
["�̏W�̋ɂ�",	,,									],
["�I��",	73,,1				,15,480					],
["�x��",	75,,				,10,481					],
["����",	36,,1				,10,483	,15,484	,20,485			],
["����",	20,,1			,-10,487	,10,486					],
["���e",	76,,				,10,488					],
["���C����",	64,,				,10,489					],
["���_",	24,,1				,10,492	,20,493	,25,525			],
["�Z��",	21,,1				,10,494					],
["�ό�",	71,,				,10,495					],
["���[�p",	32,,1				,10,496	,15,497				],
["���j�ϐ�",	52,,				,10,498					],
["�M�]",	102,,1				,10,499					],
["�s��",	15,,1				,10,501					],
["�I��",	72,,1				,15,502					],
["�����ϐ�",	55,,				,10,503					],
["�X�E�n��",	63,,				,10,504					],
["�Ҍ�",	98,,1				,10,505					],
["�����Z",	9,,2			,-10,509	,10,508	,20,507	,30,506			],
["�v��",	106,,1				,10,511	,15,512				],
["�_��",	111,,1				,10,513					],
["����",	105,,1				,10,514					],
["�����",	153,,					,15,515				],
["�Ґi",	22,,1				,10,516					],
["�r����",	43,,1				,15,519					],
["����",	103,,1				,10,520					],
["��_�˔j",	27,,1				,10,521					],
["����",	69,,1				,15,522					],
["��",	37,,1				,10,523					],
["���",	44,,				,10,527	,15,528				],
["���q���v",	18,,				,10,529					],
["���a�ȋZ",	11,,2			,-10,533	,10,532	,20,531	,30,530			]
];
MST_Skill[""] = [""];
MST_Skill["-"] = [""];
var MST_Skill_Exe = [
"�X�L������","��ე���","��ზ���","��ე{��","��������","��������","�����{��","�C��m������","�C�△��","�C��{��","�Ŕ���","�Ŗ���","�Ŕ{��","�E�L","�E�L","------","�ϐ�","�ϐ�","------","�B��","����","�̗�+10","�̗�+20","�̗�+30","�̗�-10","�̗�-20","�̗�-30","�_���[�W�񕜑��x+1","�_���[�W�񕜑��x+2","�_���[�W�񕜑��x-1","�_���[�W�񕜑��x-2","�ƕ�+1","�Ȃ܂���","�a�ꖡ���x��+1","------","���؂�+1","���؂�+2","���؂�+3","�u�Ύg�p������","�u�ΐ��\����","�K�[�h���\+1","�K�[�h���\+2","�K�[�h���\-1","�K�[�h���\-2","�I�[�g�K�[�h","�����Z�pUP","���U���x+1","���U���x+2","���U���x+3","���U���x-1","------","�A��","�����y��+1","�����y��+2","�ʏ�e�E�A�˖�З�UP","�ђʒe�E�ђʖ�З�UP","�U�e�E�g�U��З�UP","�ʏ�e�k�u�P�ǉ�","�ʏ�e�S���x���ǉ�","�ђʒe�k�u�P�ǉ�","�ђʒe�k�u1&2�ǉ�","�ђʒe�S���x���ǉ�","�U�e�k�u�P�ǉ�","�U�e�k�u1&2�ǉ�","�U�e�S���x���ǉ�","�O�b�֒e�k�u�P�ǉ�","�O�b�֒e�k�u1&2�ǉ�","�O�b�֒e�S���x���ǉ�","�g�U�e�k�u�P�ǉ�","�g�U�e�k�u1&2�ǉ�","�g�U�e�S���x���ǉ�","��Ԉُ�U������","�{�}�[","�͂�ւ蔼��","�͂�ւ薳��","�͂�ւ�{���y���z","�͂�ւ�{���y��z","�܂�Ղ�","�E���H��","�U����UP�y���z","�U����UP�y���z","�U����UP�y��z","�h��+20","�h��+30","�h��+60","�h��-20","�h��-30","�h��-40","���_�̎͂�","���_�̕��i","���_�̍ق�","���_�̕��i","����","��������","���ݖ���","�L�扻+1","�L�扻+2","�^���̒B�l","�e�ϐ�+5","�e�ϐ�+10","�e�ϐ�+20","�e�ϐ�-5","�e�ϐ�-10","�e�ϐ�-20","�Αϐ�+10","�Αϐ�+20","�Αϐ�+30","�Αϐ�-10","�Αϐ�-20","�Αϐ�-30","���ϐ�+10","���ϐ�+20","���ϐ�+30","���ϐ�-10","���ϐ�-20","���ϐ�-30","�X�ϐ�+10","�X�ϐ�+20","�X�ϐ�+30","�X�ϐ�-10","�X�ϐ�-20","�X�ϐ�-30","���ϐ�+10","���ϐ�+20","���ϐ�+30","���ϐ�-10","���ϐ�-20","���ϐ�-30","���ϐ�+10","���ϐ�+20","���ϐ�+30","���ϐ�-10","���ϐ�-20","���ϐ�-30","��������","��������","��������","�����{���y���z","�����{���y��z","��������","��������","��������","�����{���y���z","�����{���y��z","�����y���z����","�����y��z����","����������","�n�}���","------","�̎�+1","�̎�+2","�̎�-1","�̎�-2","����������聕�̎�","����̋C�܂���","�_�̋C�܂���","����̋C�܂���","�����̋C�܂���","�K�^","���^","�s�^","�Г�","�ނ薼�l","�T�m","�����}�[�L���O","�̗͉񕜃A�C�e������","�̗͉񕜃A�C�e���㉻","����������+10%","����������+15%","����������+30%","����������-5%","����������-15%","�ő吔�e���Y","�B���p","------","------","------","��𐫔\+1","��𐫔\+2","�Ύ����+1","�Ύ����+2","�S�z��","�A�C�e���g�p����","�A�C�e���g�p�㉻","�����i�[","�ݑ�","���U��UP","�ԂꕝDOWN","�ԂꕝUP","�ł����̗����I","���H��","�X���[���C�t","������薼�l","�n�`�_���[�W���y���z","�n�`�_���[�W���y��z","�n�`�_���[�W���y���z","�n�`�_���[�W���y��z","�ϐk+1","���і�დŔ���","���і�დŖ���","�Ă����l","�Ă��t��","���́E�Ă����l","�C�p�t","------","------","------","------","------","------","------","------","�J�������l","------","------","------","------","------","�Ƃ񂸂�","�̏p","����+1","------","�Ђ�߂�","�󂯐g","------","------","------","------","�J","------","����","�h����","�^����","------","���́y���z","�ߊl���","------","------","�Ńr���ǉ�","��Ⴣr���ǉ�","�����r���ǉ�","�Α����U�������y���z","�Α����U�������y��z","�������U�������y���z","�������U�������y��z","�������U�������y���z","�������U�������y��z","�X�����U�������y���z","�X�����U�������y��z","�������U�������y���z","�������U�������y��z","��T+1","��T+2","--------","������+1","������+2","������+3","������+1","������+2","������+3","�ғŌ�+1","�ғŌ�+2","�ғŌ�+3","��჌�+1","��჌�+2","��჌�+3","������+1","������+2","������+3","�Ή���+1","�Ή���+2","�Ή���+3","������+1","������+2","������+3","�X����+1","�X����+2","�X����+3","���_��+1","���_��+2","���_��+3","������+1","������+2","������+3","���؂�+4","���؂�+5","�U����UP�y����z","�U����UP�y���z","����������","���","�_������","�̗�+40","�̗�+50","�ƕ�+2","�h��+90","�h��+120","�Ēj�ď�","�~���R","�C�p��","�C�p�_","���́y��z","�ߊl���l","�W��+2","�W��+1","�G�O","�Ў茕�Z�y�����z","�Ў茕�Z�y�F�`�z","�Ў茕�Z�y�B�l�z","�Ў茕�Z�y���n�z","�o���Z�y�o���z","�o���Z�y�F�`�z","�o���Z�y�B�l�z","�o���Z�y���n�z","�匕�Z�y�����z","�匕�Z�y�F�`�z","�匕�Z�y�B�l�z","�匕�Z�y���n�z","�����Z�y���_�z","�����Z�y�F�`�z","�����Z�y�B�l�z","�����Z�y���n�z","�ȋZ�y�݊�b�z","�ȋZ�y�F�`�z","�ȋZ�y�B�l�z","�ȋZ�y���n�z","��J�Z�y�t��z","��J�Z�y�F�`�z","��J�Z�y�B�l�z","��J�Z�y���n�z","���Z�y�V���z","���Z�y�F�`�z","���Z�y�B�l�z","���Z�y���n�z","�e���Z�y�C�c�z","�e���Z�y�F�`�z","�e���Z�y�B�l�z","�e���Z�y���n�z","�d�e�Z�y�e��z","�d�e�Z�y�F�`�z","�d�e�Z�y�B�l�z","�d�e�Z�y���n�z","�y�e�Z�y�e���z","�y�e�Z�y�F�`�z","�y�e�Z�y�B�l�z","�y�e�Z�y���n�z","�|�Z�y�|�S�z","�|�Z�y�F�`�z","�|�Z�y�B�l�z","�|�Z�y���n�z","�\��������","�ϐk+2","㩎t","㩏�","����J��","�����U������","�����U���㉻","�X�^�~�i�}���񕜁y��z","�X�^�~�i�}���񕜁y���z","�X�^�~�i�񕜒x��","�i����","����+2","�X���[�C���O�i�C�t+1","�X���[�C���O�i�C�t+2","�������+1","�������+2","�������+3","�S�ʔ�","���p+1","���p+2","��Ԉُ피��","��Ԉُ햳��","��Ԉُ�{��","�Ў茕�Z�y�匕���z","�o���Z�y��o���z","�匕�Z�y�匕���z","�����Z�y�品�_�z","�ȋZ�y��݊�b�z","��J�Z�y��t��z","���Z�y��V���z","�e���Z�y��C�c�z","�d�e�Z�y��e��z","�y�e�Z�y��e���z","�|�Z�y��|�S�z","�󂯐g+1","�L�扻+3","�L�扻-1","����","��������","�����ϐ�","������_","���͑ϐ�","���͎�_","�x��","�~��","�K�オ��","��C�T","�㏞","����","�u��","����+1","����+2","����+3","����+1","����+2","����+3","�^��+1","�^��+2","�^��+3","����+1","����+2","����+3","����+4","����+5","����+1","����+2","����+1","����+2","����+3","������+1","������+2","������+3","������-1","�t��","�u�`�M��","�S�r+1","�S�r+2","�u���[�_�[","�����Ԃ�+1","�����Ԃ�+2","��M+1","��M+2","��M+3","�s��","�s���s��","���e+1","����+1","����+2","����+3","�Ɍ�","��_����","��_���","�����t+1","�����t+2","�����t+3","�����t-1","�n���^�[����","�n���^�[���i","���+1","���+2","���+3","��𐫔\+3","�ړ����xUP+1","�ړ����xUP+2","�ߖ񖼐l","�ߖ�B�l","���߈З�UP+1","���߈З�UP+2","�������UP","�ԍ�","��","�z��+1","�z��+2","�K����+1","�K����+2","�Ŋ��m�M��","���l","�������Z�y�����z","�������Z�y�F�`�z","�������Z�y�B�l�z","�������Z�y���n�z","�������Z�y������z","����","�g���̈Ќ�+1","�g���̈Ќ�+2","�����戵�F�`","��Ζh��Ԑ�","�Ր΂̍\��","���S�̔���","���f��G","�̏W�̋ɂ�","�I��","�x��","�����y��+3","����+1","����+2","����+3","��������","��������","���e","���C����","���C����+2","��Ԉُ햳���y����z","���_+1","���_+2","�Z��","��Ԉُ�ǌ�","���[�p+1","���[�p+2","���j�ϐ�","�M�]","�M�]","�s�ރm�\","�I��","�����ϐ�","�X�E�n��","�������","�����Z�y�a���z","�����Z�y�F�`�z","�����Z�y�B�l�z","�����Z�y���n�z","�����Z�y��a���z","�v��+1","�v��+2","�_��","����","�����","�Ґi","����+2","����+3","�r����","����","��_�˔j","����","��","����+6","���_+3","���e+2","���+1","���+2","���q���v","���a�ȋZ�y�����z","���a�ȋZ�y�F�`�z","���a�ȋZ�y�B�l�z","���a�ȋZ�y���n�z","���a�ȋZ�y�厥���z"
];
//�֐�
//�����p�쐬�^�C�v�w��
var setRep = function (w){
	var d = w.c_color.checked ? "#" : "",
		t = "";
	if (!w.c_rep1.style.backgroundColor) t += "1-" + d;	//�C�x���g
	if (!w.c_repe.style.backgroundColor) t += "1e" + d;	//�C�x���g
	if (!w.c_repc.style.backgroundColor) t += "1c" + d;	//�p�l�[��
	if (!w.c_reps.style.backgroundColor) t += "1s" + d;	//��q
	if (!w.c_reps.style.backgroundColor && !w.c_repe.style.backgroundColor) t += "1es" + d;	//�C�x���g+��q
	if (!w.c_repi.style.backgroundColor) t += "1i" + d;	//��ʓV
	if (!w.c_rept.style.backgroundColor) t += "1t" + d;	//�����
	if (!w.c_rep2.style.backgroundColor) t += "2-" + d;	//�c
	if (!w.c_rep3.style.backgroundColor) {
		t += "3-" + d;
		if (!w.c_repe.style.backgroundColor) t += "3e" + d;
		if (!w.c_repg.style.backgroundColor) t += "3g" + d;
		if (!w.c_repi.style.backgroundColor) t += "3i" + d;
	}
	if (!w.c_repm.style.backgroundColor) t += "2m" + d;	//��l��
	if (!w.c_repu.style.backgroundColor) t += "2u" + d;	//�c�}����
	if (!w.c_repg.style.backgroundColor) t += "4g" + d;	//�K�`��
	if (!w.c_repk.style.backgroundColor) t += "4k" + d;	//�L�b�g
	if (!w.c_rep5.style.backgroundColor) t += "5-" + d;	//���T
	if (!w.c_repp.style.backgroundColor) t += "5p" + d;	//�p�b�P
	return t;
};
//���Y�����f��
var getSozai = function (eq){
	if (eq[I_bLVUPPTN]) {
		var list = MST_Equip.sozai[parseInt(eq[I_bLVUPPTN],16)].split(",");
		//���Y�̏ꍇ�̑f�ނ�ύX
		if (eq[I_bRECIPE1]) list[0] = eq[I_bRECIPE1];
		//HR����
		list[7+0] = eq[I_bHR1];
		for (var i = 0;i < 6 && +list[7+i+1] < +list[7+i]; list[7+i+1] = list[7+i],i++); //1�悪�������ꍇ����ւ�
		return list;
	} else { //�����i
		return [eq[I_bRECIPE1],"","","","","","",eq[I_bHR1],"","","","","",""];
	}
};
//���Y�����[�j�[
var getZeny = function (eq){
	if (eq[I_bLVUPPTN]) {
		var zeny = +eq[I_bZENY],ptncd = eq[I_bZENYPTN],ptn = MST_Equip.zeny[parseInt(ptncd,16)].split(",");
		var list = [zeny];
		for (var i = 1;i < 7; i++) {
			//'�����炩�Ȃ��Ȃ���
			//if (zeny === 0 ||
			//	ptn[i] % 25 === 0 || 
			//	ptn[i] === "280" || ptn[i] === "180" || ptn[i] === "8" || ptn[i] === "115" || ptn[i] === "220" ||
			//	(ptncd === "04" && ptn[i] === "10" && (zeny === 10875 || zeny === 1125)) ||
			//	(ptncd === "05" && ptn[i] === "420" && (zeny === 1000 || zeny === 1100 || zeny === 1200 || zeny === 4100 || zeny === 8000 || zeny === 8800)) ||
			//	(ptncd === "08" && (ptn[i] === "5" || ptn[i] === "15") && (zeny === 17250 || zeny === 21250))) {
				list[i] = zeny * ptn[i] / 100|0;
			//} else {
			//	list[i] = (zeny * ptn[i] / 100|0) - 1;
			//}
		}
		//���Y�̏ꍇ�̔��z��
		if (eq[I_bRECIPE1] && eq[I_bRECIPE1].indexOf("�X����") === -1) list[0] = zeny / 2|0;
		return list;
	} else { //�����i
		return [eq[I_bZENY],"","","","","",""];
	}
};
//�h��v�Z
var getDef = function (eq){
	if (eq[I_bLVUPPTN]) {
		var def = +eq[I_bDEF],ptncd = eq[I_bDEFPTN],ptn = MST_Equip.def[parseInt(ptncd,16)].split(",");
		var list = [def];
		for (var i = 1;i < 7; i++) {
			if (ptn[i] === "100" ||
				ptncd === "05" && ptn[i] === "102" && def === 51 ||
				(ptn[i] * def) % 100 === 0 &&
				!(ptn[i] === "120" && (def === 25 || def === 45 || def === 50 || def === 90 || def === 100)) &&
				!(ptn[i] === "108" && (def === 25))) {
				def = def * ptn[i] / 100|0;
			} else {
				def = (def * ptn[i] / 100|0) + 1;
			}
			list[i] = def;
		}
		return list;
	} else { //�����i
		return ["","","","","","",""];
	}
};
//�X���b�g�v�Z
var getSlot = function (eq){
	if (eq[I_bLVUPPTN]) {
		var slot = +eq[I_bSLOT1],slotmax = +eq[I_bSLOT7],ptn = MST_Equip.slot[parseInt(eq[I_bSLOTPTN],16)].split(",");
		var list = [slot + +ptn[0],slot + +ptn[1],slot + +ptn[2],slot + +ptn[3],slot + +ptn[4],slot + +ptn[5],slot + +ptn[6]];
		for (var i = 0;i < 7; i++) {
			if (list[i] >= slotmax) list[i] = slotmax;
		}
		return list;
	} else { //�����i
		return [+eq[I_bSLOT7],"","","","","",""];
	}
};

//�����i���O����
var cngDecName = function (name,type){
	switch (type) {
	case "":  //�����i
		name = name.replace("��","");
		break;
	case "1": //�J�t
		name = name.replace("�J�t","");
		break;
	case "2": //�V����
	case "3": //�V����
		name = name.replace("�̈�","");
		break;
	}
	return name.replace(/[�`-�y�O-�X]/g, function(s) {
	    return String.fromCharCode(s.charCodeAt(0) - 65248);
	});
}

var global = {
//------------------------------------������----------
Init : function(){
//����
this.c_sex = document.getElementById("c_sex");
this.c_type = document.getElementById("c_type");
this.c_rui = document.getElementById("c_rui");
this.c_series = document.getElementById("c_series");
this.c_skill1 = document.getElementById("c_skill1");
this.c_skill2 = document.getElementById("c_skill2");
this.c_skill3 = document.getElementById("c_skill3");
this.c_teni = document.getElementById("c_teni");
this.c_andor = document.getElementById("c_andor");
this.c_rare = document.getElementById("c_rare");
this.c_rep1 = document.getElementById("c_rep1");
this.c_rep2 = document.getElementById("c_rep2");
this.c_rep3 = document.getElementById("c_rep3");
this.c_rep5 = document.getElementById("c_rep5");
this.c_repi = document.getElementById("c_repi");
this.c_repe = document.getElementById("c_repe");
this.c_repg = document.getElementById("c_repg");
this.c_repk = document.getElementById("c_repk");
this.c_repp = document.getElementById("c_repp");
this.c_repm = document.getElementById("c_repm");
this.c_repc = document.getElementById("c_repc");
this.c_reps = document.getElementById("c_reps");
this.c_rept = document.getElementById("c_rept");
this.c_repu = document.getElementById("c_repu");

this.c_slot = document.getElementById("c_slot");
this.c_minus = document.getElementById("c_minus");
this.c_color = document.getElementById("c_color");
this.c_upg = document.getElementById("c_upg");
this.c_hr = document.getElementById("c_hr");
this.c_cuff_lm = document.getElementById("c_cuff_lm");

this.c_series_data = this.c_skill1_data = this.c_skill2_data = this.c_skill3_data = "";

//�h��
this.b_cuff = document.getElementById("b_cuff");
this.b_buki = document.getElementById("b_buki");
this.b_head = document.getElementById("b_head");
this.b_body = document.getElementById("b_body");
this.b_arm = document.getElementById("b_arm");
this.b_wst = document.getElementById("b_wst");
this.b_leg = document.getElementById("b_leg");
this.b_cuff_list = document.getElementById("b_cuff_list");
this.b_buki_list = document.getElementById("b_buki_list");
this.b_head_list = document.getElementById("b_head_list");
this.b_body_list = document.getElementById("b_body_list");
this.b_arm_list = document.getElementById("b_arm_list");
this.b_wst_list = document.getElementById("b_wst_list");
this.b_leg_list = document.getElementById("b_leg_list");
this.b_cuffDel = document.getElementById("b_cuffDel");
this.b_bukiDel = document.getElementById("b_bukiDel");
this.b_headDel = document.getElementById("b_headDel");
this.b_bodyDel = document.getElementById("b_bodyDel");
this.b_armDel = document.getElementById("b_armDel");
this.b_wstDel = document.getElementById("b_wstDel");
this.b_legDel = document.getElementById("b_legDel");
this.b_bukiLv = document.getElementById("b_bukiLv");
this.b_cuffLv = document.getElementById("b_cuffLv");
this.b_headLv = document.getElementById("b_headLv");
this.b_bodyLv = document.getElementById("b_bodyLv");
this.b_armLv = document.getElementById("b_armLv");
this.b_wstLv = document.getElementById("b_wstLv");
this.b_legLv = document.getElementById("b_legLv");
for (var i = 1; i < 4; i++){
	this["b_cuffS"+i] = document.getElementById("b_cuffS"+i);
	this["b_bukiS"+i] = document.getElementById("b_bukiS"+i);
	this["b_headS"+i] = document.getElementById("b_headS"+i);
	this["b_bodyS"+i] = document.getElementById("b_bodyS"+i);
	this["b_armS"+i] = document.getElementById("b_armS"+i);
	this["b_wstS"+i] = document.getElementById("b_wstS"+i);
	this["b_legS"+i] = document.getElementById("b_legS"+i);
	this["b_headT"+i] = document.getElementById("b_headT"+i);
	this["b_bodyT"+i] = document.getElementById("b_bodyT"+i);
	this["b_armT"+i] = document.getElementById("b_armT"+i);
	this["b_wstT"+i] = document.getElementById("b_wstT"+i);
	this["b_legT"+i] = document.getElementById("b_legT"+i);
	this["b_cuffS"+i+"_data"] = this["b_bukiS"+i+"_data"] = this["b_headS"+i+"_data"] = this["b_bodyS"+i+"_data"] = this["b_armS"+i+"_data"] = this["b_wstS"+i+"_data"] = this["b_legS"+i+"_data"] = 
															this["b_headT"+i+"_data"] = this["b_bodyT"+i+"_data"] = this["b_armT"+i+"_data"] = this["b_wstT"+i+"_data"] = this["b_legT"+i+"_data"] = "O";
}
this.b_cuffS3_data = ""; //�J�t�̂R�Ԗڂ͂Ȃ�
this.b_head.selectedIndex = this.b_body.selectedIndex = this.b_arm.selectedIndex = this.b_wst.selectedIndex = this.b_leg.selectedIndex = this.b_headLv.selectedIndex = this.b_bodyLv.selectedIndex = this.b_armLv.selectedIndex = this.b_wstLv.selectedIndex = this.b_legLv.selectedIndex = 0;
for (var i = 1; i < 6; i++){
	this["b_headSn"+i] = document.getElementById("b_headSn"+i);
	this["b_bodySn"+i] = document.getElementById("b_bodySn"+i);
	this["b_armSn"+i] = document.getElementById("b_armSn"+i);
	this["b_wstSn"+i] = document.getElementById("b_wstSn"+i);
	this["b_legSn"+i] = document.getElementById("b_legSn"+i);
	this["b_headSp"+i] = document.getElementById("b_headSp"+i);
	this["b_bodySp"+i] = document.getElementById("b_bodySp"+i);
	this["b_armSp"+i] = document.getElementById("b_armSp"+i);
	this["b_wstSp"+i] = document.getElementById("b_wstSp"+i);
	this["b_legSp"+i] = document.getElementById("b_legSp"+i);
}
this.b_headDef = document.getElementById("b_headDef");
this.b_bodyDef = document.getElementById("b_bodyDef");
this.b_armDef  = document.getElementById("b_armDef");
this.b_wstDef  = document.getElementById("b_wstDef");
this.b_legDef  = document.getElementById("b_legDef");
this.b_headGR = 1;
this.b_bodyGR = 1;
this.b_armGR  = 1;
this.b_wstGR  = 1;
this.b_legGR  = 1;
this.b_Def_Sum   = document.getElementById("b_Def_Sum");
this.b_headFp = document.getElementById("b_headFp");
this.b_bodyFp = document.getElementById("b_bodyFp");
this.b_armFp  = document.getElementById("b_armFp");
this.b_wstFp  = document.getElementById("b_wstFp");
this.b_legFp  = document.getElementById("b_legFp");
this.b_Fp_Sum   = document.getElementById("b_Fp_Sum");
this.b_headWp = document.getElementById("b_headWp");
this.b_bodyWp = document.getElementById("b_bodyWp");
this.b_armWp  = document.getElementById("b_armWp");
this.b_wstWp  = document.getElementById("b_wstWp");
this.b_legWp  = document.getElementById("b_legWp");
this.b_Wp_Sum   = document.getElementById("b_Wp_Sum");
this.b_headTp = document.getElementById("b_headTp");
this.b_bodyTp = document.getElementById("b_bodyTp");
this.b_armTp  = document.getElementById("b_armTp");
this.b_wstTp  = document.getElementById("b_wstTp");
this.b_legTp  = document.getElementById("b_legTp");
this.b_Tp_Sum   = document.getElementById("b_Tp_Sum");
this.b_headIp = document.getElementById("b_headIp");
this.b_bodyIp = document.getElementById("b_bodyIp");
this.b_armIp  = document.getElementById("b_armIp");
this.b_wstIp  = document.getElementById("b_wstIp");
this.b_legIp  = document.getElementById("b_legIp");
this.b_Ip_Sum   = document.getElementById("b_Ip_Sum");
this.b_headDp = document.getElementById("b_headDp");
this.b_bodyDp = document.getElementById("b_bodyDp");
this.b_armDp  = document.getElementById("b_armDp");
this.b_wstDp  = document.getElementById("b_wstDp");
this.b_legDp  = document.getElementById("b_legDp");
this.b_Dp_Sum   = document.getElementById("b_Dp_Sum");
this.b_skillP = document.getElementById("b_skillP");
this.b_skillT = document.getElementById("b_skillT");
this.b_skill = document.getElementById("b_skill");
this.b_effectT = document.getElementById("b_effectT");

this.d_mei = document.getElementById("d_mei");
this.d_doc = document.getElementById("d_doc");
this.d_Fp = document.getElementById("d_Fp");
this.d_Wp = document.getElementById("d_Wp");
this.d_Tp = document.getElementById("d_Tp");
this.d_Ip = document.getElementById("d_Ip");
this.d_Dp = document.getElementById("d_Dp");
this.d_type = document.getElementById("d_type");
this.d_sex = document.getElementById("d_sex");
this.d_rep1 = document.getElementById("d_rep1");
this.d_rep2 = document.getElementById("d_rep2");
this.d_rui = document.getElementById("d_rui");
for (var i = 1; i < 6; i++){
	this["d_sn"+i] = document.getElementById("d_sn"+i);
	this["d_sp"+i] = document.getElementById("d_sp"+i);
}
this.d_MF = document.getElementById("d_MF");
this.d_MB = document.getElementById("d_MB");
this.d_FF = document.getElementById("d_FF");
this.d_FB = document.getElementById("d_FB");
this.d_lv = [];
this.d_def = [];
this.d_zeny = [];
this.d_sozai = [];
for (var i = 1; i < 8; i++) {
	this.d_lv[i] = document.getElementById("d_lv"+i);
	this.d_def[i] = document.getElementById("d_def"+i);
	this.d_zeny[i] = document.getElementById("d_zeny"+i);
	this.d_sozai[i] = document.getElementById("d_sozai"+i);
}
this.d_zenyAll = document.getElementById("d_zenyA");
this.d_sozaiAll = document.getElementById("d_sozaiA");
//��������
this.s_headCK = document.getElementById("s_headCK");
this.s_headZK = document.getElementById("s_headZK");
this.s_headYA = document.getElementById("s_headYA");
this.s_head = document.getElementById("s_head");
this.s_bodyCK = document.getElementById("s_bodyCK");
this.s_bodyZK = document.getElementById("s_bodyZK");
this.s_bodyYA = document.getElementById("s_bodyYA");
this.s_body = document.getElementById("s_body");
this.s_armCK = document.getElementById("s_armCK");
this.s_armZK = document.getElementById("s_armZK");
this.s_armYA = document.getElementById("s_armYA");
this.s_arm = document.getElementById("s_arm");
this.s_wstCK = document.getElementById("s_wstCK");
this.s_wstZK = document.getElementById("s_wstZK");
this.s_wstYA = document.getElementById("s_wstYA");
this.s_wst = document.getElementById("s_wst");
this.s_legCK = document.getElementById("s_legCK");
this.s_legZK = document.getElementById("s_legZK");
this.s_legYA = document.getElementById("s_legYA");
this.s_leg = document.getElementById("s_leg");
this.s_decoCK = document.getElementById("s_decoCK");
this.s_decoZK = document.getElementById("s_decoZK");
this.s_decoYA = document.getElementById("s_decoYA");
this.s_deco = document.getElementById("s_deco");
//this.s_cuffCK = document.getElementById("s_cuffCK");
//this.s_cuffZK = document.getElementById("s_cuffZK");
this.s_cuffYA = document.getElementById("s_cuffYA");
this.s_cuff = document.getElementById("s_cuff");
//�q���
this.sub_Win_Style = document.getElementById("sub_Win").style;
this.sub_Win_id = "";
this.sub_Win_scroll = ["",0];
this.sub_WinBody = document.getElementById("sub_WinBody");

//�{�^��
this.sub_WinRemove_B_Style = document.getElementById("sub_WinRemove_B").style;
this.sub_WinClear_B_Style = document.getElementById("sub_WinClear_B").style;

//�h��V�~��
this.b_gousyuB = document.getElementById("b_gousyuB");
this.def_Box = document.getElementById("def_Box");
this.c_gohu = document.getElementById("c_gohu");
this.c_tume = document.getElementById("c_tume");
this.c_soko = document.getElementById("c_soko");
this.c_mesi = document.getElementById("c_mesi");
this.c_sr = document.getElementById("c_sr");
this.c_tane = document.getElementById("c_tane");
this.c_drink = document.getElementById("c_drink");
this.c_fueDEF = document.getElementById("c_fueDEF");
this.c_fueDEF_G = document.getElementById("c_fueDEF_G");
this.c_fueTAI = document.getElementById("c_fueTAI");
this.c_buki = document.getElementById("c_buki");
this.c_shien = document.getElementById("c_shien");
this.c_G_Que = document.getElementById("c_G_Que");
this.c_G_Fit = document.getElementById("c_G_Fit");
this.c_kizuna = document.getElementById("c_kizuna");
this.c_katsu = document.getElementById("c_katsu");
this.c_soko.value = 60; //��͏����l
this.b_headDef.value = 0;
this.b_bodyDef.value = 0;
this.b_armDef.value = 0;
this.b_wstDef.value = 0;
this.b_legDef.value = 0;
this.b_Def_Sum.value = 1;
this.b_Fp_Sum.value = 0;
this.b_Wp_Sum.value = 0;
this.b_Tp_Sum.value = 0;
this.b_Ip_Sum.value = 0;
this.b_Dp_Sum.value = 0;
}
//------------------------------------�f�[�^�Z�b�g----------
,setSeriesList : function (data){
MST_Series_List = data;
}
,setDecoList : function (data){
MST_Deco_List = data;
}
,setEquip : function (name,data){
MST_Equip[name] = data;
}
,setEquipSplit : function (){
//--�����̔z��
for (var i = 0; i < 6; i++) for (var eqid in MST_Equip[BUINAME[i]]) MST_Equip[BUINAME[i]][eqid] = MST_Equip[BUINAME[i]][eqid].split(",");
//--�샊�X�g�̕ύX
var declist = [],w = "";
declist[declist.length] = ["����",[]];
for (var i = 0,m = MST_Skill_List.length; i < m; i++) {
	var decwk = [MST_Skill_List[i][0]];
	for (var j = 0,list = MST_Skill_List[i][1],n = list.length; j < n; j++) {
		var dec = [];
		for (var eqid in MST_Equip.deco) {
			var eq = MST_Equip.deco[eqid];
			if ((eq[I_bDEC] === "" || eq[I_bDEC] === "1") &&
				(eq[I_bSN1] == list[j] || eq[I_bSN2] == list[j] || eq[I_bSN3] == list[j] || eq[I_bSN4] == list[j] || eq[I_bSN5] == list[j])) {
				w = eq[I_bSN1] == list[j] ? eq[I_bSP1] : 
					eq[I_bSN2] == list[j] ? eq[I_bSP2] : 
					eq[I_bSN3] == list[j] ? eq[I_bSP3] : 
					eq[I_bSN4] == list[j] ? eq[I_bSP4] : 
					eq[I_bSN5] == list[j] ? eq[I_bSP5] : "0";
				dec[dec.length] = [w,eqid];
			}
		}
		dec.sort(function (a, b) {
					return +a[0] < +b[0] ? 1 : -1;
				});
		for(var v=0; v<dec.length; v++){
			dec[v].splice(0, 1);
		}
		decwk[decwk.length] = [MST_Skill[list[j]][0],dec];
	}
	declist[declist.length] = decwk;
}
MST_Deco_List = declist.concat(MST_Deco_List);
//�H�كX�L��
declist = [],decwk = ["�H�كX�L��"];
for (var i = 1,m = TENINAME.length; i < m; i++) {
	var dec = [];
	for (var eqid in MST_Equip.deco) {
		var eq = MST_Equip.deco[eqid];
		if (eq[I_bDEC] === "1" && eq[I_bTeni] == i) dec[dec.length] = eqid;
	}
	if (dec.length) decwk[decwk.length] = [TENINAME[i],dec];
}
declist[declist.length] = decwk;
MST_Deco_List = MST_Deco_List.concat(declist);
}
//------------------------------------�X�L�����X�g�\��----------
,dispSkillList : function (buttonid){
this.c_series.value = "-",this.sub_WinBody./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = this.c_series_data = "",this.c_andor.disabled = this.c_slot.disabled = this.c_minus.disabled = this.c_upg.disabled = false;

var df = document.createDocumentFragment(),dt = document.createElement("dt"),dd = document.createElement("dd"),input = document.createElement("input");
input.type = "button",input.style.marginRight = "1px", input.style.padding = "0 1px 0 1px";
if (CK_IE9) input.style.margin = "1px", input.style.padding = "2px";

for (var i = 0,m = MST_Skill_List.length; i < m; i++) {
	df.appendChild(dt.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(MST_Skill_List[i][0]));
	df.appendChild(dd.cloneNode(false));
	for (var j = 0,dfL = df.lastChild,list = MST_Skill_List[i][1],n = list.length; j < n; j++) {
		input.value = MST_Skill[list[j]][0];
		input.name = "miniW" + list[j];
		input.style.color = MST_Skill[list[j]][3] === 1 ? "#0040FF" : MST_Skill[list[j]][3] === 2 ? "orangered" : "";
		dfL.appendChild(input.cloneNode(false));
	}
}
this.sub_WinBody.appendChild(df);
this.sub_WinRemove_B_Style.visibility = "visible";
this.sub_Win_id = buttonid;
if (CK_IE6) this.c_rare.style.visibility = this.c_slot.style.visibility = this.c_hr.style.visibility = this.s_head.style.visibility = this.s_body.style.visibility = this.s_arm.style.visibility = this.s_wst.style.visibility = this.s_leg.style.visibility = this.c_cuff_lm.style.visibility = this.c_mesi.style.visibility = this.c_sr.style.visibility = this.c_tane.style.visibility = this.c_drink.style.visibility = this.c_fueDEF.style.visibility = this.c_fueTAI.style.visibility = "hidden";

this.sub_Win_Style.top = "30px",this.sub_Win_Style.left = (20 + +buttonid.charAt(7)) + "em",this.sub_Win_Style.display = "block";
//this.sub_Win_Style.right = (18-buttonid.charAt(7)) + "%";
//�X�N���[���ʒu�Č�
this.sub_WinBody.scrollTop = this.sub_Win_scroll[0] === this.sub_Win_id ? this.sub_Win_scroll[1] : 0;
}
//------------------------------------�V���[�Y���X�g�\��----------
,dispSeriesList : function (buttonid){
this.c_skill1.value = this.c_skill2.value = this.c_skill3.value = "-",this.c_teni.value = "",this.sub_WinBody./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = this.c_skill1_data = this.c_skill2_data = this.c_skill3_data = "",this.c_andor.disabled = this.c_slot.disabled = this.c_minus.disabled = this.c_upg.disabled = true;

var df = document.createDocumentFragment(),dt = document.createElement("dt"),dd = document.createElement("dd"),dtG = dt.cloneNode(false),ddG = dd.cloneNode(false),input = document.createElement("input");
dt.style.fontWeight = "bold",dtG.style.marginLeft = "1em",ddG.style.marginLeft = "2em";
input.type = "button",input.style.marginRight = "1px", input.style.padding = "0 1px 0 1px";
if (CK_IE9) input.style.margin = "1px", input.style.padding = "2px";

for (var i = 0,m = MST_Series_List.length; i < m; i++) {
	df.appendChild(dt.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(MST_Series_List[i][0]));
	df.appendChild(dd.cloneNode(false));
	for (var j = 1,n = MST_Series_List[i].length; j < n; j++) {
		input.name = "miniW" + i + j;
		if (typeof MST_Series_List[i][j][1] === "object") { //�w�b�_�[�L��
			df.appendChild(dtG.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(MST_Series_List[i][j][0]));
			df.appendChild(ddG.cloneNode(false));
			var list = MST_Series_List[i][j][1];
		} else {
			var list = MST_Series_List[i][j];
		}
		for (var k = 0,dfL = df.lastChild,l = list.length; k < l; k++) {
			input.value = list[k];
			dfL.appendChild(input.cloneNode(false));
		}
	}
}
this.sub_WinBody.appendChild(df);
this.sub_WinRemove_B_Style.visibility = this.sub_WinClear_B_Style.visibility = "hidden";
this.sub_Win_id = buttonid;
if (CK_IE6) this.c_rare.style.visibility = this.c_slot.style.visibility = this.c_hr.style.visibility = this.s_head.style.visibility = this.s_body.style.visibility = this.s_arm.style.visibility = this.s_wst.style.visibility = this.s_leg.style.visibility = this.c_cuff_lm.style.visibility = this.c_mesi.style.visibility = this.c_sr.style.visibility = this.c_tane.style.visibility = this.c_drink.style.visibility = this.c_fueDEF.style.visibility = this.c_fueTAI.style.visibility = "hidden";

this.sub_Win_Style.top = "30px",this.sub_Win_Style.left = "13em",this.sub_Win_Style.display = "block";
//this.sub_Win_Style.left = "auto";
//�X�N���[���ʒu�Č�
this.sub_WinBody.scrollTop = this.sub_Win_scroll[0] === this.sub_Win_id ? this.sub_Win_scroll[1] : 0;

}
//------------------------------------�C���v�b�g----------
,dispInput : function (){
this.sub_Win_Style.display = "none";
this.c_skill1.value = this.c_skill2.value = this.c_skill3.value = "-";
this.c_teni.value ="";
var i = prompt("�h�����͂��Ă��������B�擪��v�Ō������܂��B","");
if (i) {
	this.c_series.value = i;
	this.c_series_data = "9";
	this.search();
}
}
//------------------------------------�����i���X�g�\��----------
,dispDecoList : function (buttonid){
if (this[buttonid].value === "��" || this[buttonid].value === "-") return false;
if (this.sub_Win_Style.display === "block" && this.sub_Win_id === buttonid) return false;
this.sub_WinBody./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = "";

var slot_no = buttonid.charAt(buttonid.length-1),slot_name = buttonid.substring(0,buttonid.length-2);
//ck_type=0:���p 1:���m 2:�K���i,lm_slot=�ő�X���b�g��,ck_sp=SP�h��,ck_cuff=�J�t,ck_trWP=�V�L����,ck_hiden=��`�X�L���J�t�\��
var ck_type = "",ck_dec1 = "",ck_dec2 = "",lm_slot = 0,lm_cuff = +this.c_cuff_lm.value,ck_sp = false,ck_trWP = false,ck_hiden = false,ck_cuff = false,ck_minus = this.c_minus.checked,high_hr = +this.c_hr.value,ck_rep = setRep(this);
switch (slot_name) {
case "b_buki":
	ck_type = "0";
	lm_slot = 4 - slot_no;
	switch (this.b_bukiLv.value) {
	case "1": //�ʏ�
		ck_dec1 = ck_dec2 = "";
		break;
	case "2": //SP
		ck_dec1 =  ck_dec2 = "";
		lm_slot = 2 - slot_no;
		ck_sp = true;
		break;
	case "3": //�V�L
		ck_dec1 = "3",ck_dec2 = "";
		ck_trWP = true;
		break;
	}
	break;
case "b_cuff":
	ck_type = "0";
	ck_dec1 =  ck_dec2 = "1";
	if (slot_no === "2" && this.b_cuffS1.value !== "��") {
		var eq = MST_Equip.deco[this[slot_name].value.split(",")[2]];
		if (eq[I_bCLASS] === "L") {
			//��`�X�L���J�t
			lm_slot = 3 - slot_no + 1,ck_hiden = true;
		} else {
			//�m�[�}��
			lm_slot = 3 - slot_no;
		}
	} else {
		lm_slot = 3 - slot_no;
	}
	ck_cuff = true
	break;
default:
	var eq = MST_Equip[slot_name.substring(2)][this[slot_name].value.split(",")[0]];
	ck_type = eq[I_bTYPE];
	if (buttonid.lastIndexOf("T") === -1) {
		//�ʏ�
		var slot_data = getSlot(eq);
		lm_slot = slot_data[this[slot_name+"Lv"].value-1] - slot_no + 1;
		ck_dec1 =  ck_dec2 = "";
		ck_sp = eq[I_bCLASS] === "A";
	} else {
		//�V�L
		lm_slot = eq[I_bTrSLOT] - slot_no + 1;
		ck_dec1 =  ck_dec2 = "2";
	}
}

var lmck=0,lmck=0,lmskl=0,bkTitle="",df = document.createDocumentFragment(),dt = document.createElement("dt"),dd = document.createElement("dd"),dtG = dt.cloneNode(false),ddG = dd.cloneNode(false),input = document.createElement("input");
dt.style.fontWeight = "bold",dtG.style.marginLeft = "1em",ddG.style.marginLeft = "2em";
input.type = "button",input.style.marginRight = "1px", input.style.padding = "0 1px 0 1px";
if (CK_IE9) input.style.margin = "1px", input.style.padding = "2px";
//
for (var i = 0,m = MST_Deco_List.length; i < m; i++) {
	if (MST_Deco_List[i][0] === "����" || MST_Deco_List[i][0] === "�H�كX�L��" || MST_Deco_List[i][0] === "�V����" || MST_Deco_List[i][0] === "�V����") {
		lmck = false;
	} else {
		lmck = true;
	}
	for (var j = 1,n = MST_Deco_List[i].length; j < n; j++) {
		var dfL = document.createDocumentFragment();
		if (typeof MST_Deco_List[i][j][1] === "object") { //�w�b�_�[�L��
			dfL.appendChild(dtG.cloneNode(false)),dfL.lastChild.appendChild(document.createTextNode(MST_Deco_List[i][j][0]));
			dfL.appendChild(ddG.cloneNode(false));
			var list = MST_Deco_List[i][j][1];
		} else {
			var list = MST_Deco_List[i][j];
		}
		for (var k = 0,l = list.length,ck = false; k < l; k++) {
			var eq = MST_Equip.deco[list[k]];

			if ((ck_type === "0" || eq[I_bTYPE] === "0" || eq[I_bTYPE] === ck_type) &&
				(ck_dec1 === eq[I_bDEC] || ck_dec2 === eq[I_bDEC])&&
				eq[I_bSLOT7] <= lm_slot && +eq[I_bHR1] <= high_hr &&
				ck_rep.indexOf(eq[I_bCRE]) !== -1) {

				switch (eq[I_bDEC]) {
				case "":
					if (ck_trWP) {	//�V�L����
						if (eq[I_bCLASS] !== "N") continue; //�V�L����͓V�L�n�̂�
					} else {
						if (lmck) {
							lmskl = MST_Skill_List[i-1][1][j-1];
							if (ck_minus) {
								if (!(eq[I_bSN1] == lmskl && eq[I_bSP1] >= lm_cuff || eq[I_bSN1] == lmskl && eq[I_bSP1] <= lm_cuff * -1 ||
									eq[I_bSN2] == lmskl && eq[I_bSP2] >= lm_cuff || eq[I_bSN2] == lmskl && eq[I_bSP2] <= lm_cuff * -1 ||
									eq[I_bSN3] == lmskl && eq[I_bSP3] >= lm_cuff || eq[I_bSN3] == lmskl && eq[I_bSP3] <= lm_cuff * -1 ||
									eq[I_bSN4] == lmskl && eq[I_bSP4] >= lm_cuff || eq[I_bSN4] == lmskl && eq[I_bSP4] <= lm_cuff * -1 ||
									eq[I_bSN5] == lmskl && eq[I_bSP5] >= lm_cuff || eq[I_bSN5] == lmskl && eq[I_bSP5] <= lm_cuff * -1)) continue;
							} else {
								if (!(eq[I_bSN1] == lmskl && eq[I_bSP1] >= lm_cuff ||
									eq[I_bSN2] == lmskl && eq[I_bSP2] >= lm_cuff ||
									eq[I_bSN3] == lmskl && eq[I_bSP3] >= lm_cuff ||
									eq[I_bSN4] == lmskl && eq[I_bSP4] >= lm_cuff ||
									eq[I_bSN5] == lmskl && eq[I_bSP5] >= lm_cuff)) continue;
							}
						}
						switch (eq[I_bCLASS]) {
						case "N": //�V�L�n
							continue;				//�ʏ�͓V�L�n�͏��O
							break;
						case "A": //SP��n
							if (!ck_sp) continue;	//SP�h���Ȃ������珜�O
							input.style.color = "tomato";
							break;
						default:
							if (eq[I_bCLASS] === "L") {
								input.style.color = "orangered";
							} else if (eq[I_bNAME].substring(0,2).match(/^[�A-��]*$/)){
								input.style.color = "blue";
							} else {
								input.style.color = "";
							}
						}
					}
					break;
				case "1": //�J�t
					if (eq[I_bCLASS] === "L" && ck_hiden) continue; //��`�X�L���J�t���Z�b�g����Ă���Ȃ��`�X�L���J�t��\��
					if (eq[I_bCLASS] === "P") {
						//�H�كJ�t�͖������ł���
						input.style.color = "blue";
					} else {
						if (ck_minus) {
							if (!(eq[I_bSP1] >= lm_cuff || eq[I_bSP1] <= lm_cuff * -1 ||
								eq[I_bSP2] >= lm_cuff || eq[I_bSP2] <= lm_cuff * -1 ||
								eq[I_bSP3] >= lm_cuff || eq[I_bSP3] <= lm_cuff * -1 ||
								eq[I_bSP4] >= lm_cuff || eq[I_bSP4] <= lm_cuff * -1 ||
								eq[I_bSP5] >= lm_cuff || eq[I_bSP5] <= lm_cuff * -1)) continue;
						} else {
							if (!(eq[I_bSP1] >= lm_cuff ||
								eq[I_bSP2] >= lm_cuff ||
								eq[I_bSP3] >= lm_cuff ||
								eq[I_bSP4] >= lm_cuff ||
								eq[I_bSP5] >= lm_cuff)) continue;
						}
						if (eq[I_bCLASS] === "L") {
							input.style.color = "orangered";
						} else {
							input.style.color = ""
						}
					}
					break;
				case "2": //�V����
				case "3": //�V����
					input.style.color = "DarkGreen";
					break;
				}

				input.value = cngDecName(eq[I_bNAME],eq[I_bDEC]);
				input.name = "miniW" + list[k];
				dfL.appendChild(input.cloneNode(false));
				ck = true;
			}
		}
		if (ck) {
			if (bkTitle != MST_Deco_List[i][0]){
				if (MST_Deco_List[i][0] === "�H�كX�L��" || MST_Deco_List[i][0] === "�V����") {
					df.appendChild(document.createElement("hr"));
				}
				df.appendChild(dt.cloneNode(false));
				df.lastChild.appendChild(document.createTextNode(MST_Deco_List[i][0])),
				df.appendChild(dd.cloneNode(false)),
				bkTitle = MST_Deco_List[i][0];
			}
			df.lastChild.appendChild(dfL);
		}
	}
}

this.sub_WinBody.appendChild(df);
this.sub_WinRemove_B_Style.visibility = this.sub_WinClear_B_Style.visibility = "visible";
this.sub_Win_id = buttonid;
switch (slot_name) {
case "b_cuff":
case "b_buki":
	this.sub_Win_Style.top = "115px";
	break;
case "b_head":
	this.sub_Win_Style.top = "135px";
	break;
case "b_body":
	this.sub_Win_Style.top = "155px";
	break;
case "b_arm":
	this.sub_Win_Style.top = "175px";
	break;
case "b_wst":
	this.sub_Win_Style.top = "195px";
	break;
case "b_leg":
	this.sub_Win_Style.top = "215px";
	break;
}
this.sub_Win_Style.right = "auto",this.sub_Win_Style.left = (13 + (slot_no-1)*3 + (slot_name !== "b_cuff" ? 0 : 5)) + "em",this.sub_Win_Style.display = "block";
//�X�N���[���ʒu�Č�
this.sub_WinBody.scrollTop = this.sub_Win_scroll[0] === this.sub_Win_id ? this.sub_Win_scroll[1] : 0;
}
//------------------------------------���C���ɃZ�b�g----------
,setInput : function (eqid,eqname){
this[this.sub_Win_id].value = eqname;
this[this.sub_Win_id+"_data"] = eqid;

if (this.sub_Win_id === "c_series") {
	this.c_series_data = eqid;
	this.search();
} else if (this.sub_Win_id.lastIndexOf("S1") !== -1 || this.sub_Win_id.lastIndexOf("S2") !== -1 || this.sub_Win_id.lastIndexOf("S3") !== -1 ||
			this.sub_Win_id.lastIndexOf("T1") !== -1 || this.sub_Win_id.lastIndexOf("T2") !== -1 || this.sub_Win_id.lastIndexOf("T3") !== -1) {
	//����ǉ�
	if (MST_Deco_List[0][1].join(",").indexOf(eqid) === -1) MST_Deco_List[0][1][MST_Deco_List[0][1].length] = eqid;
	this.dispData(eqid,"deco",7);
	this.cngSlot(eqid,this.sub_Win_id);
	this.calc();
}

}
//------------------------------------�����i���O��----------
,removeDec : function (){
if (this.sub_Win_id.lastIndexOf("S1") !== -1 || this.sub_Win_id.lastIndexOf("S2") !== -1 || this.sub_Win_id.lastIndexOf("S3") !== -1 ||
	this.sub_Win_id.lastIndexOf("T1") !== -1 || this.sub_Win_id.lastIndexOf("T2") !== -1 || this.sub_Win_id.lastIndexOf("T3") !== -1) {
	this.cngSlot("O",this.sub_Win_id);
	this.calc();
} else {
	this[this.sub_Win_id].value = "-";
	this[this.sub_Win_id+"_data"] = "";
}
}
//------------------------------------�����i�S���O��----------
,removeAllDec : function (){
var s1 = this.sub_Win_id.substring(0,this.sub_Win_id.length-1) + "1",
	s2 = this.sub_Win_id.substring(0,this.sub_Win_id.length-1) + "2",
	s3 = this.sub_Win_id.substring(0,this.sub_Win_id.length-1) + "3";

if (this[s1].value !== "-" ) this.cngSlot("O",s1);
if (this[s2].value !== "-" ) this.cngSlot("O",s2);
if (this[s3].value !== "-" ) this.cngSlot("O",s3);
this.calc();
}
//------------------------------------�q��ʃN���[�Y----------
,closeSubWin : function (){
if (this.sub_Win_Style.display === "none") return;
//�X�N���[���ʒu�ۑ�
this.sub_Win_scroll = [this.sub_Win_id,this.sub_WinBody.scrollTop];
this.sub_Win_Style.display = "none";
if (CK_IE6) this.c_rare.style.visibility = this.c_slot.style.visibility = this.c_hr.style.visibility = this.s_head.style.visibility = this.s_body.style.visibility = this.s_arm.style.visibility = this.s_wst.style.visibility = this.s_leg.style.visibility = this.c_cuff_lm.style.visibility = this.c_mesi.style.visibility = this.c_sr.style.visibility = this.c_tane.style.visibility = this.c_drink.style.visibility = this.c_fueDEF.style.visibility = this.c_fueTAI.style.visibility = "visible";
}
//------------------------------------�h���----------
,search : function (){
// �ݒ�
var ck_disp = [,,,,,];
if (this.s_headCK.checked) this.s_head.length = 0,ck_disp[0] = true;
if (this.s_bodyCK.checked) this.s_body.length = 0,ck_disp[1] = true;
if (this.s_armCK.checked)  this.s_arm.length = 0,ck_disp[2] = true;
if (this.s_wstCK.checked)  this.s_wst.length = 0,ck_disp[3] = true;
if (this.s_legCK.checked)  this.s_leg.length = 0,ck_disp[4] = true;
if (this.s_decoCK.checked) this.s_deco.length = 0,this.s_cuff.length = 0,ck_disp[5] = true;

// �����擾
var ck_s1 = this.c_skill1_data+"",ck_s2 = this.c_skill2_data+"",ck_s3 = this.c_skill3_data+"",ck_teni = this.c_teni.value,ck_sex = this.c_sex.value,ck_type = this.c_type.value,
	ck_rui = this.c_rui.value,lm_slot = this.c_slot.value,ck_rep = setRep(this),lm_rare = +this.c_rare.value,low_hr = 0,high_hr = +this.c_hr.value,ck_gr = lm_rare === 99 ? "9" : "",
	ck_series = this.setSeries(this.c_series_data,this.c_series.value),
	s_list = [ck_s1,ck_s2,ck_s3],ck_minus = this.c_minus.checked ? -100 : 0,
	ck_andor = this.c_andor.value === "or" || (ck_s1 === "" && ck_s2 === "" && ck_s3 === "") ? 1 : 3 - (ck_s1 === "") - (ck_s2 === "") - (ck_s3 === ""),
	t_ck = MST_Skill[ck_s1][0]+"."+MST_Skill[ck_s2][0]+"."+MST_Skill[ck_s3][0];
if (ck_rui === "-") {
	var f_rui = function(){return true};
} else if (ck_rui === "") {
	var f_rui = function(t){return t === ""};
} else if (ck_rui !== "-") {
	var f_rui = function(t){return ck_rui.indexOf(t) !== -1 && t};
}
var list = [],upgList = [],df = document.createDocumentFragment(),dfC = document.createDocumentFragment(),o = document.createElement("option");
if (ck_series) { //�V���[�Y��
	if (ck_series.low_hr) low_hr = ck_series.low_hr; //����
	if (ck_series.high_hr && high_hr > 2001) high_hr = ck_series.high_hr; //���

	var f_series = function(){return true},t = "";
	for (var i = 0,m = ck_series.F1.length,_f1 = []; i < m; i++) { //�O����v
		_f1[i] = "t.indexOf(\"" + ck_series.F1[i] + "\") === 0"
	}
	for (var i = 0,m = ck_series.F2.length,_f2 = []; i < m; i++) { //�O����v AND �ꕔ��v
		_f2[i] = "t.indexOf(\"" + ck_series.F2[i] + "\") !== -1"
	}
	for (var i = 0,m = ck_series.R.length,_r = []; i < m; i++) { //�s��v
		_r[i] = "t.indexOf(\"" + ck_series.R[i] + "\") === -1"
	}
	if (ck_series.F1.length > 0) {
		if (ck_series.F2.length > 0) {
			t = "((" + _f1.join(" || ") + ") && (" + _f2.join(" || ") + "))";
		} else {
			t = "(" + _f1.join(" || ") + ")";
		}
	}
	if (ck_series.S) t += (t ? " || (" : "(") + "t.indexOf(\"" + ck_series.S + "\") !== -1)";
	if (ck_series.R.length > 0) {
		if (t) {
			 t = "(" + t + " && ("  + _r.join(" && ") + "))";
		} else {
			 t = "(" + t + _r.join(" && ") + ")";
		}
	}
	if (t) eval("f_series = function(t){return " + t + ";}");
}
for (var i = 0; i < 6; i++) {
	if (!ck_disp[i]) continue;
	
	list.length = 0,upgList.length = 0;
	var eqlist = MST_Equip[BUINAME[i]];
	if (ck_series) { //�V���[�Y��
		for (var eqid in eqlist) {
			var eq = eqlist[eqid];
			//if (typeof eq === "string") eq = MST_Equip[BUINAME[i]][eqid] = MST_Equip[BUINAME[i]][eqid].split(",");
			if ((f_series(eq[I_bNAME])) &&
			    (ck_series.C === "9" || ck_series.C.indexOf(eq[I_bCRE]) !== -1) && 
			    (ck_sex === "0" || eq[I_bSEX] === "0" || ck_sex === eq[I_bSEX]) &&
			    (ck_type === "3" || eq[I_bTYPE] === "0" || ck_type === eq[I_bTYPE]) && 
			    (ck_rep.indexOf(eq[I_bCRE]) !== -1) && 
			    (f_rui(eq[I_bCLASS])) && 
			    (+eq[I_bRARE] <= lm_rare) && 
			    (eq[I_bGR] <= ck_gr) && 
			    (+eq[I_bHR1]  <= high_hr && +eq[I_bHR1] >= low_hr)) {
				//list[list.length] = [eq[I_bNAME],[eq[I_bSLOT1],eq[I_bSLOT2],eq[I_bSLOT3],eq[I_bSLOT4],eq[I_bSLOT5],eq[I_bSLOT6],eq[I_bSLOT7]].sort()[6],[+eq[I_bDEF1],_+eq[I_bDEF2],+eq[I_bDEF3],+eq[I_bDEF4],+eq[I_bDEF5],+eq[I_bDEF6],+eq[I_bDEF7]].sort()[6],eqid];
				list[list.length] = [eq[I_bUPGCNT],eq[I_bNAME],eq[I_bSLOT7],eqid];
			}
		}
		if (i !== 5) {
			list.sort(function (a, b) {
							return +a[0] < +b[0] ? 1 : -1;
						});
			for (var j = 0,n = list.length; j < n; j++) o.setAttribute("value", list[j][3]),df.appendChild(o.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(list[j][1]+" ["+list[j][2]+"]"));
			this["s_"+BUINAME[i]].appendChild(df);
			this["s_"+BUINAME[i]+"ZK"].value = "";
		} else {
			list.sort(function (a, b) {
							return a[1] > b[1] ? 1 : -1;
						});
			for (var j = 0,n = list.length; j < n; j++) {
				var w = list[j][1].lastIndexOf("�J�t") !== -1 ? dfC : df;
				o.setAttribute("value",list[j][3]),w.appendChild(o.cloneNode(false)),w.lastChild.appendChild(document.createTextNode(list[j][0]+" "+list[j][1]+" ["+list[j][2]+"]"));
			}
			this.s_deco.appendChild(df);
			this.s_cuff.appendChild(dfC);
		}
		if (i === 5) break;
	} else { //�X�L����
		for (var eqid in eqlist) {
			var eq = eqlist[eqid];
			//if (typeof eq === "string") eq = MST_Equip[BUINAME[i]][eqid] = MST_Equip[BUINAME[i]][eqid].split(",");
			if (
				(+(ck_s1 + ck_s2 + ck_s3 + eq[I_bSN1] === "" && eq[I_bCLASS] !== "A") + /* �X�L���Ȃ�����������̂ɉ��*/
				  (eq[I_bSN1] && (eq[I_bSN1] === ck_s1 || eq[I_bSN1] === ck_s2 || eq[I_bSN1] === ck_s3) && eq[I_bSP1] > ck_minus) + 
				  (eq[I_bSN2] && (eq[I_bSN2] === ck_s1 || eq[I_bSN2] === ck_s2 || eq[I_bSN2] === ck_s3) && eq[I_bSP2] > ck_minus) + 
				  (eq[I_bSN3] && (eq[I_bSN3] === ck_s1 || eq[I_bSN3] === ck_s2 || eq[I_bSN3] === ck_s3) && eq[I_bSP3] > ck_minus) + 
				  (eq[I_bSN4] && (eq[I_bSN4] === ck_s1 || eq[I_bSN4] === ck_s2 || eq[I_bSN4] === ck_s3) && eq[I_bSP4] > ck_minus) + 
				  (eq[I_bSN5] && (eq[I_bSN5] === ck_s1 || eq[I_bSN5] === ck_s2 || eq[I_bSN5] === ck_s3) && eq[I_bSP5] > ck_minus) >= ck_andor
				  || ck_teni !== "" && ck_s1 + ck_s2 + ck_s3 === ""
				  ) && 
			    (ck_sex === "0" || eq[I_bSEX] === "0" || ck_sex === eq[I_bSEX]) &&
			    (ck_type === "3" || eq[I_bTYPE] === "0" || ck_type === eq[I_bTYPE]) &&
			    (eq[I_bDEC] === "" || eq[I_bDEC] === "1") &&
			    (ck_rep.indexOf(eq[I_bCRE]) !== -1) && 
			    (f_rui(eq[I_bCLASS])) && 
			    (+eq[I_bRARE] <= lm_rare && eq[I_bGR] <= ck_gr) && 
			    (eq[I_bCLASS] !== ck_gr) && 
			    (+eq[I_bHR1]  <= high_hr) &&
			    (eq[I_bSLOT7]  >= lm_slot) &&
			    (ck_teni === "" || eq[I_bTeni] === ck_teni)
			   ) {
				for (var j = 0,w = []; j < 3; j++) {
					if (s_list[j] !== "") {
						w[w.length] = eq[I_bSN1] === s_list[j] ? eq[I_bSP1] : 
										eq[I_bSN2] === s_list[j] ? eq[I_bSP2] : 
										eq[I_bSN3] === s_list[j] ? eq[I_bSP3] : 
										eq[I_bSN4] === s_list[j] ? eq[I_bSP4] : 
										eq[I_bSN5] === s_list[j] ? eq[I_bSP5] : "0";
					}
				}
				list[list.length] = [w.join("."),eq[I_bNAME],eq[I_bSLOT7],eqid];
				upgList[upgList.length] = eq[I_bUPGBACK];
			}
		}
		list.sort(function (a, b) {
					if (a[0] === b[0]) {
						return a[2] < b[2] ? 1 : -1;
					} else {
						return +a[0] < +b[0] ? 1 : -1;
					}});
		if (i === 5) { //�����i
			for (var j = 0,n = list.length; j < n; j++) {
				var w = list[j][1].lastIndexOf("�J�t") !== -1 ? dfC : df;
				o.setAttribute("value",list[j][3]),w.appendChild(o.cloneNode(false)),w.lastChild.appendChild(document.createTextNode(list[j][0]+" "+list[j][1]+" ["+list[j][2]+"]"));
			}
			this.s_deco.appendChild(df);
			this.s_cuff.appendChild(dfC);
			//this["s_decoZK"].value = t_ck;
			//this["s_cuffZK"].value = t_ck;
		} else {
			var upg = this.c_upg.checked ? upgList.join(",") : "";
			for (var j = 0,n = list.length; j < n; j++) {
				if (upg.indexOf(list[j][3]) === -1) o.setAttribute("value",list[j][3]),df.appendChild(o.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(list[j][0]+" "+list[j][1]+" ["+list[j][2]+"]"));
			}
			this["s_"+BUINAME[i]].appendChild(df);
		}
		this["s_"+BUINAME[i]+"ZK"].value = t_ck;
	}
}
}
//------------------------------------���\��----------
,dispData : function (eqid,bui,lv,dec){
if (eqid.length !== 4) return;
if (bui === "cuff") bui = "deco";
var eq = MST_Equip[bui][eqid];
//�ȉ��I�~�b�g�@LV�ς������ɑf�ނ��ύX����Ȃ��B�B
//if (this.d_mei.innerHTML === eq[I_bNAME]) return;

//if (typeof eq === "string") eq = MST_Equip[bui][eqid] = MST_Equip[bui][eqid].split(",");
//�ڍ�
this.d_mei.firstChild.nodeValue = eq[I_bNAME];
this.d_doc.firstChild.nodeValue = eq[I_bDOC] || "";
if (eq[I_bTeni]) this.d_doc.firstChild.nodeValue += "[" + TENINAME[eq[I_bTeni]] + "]";
this.d_Fp.firstChild.nodeValue = eq[I_bF];
this.d_Wp.firstChild.nodeValue = eq[I_bW];
this.d_Tp.firstChild.nodeValue = eq[I_bT];
this.d_Ip.firstChild.nodeValue = eq[I_bI];
this.d_Dp.firstChild.nodeValue = eq[I_bD];
switch (eq[I_bDEC]) {
//case "1": //�J�t
//	this.d_sn1.firstChild.nodeValue = eq[I_bCLASS] === "P" ? TENINAME[eq[I_bSN1]] : MST_Skill[eq[I_bSN1]][0];
//	break;
case "2": //�V����
	this.d_sn1.firstChild.nodeValue = TENKOKUNAME[eq[I_bSN1]];
	break;
case "3": //�V����
	this.d_sn1.firstChild.nodeValue = TENFUNAME[eq[I_bSN1]] || "";
	break;
default:
	this.d_sn1.firstChild.nodeValue = MST_Skill[eq[I_bSN1]][0];
	break;
}
this.d_sp1.firstChild.nodeValue = eq[I_bSP1];
this.d_sn2.firstChild.nodeValue = MST_Skill[eq[I_bSN2]][0];
this.d_sp2.firstChild.nodeValue = eq[I_bSP2];
this.d_sn3.firstChild.nodeValue = MST_Skill[eq[I_bSN3]][0];
this.d_sp3.firstChild.nodeValue = eq[I_bSP3];
this.d_sn4.firstChild.nodeValue = MST_Skill[eq[I_bSN4]][0];
this.d_sp4.firstChild.nodeValue = eq[I_bSP4];
this.d_sn5.firstChild.nodeValue = MST_Skill[eq[I_bSN5]][0];
this.d_sp5.firstChild.nodeValue = eq[I_bSP5];
this.d_type.firstChild.nodeValue = TYPENAME[eq[I_bTYPE]];
this.d_sex.firstChild.nodeValue = SEXNAME[eq[I_bSEX]];
this.d_rep1.firstChild.nodeValue = MAKENAME[eq[I_bCRE].charAt(0)];
this.d_rep2.firstChild.nodeValue = MAKENAME[eq[I_bCRE].replace("#","").substring(1)];
this.d_rui.firstChild.nodeValue = CLASSTYPE[eq[I_bCLASS]] + (eq[I_bGR] ? "[GR"+eq[I_bGR]+"]":"");

//�f��
var sozaiHtml = function (recipe) {
	if (!recipe) return "";
	var t = [],list = recipe.split(" ");
	for (var i = 0,cnt = 0,m = list.length; i < m; i++) {
		var w = list[i];
		if (!isNaN(w.charAt(w.length-1)) || !isNaN(w.charAt(w.length-2))) {
			if (w.lastIndexOf("R") !== -1) {
				t[cnt++] = "<a href='../sozai/sozai.htm?" + w.substring(0,4) + "W' target=_blank class=r>" + MST_Item[w.substring(0,4)][0] + "</a>x" + parseInt(w.substring(4));
			} else {
				t[cnt++] = "<a href='../sozai/sozai.htm?" + w.substring(0,4) + "W' target=_blank>" + MST_Item[w.substring(0,4)][0] + "</a>x" + w.substring(4);
			}
		} else {
			t[cnt++] = w;
		}
	}
	return t.join("<br>");
};
var zeny_sum = 0, gzeny_sum = 0, sozai_pool = [], upg_txt = "", flg_dec = 0,reci_data = getSozai(eq), zeny_data = getZeny(eq), def_data = getDef(eq), slot_data = getSlot(eq);
for (var i = 1,j = 0,m = eq[I_bLVMAX]; j < m; i++,j++) {
	if (+reci_data[I_iHR1+j] >= 10000) {
		this.d_lv[i].firstChild.nodeValue = "��";
	} else if (+reci_data[I_iHR1+j] >= 3000) {
		this.d_lv[i].firstChild.nodeValue = "Lv"+i+"�FGSR" + (reci_data[I_iHR1+j]-3000);
	} else if (+reci_data[I_iHR1+j] >= 2000) {
		this.d_lv[i].firstChild.nodeValue = "Lv"+i+"�FGR" + (reci_data[I_iHR1+j]-2000);
	} else if (+reci_data[I_iHR1+j] >= 1000) {
		this.d_lv[i].firstChild.nodeValue = "Lv"+i+"�FSR" + (reci_data[I_iHR1+j]-1000);
	} else {
		this.d_lv[i].firstChild.nodeValue = "Lv"+i+"�FHR" + reci_data[I_iHR1+j];
	}
	this.d_lv[i].style.backgroundColor = +reci_data[I_iHR1+j] <= +this.c_hr.value ? "white" : "gray";
	this.d_def[i].firstChild.nodeValue = def_data[j] + "�F" + slot_data[j];
	this.d_zeny[i].firstChild.nodeValue = zeny_data[j] + (+reci_data[I_iHR1+j] >= 2000 ? "Gz" : "z");
	//���B	
	if (reci_data[I_iSozai1+j].indexOf("@") !== -1) {
		var wkmain = reci_data[I_iSozai1+j].split("@");
		var wklist = wkmain[1].split(" ");
		for (var k = 0,n = wklist.length,wk = []; k < n; k++) {
			wk[k] = "<span class=ldec onclick=\"SkillForm.dispData('" + eqid + "','" + bui + "'," + lv + "," + k + ")\">"+ MST_Equip[BUINAME[wklist[k].charAt(0)]][wklist[k].substring(1)][I_bNAME] + "</span>Lv7��萸�B";
		}
		this.d_sozai[i].innerHTML = (wkmain[0] ? sozaiHtml(wkmain[0])+"<br>or<br>" : "") + wk.join("<br>");
		dec = dec || 0; //G,GF�ŕ�������Ƃ��Ɏw�肳���
		upg_txt = "��" + MST_Equip[BUINAME[wklist[dec].charAt(0)]][wklist[dec].substring(1)][I_bNAME] + "Lv7��萸�B";
		flg_dec = true;
	} else {
		this.d_sozai[i].innerHTML = sozaiHtml(reci_data[I_iSozai1+j]);
	}
}
//���܂���N���A
for (; i <= 7; i++) {
	this.d_lv[i].style.backgroundColor = "gray";
	this.d_lv[i].firstChild.nodeValue = 
	this.d_def[i].firstChild.nodeValue = 
	this.d_zeny[i].firstChild.nodeValue = 
	this.d_sozai[i].innerHTML = "";
}
//�摜
if (eq[I_bIMG] && this.d_MF.style.display !== "none") {
	var ss = MST_Equip.jpg[parseInt(eq[I_bIMG],16)].split(" ");
	if (ss[1] > "0") {
		this.d_MF.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss[0]+"MF"+ss[1]+"_s.jpg";
		this.d_MB.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss[0]+"MB"+ss[1]+"_s.jpg";
		this.d_FF.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss[0]+"FF"+ss[1]+"_s.jpg";
		this.d_FB.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss[0]+"FB"+ss[1]+"_s.jpg";
	} else {
		this.d_MF.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss+"MF"+"_s.jpg";
		this.d_MB.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss+"MB"+"_s.jpg";
		this.d_FF.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss+"FF"+"_s.jpg";
		this.d_FB.src = "http://images.mh-frontier.jp/gamedata/armor/photo/"+ss+"FB"+"_s.jpg";
	}
	this.d_MF.style.visibility = this.d_MB.style.visibility = this.d_FF.style.visibility = this.d_FB.style.visibility = "visible"
} else {
//	this.d_MF.src = this.d_MB.src = this.d_FF.src = this.d_FB.src = "../img/w.jpg"
	this.d_MF.style.visibility = this.d_MB.style.visibility = this.d_FF.style.visibility = this.d_FB.style.visibility = "hidden"
}
//�쉻���������̑f�ނ��Z�b�g
if (flg_dec) {
	bui = BUINAME[wklist[dec].charAt(0)];
	eq = MST_Equip[bui][wklist[dec].substring(1)];
	reci_data = getSozai(eq), zeny_data = getZeny(eq);
}

//������������̂ɐ��Y�f�ނ�����
if (eq[I_bUPGBACK] && eq[I_bRECIPE1]){
	//���B�ȊO�Ȃ�\��
	if (!flg_dec) this.d_sozai[1].innerHTML = sozaiHtml(MST_Equip.sozai[parseInt(eq[I_bLVUPPTN],16)].split(",")[0]) + "<br>---���Y---<br>" + this.d_sozai[1].innerHTML;
	reci_data[I_iSozai1] = eq[I_bRECIPE1];
}

//�f�ލ��v
for (var i = 1,j = 0,m = eq[I_bLVMAX]; j < m; i++,j++) {
	if (i <= lv && reci_data[I_iSozai1+j]) {
		if (+reci_data[I_iHR1+j] >= 2000) {
			gzeny_sum += +zeny_data[j];
		} else {
			zeny_sum += +zeny_data[j];
		}
		sozai_pool[sozai_pool.length] = reci_data[I_iSozai1+j];
	}
}

//����������
if (eq[I_bUPGBACK] && !eq[I_bRECIPE1]) {
	var hasei_lv = eq[I_bUPGBACK].charAt(4), hasei_eq = MST_Equip[bui][eq[I_bUPGBACK].substring(0,4)], reci_data = getSozai(hasei_eq), zeny_data = getZeny(hasei_eq);
	upg_txt = hasei_eq[I_bNAME] + " LV" + hasei_lv + upg_txt;
	if (!flg_dec) this.d_sozai[1].innerHTML = upg_txt + "<br>" + this.d_sozai[1].innerHTML;
	do {
		for (var i = 1,j = 0; i <= hasei_lv; i++,j++){
			if (+reci_data[I_iHR1+j] >= 2000) {
				gzeny_sum += +zeny_data[j];
			} else {
				zeny_sum += +zeny_data[j];
			}
			sozai_pool[sozai_pool.length] = reci_data[I_iSozai1+j];
		}
		if (hasei_eq[I_bUPGBACK] && !hasei_eq[I_bRECIPE1]) {
			hasei_lv = hasei_eq[I_bUPGBACK].charAt(4), hasei_eq = MST_Equip[bui][hasei_eq[I_bUPGBACK].substring(0,4)], reci_data = getSozai(hasei_eq), zeny_data = getZeny(hasei_eq);
			upg_txt = hasei_eq[I_bNAME] + "LV" + hasei_lv + "��" + upg_txt
		} else {
			hasei_lv = 0;
		}
	} while (hasei_lv);
	upg_txt += "��<br>";
}
//�쉻���������̃A�b�v�O���[�h�e�L�X�g�̒���
if (flg_dec) {
	if (upg_txt.charAt(0) === "��") upg_txt = upg_txt.substring(1) + "<br>";
	upg_txt = upg_txt.replace("��<br>","<br>");
}
this.d_zenyAll.innerHTML = (zeny_sum || !gzeny_sum ? zeny_sum + "z<br>" : "") + (gzeny_sum ? gzeny_sum + "Gz" : "");

//�f�ލ��v
sozai_pool = sozai_pool.join(" ").replace(/R/g,"").split(" ").sort();
var sozai_sum = [], toku = "";
for (var i = 0,m = sozai_pool.length; i < m; i++) {
	var w = sozai_pool[i];
	for (var j = 0,n = sozai_sum.length; j < n; j++) {
		if (sozai_sum[j][0] === w.substring(0,4)){
			sozai_sum[j][1] += +w.substring(4);
			break;
		}
	}
	if (j >= n) {
		if (!isNaN(w.charAt(w.length-1)) || !isNaN(w.charAt(w.length-2))) {
			sozai_sum[sozai_sum.length] = [w.substring(0,4), +w.substring(4)];
		} else {
			if (w && w !== "�Ȃ�" && w !== "or") toku = w.replace("<br>","") + "<br>";
		}
	}
}
for (var i = 0,m = sozai_sum.length; i < m; sozai_sum[i] = sozai_sum[i++].join(""));
sozai_sum = sozai_sum.sort(function (a, b){return MST_Item[b.substring(0,4)][5]+b.substring(0,4) < MST_Item[a.substring(0,4)][5]+a.substring(0,4) ? 1 : -1});
this.d_sozaiAll.innerHTML = upg_txt + toku + "<span>" + sozaiHtml(sozai_sum.join(" ")).replace(/<br>/g,"</span>,<span>") + "</span>";
//�A�N�����菈��
if (!eq[I_bNAME].indexOf("�A�N��") && CLASSTYPE.GClass.indexOf(eq[I_bCLASS]) === -1 && eq[I_bNAME].indexOf("�o���b�^") === -1) this.d_sozaiAll.innerHTML = "���F�ɂ��f�ނ��قȂ遦<br>" + this.d_sozaiAll.innerHTML
}
//------------------------------------�h��Z�b�g----------
,setData : function (eqid,bui) {
if (!eqid) return;
switch (bui) {
case "cuff": //�J�t
	//����ǉ�
	if (MST_Deco_List[0][1].join(",").indexOf(eqid) === -1) MST_Deco_List[0][1][MST_Deco_List[0][1].length] = eqid;
	var eq = MST_Equip.deco[eqid];
	for (var j = 1; j < 4 ; j++) {
		if ( this["b_cuffS"+j+"_data"] === "O" &&
			(eq[I_bSLOT7] === "2" && j === 1 && this["b_cuffS2_data"].length !== 4 || eq[I_bSLOT7] === "1")) {
			this.cngSlot(eqid,"b_cuffS"+j);
			this.calc();
			return;
		}
	}
	//�����㏑��
	this.cngSlot(eqid,"b_cuffS1");
	this.calc();
	break;
case "deco": //�����i
	//����ǉ�
	if (MST_Deco_List[0][1].join(",").indexOf(eqid) === -1) MST_Deco_List[0][1][MST_Deco_List[0][1].length] = eqid;
	var eq = MST_Equip.deco[eqid];
	for (var i = 0; i < 5; i++) { //���ʕ�
		for (var j = 1; j < 4 ; j++) {
			if ( this["b_"+BUINAME[i]+"S"+j+"_data"] === "O" &&
				(eq[I_bCLASS] !== "A" || eq[I_bCLASS] === "A" && MST_Equip[BUINAME[i]][this["b_"+BUINAME[i]].value.split(",")[0]][I_bCLASS] === "A") &&
				(eq[I_bSLOT7] === "3" && j === 1 && this["b_"+BUINAME[i]+"S2_data"].length !== 4 && this["b_"+BUINAME[i]+"S3_data"].length !== 4 ||
				 eq[I_bSLOT7] === "2" && j <= 2 && this["b_"+BUINAME[i]+"S"+(j+1)+"_data"].length !== 4 ||
				 eq[I_bSLOT7] === "1")) {
				this.cngSlot(eqid,"b_"+BUINAME[i]+"S"+j);
				this.calc();
				return;
			}
		}
	}
	break;
default: //�h��
	//�����Z�b�g�Ή��ŃI�~�b�g
	////���ɂ��邩�`�F�b�N
	//for (var i = 0,m = this["b_"+bui].length; i < m; i++) {
	//	if (this["b_"+bui][i].value.split(",")[0] === eqid) {
	//		this["b_"+bui].selectedIndex = i;
	//		this.cngData(bui);
	//		this.calc();
	//		return;
	//	}
	//}
	var eq = MST_Equip[bui][eqid],reci_data = getSozai(eq), slot_data = getSlot(eq);
	//�f�[�^�ǉ�(���O:eqid,LV,�X��1,�X��2,�X��3,�V����1,�V����2,�V����3)
	//LV�𐧌�
	for (var i = 0; i < eq[I_bLVMAX] && +reci_data[I_iHR1+i] <= +this.c_hr.value; i++);
	var lv = i--,o = document.createElement("option");
	o.setAttribute("value", eqid+"," +lv+"," + (slot_data[i] > 0 ? "O,":",") + (slot_data[i] > 1 ? "O,":",") + (slot_data[i] > 2 ? "O":"")
							+ (eq[I_bCLASS] === "N" ? ","+(eq[I_bTrSLOT] > 0 ? "O,":",") + (eq[I_bTrSLOT] > 1 ? "O,":",") + (eq[I_bTrSLOT] > 2 ? "O":"") :"")
							);
	o.setAttribute("selected","selected");
	o.appendChild(document.createTextNode(eq[I_bNAME]));
	this["b_"+bui].appendChild(o);
	this.cngData(bui);
	this.calc();
}
}
//------------------------------------�h��폜----------
,delData : function (bui) {
//�ꌏ�������������Ȃ珈�����Ȃ�
if (this["b_"+bui].length === 1 ||
	this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "������" ||
	this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "�Z�b�g") return;

//�s�폜
var i = this["b_"+bui].selectedIndex;
this["b_"+bui].options[i] = null;
this["b_"+bui].selectedIndex = i === 0 ? 0 : --i;
this.cngData(bui);

//�ꌏ�������������Ȃ�폜�𖳌���
if (this["b_"+bui].length === 1 || this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "������") this["b_"+bui+"Del"].disabled = true;
}
//------------------------------------�f�[�^����ւ�----------
,cngData : function (bui) {
var w = this["b_"+bui].value.split(","),slot_suu = 0;
switch (bui) {
case "buki":
	slot_suu = 3;
	break;
case "cuff":
	slot_suu = 2;
	break;
default:
	var eq = MST_Equip[bui][w[I_sID]], reci_data = getSozai(eq), def_data = getDef(eq), slot_suu = getSlot(eq)[w[I_sLV]-1];
	//if (typeof eq === "string") eq = MST_Equip[bui][w[0]] = MST_Equip[bui][w[0]].split(",");
	//LV�𐧌�
	for (var i = 0; i < eq[I_bLVMAX] && +reci_data[I_iHR1+i] <= +this.c_hr.value; i++);
	var lv = i--;
	if (this["b_"+bui+"Lv"].length !== lv) {
		this["b_"+bui+"Lv"].length = 0;
		var df = document.createDocumentFragment(),o = document.createElement("option");
		for (var i = 1; i <= lv; i++) o.setAttribute("value",i),df.appendChild(o.cloneNode(false)),df.lastChild.appendChild(document.createTextNode(i));
		this["b_"+bui+"Lv"].appendChild(df);
		if (lv < w[I_sLV]) w[I_sLV] = lv;
		if (CK_IE6) this["b_"+bui+"Lv"][w[I_sLV]-1].setAttribute("selected","selected");
	}
	this["b_"+bui+"Lv"].selectedIndex = w[I_sLV]-1;

	//�ڍ�
	this["b_"+bui+"GR"] = eq[I_bGR] ? eq[I_bGR] : 1;
	this["b_"+bui+"Def"].firstChild.nodeValue = def_data[w[1]-1];
	this["b_"+bui+"Def"].value = def_data[w[1]-1];
	this["b_"+bui+"Fp"].firstChild.nodeValue = eq[I_bF];
	this["b_"+bui+"Wp"].firstChild.nodeValue = eq[I_bW];
	this["b_"+bui+"Tp"].firstChild.nodeValue = eq[I_bT];
	this["b_"+bui+"Ip"].firstChild.nodeValue = eq[I_bI];
	this["b_"+bui+"Dp"].firstChild.nodeValue = eq[I_bD];
	this["b_"+bui+"Sn1"].firstChild.nodeValue = MST_Skill[eq[I_bSN1]][0];
	this["b_"+bui+"Sp1"].firstChild.nodeValue = eq[I_bSP1];
	this["b_"+bui+"Sn2"].firstChild.nodeValue = MST_Skill[eq[I_bSN2]][0];
	this["b_"+bui+"Sp2"].firstChild.nodeValue = eq[I_bSP2];
	this["b_"+bui+"Sn3"].firstChild.nodeValue = MST_Skill[eq[I_bSN3]][0];
	this["b_"+bui+"Sp3"].firstChild.nodeValue = eq[I_bSP3];
	this["b_"+bui+"Sn4"].firstChild.nodeValue = MST_Skill[eq[I_bSN4]][0];
	this["b_"+bui+"Sp4"].firstChild.nodeValue = eq[I_bSP4];
	this["b_"+bui+"Sn5"].firstChild.nodeValue = MST_Skill[eq[I_bSN5]][0];
	this["b_"+bui+"Sp5"].firstChild.nodeValue = eq[I_bSP5];

	//�V����X���b�g
	this["b_"+bui+"T1"].style.display = this["b_"+bui+"T2"].style.display = this["b_"+bui+"T3"].style.display = eq[I_bCLASS] === "N" ? "inline" : "none";
	switch (eq[I_bTrSLOT]-0) {
	case 0:
		this["b_"+bui+"T1"].disabled = this["b_"+bui+"T2"].disabled = this["b_"+bui+"T3"].disabled = 1;
	 	this["b_"+bui+"T1"].value = this["b_"+bui+"T2"].value = this["b_"+bui+"T3"].value = "-";
	 	this["b_"+bui+"T1_data"]  = this["b_"+bui+"T2_data"]  = this["b_"+bui+"T3_data"]  = "";
		break;
	case 1:
		this["b_"+bui+"T1"].disabled = 0;
		this["b_"+bui+"T2"].disabled = this["b_"+bui+"T3"].disabled = 1;
	 	this["b_"+bui+"T1"].value = "��";
	 	this["b_"+bui+"T1_data"]  = "O";
		this["b_"+bui+"T2"].value = this["b_"+bui+"T3"].value = "-";
		this["b_"+bui+"T2_data"]  = this["b_"+bui+"T3_data"]  = "";
		break;
	case 2:
		this["b_"+bui+"T1"].disabled = this["b_"+bui+"T2"].disabled = 0;
		this["b_"+bui+"T3"].disabled = 1;
	 	this["b_"+bui+"T1"].value = this["b_"+bui+"T2"].value = "��";
	 	this["b_"+bui+"T1_data"]  = this["b_"+bui+"T2_data"]  = "O";
		this["b_"+bui+"T3"].value = "-";
		this["b_"+bui+"T3_data"]  = "";
		break;
	case 3:
		this["b_"+bui+"T1"].disabled = this["b_"+bui+"T2"].disabled = this["b_"+bui+"T3"].disabled = 0;
	 	this["b_"+bui+"T1"].value = this["b_"+bui+"T2"].value = this["b_"+bui+"T3"].value = "��";
	 	this["b_"+bui+"T1_data"]  = this["b_"+bui+"T2_data"]  = this["b_"+bui+"T3_data"]  = "O";
		break;
	}
	//�V����
	if (eq[I_bCLASS] === "N") for (var i = 1; i <= eq[I_bTrSLOT]; this.cngSlot(w[I_sT1+i-1],"b_"+bui+"T"+i,i++));
}
//�X���b�g
switch (slot_suu) {
case 0:
	this["b_"+bui+"S1"].disabled = this["b_"+bui+"S2"].disabled = this["b_"+bui+"S3"].disabled = 1;
 	this["b_"+bui+"S1"].value = this["b_"+bui+"S2"].value = this["b_"+bui+"S3"].value = "-";
 	this["b_"+bui+"S1_data"]  = this["b_"+bui+"S2_data"]  = this["b_"+bui+"S3_data"]  = "";
	break;
case 1:
	this["b_"+bui+"S1"].disabled = 0;
	this["b_"+bui+"S2"].disabled = this["b_"+bui+"S3"].disabled = 1;
 	this["b_"+bui+"S1"].value = "��";
 	this["b_"+bui+"S1_data"]  = "O";
	this["b_"+bui+"S2"].value = this["b_"+bui+"S3"].value = "-";
	this["b_"+bui+"S2_data"]  = this["b_"+bui+"S3_data"]  = "";
	break;
case 2:
	this["b_"+bui+"S1"].disabled = this["b_"+bui+"S2"].disabled = 0;
	this["b_"+bui+"S3"].disabled = 1;
 	this["b_"+bui+"S1"].value = this["b_"+bui+"S2"].value = "��";
 	this["b_"+bui+"S1_data"]  = this["b_"+bui+"S2_data"]  = "O";
	this["b_"+bui+"S3"].value = "-";
	this["b_"+bui+"S3_data"]  = "";
	break;
case 3:
	this["b_"+bui+"S1"].disabled = this["b_"+bui+"S2"].disabled = this["b_"+bui+"S3"].disabled = 0;
 	this["b_"+bui+"S1"].value = this["b_"+bui+"S2"].value = this["b_"+bui+"S3"].value = "��";
 	this["b_"+bui+"S1_data"]  = this["b_"+bui+"S2_data"]  = this["b_"+bui+"S3_data"]  = "O";
	break;
}
//�����i
for (var i = 1; i <= slot_suu; this.cngSlot(w[I_sS1+i-1],"b_"+bui+"S"+i,i++));

this["b_"+bui+"Del"].disabled = this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "������" ||
								this["b_"+bui].options[this["b_"+bui].selectedIndex].text === "�Z�b�g";
//�h��̏ꍇ
if (bui.lastIndexOf("buki") === -1 && bui.lastIndexOf("cuff") === -1) this.dispData(w[0],bui,w[1]);
}
//------------------------------------�h��x���ύX----------
,cngLv : function (bui) {
var tag=this["b_"+bui], w = tag.value.split(",");
w[I_sLV] = this["b_"+bui+"Lv"].value;
tag.options[tag.selectedIndex].value = w.join(",");
}
//------------------------------------�X���b�g��ԕύX----------
,cngSlot : function (eqid,buttonid) {
if (eqid === "X") return; //���������牽�����Ȃ�
//alert(eqid+":"+no+":"+buttonid);
//�X���b�g��ύX
var no = buttonid.charAt(buttonid.length-1),tag = this[buttonid.substring(0,buttonid.length-2)],w = tag.value.split(","),
	eq = MST_Equip.deco[eqid],
	H = (buttonid.charAt(buttonid.length-2) === "S" ? 0 : I_sT1-I_sS1),
	slot1 = buttonid.substring(0,buttonid.length-1)+"1",slot2 = buttonid.substring(0,buttonid.length-1)+"2",slot3 = buttonid.substring(0,buttonid.length-1)+"3";
if (no === "1") {
	switch (eq[I_bSLOT7]) {
	case "":
	case "0":
	case "1":
		if (this[slot2].value === "��") {
			this[slot2].disabled = 0;
			this[slot2].value = "��";
			w[I_sS2+H] = this[slot2+"_data"] = "O";
			if (this[slot3].value === "��") {
				this[slot3].disabled = 0;
				this[slot3].value = "��";
				w[I_sS3+H] = this[slot3+"_data"] = "O";
			}
		}
		break;
	case "2":
		if (this[slot2].value === "-") return;
		this[slot2].disabled = 1;
		this[slot2].value = "��";
		w[I_sS2+H] = this[slot2+"_data"] = "X";
		if (this[slot3].value === "��") {
			this[slot3].disabled = 0;
			this[slot3].value = "��";
			w[I_sS3+H] = this[slot3+"_data"] = "O";
		}
		break;
	case "3":
		if (this[slot2].value === "-" || this[slot3].value === "-") return;
		this[slot3].disabled = this[slot2].disabled = 1;
		this[slot3].value = this[slot2].value = "��";
		w[I_sS3+H] = w[I_sS2+H] = this[slot3+"_data"] = this[slot2+"_data"] = "X";
		break;
	}
} else if (no === "2" && this[slot2].value !== "��") {
	switch (eq[I_bSLOT7]) {
	case "":
	case "0":
	case "1":
		if (this[slot3].value === "��") {
			this[slot3].disabled = 0;
			this[slot3].value = "��";
			w[I_sS3+H] = this[slot3+"_data"] = "O";
		}
		break;
	case "2":
		if (this[slot3].value === "-") return;
		this[slot3].disabled = 1;
		this[slot3].value = "��";
		w[I_sS3+H] = this[slot3+"_data"] = "X";
		break;
	}
}
//�Z�b�g
w[I_sS1 + +no -1 + H] = this[buttonid+"_data"] = eqid;
switch (eq[I_bDEC]) {
case "":
	var tohankaku = function (t){
		//�z���p�ӂ���
		var hankaku = new Array("��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "�", "1", "2", "3", "4", "5", "�", "�", "�");
		var zenkaku  = new Array("�K", "�M", "�O", "�Q", "�S", "�U", "�W", "�Y", "�[", "�]", "�_", "�a", "�d", "�f", "�h", "�o", "�p", "�r", "�s", "�u", "�v", "�x", "�y", "�{", "�|", "��", "�@", "�A", "�B", "�C", "�D", "�E", "�F", "�G", "�H", "�I", "�J", "�L", "�N", "�P", "�R", "�T", "�V", "�X", "�Z", "�\", "�^", "�`", "�b", "�c", "�e", "�g", "�i", "�j", "�k", "�l", "�m", "�n", "�q", "�t", "�w", "�z", "�}", "�~", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "��", "�P", "�Q", "�R", "�S", "�T", "�E", "�[", "�K");
		//�ϊ��J�n
		for (i=0; i<=88; i++) { //89��������̂ł��̕������J��Ԃ�
			while (t.indexOf(zenkaku[i]) >= 0){ //�Y�����锼�p�J�i���Ȃ��Ȃ�܂ŌJ��Ԃ�
				t = t.replace(zenkaku[i], hankaku[i]); //���p�J�i�ɑΉ�����S�p�J�i�ɒu������
			}
		}
		return t; //�ϊ����I�������\��
	}
	this[buttonid].value = tohankaku(cngDecName(eq[I_bNAME],eq[I_bDEC]));
	break;
case "1": //�J�t
	this[buttonid].value = cngDecName(eq[I_bNAME],eq[I_bDEC]).replace("P","").replace("S","");
	break;
case "2": //�V����
case "3": //�V����
	this[buttonid].value = cngDecName(eq[I_bNAME],eq[I_bDEC]);
	break;
}
tag.options[tag.selectedIndex].value = w.join(",");
//����J�t�̏ꍇ�Z�b�g����ύX�A���Z�b�g�̍쐬
if (buttonid.lastIndexOf("buki") !== -1 || buttonid.lastIndexOf("cuff") !== -1) {
	if (w[I_sS1].length <= 1 && w[I_sS2].length <= 1 &&w[I_sS3].length <= 1) {
		//�f�[�^�Ȃ�
		tag.options[tag.selectedIndex].text = "�Z�b�g";
		if (tag.selectedIndex !== tag.length-1) { //�ŏI�s��
			//�s�폜
			tag.options[tag.selectedIndex].text = "-"; //�������߂ɃZ�b�g�ȊO�̖��̂ɕύX
			this.delData(buttonid.substring(2,buttonid.length-2));
		}
	} else {
		//�f�[�^����
		this[buttonid.substring(0,buttonid.length-2)+"Del"].disabled = false;
		tag.options[tag.selectedIndex].text = (w[I_sS1].length <= 1 ? "" : this[slot1].value.substring(0,2))
											+ (w[I_sS2].length <= 1 ? "" : this[slot2].value.substring(0,2))
											+ (w[I_sS3].length <= 1 ? "" : this[slot3].value.substring(0,2));
		if (tag.selectedIndex === tag.length-1) { //�ŏI�s��
			//�V�K�s�ǉ�
			var o = document.createElement("option");
			o.setAttribute("value", buttonid.lastIndexOf("buki") !== -1 ? "0000,1,O,O,O" : "0000,1,O,O,")
			//o.setAttribute("selected","selected");
			o.appendChild(document.createTextNode("�Z�b�g"));
			tag.appendChild(o);
		}
	}
}
}
//------------------------------------�����X�L���v�Z----------
,calc : function () {
//GR�̕ϓ�
for (var i = 0; i < 5 ;i++) {
	if (this["b_"+BUINAME[i]+"GR"] < this.c_G_Fit.value && this["b_"+BUINAME[i]+"Def"].value > 0) {
		this["b_"+BUINAME[i]+"Def"].firstChild.nodeValue = +this["b_"+BUINAME[i]+"Def"].value + (this.c_G_Fit.value - this["b_"+BUINAME[i]+"GR"]) * 20;
	} else {
		this["b_"+BUINAME[i]+"Def"].firstChild.nodeValue = this["b_"+BUINAME[i]+"Def"].value;
	}
}

this.b_Def_Sum.value = +this.b_headDef.firstChild.nodeValue + +this.b_bodyDef.firstChild.nodeValue + +this.b_armDef.firstChild.nodeValue + +this.b_wstDef.firstChild.nodeValue + +this.b_legDef.firstChild.nodeValue + 1;
this.b_Fp_Sum.value = +this.b_headFp.firstChild.nodeValue + +this.b_bodyFp.firstChild.nodeValue + +this.b_armFp.firstChild.nodeValue + +this.b_wstFp.firstChild.nodeValue + +this.b_legFp.firstChild.nodeValue;
this.b_Wp_Sum.value = +this.b_headWp.firstChild.nodeValue + +this.b_bodyWp.firstChild.nodeValue + +this.b_armWp.firstChild.nodeValue + +this.b_wstWp.firstChild.nodeValue + +this.b_legWp.firstChild.nodeValue;
this.b_Tp_Sum.value = +this.b_headTp.firstChild.nodeValue + +this.b_bodyTp.firstChild.nodeValue + +this.b_armTp.firstChild.nodeValue + +this.b_wstTp.firstChild.nodeValue + +this.b_legTp.firstChild.nodeValue;
this.b_Ip_Sum.value = +this.b_headIp.firstChild.nodeValue + +this.b_bodyIp.firstChild.nodeValue + +this.b_armIp.firstChild.nodeValue + +this.b_wstIp.firstChild.nodeValue + +this.b_legIp.firstChild.nodeValue;
this.b_Dp_Sum.value = +this.b_headDp.firstChild.nodeValue + +this.b_bodyDp.firstChild.nodeValue + +this.b_armDp.firstChild.nodeValue + +this.b_wstDp.firstChild.nodeValue + +this.b_legDp.firstChild.nodeValue;
//�X�L���|�C���g�v�Z
var point = [], senyu_point = [], cuff_hiden = false, cuff_hiden_exe = "", gou = 0, sp = 0, hc = 0, tr = 0, hs = 0, sg = 0, g = 0, rs = 0, ss = 0,
				Tup = 0, Tsup = 0, tkup = 0, tzup = 0, tbup = 0, tdcut = 0, teni_point = [];
for (var i = 0,m=MST_Skill.length; i < m; point[i++] = 0);
for (var i = 0,m=TENINAME.length; i < m; teni_point[i++] = 0);
for (var i = 0; i < 5; i++) { //���ʕ�
	for (var k = 0,eq = MST_Equip[BUINAME[i]][this["b_" + BUINAME[i]].value.substring(0,4)]; k < 5; point[eq[I_bSN1+2*k]] += +eq[I_bSP1+2*k] ,k++);
	//�h��`�F�b�N
	if (eq[I_bCLASS]) {
		if (CLASSTYPE.GClass.indexOf(eq[I_bCLASS]) >= 0) g++;
		if (CLASSTYPE.Shugo.indexOf(eq[I_bCLASS]) >= 0) sg++;
		if (CLASSTYPE.SP.indexOf(eq[I_bCLASS]) >= 0) sp++;
		if (CLASSTYPE.HC.indexOf(eq[I_bCLASS]) >= 0) hc++;
		if (CLASSTYPE.Gosyu.indexOf(eq[I_bCLASS]) >= 0) gou++;
		if (CLASSTYPE.Tenran.indexOf(eq[I_bCLASS]) >= 0) tr++;
		if (CLASSTYPE.Hasyu.indexOf(eq[I_bCLASS]) >= 0) hs++;
		if (CLASSTYPE.Resyu.indexOf(eq[I_bCLASS]) >= 0) rs++;
		if (CLASSTYPE.Sisyu.indexOf(eq[I_bCLASS]) >= 0) ss++;
		if (eq[I_bCLASS] === "O") { //�J�I
			if (eq[I_bNAME].indexOf("G") >= 0) g++;
			var sen_skill_name = eq[I_bDOC].split("��J�I�h��F")[1].split("��")[0].replace("�����U���y","�����U�������y");
			S : for (var k = 0, m=MST_Skill.length; k < m; k++) {
				for (var j = 5,n = MST_Skill[k].length; j < n; j+=2) {
					if (MST_Skill_Exe[MST_Skill[k][j]] == sen_skill_name) {
						senyu_point[k] = j-1;
						break S;
					}
				}
			}
		} else if (eq[I_bTeni]) { //�H��
			teni_point[eq[I_bTeni]] += 1;
		}
	}
	for (var j = 1; j < 4; j++) { //�X���b�g
		//�����i
		if (this["b_" + BUINAME[i] + "S" + j+"_data"].length === 4) {
			var eq = MST_Equip.deco[this["b_" + BUINAME[i] + "S" + j+"_data"]];
			for (var k = 0; k < 4; point[eq[I_bSN1+2*k]] += +eq[I_bSP1+2*k] ,k++);
		}
		//�V����
		if (this["b_" + BUINAME[i] + "T" + j+"_data"].length === 4) {
			var eq = MST_Equip.deco[this["b_" + BUINAME[i] + "T" + j+"_data"]];
			switch (eq[I_bSN1]) {
			case "0" : //�a�ꖡUP
				Tup = 1;
				break;
			case "1" : //�X�L��UP
				Tsup = 1;
				break;
			case "2" : //�U����UP
				tkup++;
				break;
			case "3" : //�����E���UP
				tzup++;
				break;
			case "4" : //�����␳
				Tup = 1;
				break;
			case "5" : //�����r��UP
				Tup = 1;
				break;
			case "6" : //�h���UP
				tbup++;
				break;
			case "7" : //�_���[�W�y��
				tdcut++;
				break;
			case "8" : //�̗͎�����
				hc++;
				break;
			case "9" : //�f���h��
				g++;
				break;
			}
		}
	}
}
for (var j = 1; j < 4; j++) {
	if (this["b_bukiS" + j+"_data"].length === 4) { //����X���b�g
		var eq = MST_Equip.deco[this["b_bukiS" + j+"_data"]];
		if (eq[I_bDEC] !== "3") {
			for (var k = 0; k < 4; point[eq[I_bSN1+2*k]] += +eq[I_bSP1+2*k] ,k++);
		}
		if (eq[I_bTeni]) teni_point[eq[I_bTeni]] += 1 //�H��
	}
	if (this["b_cuffS" + j+"_data"].length === 4) { //�J�t�X���b�g
		var eq = MST_Equip.deco[this["b_cuffS" + j+"_data"]];
		for (var k = 0; k < 4; point[eq[I_bSN1+2*k]] += +eq[I_bSP1+2*k], k++);
		if (MST_Skill[eq[I_bSN1]][3] === 2) cuff_hiden = eq[I_bSN1]; //��`�X�L���J�t
		if (eq[I_bTeni]) teni_point[eq[I_bTeni]] += 1 //�H��
	}
}
var txt = "<div>" + (g>2 ? "G�����ŕ���{��+30" : "") + "</div>";
if (hs*33+tr*6 >= 100 || rs || ss || Tsup) {
	txt += "<div>�펞����ݸUP</div>";
} else if (gou || tr || hs) {
	txt += "<div>�̗�" + (tr || hs ? 100-hs*33-tr*6 : [0,100,90,83,76,70][gou]) + "%�ȏ�Ž���ݸUP</div>";
}
if (tr || hs || rs || ss || tkup) {
	txt += "<div>����/�e��/G�����ŕ���{��+" + ((tr + hs + rs) === 5 ? 80 : ss+tkup >= 5 ? 110 : 15 * (tr + hs + rs) + 20 * (ss + tkup)) + "UP[�����큪]</div>"
}
if (hs || rs || ss || tzup) {
	txt += "<div>����/�e��/G�����ő���" + ((hs + rs) * 2 + (ss + tzup) * 3) + "%UP[�����큪]</div>"
}
if (tr>=2 || hs || rs || ss || Tup) txt += "<div>����/�e��/G�����ŕ��퐫�\UP[�V����]</div>";
this.b_effectT.innerHTML =  txt +
							"<div>" + ["","HC���Ž���150��8�b����","HC���Ž���125��4�b����","HC���Ž���100��2�b����","HC���Ž���75��1.5�b����","HC���Ž���50��1�b����"][hc+sg] + "</div>" +
							"<div>" + ["","SR100�ȍ~������Ұ��10%��","SR100�ȍ~������Ұ��17%��","SR100�ȍ~������Ұ��24%��","SR100�ȍ~������Ұ��27%��","SR100�ȍ~������Ұ��30%��"][sg+tdcut] + "</div>" +
							"<div>" + ["","HC/�e��/G�����Ŗh��+20","HC/�e��/G�����Ŗh��+40","HC/�e��/G�����Ŗh��+60","HC/�e��/G�����Ŗh��+80","HC/�e��/G�����Ŗh��+100"][sg+tbup] + "</div>" +
							"<div>" + (sp ? "HR100�ȍ~���Ŗh��+100" : "") + "</div>";
this.b_gousyuB.style.display = gou || tr || hs || rs || ss || Tsup ? "inline" : "none";
var sup = this.b_gousyuB.value === "�ݸUP����";
//�ő�X�L��������
var exemax = g === 5 ? 12 : g >= 3 ? 11 : 10;
//�X�L��
for (var i = 0, list = [], exe = [], m=MST_Skill.length; i < m; i++) {
	if (point[i] === 0) continue;
	//�X�L���|�C���g���X�g
	list[list.length] = [MST_Skill[i][0],point[i]]; //�X�L����,�|�C���g
	//�����X�L��
	for (var j = 4,ck = 0,n = MST_Skill[i].length; j < n; j+=2) {
		if (MST_Skill[i][j] < 0) {
			//�}�C�i�X����(����������o��)
			if (MST_Skill[i][j] >= point[i]) {
				ck = j;
				if (sup && MST_Skill[i][2] && 3 <= j - 2) ck -= 2;
				break;
			}
		} else {
			//�v���X����(����Ȃ��ꍇ�o��)
			if (MST_Skill[i][j] <= point[i]) {
				ck = j;
				if (sup && MST_Skill[i][2] && MST_Skill[i].length > j + 2) ck += 2;
				if (senyu_point[i] && senyu_point[i] >= ck) ck = 0; //�J�I�ΏۂȂ珜�O
			} else {
				break;
			}
		}
	}
	if (ck && i == cuff_hiden) cuff_hiden_exe = MST_Skill_Exe[MST_Skill[i][ck+1]],ck=0; //��`�X�L���J�t�͏�����O
	if (ck) exe[exe.length] = [MST_Skill[i][1],MST_Skill_Exe[MST_Skill[i][ck+1]],i,point[i]]; //������,�����X�L��,�X�L��ID,�|�C���g
}
//�X�L�����X�g
list.sort(function(a, b) {return b[1] - a[1]});
this.b_skillP.innerHTML = list.join("<br>").replace(/,/g," ");
var t = "";
//�H�ٖh��
for (var i = 0, m=teni_point.length; i < m; i++) {
	if (teni_point[i]) {
		if (TENINAME[i].slice(-2,-1) === "+") {
			for (var j = teni_point[i]-1; j >= 0 ; j--) {
				if (i + j < m) {
					if (TENINAME[i].slice(0,4) === TENINAME[i+j].slice(0,4)) {
						t +=  TENINAME[i+j] + "<br>";
						break;
					}
				}
			}
		} else {
			t +=  TENINAME[i] + "<br>";
		}
	}
}
//�J�I�h��
for (var i = 0, m=senyu_point.length; i < m; i++) {
	if (senyu_point[i]) t +=  MST_Skill_Exe[MST_Skill[i][senyu_point[i]+1]] + "<br>";
}
if (t) t = "<i>" + t + "</i>";
//��`�J�t�X�L��
if (cuff_hiden_exe) t += "<div style='color:darkorange'>" + cuff_hiden_exe + "</div>";
//�����X�L��
exe.sort(function(a, b) {return a[0]-b[0]});
//�H�كX�L��(�X�L���g�g��+1)
if (teni_point[1]) exemax += teni_point[1];
var exelm = exe.slice(0,exemax);
exelm.sort(function(a, b) {
		if (a[3] === b[3]) {
			return a[2] - b[2];
		} else {
			return b[3] - a[3];
		}});
this.c_soko.value = 60; //��͏����l
for (var i = 0; i < exelm.length; i++) {
	t += exelm[i][1] + "<br>";
	switch (exelm[i][1].substring(0,3)) {
	case "�h��+":
	case "�h��-":
		this.b_Def_Sum.value += +exelm[i][1].substring(2);
		break;
	case "�Αϐ�":
		this.b_Fp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "���ϐ�":
		this.b_Wp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "���ϐ�":
		this.b_Tp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "�X�ϐ�":
		this.b_Ip_Sum.value += +exelm[i][1].substring(3);
		break;
	case "���ϐ�":
		this.b_Dp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "�e�ϐ�":
		this.b_Fp_Sum.value += +exelm[i][1].substring(3);
		this.b_Wp_Sum.value += +exelm[i][1].substring(3);
		this.b_Tp_Sum.value += +exelm[i][1].substring(3);
		this.b_Ip_Sum.value += +exelm[i][1].substring(3);
		this.b_Dp_Sum.value += +exelm[i][1].substring(3);
		break;
	case "�S�z��":
		this.c_soko.value = 42;
		break;
	case "�Ύ���":
	case "�t��":
	case "�u�`�M":
		this.c_soko.value = 90;
		break;
	case "������":
		switch (exelm[i][1].charAt(4)) {
		case "1":
			this.b_Def_Sum.value += 15;
			break;
		case "2":
			this.b_Def_Sum.value += 45;
			break;
		case "3":
			this.b_Def_Sum.value += 90;
			break;
		}
		break;
	}
}

//����˔j
if (exe.length > exemax) {
	t +=  "<small>(";
	for (var i = exemax; i < exe.length; t += exe[i++][1]) + "<br>";
	t +=  ")</small>";
}
this.calcDef();
this.b_skillT.innerHTML = t;
}
//------------------------------------�J�̐����ύX----------
,cngFueExe : function (){
if (this.c_G_Que.selectedIndex) {
	var i = this.c_fueDEF.selectedIndex;
	this.c_fueDEF.selectedIndex = 0;
	this.c_fueDEF.style.display = "none";
	this.c_fueDEF_G.style.display = "inline";
	this.c_fueDEF_G.selectedIndex = i;
} else {
	var i = this.c_fueDEF_G.selectedIndex;
	if (i > 0 || this.c_fueDEF_G.style.display != "none") {
		this.c_fueDEF_G.selectedIndex = 0;
		this.c_fueDEF_G.style.display = "none";
		this.c_fueDEF.style.display = "inline";
		this.c_fueDEF.selectedIndex = i;
	}
}
}
//------------------------------------�h��ϐ�----------
,calcDef : function (){
var b_Def_Sum = +this.b_Def_Sum.value,sr_defCut = 100,sr_defAdd = 0;
var tai = {	"b_Fp_Sum" : +this.b_Fp_Sum.value,
			"b_Wp_Sum" : +this.b_Wp_Sum.value,
			"b_Tp_Sum" : +this.b_Tp_Sum.value,
			"b_Ip_Sum" : +this.b_Ip_Sum.value,
			"b_Dp_Sum" : +this.b_Dp_Sum.value};
//�h��
b_Def_Sum += (this.c_gohu.checked ? 16 : 0) + (this.c_tume.checked ? 24 : 0) + (this.c_soko.checked ? +this.c_soko.value : 0) + +this.c_mesi.value + +this.c_tane.value + +this.c_buki.value + +this.c_shien.value;

if (this.c_drink.value !== "0") { //�h�����N
	tai["b_" + this.c_drink.value.charAt(0) + "p_Sum"] += +this.c_drink.value.substring(1);
}
if (this.c_fueTAI.value !== "0") { //�J
	tai["b_" + this.c_fueTAI.value.charAt(0) + "p_Sum"] += +this.c_fueTAI.value.substring(1);
}
if (this.c_sr.value !== "0") { //SR
	switch (this.c_sr.value.charAt(0)) {
	case "S":
		sr_defCut = 100-this.c_sr.value.substring(1,3);
		tai["b_Fp_Sum"] -= this.c_sr.value.substring(3);
		tai["b_Wp_Sum"] -= this.c_sr.value.substring(3);
		tai["b_Tp_Sum"] -= this.c_sr.value.substring(3);
		tai["b_Ip_Sum"] -= this.c_sr.value.substring(3);
		tai["b_Dp_Sum"] -= this.c_sr.value.substring(3);
		break;
	case "B":
		sr_defAdd = +this.c_sr.value.substring(1);
		break;
	case "A":
		tai["b_Fp_Sum"] += +this.c_sr.value.substring(1);
		tai["b_Wp_Sum"] += +this.c_sr.value.substring(1);
		tai["b_Tp_Sum"] += +this.c_sr.value.substring(1);
		tai["b_Ip_Sum"] += +this.c_sr.value.substring(1);
		tai["b_Dp_Sum"] += +this.c_sr.value.substring(1);
		break;
	default:
		tai["b_" + this.c_sr.value.charAt(0) + "p_Sum"] += +this.c_sr.value.substring(1);
	}
}
b_Def_Sum = Math.floor(b_Def_Sum * this.c_fueDEF.value * sr_defCut / 10000) + sr_defAdd+ (this.c_kizuna.checked ? 40 : 0) + +this.c_katsu.value + +this.c_fueDEF_G.value - 150 * this.c_G_Que.value;
if (b_Def_Sum < 1) b_Def_Sum = 1;

this.b_Def_Sum.firstChild.nodeValue = b_Def_Sum
this.b_Fp_Sum.firstChild.nodeValue = tai["b_Fp_Sum"];
this.b_Wp_Sum.firstChild.nodeValue = tai["b_Wp_Sum"];
this.b_Tp_Sum.firstChild.nodeValue = tai["b_Tp_Sum"];
this.b_Ip_Sum.firstChild.nodeValue = tai["b_Ip_Sum"];
this.b_Dp_Sum.firstChild.nodeValue = tai["b_Dp_Sum"];
}
//------------------------------------�e�L�X�g�o��----------
,creText : function (){
var sp = "�@�@�@�@�@�@�@�@�@�@";
var w = this.b_cuff.value.split(",");
var t = "�́F�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@ "+MST_Equip.deco[w[2]][I_bNAME]+" "+MST_Equip.deco[w[3]][I_bNAME]+"\n";
var w = this.b_buki.value.split(",");
t += "���F�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@�@ "+MST_Equip.deco[w[2]][I_bNAME]+" "+MST_Equip.deco[w[3]][I_bNAME]+" "+MST_Equip.deco[w[4]][I_bNAME]+"\n";
if (this.b_head.value === "0000,1,O,O,O") {
	t += "���F�Ȃ�\n";
} else {
	var w = this.b_head.value.split(",");
	t += "���F"+(MST_Equip.head[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"�@"+("  "+this.b_headDef.firstChild.nodeValue).slice(-3)+"�@"+MST_Equip.deco[this.b_headS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_headS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_headS3_data][I_bNAME];
	if (MST_Equip.head[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_headT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_headT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_headT3_data][I_bNAME]+"]";
	t += "\n"
}
if (this.b_body.value === "0000,1,O,O,O") {
	t += "���F�Ȃ�\n"
} else {
	var w = this.b_body.value.split(",");
	t += "���F"+(MST_Equip.body[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"�@"+("  "+this.b_bodyDef.firstChild.nodeValue).slice(-3)+"�@"+MST_Equip.deco[this.b_bodyS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_bodyS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_bodyS3_data][I_bNAME];
	if (MST_Equip.body[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_bodyT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_bodyT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_bodyT3_data][I_bNAME]+"]";
	t += "\n"
}
if (this.b_arm.value === "0000,1,O,O,O") {
	t += "�r�F�Ȃ�\n"
} else {
	var w = this.b_arm.value.split(",");
	t += "�r�F"+(MST_Equip.arm[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"�@"+("  "+this.b_armDef.firstChild.nodeValue).slice(-3)+"�@"+MST_Equip.deco[this.b_armS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_armS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_armS3_data][I_bNAME];
	if (MST_Equip.arm[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_armT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_armT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_armT3_data][I_bNAME]+"]";
	t += "\n"
}
if (this.b_wst.value === "0000,1,O,O,O") {
	t += "���F�Ȃ�\n"
} else {
	var w = this.b_wst.value.split(",");
	t += "���F"+(MST_Equip.wst[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"�@"+("  "+this.b_wstDef.firstChild.nodeValue).slice(-3)+"�@"+MST_Equip.deco[this.b_wstS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_wstS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_wstS3_data][I_bNAME];
	if (MST_Equip.wst[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_wstT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_wstT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_wstT3_data][I_bNAME]+"]";
	t += "\n"
}
if (this.b_leg.value === "0000,1,O,O,O") {
	t += "�r�F�Ȃ�\n"
} else {
	var w = this.b_leg.value.split(",");
	t += "�r�F"+(MST_Equip.leg[w[0]][I_bNAME]+sp).substring(0,13)+"Lv"+w[1]+"�@"+("  "+this.b_legDef.firstChild.nodeValue).slice(-3)+"�@"+MST_Equip.deco[this.b_legS1_data][I_bNAME]+" "+MST_Equip.deco[this.b_legS2_data][I_bNAME]+" "+MST_Equip.deco[this.b_legS3_data][I_bNAME];
	if (MST_Equip.leg[w[0]][I_bCLASS] === "N") t += "["+MST_Equip.deco[this.b_legT1_data][I_bNAME]+" "+MST_Equip.deco[this.b_legT2_data][I_bNAME]+" "+MST_Equip.deco[this.b_legT3_data][I_bNAME]+"]";
	t += "\n"
}
t += "\n";
t += "�h��́F"+this.b_Def_Sum.firstChild.nodeValue;
t += " �Αϐ��F"+this.b_Fp_Sum.firstChild.nodeValue;
t += " ���ϐ��F"+this.b_Wp_Sum.firstChild.nodeValue;
t += " ���ϐ��F"+this.b_Tp_Sum.firstChild.nodeValue;
t += " �X�ϐ��F"+this.b_Ip_Sum.firstChild.nodeValue;
t += " ���ϐ��F"+this.b_Dp_Sum.firstChild.nodeValue+"\n";
t += "\n";
t += "�����X�L��\n";
t += this.b_skillT.innerHTML.replace(/<br>/ig,",");
if (CK_MAC) {
	t = t.replace("�T","I");
	t = t.replace("�U","II");
	t = t.replace("�V","III");
	t = t.replace("�W","IV");
	t = t.replace("�X","V");
	t = t.replace("�Y","VI");
	t = t.replace("�Z","VII");
	t = t.replace("�[","VIII");
	t = t.replace("�\","IX");
	t = t.replace("�]","X");
}
return t;
}
//------------------------------------�t�@�C���ǂݍ���----------
,getFile : function (data){
//�ǂݍ���
//���s�J�n(�h��W�J�𒆎~�������s)
//clearTimeout(TimeId);
//for (var i = 0; i < 6; i++) for (var eqid in MST_Equip[BUINAME[i]]) if (typeof MST_Equip[BUINAME[i]][eqid] === "string") MST_Equip[BUINAME[i]][eqid] = MST_Equip[BUINAME[i]][eqid].split(",");
////�d��(�擪�P�����Ȃ�����)�Ή�
//for (var s = 0; s < 6; s++) {
//	for (var i = 0,w = data[s].split(","),m = w.length; i < m; i++) w[i] = (w[i].length === 5) ? w[i].substring(1,5) : w[i];
//	data[s] = w.join(",");
//}
//

var select_name = ["buki","head","body","arm","wst","leg","cuff"];

//this.b_buki.value = data[0];
//for (var i = 1,w = data[0].split(",");i < 4;this.cngSlot(w[1+i],"b_bukiS"+i), i++);

//if (data[6]){
//	this.b_cuff.value = data[6];
//	for (var i = 1,w = data[6].split(",");i < 4;this.cngSlot(w[1+i],"b_cuffS"+i), i++);
//}
for (var i = 0,m = data.length; i < m; i++) {
	var list = data[i].split("/");
	this["b_" + select_name[i]].length = 0;
	for (var j = 0,n = list.length; j < n; j++) {
		var wk = list[j].split(",");
		if (wk[0].length !== 4 ||
			wk[1].length !== 1 ||
			wk[2].length > 4 ||
			wk[3].length > 4 ||
			wk[4].length > 4 ) {
			alert("���̃t�@�C���͓ǂݍ��߂܂���");
			location.href = "skillsimu.htm";
		}
		var eqid = wk[0];
		//if (eqid === "0000") continue;

		var o = document.createElement("option");
		o.setAttribute("value", list[j]);
		if (i >= 1 && i <= 5) {
			o.appendChild(document.createTextNode(MST_Equip[select_name[i]][eqid][I_bNAME]));
		} else{
			if (j > 0) this["b_" + select_name[i]].options[this["b_" + select_name[i]].length-1] = null;
			o.appendChild(document.createTextNode("�Z�b�g"));
		}
		this["b_" + select_name[i]].appendChild(o);
		
		this["b_" + select_name[i]].selectedIndex = j;
		this.cngData(select_name[i]);
	}
}
this.calc();
}

}//�O���[�o��
global.Init();
global.Init=null;
return global;
})(document);

//------------------------------------�C�x���g�\��t��----------
(function(){
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
addEvent(window,"resize",
function () {
	document.getElementById("f_search").style.height = document.getElementById("f_bougu").style.height = (Number(window.innerHeight) || document.documentElement.clientHeight || document.body.clientHeight) - 85 + "px";
});
addEvent(window,"load",
function () {
//		this.onresize();
	document.getElementById("f_search").style.height = document.getElementById("f_bougu").style.height = (Number(window.innerHeight) || document.documentElement.clientHeight || document.body.clientHeight) - 85 + "px";

	var w = location.search.substring(1).split("|");
	if (w.length !== 6 && w.length !== 7) return;
//	SkillForm.getFile(w);
	setTimeout(function (){
		SkillForm.getFile(w);
		}, 64);
});
addEvent(document,"dblclick",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	if (t.id.substring(0,5) === "c_rep") {t.style.backgroundColor = t.style.backgroundColor ? "" : "gray";}
	else if (t.id === "s_head" || t.id === "s_body" || t.id === "s_arm" || t.id === "s_wst" || t.id === "s_leg" || t.id === "s_deco" || t.id === "s_cuff") SkillForm.setData(t.value,t.id.substring(2));
	/*@if (true)
	@else@*/
	if (t.tagName.toUpperCase() === "OPTION") {
		var p = t.parentNode;
		if (p.id === "s_head" || p.id === "s_body" || p.id === "s_arm" || p.id === "s_wst" || p.id === "s_leg" || p.id === "s_deco" || p.id === "s_cuff") SkillForm.setData(p.value,p.id.substring(2));
	}
	/*@end@*/
});
addEvent(document,"click",
function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
	switch (t.id) {
	case "c_input":
		SkillForm.dispInput();
		break;
	case "c_series":
		SkillForm.dispSeriesList(t.id);
		break;
	case "c_skill1":
	case "c_skill2":
	case "c_skill3":
		SkillForm.dispSkillList(t.id);
		break;
	case "c_minus":
		for (var i=0;i<7;SkillForm.c_cuff_lm.options[i++].text = (t.checked ? "�}" : "+") + i);
		break;
	case "search_B":
		SkillForm.search();
		break;
	case "s_head":
	case "s_body":
	case "s_arm":
	case "s_wst":
	case "s_leg":
	case "s_deco":
	case "s_cuff":
		SkillForm.dispData(t.value,t.id.substring(2),7);
		break;
	case "s_headYA":
	case "s_bodyYA":
	case "s_armYA":
	case "s_wstYA":
	case "s_legYA":
	case "s_decoYA":
	case "s_cuffYA":
		var w = t.id.substring(0,t.id.length-2);
		SkillForm.setData(SkillForm[w].value,t.id.substring(2,t.id.length-2));
		break;
	case "sub_WinRemove_B":
		SkillForm.removeDec();
		SkillForm.closeSubWin();
		break;
	case "sub_WinClear_B":
		SkillForm.removeAllDec();
		SkillForm.closeSubWin();
		break;
	case "sub_WinClose_B":
		SkillForm.closeSubWin();
		break;
	case "b_defimg":
		if (t.value === "�h��ϐ�"){
			t.value = "�摜";
			SkillForm.d_MF.style.display = SkillForm.d_MB.style.display = SkillForm.d_FF.style.display = SkillForm.d_FB.style.display = "none";
			SkillForm.def_Box.style.display = "";
		} else {
			t.value = "�h��ϐ�";
			SkillForm.def_Box.style.display = "none";
			SkillForm.d_MF.style.display = SkillForm.d_MB.style.display = SkillForm.d_FF.style.display = SkillForm.d_FB.style.display = "inline";
		}
		break;
	case "b_gousyuB":
		t.value = t.value === "�ݸUP����" ? "�ݸUP�Ȃ�" : "�ݸUP����";
		SkillForm.calc();
		break;
	case "b_head":
	case "b_body":
	case "b_arm":
	case "b_wst":
	case "b_leg":
		SkillForm.dispData(t.value.substring(0,4),t.id.substring(2),t.value.substring(5,6));
		break;
	case "b_cuffDel":
	case "b_bukiDel":
	case "b_headDel":
	case "b_bodyDel":
	case "b_armDel":
	case "b_wstDel":
	case "b_legDel":
		SkillForm.delData(t.id.substring(2,t.id.length-3));
		SkillForm.calc();
		break;
	case "b_headLv":
	case "b_bodyLv":
	case "b_armLv":
	case "b_wstLv":
	case "b_legLv":
		SkillForm.dispData(SkillForm[t.id.substring(0,t.id.length-2)].value.substring(0,4),SkillForm[t.id.substring(0,t.id.length-2)].id.substring(2),SkillForm[t.id.substring(0,t.id.length-2)].value.substring(5,6));
		break;
	case "b_save":
		SkillForm.b_skill.value = SkillForm.creText().replace(/<br>/g, "\n");

		var select_name = ["buki", "head", "body", "arm", "wst", "leg", "cuff"];
		var fileContent = "###data �ύX���Ȃ���###";

		if (window.confirm("�S�ĕۑ����܂����H\nOK:�S�� �L�����Z��:�\�����̂�")) {
			for (var i = 0, m = select_name.length; i < m; i++) {
				var wk = "";
				// ����J�t�̍Ō�̍s�͗v��Ȃ�(�Z�b�g�݂̂������炢��)
				for (var j = 0, n = SkillForm["b_" + select_name[i]].length - ((i === 0 || i === 6) && SkillForm["b_" + select_name[i]].length !== 1 ? 1 : 0); j < n; j++) {
					wk += "/" + SkillForm["b_" + select_name[i]].options[j].value;
				}
				SkillForm["b_" + select_name[i] + "_list"].value = wk.substring(1);
				fileContent += wk.substring(1) + (i < m - 1 ? "|" : ""); // Add | separator except for the last element
			}
		} else {
			for (var i = 0, m = select_name.length; i < m; i++) {
				SkillForm["b_" + select_name[i] + "_list"].value = SkillForm["b_" + select_name[i]].value;
				fileContent += SkillForm["b_" + select_name[i]].value + (i < m - 1 ? "|" : ""); // Add | separator except for the last element
			}
		}

		fileContent += "###\n###�e�L�X�g###\n";

		// ���I�ɐ��������e�L�X�g������ǉ�
		fileContent += SkillForm.creText().replace(/<br>/g, "\n");

		// �e�L�X�g�t�@�C���𐶐����A�_�E�����[�h�𑣂�
		var blob = new Blob([fileContent], { type: "text/plain" });
		var url = URL.createObjectURL(blob);
		var a = document.createElement("a");
		a.href = url;
		a.download = "skill_data.txt";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		break;


	

	case "b_text":
		var f4=window.open("","");
		f4.document.open("text/html; charset=Shift_JIS");
		f4.document.write("<font face='�l�r �S�V�b�N'><pre>");
		f4.document.write(SkillForm.creText());
		f4.document.write("</pre>");
		f4.document.close();
		f4=null;
		break;
	case "c_gohu":
	case "c_tume":
	case "c_soko":
	case "c_kizuna":
		SkillForm.calcDef();
		break;
	case "c_buki":
		t.select();
		break;
	default:
		if (t.id.substring(0,5) === "c_rep") {
			t.style.backgroundColor = t.style.backgroundColor ? "" : "gray";
		} else if (t.id.lastIndexOf("S1") !== -1 || t.id.lastIndexOf("S2") !== -1 || t.id.lastIndexOf("S3") !== -1 ||
					t.id.lastIndexOf("T1") !== -1 || t.id.lastIndexOf("T2") !== -1 || t.id.lastIndexOf("T3") !== -1) {
			if (t.disabled) return;
			SkillForm.dispData(SkillForm[t.id+"_data"],"deco",7);
			SkillForm.dispDecoList(t.id);
		} else if (t.tagName.toUpperCase() === "INPUT" && t.type.toUpperCase() === "BUTTON") {
//				�{�^���Ȃ̂ɂȂɂ��������Ȃ��Ȃ珬���
			SkillForm.setInput(t.name.substring(5),t.value);
			SkillForm.closeSubWin();
		} else {
			SkillForm.closeSubWin();
		}
		/*@if (true)
		@else@*/
		if (t.tagName.toUpperCase() === "OPTION") {
			var p = t.parentNode;
			if (p.id === "s_head" || p.id === "s_body" || p.id === "s_arm" || p.id === "s_wst" || p.id === "s_leg" || p.id === "s_deco" || p.id === "s_cuff") SkillForm.dispData(p.value,p.id.substring(2),7);
		}
		/*@end@*/
	}
});
var change_event = function (evt) {
	/*@if (true)
	var t = evt.srcElement;
	@else@*/
	var t = evt.target;
	/*@end@*/
//			SkillForm.change_event(t.id);
	switch (t.id) {
	case "c_teni":
		SkillForm.c_series.value = "-",SkillForm.sub_WinBody./*@if (@_jscript_version < 9) innerText @else@*/ textContent /*@end@*/ = SkillForm.c_series_data = "",SkillForm.c_andor.disabled = SkillForm.c_slot.disabled = SkillForm.c_minus.disabled = SkillForm.c_upg.disabled = false;
		break;
	case "c_hr":
		if (SkillForm.b_head.length > 1) SkillForm.cngData("head");
		if (SkillForm.b_body.length > 1) SkillForm.cngData("body");
		if (SkillForm.b_arm.length > 1) SkillForm.cngData("arm");
		if (SkillForm.b_wst.length > 1) SkillForm.cngData("wst");
		if (SkillForm.b_leg.length > 1) SkillForm.cngData("leg");
		if (+SkillForm.c_hr.value <=50){
			SkillForm.cngSlot("O","b_cuffS1");
			SkillForm.cngSlot("O","b_cuffS2");
			SkillForm.calc();
			SkillForm.b_cuffS1.disabled = SkillForm.b_cuffS2.disabled = 1;
		} else {
			SkillForm.b_cuffS1.disabled = SkillForm.b_cuffS2.disabled = 0;
		}
		break;
	case "b_buki":
	case "b_cuff":
	case "b_head":
	case "b_body":
	case "b_arm":
	case "b_wst":
	case "b_leg":
		SkillForm.cngData(t.id.substring(2));
		SkillForm.calc();
		break;
	case "b_bukiLv":
		SkillForm.cngLv(t.id.substring(2,t.id.length-2));
		break;
	case "b_headLv":
	case "b_bodyLv":
	case "b_armLv":
	case "b_wstLv":
	case "b_legLv":
		SkillForm.cngLv(t.id.substring(2,t.id.length-2));
		SkillForm.cngData(t.id.substring(2,t.id.length-2));
		SkillForm.calc();
		break;
		case "b_read":
			/*
			var tg = document.getElementById("f3");
			tg.action = "upload.cgi";
			tg.encoding = "multipart/form-data";
			tg.submit();
			tg=null;
			*/
		
			var file = evt.target.files[0];
		
			if(file.type !== "text/plain") {
			  alert("�ۑ������e�L�X�g�t�@�C����I�����Ă��������B");
			  document.getElementById("b_read").value="";
			  return;
			}
		
			//FileReader�̍쐬
			var reader = new FileReader();
			//�e�L�X�g�`���œǂݍ���
			reader.readAsText(file, 'SJIS');
		
			//�Ǎ��I����̏���
			reader.onload = function(ev){
			  var text = reader.result.split("\r\n")[0];
			  var data = "";
		
			  if(!text || !text.match("^###data ")) {
				alert("�ۑ������e�L�X�g�t�@�C����I�����Ă��������B");
				document.getElementById("b_read").value="";
				return;
			  }
				
			  data = text.split("###")[2];
		
			  var url = document.URL.replace(/\?.*$/,"");;
			  location.href = url + "?" + data;
			}
		
			break;
	case "c_G_Que":
		SkillForm.cngFueExe();
	case "c_G_Fit":
		SkillForm.calc();
	case "c_mesi":
	case "c_sr":
	case "c_tane":
	case "c_drink":
	case "c_fueDEF":
	case "c_fueDEF_G":
	case "c_fueTAI":
	case "c_buki":
	case "c_shien":
	case "c_katsu":
		SkillForm.calcDef();
		break;
	}
}
addEvent(document.getElementById("c_hr"),"change",change_event);
addEvent(document.getElementById("b_buki"),"change",change_event);
addEvent(document.getElementById("b_cuff"),"change",change_event);
addEvent(document.getElementById("b_head"),"change",change_event);
addEvent(document.getElementById("b_body"),"change",change_event);
addEvent(document.getElementById("b_arm"),"change",change_event);
addEvent(document.getElementById("b_wst"),"change",change_event);
addEvent(document.getElementById("b_leg"),"change",change_event);
addEvent(document.getElementById("b_bukiLv"),"change",change_event);
addEvent(document.getElementById("b_headLv"),"change",change_event);
addEvent(document.getElementById("b_bodyLv"),"change",change_event);
addEvent(document.getElementById("b_armLv"),"change",change_event);
addEvent(document.getElementById("b_wstLv"),"change",change_event);
addEvent(document.getElementById("b_legLv"),"change",change_event);
addEvent(document.getElementById("b_read"),"change",change_event);

addEvent(document.getElementById("c_mesi"),"change",change_event);
addEvent(document.getElementById("c_sr"),"change",change_event);
addEvent(document.getElementById("c_tane"),"change",change_event);
addEvent(document.getElementById("c_drink"),"change",change_event);
addEvent(document.getElementById("c_fueDEF"),"change",change_event);
addEvent(document.getElementById("c_fueDEF_G"),"change",change_event);
addEvent(document.getElementById("c_G_Que"),"change",change_event);
addEvent(document.getElementById("c_G_Fit"),"change",change_event);
addEvent(document.getElementById("c_G_Fit"),"change",change_event);
addEvent(document.getElementById("c_katsu"),"change",change_event);
addEvent(document.getElementById("c_buki"),"change",change_event);
addEvent(document.getElementById("c_shien"),"change",change_event);
addEvent(document.getElementById("c_teni"),"change",change_event);

//��̏ڍו\��
addEvent(document.getElementById("sub_WinBody"),"mouseover",
function (evt) {
	if (SkillForm.sub_Win_id.lastIndexOf("S1") !== -1 || SkillForm.sub_Win_id.lastIndexOf("S2") !== -1 || SkillForm.sub_Win_id.lastIndexOf("S3") !== -1 ||
		SkillForm.sub_Win_id.lastIndexOf("T1") !== -1 || SkillForm.sub_Win_id.lastIndexOf("T2") !== -1 || SkillForm.sub_Win_id.lastIndexOf("T3") !== -1) {
		/*@if (true)
		var t = evt.srcElement;
		@else@*/
		var t = evt.target;
		/*@end@*/
		if (t.tagName.toUpperCase() === "INPUT") SkillForm.dispData(t.name.substring(5),"deco",7);
	}
});
})();
