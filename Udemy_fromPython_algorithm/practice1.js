//O(log(n)) O(log10) 

// function logn(numbers) {
//     if(numbers<1){
//         return console.log("finished");
//     }else{
//         console.log(numbers)
//         return logn(numbers/2)
//     }

// }
// logn(10)
//-------------------------------------------------------
// function On(numbers) {
//     for(let number of numbers){
//         console.log(number)
//     }
// }
// On([1,2,3,4,5])
//-------------------------------------------------------
// O(n*log(n))
// function OnLogn(numbers) {
//     for (let i = 0; i < numbers; i++) {
//         console.log(i)
//     }
//     if (numbers <= 1) {
//         return;
//     } else {
//         OnLogn(Math.floor(numbers / 2))
//     }
// }
// OnLogn(10)
//-------------------------------------------------------
// O(n*n)
// function OnO(numbers) {
//     for(let i of numbers){
//         for(j of numbers){
//             console.log(i,j)
//         }
//     }
// }
// OnO([1,2,3,4,5])
//-------------------------------------------------------

// function BubbleSort(numbers) {
//     let count = 0
//     for(let j = 0; j<numbers.length; j++){
//         console.log(j+1,"回目（外側）")
//         count++
//         for (let i = 0; i < numbers.length -j - 1; i++) {
//             if (numbers[i] > numbers[i + 1]) {
//                 [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
//             }
//             console.log(j+1,"回目（内側) ",i,"文字目から ",`${numbers.length -j - 1}`," 文字目まで調べた")
//             count++
//         }
//     }
//     console.log(`最終回数：${count}回`)
//     console.log(numbers)
// }
// BubbleSort([6, 4, 5, 3, 1, 2])
//-------------------------------------------------------
// function cocktailsort(numbers) {
//     let count = 1
//     let outsideCount = 1
//     let insideCount = 1
//     let end = numbers.length - 1
//     let start = 0
//     let swap = false;
//     // let derection = ture
//     for (let i = 0; i < numbers.length; i++) {
//         swap = false
//         console.log("from 外側 : ", outsideCount, "回目")
//         for (let j = 0; j < numbers.length - 1; j++) {
//             if (numbers[j] > numbers[j + 1]) {
//                 [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
//                 swap = true
//             }
//             console.log("from 内側 : ", insideCount, "回目")
//             insideCount++
//             count++
//         }
//         if (swap === false){
//             console.log(`最終回数：${count}回 swap is false`)
//             return console.log(numbers)

//         };
//         // derection = !derection
//         outsideCount++
//         count++
//     }
//     console.log(`最終回数：${count}回`)
//     console.log(numbers)
// }
// // console.log(cocktailsort([1, 5, 3, 2, 4]))
// cocktailsort([1, 5, 3, 2, 4])
//-------------------------------------------------------
// function bubbleSort(numbers) {
//     let swap=true;
//     let count = 0; // ループ回数のカウント
//     let start =0;
//     let end = numbers.length-1
//     while(swap){
//         for (let i = start; i < end; i++) { // 範囲を調整
//             count++;
//             if (numbers[i] > numbers[i + 1]) {
//                 [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
//                 swap = true; // 交換があった場合、フラグをtrueに
//             }
//         }
//         if (!swap) break;
//         swap = false;
//         end--

//         for (let j = end; j > start; j--) { // 範囲を調整
//             count++;
//             if (numbers[j] < numbers[j - 1]) {
//                 [numbers[j], numbers[j - 1]] = [numbers[j - 1], numbers[j]];
//                 swap = true; // 交換があった場合、フラグをtrueに
//             }
//         }
//         if (!swap) break;
//         swap = false;
//         start++
//     }
//     console.log(`最終回数：${count}回`);
//     console.log(numbers); // ソートされた配列を出力
// }

// bubbleSort([1, 5, 3, 2, 4]);

//-------------------------------------------------------
// const numbers = [11, 2, 5, 9, 10, 3];
// const sum = 12;
// function getPair(numbers, sum) {
//     let A = null
//     let B = null
//     let outPut = []
//     let count=0;

//     for (let j = 0; j < numbers.length - 1; j++) {
//         count++
//         for (let i = j + 1; i < numbers.length; i++) {
//             count++
//             // console.log(numbers[i])
//             let newSum = numbers[j] + numbers[i];
//             if (newSum === sum) {
//                 outPut.push([numbers[j], numbers[i]])
//             }
//         }
//     }
//     return {outPut,count}
// }
// console.log(getPair(numbers, sum))
//-------------------------------------------------------
// const numbers = [11, 2, 5, 9, 10, 3];
// const sum = 12;
// function getPair(numbers,sum) {
//     let output =[]
//     let seen = new Set();
//     let count = 0;
//     for(let number of numbers){
//         const pairNumber = sum - number;
//         if(seen.has(pairNumber)){
//             output.push([pairNumber,number])
//         }
//         seen.add(number)
//         count++
//     }
//     return {output,count}
// }
// console.log(getPair(numbers,sum))
//-------------------------------------------------------
// const numbers = [11, 2, 5, 9, 10, 3];
// function getPair(numbers) {
//     const sum = numbers.reduce((acc, number) => acc + number, 0);
//     if (sum % 2 !== 0) return null;

//     const harfSum = sum/2
//     let cash = new Set();
//     const output = []
//     for(let number of numbers){
//         let pairNumber = harfSum - number
//         if(cash.has(pairNumber)){
//             output.push([pairNumber,number])
//         }else{
//             cash.add(number);
//         }
//     }
//     return output
// }

// console.log(getPair(numbers))
//-------------------------------------------------------
// function memoize(func) {
//     const cash = new Map();

//     return function (...args) {
//         const key = JSON.stringify(args)
//         if(cash.has(key)){
//             console.log(`Cache hit for arguments: ${args}`);
//             return cash.get(key);
//         }
//         console.log(`Cache miss for arguments: ${args}`);
//         const result = func(...args)
//         cash.set(key,result)
//         return result
//     }
// }
// function heavyCalculation(num) {
//     console.log(`Performing calculation for: ${num}`);
//     return num * 2; // 簡単な計算
// }
// const cachedCalculation = memoize(heavyCalculation) ;

// console.log(cachedCalculation(5)); 
// console.log(cachedCalculation(5)); 
//-------------------------------------------------------
// function isPrime(number) {
//     if (number <= 1) return false;
//     for (let i = 2; i < number; i++){
//         if(number%i===0){
//             return false
//         }else{
//             return true;
//         }
//     }

// }
// // console.log(isPrime([1,2,3,4,5,6,7,8,9,10]))
// console.log(isPrime(11))
//-------------------------------------------------------
// function isPrime(numbers) {
//     let output = {}
//     for (number of numbers) {

//         if (number <= 1) output[number]=false;

//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) {
//                 isPrime=false
//                 break;
//             } 
//         }
//         output[number]=isPrime;
//     }
//     return output
// }
// console.log(isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(isPrime(11))
//-------------------------------------------------------
//SelectSort 計算量O(n**2)
// const numbers = [1, 5, 2, 3, 6, 4]

// function SlectSort(numbers) {
//     const numsLength = numbers.length
//     for (let i = 0; i < numsLength - 1; i++) {
//         let min_idx = i
//         // console.log(numbers[i])
//         for (let j = i+1; j < numsLength; j++) {
//             if (numbers[min_idx] > numbers[j]) {
//                 min_idx = j
//             }
//         }
//         [numbers[i], numbers[min_idx]] = [numbers[min_idx], numbers[i]];
//     }
//     return numbers
// }
// console.log(SlectSort(numbers))
//-------------------------------------------------------
//gnome Sort
// const numbers = [5, 4, 2, 3, 1]
// function gnomeSort(numbers) {
//     let index = 0
//     let numLength = numbers.length;
//     while (index < numLength) {
//         if (index === 0) {
//             index++
//         } else {
//             if (numbers[index] < numbers[index - 1]) {
//                 [numbers[index], numbers[index - 1]] = [numbers[index - 1], numbers[index]]
//                 index--
//             }else{
//                 index++
//             }
//         }
//     }
//     return numbers
// }
// console.log(gnomeSort(numbers));
//number=[1,2,3,4,5,0]
//-------------------------------------------------------
// const numbers = [5, 4, 2, 3, 1]
// function insertSort(numbers) {

//     const numLength = numbers.length;
//     for (let i = 1; i < numLength; i++) {
//         let forcusNunber = numbers[i]
//         let finalIdx = i - 1
//         while (finalIdx >= 0 && numbers[finalIdx] > forcusNunber) {
//             numbers[finalIdx + 1] = numbers[finalIdx];
//             finalIdx--
//         }
//         numbers[finalIdx + 1] = forcusNunber
//     }
//     return numbers
// }
// console.log(insertSort(numbers));
//-------------------------------------------------------
// Counting Sort

