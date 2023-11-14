const products = [
    {id: "2", category: "Computadoras", name: "Computadora 1", price: 1400,  description: "Computadora china", img: "../public/img/compu1.jpg", stock: 15},
    {id: "3", category: "Computadoras", name: "Computadora 2", price: 5000 , description: "Computadora EEUU", img: "../public/img/compu2.jpg", stock: 1},
    {id: "4", category: "Computadoras", name: "Computadora 3", price: 1000 , description: "Computadora India", img: "../public/img/compu3.jpg", stock: 3},
    {id: "5" , category: "Celular",  name: "Samsung", price: 1600,  description: "Celular Samsung", img:"../public/img/samsung.jpg", stock: 3},
    {id: "6", category: "Celular" , name: "Iphone", price: 6600,  description:"Celular Iphone", img: "../public/img/iphone.jpg", stock: 1},
    {id: "7", category: "Celular" , name: "Huawei", price: 4700,  description:"Celular Huawei", img: "../public/img/huawei.png", stock: 5},
    {id: "8", category: "Celular",  name: "LG", price: 2000,   description:"Celular LG", img: "../public/img/LG.jpeg", stock:2},
    {id: "9", category: "Perifericos" , name: "Microfono", price: 85000,  description:"Microfono Nuevo", img: "../public/img/micro.png", stock: 6},
    {id: "10", category: "Perifericos" , name: "Auriculares", price: 2030,  description:"Auruculares seminuevos", img: "../public/img/auris.webp", stock: 13},
    {id: "11", category: "Perifericos" , name: "Mouse", price: 1040,  description:"Mouse Roto", img: "../public/img/mouse.jpg", stock:8},
    {id: "12", category: "Perifericos" , name: "Joystick", price: 2150,  description: "Joystick para celular", img: "../public/img/joystick.webp", stock: 2},
    
];

export const getProducts = () => {
    
    return new Promise ( (resolve , reject ) => {
        if ( products.length > 0) {
            setTimeout(() => {
                resolve(products)
                console.log(products)
            }, 1500);
        }
        else { reject ( "No Products available")
        }
    
})
};
export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
      const product = products.find((item) => item.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    });
  };


