/* ২. স্প্রেড অপারেটর(...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে(filter ইউজ করে); */
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6];
console.log(arr2);
const arr3 = arr2.filter(p => p !== 6);
console.log(arr3.reduce((p, c) => p + c, 0));