// const numbers = [4, 3, 6, 2, 3, 4, 7];
// function countingSort(numbers) {
//     const numLength = numbers.length
//     const maxNum = Math.max(...numbers)
//     const counts = Array(maxNum + 1).fill(0);
//     const result = Array(numLength).fill(0);

//     // 出現回数をカウント
//     for (let num of numbers) {
//         counts[num]++
//     }

//     // 累積カウントを計算
//     for (let i = 1; i < counts.length; i++) {
//         counts[i] += counts[i - 1]
//     }

//     for (let i = numLength - 1; i >= 0; i--) {
//         const index = numbers[i];
//         // console.log(index)
//         result[counts[index] - 1] = numbers[i]
//         // console.log(counts[index]-1)
//         counts[index]--
//     }
//     // return result
// }
// console.log(countingSort(numbers))
//-------------------------------------------------------

// Radix Sort
// const numbers = [20, 10, 320, 200, 4, 555, 1234];
// function countingSort(numbers, place) {
//     const numLength = numbers.length
//     const counts = Array(10).fill(0);
//     const result = Array(numLength).fill(0);

//     // 出現回数をカウント
//     for (let num of numbers) {
//         const index = Math.floor(num / place) % 10
//         counts[index]++
//     }

//     // 累積カウントを計算
//     for (let i = 1; i < counts.length; i++) {
//         counts[i] += counts[i - 1]
//     }

//     for (let i = numLength - 1; i >= 0; i--) {
//         const index = Math.floor(numbers[i] / place) % 10;
//         // console.log(index)
//         result[counts[index] - 1] = numbers[i]
//         // console.log(counts[index]-1)
//         counts[index]--
//     }
//     return result
// }
// // const numbers = [20, 10, 320, 200, 4, 555];
// function RadixSort(numbers) {
//     const maxNum = Math.max(...numbers);
//     let place = 1
//     while (place < maxNum) {
//         numbers = countingSort(numbers, place)
//         place *= 10
//     }
//     return numbers
// }
// console.log(RadixSort(numbers))
//-------------------------------------------------------
//Quiq Sort 
// const num = [1, 8, 3, 9, 4, 5, 7]
// function partition(num, low, high) {
//     let pivot = num[high]
//     let i = low - 1
//     for (let j = low; j < high; j++) {
//         // console.log(num[j])
//         if (num[j] < pivot) {
//             i++
//             [num[i], num[j]] = [num[j], num[i]];
//         }
//     }
//     [num[high], num[i + 1]] = [num[i + 1], num[high]];
//     return i + 1
// }
// function quickSort(num, low = 0, high = num.length - 1) {
//     if (low < high) {
//         const partitionIdx = partition(num, low, high)
//         quickSort(num, low, partitionIdx - 1);
//         quickSort(num, partitionIdx + 1, high);
//     }
//     return num
// }
// console.log(quickSort(num));
//-------------------------------------------------------
//mergeSort
// const nums = [5, 4, 1, 8, 7, 3, 2, 9]
// function merge(left, right) {
//     const result = []
//     let i = 0;
//     let j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]){
//             result.push(left[i]);
//             i++
//         }else{
//             result.push(right[j]);
//             j++
//         }
//     }
//     return result.concat(left.slice(i).concat(right.slice(j)));
// }
// function mergeSort(nums) {
//     if (nums.length <= 1) {
//         return nums
//     }
//     const mid = Math.floor(nums.length / 2);
//     const left = nums.slice(0, mid);
//     const right = nums.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }
// console.log(mergeSort(nums));
//-------------------------------------------------------
//BinarySerch
// const nums = [1, 2, 3, 4, 5, 6, 7]
// function BinarySerch(numbs, value) {
//     let min = 0;
//     let max = nums.length - 1;
//     while (min <= max) {
//         let mid = Math.floor((max + min) / 2);
//         if (nums[mid] === value) {
//             return mid
//         } else if (value < nums[mid]) {
//             max = mid - 1
//         } else {
//             min = mid + 1
//         }
//     }
//     return null
// }
// console.log(BinarySerch(nums, 6))
//-------------------------------------------------------
//BinarySerch 再帰的に解決
// const nums = [1, 2, 3, 4, 5, 6, 7];
// function binarySearchRecursive(nums, value, min = 0, max = nums.length - 1) {
//     if (min > max) return null

