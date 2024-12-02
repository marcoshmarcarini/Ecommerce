import { Product } from "../models/Product"
import db from "../utils/firebase"
import {collection} from "firebase/firestore"

export class ProductService {
    static async fetcAllProducts(): Promise<Product[]> {
        const snapshot = await db.collection('produtos').get()
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}) as Product)
    }

    static async createProduct(product: Product): Promise<void> {
        await db.collection('produtos').add(product)
    }
}