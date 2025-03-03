const clock = document.getElementById("clock")

setInterval(() => {
    const now = new Date()
    clock.innerHTML = now.toLocaleTimeString()
    
}, 1000);