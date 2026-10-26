function update() {
    const now = new Date();
    const pad = n => String(n).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    document.getElementById("date").textContent =
        `${now.getFullYear()}.${now.getMonth() + 1}.${pad(now.getDate())}`;

    setTimeout(update, 1000 - now.getMilliseconds());
}

document.addEventListener("DOMContentLoaded", update);
