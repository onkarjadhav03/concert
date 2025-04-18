const { DataTypes } = require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const concerts=sequelize.define('concerts',{
      artist: DataTypes.STRING,
      venue: DataTypes.STRING,
      city: DataTypes.STRING,
      date: DataTypes.DATE,
      ticketPrice: DataTypes.FLOAT,
      seatCategory:DataTypes.STRING,
},{
    timestamps:true
})
return concerts;
}