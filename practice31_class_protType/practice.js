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

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}
class Student extends Person{
    constructor(name,grade,age){
        super(name,age);
        this.grade=grade
    }
    study(){
        console.log(`${this.name} is studying for a ${this.grade} grade.`)
    }
}
const student = new Student("Alice",3,20)
student.study();
student.introduce();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー