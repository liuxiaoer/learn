/**
 * based on jquery-svg-menu.js
 * 
 * @author liuxiaoer@live.cn
 */

var menu;
var events = {};
function drawInitial(svg, settings) {
	var center = [ 175, 175 ];
	var R = 100;//第二层圆半径
	var r = 40;//第一层圆半径
	var PI = Math.PI;
	var _r=  10;//圆角半径
	var w3 = 50;// 第三层菜单宽度
	var r3 = R + w3;
	var translate = {};
	var offsetAngle = settings.offsetAngle || 0;

	var singleword = false;
	
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

	var _R= R - _r;
	
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
			stops : [ [ 0, 'rgb(204,204,204)', 1 ], [ .5, '#FCFCFC', 1 ],
					[ 1, '#D8D8D8', 1 ] ]
		}
	};
	var _datas = settings.datas;
	var _len = _datas.length;

	var _addEvents = function(node) {
	};

	var _sin = function(x) {
		return Math.sin(x / 180 * PI);
	};
	
	var _atan = function(x) {
		return Math.atan(x) * 180 / PI;
	}; 

	var _cos = function(x) {
		return Math.cos(x / 180 * PI);
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
			var translateX = 10 * _sin(bisects + offsetAngle);
			var translateY = 10 * _cos(bisects + offsetAngle);
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

			
			var PA = [],PB=[],PC=[],PD=[],PE=[],PF=[];
			_R = R - _r;
			var AB = _r / _sin(_atan(_r/_R)); 
			
			PA = [center[0] + r * _sin(angel * i + offsetAngle),center[1] - r * _cos(angel * i + offsetAngle)];
			PB = [center[0] + AB * _sin(angel * i + offsetAngle),center[1] - AB * _cos(angel * i + offsetAngle)];
			PC = [center[0] + R * _sin(angel * i + offsetAngle + _atan(_r / _R)),center[1] - R * _cos(angel * i + offsetAngle + _atan(_r / _R))];
			PD = [center[0] + R * _sin(angel * (i + 1) + offsetAngle - _atan(_r / _R)),center[1] - R * _cos(angel * (i + 1) + offsetAngle - _atan(_r / _R))];
			PE = [center[0] + AB * _sin(angel * (i + 1) + offsetAngle),center[1] - AB * _cos(angel * (i + 1) + offsetAngle)];
			PF = [center[0] + r * _sin(angel * (i + 1) + offsetAngle),center[1] - r * _cos(angel * (i + 1) + offsetAngle)];

			// drawPath
			var path = '';
			path = path + 'M'+ PA[0]+' '+PA[1];
			path = path + ' L' + PB[0] + ' ' + PB[1];
			path = path + ' A' + _r + ' ' + _r + ' 90 0 1 ' + PC[0] + ' ' + PC[1];
			path = path + ' A' + R + ' ' + R + ' ' + angel +' 0 1 ' + PD[0] + ' ' + PD[1];
			path = path + ' A' + _r + ' ' + _r + ' 90 0 1 ' + PE[0] + ' ' + PE[1];
			path = path + ' L' + PF[0] + ' ' + PF[1];
			path = path + ' A' + r + ' ' + r + ' ' + angel +' 0 0 ' + PA[0] + ' ' + PA[1];
			svg.path(g2, path);
			// drawValue
			if (singleword) {
				var vs = value.length;
				vangel = angel / (vs + 1);
				for ( var v = 0; v < vs; v++) {
					var sin = _sin(vangel * (v + 1) + angel * i + offsetAngle);
					var cos = _cos(vangel * (v + 1) + angel * i + offsetAngle);
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
			}else{
				var sin = _sin(angel / 2 + angel * i + offsetAngle);
				var cos = _cos(angel / 2 + angel * i + offsetAngle);
				x = center[0] + R * .65 * sin;
				y = center[1] - R * .65 * cos;
				var xflag = sin > 0 ? 1 : -1;
				var yflag = cos > 0 ? -1 : 1;

				svg.text(g2, x - 10, y + 5, value, {
					fill : '#535353',
					stroke : '#535353',
					//'transform' : 'rotate(' + (angel + angel * i) + ',' + (x) + ',' + (y) + ')',
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
				translateX = 10 * _sin(bisects + offsetAngle);
				translateY = 10 * _cos(bisects + offsetAngle);
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

				_R = r3 - _r;
				var AB = _r / _sin(_atan(_r/_R));
				
				PA = [center[0] + R * _sin(tangel + offsetAngle),center[1] - R * _cos(tangel + offsetAngle)];
				PB = [center[0] + AB * _sin(tangel + offsetAngle),center[1] - AB * _cos(tangel + offsetAngle)];
				PC = [center[0] + r3 * _sin(tangel + offsetAngle + _atan(_r / _R)),center[1] - r3 * _cos(tangel + offsetAngle + _atan(_r / _R))];
				PD = [center[0] + r3 * _sin(tangel1 + offsetAngle - _atan(_r / _R)),center[1] - r3 * _cos(tangel1 + offsetAngle - _atan(_r / _R))];
				PE = [center[0] + AB * _sin(tangel1 + offsetAngle),center[1] - AB * _cos(tangel1 + offsetAngle)];
				PF = [center[0] + R * _sin(tangel1 + offsetAngle),center[1] - R * _cos(tangel1 + offsetAngle)];
				// drawPath
				var path = '';
				path = path + 'M'+ PA[0]+' '+PA[1];
				path = path + ' L' + PB[0] + ' ' + PB[1];
				path = path + ' A' + _r + ' ' + _r + ' 90 0 1 ' + PC[0] + ' ' + PC[1];
				path = path + ' A' + r3 + ' ' + r3  + ' ' +cangel + ' 0 1 ' + PD[0] + ' ' + PD[1];
				path = path + ' A' + _r + ' ' + _r + ' 90 0 1 ' + PE[0] + ' ' + PE[1];
				path = path + ' L' + PF[0] + ' ' + PF[1];
				path = path + ' A' + R + ' ' + R + ' ' + cangel + ' 0 0 ' + PA[0] + ' ' + PA[1];
				svg.path(g2, path);

				value = child.value;
				// 字

				x = center[0] + (w3 + R) * .8
						* _sin(tangel + cangel / 2 + offsetAngle);
				y = center[1] - (w3 + R) * .8
						* _cos(tangel + cangel / 2 + offsetAngle);

				svg.text(g2, x - 5, y + 5, value, {
					fill : '#535353',
					stroke : '#535353',
					'transform' : 'rotate('
							+ (tangel + cangel / 2 - 90 + offsetAngle) + ','
							+ (x) + ',' + (y) + ')',
					'stroke-width' : 1
				});
			}
		}
		


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
		return;
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