import { useProduct } from "@/contexts/ProductContext";
import { Product } from "@/types";

export default function useProductAction() {
    const { addProduct, removeProduct, updateProduct } = useProduct()
    const addProductAction = (product: Product) => {
        addProduct(product)
    }
    const removeProductAction = (id: string) => {
        removeProduct(id)
    }
    const updateProductAction = (product: Product) => {
        updateProduct(product)
    }
    return {
        addProductAction,
        removeProductAction,
        updateProductAction
    }
}
