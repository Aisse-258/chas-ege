(function(){

var vb=sl(0.1,0.95,0.01);
var vc=sl(0.1,0.95,0.01);
var t1=om.rusbukv.iz(2);
var v1=sl(2);

window.vopr.txt='Если гроссмейстер '+t1[0]+'. играет белыми, то он выигрывает у гроссмейстера '+
	t1[1]+'. с вероятностью '+vb.ts()+'. Если '+t1[0]+'. играет черными, то '+t1[0]+
	'. выигрывает у '+t1[1]+'. с вероятностью '+vc.ts()+'. Гроссмейстеры '+t1[0]+'. и '+t1[1]+
	'. играют две партии, причем во второй партии меняют цвет фигур. Найдите вероятность того, '+
	'что '+[
		[t1[0]+'. выиграет',t1[1]+'. проиграет'].iz()+' оба раза.',
		[t1[1]+'. выиграет',t1[0]+'. проиграет'].iz()+' оба раза.',
		t1.iz()+'. '+['вы','про'].iz()+'играет ровно одну партию.',
	][v1];

window.vopr.ver=[[
	(vb*vc).ts(),
	((1-vb)*(1-vc)).ts(),
	(vb*(1-vc)+vc*(1-vb)).ts(),
][v1]];

window.vopr.rsh=[
	'Результаты первой и второй партий  - независимые события.'+
		'Вероятности того, что '+t1[0]+'. выиграет партию белыми и того, что '+
		t1[0]+'. выиграет партию чёрными, перемножаются: $'+
		vb.ts()+'\\cdot'+vc.ts()+'='+(vb*vc).ts()+'$',

	'Вероятность того, что '+t1[1]+'. выиграет партию чёрными, равна $1-'+vb.ts()+'='+(1-vb).ts()+'$.'+
		'Вероятность того, что '+t1[1]+'. выиграет партию белыми, равна $1-'+vc.ts()+'='+(1-vc).ts()+'$.'+
		'Результаты первой и второй партий  - независимые события. '+
		'Вероятности того, что '+t1[1]+'. выиграет партию белыми и того, что '+
		t1[1]+'. выиграет партию чёрными, перемножаются: $'+
		(1-vb).ts()+'\\cdot'+(1-vc).ts()+'='+((1-vb)*(1-vc)).ts()+'$',
	'Результаты первой и второй партий  - независимые события.'+
	'Нас интересуют две ситуации: либо '+t1[0]+'. проиграл партию белыми, но выиграл чёрными, '+
	'либо наоборот. Эти два события несовместны.'+
	'Значит, итоговая формула - это сумма двух произведений:'+
	'$(1-'+vb.ts()+')\\cdot'+vc.ts()+'+'+vb.ts()+'\\cdot(1-'+vc.ts()+')='+(vb*(1-vc)+vc*(1-vb)).ts()+'$',
][v1];

})();
//Обзад 319355