//     let mid = Math.floor((min + max) / 2);
//     let midNum = nums[mid]
//     if (midNum === value) return mid
//     if (value > midNum) {
//         min = mid + 1
//         return binarySearchRecursive(nums, value, min, max);
//     } else {
//         max = mid - 1
//         return binarySearchRecursive(nums, value, min, max);
//     }
// }
// console.log(binarySearchRecursive(nums, 6)); // 出力: 5
// console.log(binarySearchRecursive(nums, 10)); // 出力: null
//-------------------------------------------------------
//Hashtable
// class Hashtable {
//     constructor(size = 10) {
//         this.size = size;
//         this.table = Array.from({ length: size }, () => []);
//     }
//     hash(key) {
//         let hash = 0;
//         let prime = 31;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash * prime + key.charCodeAt(i)) % this.size;
//         }
//         return hash
//     }
//     set(key, value) {
//         const index = this.hash(key);
//         for (let pair of this.table[index]) {
//             if (pair[0] === key) {
//                 pair[1] = value;
//                 return;
//             }
//         }
//         this.table[index].push([key, value])
//     }
//     get(key) {
//         const index = this.hash(key);
//         for (let pair of this.table[index]) {
//             if (pair[0] === key) {
//                 return pair[1]
//             }
//         }
//         return null
//     }
//     getAll() {
//         for (let idx = 0; idx < this.size; idx++) {
//             console.log(`${idx} : ${this.table[idx]}`)
//         }
//     }
//     delete(key) {
//         const index = this.hash(key);
//         const pairIndex = this.table[index].findIndex(pair => pair[0] === key);
//         if (pairIndex !== -1) {
//             this.table[index].splice(pairIndex, 1);
//             return true;
//         }
//         return false
//     }
// }
// const hashTable = new Hashtable();

// hashTable.set("name", "Alice");
// hashTable.set("age", 25);
// hashTable.getAll()

// console.log(hashTable.get("name")); // "Alice"
// console.log(hashTable.get("age")); // 25
// console.log(hashTable.get("gender")); // null

// console.log(hashTable.delete("age")); // true
// console.log(hashTable.get("age")); // null
// console.log(hashTable.delete("age")); // false

//-------------------------------------------------------
// class Stack {
//     constructor() {
//         this.stack = [];
//     }
//     push(data){
//         this.stack.push(data);
//     }
//     pop(){
//         if(this.stack.length>0){
//             return this.stack.pop()
//         }
//         return console.log("no data")
//     }
//     getStack(){
//         return this.stack
//     }
// }
// const newStack = new Stack()
// console.log(newStack.getStack());
// newStack.push(10)
// console.log(newStack.getStack());
// newStack.push(2)
// console.log(newStack.getStack());
// console.log(newStack.pop())
// console.log(newStack.getStack());
//-------------------------------------------------------
// const Input = { 'key1': 'value1', 'key2': [1, 2, 3], 'key3': (1, 2, 3) } 
// const Input2 = { 'key1': ['value1'], 'key2': [1, 2, 3], 'key3': (1, 2, 3) } 
// function chackFormat(input) {
//     const JsonStr = JSON.stringify(input)
//     console.log
//     // for(char in JsonStr){
//     //     console.log(char)
//     // }
// }
// chackFormat(Input)
//-------------------------------------------------------
//Queue
// class Queue {
//     constructor() {
//         this.queue = []
//     }
//     enqueue(data) {
//         // console.log(` enqueue ${this.enqueue.push(data)} queue is ${this.getQueue()}`)
//         this.queue.push(data)
//         return console.log(`from enqueue : queue is ${this.getQueue()}`)
//     }
//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null
//         }
//         return console.log(`dequeue : ${this.queue.shift()}`)
//     }
//     isEmpty() {
//         return this.queue.length === 0
//     }
//     getQueue() {
//         return this.queue;
//     }
//     reverse() {
//         const reverseQueue = [...this.queue].reverse()
//         return console.log(reverseQueue)
//     }
// }
// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// console.log("original", queue.getQueue())
// queue.reverse()
//-------------------------------------------------------
// class Queue {
//     constructor() {
//         this.queue = []
//     }
//     enqueue(data) {
//         // console.log(` enqueue ${this.enqueue.push(data)} queue is ${this.getQueue()}`)
//         this.queue.push(data)
//         return console.log(`from enqueue : queue is ${this.getQueue()}`)
//     }
//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null
//         }
//         return console.log(`dequeue : ${this.queue.shift()}`)
//     }
//     isEmpty() {
//         return this.queue.length === 0
//     }
//     getQueue() {
//         return this.queue;
//     }
//     reverse() {
//         let reverseQueue = []
//         let newQueue = [...this.queue]
//         while (newQueue.length > 0) {
//             reverseQueue.push(newQueue.pop())
//         }
//         return console.log(reverseQueue)
//     }
// }
// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// console.log("original", queue.getQueue())
// queue.reverse()
//-------------------------------------------------------
//Binary tree
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// function insert(node, value) {
//     if (node === null) {
//         return new Node(value);
//     }

