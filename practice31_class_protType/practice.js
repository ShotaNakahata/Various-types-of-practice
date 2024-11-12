// 問題 1: 基本的なクラスの定義 次の要件に従って、Personクラスを作成してください。

// クラス名はPerson。
// コンストラクタにname（名前）とage（年齢）を引数として取り、インスタンスのプロパティとして設定します。
// introduceというメソッドを持ち、このメソッドは"Hello, my name is [name] and I am [age] years old."
// という文字列を返します。
// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     introduce(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// const person1 = new Person("Alice",23)
// person1.introduce()
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 1: クラスの継承
// 次の要件に従って、新しいクラスを作成してください。

// 要件:

// Personクラスを基に、新しいStudentクラスを作成してください。
// StudentクラスはPersonクラスを継承し、新しいプロパティとしてgrade（成績）を追加します。
// Studentクラスに、study()というメソッドを追加してください。
// このメソッドは"${name} is studying for a ${grade} grade."というメッセージをconsole.logで出力します。
// introduce()メソッドはPersonクラスから継承し、superを使って親クラスのintroduce()メソッドを呼び出してください。

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     introduce() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }
// class Student extends Person{
//     constructor(name,grade,age){
//         super(name,age);
//         this.grade=grade
//     }
//     study(){
//         console.log(`${this.name} is studying for a ${this.grade} grade.`)
//     }
// }
// const student = new Student("Alice",3,20)
// student.study();
// student.introduce();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 2: 多段階の継承
// 以下の要件に従って、新しいクラスを作成してください。

// 要件:

// すでにあるPersonクラスとStudentクラスを基に、新しいGraduateStudentクラスを作成してください。
// GraduateStudentクラスはStudentクラスを継承し、新しいプロパティthesisTitle（論文のタイトル）を追加します。
// GraduateStudentクラスにdefendThesis()というメソッドを追加してください。
// このメソッドは、"${name} is defending their thesis titled '${thesisTitle}'."
// というメッセージをconsole.logで出力します。
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
//     introduce() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);
//         this.grade = grade;
//     }
//     study() {
//         console.log(`${this.name} is studying for a ${this.grade} grade.`)
//     }
// }

// class GraduateStudent extends Student {
//     constructor(name, age, grade, thesisTitle) {
//         super(name, age, grade);
//         this.thesisTitle = thesisTitle
//     }
//     defendThesis() {
//         console.log(`${this.name} is defending their thesis titled '${this.thesisTitle}'.`)
//     }
// }
// const GraduateStudent1 = new GraduateStudent("Alice", 24, "A", "Quantum Physics")
// GraduateStudent1.defendThesis();
// student.study();
// student.introduce();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 3: メソッドのオーバーライドとsuperの使用
// 次の要件に従って、新しいクラスを作成し、メソッドのオーバーライドを学びましょう。

// 要件:

// すでにあるPersonクラスとStudentクラスを基に、新しいGraduateStudentクラスを作成してください。
// GraduateStudentクラスは、Studentクラスのstudy()メソッドをオーバーライドし、
// 新しいメッセージ"${name} is studying hard for their final thesis titled '${thesisTitle}'."を
// console.logで出力してください。
// GraduateStudentクラスのstudy()メソッド内で、親クラスStudentのstudy()メソッドも呼び出して、
// 元のメッセージも出力されるようにしてください。
// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     introduce() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age)
//         this.grade = grade
//     }
//     study() {
//         console.log(`${this.name} is studying for a ${this.grade} grade.`)
//     }
// }

// class GraduateStudent extends Student {
//     constructor(name, age, grade, thesisTitle) {
//         super(name, age, grade)
//         this.thesisTitle = thesisTitle;
//     }
//     defendThesis() {
//         console.log(`${this.name} is defending their thesis titled '${this.thesisTitle}'.`)
//     }
//     study(){
//         console.log(`${this.name} is studying hard for their final thesis titled '${this.thesisTitle}`)
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 4: クラスと継承を使った多層構造の実装
// 以下の要件に従って、複数のクラスを実装してください。

