/**
 * based on jquery-svg-menu.js
 * 
 * @author liuxiaoer@live.cn
 */

var menu;
function drawInitial(svg, settings) {
	var center = [ 175, 175 ];
	var R = 100, r = 40,PI = Math.PI;
	
	var _addEvents = function(node) {
	};
	
	var _sin = function(x){
		return Math.sin(x);
	};
	
	var _cos = function(x){
		return Math.cos(x);
	};

	_drawNode = function(data) {
	};

	_drawNodes = function() {
		for (data in datas) {
			_drawNode(data);
		}
	};

	_default = function() {

		var g = svg.group();

		// 渐变色
		var defs = svg.defs(g);
		var stop0 = [ 0.5, 'rgb(204,204,204)', .1 ];
		var stop1 = [ .75, 'rgb(204,204,204)', .5 ];
		var stop2 = [ 1, 'rgb(204,204,204)', .1 ];
		var radialGradient = svg.radialGradient(defs, 'gradient1', [ stop0,
				stop1, stop2 ], center[0], center[1], R, center[0], center[1],
				{
					gradientUnits : 'userSpaceOnUse'
				});

		var stop0 = [ 0.5, 'rgb(204,204,204)', .1 ];
		var stop1 = [ .75, 'rgb(204,204,204)', .7 ];
		var stop2 = [ 1, 'rgb(204,204,204)', .1 ];
		var radialGradient = svg.radialGradient(defs, 'gradient2', [ stop0,
				stop1, stop2 ], center[0], center[1], R, center[0], center[1],
				{
					gradientUnits : 'userSpaceOnUse'
				});

		// 条件选项
		var g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group1',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		var path = '';//'M125 25 L125 85 A40 40 90 0 1 165 125 L225 125 A100 100 90 0 0 125 25';
		path = path + 'M' + center[0] + ' ' +(center[1] - R);
		path = path + ' L' + center[0] + ' ' +(center[1] - r);
		path = path + ' A' + r + ' ' + r + ' 90 0 1 ' + (center[0] + r) + ' ' + center[1];
		path = path + ' L' + (center[0] + R) + ' ' + center[1];
		path = path + ' A' + R + ' ' + R + ' 90 0 0 ' + center[0] + ' ' + (center[1] - R);
		svg.path(g, path);
		
		// svg.text(g,165,85,"条件选项",{fill:'black',stroke:'none'});
		x = center[0] + .65 * R * _sin(18 / 180 * PI);
		x -= 5;
		y = center[1] - .65 * R * _cos(18 / 180 * PI);
		y -= 5;

		svg.text(g, x, y, "条", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(18,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(36 / 180 * PI);
		x -= 5;
		y = center[1] - .65 * R * _cos(36 / 180 * PI);
		y -= 5;

		svg.text(g, x, y, "件", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(36,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(54 / 180 * PI);
		x -= 5;
		y = center[1] - .65 * R * _cos(54 / 180 * PI);
		y -= 5;

		svg.text(g, x, y, "选", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(54,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(72 / 180 * PI);
		x -= 5;
		y = center[1] - .65 * R * _cos(72 / 180 * PI);
		y -= 5;
		svg.text(g, x, y, "项", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(72,' + x + ',' + y + ')'
		});

		g = svg.group( {
			fill : 'url(#gradient1)',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		var path = '';
		// var path = 'M125 25 L125 85 A40 40 90 0 1 165 125 L225 125 A100 100
		// 90 0 0 125 25';
		path = path + 'M' + center[0] + ' ' + (center[1] - R);
		path = path + ' L' + center[0] + ' ' + (center[1] - R - R/2);
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2) + ' 30 0 1 ' + (center[0] + (R + R/2) * _sin(30 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(30 / 180 * PI)) ;
		path = path + ' L' + (center[0] + R * _sin(30 / 180 * PI))  + ' ' + (center[1] - R * _cos(30 / 180 * PI));
		path = path + ' A' + (center[0] + R  + 2)  + ' ' + (center[1] + R  + 2) + ' 30 0 0 ' + center[0] + ' ' + (center[1] - R);
		svg.path(g, path);
		
		path = '';
		path = path + 'M' + (center[0] + R * _sin(30 / 180 * PI))  + ' ' + (center[1] - R * _cos(30 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(30 / 180 * PI))  + ' ' + (center[1] - (R + R / 2) * _cos(30 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2) + ' 30 0 1 ' + (center[0] + (R + R/2) * _sin(60 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(60 / 180 * PI)) ;
		path = path + ' L' + (center[0] + R * _sin(60 / 180 * PI))  + ' ' + (center[1] - R * _cos(60 / 180 * PI));
		path = path + ' A' + (center[0] + R  + 2)  + ' ' + (center[1] + R  + 2) + ' 30 0 0 ' + (center[0] + R * _sin(30 / 180 * PI))  + ' ' + (center[1] - R * _cos(30 / 180 * PI));
		svg.path(g, path);
		
		path = '';
		path = path + 'M' + (center[0] + R * _sin(60 / 180 * PI))  + ' ' + (center[1] - R * _cos(60 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(60 / 180 * PI))  + ' ' + (center[1] - (R + R / 2) * _cos(60 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2) + ' 30 0 1 ' + (center[0] + (R + R/2) * _sin(90 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(90 / 180 * PI)) ;
		path = path + ' L' + (center[0] + R * _sin(90 / 180 * PI))  + ' ' + (center[1] - R * _cos(90 / 180 * PI));
		path = path + ' A' + (center[0] + R  + 2)  + ' ' + (center[1] + R  + 2) + ' 30 0 0 ' + (center[0] + R * _sin(60 / 180 * PI))  + ' ' + (center[1] - R * _cos(60 / 180 * PI));
		svg.path(g, path);

		// 显示类型
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group2',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		var path = '';//'M225 125 L165 125 A40 40 90 0 1 125 165 L125 225 A100 100 90 0 0 225 125';
		path = path + 'M' + (center[0] + R) + ' ' + center[1];
		path = path + ' L' + (center[0] + r) + ' ' + center[1];
		path = path + ' A' + r + ' ' + r + ' 90 0 1 ' + center[0] + ' ' + (center[1] + r);
		path = path + ' L' + center[0] + ' ' +  (center[1] + R);
		path = path + ' A' + R + ' ' + R + ' 90 0 0 ' + (center[0] + R) + ' ' + center[1];
		svg.path(g, path);

		x = center[0] + .65 * R * _sin(108 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(108 / 180 * PI);
		y -= 5;
		svg.text(g, x, y, "显", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(108,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(126 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(126 / 180 * PI);
		y -= 5;
		svg.text(g, x, y, "示", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(136,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(144 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(144 / 180 * PI);
		y -= 5;
		svg.text(g, x, y, "类", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(144,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(162 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(162 / 180 * PI);
		y -= 5;
		svg.text(g, x, y, "型", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(162,' + x + ',' + y + ')'
		});
		// svg.text(g,x,y,"显示类型",{fill:'black',stroke:'none'});
		//显示类型-->
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group3',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';
		path = path + 'M' + (center[0] + R )  + ' ' + center[1];
		path = path + ' L' + (center[0] + (R + R / 2))  + ' ' + center[1];
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2) + ' 22.5 0 1 ' + (center[0] + (R + R/2) * _sin(112.5 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(112.5 / 180 * PI)) ;
		path = path + ' L' + (center[0] + R * _sin(112.5 / 180 * PI))  + ' ' + (center[1] - R * _cos(112.5 / 180 * PI));
		path = path + ' A' + (center[0] + R )  + ' ' + (center[1] + R ) + ' 22.5 0 0 ' + (center[0] + R * _sin(112.5 / 180 * PI))  + ' ' + (center[1] - R * _cos(112.5 / 180 * PI));
		svg.path(g, path);
		
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group3',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';
		path = path + 'M' + (center[0] + R * _sin(112.5 / 180 * PI))  + ' ' + (center[1] - R * _cos(112.5 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R/2) * _sin(112.5 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(112.5 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2) + ' 22.5 0 1 ' + (center[0] + (R + R/2) * _sin(135 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(135 / 180 * PI)) ;
		path = path + ' L' + (center[0] + R * _sin(135 / 180 * PI))  + ' ' + (center[1] - R * _cos(135 / 180 * PI));
		path = path + ' A' + (center[0] + R )  + ' ' + (center[1] + R ) + ' 22.5 0 0 ' + (center[0] + R * _sin(135 / 180 * PI))  + ' ' + (center[1] - R * _cos(138 / 180 * PI));
		svg.path(g, path);
		
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group3',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';
		path = path + 'M' + (center[0] + R * _sin(135 / 180 * PI))  + ' ' + (center[1] - R * _cos(135 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R/2) * _sin(135 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(135 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2) + ' 22.5 0 1 ' + (center[0] + (R + R/2) * _sin(157.5 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(157.5 / 180 * PI)) ;
		path = path + ' L' + (center[0] + R * _sin(157.5 / 180 * PI))  + ' ' + (center[1] - R * _cos(157.5 / 180 * PI));
		path = path + ' A' + (center[0] + R )  + ' ' + (center[1] + R ) + ' 22.5 0 0 ' + (center[0] + R * _sin(157.5 / 180 * PI))  + ' ' + (center[1] - R * _cos(157.5 / 180 * PI));
		svg.path(g, path);
		
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group3',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';
		path = path + 'M' + (center[0] + R * _sin(157.5 / 180 * PI))  + ' ' + (center[1] - R * _cos(157.5 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R/2) * _sin(157.5 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(157.5 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2) + ' 22.5 0 1 ' + (center[0] + (R + R/2) * _sin(180 / 180 * PI)) + ' ' + (center[1] - (R + R/2) * _cos(180 / 180 * PI)) ;
		path = path + ' L' + (center[0] + R * _sin(180 / 180 * PI))  + ' ' + (center[1] - R * _cos(160.5 / 180 * PI));
		path = path + ' A' + (center[0] + R )  + ' ' + (center[1] + R ) + ' 22.5 0 0 ' + (center[0] + R * _sin(180 / 180 * PI))  + ' ' + (center[1] - R * _cos(180 / 180 * PI));
		svg.path(g, path);
		
		// 分析类型
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group3',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';//'M125 225 L125 165 A40 40 90 0 1 85 125 L25 125 A100 100 90 0 0 125 225';
		path = path + 'M' + center[0] + ' ' + (center[1] + R); 
		path = path + ' L' + center[0] + ' ' + (center[1] + r);
		path = path + ' A' + r + ' ' + r + ' 90 0 1 ' + (center[0] - r) + ' ' + center[1];
		path = path + ' L' + (center[0] - R) + ' ' +  center[1];
		path = path + ' A' + R + ' ' + R + ' 90 0 0 ' + center[0] + ' ' + (center[1] + R);
		svg.path(g, path);
		// svg.text(g,85,85,"数据类型",{fill:'black',stroke:'none'});
		x = center[0] + .65 * R * _sin(198 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(198 / 180 * PI);
		y += 5;
		svg.text(g, x, y, "分", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(198,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(216 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(216 / 180 * PI);
		y += 5;

		svg.text(g, x, y, "析", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(216,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(234 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(234 / 180 * PI);
		y += 5;

		svg.text(g, x, y, "类", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(234,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(252 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(252 / 180 * PI);
		y += 5;
		svg.text(g, x, y, "型", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(252,' + x + ',' + y + ')'
		});
		
		//分析类型
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';//'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90 0 0 25 125';
		path = path + 'M' + center[0] + ' ' + (center[1] + R); 
		path = path + ' L' + center[0] + ' ' + (center[1] + R + R/2);
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 45 0 1 ' + (center[0] + (R + R / 2) * _sin(225 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(225 / 180 * PI));
		path = path + ' L' + (center[0] + R  * _sin(225 / 180 * PI))  + ' ' +  (center[1] - R  * _cos(225 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 45 0 0 ' + center[0] + ' ' + (center[1] + R);
		svg.path(g, path);
		
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';//'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90 0 0 25 125';
		path = path + 'M' + (center[0] + R  * _sin(225 / 180 * PI))  + ' ' +  (center[1] - R  * _cos(225 / 180 * PI)); 
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(225 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(225 / 180 * PI));
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 45 0 1 ' + (center[0] + (R + R / 2) * _sin(270 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(270 / 180 * PI));
		path = path + ' L' + (center[0] + R  * _sin(270 / 180 * PI))  + ' ' +  (center[1] - R  * _cos(270 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 45 0 0 ' + (center[0] + R  * _sin(225 / 180 * PI))  + ' ' +  (center[1] - R  * _cos(225 / 180 * PI));
		svg.path(g, path);
		
		
		// 数据类型
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';//'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90 0 0 25 125';
		path = path + 'M' + (center[0] - R) + ' ' + center[1]; 
		path = path + ' L' + (center[0] - r) + ' ' + center[1];
		path = path + ' A' + r + ' ' + r + ' 90 0 1 ' + center[0] + ' ' + (center[1] - r);
		path = path + ' L' + center[0] + ' ' +  (center[1] - R);
		path = path + ' A' + R + ' ' + R + ' 90 0 0 ' + (center[0] - R) + ' ' + center[1];
		svg.path(g, path);
		
		x = center[0] + .65 * R * _sin(342 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(342 / 180 * PI);
		y += 5;
		svg.text(g, x, y, "型", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(342,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(324 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(324 / 180 * PI);
		y += 5;

		svg.text(g, x, y, "类", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(324,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(306 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(306 / 180 * PI);
		y += 5;

		svg.text(g, x, y, "据", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(306,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(288 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(288 / 180 * PI);
		y += 5;
		svg.text(g, x, y, "数", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(288,' + x + ',' + y + ')'
		});

		//数据类型->
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';//'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90 0 0 25 125';
		path = path + 'M' + (center[0] - R) + ' ' + center[1]; 
		path = path + ' L' + (center[0] - R - R / 2) + ' ' + center[1];
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 22.5 0 1 ' + (center[0] + (R + R / 2) * _sin(292.5 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(292.5 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(292.5 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(292.5 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 22.5 0 0 ' + (center[0] - R) + ' ' + center[1];
		svg.path(g, path);

		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';//'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90 0 0 25 125';
		path = path + 'M' + (center[0] + R * _sin(292.5 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(292.5 / 180 * PI)); 
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(292.5 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(292.5 / 180 * PI));
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 22.5 0 1 ' + (center[0] + (R + R / 2) * _sin(315 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(315 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(315 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(315 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 22.5 0 0 ' + (center[0] + R * _sin(292.5 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(292.5 / 180 * PI));
		svg.path(g, path);

		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';//'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90 0 0 25 125';
		path = path + 'M' + (center[0] + R * _sin(315 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(315 / 180 * PI)); 
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(315 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(315 / 180 * PI));
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 22.5 0 1 ' + (center[0] + (R + R / 2) * _sin(337.5 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(337.5 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(337.5 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(337.5 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 22.5 0 0 ' + (center[0] + R * _sin(315 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(315 / 180 * PI));
		svg.path(g, path);

		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';//'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90 0 0 25 125';
		path = path + 'M' + (center[0] + R * _sin(337.5 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(337.5 / 180 * PI)); 
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(337.5 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(337.5 / 180 * PI));
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 22.5 0 1 ' + (center[0] + (R + R / 2) * _sin(360 / 180 * PI)) + ' ' + (center[1] - (R + R / 2) * _cos(360 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(360 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(360 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 22.5 0 0 ' + (center[0] + R * _sin(360 / 180 * PI)) + ' ' +  (center[1]  - R * _cos(360 / 180 * PI));
		svg.path(g, path);
		
		// 中心
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'groupd',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		svg.circle(g, center[0], center[1], 30);

		$('g[id^=group]').mouseover(
				function() {
					$(this).attr('fill', 'url(#gradient2)').attr('stroke',
							'rgba(204,204,204,.5)').css('cursor', 'pointer');
				}).mouseout(
				function() {
					$(this).attr('fill', 'url(#gradient1)').attr('stroke',
							'rgba(204,204,204,.3)').css('cursor', 'default');
				});

		$('#group8').click(function() {
			var dis = $('#group0').css('display');
			if ('none' == dis) {
				$('g:not(#group8)').show();
			} else {
				$('g:not(#group8)').hide();
			}
		});

		$('#group1').click(function() {

		});
	};

	init = function() {
		_default();
	};

	init();

}

$.svg._afterLoad = function(container, svg, settings) {
	var settings = settings || $.svg._settings[container.id];
	$.svg._settings[container ? container.id : ''] = null;
	var wrapper = new $.svg._wrapperClass(svg, container);
	$.data(container || svg, 'svgwrapper', wrapper);
	try {
		if (settings.loadURL) { // Load URL
			wrapper.load(settings.loadURL, settings);
		}
		if (settings.settings) { // Additional settings
			wrapper.configure(settings.settings);
		}
		if (settings.onLoad && !settings.loadURL) { // Onload callback
			settings.onLoad.apply(container || svg, [ wrapper, settings ]);
		}
	} catch (e) {
		alert(e);
	}
};

$('dom').click(function(){
	
});

$(function() {
	$('#menu').svg({
		onLoad : drawInitial,
		datas : {
			"数据类型":{
				'监督抽查':{
					click:function(e){
						console.log(1);
					}
				},
				'风险监测':{
					
				}
			}
		}
	});
});