//     if (node.value >value) {
//         node.left=insert(node.left,value);
//     }else if(node.value < value){
//         node.right= insert(node.right,value);
//     }
//     return node
// }

// let root = null; // 初期状態では root は null

// // 修正：`insert` の結果を root に代入
// root = insert(root, 3); // root を更新
// root = insert(root, 6); // root に新しいノードが挿入されたツリーを代入
// root = insert(root, 5); // root を更新

// // ルートノードを表示
// console.log("Root Node:", root);

// // ルートの右の子ノードを表示
// console.log("Root's right child:", root.right);

// // ルートの右の子の左の子ノードを表示
// console.log("Root's right child's left child:", root.right.left);

// console.log(insert(root,5));
//-------------------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value; // ノードの値
//         this.left = null;   // 左の子ノード
//         this.right = null;  // 右の子ノード
//     }
// }
// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }
//     insert(value) {
//         this.root = this.insertNode(this.root, value)
//     }
//     insertNode(node, value) {
//         if (node === null) {
//             return new Node(value);
//         }
//         if (value < node.value) {
//             node.left = this.insertNode(node.left, value); // 左に挿入
//         } else if (value > node.value) {
//             node.right = this.insertNode(node.right, value); // 右に挿入
//         }
//         return node
//     }
//     printTree(node = this.root, level = 0) {
//         if (node === null) return;
//         this.printTree(node.right, level + 1); // 右の子を表示
//         console.log("  ".repeat(level) + node.value); // 現在のノードを表示
//         this.printTree(node.left, level + 1); // 左の子を表示
//     }
//     search(value, node = this.root) {
//         if (node === null) {
//             return false;
//         }
//         if (node.value === value) return true;
//         if (node.value > value) {
//             return this.search(value,node.left);
//         } else if (node.value < value) {
//             return this.search(value,node.right);
//         }
//     }
// }
// // 3. ツリーを作成して値を挿入
// const tree = new BinaryTree();
// tree.insert(10); // ルートに10を挿入
// tree.insert(5);  // 左の子に5を挿入
// tree.insert(15); // 右の子に15を挿入
// tree.insert(3);  // さらに左に3を挿入
// tree.insert(8);  // さらに左に8を挿入
// tree.insert(12); // さらに右に12を挿入
// tree.insert(20); // さらに右に20を挿入

