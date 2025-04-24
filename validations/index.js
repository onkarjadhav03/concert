
function validateConcertsByArtistAndCity(query){
    const errors=[];
    if(!query.artist){
        errors.push("artist is required")
    }
    if(!query.city){
        errors.push("city is required")
    }
    return errors
}

function validateMerchandiseStallsQueryParams(query){
    const errors=[];
    if(!query.stallName){
        errors.push("stallName is required")
    }
  
    return errors
}

function validateAfterPartiesQueryParams (query){
    const errors=[];
    if(!query.city){
        errors.push("city is required")
    }
  
    return errors
}

module.exports={validateConcertsByArtistAndCity,validateMerchandiseStallsQueryParams,validateAfterPartiesQueryParams}