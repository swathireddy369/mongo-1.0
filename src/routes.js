const {helloBear,createBear,getAllbears,getBearById,deleteById,update} = require("./Bears/BearController")
const bearRoutes = (server)=>{
    server.get("/",helloBear)
    server.post('/api/bear',createBear)
    server.get("/api/bear",getAllbears)
    server.get("/api/bear/:id",getBearById)
    server.delete("/api/bear/:id",deleteById)
    server.put("/api/bear/:id",update)
}
module.exports = bearRoutes; 