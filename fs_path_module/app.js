// const fs= require("fs")
// const path= require("path")

// console.log("1")
// // fs.writeFile("./hello.txt","hi how are you?",(err)=>{
// //     if(err){
// //         console.log(err)
// //     }
// //     else{
// //         console.log("file created and data added successfully")
// //     }
// // })

// // console.log("3")

// fs.writeFileSync("./hello.txt","hi amulya")

// console.log("3")



// const fs= require("fs")
// fs.readFile("./hello.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// const readFile = fs.readFileSync("./hello.txt","utf-8")
// console.log(readFile)


// console.log(path.basename("./app.js"))
// console.log(path.basename("./fs_path_module/app.js"))

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__dirname))

// fs.mkdir(path.join(__dirname,"amlya"),(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("folder created successfully")
//     }
// })

// const createFolder = fs.mkdir(path.join(__dirname,"amlya","lokesh"))
// console.log(createFolder)


// fs.rename(path.join(__dirname,"DC"),path.join(__dirname,"Justice league"), (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// fs.rmdir(path.join(__dirname, "amulya"), (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("delete successfully")
//     }
// })

// function write(filename,payload){
//     fs.writeFile(path.join(__dirname,"company",filename), JSON.stringify(payload), (err)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log("file created successfully")
//             }
//         })

// }

// function createFile (filename, payload){
//     const check = fs.existsSync(path.join(__dirname, "company"))
//     if(check){
//         write(filename, payload)
//     }else{
//         const create = fs.mkdir(path.join(__dirname,"company"))
//         if(!create){
//             write(filename,payload)
//         }
//     }
// }

// createFile("employee.json",[{name:"Amulya"},{name:"ammulu"}])


const fs = require("fs");
const path = require("path");

function write(filename, payload) {
    fs.writeFile(
        path.join(__dirname, "company", filename),
        JSON.stringify(payload),
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("file created successfully");
            }
        }
    );
}

function createFile(filename, payload) {
    const dirPath = path.join(__dirname, "company");

    const check = fs.existsSync(dirPath);

    if (check) {
        write(filename, payload);
    } else {
        fs.mkdir(dirPath, (err) => {
            if (err) {
                console.log(err);
            } else {
                write(filename, payload);
            }
        });
    }
}

createFile("employee.json", [{ name: "Amulya" }, { name: "ammulu" }]);