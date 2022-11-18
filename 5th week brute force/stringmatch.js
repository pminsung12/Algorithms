var fs = require("fs");
fs.readFile("C:/Users/user/Desktop/어린왕자.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
    let text = data;
    let cnt = 0;

    console.time("stringMatch with JS");
    for (let i = 0; i < text.length; i++) {
      if (text.slice(i, i + 5) == "어린 왕자") {
        cnt += 1;
        process.stdout.write(String(i));
        process.stdout.write(" ");
      }
    }
    console.log("총 반복횟수 : ", cnt);
    console.timeEnd("stringMatch with JS");
  }
});
