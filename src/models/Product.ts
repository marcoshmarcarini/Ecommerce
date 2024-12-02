export interface Product{
    id: string
    name: string
    description: string
    price: number
    stock: number
    category: string
    imageURL: string
    createdAt: Date
    updatedAt: Date
}

export class ProductMOdel{
    constructor( private product: Product){}

    getFormattedPrice(): string{
        return `R$ ${this.product.price.toFixed(2).replace('.', ',')}`
    }

    isAvailable(): boolean{
        return this.product.stock > 0
    }

}

