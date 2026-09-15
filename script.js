console.log("THE VAULT // System online");

const core = document.getElementById("vaultCore");
const systemMessage = document.getElementById("systemMessage");

let sequenceRunning = false;

core.addEventListener("click", function () {

    if (sequenceRunning) return;
    sequenceRunning = true;

    core.classList.add("activated");
    core.textContent = "◆";

    systemMessage.textContent = "CORE SIGNAL DETECTED";

    setTimeout(function () {
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
