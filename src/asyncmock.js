const productos = [
    { nombre: "mother", precio: 60000, id: 1, img: "./img/mother.jpg"},
    { nombre: "procesador", precio: 110000, id: 2, img: "./img/procesador.jpg"},
    { nombre: "ram", precio: 30000, id: 3, img: "./img/ram.png"},
    { nombre: "placa", precio: 250000, id: 4, img: "./img/placa.jpg"},
    { nombre: "fuente", precio: 40000, id: 5, img: "./img/fuente.jfif"},
    { nombre: "gabinete", precio: 35000, id: 6, img: "./img/gabinete.jpg"},
]

// retraso de red

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout (() => {
            resolve(productos);
        }, 2000)
    })
}