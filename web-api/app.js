/* 
১. লোকাল স্টোরেজ, সেশন স্টোরেজ কোনটা কখন ইউজ করবে। কিভাবে ইউজ করবে
*/
const obj = {
    myName: 'Shamim',
    age: 30
};
const objStr = JSON.stringify(obj);
// localStorage.setItem('user', objStr);
// sessionStorage.setItem('user', objStr);

/*
২. location API কিভাবে ইউজ করবে ব্রাউজারে
*/
console.log(location.host);

/*
৩. history API কিভাবে ইউজ করে
*/
// history.length;
// history.back();
// history.forward();
// history.go(-3)

/*
৪. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
*/
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => display(json))
    .catch(error => console.log(error));

function display(data) {
    console.log(data);
}