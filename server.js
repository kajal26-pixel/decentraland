const axios = require("axios");
const express=require('express')
const app=express()

app.use(express.json());

app.post('/music',async(req,res)=>{
       const name=req.body.name;
       const dob=req.body.dob;
       const user=[]

    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
        params: {id: '40008598', locale: 'en-US'},
        headers: {
            'X-RapidAPI-Key': '74b1ac6bfemsha5e88eb698ac2dfp17ffd0jsnaeb1c5996ef1',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    const result=[]
    axios.request(options).then(function (response) {
	    //console.log(response.data);
        const len=response.data.tracks
        console.log(len.length)
        for(var i=0;i<len.length;i++){
            //console.log('hi')
            let a=response.data.tracks[i]
           //console.log(a.url)
          //console.log(response.data.tracks[0])
            result.push(a.url)
        }
    var j=(Math.floor(Math.random() * result.length))
    console.log(result[j])
    console.log(result)
    res.send(result[j])
    }).catch(function (error) {
	    console.error(error);
        res.send(error)
    });
})

const port=3000
app.listen(port,()=>console.log('listening on port'+port+'...'))