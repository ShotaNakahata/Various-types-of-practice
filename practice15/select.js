const selectElements = document.querySelectorAll("select");
console.log(selectElements);

selectElements.forEach((selectElement)=>{
    selectElement.setAttribute("multiple","")
    console.log(selectElement.multiple);
    
    createCustomDropDown(selectElement);
})

function createCustomDropDown(selectElement) {
    // ドロップダウン全体のコンテナ
    const dropDownBox = document.createElement("div");
    dropDownBox.classList.add("dropDownBox");

    // 選択された項目の表示エリア
    const selectedItems = document.createElement("span");
    selectedItems.classList.add("selected-items");
    selectedItems.textContent = "Please select"; // 初期メッセージ
    dropDownBox.appendChild(selectedItems);

    // 選択肢リストのコンテナ
    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdownContent");

    // `<select>` 内の各 `<option>` 要素に対応するチェックボックスとラベルを作成
    Array.from(selectElement.options).forEach((option) => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option.value || option.textContent;

        // ラベルにチェックボックスとテキストを追加
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option.textContent));
        dropdownContent.appendChild(label);

        checkbox.addEventListener("change",()=>{
            option.selected = checkbox.checked;
            console.log(option.selected);
            updateSelectedItems(selectedItems, selectElement);
        })
    });

    // ドロップダウンボックスに選択リストを追加
    dropDownBox.appendChild(dropdownContent);

    // 元の select 要素の直後にドロップダウンボックスを挿入
    selectElement.insertAdjacentElement("afterend", dropDownBox);

    // 元の select 要素は非表示
    selectElement.style.display = "none";

    dropDownBox.addEventListener("click",()=>{
        dropDownBox.classList.toggle("active");
    })
}

function updateSelectedItems(selectedItems, selectElement) {
    const selectedOptions = Array.from(selectElement.selectedOptions).map(
        (option) => option.textContent
    );
    selectedItems.textContent = selectedOptions.length > 0 
        ? selectedOptions.join(", ") 
        : "Please select"; // 選択なしの場合の表示
}