var flag = true;
$(".less").on("click", function () {

    if (flag) {
        flag = false;
        $(".text-eara").slideUp();
        $(".submit").slideUp();
        $(this).removeClass("less icon-less").addClass("more_unfold icon-moreunfold");
    } else {
        flag = true;
        $(".text-eara").slideDown();
        $(".submit").slideDown();
        $(this).removeClass("more_unfold icon-moreunfold").addClass("less icon-less");
    }
});

$(".submit").on("click", function () {
 
    var time
    var value = $(".text-eara").val()
    if (value) {
        time = getTime()
        reder(time, value)
    } else {
        alert("输入不能为空！")
    }
 

})

var getTime = () => {
    var date = new Date()
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

}
var reder = (time, value) => {
    var str = `<div class="list-talk">
                    <div class="talk-text-top">
                        <div class="list-icon"></div>
                        <span class="username-list">马冬梅不姓马</span>
                    </div>
                    <div class="talk-text-time">
                        <span class="time">${time}</span>
                    </div>
                    <div class="talk-text-inner">${value}</div>
                </div>`
    var index = checkHeight()
    var list = $(".user-list").children().eq(index)
    list.append($(str))
}
var checkHeight = () => {
    var list = $(".user-list").children()
    var index = 0
    var height = 0
    var li = list.eq(0).height()
    for (var i = 0; i < list.length; i++) {
        height = list.eq(i).height()  // 目标高度  

        if(height < li){
            index = i
        } 
    } 
    return index
} 
