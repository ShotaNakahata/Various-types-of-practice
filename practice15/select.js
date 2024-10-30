let selectedItems = {};

// 全ての <select> 要素を取得し、選択されたアイテムを管理する
document.querySelectorAll("select").forEach((selectElement) => {
    selectedItems[selectElement.id] = [];
    console.log("selectedItems", selectedItems);
    createCustomDropDown(selectElement);
});

function createCustomDropDown(selectElement) {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    const dropdownBox = document.createElement("div");
    dropdownBox.classList.add("dropdown-box"); // class名が "dropdownBox" ではなく "dropdown-box" です
    dropdownBox.innerHTML = '<span class="selected-items">Please Select</span><div class="arrow"></div>';
    dropdown.appendChild(dropdownBox);

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");

    // selectElement.options に修正
    Array.from(selectElement.options).forEach((option) => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option.value || option.textContent;
        checkbox.addEventListener("change",()=>{
            option.selected = checkbox.checked;
            updateSelectedItems(dropdownBox,selectElement)
        })
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option.textContent));
        dropdownContent.appendChild(label);
    });

    dropdown.appendChild(dropdownContent);

    // "after" を "afterend" に修正
    selectElement.insertAdjacentElement("afterend", dropdown);
    selectElement.style.display = "none"; // 元の select を非表示に
}

function updateSelectedItems(dropdownBox, selectElement){
    const selected  = Array.from(selectElement.selectedOptions).map(
        (option)=>option.textContent
    )
    dropdownBox.querySelector(".selected-items").textContent = 
        selected.length > 0 ? selected.join(", ") : "Please Select";

    // 選択された項目を selectedItems オブジェクトに保存
    selectedItems[selectElement.id] = selected;
}