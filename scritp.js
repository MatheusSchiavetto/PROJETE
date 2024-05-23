
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const saveButton = document.getElementById("save-note");
    const noteInput = document.getElementById("note-input");
    let currentBox = null;

    document.querySelectorAll(".add-note").forEach(button => {
        button.addEventListener("click", (e) => {
            currentBox = e.target.closest('.box');
            document.getElementById("modal-title").innerText = currentBox.dataset.title;
            noteInput.value = "";
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    saveButton.addEventListener("click", () => {
        if (currentBox && noteInput.value.trim() !== "") {
            const note = document.createElement("div");
            note.className = "note";
            note.innerText = noteInput.value;
            currentBox.appendChild(note);
            modal.style.display = "none";
        }
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});