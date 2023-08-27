// price_1NeuTRF8wzumqS6HVslh5LB5
// price_1NgdzmF8wzumqS6HX7WCuo9c
// price_1Nge0vF8wzumqS6HSCffbm

const productsArray = [
    {
        id: "price_1NeuTRF8wzumqS6HVslh5LB5",
        kedv: "price_1Ni713F8wzumqS6Htf64e2CF",
        title: "Bilet normalny",
        price: 20,
        time: "18 Augusztus",
        description: "Bilet normalny na zwiedzanie muzeum",
        location: "Magyarpolány, Faluház",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: "price_1NgdzmF8wzumqS6HX7WCuo9c",
        title: "Bilet ulgowy",
        price: 10,
        time: "18 Augusztus",
        description: "Bilet ulgowy na zwiedzanie muzeum",
        location: "Magyarpolány, Faluház",
        image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
    },
    {
        id: "price_1Nge0vF8wzumqS6HSCffbm",
        title: "Bilet rodzinny",
        price: 50,
        time: "18 Augusztus",
        description: "Bilet rodzinny na zwiedzanie muzeum",
        location: "Magyarpolány, Faluház",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    {
        id: 4,
        title: "Bilet grupowy",
        price: 15,
        time: "18 Augusztus",
        description: "Bilet grupowy na zwiedzanie muzeum",
        location: "Magyarpolány, Faluház",
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData === undefined) {
        alert("No product found with ID: " + id)
        return undefined
    }

    return productData
}

export { productsArray, getProductData }