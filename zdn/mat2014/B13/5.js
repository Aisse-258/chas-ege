(function() {

var b=sluchch(2,5);//Коэф.
var c=sluchch(1,20);//Уровень в БОЛЬШЕМ сосуде

var v1=sl1();//0-из меньшего в больший
var v2=sl1();
var v3=sl1();//1-площадь

var m='форму правильной '+['тре','четырёх','пяти','шести','семи'].iz()+'угольной призмы,';
var g1=['цилиндрический сосуд,','сосуд, имеющий '+m];
var g2=['цилиндрическом сосуде','сосуде, имеющем '+m];
var h=om.zhidkost.re.iz();

window.vopr.ver=[''+(!v1?c*b*b:c)];
window.vopr.txt='В '+g2[v2]+' уровень '+h+' достигает '+(v1?c*b*b:c)+' см. На какой высоте будет находиться уровень '+
				h+', если перелить содержимое первого сосуда во второй '+g1[v2]+' '+
				(function(){
					var str = '';
					if (v3){
						str = 'площадь основания';
					}else if (v2){
						str = 'сторона основания';
					}else{
						str = 'диаметр';
					}
					return str;
				})()+
				' которого в '+chislitM(v3?b*b:b,'раз','раза','раз')+' '+
				(v1?'больше':'меньше')+
				' '+
				(function(){
					var str = '';
					if (v3){
						str = 'площади основания';
					}else if (v2){
						str = 'стороны основания';
					}else{
						str = 'диаметра';
					}
					return str;
				})()+' первого? Ответ выразите в сантиметрах.';

window.vopr.kat['log']=0;
window.vopr.kat['prz']=0;
window.vopr.kat['drs']=0;
window.vopr.kat['tri']=0;
})();
