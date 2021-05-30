(() => {
    var dday = new Date("May 30, 2021, 20:07:00").getTime()

    setInterval(function () {
        var today = new Date().getTime()
        var gap = dday - today
        var day = Math.ceil(gap / (1000 * 60 * 60 * 24)) - 1
        var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - 1
        var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60)) - 1
        var sec = Math.ceil((gap % (1000 * 60)) / 1000)
        
        if (gap >= 0) {
            document.querySelector("#count").innerHTML = "D-" + day + "일 " + hour + "시간 " + min + "분 " + sec + "초"
        } else {
            document.querySelector("#count").innerHTML = null
        }
        
    }, 1000)
})()