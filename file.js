var fs = require("fs");
fs.writeFile('welcome.txt', 'hello node', function (err) {
    if (err) {

        return console.error(err);

    }
    fs.readFile('welcome.txt', function (err, data) {

        if (err) {

            return console.error(err);

        }

        console.log("Lecture  : " + data.toString());

    });
});