module.exports=(sequelize,DataTypes)=>{
    const tourItems=sequelize.define("tourItems",{
        tourId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            reference:{model:"tour",key:"id"}
        },
        itemId:{
            type:DataTypes.INTEGER,
        },
        type:{
            type:DataTypes.STRING
        }
    },{timestamps:true})

    tourItem.associate=(models)=>{
        tourItem.belongsTo(models.tour,{foreignKey:"tourId"})
    }

    return tourItems;
}