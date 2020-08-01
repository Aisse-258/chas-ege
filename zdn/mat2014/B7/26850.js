(function() {
	NAinfo.requireApiVersion(0, 0);
	var b = 1; // Основание для логарифма 
	var a = 1; // Подлогарифмическое первого 
	var c = 1; // Подлогарифмическое второго
	var y = [1, 2, 3].iz();
	do {
		c = sluchch(2, 20);
		a = sluchch(c * 2, 100, c);
		b = c / a;
		a = Math.pow(a, y);
		c = Math.pow(c, y);
	} while (a > 100 || a % 3 === 0 || a % 7 === 0 || String(b).length > 5); //чтобы исключить задания с длинными дробями в основании

	NAtask.setTask({
		text: 'Найдите значение выражения $$\\log_{' + b + '}{' + a + '} - \\log_{' + b + '}{' + c + '} $$',
		answers: -y,
	}, {
		tags: {
			log: 1,
		},
	});
})();
//https://math-ege.sdamgia.ru/problem?id=26850
//Автор: Арахов Никита
//Reviewed and commited by Aisse-258
