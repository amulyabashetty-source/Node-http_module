// const http = require("http")
// const url = require("url")

// const dataArray = []

// http.createServer((req, res)=>{

//     const urlpath = url.parse(req.url,true)
//     const pathParams = urlpath.pathname.split("/")[2]

//     if(urlpath.pathname == "/" && req.method == "GET"){
//         res.write("Iam default api")
//         res.end()

//     }else if(urlpath.pathname == "/createUser" && req.method =="POST"){

//         let body = "";

//         req.on("data",(chunk)=>{body += chunk.toString()})

//        req.on("end",()=>{

//     console.log(req.headers)

//     const parsedData = JSON.parse(body);
//     dataArray.push(parsedData);

//     res.writeHead(201, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(dataArray));
// })
//         // res.write(JSON.stringify({message:"user created successfully"}))
//         // res.end()    
//     }else if(urlpath.pathname=="/getuser" && req.method=="GET"){
//         if(Object.keys(urlpath.query).length>0){
//             res.write(JSON.stringify({message:"your query",data:Object.entries(urlpath.query)}))
//             res.end()
//         }else {
//             res.write("you didn't provide any query")
//         }
//     }
   
    
//     else {
//         res.writeHead(404)
//         res.write("no api found")
//         res.end()
//     }
// }).listen(3002,()=>{console.log("server started on port 3002")}) 



// const express = require("express");
// const app = express();

// app.use(express.json()); // important

// let dataArray = [];

// app.get("/", (req, res) => {
//     res.send("Iam default api");
// });

// app.post("/users", (req, res) => {
//     const data = {
//         id: dataArray.length + 1,
//         ...req.body
//     };

//     dataArray.push(data);

//     res.status(201).json(dataArray);
// });

// app.put("/users/:id", (req, res) => {

//     const id = parseInt(req.params.id);

//     const index = dataArray.findIndex(user => user.id === id);

//     if (index !== -1) {
        
//         // update user
//         dataArray[index] = {
//             ...dataArray[index],   // existing data
//             ...req.body            // new data
//         };

//         res.json(dataArray[index]);
//     } else {
//         res.status(404).json({ message: "User not found" });
//     }

// });


// app.delete("/users/:id", (req, res) => {

//     const id = parseInt(req.params.id);

//     const index = dataArray.findIndex(user => user.id === id);

//     if (index !== -1) {
//         dataArray.splice(index, 1);
//         res.json(dataArray);
//     } else {
//         res.status(404).json({ message: "User not found" });
//     }

// });

// app.post("/createUser", (req, res) => {
//     const data = req.body;

//     dataArray.push(data);

//     res.status(201).json(dataArray);
// });

// app.listen(3002, () => {
//     console.log("server started on port 3002");
// });



// const express = require("express");
// const app = express();


// // middleware to get data
// app.use(express.json())
// app.use(express.urlencoded(true))


// const data = [
//     {
//         id: "2ee2a6aa-9675",
//         title: "samsung galaxy s26",
//         category: "mobiles",
//         brand: "samsung"
//     },
//     {
//         id:"ff3adc50-e9ef",
//         title: "Lenovo yog book",
//         category: "laptops",
//         brand: "Lenovo"
//     }
// ];

// // default route or / route
// app.get("/",defaultRoute);
// function defaultRoute(req,res){
//     res.json({message:"success"});
// }

// app.get("/products", getProducts);
// function getProducts(req,res){
//     res
//     .status(200)
//     .json({message:"products data fetched successfully", productsData: data});
// }

// app.post("/products",addProduct)

// function addProduct(req,res){
//     console.log(req.body)
//     data.push({title:req.body.title, category:req.body.category,brand:req.body.brand})
//     res.status(201).json({message:"new product added successfully"})
// }

// app.listen(3000, ()=>{
//     console.log("server started on port 3000")
// })



const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
    {
        id: "2ee2a6aa-9675",
        title: "samsung galaxy s26",
        category: "mobiles",
        brand: "samsung"
    },
    {
        id:"ff3adc50-e9ef",
        title: "Lenovo yog book",
        category: "laptops",
        brand: "Lenovo"
    }
];

app.get("/", (req, res) => {
    res.json({ message: "success" });
});

app.get("/products", (req, res) => {
    res.status(200).json({
        message: "products data fetched successfully",
        productsData: data
    });
});

app.post("/products", (req, res) => {
    console.log(req.body);
    data.push({
  id: Date.now().toString(),
  title: req.body.title,
  category: req.body.category,
  brand: req.body.brand
});
    res.status(201).json({ message: "new product added successfully" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});