console.log("THE VAULT // System online");

const core = document.getElementById("vaultCore");
const systemMessage = document.getElementById("systemMessage");

core.addEventListener("click", function () {
    console.log("CORE SIGNAL DETECTED");

    core.classList.add("activated");
    core.textContent = "◆";
    systemMessage.textContent = "CORE SIGNAL DETECTED";
    
    setTimeout(function () {
        core.classList.remove("activated");
    }, 800);
});
