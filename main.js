function update() {
    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    const Y = now.getFullYear();
    const M = String(now.getMonth() + 1);
    const D = String(now.getDate()).padStart(2, '0');
    const W = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][now.getDay()];

    document.getElementById("clock").textContent = `${h}:${m}:${s}`;
    document.getElementById('date').textContent = `${Y}.${M}.${D}`;
}

function tick() {
    update();
    setTimeout(tick, 1000 - (Date.now() % 1000));
}

tick();