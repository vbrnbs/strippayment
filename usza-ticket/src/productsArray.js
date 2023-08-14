const productsArray = [
    {
        id: 1,
        title: "Bilet normalny",
        price: 20,
        description: "Bilet normalny na zwiedzanie muzeum",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 2,
        title: "Bilet ulgowy",
        price: 10,
        description: "Bilet ulgowy na zwiedzanie muzeum",
        image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
    },
    {
        id: 3,
        title: "Bilet rodzinny",
        price: 50,
        description: "Bilet rodzinny na zwiedzanie muzeum",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    {
        id: 4,
        title: "Bilet grupowy",
        price: 15,
        description: "Bilet grupowy na zwiedzanie muzeum",
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