module.exports = function () {
  //Output a prompt
  process.stdout.write("prompt > ");

  // The stdin 'data' event fires after a user types in a line
  process.stdin.on("data", (data) => {
    const fs = require("fs");
    // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join("\n"));
        process.stdout.write("prompt > ");
      }
    });

    process.stdout.write("\nprompt > ");
  });
};