// // 4. ツリーの状態を出力
// console.log("Tree Root:", tree.root);
// // tree.printTree(); // ツリー全体を表示
// console.log(tree.search(5))
//-------------------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value; // ノードの値
//         this.left = null;   // 左の子ノード
//         this.right = null;  // 右の子ノード
//     }
// }
// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }
//     insert(value) {
//         this.root = this.insertNode(this.root, value)
//     }
//     insertNode(node, value) {
//         if (node === null) {
//             return new Node(value);
//         }
//         if (value < node.value) {
//             node.left = this.insertNode(node.left, value); // 左に挿入
//         } else if (value > node.value) {
//             node.right = this.insertNode(node.right, value); // 右に挿入
//         }
//         return node
//     }
//     getInOrder(node = this.root, result = []) {
//         if (node === null) {
//             return result
//         }
//         this.getInOrder(node.left, result)
//         result.push(node.value)
//         this.getInOrder(node.right, result)
//         return result
//     }
//     printTree(node = this.root, level = 0) {
//         if (node === null) return;
//         this.printTree(node.right, level + 1); // 右の子を表示
//         console.log("  ".repeat(level) + node.value); // 現在のノードを表示
//         this.printTree(node.left, level + 1); // 左の子を表示
//     }
//     search(value, node = this.root) {
//         if (node === null) {
//             return false;
//         }
//         if (node.value === value) return node;
//         if (node.value > value) {
//             return this.search(value, node.left);
//         } else if (node.value < value) {
//             return this.search(value, node.right);
//         }
//     }
//     remove(value) {
//         this.root = this._removeNode(this.root, value)
//     }
//     _removeNode(node, value) {
//         if (node === null) {
//             return null
//         }
//         if (node.value > value) {
//             node.left = this._removeNode(node.left, value)
//         } else if (node.value < value) {
//             node.right = this._removeNode(node.right, value)
//         } else if (node.value === value) {
//             if (node.left === null && node.right === null) {
//                 return null
//             } else if (node.left === null) {
//                 return node.right
//             } else if (node.right === null) {
//                 return node.left
//             } else {
//                 const temp = this._minValue(node.right);
//                 node.value = temp.value
//                 node.right = this._removeNode(node.right, temp.value)
//             }
//         }
//         return node
//     }
//     _minValue(node) {
//         let current = node;
//         while (current.left !== null) {
//             current = current.left
//         }
//         return current
//     }
// }
// const tree = new BinaryTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(20);

// // // 削除前のツリー
// // console.log("Before Removal:");
// // tree.printTree();

// // // ノードを削除
// // tree.remove(15); // ノード15を削除
// // tree.remove(5);  // ノード5を削除
// // tree.remove(25); // 存在しないノード25を削除（何もしない）

// // // 削除後のツリー
// // console.log("\nAfter Removal:");
// // tree.printTree();
// console.log(tree.getInOrder())

//-------------------------------------------------------
// class Heap {
//     constructor() {
//         this.heap = [-Infinity]
//         this.currentSize = 0
//     }
//     parentIndex(index) {
//         return Math.floor(index / 2)
//     }
//     leftChildIndex(index) {
//         return index * 2
//     }
//     rightChildIndex(index) {
//         return (index * 2) + 1
//     }
//     insert(value) {
//         this.heap.push(value);
//         this.currentSize++
//         this.heapifyUp(this.currentSize)
//     }
//     heapifyUp(index) {
//         while (this.parentIndex(index) > 0) {
//             let parentIdx = this.parentIndex(index);
//             if (this.heap[parentIdx] > this.heap[index]) {
//                 this.swap(parentIdx, index)
//             }
//             index = parentIdx;
//         }
//     }
//     swap(parentIdx, childIdx) {
//         [this.heap[parentIdx], this.heap[childIdx]] = [this.heap[childIdx], this.heap[parentIdx]]
//     }
//     pop() {
//         if (this.currentSize < 1) {
//             return null;
//         }
//         let root = this.heap[1]
//         let lastElement = this.heap.pop();
//         this.currentSize--
//         if (this.currentSize > 0) {
//             this.heap[1] = lastElement;
//             this.heapifyDown(1)
//         }
//         return root
//     }
//     heapifyDown(index) {
//         while (this.leftChildIndex(index) <= this.currentSize) {
//             const minChildIdx = this.minChildIndex(index)
//             if (this.heap[index] > this.heap[minChildIdx]) {
//                 this.swap(index, minChildIdx)
//             }else{
//                 break;
//             }
//             index = minChildIdx;
//         }
//     }
//     minChildIndex(index) {
//         const left = this.leftChildIndex(index);
//         const right = this.rightChildIndex(index);
//         if (right > this.currentSize) {
//             return left
//         }
//         return this.heap[left] < this.heap[right] ? left : right
//     }
// }
// const minHeap = new Heap();
// minHeap.insert(2)
// minHeap.insert(4)
// minHeap.insert(1)
// minHeap.insert(3)
// minHeap.insert(7)
// console.log(minHeap.heap)
// minHeap.pop()
// console.log(minHeap.heap)
//-------------------------------------------------------
const words = ["A", "B", "C", "A", "B", "A"]
function count_top_n(arr, topNum) {
    const result = {}
    for (let word of arr) {
        result[word] = (result[word] || 0) + 1
    }
    const sorted = Object.entries(result).sort((a,b)=>b[1]-a[1])
    return sorted.slice(0,topNum)

}
console.log(count_top_n(words, 3))
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------