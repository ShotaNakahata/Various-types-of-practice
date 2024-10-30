// あるコミュニティのメンバーリストがあります。各メンバーには名前、年齢、そして会員ステータス（activeまたはinactive）
// が含まれています。メンバーリストを年齢層（10代、20代、30代以上）に分け、activeなメンバーのみを各年齢層ごとにグループ分けして出力してください。
// 要件
// groupByAge関数を作成します。
// 関数の引数として、メンバーの配列を受け取り、次のように年齢層ごとのグループに分けたオブジェクトを返してください。
// "teens"（10代）：10～19歳のactiveなメンバー
// "twenties"（20代）：20～29歳のactiveなメンバー
// "thirtiesAndAbove"（30歳以上）：30歳以上のactiveなメンバー

// output:
// {
//     teens: ["Alice", "Eve"],
//     twenties: ["Bob", "Frank"],
//     thirtiesAndAbove: ["David"]
// }


const members = [
    { name: "Alice", age: 17, status: "active" },
    { name: "Bob", age: 22, status: "active" },
    { name: "Charlie", age: 29, status: "inactive" },
    { name: "David", age: 34, status: "active" },
    { name: "Eve", age: 15, status: "active" },
    { name: "Frank", age: 27, status: "active" }
];

function groupByAge(members){
    let teens = []
    let twenties= []
    let thirtiesAndAbove = []
    members.map((member)=>{
        if(member.status=="active"){
            if (10 <= member.age && member.age < 20) {
                teens.push(member);
            } else if (20 <= member.age && member.age < 30) {
                twenties.push(member);
            } else if (30 <= member.age) { 
                thirtiesAndAbove.push(member);
            }
        }
    });
    output = {teens:teens,twenties:twenties,thirtiesAndAbove:thirtiesAndAbove}
    console.log(output)
}

groupByAge(members);