const houses = require("../server/db.json")
const globalId = 4

module.exports = {
    getAllHouses: (req , res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const { id } = req.params
        const idx = houses.findIndex(house => house.id === +id)
        if( idx >= 0) {
            houses.splice(idx, 1)
            res.status(200).send(houses)
        }else {
            res.sendStatus(404)
        }
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: globalId,
            address, 
            price, 
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(house => house.id === +id)

        if(type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else {
            houses[index].price -= 10000
            res.status(200).send(houses)
        }
        
    }
}