export interface ProductVariant {
    size: string;
    price: number;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    basePrice: number;
    description: string;
    imageName: string;
    isBestSeller: boolean;
    variants?: ProductVariant[];
}

export const products: Product[] = [
    {
        id: "prod-1",
        name: "Custom Design Mug",
        category: "Drinkware",
        basePrice: 35000,
        description: "Mug keramik berkualitas tinggi dengan cetakan desain kustom tahan panas dan tidak mudah pudar.",
        imageName: "mug.webp",
        isBestSeller: true
    },
    {
        id: "prod-2",
        name: "Custom Design Keychain",
        category: "Accessories",
        basePrice: 6000,
        description: "Gantungan kunci akrilik dengan desain sesuai keinginan kamu.",
        imageName: "keychain.webp",
        isBestSeller: false
    },
    {
        id: "prod-3",
        name: "Custom Design Tumbler",
        category: "Drinkware",
        basePrice: 50000,
        description: "Tumbler dengan desain sesuai keinginan kamu.",
        imageName: "tumbler.webp",
        isBestSeller: false
    },
    {
        id: "prod-4",
        name: "Custom Design Totebag",
        category: "Accessories",
        basePrice: 40000,
        description: "Totebag dengan desain sesuai keinginan kamu.",
        imageName: "totebag.webp",
        isBestSeller: false
    },
    {
        id: "prod-5",
        name: "Custom Kaos DTF Sablon Premium",
        category: "Apparel",
        basePrice: 65000,
        description: "Kaos katun combed 30s dengan desain sesuai keinginan kamu.",
        imageName: "kaos-sablon-prem.webp",
        isBestSeller: false,
        variants: [
            { size: "XS", price: 65000 },
            { size: "S", price: 65000 },
            { size: "M", price: 65000 },
            { size: "L", price: 65000 },
            { size: "XL", price: 65000 },
            { size: "XXL", price: 75000 },
            { size: "3XL", price: 85000 },
            { size: "4XL", price: 85000 }
        ]
    }
];