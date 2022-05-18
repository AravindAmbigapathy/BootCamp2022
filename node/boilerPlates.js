const fs=require('fs');
const folderName=process.argv[2] || 'Project'
// console.log(fs);
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('in the callback');
//     if (err) throw err;
//   });

// console.log('I am after');

fs.mkdirSync(folderName)
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/style.css`)

