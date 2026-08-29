const RESTRICTION_PATTERN = /[A-ZÁÉÍÓÚÜÑ0-9]/;
const EMPTY_RESULT = "Aún no hay un resultado.";

const inputField = document.getElementById("encrypted-Text");
const outputField = document.getElementById("mensaje");
const errorMessage = document.getElementById("mensajeError");
const characterCount = document.getElementById("character-count");
const resultStatus = document.getElementById("result-status");
const copyButton = document.getElementById("btn-copiar");
const toast = document.getElementById("toast");
const currentYear = document.getElementById("current-year");

function updateCharacterCount() {
    const count = inputField.value.length;
    characterCount.textContent = `${count} ${count === 1 ? "carácter" : "caracteres"}`;
}

function clearError() {
    errorMessage.textContent = "";
    inputField.removeAttribute("aria-invalid");
}

function validateInput({ allowEmpty = false } = {}) {
    const text = inputField.value;

    if (!allowEmpty && text.trim() === "") {
        errorMessage.textContent = "Escribe un mensaje antes de continuar.";
        inputField.setAttribute("aria-invalid", "true");
        return false;
    }

    const invalidCharacter = text.match(RESTRICTION_PATTERN);
    if (invalidCharacter) {
        errorMessage.textContent = `El carácter “${invalidCharacter[0]}” no está permitido. Usa minúsculas y evita números.`;
        inputField.setAttribute("aria-invalid", "true");
        return false;
    }

    clearError();
    return true;
}

function setResult(value, status) {
    outputField.value = value;
    resultStatus.textContent = status;
    copyButton.disabled = value.trim() === "" || value === EMPTY_RESULT;
}

function encryptText() {
    if (!validateInput()) {
        return;
    }

    const encrypted = inputField.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    setResult(encrypted, "Texto encriptado");
}

function decryptText() {
    if (!validateInput()) {
        return;
    }

    const decrypted = inputField.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    setResult(decrypted, "Texto desencriptado");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 2600);
}

async function copyResult() {
    const value = outputField.value.trim();
    if (!value || value === EMPTY_RESULT) {
        return;
    }

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(value);
        } else {
            outputField.focus();
            outputField.select();
            document.execCommand("copy");
            outputField.setSelectionRange(0, 0);
        }
        showToast("Resultado copiado al portapapeles.");
    } catch (error) {
        showToast("No se pudo copiar automáticamente. Selecciona el resultado para copiarlo.");
    }
}

inputField.addEventListener("input", () => {
    updateCharacterCount();
    if (inputField.getAttribute("aria-invalid") === "true") {
        validateInput({ allowEmpty: true });
    }
});

inputField.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        encryptText();
    }
});

document.getElementById("encriptar-btn").addEventListener("click", encryptText);
document.getElementById("desencriptador-btn").addEventListener("click", decryptText);
copyButton.addEventListener("click", copyResult);

currentYear.textContent = new Date().getFullYear();
updateCharacterCount();
setResult(EMPTY_RESULT, "Listo para comenzar");
