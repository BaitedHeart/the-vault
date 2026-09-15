console.log("THE VAULT // System online");

const core = document.getElementById("vaultCore");
const systemMessage = document.getElementById("systemMessage");
const coreAccess = document.getElementById("coreAccess");

let sequenceRunning = false;

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

    if (sequenceRunning) return;
    sequenceRunning = true;

    core.classList.add("activated");
    core.textContent = "◆";

    typeMessage("CORE SIGNAL DETECTED", 70, function () {

        typeMessage("SYNCING...", 100, function () {

            typeMessage("DIGITAL SIGNATURE FOUND", 70, function () {

                typeMessage("LINK ESTABLISHED", 90, function () {

                    core.classList.remove("activated");

                    coreAccess.textContent = "> CORE READY\n> TAP TO ENTER";
                    core.classList.add("ready");
                    
                    sequenceRunning = false;

                });

            });

        });

    });

});
