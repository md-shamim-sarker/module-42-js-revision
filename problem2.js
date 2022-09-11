/* ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন(>, <, >=, <=, ==, !=, ===, !==) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে। 

২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো। else ছাড়া শুধু if দিয়েও কন্ডিশন লিখো। একটা if অনেকগুলা else if এবং লাস্টে একটা else এর কন্ডিশন লিখো। হতে পারে গ্রেডিং বের করার জন্য কন্ডিশন লিখবে তুমি।  */

const stdScore = {
    abul: {bangla: 50, english: 60, math: 70},
    babul: {bangla: 65, english: 67, math: 80},
    cabul: {bangla: 40, english: 70, math: 82},
    dabul: {bangla: 35, english: 52, math: 78},
    ebul: {bangla: 75, english: 36, math: 71},
    fabul: {bangla: 50, english: 60, math: 70},
    gibul: {bangla: 65, english: 67, math: 80},
    habul: {bangla: 40, english: 70, math: 82},
    jabul: {bangla: 35, english: 52, math: 78},
    gabul: {bangla: 75, english: 65, math: 71}
};

const resultFunc = obj => {
    for(const key in obj) {
        if(obj.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if(element.bangla < 40 || element.english < 40 || element.math < 40) {
                console.log(key + ' : Failed!');
            } else {
                const avgMark = Math.round((element.bangla + element.english + element.math) / 3);
                let grade = '';
                if(avgMark <= 100 && avgMark >= 80) {
                    grade = 'A+';
                } else if(avgMark >= 70) {
                    grade = 'A';
                } else if(avgMark >= 60) {
                    grade = 'B';
                } else if(avgMark >= 50) {
                    grade = 'C';
                } else if(avgMark >= 40) {
                    grade = 'D';
                } else if(avgMark <= 40 && avgMark >= 0) {
                    grade = 'F';
                } else {
                    grade = 'Wrong Info!';
                }
                console.log(`${key}: ${avgMark} : ${grade} : Passed!`);
            }
        }
    }
};
resultFunc(stdScore);