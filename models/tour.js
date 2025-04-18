module.exports=(sequelize,DataTypes)=>{
    const tour=sequelize.define('tour',{
        name: DataTypes.STRING,
     } ,{
        timestamps:true
    })

    tour.associate=(models)=>{
        tour.hasMany(models.tourItems,{
            foreignKey:"tourId",
        })
    
 
    }
    return tour;
}