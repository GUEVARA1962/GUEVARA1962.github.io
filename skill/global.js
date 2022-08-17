(function(){
var Fulltohalf = (function (){
	var han = "0123456789.,-+ABCDEFGHIJKLMNOPQRSTUVWXYZ�������������������������������������������ܦݱ������������������������������������������ܦݧ�����������������������������������������ζ�����������������������γ";
	var zen = "�O�P�Q�R�S�T�U�V�W�X�D�C�|�{�`�a�b�c�d�e�i�g�h�i�j�k�l�m�n�o�p�q�r�s�t�u�v�w�x�y�A�C�E�G�I�J�L�N�P�R�T�V�X�Z�\�^�`�c�e�g�i�j�k�l�m�n�q�t�w�z�}�~���������������������������������������������������������������ĂƂȂɂʂ˂̂͂Ђӂւق܂݂ނ߂�������������񂟃@���B���D���F���H���b�Ⴣ�ヅ�僇�������������������������Âłǂ΂тԂׂڂς҂Ղ؂ۃK�M�O�Q�S�U�W�Y�[�]�_�W�d�f�h�o�r�u�x�{�p�s�v�y�|��";
	return function (strVal) {
		for (var i=0,str = "",m=strVal.length,c = "",n=0; i<m; i++){
			c = strVal.charAt(i),n = zen.indexOf(c,0);
			str += (n >= 0) ? han.charAt(n) : "�" + c;
		}
		return str;
	}
})();
SkillForm.setDecoList([
["�V����",[
"2CB3", //�a�ꖡUP�̈�
"2CB4", //�X�L��UP�̈�
"2CB5", //�U����UP�̈�
"2CB6", //�����E���UP�̈�
"2CB7", //�����␳�̈�
"2CB8", //�����r��UP�̈�
"2CB9", //�h���UP�̈�
"2CBA", //�_���[�W�y���̈�
"2CBB", //�̗͎����񕜂̈�
"2CBC" //�f���h��̈�
]],["�V����",[
"17BA", //[�Ў�]�^���]�a
"17BB", //[�o��]�n�ŏp
"17BC", //[�匕]�ガ����
"17BD", //[�匕]�K�[�h�a�T
"17BE", //[�匕]�K�[�h�a�U
"17BF", //[����]�юh��
"17C0", //[�e��]�����a�グ
"17C1", //[��]���ړ��p�T
"17C2", //[��]���ړ��p�U
"17C3", //[��]���ړ��p�V
"17C4", //�X�^���l�̈�
"17C5", //�����͈͊g��̈�
"2B04", //�Α����̈�
"2B05", //�������̈�
"2B06", //�������̈�
"2B07", //�������̈�
"2B08", //�X�����̈�
"2B09", //��ბ����̈�
"2B0A", //���������̈�
"2B0B", //�ő����̈�
"2B0C", //��S�̈�
"2B0D", //�ʏ�e�̈�T
"2B0E", //�ђʒe�̈�T
"2B0F", //�U�e�̈�T
"2B10", //�O�b�֒e�̈�T
"2B11", //�Ή��e�̈�T
"2B12", //����e�̈�T
"2B13", //�d���e�̈�T
"2B14", //�X���e�̈�T
"2B15", //�ʏ�e�̈�U
"2B16", //�ђʒe�̈�U
"2B17", //�U�e�̈�U
"2B18", //�O�b�֒e�̈�U
"2B19", //�Ή��e�̈�U
"2B1A", //����e�̈�U
"2B1B", //�d���e�̈�U
"2B1C", //�X���e�̈�U
"3918", //�X�L���g�̈�
"3919", //�M�]�����̈�
"391A", //�I�������̈�
"391B", //���������̈�
"391C", //�Z�������̈�
"391D", //�X�E�����̈�
"391E", //�z�������̈�
"391F", //���������̈�
"3920", //�x�������̈�
"3921", //���������̈�
"3922", //���������̈�
"3923", //�ϐk�����̈�
"3924", //�ϓŋ����̈�
"3925", //�ϖ������̈�
"3926", //�ϐ������̈�
"3927", //�ߖ񋭉��̈�
"3928", //�K�������̈�
"3929", //�K�������̈�
"392A", //�ە������̈�
"392B", //���ˋ����̈�
"392C", //�I�������̈�
"392D", //���C�����̈�
"3A61", //���������̈�
"3AFD", //�������̈�
"3D97", //�Ґi�����̈�
"4086" //���������̈�
]]
]);
SkillForm.setSeriesList([
["���",["�u���[GX","�s�V���c","�I�E�r�[�g|�p�s����","�K�[�f�B�A��,�w���p�[|�M���h�K�[�h,�q�[���[","�M���h�i�C�g|���C�h,�v���C�x�[�g","�L���O���u�X�^","�N���I�r","�W���[�W�[","�X�J��","�X�e�B�[��","�Z�t�e�B","�`�F�[��","�l�R�s�A�X","�n�C���^","�n���^�[","�o�g��","�s�A�X","�r�X�g��","�x���g","�{�[��","�z�[�v","�}�J���p","�}�t���t","���^��","������","�����z�A","���[�L�[","���[�W��","���U�[���C�g","����","�E","SP"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["�����X�^�[",["�A�C���[","�A�J��","�A�N��","�A�r�I","�C�[�I�X","�G�X�s�i","�G���v���X","�J�C�U�[","�K�m�X","�K�u���X","�K�����K","�K���I�X","�M�U�~","�L����","�N�A��","�N�V��","�N�b�N","�O���r�h","�O����","�Q�l�|�X","�Q�����X","�S�S","�R���K","�U�U�~","�U���U","�^���X","�f�B�A�u��","�h���S��>�~��","�o�T��","�p���A","�q�v�m","�u�����S","�u���t�@���S","�t���t��","�x��","�~�d�n|�g���^�}","�}�O�V�A","���X","���m�u���X","�����@","�����B","�����B�F��","�����S","�����|�X","���R","���C�A","���E�X","���b�N�X","��,��|�z,��","���|�ʑ�","�_�y|�_��","���F|���q","����|�s��","�鍳|�C��"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["�N�G�X�g",["�A�[�N","�A�X�[��","�A�X�n���e","�A�i�L","�A�v�J��","�A�i�g��","�A����","�C���[�N>�A�t�e�B","���H��","�J�J�u","�N�N�{","�R�J��","�S�X�y��","�W�F�X","�W���K�[","�V���b�Z","�f�X�M�A","�m���[��","���I�f���I","���[�N","�S�_|���q","�[��|�[��","����|���^","���闘|�k����","����","�f�v����"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["��N�G�X�g",["�A���G�b�^>�e���y�X�g","���B������>�A���O���t","���F���g>�~�X�g����","�W�X�g","�f�B�W�M�A>>�T���o�V�I��","�v���M�A>>�r�X�e�}","���N�X�g","���C����>���[�h","����|����"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["��/�V/�e",["���H��","�A���S��","�A���e��","�E�B���h","���@��","�G�~�b�g","�I�f�B�o","�K�X��","�K���o","�O�@��","�O���A","�X�g���}","�f�B�I��","�f�B�{�A","�g�A","�g���h","�n���h","�t���C��","�u���b�c","�t����","�|�{��","�����M","�����X","���_�c�~|�I�J�~","����|����","��E|���","����|����"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["��`",["�Ў茕","�o��","�匕","����","�����X","�K�������X","�n���}�[","��J","������","�ׯ������","ϸ�ȯĽ�߲�","���C�g","�w�r�B","�|"]],
	["�f��",["�G���[�f","�[�i�f","�L�����f","���R�f","�A�J���g�f","�A�N���f","�A�r�f","�C�[�I�X�f","���@�C�X�f","���H���f","���F�m���f","�G�X�s�X�f","�G�X�s�i�f","�G���g���f","�G���v���X�f","�J�C�U�[�f","�K�m�X�f","�K�m���f","�K�����K�f","�K���I�X�f","�M�U�~�f","�N�A���f","�N�b�N�f","�N�N�X�f","�N�V���i�f","�O���r�f�f","�O���r�h�f","�O�����f","�Q�l�|�X�f","�Q�����X�f","�S�S�f","�R���K�f","�U�U�~�f","�T�x�[�W�f","�W�F�r�A�f","�V���E���E�f|�~�^�}�f","�\���f","�f�B�A�[�X�f","�f�B�A�u���f","�f�B�X�f","�h���M���f","�h���S���f","�g���y�h�f","�o�T���f","�o���J���f","�p���A�f","�s�G�g���f","�q�v�m�f","�q�v�b�N�f","�q�v�V�[�f","�t�@���m�f","�t�����L�[�f","�v�����_�f","�u�����S�f","�t���t���f","�t�����f","�w�b�W�f","�x���f","�|�J���f","�z�[�v�f","�}�O�V�A�f","�~�d�n�f|�g���^�}�f","���m�f�r���f","���m�u���X�f","�����@�f","�����B�f�F��","�����B�f�F��","�����|�X�f","���I�n�[�g�f","���I�\�E���f","���C�A�f","���E�X�f","���b�N�X�f","���i�f","���r�f","��ׂf|�ʑ��f","�_�y�f|�_���f","��_�y�f|���_�y�f","���F�f|���q�f","���e�f|���A�f","��[�f|�땣�f","�n���t�f|���a�t�f","�i��f|����f","�{�e�f|�{�ʂf","�Ɨ��f|�����f","�W��f|�g��f","�鐪�f|�鉤�f"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["��q��",["�A�T�[�N","�A�u���h","�S���b�N","�f�]���g","�f����","�n���K��","�u���b�N","���Z�[�K"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["�V�L",["���C","����","����","�N���I��","����y","���؂y","���P�y","�c��GX","�����~�G","�A���W���f","�E�B��","�P�C�X","�j���C","�j���t�@","�n�����m","�{�j�g","�~�j�I��","���C���_","���C�I�X","�������H","���h�N��","�����X"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["�J�I",["�V���K��","���M�I�X","�r�V|���V","�S�A","�K���L��","�W���I�E","�i���K","�o���M�X","�u���L","�x���I","���T"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["�H��",["�n���h�y","�U���U�y","�O���r�y","�o�����y","�{�K�o�h�y","�A�m���y","�C�i�K�~�y","�K�X���y","�K�m�y","�M�A�y","�g���h�y","�h���M���y","�q���W�y","�~�h�y","���R�y","���b�N�X�y","���@�V���y","���E�X�y","�u�����S�y","�G�X�s�i�y","�q�v�m�y","�t���t���y","�U�U�~�y"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["�c",["�L������","�R�T�[�W��","�R�����h","�R�����_�f","�V���b�c>>�c���B���K","�\���_�[�g>�Q�C�u��","�e�l�[��","�t�F��","�~�N�Z�X","���f�B�A>�����f�B","��l","�ዾ","�c��"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["��l��",["�W���h���f","�r�[�^�[�f","�R���v�g�f","�����N�X�f","�A���~���f","�J�V�E�X�f","�J�����@�f","�`���g���f","���G�u���f","���Y���F�f","�p�V�I","���@�N�X","�m���b�N","���@���G","�G�M�G�l","�A�g��","�A�l�V�X","�E�B�_>�X�e�B�[�_","���B�l��","�G�N�G�X","�I�[����","�I�l��","�I���N�g","�I���P�V�X","�I���h��","�J�o���o","�L�j�I��","�N���[�W","�R���Z���f","�U�[�J�[|�`�F�C�T�[","�V�J��","�X�g���K","�`�F�j�[","�f�B�[�i","�f�B�[��","�g���{�_","�j�X��","�q�K�N��","�v�y��","�u���I","�y���Z","�}�A�f��","�}�_��","�����e�B","���f�I�X","���E�Z�X�f","��e|�ĉe","�g��|�g�O","�Ղ̂���"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["�}����",["�~�������y","�t�@�����y","�V�������y","�̖a","�E�^���e�y","�t�����e�y","�������e�y","���J���e�y","�̉r","���Ԃf|��Ԃf","�J�^���e�y"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["�C�x���g",["�V�����f�B","�o���P�b�g","�^���^","�O���f�B�y","�G�����V�f","�V�t�j�B�y","���t�@���f","�ؐC�y","�A���K�m|�S���K�m","���C�y","�t�H���Z�f","�{���l�f","�R���j�B�y","�h�D����GX","�w���g�f�F�C���A�X�f","�S���f|�����f","���[���F","�}�[�u��","�L���[��","�S�z�f|���z�f","���z�b�N","�����˂���","�A�X�[���f","�A�g��","�E�i�y���g","�G�N�Z��","�I�g�m","�I���E��","�J�C�I��","�K�E�V�J","�K�l�g","�J���C�X","�L�m�X�n","�L�����R���m","�N�I�C�Y","�O���b�V��","�N���t�g","�N�����g","�R���[�f","���܂���","�V�F���J|�`�F�X�J","�V���b�N","�X�g�����O","�T���^","�V�E�X�f","�V�G���[","�W�F�X�f","�X�t�H��","�^���O�X|�R�o���^","�^���O�X�f|�R�o���^�f","�`�[���f","�`���`��","�`���[���n","�h�O���A","�g���[�g","�n�[���F�X�g>>�R�s�A�C","�n�C���^�t","�n���o�_�[|�g���b�J�[","�o���b�^","�n���L��","�s�A�X(�����)","�s�A�X(����)","�s�A�X(�C����)","�s�A�X(�r�M�i�[)","�s�A�X(�����)","�t�F�C�N","�u����","�t���K�_�f","���X�J�o","���[���X","���v�P","���[�X","�����Z","���A���I","���P�[�[","���`����","���C���X�f","���E�A�X�f","���A�[�X|���C�[�h","����|���V","�[��|����","�S�_|���q","�S�`�f|���`�f","��g�t|�ŌˉB","�W��|���_","����|�v��"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["��ʓV",["�؂��؂��O�[�N","�^���l�R","�^���h���X"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["�l�J�t�F",["�����^","�A�f���X>�f���X�m","�A�~�e�B�G>�s�X�e�B�X","�G���u���C�X","�I���f��>�I���e��","�J�C��","�K�K�`��","�L���[���[","�W�����s��>�u�����N","�X�t��","�\���[�l","�f�[�[��","�g�C�X�g","�g�����X","�g���s�I","�}�M�T>>�u���z|�E�B�U�[>>�}�[�M�A","���s�k","���G�[�U>���T�[�U","���N�X>���L�X","���M�X>���M���N�X","���O�l"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["�C�x���g",["�J�t�F�s�A�X"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["�K�`��",
	["�A�O���A>�t���E�A","�E�[�R��","�G�R�[��>�f�B�A��","�G�X�E�N�F��>�p���f�E��","�I�[�r�X","�K���Y>���C���h","�L���r�B","�N�����X|�N�H�[�g","�P����","�R���^�I","�X�^���i","�[�[��>�V���i�C�g","�[���C","�e�B�[�A>���B���g","�f�B�N�g>�f�B���b�g","�f���[��","�n�E�N�X","�t�@���R","�q�v�m���[�^>�K���[�_","�q�v�m���A>�t�B�A����","�s���[�^","�t�H�[��>�t�B�A�X","�j���o�X","�~���[�Y>�e���[��","�~���h","���g���A","���[�f��","���G�b�g","���[�X","���^�[��","���C��","���b�g","���o�X�g","���]|���]","���]|�n�]","���z","����"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["���m [�����\�͂P�g�ɂ܂Ƃ�]",["�A�Z���X�F�E���o�k","�C���W���F�N���o��","�E�[�Y�B�F���F���K","���@���f�F���F���V","���B���F�N���V�b�h","���F�X�i�F�A���X","�I�[���F�t�B�[�u��","�J�^�t�F�~�[��","�Q���I���F�~�b�V�i","�J���t�F�����X","�Q���[���F�r���X","�N���l�X�F�t�@�N�g","�P�b�N�F�v���[�X","�S���G�X�F�W�F�A��","�R���V���F�g���X�p","�R���Z�g�F���T","�V�f���F�p�X�}","�W���b�O�F�V�v����","�X�C�t�h�F�V���b�h","�X�B�[�j�F�V�����X","�X�N���F�}�O�k�X","�X�f�B�u�F�A�X�e�B","�X�}�g�X�F�^�j�C","�f�X���F�P�v�g","�m�b�g�F�}�V����","�o�[�N�F���B����","�o�V���X�F�A�~���X","�o�X�e���F�n�I�X","�o���o���F�Z�����[","�t�@�L���F�t�����g","�t�@�����F�\�����X","�t�B�u���F�A�K�g��","�t�F�T�[�F�J�E���g","�t�H���g�D�F���F���X","�u���K���F���v����","�v���f�^�F�X�e����","�t���Q�g�F�}�h�j�J","�t���C�g�F�X�P�C�i","�v���N�X�F�t�B�f��","�x���m�F�J���m","���^���F���@���N","�����f�X�F�t���[�W","���K�X�F�����v��","���[���[�F�M�G�[��","���K�[���F�X�v����","����F�t���[�g","�s�j�F�i�[���[","���z�F�w�C�c"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["�K�� [�����\�͂P�g�ɂ܂Ƃ�]",["�A���W���F�l�E����","�O���[�X�F�A�G�g�X","�V�A���X�F�t�����X","�V�^�[�F�i�[�_","�X�t�F���F�E�F�l�X","�f�B�[���F�p���t�F","�f�N�X�^�F���e���X","�p�b�V�I�F�~�i��","�v���W�h�F�n�L����","�w���t���F���L�g��","�~�[�c�F�F�\�t�B�X","�~�X�N�F�n�E�b�g","���\�X�F�y���u��","�n�l�c�@�F�p�X","�v�����F�T�U�[��","�r���F���[���O"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["�s�A�X",["�G�i","�W�I","�Z�P��","�g���A"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["����",["�A���V��","�W�F���Y","���t","���b�J","�t�B�[�l","�t�B�[��","�t�B�j�X","�R�g�i","�A���u","�L���R�E","���R���X","���D���B","�A���V�X","���N���X","���r�E�X","�A���V�A","�t�@�r��","���j�K��","�f�B���X","�t�B���X","�f�X�g��G","���b�J","�y����","�U�b�J","�����^�i","�V�����t","�J�}��","���[�`�F","���r��","�V���C","�A���t�B","�J�C�t�@","�X�g���U","�T�C�l","�E�C���O","�s���r","�v���u","�V������","�f�B����","�~���A��","�J�T�~�G","�w�V����","�p���Z","�����^","�n�E��","�}���W��","�T�N�t�B","�A�X��","�A�C���[|�������[","�a�t","�A�[�x��","���B�[�`","�T���^","�V�G��","�V���e�B","�Y�B�x�C","�Z�C���[","�e�����I","�n�[�[","�u�����e","�x���f�B","�����i��","�a��","�P�����m","�A�E��","�N���t�B","�`�A����"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["����(�哢��)",["�f�X�g��G","�A�[�r�^�[G"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["FP",["�M���h�o�[�h|�X�J���[","���N��","�����[�K|�t�@������"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["�R���{",["�f�B�X�^|�C�I�j�A","�L���[�N|�N�[�i","����̍b�h|�K�N�̕�����","�\��E�m�b�h|�s��B���̊�","�~���̐�����|���E���̍b�h","�O���C|�E���s�i","�m�G��|�r���[�l�C","��ʋ㍆S�^|��ʓ�B�^","���b�N�u�[�P|�A���J�C�U�[","�A�f��|�N���[�f�B�A","���L�l|��~�N","��","�I�����W��|�h���`�F","�J�C�W|���S","�����[��|�����o��","CE�P�u���[|AB���C���[","�v���O","�����@|�덆�@","�lark.�O�U|�Q���@","�����E|�j�[�i"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["��`",["�Ў茕","�o��","�匕","����","�����X","�K�������X","�n���}�[","��J","������","�ׯ������","ϸ�ȯĽ�߲�","���C�g","�w�r�B","�|"]]
],
["�L�b�g",["�n�m���C","��m�|��","���m����","���m�̓J","���m����","��m�ӑ�","�g�m�o��","���m�t��","�e�m����","���m���Y","���m�ʕ�","�z�m�C�e","���m�V��","�����_��","�y���O��","�O�[�_��","IS�w��","�A�X�e��","���A��","�L������","�~�N","�Ԍ��瑕,�R�m��","�p�Y��,�S���S��","�V������","�u���C�Y","�����y�[�W","���C�W","�G�X�s�}�X�N","�A�I�m�R","�}���h��","�v�[�M�[","�K�E�X","�E�F�[�o","�M���o�[�g","�u���C�g","�W���A��","�e�B���N","�I�i�u��","�V���e��","�w�����A","�e�B����","�f�B�i�g","�h�D�P","�O���k","���","���c�X","���c�X","�g�c�X","�G���H��"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["��",["�A�[�W�F","�A�r�b�g","�A���}","�A���X�g","�C�N�X","�G�f�B�I","�I���b�g","�J�[�}�C��|�T�W�^���I","�J�E�`��","�J�G�V�X","�J�}����","�K���g�X","����˂���","����˂���","�N���[��","�N���[�X","�O�����A","�Q�m��","�Q���g","�S���g","�V�G�i","�V�F���t","����˂���","�X�e�m","�X���[�g","�Z���i","�]�f�b�N","�_�X�N","�_���e,���f�B","�f�B���H��","�e�N�X�g","�f����,�V���h�E|�J�I�X,�\�E��","�g���X","�i�[�K","�l�R�_��","�m���[���w�b�h","�o�[�j�[","�s�N�X","�t�@����","�t�F����","�v���~�X>�u���X","����|���[","�z���C�g���^��>>�V�G��","�}�C�X�g","�}�S�X","�}�M�T|�E�B�U�[","�}����","���e�l��","�����e�B","���u���[","���Q���A","���t��","���A��","���C�X�g","����,�S��|�g��,�C��","����,���|�^��,�e�R","�_��,�L���m��|���j,�A�N�Z��","����|����","��M,�I�j|�\��,�C�e","�����m�|�����m�H�D","�Ԕ��m�|�Ԕ��m�H�D","�������c,�P�����c","�V��","�I����"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
],
["�p�b�P�[�W",["�A�b�V��","�A�~�X�^","�K�j�A","�Y��","�U�C��","�Z�N�e�B","�o���f","�y���t","���t�˂���","���O�k��","��V"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["PS3/4/WiiU",["���g���[�F�A�~��"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
],
["���T",["�G�~�[��","�A���U��","���F����","�G�A���A��","�G�N�X�g","�L�����b�W","����˂���","�O�����f","�N���b�X","�S�V�b�N>�x�C��","�X�}�[�g","�X�t�B�A","�\���t���A","�f���I�n","�e���I�O","�g�D�[����","�m����","�n�Z�����H���t�b�g","�q�X�g���A","�u�[�g�A�b�v","�t�@�~�ʂs�V���c","�t�B�f�B>>���F���t","�؂��؂��O�[�N","���[�X","���C�_�[>���C�W���O","�����f�O","�����[�W��","���W�E�F�A","���E�F�l�X","����,�V��|�b,�V��","����,����|�ܔM,�ՏP","����,����|�ԉ�,����","���n,�V��|�v��,��","�̕P�c�h�u�`�s�A�X"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1}),
	["HL",["�P���X","�G���X","�f�B�I�X","���O��","�J���X"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["EX",["�A�C���[�̃l�R�~�~","�G�N�X�g��","�P���r�t�F�C�N","�`���[��","�t�F���E"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})],
	["PS3/WiiU",["�m���B�[�F���O�C","����,�p�Y��"].sort(function (a, b){return Fulltohalf(b) < Fulltohalf(a) ? 1 : -1})]
]
]);
SkillForm.setSeries = function (_id,_mei) {
	if (_mei === "-") return "";
	var mei = _mei.replace(/�f/g,"").replace(/�y/g,"").replace(/GX/g,"");
	var series = {C:"9",low_hr:0,high_hr:0,F1:[mei],F2:[],S:"",R:[]};
	switch (_id.charAt(0)) {
	case "0": //���
		series.C = "1-#2m#1c#";
		switch (_id.substring(1)) {
		case "2": //�����X�^�[
			series.high_hr = 1999;	//HR�܂�
			break;
		case "5": //����
			series.R = ["�y","ZY","ZF","ZX"];
			break;
		case "7": //�f��
			series.low_hr = 2001;	//GR����
			series.R = ["�y","ZY","ZF","ZX"];
			break;
		case "8": //��q��
			series.C = "1s#";
			break;
		case "9": //�V�L
			series.C = "1t#";
			break;
		case "11": //�H��
			series.low_hr = 2200;	//GR����
			series.high_hr = 3000;	//GSR�܂�
			break;
		}
		break;
	case "1": //�c
		series.C = "2-#2m#2u#";
		break;
	case "2": //�C�x���g
		series.C = "1e#1i#";
		break;
	case "3": //�l�J�t�F
		series.C = "3-#3e#";
		break;
	case "4": //�K�`��
		series.C = "4g#";
		break;
	case "5": //�L�b�g
		series.C = "4k$";
		break;
	case "6": //�p�b�P�[�W
		series.C = "5p#";
		break;
	case "7": //���T
		series.C = "5-#";
		break;
	}
	switch (mei) {
	case "�x���g":
		series.F1 = ["�A�C�A��","�X�L�����C�g","�n�C�h"];
		break;
	case "�`�F�[��":
		series.F1 = ["�`�F�[��","�b�E"];
		break;
	case "�����|�X":
		series.F1 = ["�����|�X","�M�A�m�X"];
		break;
	case "���C�A":
		if (_id.charAt(1) !== "7") series.F1 = ["���C�A","���I�n�[�g","�S�[���h���i","�f�E���i"];
		break;
	case "���E�X":
		if (_id.charAt(1) !== "7") series.F1 = ["���E�X","���I�\�E��","�V���o�[�\��","�r�E�\��"];
		break;
	case "�L���O���u�X�^":
		series.F1 = ["�L���O���u�X�^","�j�E"];
		break;
	case "�s�A�X(�����)":
		series.F1 = ["�g���r���[�g�s�A�X"];
		break;
	case "�s�A�X(����)":
		series.F1 = ["�Ռ��̃s�A�X","�ˎ�̃s�A�X","�挩�̃s�A�X","�̐g�̃s�A�X","�����̃s�A�X"];
		break;
	case "�s�A�X(�C����)":
		series.F1 = ["�}�[���s�A�X","�C�m�̃s�A�X","�X�J�C�s�A�X","�V��̃s�A�X","�����h�s�A�X","��n�̃s�A�X"];
		break;
	case "�s�A�X(�r�M�i�[)":
		series.F1 = ["���[�t�X�s�A�X","�V�[�j�[�s�A�X","�W���[�k�s�A�X","�A���u�X�s�A�X","�v���[�g�s�A�X"];
		break;
	case "�s�A�X(�����)":
		series.F1 = ["�\�E�C��","�A���T�Y","�G�I���[","���O�Y","�Q�[�{","�e�C���Y","�E���Y","�G�C���Y"];
		break;
	case "�J�t�F�s�A�X":
		series.F1 = [];
		series.C = "3e#";
		series.S = "�s�A�X";
		break;
	case "�s�A�X":
		series.F1 = ["���b�h�s�A�X","�u���[�s�A�X","�u���b�N�s�A�X","�z���C�g�s�A�X","�Z�t�e�B"];
		break;
	case "�l�R�s�A�X":
		series.F1 = [];
		series.S = "�l�R";
		break;
	case "�t�F�C�N":
		series.F1 = [];
		series.S = mei;
		series.R = ["�`���`��"];
		break;
	case "�o���b�^":
	case "�R�T�[�W��":
	case "���^��":
	case "�s�V���c":
	case "�W���[�W�[":
	case "�ዾ":
		series.F1 = [];
		series.S = mei;
		break;
	case "SP":
		series.F1 = [];
		series.S = mei;
		series.C = "9";
		break;
	case "���m�u���X":
		series.F1 = ["���m�u��","���m�f�r��"];
		if (_mei === "���m�u���X�f") series.R = ["���m�f�r��"];
		break;
	case "�h���S��>�~��":
		series.F1 = ["�h���S��","�~���o���J��","�~�����[�c"];
		break;
	case "�R�����h":
		series.F1 = ["�R�����h","�R�����_"];
		series.high_hr = 1999;
		break;
	case "�R�����_":
		series.low_hr = 2001;
		break;
	case "�z���C�g���^��>>�V�G��":
		series.F1 = ["�z���C�g���^��","�Z���X�g","�V�G��"];
		break;
	case "�v���M�A>>�r�X�e�}":
		series.F1 = ["�v���M�A","�I���V�I��","���N�C�G��","�r�X�e�}"];
		break;
	case "�f���I�n":
		series.F1 = ["�f���I","�N�A�b�h","�b������"];
		break;
	case "�G�N�X�g":
		series.R = ["�G�N�X�g��"];
		break;
	case "�}�M�T|�E�B�U�[":
		series.F1 = ["�}�M�T","�N���E���[","�E�B�U�[","�t�@�E�X�g"];
		break;
	case "�}�M�T>>�u���z|�E�B�U�[>>�}�[�M�A":
		series.F1 = ["�}�M�T","�N���E���[","�u���z","�E�B�U�[","�t�@�E�X�g","�}�[�M�A"];
		break;
	case "�f�B�W�M�A>>�T���o�V�I��":
		series.F1 = ["�f�B�W�M�A","�v���G�[��","�T���o�V�I��"];
		break;
	case "�K�[�f�B�A��,�w���p�[|�M���h�K�[�h,�q�[���[":
		series.F1 = ["�K�[�f�B�A��","�w���p�[","�q�[���[","�M���h�K�[�h","�f�E�K�[�h"];
		break;
	case "�L�m�X�n":
		series.F1 = ["�L�m�X","�q�����X","�u���V�X","�J���G��"];
		break;
	case "�L������":
		series.F1 = ["�L�����x���f","�L�������t�X","�L�����A�s��"];
		break;
	case "�G�X�s�i":
		series.F1 = ["�G�X�s�i","���@�C�X"];
		break;
	case "�V���b�c>>�c���B���K":
		series.F1 = ["�V���b�c","�q���t�F","�c���B���K"];
		break;
	case "�G�X�s�}�X�N":
		series.F1 = ["�G�X�s"];
		series.F2 = ["�}�X�N"];
		break;
	case "�n�C���^�t":
		series.F1 = ["�n�C���^�t�w�����E","�n�C���^�q�w�����E"];
		break;
	case "�u�[�g�A�b�v":
		series.F1 = ["�u�[�g�A�b�v","�u�[�g�e"];
		break;
	case "�t�B�f�B>>���F���t":
		series.F1 = ["�t�B�f�B","�G�s�f�B","���F���t�B","���F���t"];
		break;
	case "�n�[���F�X�g>>�R�s�A�C":
		series.F1 = ["�n�[���F�X�g","�t���C","�N���m�X","���A�[","�n�[�f�X","�R���k�[","�R�s�A�C"];
		series.R = ["�t���C��"];
		break;
	case "�`���[���n":
		series.F1 = [];
		series.S = "�`���[��";
		break;
	case "�V���E���E|�~�^�}":
		series.F1 = ["�V���E���E","�~�^�}","�V�����e"];
		break;
	case "�f�B�A�u��":
		series.F1 = ["�f�B�A�u��","�f�B�A"];
		if (_mei === "�f�B�A�u���f") series.R = ["�f�B�A�["];
		break;
	case "�Ў茕":
		series.F1 = ["�����I","�K�[�l�b�g","���x���C�g"];
		series.S = "����";
		break;
	case "�o��":
		series.F1 = ["�t���T","�A���W�X�g","���Y���C�g"];
		series.S = "�o��";
		break;
	case "�匕":
		series.F1 = ["�N���x��","�R�[����","�W���R��"];
		series.S = "����";
		break;
	case "����":
		series.F1 = ["�V���G��","�N�H�[�c","�X�s�l��"];
		series.S = "���_";
		break;
	case "�����X":
		series.F1 = ["�Z���\","���r�[","�p�C���[�u"];
		series.S = "�V��";
		break;
	case "�K�������X":
		series.F1 = ["�I���o","�T�t�@�C�A","�A�C�I��"];
		series.S = "�C�c";
		break;
	case "�n���}�[":
		series.F1 = ["�J�����A","�G�������h","�W�F�C�h"];
		series.S = "�݊�b";
		break;
	case "��J":
		series.F1 = ["�n�V���g","�p�[��","�A�Q�[�g"];
		series.S = "�t��";
		break;
	case "������":
		series.F1 = ["�q�X�C","�u���b�h"];
		series.S = "����";
		break;
	case "���C�g":
		series.F1 = ["���E����","�g�p�[�Y","�V�g����"];
		series.S = "�e��";
		break;
	case "�w�r�B":
		series.F1 = ["�R�R","�g���}����","�y���h�b�g"];
		series.S = "�e��";
		break;
	case "�|":
		series.F1 = ["�O���i�_","���s�X","�^�[�R�C�Y"];
		series.S = "�|�S";
		break;
	case "�ׯ������":
		series.F1 = ["�I�j�L�X","���`��"];
		series.S = "�a��";
		break;
	case "ϸ�ȯĽ�߲�":
		series.F1 = ["�^���U�i","�w�}�^�C�g"];
		series.S = "����";
		break;
	case "�v����":
		series.F1 = ["�R���g��","�W���g��","�A���g��","�r���g��","�^���g��"];
		break;
	case "�������c,�P�����c":
		series.F1 = ["�������c","�P�����c","���̋@�����u"];
		break;
	case "�t�����L�[":
		series.F1 = ["�t����"];
		break;
	case "�^���O�X|�R�o���^":
		series.F1 = mei.split(/[|,]/);
		if (_mei === "�^���O�X�f|�R�o���^�f") {
			series.low_hr = 2001;
		} else {
			series.high_hr = 1999;
		}
		break;
	case "�G���v���X":
		series.F1 = ["�G���v���X","�G���v��"];
		break;
	case "���I�n�[�g":
		series.F1 = ["���I�n�[�g","�n�[�g"];
		break;
	case "���I�\�E��":
		series.F1 = ["���I�\�E��","�\�E��"];
		break;
	case "�f�B�A�[�X":
		series.F1 = ["�f�B�A�[�X","�A�[�X"];
		break;
	case "���m�f�r��":
		series.F1 = ["���m�f�r��","���m�f�r"];
		break;
	case "�q�v�V�[":
		series.F1 = ["�q�v�V�[","�q�v�V"];
		break;
	case "�����B":
		series.high_hr = 0;
		series.R = ["��","��","��"];
		break;
	case "�����B�F��":
		series.high_hr = 0;
		series.F1 = ["�����B��"];
		series.S = "�F��";
		break;
	case "�����B�F��":
		series.F1 = ["�����B��"];
		series.S = "�F��";
		break;
	case "�����B�F��":
		series.F1 = ["�����B�f��"];
		series.S = "�F��";
		break;
	case "�J�o���o":
		series.F1 = ["�J�o���o","�J�o��"];
		break;
	case "�g���{�_":
		series.F1 = ["�g���{�_","�g���{"];
		break;
	case "�A�C���[|�������[":
		series.F1 = ["�A�C���[","�������[","�A���V��","�`���g��","�~�P","�V��","�`���V��","�N���V��"];
		break;
	default:
		if (mei.indexOf("�F") !== -1) {
			series.F1 = mei.split("�F");
		} else if (mei.indexOf("|") !== -1) {
			series.F1 = mei.split(/[|,]/);
		} else if (mei.indexOf(",") !== -1) {
			series.F1 = mei.split(",");
		} else if (mei.indexOf(">") !== -1) {
			series.F1 = mei.split(">");
		}

		break;
	}

	return series;
}
})();
