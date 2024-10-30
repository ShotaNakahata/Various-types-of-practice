const members = [
    { name: "Alice", age: 17, status: "active" },
    { name: "Bob", age: 22, status: "active" },
    { name: "Charlie", age: 29, status: "inactive" },
    { name: "David", age: 34, status: "active" },
    { name: "Eve", age: 15, status: "active" },
    { name: "Frank", age: 27, status: "active" }
];

function groupByAge(members) {
    const output=members.reduce((output,member)=>{
        if (member.status === "active") {
            if (10 <= member.age && member.age < 20) {
                output.teens.push(member.name);
            } else if (20 <= member.age && member.age < 30) {
                output.twenties.push(member.name);
            } else if (30 <= member.age) {
                output.thirtiesAndAbove.push(member.name);
            }} 
        return output;
    },{teens:[],twenties:[],thirtiesAndAbove:[]})
    console.log(output)
}
groupByAge(members)

