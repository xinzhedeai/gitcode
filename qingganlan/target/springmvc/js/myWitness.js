$(function(){
    $('#table_id').DataTable({
        "language": {
            "sProcessing": "处理中...",
            "sLengthMenu": "显示 _MENU_ 项结果",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页"
            },
            "oAria": {
                "sSortAscending": ": 以升序排列此列",
                "sSortDescending": ": 以降序排列此列"
            }
        },
        "dom": "<'row'<'col-xs-4'l><'#mytool.col-xs-2'><'col-xs-6'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",

        "columnDefs": [{
            "render": function(data, type, row) {
                return "<input type='checkbox' name='checkbox' class='checkbox'></input><a href='#'><strong>"+data +"</strong></a>";
             
            },
            "targets": 0
          }
        // },
        //     "render": function(data, type, row) {
        //         return "<input type='checkbox' name='checkbox'>"+data+"</input>" ;
             
        //     },
        //     "targets": 0
        // }
        ]

    /*  "processing": true,
       "serverSide": true,
       "ajax" : "load",
      "columns": [
        {"data": "id", "bSortable": false},
        {"data": "firstName"},
        {"data": "lastName"}
      ],
      "columnDefs": [
        {
          "targets": [3],
          "data": "id",
          "render": function(data, type, full) {
            return "<a href='/update?id=" + data + "'>Update</a>";
          }
        }
      ]
*/
    });
  $('#table_id tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
        // alert($(this).index());
        $(".checkbox:eq("+$(this).index()+")").css("checked",true); 

    } );
 
    $('#button').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected' );
    } );
})