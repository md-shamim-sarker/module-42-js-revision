/* ৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */
const obj = {
    myName: 'Shamim',
    hobby: ['reading', 'writing'],
    relatives: {
        wife: 'Snigdha',
        sister: 'Sneha'
    }
};
const {myName} = obj;
console.log(myName);
const {wife} = obj.relatives;
console.log(wife);
const [, hobby] = obj.hobby;
console.log(hobby);
