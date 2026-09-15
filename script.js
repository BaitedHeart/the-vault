console.log("THE VAULT // System online");

const core = document.getElementById("vaultCore");
const systemMessage = document.getElementById("systemMessage");

let sequenceRunning = false;

function typeMessage(text, speed = 45) {
    systemMessage.textContent = "";

    let i = 0;

    const typing = setInterval(function () {
        systemMessage.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }
    }, speed);
}

core.addEventListener("click", function () {

    if (sequenceRunning) return;
    sequenceRunning = true;

    core.classList.add("activated");
    core.textContent = "◆";

    typeMessage("CORE SIGNAL DETECTED");

    setTimeout(() => {
    systemMessage.textContent = "SYNCING...";
}, 1200);

    setTimeout(function () {
        systemMessage.textContent = "DIGITAL SIGNATURE FOUND";
    }, 2500);

    setTimeout(function () {
        systemMessage.textContent = "LINK ESTABLISHED";
    }, 3800);

    setTimeout(function () {
        core.classList.remove("activated");
        sequenceRunning = false;
    }, 4600);

});
