var menu;
function drawInitial(svg) {
	var g = svg.group();

	var defs = svg.defs(g);
	var stop0 = [ 0.5, 'rgb(204,204,204)', .1 ];
	var stop1 = [ .75, 'rgb(204,204,204)', .5 ];
	var stop2 = [ 1, 'rgb(204,204,204)', .1 ];
	var radialGradient = svg.radialGradient(defs, 'gradient1', [ stop0, stop1,
			stop2 ], '125', '125', '100', '125', '125', {
		gradientUnits : 'userSpaceOnUse'
	});

	var stop0 = [ 0.5, 'rgb(204,204,204)', .1 ];
	var stop1 = [ .75, 'rgb(204,204,204)', .7 ];
	var stop2 = [ 1, 'rgb(204,204,204)', .1 ];
	var radialGradient = svg.radialGradient(defs, 'gradient2', [ stop0, stop1,
			stop2 ], '125', '125', '100', '125', '125', {
		gradientUnits : 'userSpaceOnUse'
	});
	/*
	 * svg.circle(g, 125, 125, 35, { fill : 'none', stroke :
	 * 'rgba(204,204,204,.2)', 'stroke-width' : 10 }); g = svg.group({ stroke :
	 * 'black', 'stroke-width' : 2 }); svg.circle(g, 125, 125, 100, { fill :
	 * 'none', stroke : 'url(#gradient1)', 'stroke-width' : 1 }); g =
	 * svg.group({ stroke : '#ccc' }); svg.line(g, 125, 25, 125, 85);
	 * svg.line(g, 125, 165, 125, 225); svg.line(g, 26, 125, 85, 125);
	 * svg.line(g, 165, 125, 222, 125); var d0 = Math.sin(45 / 180 * Math.PI) *
	 * 100; var d1 = Math.sin(45 / 180 * Math.PI) * 40; svg.line(g, 125 - d0,
	 * 125 - d0, 125 - d1, 125 - d1); svg.line(g, 125 + d0, 125 - d0, 125 + d1,
	 * 125 - d1); svg.line(g, 125 - d0, 125 + d0, 125 - d1, 125 + d1);
	 * svg.line(g, 125 + d0, 125 + d0, 125 + d1, 125 + d1);
	 * 
	 */g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	var path = 'M125 25 L125 85 A40 40 45 0 1 153.2842712474619 96.7157287525381 L195.71067811865476 54.28932188134526 A100 100 45 0 0 125 25';
	svg.path(g, path);

	g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	path = 'M195.71067811865476 54.28932188134526 L153.2842712474619 96.7157287525381 A40 40 45 0 1 165 125 L225 125 A100 100 45 0 0 195.71067811865476 54.28932188134526';
	svg.path(g, path);

	g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	path = 'M225 125 L165 125 A40 40 45 0 1 153.2842712474619 153.2842712474619 L195.71067811865476 195.71067811865476 A100 100 45 0 0 225 125';
	svg.path(g, path);

	g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	path = 'M195.71067811865476 195.71067811865476 L153.2842712474619 153.2842712474619 A40 40 45 0 1 125 165 L125 225 A100 100 45 0 0 195.71067811865476 195.71067811865476';
	svg.path(g, path);

	g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	path = 'M125 225 L125 165 A40 40 45 0 1 96.7157287525381 153.2842712474619 L54.28932188134526 195.71067811865476 A100 100 45 0 0 125 225';
	svg.path(g, path);

	g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	path = 'M54.28932188134526 195.71067811865476 L96.7157287525381 153.2842712474619 A40 40 45 0 1 85 125 L25 125 A100 100 45 0 0 54.28932188134526 195.71067811865476';
	svg.path(g, path);

	g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	path = 'M25 125 L85 125 A40 40 45 0 1 96.7157287525381 96.7157287525381 L54.28932188134526 54.28932188134526 A100 100 45 0 0 25 125';
	svg.path(g, path);

	g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	path = 'M54.28932188134526 54.28932188134526 L96.7157287525381 96.7157287525381 A40 40 45 0 1 125 85 L125 25 A100 100 45 0 0 54.28932188134526 54.28932188134526Z';
	svg.path(g, path);

	g = svg.group({
		fill : 'url(#gradient1)',
		id : 'groupd',
		strokeWidth : 2,
		stroke : 'rgba(204,204,204,.3)'
	});
	svg.circle(g, 125, 125, 30);

	$('g[id^=group]').mouseover(function() {
		$(this).attr('fill', 'url(#gradient2)').attr('stroke','rgba(204,204,204,.5)').css('cursor', 'pointer');
	}).mouseout(function() {
		$(this).attr('fill', 'url(#gradient1)').attr('stroke','rgba(204,204,204,.3)').css('cursor', 'default');
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
