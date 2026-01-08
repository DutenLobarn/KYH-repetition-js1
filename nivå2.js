const nameList = ["Anna", "Erik", "Sara", "Sara2", "Sara3"];

const body = document.querySelector("body");

const showNamesBtn = document.createElement("button");

const nameUlList = document.createElement("ul");

body.appendChild(nameUlList);

body.appendChild(showNamesBtn);

showNamesBtn.textContent = "SHOW NAMES";

showNamesBtn.addEventListener("click", () => {
  nameUlList.innerHTML = "";

  for (let index = 0; index < nameList.length; index++) {
    const nameLi = document.createElement("li");

    // nameLi.textContent =
    //   "Denna person heter " + nameList[index] + " och har index: " + index;
    nameLi.textContent = `Denna person heter ${nameList[index]} och har index: ${index}`;

    nameUlList.appendChild(nameLi);
  }
});
