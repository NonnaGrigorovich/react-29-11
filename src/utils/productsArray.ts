export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        type: "phone",
        capacity: "256",
        price: 1200,
        image:"/images/iPhone-Purple.webp"
    },
    {
        id: 2,
        title: "iPhone 13 Pro",
        description: "This is iPhone 13 Pro",
        type: "phone",
        capacity: "128",
        price: 1000,
        image:"/images/iPhone-Gold.webp"
    },
    {
        id: 3,
        title: "iPhone 12 Pro",
        description: "This is iPhone 12 Pro",
        type: "phone",
        capacity: "64",
        price: 500,
        image:"/images/iPhone-Red.webp"
    },
    {
        id: 4,
        title: "iPhone 11 Pro",
        description: "This is iPhone 11 Pro",
        type: "phone",
        capacity: "64",
        price: 500,
        image:"/images/iPhone-Blue.webp"
    },
    {
        id: 5,
        title: "iPhone X",
        description: "This is iPhone X",
        type: "phone",
        capacity: "512",
        price: 1000,
        image:"/images/iPhone-Silver.webp"
    },
    {
        id: 6,
        title: "iPhone 14 Pro MAX",
        description: "This is iPhone 14 Pro MAX",
        type: "phone",
        capacity: "128",
        price: 2000,
        image:"/images/iPhone-Black.webp"
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
      (object, product) => ({
        ...object,
        [product.id]: product,
      }),
      {}
)

export default productsArray