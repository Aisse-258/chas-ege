(function() {
	'use strict';
	var a = [sluchch(2,99),sluchch(-99,-2)].iz(),
		b = sluchch(1,89),
		c = sluchch(1,2),
		d = [sluchch(1,99),sluchch(-99,-1)].iz(),
		f = (c%2)?(-1):(1),
		g = ['\\cos','\\sin'].shuffle();

	chas2.task.setTask({
		text: ('Найдите значение выражения $$\\frac{'+a+g[0]+' '+b+'^\\circ}{'+g[1]+' '+(90+c*180-b)+'^\\circ}+'+d+'$$').plusminus(),
		answers: ''+(a*f+d),
		tags: {
			'tri': 1,
		},
	});

})();
