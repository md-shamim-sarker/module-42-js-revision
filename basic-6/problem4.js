/* ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। এছাড়া কখন for of আর কখন for in ইউজ করবে সেটা তুমি জানো। */
const arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// let i = 0;
// while(i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// for(const i in arr) {
//     console.log(arr[i]);
// }

for(const iterator of arr) {
    console.log(iterator);
}