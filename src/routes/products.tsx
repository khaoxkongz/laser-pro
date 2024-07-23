import ProductList from '@/pages/ProductList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
	component: ProductList,
})
