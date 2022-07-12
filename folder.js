
const fs = require('fs');
//fs = file system

let test = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란"];

for(let i = 0; i < test.length; i++) {
  fs.mkdir(`${test[i]}`,function(err) {
    if(err === true) {
      console.log("에러났어요");
    }
  });
}
//포켓몬 폴더들이 만들어졌다;

fs.mkdir('./mandoo',function(err) {
  if(err === true) {
    console.log("에러났어요");
  }
});
//mkdir = make directory
//헐 진짜 폴더가 만들어짐;