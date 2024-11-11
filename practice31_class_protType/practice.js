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

class Animal{
    constructor(name,species){
        this.name=name
        this.species=species
    }
    describe(){
        console.log(`${this.name} is a ${this.species}.`)
    }
}
class Mammal extends Animal{
    constructor(name,species,hasFur){
        super(name,species)
        this.hasFur=hasFur
    }
    describe(){
        super.describe();
        console.log(`${this.name} has fur: ${this.hasFur}.`)
    }
}
class Dog extends Mammal{
    constructor(name,species,hasFur){
        super(name,species,hasFur);
    }
    bark(){
        console.log(`${this.name} barks: Woof`)
    }
}

const animal = new Animal("Generic Animal", "unknown species");
animal.describe(); // "Generic Animal is a unknown species."

const mammal = new Mammal("Elephant", "Elephas maximus", true);
mammal.describe();
// 出力:
// "Elephant is a Elephas maximus."
// "Elephant has fur: true."

const dog = new Dog("Buddy", "Canis lupus familiaris", true);
dog.describe();
// 出力:
// "Buddy is a Canis lupus familiaris."
// "Buddy has fur: true."
dog.bark(); // "Buddy barks: Woof!"
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー