function update(now) {

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    const Y = now.getFullYear();
    const M = String(now.getMonth() + 1);
    const D = String(now.getDate()).padStart(2, '0');

    document.getElementById("clock").textContent = `${h}:${m}:${s}`;
    document.getElementById('date').textContent = `${Y}.${M}.${D}`;
}

function tick(lastSec) {
    const now = new Date();
    const currentSec = Math.floor(now.getTime() / 1000);

    if (currentSec !== lastSec) {
        update(now);
        lastSec = currentSec;
    }

    requestAnimationFrame(() => tick(lastSec));
}

document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    update(now);
    tick(Math.floor(now.getTime() / 1000));
});