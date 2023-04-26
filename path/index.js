const path = require('node:path');

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename)); // last part
console.log(path.basename(__dirname)); // last part

// extension name
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename)); //object
console.log(path.format(path.parse(__filename))) //string

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./data.json'))

//for join parts of path
console.log(path.join('folder1', 'folder2', 'index.html'));
console.log(path.join('/folder1', 'folder2', 'index.html'));
console.log(path.join('/folder1', '//folder2', 'index.html'));
console.log(path.join('/folder1', '//folder2', '../index.html'));
console.log(path.join(__dirname, "data.json"));

//for join parts of absolute path
console.log(path.resolve('folder1', 'folder2', 'index.html'));
console.log(path.resolve('/folder1', 'folder2', 'index.html'));
console.log(path.resolve('/folder1', '//folder2', 'index.html'));
console.log(path.resolve('/folder1', '//folder2', '../index.html'));
console.log(path.resolve(__dirname, "data.json"));