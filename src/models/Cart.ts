export interface CartItem {
    productId: string
    quantity: number
}

export interface Cart{
    id: string
    userId: string
    items: CartItem[]
}

export class CartModel{
    constructor(private cart: Cart){}

    addItem(productId: string, quantity: number): void{
        const existingItem = this.cart.items.find((item) => item.productId === productId);
        if(existingItem){
            existingItem.quantity += quantity;
        }else{
            this.cart.items.push({productId, quantity});
        }
    }

    removeItem(productId: string): void{
        this.cart.items = this.cart.items.filter((item) => item.productId !== productId);
    }
}