import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Layout from '@/layouts/Layout'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
// import ProductDetail from './ProductDetail'

// Mock data for products
const products = [
	{
		id: 1,
		name: 'Fiber Laser Marking Machine',
		category: 'Laser Marking',
		image: 'https://shop-image.readyplanet.com/Vqj-g6dGhDTgpg9_-BhWXG_jSJE=/500x500/558eb2ac64f74f5bbaccd15db3cdbbc0',
	},
	{
		id: 2,
		name: 'CO2 Laser Cutting Machine',
		category: 'Laser Cutting',
		image:
			'https://5.imimg.com/data5/SELLER/Default/2021/2/ML/TT/LU/13071583/co2-laser-cutting-and-engraving-machine.jpg',
	},
	{
		id: 3,
		name: 'Laser Cleaning System',
		category: 'Laser Cleaning',
		image: 'https://www.alliedscientificpro.com/web/image/product.template/5895/image_1024?unique=d46fc4c',
	},
	{
		id: 4,
		name: 'Fiber Laser Welding Machine',
		category: 'Laser Welding',
		image:
			'https://cdn11.bigcommerce.com/s-hc1rju73cz/images/stencil/1280x1280/products/1123/3239/welder_gun__64855.1719877610.jpg?c=1',
	},
	{
		id: 5,
		name: 'UV Laser Marking Machine',
		category: 'Laser Marking',
		image: 'https://image.makewebeasy.net/makeweb/m_1920x0/HB9nnBPzl/DefaultData/456.jpg',
	},
	{
		id: 6,
		name: 'Metal Sheet Laser Cutting Machine',
		category: 'Laser Cutting',
		image: 'https://sheet-metal.tailiftgroup.com/storage/media/sheet-metal/A3015_T6/A3015T6.jpg',
	},
	// Add more products as needed
]

const categories = ['All', 'Laser Marking', 'Laser Cutting', 'Laser Cleaning', 'Laser Welding']

const ProductList: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState('All')

	const filteredProducts =
		selectedCategory === 'All' ? products : products.filter((product) => product.category === selectedCategory)

	return (
		<Layout>
			<div className='bg-gradient-to-r from-emerald-50 to-blue-50 py-12'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl font-bold text-blue-900 mb-8'>Our Products</h1>

					{/* Category filter */}
					<div className='mb-8 flex flex-wrap gap-2'>
						{categories.map((category) => (
							<Button
								key={category}
								variant={selectedCategory === category ? 'default' : 'outline'}
								onClick={() => setSelectedCategory(category)}
								className='bg-emerald-600 text-white hover:bg-emerald-700'
							>
								{category}
							</Button>
						))}
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{filteredProducts.map((product) => (
							<Card key={product.id} className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300'>
								<img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
								<CardHeader>
									<CardTitle className='text-xl font-bold text-blue-900'>{product.name}</CardTitle>
									<CardDescription className='text-emerald-600'>{product.category}</CardDescription>
								</CardHeader>
								<CardContent>
									<p className='text-gray-600'>
										High-performance {product.category.toLowerCase()} solution for industrial applications.
									</p>
								</CardContent>
								<CardFooter>
									<Link to={`/products/${product.id}`} params={{ productId: product.id.toString() }} className='w-full'>
										<Button
											variant='outline'
											className='w-full text-emerald-700 border-emerald-700 hover:bg-emerald-50'
										>
											View Details
										</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ProductList
