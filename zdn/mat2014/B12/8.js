(function() {

var f,d1=0.1111,d2;
for(;!(d1*10).isZ();){
	f=sluchch(5,100);
	d2=sluchch(f+5,200);
	d1=1/(1/f-1/d2);
}
var n1=sluchch(1,d1);
var n2=sluchch([d1,n1+1].maxE(),d1*2);
var t1=[['наибольшем',d2,sluchch(5,d2)+d2],['наименьшем',sluchch(5,d2),d2]].iz();

var c=	'Для получения на экране увеличенного изображения лампочки в лаборатории используется собирающая линза с главным '+
		'фокусным расстоянием $f = '+f+'$ см. Расстояние $d_1$ от линзы до лампочки может изменяться в пределах от $'+
		n1+'$ до $'+n2.ts()+'$ см, а расстояние $d_2$ от линзы до экрана — в пределах от $'+t1[1]+'$ до $'+t1[2]+'$ см. Изображение на экране'+
		' будет четким, если выполнено соотношение  $\\frac{1}{d_1}+\\frac{1}{d_2}=\\frac{1}{f}$. Укажите, на каком '+
		''+t1[0]+' расстоянии от линзы можно поместить лампочку, чтобы еe изображение на экране было чeтким. '+
		'Ответ выразите в сантиметрах.';

window.vopr.txt=c.plusminus();
window.vopr.ver=[d1.ts()];

window.vopr.kat['log']=0;
window.vopr.kat['prz']=0;
window.vopr.kat['drs']=0;
window.vopr.kat['tri']=0;
})();

