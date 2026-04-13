// Store pairs as objects
let pairs = [];

function validateInput(input) {
    // Regex: name=value (alphanumeric only, optional spaces)
    const regex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;
    return input.match(regex);
}

function addPair() {
    const input = document.getElementById("inputField").value;
    const errorDiv = document.getElementById("error");

    const match = validateInput(input);

    if (!match) {
        errorDiv.textContent = "Invalid format. Use: name=value (alphanumeric only)";
        return;
    }

    errorDiv.textContent = "";

    const name = match[1];
    const value = match[2];

    pairs.push({ name, value });

    updateList();
    document.getElementById("inputField").value = "";
}

function updateList() {
    const listBox = document.getElementById("listBox");
    listBox.innerHTML = "";

    pairs.forEach((pair, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = `${pair.name} = ${pair.value}`;
        listBox.appendChild(option);
    });
}

function sortByName() {
    pairs.sort((a, b) => a.name.localeCompare(b.name));
    updateList();
}

function sortByValue() {
    pairs.sort((a, b) => a.value.localeCompare(b.value));
    updateList();
}

function deleteSelected() {
    const listBox = document.getElementById("listBox");
    const selected = Array.from(listBox.selectedOptions).map(opt => Number(opt.value));

    // Remove selected items
    pairs = pairs.filter((_, index) => !selected.includes(index));

    updateList();
}