// 要件:
// Animalクラスを作成してください。
// コンストラクタはnameとspeciesを受け取り、プロパティとして設定します。
// describe()メソッドを追加し、"${name} is a ${species}."をconsole.logで出力します。
// MammalクラスをAnimalクラスから継承してください。
// MammalクラスにはhasFurというプロパティを追加し、コンストラクタで受け取ります。
// describe()メソッドをオーバーライドし、super.describe()を呼び出した後、
// "${name} has fur: ${hasFur}."を追加で出力します。
// DogクラスをMammalクラスから継承し、bark()メソッドを追加してください。
// bark()メソッドは"${name} barks: Woof!"をconsole.logで出力します。

// class Animal{
//     constructor(name,species){
//         this.name=name
//         this.species=species
//     }
//     describe(){
//         console.log(`${this.name} is a ${this.species}.`)
//     }
// }
// class Mammal extends Animal{
//     constructor(name,species,hasFur){
//         super(name,species)
//         this.hasFur=hasFur
//     }
//     describe(){
//         super.describe();
//         console.log(`${this.name} has fur: ${this.hasFur}.`)
//     }
// }
// class Dog extends Mammal{
//     constructor(name,species,hasFur){
//         super(name,species,hasFur);
//     }
//     bark(){
//         console.log(`${this.name} barks: Woof`)
//     }
// }

// const animal = new Animal("Generic Animal", "unknown species");
// animal.describe(); // "Generic Animal is a unknown species."

// const mammal = new Mammal("Elephant", "Elephas maximus", true);
// mammal.describe();
// // 出力:
// // "Elephant is a Elephas maximus."
// // "Elephant has fur: true."

// const dog = new Dog("Buddy", "Canis lupus familiaris", true);
// dog.describe();
// // 出力:
// // "Buddy is a Canis lupus familiaris."
// // "Buddy has fur: true."
// dog.bark(); // "Buddy barks: Woof!"
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 5: クラスと継承を使った図形の実装
// 以下の要件に従って、図形を表すクラスを実装してください。
// 要件:

// Shapeという親クラスを作成してください。
// Shapeクラスはnameというプロパティを持ち、コンストラクタで初期化します。
// getArea()というメソッドを持ちますが、このメソッドは親クラスでは具体的な実装を持たず、
// "Area calculation not implemented for this shape"というメッセージを出力してください。
// RectangleクラスをShapeクラスから継承して作成してください。

// コンストラクタでname、width、heightを受け取り、プロパティとして設定します。
// getArea()メソッドをオーバーライドし、長方形の面積（width * height）を返すようにしてください。
// CircleクラスをShapeクラスから継承して作成してください。

// コンストラクタでnameとradiusを受け取り、プロパティとして設定します。
// getArea()メソッドをオーバーライドし、円の面積（Math.PI * radius * radius）を返すようにしてください。
// class Shape {
//     constructor(name) {
//         this.name = name
//     }
//     getArea() {
//         console.log("Area calculation not implemented for this shape")
//     }
// }

// class Rectangle extends Shape {
//     constructor(name, width, height) {
//         super(name)
//         this.width = width
//         this.height = height
//     }
//     getArea() {
//         return this.width * this.height
//     }
// }

// class Circle extends Shape {
//     constructor(name, radius) {
//         super(name)
//         this.radius = radius
//     }
//     getArea() {
//         return Math.PI * this.radius * this.radius
//     }
// }
// // クラスの定義（Shape, Rectangle, Circle）
// // これらは、あなたが実装するものとします。

// // 動作確認コード
// const shape = new Shape("Generic Shape");
// shape.getArea(); // 出力: "Area calculation not implemented for this shape"

// const rectangle = new Rectangle("Rectangle", 10, 5);
// console.log(rectangle.getArea()); // 出力: 50

// const circle = new Circle("Circle", 7);
// console.log(circle.getArea()); // 出力: 153.93804002589985（Math.PI * 7 * 7）

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 要件:
// Bookというクラスを作成してください。

