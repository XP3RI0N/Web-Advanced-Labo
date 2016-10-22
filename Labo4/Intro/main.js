var saveBtn, firsNameText, nameText, infoSection;

// document.addEventListener("DOMContentLoaded", domLoaded);	// zonder prentjes
window.addEventListener("load", loaded);						// met prentjes

function loaded() {
	saveBtn      = document.getElementById("saveButton");
	firsNameText = document.getElementById("firstname");
	nameText     = document.getElementById("name");
	infoSection  = document.getElementById("personInfoSection");

	saveBtn.addEventListener("click", save);
};

function save() {
	addInfo(nameText.value, firsNameText.value);
};

function addInfo(name, firstname) {
	var newSpan = document.createElement("span");
	newSpan.innerHTML = name + " " + firstname;
	infoSection.appendChild(newSpan);
};
