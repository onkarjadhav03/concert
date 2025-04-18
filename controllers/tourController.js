const axios=require("axios")

const axiosInstance=axios.create({
    baseURL:process.env.MICROSERVICE_BASE_URL,
    headers:{
        "Content-Type":"application/json",
        CLIENT_KEY:process.CLIENT_KEY,
        CLIENT_SECRET:process.CLIENT_SECRET,
    }
})

const getConcerts=async(req,res)=>{
    try{
        const response=await axios.get("/concerts",{
            headers:{
                CLIENT_KEY:process.CLIENT_KEY,
                CLIENT_SECRET:process.CLIENT_SECRET,
            }
        })

        res.json(response.data)
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to fetch concerts"})
    }
}


const getAfterParties=async(req,res)=>{
    try{
        const response=await axios.get("/afterparties",{
            headers:{
                CLIENT_KEY:process.CLIENT_KEY,
                CLIENT_SECRET:process.CLIENT_SECRET,
            }
        })

        res.json(response.data)
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to fetch afterparties"})
    }
}

const getMerchandiseStalls=async(req,res)=>{
    try{
        const response=await axios.get("/merchandisestalls",{
            headers:{
                CLIENT_KEY:process.CLIENT_KEY,
                CLIENT_SECRET:process.CLIENT_SECRET,
            }
        })

        res.json(response.data)
    }catch(error){
        console.error(error);
        res.status(500).json({error:"Failed to fetch merchandisestalls"})
    }
}

module.exports={getAfterParties,getConcerts,getMerchandiseStalls}