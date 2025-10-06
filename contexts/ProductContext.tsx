import { Product } from "@/types"
import { createContext, ReactNode, useContext, useState } from "react"


interface ProductContextType {
    products: Product[]
    addProduct: (product: Product) => void
    removeProduct: (id: string) => void
    updateProduct: (product: Product) => void
}

const ProductContext = createContext<ProductContextType | null>(null)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([])
    const addProduct = (product: Product) => {
        setProducts([...products, product])
    }
    const removeProduct = (id: string) => {
        setProducts(products.filter((product) => product.id !== id))
    }
    const updateProduct = (product: Product) => {
        setProducts(products.map((p) => (p.id === product.id ? product : p)))
    }
    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct, updateProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error('useProduct must be used within a ProductProvider')
    }
    return context
}