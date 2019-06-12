
function jsonpCallback(result) {

    $(".nowTime").html(result["date"] + " " + result["week"]);
    $(".nowTime").next("p").html("更新时间:" + result["update_time"]);
    $(".weather-temp").html(result["tem"] + "℃");
    $(".updateTime").html("<span>" + result["wea"] + " | " + result["win"] + result["win_speed"] + " | 湿度：" + result["humidity"]);
    $(".weather-pollute").html("污染指数：" + result['air_pm25']);
    $(".weather-say").html(result["air_tips"]);
    var weather = choiceImg(result["wea"]);
    function choiceImg(weather) {
        var i = "";

        switch (weather) {
            case "阴": i = "./img/yin.png"; break;
            case "晴": i = "./img/qing.png"; break;
            case "多云": i = "./img/yun.png"; break;
            case "小雪": i = "./img/xue.png"; break;
            case "中雪": i = "./img/xue.png"; break;
            case "大雪": i = "./img/xue.png"; break;
            case "阵雪": i = "./img/xue.png"; break;
            case "暴雪": i = "./img/xue.png"; break;
            case "雷阵雨": i = "./img/zhenyu.png"; break;
            case "小雨": i = "./img/yu.png"; break;
            case "中雨": i = "./img/yu.png"; break;
            case "阵雨": i = "./img/yu.png"; break;
            case "大雨": i = "./img/yu.png"; break;
            case "暴雨": i = "./img/yu.png"; break;
            case "雨夹雪": i = "./img/yujiaxue.png"; break;
            case "扬沙": i = "./img/shachen.png"; break;
            case "晴转多云": i = "./img/yun.png"; break;
            case "雾": i = "./img/wu.png"; break;
            default: i = "./img/qing.png";
        }
        return i;
    }
    $(".weather-img img").attr("src", weather);

}
$(function () {
    var JSONP = document.createElement("script");
    JSONP.type = "text/javascript";
    JSONP.src = "https://www.tianqiapi.com/api/?version=v6&cityid=101280601&callback=jsonpCallback";
    document.getElementsByTagName("head")[0].appendChild(JSONP);
}
)


