alert("THE VAULT // JavaScript connected");
const core = document.getElementById("vaultCore");

core.addEventListener("click", function () {
  console.log("CORE SIGNAL DETECTED");

  core.textContent = "◆";
});
