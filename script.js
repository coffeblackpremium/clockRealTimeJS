window.onload = function() {

    var hours = document.getElementById('hours')
    var minutes = document.getElementById('minutes')
    var seconds = document.getElementById('seconds')

    function startTime() {
        var today = new Date()
        hours.innerHTML = today.getHours()
        minutes.innerHTML = today.getMinutes()
        seconds.innerHTML = today.getSeconds()

    }
    startTime()
    setInterval(startTime, 1000)


}