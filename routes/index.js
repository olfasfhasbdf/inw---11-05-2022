module.exports = (app)=>{
    //rota do send
    app.get ('/',(req,res)=>{
        res.send('Rota do tipo send')
    })
}