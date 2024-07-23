// src/services/productService.ts
import type { Product } from '@/types/product'

// Mock data (สมมติว่านี่คือข้อมูลที่ใช้ใน ProductList)
const products: Product[] = [
	{
		id: '1',
		name: 'Fiber Laser Marking Machine',
		category: 'Laser Marking',
		description: 'High-performance laser marking solution for industrial applications.',
		image: 'https://example.com/fiber-laser-marking-machine.jpg',
	},
	{
		id: '2',
		name: 'CO2 Laser Cutting Machine',
		category: 'Laser Cutting',
		description: 'High-performance laser cutting solution for industrial applications.',
		image: 'https://example.com/co2-laser-cutting-machine.jpg',
	},
	// ... อื่นๆ
]

export const getProducts = async (): Promise<Product[]> => {
	// Simulate API call
	return new Promise((resolve) => {
		setTimeout(() => resolve(products), 500)
	})
}

export const getProductById = async (id: string): Promise<Product | undefined> => {
	// Simulate API call
	return new Promise((resolve) => {
		setTimeout(() => {
			const product = products.find((p) => p.id === id)
			resolve(product)
		}, 500)
	})
}
