console.log("The Vault is online.");

const vaultTitle = document.querySelector("h1");

vaultTitle.addEventListener("click", function () {
  vaultTitle.textContent = "VAULT UNLOCKED 🔓";
});
