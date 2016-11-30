/**
 * Created by zhangfan2 on 2016/11/7.
 */
//一些简单的JS函数的汇总，原生JS不断扩充中

//时间戳转化方法
function getLocalTime(d) {
    d = new Date(d * 1000);
    var date = (d.getFullYear()) + "-" +
        (d.getMonth() + 1) + "-" +
        (d.getDate()) + " " +
        (d.getHours()) + ":" +
        (d.getMinutes()) + ":" +
        (d.getSeconds());
    return date;
}

//时间转化时间戳
function getTime(d) {
    // 获取某个时间格式的时间戳
    var stringTime = d;
    var timestamp2 = Date.parse(new Date(stringTime));
    return parseInt(timestamp2);
}

//一个自定义的休眠方法，用来暂时解决更改命令
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return 1;
    }
}