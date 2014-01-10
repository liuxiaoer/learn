/**
 * based on jquery-svg-menu.js
 * 
 * @author liuxiaoer@live.cn
 */

var menu;
var events = {};
function drawInitial(svg, settings) {
	var center = [ 175, 175 ];
	var R = 100, r = 40, PI = Math.PI;
	var w3 = 50;// 第三层菜单宽度
	var r3 = R + w3;
	var translate = {};

	if (settings.center) {
		center = settings.center;
	}
	if (settings.R) {
		R = settings.R;
	}
	if (settings.r) {
		r = settings.r;
	}
	if (settings.w3) {
		w3 = settings.w3;
	}

	var _radialGradient = {
		level1 : {
			color1 : {
				color : [ '#ffffff', '#FD67FE', '#ffffff' ],
				hover_color : [ '#ffffff', '#FD67FE', '#ffffff' ],
				cColor : [// children color
				]
			},
			color2 : {
				color : [ '#ffffff', '#5AA8A6', '#ffffff' ],
				hover_color : [ '#ffffff', '#5AA8A6', '#ffffff' ],
				cColor : [// children color
				]
			},
			color3 : {
				color : [ '#ffffff', '#019702', '#ffffff' ],
				hover_color : [ '#ffffff', '#019702', '#ffffff' ],
				cColor : [// children color
				]
			},
			color4 : {
				color : [ '#ffffff', '#019702', '#ffffff' ],
				hover_color : [ '#ffffff', '#FE4500', '#ffffff' ],
				cColor : [// children color
				]
			},
			color5 : {
				color : [ '#ffffff', '#FE4500', '#ffffff' ],
				hover_color : [ '#ffffff', '#FE4500', '#ffffff' ],
				cColor : [// children color
				]
			},
			color6 : {
				color : [ '#ffffff', '#FE4500', '#ffffff' ],
				hover_color : [ '#ffffff', '#FE4500', '#ffffff' ],
				cColor : [// children color
				]
			},
			color7 : {
				color : [ '#ffffff', '#FE4500', '#ffffff' ],
				hover_color : [ '#ffffff', '#FE4500', '#ffffff' ],
				cColor : [// children color
				]
			},
			color8 : {
				color : [ '#ffffff', '#FE4500', '#ffffff' ],
				hover_color : [ '#ffffff', '#FE4500', '#ffffff' ],
				cColor : [// children color
				]
			}
		}
	};

	var _config = {
		center : {
			stroke : 'rgba(204,204,204,.3)',
			strokeWidth : 2
		},
		level1 : {},
		level2 : {
			stops : [ [ 0, '#ffffff', 1 ], [ .5, '#FCFCFC', 1 ],
					[ 1, '#D8D8D8', 1 ] ],
			stroke : 'rgba(204,204,204,.8)',
			strokeWidth : 2
		},
		level3 : {
			stops : [ [ 0, 'rgb(204,204,204)', .1 ], [ .5, '#FCFCFC', .7 ],
					[ 1, '#D8D8D8', .1 ] ]
		}
	};
	var _datas = settings.datas;
	var _len = _datas.length;

	var _addEvents = function(node) {
	};

	var _sin = function(x) {
		return Math.sin(x / 180 * Math.PI);
	};

	var _cos = function(x) {
		return Math.cos(x / 180 * Math.PI);
	};

	_default = function() {
		var g = svg.group();

		// 渐变色
		var defs = svg.defs(g);
		var radialGradient = svg.radialGradient(defs, 'gradient1',
				_config.level2.stops, center[0], center[1], R, center[0],
				center[1], {
					gradientUnits : 'userSpaceOnUse'
				});

		var radialGradient = svg.radialGradient(defs, 'gradient2',
				_config.level3.stops, center[0], center[1], R + w3, center[0],
				center[1], {
					gradientUnits : 'userSpaceOnUse'
				});

		// _drawCenter();
		g = svg.group({
			fill : 'url(#gradient1)',
			strokeWidth : _config.center.strokeWidth,
			stroke : _config.center.stroke
		});
		svg.circle(g, center[0], center[1], 30);
		svg.text(g, center[0] - 13, center[0] + 5, '关闭', {
			fill : '#535353',
			stroke : '#535353',
			'stroke-width' : 1
		});
		$(g).mouseover(function() {
			$(this).css({
				'fill' : 'url(#gradient2)',
				'cursor' : 'pointer'
			});
		}).mouseout(function() {
			$(this).css({
				'fill' : 'url(#gradient1)',
				'cursor' : 'default'
			});
		}).click(function(e) {
			$(svg._container).css('z-index', -1).hide();
		});

		for ( var i = 0; i < _len; i++) {
			var data = _datas[i];
			var value = data.value;
			var children = data.children;
			var cs = children.length;
			var angel = 360 / _len;

			// level2
			var g = svg.group({
				fill : 'url(#gradient1)',
				id : 'group' + i + '__1',
				strokeWidth : _config.level2.strokeWidth,
				stroke : _config.level2.stroke
			});

			// level3
			var g2 = svg.group(g, {
				fill : 'url(#gradient1)',
				id : 'group' + i + '__2',
				'class' : 'hoverable',
				strokeWidth : _config.level2.strokeWidth,
				stroke : _config.level2.stroke
			});
			events['group' + i + '__2'] = events['group' + i + '__2'] == undefined ? {}
					: events['group' + i + '__2'];
			events['group' + i + '__2'].click = piemunuDatas[i].click;

			// path 中角平分线角度
			var bisects = (angel / 2) + angel * i;
			var translateX = 10 * _sin(bisects);
			var translateY = 10 * _cos(bisects);
			translate[g2.id] = 'translate(' + translateX + ',' + -1
					* translateY + ')';
			$(g2).mouseover(
					function() {
						$(this).css({
							'fill' : 'url(#gradient2)',
							'cursor' : 'pointer'
						});
						$('g[id^=' + this.id + ']').attr('transform',
								translate[this.id]);// path中心向处移动10px
					}).mouseout(
					function() {
						$(this).css({
							'fill' : 'url(#gradient1)',
							'cursor' : 'default'
						});
						$('g[id^=' + this.id + ']').attr('transform',
								'translate(0,0)');// path中心向处移动10px
					}).click(function(e) {
				if (events[this.id].show) {
					$('g[id^=' + this.id + '__]').hide();
					events[this.id].show = false;
				} else {
					$('g[id^=' + this.id + '__]').show();
					events[this.id].show = true;
				}
				events[this.id].click(e, this);
			});

			// drawPath
			var path = '';
			path = path + 'M' + (center[0] + r * _sin(angel * i)) + ' '
					+ (center[1] - r * _cos(angel * i));
			path = path + ' L' + (center[0] + R * _sin(angel * i)) + ' '
					+ (center[1] - R * _cos(angel * i));
			path = path + ' A' + R + ' ' + R + ' ' + angel + ' 0 1 '
					+ (center[0] + R * _sin(angel * (i + 1))) + ' '
					+ (center[1] - R * _cos(angel * (i + 1)));
			path = path + ' L' + (center[0] + r * _sin(angel * (i + 1))) + ' '
					+ (center[1] - r * _cos(angel * (i + 1)));
			path = path + ' A' + r + ' ' + r + ' ' + angel + ' 0 0 '
					+ (center[0] + r * _sin(angel * i)) + ' '
					+ (center[1] - r * _cos(angel * i));
			svg.path(g2, path);

			// drawValue
			var vs = value.length;
			vangel = angel / (vs + 1);
			for ( var v = 0; v < vs; v++) {
				var sin = _sin(vangel * (v + 1) + angel * i);
				var cos = _cos(vangel * (v + 1) + angel * i);
				x = center[0] + R * .75 * sin;
				y = center[1] - R * .75 * cos;
				var xflag = sin > 0 ? 1 : -1;
				var yflag = cos > 0 ? -1 : 1;

				svg.text(g2, x - 5, y + 5, value[v], {
					fill : '#535353',
					stroke : '#535353',
					'transform' : 'rotate(' + (vangel * (v + 1)) + ','
							+ (x) + ',' + (y) + ')',
					'stroke-width' : 1
				});
			}

			// drawChildren
			cangel = angel / cs; // children角度
			for ( var j = 0; j < cs; j++) {
				var g2 = svg.group(g, {
					fill : 'url(#gradient1)',
					id : 'group' + i + '__2__' + j,
					'class' : 'hoverable',
					strokeWidth : _config.level2.strokeWidth,
					stroke : _config.level2.stroke,
					display : 'none'
				});
				var child = children[j];
				events['group' + i + '__2__' + j] = events['group' + i
						+ '__2__' + j] == undefined ? {} : events['group' + i
						+ '__2__' + j];
				events['group' + i + '__2__' + j].click = piemunuDatas[i].children[j].click;

				// path 中角平分线角度
				bisects = (cangel / 2) + angel * i + cangel * j;
				translateX = 10 * _sin(bisects);
				translateY = 10 * _cos(bisects);
				translate[g2.id] = 'translate(' + translateX + ',' + -1
						* translateY + ')';

				$(g2).mouseover(
						function() {
							$(this).css({
								'fill' : 'url(#gradient2)',
								'cursor' : 'pointer'
							});
							$('g[id^=' + this.id + ']').attr('transform',
									translate[this.id]);// path中心向处移动10px
						}).mouseout(
						function() {
							$(this).css({
								'fill' : 'url(#gradient1)',
								'cursor' : 'default'
							});
							$('g[id^=' + this.id + ']').attr('transform',
									'translate(0,0)');// path中心向处移动10px
						}).click(function(e) {
					events[this.id].click(e, this);
				});
				var path = '';
				tangel = cangel * j + angel * i;
				tangel1 = cangel * (j + 1) + angel * i;
				path = path + 'M' + (center[0] + R * _sin(tangel)) + ' '
						+ (center[1] - R * _cos(tangel));
				path = path + ' L' + (center[0] + r3 * _sin(tangel)) + ' '
						+ (center[1] - r3 * _cos(tangel));
				path = path + ' A' + r3 + ' ' + r3 + ' ' + cangel + ' 0 1 '
						+ (center[0] + r3 * _sin(tangel1)) + ' '
						+ (center[1] - r3 * _cos(tangel1));
				path = path + ' L' + (center[0] + R * _sin(tangel1)) + ' '
						+ (center[1] - R * _cos(tangel1));
				path = path + ' A' + R + ' ' + R + ' ' + cangel + ' 0 0 '
						+ (center[0] + R * _sin(tangel)) + ' '
						+ (center[1] - R * _cos(tangel));
				svg.path(g2, path);

				value = child.value;
				// 字

				x = center[0] + (w3 + R) * .8 * _sin(tangel + cangel / 2);
				y = center[1] - (w3 + R) * .8 * _cos(tangel + cangel / 2);

				svg.text(g2, x - 5, y + 5, value, {
					fill : '#535353',
					stroke : '#535353',
					'transform' : 'rotate(' + (tangel + cangel / 2 - 90) + ','
							+ (x) + ',' + (y) + ')',
					'stroke-width' : 1
				});
			}
		}
		return;
		// 条件选项
		var g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group1__1',
			strokeWidth : _config.level2.strokeWidth,
			stroke : _config.level2.stroke
		});

		var g2 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group1__2',
			strokeWidth : _config.level2.strokeWidth,
			stroke : _config.level2.stroke
		});

		var path = '';// 'M125 25 L125 85 A40 40 90 0 1 165 125 L225 125 A100
		// 100 90 0 0 125 25';
		path = path + 'M' + center[0] + ' ' + (center[1] - R);
		path = path + ' L' + center[0] + ' ' + (center[1] - r);
		path = path + ' A' + r + ' ' + r + ' 90 0 1 ' + (center[0] + r) + ' '
				+ center[1];
		path = path + ' L' + (center[0] + R) + ' ' + center[1];
		path = path + ' A' + R + ' ' + R + ' 90 0 0 ' + center[0] + ' '
				+ (center[1] - R);
		svg.path(g2, path);

		// svg.text(g,165,85,"条件选项",{fill:'black',stroke:'none'});
		x = center[0] + .65 * R * _sin(18 / 180 * PI);
		x -= 5;
		y = center[1] - .65 * R * _cos(18 / 180 * PI);
		y -= 5;

		svg.text(g2, x, y, "条", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(18,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(36 / 180 * PI);
		x -= 5;
		y = center[1] - .65 * R * _cos(36 / 180 * PI);
		y -= 5;

		svg.text(g2, x, y, "件", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(36,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(54 / 180 * PI);
		x -= 5;
		y = center[1] - .65 * R * _cos(54 / 180 * PI);
		y -= 5;

		svg.text(g2, x, y, "选", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(54,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(72 / 180 * PI);
		x -= 5;
		y = center[1] - .65 * R * _cos(72 / 180 * PI);
		y -= 5;
		svg.text(g2, x, y, "项", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(72,' + x + ',' + y + ')'
		});

		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			strokeWidth : 2,
			id : 'group1__2__1',
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('食品种类');
			piemunuDatas['条件选项']['食品种类'].click();
		});

		var path = '';
		// var path = 'M125 25 L125 85 A40 40 90 0 1 165 125 L225 125 A100 100
		// 90 0 0 125 25';
		path = path + 'M' + center[0] + ' ' + (center[1] - R);
		path = path + ' L' + center[0] + ' ' + (center[1] - R - R / 2);
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2)
				+ ' 30 0 1 ' + (center[0] + (R + R / 2) * _sin(30 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(30 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(30 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(30 / 180 * PI));
		path = path + ' A' + (center[0] + R + 2) + ' ' + (center[1] + R + 2)
				+ ' 30 0 0 ' + center[0] + ' ' + (center[1] - R);
		svg.path(g3, path);

		x = center[0] + (R + R / 2) * _sin(15 / 180 * PI);
		x += 5;
		y = center[1] - R * _cos(15 / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "食品种类", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(-75,' + x + ',' + y + ')'
		});

		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			strokeWidth : 2,
			id : 'group1__2__2',
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('抽样地点');
			piemunuDatas['条件选项']['抽样地点'].click();
		});

		path = '';
		path = path + 'M' + (center[0] + R * _sin(30 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(30 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(30 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(30 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2)
				+ ' 30 0 1 ' + (center[0] + (R + R / 2) * _sin(60 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(60 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(60 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(60 / 180 * PI));
		path = path + ' A' + (center[0] + R + 2) + ' ' + (center[1] + R + 2)
				+ ' 30 0 0 ' + (center[0] + R * _sin(30 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(30 / 180 * PI));
		svg.path(g3, path);

		x = center[0] + R * _sin(45 / 180 * PI);
		x += 5;
		y = center[1] - R * _cos(45 / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "抽样地点", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(-45,' + x + ',' + y + ')'
		});

		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			strokeWidth : 2,
			id : 'group1__2__3',
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('抽样区县');
			piemunuDatas['条件选项']['抽样区县'].click();
		});

		path = '';
		path = path + 'M' + (center[0] + R * _sin(60 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(60 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(60 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(60 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2)
				+ ' 30 0 1 ' + (center[0] + (R + R / 2) * _sin(90 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(90 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(90 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(90 / 180 * PI));
		path = path + ' A' + (center[0] + R + 2) + ' ' + (center[1] + R + 2)
				+ ' 30 0 0 ' + (center[0] + R * _sin(60 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(60 / 180 * PI));
		svg.path(g3, path);

		x = center[0] + R * _sin(75 / 180 * PI);
		x += 5;
		y = center[1] - R * _cos(75 / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "抽样区县", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(-15,' + x + ',' + y + ')'
		});

		// 显示类型
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group2__1',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		g2 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group2__2',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		var path = '';// 'M225 125 L165 125 A40 40 90 0 1 125 165 L125 225
		// A100 100 90 0 0 225 125';
		path = path + 'M' + (center[0] + R) + ' ' + center[1];
		path = path + ' L' + (center[0] + r) + ' ' + center[1];
		path = path + ' A' + r + ' ' + r + ' 90 0 1 ' + center[0] + ' '
				+ (center[1] + r);
		path = path + ' L' + center[0] + ' ' + (center[1] + R);
		path = path + ' A' + R + ' ' + R + ' 90 0 0 ' + (center[0] + R) + ' '
				+ center[1];
		svg.path(g2, path);

		x = center[0] + .65 * R * _sin(108 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(108 / 180 * PI);
		y -= 5;
		svg.text(g2, x, y, "显", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(108,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(126 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(126 / 180 * PI);
		y -= 5;
		svg.text(g2, x, y, "示", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(136,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(144 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(144 / 180 * PI);
		y -= 5;
		svg.text(g2, x, y, "类", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(144,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(162 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(162 / 180 * PI);
		y -= 5;
		svg.text(g2, x, y, "型", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(162,' + x + ',' + y + ')'
		});
		// svg.text(g,x,y,"显示类型",{fill:'black',stroke:'none'});
		// 显示类型-->
		// 地图
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group2__2__1',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});
		$(g3).click(function() {
			console.log('地图');
			piemunuDatas['显示类型']['地图'].click();
		});
		path = '';
		path = path + 'M' + (center[0] + R) + ' ' + center[1];
		path = path + ' L' + (center[0] + (R + R / 2)) + ' ' + center[1];
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2)
				+ ' 22.5 0 1 '
				+ (center[0] + (R + R / 2) * _sin(112.5 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(112.5 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(112.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(112.5 / 180 * PI));
		path = path + ' A' + (center[0] + R) + ' ' + (center[1] + R)
				+ ' 22.5 0 0 ' + (center[0] + R * _sin(112.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(112.5 / 180 * PI));
		svg.path(g3, path);

		per = 90 / 4;
		x = center[0] + R * _sin((90 + per * 1) / 180 * PI);
		x += 5;
		y = center[1] - R * _cos((90 + per * 1) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "地图", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + per / 2 + ',' + x + ',' + y + ')'
		});

		// 饼图
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group2__2__2',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});
		$(g3).click(function() {
			console.log('饼图');
			piemunuDatas['显示类型']['饼图'].click();
		});
		path = '';
		path = path + 'M' + (center[0] + R * _sin(112.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(112.5 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(112.5 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(112.5 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2)
				+ ' 22.5 0 1 '
				+ (center[0] + (R + R / 2) * _sin(135 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(135 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(135 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(135 / 180 * PI));
		path = path + ' A' + (center[0] + R) + ' ' + (center[1] + R)
				+ ' 22.5 0 0 ' + (center[0] + R * _sin(135 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(138 / 180 * PI));
		svg.path(g3, path);

		x = center[0] + R * _sin((90 + per * 2) / 180 * PI);
		x += 5;
		y = center[1] - R * _cos((90 + per * 2) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "饼图", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (per + per / 2) + ',' + x + ',' + y + ')'
		});

		// 趋势图
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group2__2__3',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});
		$(g3).click(function() {
			console.log('趋势图');
			piemunuDatas['显示类型']['趋势图'].click();
		});

		path = '';
		path = path + 'M' + (center[0] + R * _sin(135 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(135 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(135 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(135 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2)
				+ ' 22.5 0 1 '
				+ (center[0] + (R + R / 2) * _sin(157.5 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(157.5 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(157.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(157.5 / 180 * PI));
		path = path + ' A' + (center[0] + R) + ' ' + (center[1] + R)
				+ ' 22.5 0 0 ' + (center[0] + R * _sin(157.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(157.5 / 180 * PI));
		svg.path(g3, path);

		x = center[0] + R * _sin((90 + per * 3) / 180 * PI);
		x += 5;
		y = center[1] - R * _cos((90 + per * 3) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "趋势图", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (per * 2 + per / 2) + ',' + x + ',' + y
					+ ')'
		});

		// 分析图
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group2__2__4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});
		$(g3).click(function() {
			console.log('不合格产品分析图');
			piemunuDatas['显示类型']['不合格产品分析图'].click();
		});
		path = '';
		path = path + 'M' + (center[0] + R * _sin(157.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(157.5 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(157.5 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(157.5 / 180 * PI));
		path = path + ' A' + (center[0] + R / 2) + ' ' + (center[0] + R / 2)
				+ ' 22.5 0 1 '
				+ (center[0] + (R + R / 2) * _sin(180 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(180 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(180 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(160.5 / 180 * PI));
		path = path + ' A' + (center[0] + R) + ' ' + (center[1] + R)
				+ ' 22.5 0 0 ' + (center[0] + R * _sin(180 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(180 / 180 * PI));
		svg.path(g3, path);

		x = center[0] + R * _sin((90 + per * 4) / 180 * PI);
		x += 5;
		y = center[1] - R * _cos((90 + per * 4) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "分析图", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (per * 3 + per / 2) + ',' + x + ',' + y
					+ ')'
		});

		// 分析类型
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group3__1',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		g2 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group3__2',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';// 'M125 225 L125 165 A40 40 90 0 1 85 125 L25 125 A100 100
		// 90 0 0 125 225';
		path = path + 'M' + center[0] + ' ' + (center[1] + R);
		path = path + ' L' + center[0] + ' ' + (center[1] + r);
		path = path + ' A' + r + ' ' + r + ' 90 0 1 ' + (center[0] - r) + ' '
				+ center[1];
		path = path + ' L' + (center[0] - R) + ' ' + center[1];
		path = path + ' A' + R + ' ' + R + ' 90 0 0 ' + center[0] + ' '
				+ (center[1] + R);
		svg.path(g2, path);
		x = center[0] + .65 * R * _sin(198 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(198 / 180 * PI);
		y += 5;
		svg.text(g2, x, y, "分", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(198,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(216 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(216 / 180 * PI);
		y += 5;

		svg.text(g2, x, y, "析", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(216,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(234 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(234 / 180 * PI);
		y += 5;

		svg.text(g2, x, y, "类", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(234,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(252 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(252 / 180 * PI);
		y += 5;
		svg.text(g2, x, y, "型", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(252,' + x + ',' + y + ')'
		});

		// 分析类型
		// 按产地
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group3__2__1',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('按产地');
			piemunuDatas['分析类型']['按产地'].click();
		});
		path = '';
		path = path + 'M' + center[0] + ' ' + (center[1] + R);
		path = path + ' L' + center[0] + ' ' + (center[1] + R + R / 2);
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 45 0 1 '
				+ (center[0] + (R + R / 2) * _sin(225 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(225 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(225 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(225 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 45 0 0 ' + center[0] + ' '
				+ (center[1] + R);
		svg.path(g3, path);

		per = 90 / 2;
		x = center[0] + R * _sin((180 + per / 2) / 180 * PI);
		x += 5;
		y = center[1] - R * _cos((180 + per / 2) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "按产地", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (90 + per / 2) + ',' + x + ',' + y + ')'
		});

		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group3__2__2',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('按抽样区县');
			piemunuDatas['分析类型']['按抽样区县'].click();
		});

		path = '';
		path = path + 'M' + (center[0] + R * _sin(225 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(225 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(225 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(225 / 180 * PI));
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 45 0 1 '
				+ (center[0] + (R + R / 2) * _sin(270 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(270 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(270 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(270 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 45 0 0 '
				+ (center[0] + R * _sin(225 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(225 / 180 * PI));
		svg.path(g3, path);

		per = 90 / 2;
		x = center[0] + R * _sin((180 + per / 2 + per) / 180 * PI);
		x += 5;
		y = center[1] - R * _cos((180 + per / 2 + per) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "区县", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (90 + per / 2 + per) + ',' + x + ',' + y
					+ ')'
		});

		// 数据类型
		g = svg.group({
			fill : 'url(#gradient1)',
			id : 'group4__1',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		g2 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group4__2',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)'
		});
		path = '';// 'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90
		// 0 0 25 125';
		path = path + 'M' + (center[0] - R) + ' ' + center[1];
		path = path + ' L' + (center[0] - r) + ' ' + center[1];
		path = path + ' A' + r + ' ' + r + ' 90 0 1 ' + center[0] + ' '
				+ (center[1] - r);
		path = path + ' L' + center[0] + ' ' + (center[1] - R);
		path = path + ' A' + R + ' ' + R + ' 90 0 0 ' + (center[0] - R) + ' '
				+ center[1];
		svg.path(g2, path);

		x = center[0] + .65 * R * _sin(342 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(342 / 180 * PI);
		y += 5;
		svg.text(g2, x, y, "型", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(342,' + x + ',' + y + ')'
		});

		x = center[0] + .65 * R * _sin(324 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(324 / 180 * PI);
		y += 5;

		svg.text(g2, x, y, "类", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(324,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(306 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(306 / 180 * PI);
		y += 5;

		svg.text(g2, x, y, "据", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(306,' + x + ',' + y + ')'
		});
		x = center[0] + .65 * R * _sin(288 / 180 * PI);
		x += 5;
		y = center[1] - .65 * R * _cos(288 / 180 * PI);
		y += 5;
		svg.text(g2, x, y, "数", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(288,' + x + ',' + y + ')'
		});

		// 数据类型->
		// 监督抽查
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group4__2__1',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('监督抽查');
			piemunuDatas['数据类型']['监督抽查'].click();
		});
		path = '';// 'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90
		// 0 0 25 125';
		path = path + 'M' + (center[0] - R) + ' ' + center[1];
		path = path + ' L' + (center[0] - R - R / 2) + ' ' + center[1];
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 22.5 0 1 '
				+ (center[0] + (R + R / 2) * _sin(292.5 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(292.5 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(292.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(292.5 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 22.5 0 0 ' + (center[0] - R) + ' '
				+ center[1];
		svg.path(g3, path);

		per = 90 / 4;
		x = center[0] + R * 3 / 2 * _sin((270 + per / 2) / 180 * PI);
		x += 5;
		y = center[1] - R * 3 / 2 * _cos((270 + per / 2) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "监督抽查", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (per / 2) + ',' + x + ',' + y + ')'
		});
		// 风险监测
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group4__2__2',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('风险监测');
			piemunuDatas['数据类型']['风险监测'].click();
		});

		path = '';// 'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90
		// 0 0 25 125';
		path = path + 'M' + (center[0] + R * _sin(292.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(292.5 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(292.5 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(292.5 / 180 * PI));
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 22.5 0 1 '
				+ (center[0] + (R + R / 2) * _sin(315 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(315 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(315 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(315 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 22.5 0 0 '
				+ (center[0] + R * _sin(292.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(292.5 / 180 * PI));
		svg.path(g3, path);

		per = 90 / 4;
		x = center[0] + R * 3 / 2 * _sin((270 + per / 2 + per) / 180 * PI);
		x += 5;
		y = center[1] - R * 3 / 2 * _cos((270 + per / 2 + per) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, " 风险监测", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (per / 2 + per) + ',' + x + ',' + y + ')'
		});

		// 企业自检
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group4__2__3',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('企业自检');
			piemunuDatas['数据类型']['企业自检'].click();
		});

		path = '';// 'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90
		// 0 0 25 125';
		path = path + 'M' + (center[0] + R * _sin(315 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(315 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(315 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(315 / 180 * PI));
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 22.5 0 1 '
				+ (center[0] + (R + R / 2) * _sin(337.5 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(337.5 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(337.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(337.5 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 22.5 0 0 '
				+ (center[0] + R * _sin(315 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(315 / 180 * PI));
		svg.path(g3, path);

		per = 90 / 4;
		x = center[0] + R * 3 / 2 * _sin((270 + per / 2 + per * 2) / 180 * PI);
		x += 5;
		y = center[1] - R * 3 / 2 * _cos((270 + per / 2 + per * 2) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "企业自检", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (per / 2 + per * 2) + ',' + x + ',' + y
					+ ')'
		});

		// 快速检测
		g3 = svg.group(g, {
			fill : 'url(#gradient1)',
			id : 'group4__2__4',
			strokeWidth : 2,
			stroke : 'rgba(204,204,204,.3)',
			display : 'none'
		});

		$(g3).click(function() {
			console.log('快速检测');
			piemunuDatas['数据类型']['快速检测'].click();
		});

		path = '';// 'M25 125 L85 125 A40 40 90 0 1 125 85 L125 25 A100 100 90
		// 0 0 25 125';
		path = path + 'M' + (center[0] + R * _sin(337.5 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(337.5 / 180 * PI));
		path = path + ' L' + (center[0] + (R + R / 2) * _sin(337.5 / 180 * PI))
				+ ' ' + (center[1] - (R + R / 2) * _cos(337.5 / 180 * PI));
		path = path + ' A' + (R + R / 2) + ' ' + (R + R / 2) + ' 22.5 0 1 '
				+ (center[0] + (R + R / 2) * _sin(360 / 180 * PI)) + ' '
				+ (center[1] - (R + R / 2) * _cos(360 / 180 * PI));
		path = path + ' L' + (center[0] + R * _sin(360 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(360 / 180 * PI));
		path = path + ' A' + R + ' ' + R + ' 22.5 0 0 '
				+ (center[0] + R * _sin(360 / 180 * PI)) + ' '
				+ (center[1] - R * _cos(360 / 180 * PI));
		svg.path(g3, path);

		per = 90 / 4;
		x = center[0] + R * 3 / 2 * _sin((270 + per / 2 + per * 3) / 180 * PI);
		x += 5;
		y = center[1] - R * 3 / 2 * _cos((270 + per / 2 + per * 3) / 180 * PI);
		y -= 5;
		svg.text(g3, x, y, "快速检测", {
			fill : 'black',
			stroke : 'black',
			'stroke-width' : 1,
			'transform' : 'rotate(' + (per / 2 + per * 3) + ',' + x + ',' + y
					+ ')'
		});

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
				}).click(function() {
			var id = $(this).attr('id');
			var children = $('g[id^=' + id + '__]');
			if (children.length == 0)
				return;
			if ('none' != children.css('display')) {
				children.css('display', 'none');
			} else {
				children.css('display', 'block');
			}
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