// プロパティとしてtitle、author、publishedYearを持ち、コンストラクタで初期化します。
// getSummary()メソッドを追加し、本の概要として"${title} by ${author}, published in ${publishedYear}"
// を出力してください。

// EBookクラスをBookクラスから継承して作成してください。
// Bookクラスのプロパティに加えてfileSize（ファイルサイズ）とformat（形式）というプロパティを追加し、
// コンストラクタで初期化します。
// getSummary()メソッドをオーバーライドし、super.getSummary()を呼び出した後、
// 追加情報として"File size: ${fileSize} MB, Format: ${format}"を出力してください。

// AudioBookクラスをBookクラスから継承して作成してください。
// Bookクラスのプロパティに加えてduration（再生時間）とnarrator（ナレーター）というプロパティを追加し、
// コンストラクタで初期化します。
// getSummary()メソッドをオーバーライドし、super.getSummary()を呼び出した後、
// 追加情報として"Duration: ${duration} hours, Narrated by ${narrator}"を出力してください。
// class Book {
//     constructor(title, author, publishedYear) {
//         this.title = title
//         this.author = author
//         this.publishedYear = publishedYear
//     }
//     getSummary() {
//         console.log(`${this.title} by ${this.author}, published in ${this.publishedYear}`)
//     }
// }
// class EBook extends Book {
//     constructor(title, author, publishedYear, fileSize, format) {
//         super(title, author, publishedYear)
//         this.fileSize = fileSize
//         this.format = format
//     }
//     getSummary() {
//         super.getSummary();
//         console.log(`File size: ${this.fileSize} MB, Format: ${this.format}`)
//     }
// }
// class AudioBook extends Book {
//     constructor(title, author, publishedYear, duration, narrator) {
//         super(title, author, publishedYear);
//         this.duration = duration
//         this.narrator = narrator;
//     }
//     getSummary(){
//         super.getSummary()
//         console.log(`Duration: ${this.duration} hours, Narrated by ${this.narrator}`)
//     }
// }
// // 動作確認コード

// // Bookクラスのインスタンスをテスト
// const book = new Book("1984", "George Orwell", 1949);
// book.getSummary(); // 出力: "1984 by George Orwell, published in 1949"

// // EBookクラスのインスタンスをテスト
// const eBook = new EBook("Digital Fortress", "Dan Brown", 1998, 1.5, "PDF");
// eBook.getSummary();
// // 出力:
// // "Digital Fortress by Dan Brown, published in 1998"
// // "File size: 1.5 MB, Format: PDF"

// // AudioBookクラスのインスタンスをテスト
// const audioBook = new AudioBook("The Hobbit", "J.R.R. Tolkien", 1937, 11, "Andy Serkis");
// audioBook.getSummary();
// 出力:
// "The Hobbit by J.R.R. Tolkien, published in 1937"
// "Duration: 11 hours, Narrated by Andy Serkis"

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 応用問題 7: 社員管理システムの実装
// 以下の要件に従って、社員管理システムを実装してください。

// 要件:
// Employeeという親クラスを作成してください。

// プロパティとしてname、position、salaryを持ち、コンストラクタで初期化します。
// getDetails()メソッドを追加し、
// "${name} works as a ${position} with a salary of ${salary}."を出力してください。

// ManagerクラスをEmployeeクラスから継承して作成してください。
// Employeeクラスのプロパティに加えて、department（部門）というプロパティを追加し、コンストラクタで初期化します。
// getDetails()メソッドをオーバーライドし、super.getDetails()
// "Manages the ${department} department."を追加で出力してください。

