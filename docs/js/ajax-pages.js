$(document).ready(function () {
    let i = 1
    let all = $("#total").text()
    if (i >= all)
            $("#pager").html("<a href='/' class='more'>已经到最底层了，再点我触底反弹</a>")
    $(".more").click(function () {

        let cid = "#load" + i
        $(cid).load("/page/" + (++i) + "/ #index-posts", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                $(cid).append("<div id = 'load" + i + "'" + ">" + "</div>")
            if (i >= all)
                $("#pager").html("<a href='/' class='more'>已经到最底层了，再点我触底反弹</a>")
        });

    });
});