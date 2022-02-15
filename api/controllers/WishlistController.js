const db = require('../models');

class Wishlists{
    static async getList(req,res){
        const { id }= req.params;
        try{
            const lista = await db.Products.findAll({where:{wishlist:Number(id)}});
            return res.status(200).json(lista);
        }catch(e){
            return res.status(500).json(e.message);
        };
    };
};

module.exports = Wishlists;