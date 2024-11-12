// 要件:
// HTMLファイルを用意し、以下の要素を含めてください。

// 社員のname、position、salary、programmingLanguageを入力できるフォーム。
// 「社員を追加」ボタンと「社員一覧を表示」ボタン。
// 社員の情報を表示するための<div id="employeeList"></div>を用意。
// JavaScriptで以下のクラスを定義し、フォームからのデータを管理できるようにしてください。

// Employeeクラス: name、position、salary、idのプロパティを持ち、詳細を返すメソッドを実装します。
// Developerクラス: Employeeを継承し、programmingLanguageプロパティを追加します。

// EmployeeDatabaseクラス: 社員情報を管理するクラスで、社員を追加・取得・表示するメソッドを実装します。
// イベントリスナーを使って、以下の操作を実装してください。

// 「社員を追加」ボタンがクリックされたとき、フォームの入力内容でEmployeeまたはDeveloperオブジェクトを作成し、
// EmployeeDatabaseに追加します。
// 「社員一覧を表示」ボタンがクリックされたとき、社員の一覧を表示エリアに全社員の詳細を出力します。
// class EmployeeDatabase {
//     constructor() {
//         this.Employees = [];
//     }

//     addEmployee(employee) {
//         this.Employees.push(employee);
//         console.log(`${employee.name} is already added`);
//     }

//     getEmployeeById(id) {
//         const employee = this.Employees.find(employee => employee.id === id);
//         if (!employee) {
//             console.log(`Couldn't find employee with ID: ${id}`);
//         }
//         return employee;
//     }

//     showEmployee() {
//         console.log(this.Employees);
//         return this.Employees;
//     }
// }

// class Employee {
//     constructor(name, position, salary, id) {
//         this.name = name;
//         this.position = position;
//         this.salary = salary;
//         this.id = id;
//     }

//     showDetail() {
//         return `ID ${this.id} : ${this.name}'s position is ${this.position}. Salary is ${this.salary}`;
//     }
// }

// class Developer extends Employee {
//     constructor(name, position, salary, id, programmingLanguage) {
//         super(name, position, salary, id);
//         this.programmingLanguage = programmingLanguage;
//     }

//     showDetail() {
//         return `${super.showDetail()} - Specializes in ${this.programmingLanguage}`;
//     }
// }

// const employeeDatabase = new EmployeeDatabase();

// const form = document.getElementById("employeeForm");
// const addEmployeeBtn = document.getElementById("addEmployeeBtn");
// const showEmployeesBtn = document.getElementById("showEmployeesBtn");
// const employeeList = document.getElementById("employeeList");

// // 「社員を追加」ボタンのクリックイベント
// addEmployeeBtn.addEventListener("click", () => {
//     const name = document.getElementById("name").value;
//     const position = document.getElementById("position").value;
//     const salary = document.getElementById("salary").value;
//     const programmingLanguage = document.getElementById("programmingLanguage").value;

//     let employee;
//     if (programmingLanguage) {
//         employee = new Developer(name, position, salary, null, programmingLanguage);
//     } else {
//         employee = new Employee(name, position, salary, null);
//     }
//     employeeDatabase.addEmployee(employee);

//     form.reset();
//     console.log(`${employee.name}が追加されました。`);
// });

// // 「社員一覧を表示」ボタンのクリックイベント
// showEmployeesBtn.addEventListener("click", () => {
//     employeeList.innerHTML = "";
//     const employees = employeeDatabase.showEmployee();
//     employees.forEach(emp => {
//         const empDetails = document.createElement("p");
//         empDetails.textContent = emp.showDetail();
//         employeeList.appendChild(empDetails);
//     });
// });
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー