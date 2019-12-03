const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"http://www.mei.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}
