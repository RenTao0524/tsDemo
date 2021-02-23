/**
 * 基础类型
 */

// 1.布尔值
const isDone:boolean = false
console.log('isDone:', isDone)

// 2.数字
const num: number = 33
console.log('num:', num)

// 3.字符串
const str: string = 'bob'
console.log('str:', str)

/**
 * 4.数组
 * 两种方式定义数组
 */
const arr1: number[] = [1, 2, 3]
const arr2: Array<number> = [4, 5, 6]
console.log('arr1、arr2:', arr1, arr2)

/**
 * 5.元组
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */
let arr3: [string, number];
arr3 = ['zhangsan', 23]
console.log('arr3:', arr3)
console.log(arr3[0].substr(1)); // OK
// console.log(arr3[1].substr(1)); // Error, 'number' does not have 'substr'
// arr3[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// console.log(arr3[5].toString()); // OK, 'string' 和 'number' 都有 toString
// arr3[6] = true; // Error, 布尔不是(string | number)类型

// 6.枚举
enum Color {
  red = 1,
  green = 'test green',
  blue = 'test blue'
}

let c: Color = Color.blue
console.log('enum c:', c)

let colorName: string = Color[1]
console.log('colorName:', colorName)

// 7. Any
let notSure: any = 4
notSure = 'maybe a string instead'
console.log('notSure:', notSure)