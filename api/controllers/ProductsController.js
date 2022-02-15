const db = require('../models');
const axios = require('axios');
const { response } = require('express');

class ProductsController{

    static async getProduct(req,res){
        const { id }= req.params;
        const { idProduct }= req.params;
        try{
            const Products = await db.Products.findOne({
                where:{  
                    wishlist:Number(id),
                    productId:idProduct
                }
            });
            if(Products){
                //Montar objeto só com dados a apresentar
                let formated={
                    id: Products.productId,
                    title: Products.title,
                    image: Products.image,
                    price: Products.price,
                } 

                if (Products.reviewscore){
                    formated = {...formated, reviewscore: Products.reviewscore};
                }

                return res.status(200).json(formated);
            }else{
                return res.status(400).json({message: 'Produto não encontrado nesta lista'});
            }
           
        }catch(e){
            return res.status(500).json(e.message);
        };
    };


    static async postProduct(req,res){
        const { id } = req.params;
        const { idProduct } = req.params;

        //verifica se produto existe na lista
        const existInList = await db.Products.findOne({
            where:{ 
                wishlist: Number(id),
                productId:idProduct
        }});

        if(existInList){
            return res.status(400).json('Produto já cadastrado na lista');
        }else{   
            try{
                const {data} = await axios.get(`http://challenge-api.luizalabs.com/api/product/${idProduct}/`);
                if(data.id){
                    delete data.id;
                    delete data.brand;
                    const createdProduct = await db.Products.create({productId:idProduct,wishlist:id,
                    reviewscore:data.reviewScore,...data});
                    return res.status(200).json({message: 'Produto adicionado', createdProduct});
                }else{
                    return res.status(400).json('Produto não existe'); 
                };
            }catch(e){
                return res.status(500).json('Erro ao adicionar, verifique os dados'); 
            };      
        };  
    };

    static async deleteProduct(req,res){
        const { id } = req.params;
        const { idProduct } = req.params;
       try{
           await db.Products.destroy({
                where:{ 
                    wishlist: Number(id),
                    productId:idProduct
                }
            });
            return res.status(200).json({message: "Produto deletado com sucesso da lista de favoritos!"});
        }catch(e){
            return res.status(500).json(e.message);
        };
    };
};

module.exports = ProductsController;