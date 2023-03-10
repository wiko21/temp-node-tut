// const amount = 9

// if (amount < 10){
//     console.log("small number")
// }else{
//     console.log("large number")
// }

// console.log(`hey its my first node app`)


// setInterval(() => {
//     console.log("hello world")
// }, 1000);
// const secret = 'SUPER SECRET'
// const john = "john"
// const peter = "peter"


// const sayHi = (name) =>{
//     console.log(`hello there ${name}`)
// }
// sayHi('susan')
// sayHi(john)
// sayHi(peter)



// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('./content/', 'subfolder', 'test.txt')
// console.log(filePath);

// const bathe = path.basename(filePath)
// console.log(bathe);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);


// const {readFile, writeFile} = require('fs')
// console.log('start');
// readFile('./content/first.txt', 'utf8', (err,result) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) =>{
//         if(err){
//             console.log(err);
//             return
//         }
//         const second = result;
//         writeFile('./content/result-async.txt', 
//         `Here is the result : ${first}, ${second}`
//         ,(err,result) =>{
//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log('done with this task');
//         })
//     })
// })
// console.log('next tesk');



// const http = require('http');

// const server = http.createServer((req,res) =>{
//     if(req.url === '/'){
//         res.end('welcome to our home page')
//     }
//     if(req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>Oops!</h1>

//     <p>we cant seem to find the page u are looking for</p>

//     <a href="/">back home</a>
//     `)
// })

// server.listen(5000)

const _ = require('lodash');


const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