// DeveloperクラスをEmployeeクラスから継承して作成してください。
// Employeeクラスのプロパティに加えて、programmingLanguage（使用言語）というプロパティを追加し、
// コンストラクタで初期化します。
// getDetails()メソッドをオーバーライドし、super.getDetails()を呼び出した後、
// "Specializes in ${programmingLanguage}."を追加で出力してください。
// class Employee {
//     constructor(name, position, salary) {
//         this.name = name
//         this.position = position
//         this.salary = salary
//     }
//     getDetails() {
//         console.log(`${this.name} works as a ${this.position} with a salary of ${this.salary}.`)
//     }
// }
// class Manager extends Employee {
//     constructor(name, position, salary, department) {
//         super(name, position, salary)
//         this.department = department
//     }
//     getDetails() {
//         super.getDetails()
//         console.log(`Manages the ${this.department} department.`)
//     }
// }
// class Developer extends Employee {
//     constructor(name, position, salary, programmingLanguage) {
//         super(name, position, salary)
//         this.programmingLanguage = programmingLanguage
//     }
//     getDetails() {
//         super.getDetails()
//         console.log(`Specializes in ${this.programmingLanguage}.`)
//     }
// }
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 要件
// Employeeクラスを作成してください。

// Employeeクラスはname、position、salary、idのプロパティを持ち、コンストラクタで初期化します。
// getDetails()メソッドを追加し、"${name} works as a ${position} with a salary of ${salary}."という文字列を返します。

// 非同期処理で社員データを管理するためのEmployeeDatabaseクラスを作成してください。
// employeesという空の配列をプロパティとして持ちます。これはすべての社員オブジェクトを格納するための配列です。
// addEmployee(employee)メソッドを追加し、1秒の遅延後に新しい社員オブジェクトをemployees配列に追加します。
// getEmployeeById(id)メソッドを追加し、指定したidの社員オブジェクトを1秒の遅延後に返す非同期処理を実装してください。
// listAllEmployees()メソッドを追加し、すべての社員のgetDetails()メソッドの結果を表示します。

// DeveloperクラスをEmployeeクラスから継承して作成してください。
// Employeeクラスのプロパティに加えてprogrammingLanguage（使用言語）というプロパティを追加し、コンストラクタで初期化します。
// getDetails()メソッドをオーバーライドし、親クラスのgetDetails()メソッドを呼び出した後、
// "Specializes in ${programmingLanguage}."という文字列を返してください。

// 実際にEmployeeDatabaseクラスのインスタンスを作成し、
// いくつかのEmployeeやDeveloperオブジェクトを追加して非同期でデータが管理できているか確認してください。
class Employee {
    constructor(name, position, salary, id) {
        this.name = name
        this.position = position
        this.salary = salary
        this.id = id
    }
    getDetails() {
        console.log(`${this.name} works as a ${this.position} with a salary of ${this.salary}.`)
    }
}
// const emplay1 = new Employee("Jun","CEO",1000,1);
// emplay1.getDetails()
class EmployeeDatabase {
    constructor() {
        this.employees = []
    }
    async addEmployee(employee) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.employees.push(employee);
        console.log(`${employee.name} has been added.`);
    }
    async getEmployeeById(id) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const employee=this.employees.find(employee => employee.id === id)
        if(!employee){
            console.log(`NO employee have id is ${id}`)
            return null
        }else{
            return employee
        }
    }
    listAllEmployees() {
        this.employees.forEach(emp => {
            emp.getDetails()
        })
    }
}
class Developer extends Employee {
    constructor(name, position, salary, id, programmingLanguage) {
        super(name, position, salary, id)
        this.programmingLanguage = programmingLanguage
    }
    getDetails() {
        super.getDetails()
        console.log(`Specializes in ${this.programmingLanguage}.`)
    }
}

async function testEmployeeDatabase() {
    const employeeDatabase = new EmployeeDatabase();
    const employee1 = new Employee("John Doe", "Manager", 50000, 1);
    const developer1 = new Developer("Jane Smith", "Developer", 60000, 2, "javascript")
    console.log("developer details: ")
    developer1.getDetails()

    await employeeDatabase.addEmployee(employee1);
    await employeeDatabase.addEmployee(developer1)


    const retrievedEmployee = await employeeDatabase.getEmployeeById(3);
    console.log("Retrieved Employee:");
    retrievedEmployee.getDetails()

    console.log("\nAll Employees:");
    employeeDatabase.listAllEmployees();
}
testEmployeeDatabase();

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー