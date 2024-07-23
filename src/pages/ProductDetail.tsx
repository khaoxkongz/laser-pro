import Layout from '@/layouts/Layout'
import { getProductById } from '@/services/product.service'
import type { Product } from '@/types/product'
import { useParams } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const ProductDetail: React.FC = () => {
	const { productId } = useParams({ from: '/products/$productId' })
	const [product, setProduct] = useState<Product | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				setLoading(true)
				const fetchedProduct = await getProductById(productId)
				if (fetchedProduct) {
					setProduct(fetchedProduct)
				} else {
					setError('Product not found')
				}
			} catch (err) {
				setError('Failed to fetch product')
				console.error('Error fetching product:', err)
			} finally {
				setLoading(false)
			}
		}

		fetchProduct()
	}, [productId])

	if (loading) {
		return (
			<Layout>
				<div className='container mx-auto px-4 py-8'>
					<p>Loading...</p>
				</div>
			</Layout>
		)
	}

	if (error) {
		return (
			<Layout>
				<div className='container mx-auto px-4 py-8'>
					<p>Error: {error}</p>
				</div>
			</Layout>
		)
	}

	if (!product) {
		return (
			<Layout>
				<div className='container mx-auto px-4 py-8'>
					<p>Product not found</p>
				</div>
			</Layout>
		)
	}

	return (
		<>
			<div className='container mx-auto px-4 py-8'>
				<h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
				<img src={product.image} alt={product.name} className='mb-4 rounded-lg shadow-lg' />
				<p className='text-lg mb-2'>
					<strong>Category:</strong> {product.category}
				</p>
				<p className='text-lg mb-4'>{product.description}</p>
				{/* Add more product details as needed */}
			</div>
		</>
	)
}

export default ProductDetail
