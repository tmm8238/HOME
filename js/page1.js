  //page1的界面
    //刚进入添加时间线
    //准备数据
    let timeDate = [{
        time: "2018年09月06日",
        text: "进入了《湖南科技职业学院》大学，选了移动应用开发专业学习。"
    }, {
        time: "2018年06月14日",
        text: "参加了《软件杯》，磨练了自己。"
    }, {
        time: "2019年07月13日",
        text: "在暑假期间，我和同学一起参加了《强智杯》里的移动应用项目。"
    },
    {
        time: "2019年11月28日",
        text: "在学校成功进入了《移动互联网应用软件开发赛》小组，参加了厦门举行的《移动互联网应用软件开发赛》获取一等奖。"
    },  {
        time: "2020年12月22日",
        text: "代表学校参加全省《移动互联网应用软件开发赛》赛项，获取二等奖。"
    },  {
        time: "以后",
        text: "只要学不死，就往死里学。"
    }]
    let runStye = ""; //圆点的样式
    for (let i = 0; i < timeDate.length; i++) {
        if (i == timeDate.length - 1) runStye = "";
        else runStye = "&#xe63f;";
        let html = '  <ul class="layui-timeline">' +
            '<!--定义时间线组件-->' +
            '<li class="layui-timeline-item">' +
            '<!--圆点，符号-->' +
            '<i class="layui-icon layui-anim layui-anim-rotate layui-anim-loop layui-timeline-axis">'+runStye+'</i>' +
            '<!--线-->' +
            '<div class="layui-timeline-content layui-text" style="color: white;">' +
            '<!--头部-->' +
            '<h3 class="layui-timeline-title" style="color: white;">' + timeDate[i].time + '</h3>' +
            '<!--内容部分-->' +
            '<p>' +
            '' + timeDate[i].text + '' +
            '</p>' +
            '</div>' +
            '</li>' +
            '</ul>';
        $("#page1_jieshao").append(html);
    }