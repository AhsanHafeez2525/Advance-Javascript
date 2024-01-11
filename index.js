//   Object

// 1)

// const user = {};

// const newUser = new Object();

// console.warn(user);

// console.warn(newUser);

// 2)  function in Object and Nested object and write word with space and key

// let key = 'address';

// const user = {
// 	name: 'John',
// 	age: 27,
// 	getData: function () {
// 		return 'satti is best';
// 	},
// 	newUser: {
// 		secondName: 'cena',
// 		isDeveloper: 'Software',
// 	},
// 	['pin code']: '23456',
// 	[key]: 'ghori town',
// };
// console.warn(user);
// console.warn(user['pin code']);
// console.warn(user.name);
// console.warn(user.age);
// console.warn(user.getData());
// console.warn(user.newUser);
// console.warn(user.newUser.isDeveloper);

// 3)  delete object

// const user = {
// 	name: 'John',
// 	age: 27,
// 	getData: function () {
// 		return 'satti is best';
// 	},
// 	newUser: {
// 		secondName: 'cena',
// 		isDeveloper: 'Software',
// 	},
// };

// delete user.newUser;
// delete user.age;

// console.warn(user);

// 4) short hand properties and for in loop

// let phone = 1212121;

// let email = 'abctest@gmail.com';

// const user = {
// 	name: 'John',
// 	age: 27,
// 	getData: function () {
// 		return 'satti is best';
// 	},
// 	newUser: {
// 		secondName: 'cena',
// 		isDeveloper: 'Software',
// 	},
// 	['pin code']: '23456',
// 	phone,
// 	email,
// };

// for (item in user) {
// 	console.warn(`${item} : ${user[item]}`);
// }
// console.warn(user);

// 5) sum of values

// const emp = {
// 	ahsan: 100,
// 	sayyam: 200,
// 	bilal: 300,
// };

// let salary = 0;
// for (item in emp) {
// 	salary += emp[item];
// }
// console.warn(salary);

// Generator functions

// 1)

// function* simpleGenerator() {
// 	console.log('function call');

// 	let x = 100;

// 	yield x;

// 	yield 30;

// 	let y = 'thirdstep';

// 	yield y;
// }

// let sG = simpleGenerator();

// console.warn(sG.next().value);
// console.warn(sG.next());
// console.warn(sG.next());
// console.warn(sG.next());

// 2)

// function* simpleGenerator() {
// 	let i = 100;
// 	while (true) {
// 		i++;
// 		yield i;
// 	}
// }

// let sG = simpleGenerator();

// function getNewId() {
// 	document.getElementById('newId').innerText = sG.next().value;
// }

// Prototype

// let users = {
// 	getFullName: function () {
// 		return this.name + ' ' + this.lastName;
// 	},
// 	getAge: function () {
// 		let age = new Date().getFullYear() - this.birth;
// 		return age;
// 	},
// };

// let student = {
// 	name: 'ahsan',
// 	lastName: 'satti',
// 	birth: 2000,
// 	getAge: users.getAge,
// };

// let teacher = {
// 	name: 'sayam',
// 	lastName: 'ejaz',
// 	birth: 1980,
// 	getAge: users.getAge,
// };

// // teacher.__proto__ = users;
// // student.__proto__ = users;
// // console.warn(student.getFullName());
// console.warn(student.getAge());
// console.warn(teacher.getAge());

// let person = {
// 	name: 'fatima',
// 	lastName: 'Noor',
// 	age: 14,
// };

// console.warn(person.lastName);
// console.warn(person['age']);

// lexical scope and closuew

// 1)

// let data = 'ahsan';

// function test() {
// 	console.warn(data);
// }

// test();

// // 2)

// function test() {
// 	let a = 10;
// }
// console.warn(a);

// test();

// 3)

// function test() {
// 	let a = 20;

// 	function inner() {
// 		console.warn(a);
// 	}
// 	inner();
// }

// test();

// 4)

// function test() {
// 	let a = 20;

// 	return function inner() {
// 		return a;
// 	};
// }

// let inner = test();
// console.warn(inner( ));

// 5)

// function outer() {
// 	return function test() {
// 		let a = 20;

// 		return function inner() {
// 			return a;
// 		};
// 	};
// }

// let test = outer();
// let inner = test();
// console.warn(inner());

// 6)

// function outer() {
// 	let outValue = 100;
// 	return function test() {
// 		let a = 20;

// 		return function inner() {
// 			return a * outValue;
// 		};
// 	};
// }

// let test = outer();
// let inner = test();
// console.warn(inner());
// console.dir(inner());

// 7)

// function test() {
// 	let a = 300;
// 	let fun = function inner() {
// 		return a * a;
// 	};

// 	a = 20;
// 	return fun;
// }
// let inner = test();
// console.log(inner());

// HOC

// 1) map ()

// let data = [2, 3, 4, 5, 6];

// let result = data.map(item => {
// 	return 2 * item;
// });
// console.warn(result);

// 2) change numeric value

// let data = 10;

// Number.prototype.customFun = function () {
// 	return 10;
// };
// let result = data.customFun(x => x * 10);
// console.warn(result);

// Deep Copy and Shallow Copy

// Object

// 1) pass by reference

// let obj = {
// 	name: 'peter',
// };

// let user = obj;

// user.name = 'bruce';

// console.warn(obj);

// // 2) pass by value

// let x = 'ahsan';

// let y = x;

// y = 'satti';

// console.warn(x);

// 3) Shallow copy

// let obj = {
// 	name: 'peter',

// 	address: {
// 		city: 'islamabad',
// 		state: 'rawalpindi',
// 	},
// };

// let user = { ...obj };

// user.address.city = 'lahore';

// console.warn('Object is ==>', obj);

// 4) Deep copy

// let obj = {
// 	name: 'peter',

// 	address: {
// 		city: 'islamabad',
// 		state: 'rawalpindi',
// 	},
// 	getData: function () {
// 		return 'all data is here';
// 	},
// };

// let user = JSON.parse(JSON.stringify(obj));

// user.address.city = 'lahore';

// console.warn('Object is ==>', obj);
// console.warn('User is ==>', user);

// 5) Deep copy problem resolve by loddash

// let obj = {
// 	name: 'peter',

// 	address: {
// 		city: 'islamabad',
// 		state: 'rawalpindi',
// 	},
// 	getData: function () {
// 		return 'all data is here';
// 	},
// };

// let user = _.cloneDeep(obj);

// user.address.city = 'lahore';

// console.warn('Object is ==>', obj);
// console.warn('User is ==>', user);

// const myName = ['ahsan', 'sayyam', 'mohsin', 'bilal'];

// const myAhsan = myName.push('noman');
// myName.push('noman');
// myName.pop();
// myName.shift();
// myName.unshift(1, 2, 3);

// console.log(myName);

// Nullish Coalescing Operator

// let users = {
// 	student: {
// 		// name: 'ahsan',
// 		name: '',
// 		age: 25,
// 	},
// };
// // console.warn(users);
// // console.warn(users.student.name);

// console.warn(users.student.name ?? 'unknown');
// console.warn(users.student.age ?? 26);

// Bigint

// let x = 100000089776557745484578n;
// let z = BigInt(1000000897765577454845780);

// // let y = 100000000565674883873874;

// // console.warn(x * y);

// console.warn(typeof x);
// console.warn(typeof z);

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ['ahsan', 'satti', 'doga'];
let myObj = {
	name: 'ali',
	age: 22,
};

const myFunction = function () {
	console.log('Hello world');
};

console.log(typeof anotherId);
