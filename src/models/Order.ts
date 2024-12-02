export interface Order {
    id: string
    userID: string
    items: {
        productId: string
        quantity: number
        price: number
    }[]
    total: number
    status: 'pendente' | 'completo' | 'cancelado'
    createdAt: Date
}

export class OrderModel{
    constructor(private order: Order){}

    //Calcular o total do pedido
    getTotal(): number{
        return this.order.items.reduce((sum, item) => sum + item.quantidade * item.price, 0)
    }

    //Verificar se o pedido foi concluido
    isCompleted(): boolean{
        return this.order.status === 'completo'
    }
}