const {concerts: concertsModel,afterParties: afterPartiesModel, merchandiseStalls:merchandiseStallsModel,tour:tourModel,tourItems:tourItemsModel}=
require('../models')

const createTour = async(req,res)=>{
    try{
    const{concerts,afterParties,merchandiseStalls,name}=req.body;
    const newTour= await tourModel.create({name});

    if(concerts && concerts.length>0){
        for(const concert of concerts){
            const savedConcert=await concertsModel.create(concert);
            await tourItemsModel.create({
                tourId:newTour.id,
                itemId:savedConcert.id,
                type:"concert"
            })
        }
    }


    if(afterParties && afterParties.length>0){
        for(const afterPartie of afterParties){
            const savedafterPartie=await afterPartiesModel.create(afterPartie);
            await tourItemsModel.create({
                tourId:newTour.id,
                itemId:savedafterPartie.id,
                type:"afterParty"
            })
        }
    }

    if(merchandiseStalls && merchandiseStalls.length>0){
        for(const merchandiseStall of merchandiseStalls){
            const savedamerchandiseStalls=await merchandiseStallsModel.create(merchandiseStall);
            await tourItemsModel.create({
                tourId:newTour.id,
                itemId:savedamerchandiseStalls.id,
                type:"merchandiseStalls"
            })
        }
    }
    res.status(201).json({message:"tour Created",tour:newTour})
    }catch(error){
        console.error(error);
        res.status(500).json({error:"failed to create tour"})
    }
}

const getTour=async (req,res)=>{
    try{
        const tour=await tourModel.findByPk(req.params.id);
        if(!itinerary){
            return res.status(404).json({error:"tour not found"})
        }

        const items=await tourItemsModel.findAll({
            where:{tourId:tour.id}
        })

        const concerts=[]
        const afterParties=[]
        const merchandiseStalls=[]

        for(const item of items){
            if(item.type==='concert'){
                const concert=await concertsModel.findByPk(item.itemId);
                if(concert)concerts.push(concert)
            }else if(item.type==='afterParty'){
                const afterParty=await afterPartiesModel.findByPk(item.itemId);
                if(afterParty)afterParties.push(afterParty)
            }else{
                const merchandiseStall=await merchandiseStallsModel.findByPk(item.itemId);
                if(merchandiseStall) merchandiseStalls.push(merchandiseStall)
        }
        }

        res.json({tour,concerts,afterParties,merchandiseStalls})
    }catch(error){
        console.error(error)
        res.status(500).json({error:"Failed to retrive tour"})
    }
}

module.exports={createTour,getTour}