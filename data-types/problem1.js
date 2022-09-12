/* ১. string কি জিনিস। স্ট্রিং কেমনে ডিক্লেয়ার করে। স্ট্রিং থেকে কিভাবে কোন একটা ক্যারেক্টার খুঁজে বের করে। চাইলে স্ট্রিং এর উপরে কি লুপ চালানো যায়। এছাড়াও length, includes, indexOf, toUpperCase, toLowerCase, জানতেই হবে। subString, concat জানলে ভালো। বোনাস হিসেবে জানতে পারো string কি mutable নাকি immutable  */
const myName = 'Shamim Sarker';
console.log(myName.length);
console.log(myName.includes('a'));
console.log(myName.indexOf('a'));
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
for(const i in myName) {
    console.log(myName[i]);
}
console.log(myName.substring(0, 6));
console.log(myName.concat(' Snigdha Sarker'));