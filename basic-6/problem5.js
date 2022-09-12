/* ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কখন করে না। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। কিভাবে কল করে। ফাংশন এর রিটার্ন কোন ভেরিয়েবলে রেখে সেই ভেরিয়েবল নিয়ে কিভাবে কাজ করে। */

function myFunction1() {
    console.log('Sneha Mony');
}
function myFunction2() {
    const myName = 'Snigdha Sarker';
    return myName;
}
function myFunction3(name1, name2) {
    console.log(name1, name2);
}