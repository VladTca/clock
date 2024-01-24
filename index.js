let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
 if(!timerId)
        timerId = setInterval(updateClock, 1000 /* 1000 миллисекунд = 1 секунда */ ); // запускаем  
});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval

    clearInterval ( timerId );
    timerId=null; // очищаем переменную таймера, чтобы можно было запустить таймер еще раз.
})
function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
