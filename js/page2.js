  //page2
    //移动到apk中
    $(".page2_apk").mouseover(() => {
        $("#page2_apk_bg").css({
            "height": "0%"
        })
        $(".page2_apk").css({
            "cursor": "pointer"
        })
        $("#page2_apk_ph").css({
            "visibility": "visible",
            "opacity": "1"
        })
    })
    //离开apk
    $(".page2_apk").mouseout(() => {
        $("#page2_apk_ph").css({
            "visibility": "hidden",
            "opacity": "0"
        })
        $("#page2_apk_bg").css({
            "height": "100%"
        });

    })
    //移动到html中
    $(".page2_html").mouseover(() => {
        $("#page2_html_bg").css({
            "height": "0%"
        })
        $(".page2_html").css({
            "cursor": "pointer"
        })
        $("#page2_html_ph").css({
            "visibility": "visible",
            "opacity": "1"
        })
    })
    //离开html
    $(".page2_html").mouseout(() => {
        $("#page2_html_ph").css({
            "visibility": "hidden",
            "opacity": "0"
        })
        $("#page2_html_bg").css({
            "height": "100%"
        });


    })
    //移动到word中
    $(".page2_word").mouseover(() => {
        $("#page2_word_bg").css({
            "height": "0%"
        })
        $(".page2_word").css({
            "cursor": "pointer"
        })
        $("#page2_word_ph").css({
            "visibility": "visible",
            "opacity": "1"
        })
    })
    //离开word
    $(".page2_word").mouseout(() => {
        $("#page2_word_ph").css({
            "visibility": "hidden",
            "opacity": "0"
        })
        $("#page2_word_bg").css({
            "height": "100%"
        });


    })
    //准备app的数据并且填入
    let appDate = [{
        "image": "./image/app1.png",
        "name": "能耗",
        "apk": "./app/能耗.apk"
    }, {
        "image": "./image/app2.png",
        "name": "趣学",
        "apk": "./app/趣学.apk"
    }, {
        "image": "./image/app3.png",
        "name": "云宿舍",
        "apk": "./app/云宿舍.apk"
    }, {
        "image": "./image/app4.png",
        "name": "预彩",
        "apk": "./app/预彩.apk"
    }]
    for (let i = 0; i < appDate.length; i++) {      //填入所有app
        let html = '<div class="page2_apk_ph_app">' +
            ' <a href="' + appDate[i].apk + '" download="' + appDate[i].name + '"><img src="' + appDate[i].image +
            '" style="width: 100%;height: 100%;border-radius: 100%;"></a>' +
            '<span>' + appDate[i].name + '</span>' +
            '</div>'
        $("#page2_apk_phbg").append(html);
    }
    let htmlDate = [{
        "image": "./image/我的第一个主页.png",
        "name": "我的第一个主页",
        "href": "https://tmm8238.github.io/tmm/index.html",
        "jar": ""
    }, {
        "image": "./image/云宿舍后台.png",
        "name": "云宿舍后台",
        "href": "http://qlove.xyz/dorm/",
        "jar": "./jar/云宿舍.rar"
    }, {
        "image": "./image/预彩后台.png",
        "name": "预彩后台",
        "href": "http://106.13.185.176:8238/makelottery/",
        "jar": "./jar/MakeLottery.rar"
    }]
    let dowStyle = ""; //判定是否可以下载
    for (let i = 0; i < htmlDate.length; i++) { //填入所有html
        if (htmlDate[i].jar != "") {
            dowStyle = 'href="' + htmlDate[i].jar + '" download="' + htmlDate[i].name + 'jar文件.rar"';
        } else {
            dowStyle = 'href="#"';
        }
        let html = '<div class="page2_apk_ph_html">' +
            '<a ' + dowStyle + '><span>' + htmlDate[i].name + '</span></a>' +
            '<a href="' + htmlDate[i].href + '" target="_blank">' +
            '<img src="' + htmlDate[i].image + '" style="width: 100%;height: 30%;">' +
            '</a>' +
            '</div>'
        $("#page2_html_ph").append(html);
    }
    //准备word的数据并填入
    let wordDate = [{
        "name": "Springboot学习笔记.pdf",
        "time": "2020-01-17",
        "file":"./word/springboot笔记.pdf"
    },{
        "name": "移动应用开发技能竞赛重点代码.pdf",
        "time": "2019-11-18",
        "file":"./word/移动应用开发技能竞赛重点代码.pdf"
    },{
        "name": "HTML,CSS,JQURY基础前端学习.pdf",
        "time": "2020-02-02",
        "file":"./word/HTML,CSS,JQURY前端基础学习.pdf"
    },{
        "name": "高级搜索_特殊网页.pdf",
        "time": "2020-02-02",
        "file":"./word/HTML,CSS,高级搜索_特殊网页.pdf"
    },{
        "name": "PS特殊操作.pdf",
        "time": "2020-02-02",
        "file":"./word/PS特殊操作.pdf"
    }]
    for (let i = 0; i < wordDate.length; i++) {  //填入所有word文档
        let html = '<div class="page2_apk_ph_word" style="display: flex;width: 95%;height: 8%;border: 1px solid sienna;margin: 1%;padding: 1%;">'+
                        '<span style="flex: 1;margin: auto;">'+wordDate[i].name+'</span>'+
                        '<div style="width: 20%;height: 100%;display: flex;flex-direction: column">'+
                            '<span style="color: gray;font-size: 10%;margin-bottom: 40%;">'+wordDate[i].time+'</span>'+
                            '<a href="'+wordDate[i].file+'" download="'+wordDate[i].name+'"><span style="color: red;">下载</span></a>'+
                        '</div>'+
                    '</div>'
        $("#page2_word_ph").append(html);
    }