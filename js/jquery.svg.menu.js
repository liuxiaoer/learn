var menu;
function drawInitial(svg) {
	var g = svg.group();
	svg.circle(g, 125, 125, 35, {
		fill : 'none',
		stroke : 'rgba(204,204,204,.2)',
		'stroke-width' : 10
	});
	g = svg.group({
		stroke : 'black',
		'stroke-width' : 2
	});
	svg.circle(g, 125, 125, 100, {
		fill : 'none',
		stroke : 'rgba(204,204,204,.5)',
		'stroke-width' : 1
	});
	g = svg.group({
		stroke : '#ccc'
	});
	svg.line(g, 125, 25, 125, 85);
	svg.line(g, 125, 165, 125, 225);
	svg.line(g, 26, 125, 85, 125);
	svg.line(g, 165, 125, 222, 125);
	var d0 = Math.sin(45 / 180 * Math.PI) * 100;
	var d1 = Math.sin(45 / 180 * Math.PI) * 40;
	svg.line(g, 125 - d0, 125 - d0, 125 - d1, 125 - d1);
	svg.line(g, 125 + d0, 125 - d0, 125 + d1, 125 - d1);
	svg.line(g, 125 - d0, 125 + d0, 125 - d1, 125 + d1);
	svg.line(g, 125 + d0, 125 + d0, 125 + d1, 125 + d1);
	// g = svg.group({transform :
	// 'translate(135,45)',fill:'rgba(204,204,204,.5)'});

	var setting = "M32,20v-8h-4.734c-0.141-0.391-0.289-0.771-0.469-1.146l3.344-3.339l-5.656-5.661l-3.344,3.344"
			+ "C20.777,5.026,20.375,4.933,20,4.792V0h-8v4.792c-0.383,0.141-0.781,0.234-1.145,0.406l-3.34-3.344l-5.66,5.661l3.34,3.339"
			+ "C5.02,11.229,4.871,11.609,4.734,12H0v8h4.734c0.137,0.391,0.285,0.771,0.461,1.146l-3.34,3.339l5.66,5.661l3.34-3.344"
			+ "c0.363,0.172,0.762,0.266,1.145,0.406V32h8v-4.792c0.375-0.141,0.777-0.234,1.141-0.406l3.344,3.344l5.656-5.661l-3.344-3.339"
			+ "c0.18-0.375,0.328-0.755,0.469-1.146H32z M16,20.083c-2.211,0-4-1.791-4-4c0-2.208,1.789-4,4-4c2.207,0,4,1.792,4,4"
			+ "C20,18.292,18.207,20.083,16,20.083z";

	// svg.path(g,setting);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group0'
	});
	var path = 'M125 25 L125 85 A40 40 45 0 1 153.2842712474619 96.7157287525381 L195.71067811865476 54.28932188134526 A100 100 45 0 0 125 25';
	svg.path(g, path);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group1'
	});
	path = 'M195.71067811865476 54.28932188134526 L153.2842712474619 96.7157287525381 A40 40 45 0 1 165 125 L225 125 A100 100 45 0 0 195.71067811865476 54.28932188134526';
	svg.path(g, path);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group2'
	});
	path = 'M225 125 L165 125 A40 40 45 0 1 153.2842712474619 153.2842712474619 L195.71067811865476 195.71067811865476 A100 100 45 0 0 225 125';
	svg.path(g, path);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group3'
	});
	path = 'M195.71067811865476 195.71067811865476 L153.2842712474619 153.2842712474619 A40 40 45 0 1 125 165 L125 225 A100 100 45 0 0 195.71067811865476 195.71067811865476';
	svg.path(g, path);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group4'
	});
	path = 'M125 225 L125 165 A40 40 45 0 1 96.7157287525381 153.2842712474619 L54.28932188134526 195.71067811865476 A100 100 45 0 0 125 225';
	svg.path(g, path);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group5'
	});
	path = 'M54.28932188134526 195.71067811865476 L96.7157287525381 153.2842712474619 A40 40 45 0 1 85 125 L25 125 A100 100 45 0 0 54.28932188134526 195.71067811865476';
	svg.path(g, path);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group6'
	});
	path = 'M25 125 L85 125 A40 40 45 0 1 96.7157287525381 96.7157287525381 L54.28932188134526 54.28932188134526 A100 100 45 0 0 25 125';
	svg.path(g, path);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group7'
	});
	path = 'M54.28932188134526 54.28932188134526 L96.7157287525381 96.7157287525381 A40 40 45 0 1 125 85 L125 25 A100 100 45 0 0 54.28932188134526 54.28932188134526Z';
	svg.path(g, path);

	g = svg.group({
		fill : 'rgba(204,204,204,.5)',
		id : 'group8'
	});
	svg.circle(g, 125, 125, 30);

	$('g[id^=group]').mouseover(function() {
		$(this).attr('fill', 'rgba(204,204,204,.8)').css('cursor', 'pointer');
	}).mouseout(function() {
		$(this).attr('fill', 'rgba(204,204,204,.5)').css('cursor', 'default');
	});

	$('#group8').click(function() {
		var dis = $('#group0').css('display');
		if ('none' == dis) {
			$('g:not(#group8)').show();
		} else {
			$('g:not(#group8)').hide();
		}
	});

}

$(function() {
	$('#menu').svg({
		onLoad : drawInitial
	});
});
