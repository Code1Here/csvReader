const { loadFile } = require("./loadFile");
const { countChars } = require("./countChars");

const char = process.argv[2];
const file = process.argv[3];
/** We can simplify lines 4 & 5
const [char, file] = process.argv.splice[2];
*/
if (!char) {
  console.error("ERROR: you must provide a character as an argument");
  process.exit(1);
}

const main = async () => {
  const fileText = loadFile(file);
  const count = await countChars(char, fileText);
  console.log(`We found ${count} ${char} in the file`);
};

main();
