/* ৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে */
function myFunction(a, b = 0) {
    console.log(a + b);
}
myFunction(5);