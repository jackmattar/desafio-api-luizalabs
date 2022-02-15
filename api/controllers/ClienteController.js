const db = require('../models');

class ClienteController{
    static async getClient( req,res){ 
        const { id }= req.params;
        try{
            const cliente = await db.Clientes.findOne({where:{id:Number(id)}});
            if(cliente){
                return res.status(200).json(cliente);
            }else{
                return res.status(400).json({message: 'Cliente não encontrado!'});
            }
           
        }catch(e){
            return res.status(500).json(e.message);
        };
    };

    static async postClient(req,res){
        const newClient= req.body;
        try{
            if(!await ClienteController.verificaEmail(req.body.email)){
                const createdClient = await db.Clientes.create(newClient); 
                //Cria lista de favoritos junto com o cadastro
                await db.Wishlists.create({cliente:createdClient.id});
                return res.status(200).json(createdClient);
            }else{
                return res.status(400).json({message: 'E-mail já cadastrado!'});
            };
        }catch(e){
            return res.status(500).json(e.message)
        };
    };

    static async updateClient(req,res){
        const { id }= req.params;
        const updateInfo= req.body;
        try{
            await db.Clientes.update(updateInfo,{where:{id:Number(id)}});
            const clientUpdated = await db.Clientes.findOne({where:{id:Number(id)}});
            return res.status(200).json(clientUpdated);
        }catch(e){
            return res.status(500).json(e.message)
        };
    };

    static async deleteClient(req,res){
        const { id }= req.params;
        try{
            await db.Products.destroy({where:{wishlist:Number(id)}});
            await db.Wishlists.destroy({where:{cliente:Number(id)}});
            await db.Clientes.destroy({where:{id:Number(id)}});
            return res.status(200).json({message: "Cliente deletado com sucesso!"});
        }catch(e){
            return res.status(500).json(e.message);
        };
    };

    static async verificaEmail(email) {
        const cliente = await db.Clientes.findOne({where:{email:email}});
        if (cliente) {
          return true;
        };
    };
};

module.exports = ClienteController;