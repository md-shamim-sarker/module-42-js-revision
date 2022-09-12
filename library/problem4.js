/* ৪. এটলিস্ট JSON কিভাবে parse করে বা stringify করে সেটা জানতে হবে  */
const obj = {
    myName: 'Shamim',
    age: 30
};
const objStr = JSON.stringify(obj);
console.log(objStr);
const objObj = JSON.parse(objStr);
console.log(objObj);