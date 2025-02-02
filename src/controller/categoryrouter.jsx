// import "F:\\B.Tech Project\\4th sem\\e-commerce\\src\\model\\category.jsx"
// const express=require('express');

// const router=express.Router();

// categoryMiddleWare=(req,res,next)=>{
//     next();
// }

// router.use('/',categoryMiddleWare)

// app.use(bodyParser.json());
//     // getAll
//     app.get("/", async (req, res) => {
//         const data = await Category.find();
//         res.send(data);
//     });

//     // getByID
//     app.get("/:id", async (req, res) => {
//         const data = await Category.findOne({ _id: req.params.id });
//         res.send(data);
//     });

//     // delete
//     app.delete("/:id", async (req, res) => {
//         const data = await Category.deleteOne({ _id: req.params.id });
//     })

//     // insert(create)
//     app.post("/post", async (req, res) => {
//         const obj = new Category({
//             productName: req.body.CategoryName,
//             CategoryMobile: req.body.CategoryMobile,
//             CategoryEmail: req.body.CategoryEmail
//         });

//         const data = await obj.save();
//         res.send(data);
//     });

//     // update 
//     app.patch("/:id", async (req, res) => {
//         let stu = await Category.findOne({ _id: req.params.id });
//         stu.CategoryName = req.body.CategoryName;
//         stu.CategoryMobile = req.body.CategoryMobile;
//         stu.CategoryEmail = req.body.CategoryEmail;

//         const datad = await stu.save();
//         res.send(data);
//     });

// module.exports=router

