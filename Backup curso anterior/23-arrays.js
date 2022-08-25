const arr = new Array();
console.log(typeof arr);
console.log(arr);
arr[0] = "Daniela";
arr[1] = 28;
console.log(arr);

const arr2 = new Array(true, "Daniela", 28, new Array(2, 4, 10));
console.log(arr2);
console.log(arr2[1]);
console.log(arr2[3][1]);
console.log(arr2[3][3]);
console.log(arr2.length);
console.log(arr2[3].length);
console.log(arr2[3][arr2[3].length-1]);

const arr3 = ["Dani", 28, [3, 6, 9], true];
console.log(arr3);
console.log(arr3[2]);
console.log(arr3[2][1]);

arr3[4] = "vlr 1";
console.log(arr3);
arr3[arr3.length] = "vlr2";
console.log(arr3);
arr3.push("push");
console.log(arr3);
arr3.push("k1", "k2", "k3");
console.log(arr3);

console.log(arr3[6]);

var n = 6;
console.log(arr3[n]);