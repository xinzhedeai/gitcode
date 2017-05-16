	var dataRows = getData();
$(function() {
	(function($) {
		function pagerFilter(data) {
			if($.isArray(data)) { // is array
				data = {
					total: data.length,
					rows: data
				}
			}
			var target = this;
			var dg = $(target);
			var state = dg.data('datagrid');
			var opts = dg.datagrid('options');
			if(!state.allRows) {
				state.allRows = (data.rows);
			}
			if(!opts.remoteSort && opts.sortName) {
				var names = opts.sortName.split(','); //排序字段
				var orders = opts.sortOrder.split(','); //排序顺序
				state.allRows.sort(function(r1, r2) {
					var r = 0;
					for(var i = 0; i < names.length; i++) {
						var sn = names[i];
						var so = orders[i];
						var col = $(target).datagrid('getColumnOption', sn);
						var sortFunc = col.sorter || function(a, b) {
							return a == b ? 0 : (a > b ? 1 : -1);
						};
						r = sortFunc(r1[sn], r2[sn]) * (so == 'asc' ? 1 : -1);
						if(r != 0) {
							return r;
						}
					}
					return r;
				});
			}
			var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
			var end = start + parseInt(opts.pageSize);
			data.rows = state.allRows.slice(start, end);
			return data;
		}

		var loadDataMethod = $.fn.datagrid.methods.loadData;
		var deleteRowMethod = $.fn.datagrid.methods.deleteRow;
		$.extend($.fn.datagrid.methods, {
			clientPaging: function(jq) {
				return jq.each(function() {
					var dg = $(this);
					var state = dg.data('datagrid');
					var opts = state.options;
					opts.loadFilter = pagerFilter;
					var onBeforeLoad = opts.onBeforeLoad;
					opts.onBeforeLoad = function(param) {
						state.allRows = null;
						return onBeforeLoad.call(this, param);
					}
					var pager = dg.datagrid('getPager');
					pager.pagination({
						onSelectPage: function(pageNum, pageSize) {
							opts.pageNumber = pageNum;
							opts.pageSize = pageSize;
							pager.pagination('refresh', {
								pageNumber: pageNum,
								pageSize: pageSize
							});
							dg.datagrid('loadData', state.allRows);
						}
					});
					$(this).datagrid('loadData', state.data);
					if(opts.url) {
						$(this).datagrid('reload');
					}
				});
			},
			loadData: function(jq, data) {
				jq.each(function() {
					$(this).data('datagrid').allRows = null;
				});
				return loadDataMethod.call($.fn.datagrid.methods, jq, data);
			},
			deleteRow: function(jq, index) {
				return jq.each(function() {
					var row = $(this).datagrid('getRows')[index];
					deleteRowMethod.call($.fn.datagrid.methods, $(this), index);
					var state = $(this).data('datagrid');
					if(state.options.loadFilter == pagerFilter) {
						for(var i = 0; i < state.allRows.length; i++) {
							if(state.allRows[i] == row) {
								state.allRows.splice(i, 1);
								break;
							}
						}
						$(this).datagrid('loadData', state.allRows);
					}
				});
			},
			getAllRows: function(jq) {
				return jq.data('datagrid').allRows;
			}
		})
	})(jQuery);
	$(function() {
		var columns  = [{
			field : 'code',
			title : '供货商编码',
			width :　110,
		},{
			field : 'name',
			title : '供货商名称',
			width :　110,
		},{
			field : 'level',
			title : '等级',
			width :　110,
		},{
			field : 'provide',
			title : '主供品类',
			width :　110,
		},{
			field : 'full',
			title : '是否完全',
			width :　110,
		},{
			field : 'issubmit',
			title : '是否提文',
			width :　110,
		},{
			field : 'status',
			title : '审核状态',
			width :　110,
		},{
			field : 'note',
			title : '备注',
			width :　110,
		}],
		options = {
			columns : [columns],
			rownumbers:true,
            singleSelect:false,
            autoRowHeight:false,
            pagination:true,
            fitColumns:true,
            striped:true,
            checkOnSelect:false,
            selectOnCheck:false,
            collapsible:true,
            toolbar:'#tb',
            pageSize:10,
            data : dataRows,
            onRowContextMenu: function(e, index, row) {
				console.info(e);
				e.preventDefault();
				$(this).datagrid('unselectAll');
				$(this).datagrid('selectRow', index);
				$("#menu").menu('show', {
					left: e.pageX,
					top: e.pageY
				});
			}
		};
		$('#dg').datagrid(options).datagrid('clientPaging');
//		.datagrid('clientPaging');
	/*	parent.$.modalDialog({
			title : '用户授权',
			width : 500,
			height : 300,
//			href : ',
			buttons : [ {
				text : '授权',
				handler : function() {
					parent.$.modalDialog.openner_dataGrid = dataGrid;//因为授权成功之后，需要刷新这个dataGrid，所以先预定义好
					var f = parent.$.modalDialog.handler.find('#form');
					f.submit();
				}
			} ]
		});*/
//		parent.$.messager('dialog', {title: 'My Dialog',
//	width: 400,
//	height: 200,
//	closed: false,});/
		
		$('<div id="dialogTest"/>').dialog({
			title : 'skdlfjsldf',
			width : 840,
			height : 680,
			modal : true,
			closable : true,
		});
	throw new Error('hahhahah');


	});
})

function getData() {
	var rows = [];
	for(var i = 1; i <= 12; i++) {
		rows.push({
			code: '10695',
			name: '南京天泽星网股份有限公司',
			level: '正式',
			provide: '光纤通信设备配件',
			full: '√',
			issubmit: '√',
			status: '已审核',
			note: '-'
		});
	}
	return rows;
}

function showDialog() {
	parent.$('#addModal').show().dialog({
		modal: true,
		closable: true,
		buttons: [{
			text: '添加',
			handler: function() {
				addProvider();
			}
		}, {
			text: '取消',
			handler: function() {
				loginFun();
			}
		}]
	});
}

function addProvider() {
	var formRow = $.serializeObject($('#addModal').find('form'));
	dataRows.unshift(formRow);
	$('#dg').datagrid({
		data: dataRows
	}).datagrid('clientPaging');
}

function deleteFun() {
	//				var row = $('#datagrid').datagrid('getSelected');
	var index = $('#dg').datagrid('getRowIndex', $('#dg').datagrid('getSelected'));
	console.info(index);
	if(index != -1) {
		$('#dg').datagrid('deleteRow', index);
	} else {
		$.messager.alert('提示', '请选择要删除的记录', 'warning');
	}
}

