const readline = require("readline");
var fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please share any Git Repo  >>", function(name) {
    if(name.includes('https://github.com/')){
    fs.writeFile('./data/repoUrl.txt', name, function (err) {
      if (err) return console.log(err);
      console.log('Running test cases for this repo..');
      process.exit(0)
    });
}else{
    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
    console.log('Uh oh, this doesn\'t seems to be a git url, please retry');
    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
    process.exit(1)
}
});