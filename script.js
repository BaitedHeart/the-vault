console.log("THE VAULT // System online");

const core = document.getElementById("vaultCore");
const systemMessage = document.getElementById("systemMessage");
const coreAccess = document.getElementById("coreAccess");

let sequenceRunning = false;
let vaultState = "boot";

function typeMessage(text, speed = 70, callback) {

    if (systemMessage.textContent !== "") {
        systemMessage.textContent += "\n";
    }

    systemMessage.textContent += "> ";

    let i = 0;

    const typing = setInterval(function () {
        systemMessage.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);

            if (callback) {
                setTimeout(callback, 500);
            }
        }
    }, speed);
}

core.addEventListener("click", function () {

if (vaultState === "ready") {
    vaultState = "access";
    sequenceRunning = true;

    coreAccess.textContent = "";
    core.classList.remove("ready");
    core.classList.add("activated");

    systemMessage.textContent = "";

    typeMessage("ACCESSING THE VAULT...", 80, function () {
        core.classList.remove("ready");
        core.classList.add("accessing");
        document.getElementById("crestRing").classList.add("active");
        
        

        vaultState = "accessing";
        startAccessingSequence();
        sequenceRunning = false;
    });

    return;
}

    if (sequenceRunning) return;
    sequenceRunning = true;

    core.classList.add("activated");
    core.textContent = "◆";

    typeMessage("CORE SIGNAL DETECTED", 70, function () {

        typeMessage("SYNCING...", 100, function () {

            typeMessage("DIGITAL SIGNATURE FOUND", 70, function () {

                typeMessage("LINK ESTABLISHED", 90, function () {

                    core.classList.remove("activated");
                    core.classList.add("ready");

                    coreAccess.textContent = "> CORE READY\n> TAP TO ENTER";
                    core.classList.add("ready");
                    
                    vaultState = "ready";
                    sequenceRunning = false;

                });

            });

        });

    });

});
function startAccessingSequence() {
    core.classList.remove("ready");
    core.classList.add("accessing");

    coreAccess.textContent = "";

    setTimeout(() => {
        typeMessage("ACCESSING CORE...", 70, () => {

            setTimeout(() => {
                typeMessage("IDENTITY VERIFIED", 70, () => {
                    systemMessage.textContent = "";
                typeMessage("EIGHT RESONANCES DETECTED...", 70, () => {
            setTimeout(() => {
                typeMessage("DIGICREST MATRIX // ONLINE", 70);
    }, 400);
  });
}, 400);
});
            }, 500);

        });
    }, 400);
}
core.addEventListener("click", () => {
  alert("CORE CLICK DETECTED");
});
