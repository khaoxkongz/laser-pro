import Layout from '@/layouts/Layout'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Link } from '@tanstack/react-router'

import healthCare from '@/assets/pngtree-health-care-abstract-light-effect-icon-decoration-image_906585.png.jpeg'

import unmatchPrecision from '@/assets/icon-benefits-commitment.png'
import innovation from '@/assets/icon-benefits-innovation.png'
import sustainability from '@/assets/icon-benefits-sustainability.png'

import cleaning from '@/assets/cleaning.jpg'
import cutting from '@/assets/cutting.jpg'
import mark2 from '@/assets/mark2.jpg'
import welding2 from '@/assets/welding2.jpg'

import testimonail1 from '@/assets/01.png'
import testimonail2 from '@/assets/02.png'
import { HandshakeIcon, LightbulbIcon, ShieldCheckIcon } from 'lucide-react'

const features = [
	{
		id: 1,
		title: 'Unmatched Precision',
		description:
			'Our laser systems offer sub-micron accuracy and consistency in every application, setting new industry standards.',
		image: unmatchPrecision,
	},
	{
		id: 2,
		title: 'Versatile Solutions',
		description:
			'From intricate marking to heavy-duty cutting, we provide tailored solutions for every industrial challenge.',
		image: innovation,
	},
	{
		id: 3,
		title: 'Expert Support',
		description:
			'Our team of laser technology specialists ensures you maximize the potential of your equipment with 24/7 support.',
		image: sustainability,
	},
]

const products = [
	{
		id: 1,
		title: 'Laser Marking',
		image: mark2,
		description: 'High-precision marking solutions for product identification and traceability.',
	},
	{
		id: 2,
		title: 'Laser Cutting',
		image: cutting,
		description: 'Powerful cutting systems for metal, plastic, and composite materials.',
	},
	{
		id: 3,
		title: 'Laser Cleaning',
		image: cleaning,
		description: 'Efficient and eco-friendly cleaning solutions for surface preparation.',
	},
	{
		id: 4,
		title: 'Laser Welding',
		image: welding2,
		description: 'Advanced welding technology for precise and strong material joining.',
	},
]

const testimonial = [
	{
		id: 1,
		quote:
			"LaserTech Pro's marking systems have significantly improved our product traceability and reduced errors. Their support team is unparalleled.",
		name: 'Jane Doe',
		title: 'CEO, TechInnovate Inc.',
		image: testimonail1,
	},
	{
		id: 2,
		quote:
			"The precision and speed of LaserTech Pro's cutting systems have revolutionized our manufacturing process. We've seen a 30% increase in efficiency.",
		name: 'John Smith',
		title: 'Operations Manager, MetalWorks Co.',
		image: testimonail2,
	},
]

const HomePage = () => {
	return (
		<>
			<Layout>
				{/* Hero Section */}
				<section className='relative bg-gradient-to-r from-emerald-500 to-blue-600 text-white min-h-[calc(100vh-64px)] flex flex-col justify-between'>
					<div className='absolute inset-0 opacity-10'>
						<img src={healthCare} alt='Laser technology in action' className='w-full h-full object-cover' />
					</div>
					<div className='container mx-auto px-4 relative flex-grow flex flex-col justify-center py-12'>
						<div className='max-w-4xl mx-auto text-center'>
							<h1 className='text-3xl md:text-5xl font-bold mb-6 leading-tight'>
								LASER MARKING & CUTTING & CLEANING & WELDING SOLUTIONS
							</h1>
							<p className='text-xl mb-8'>
								LaserTech Pro is a leading international laser manufacturer that can provide you with laser marking,
								cutting, cleaning and welding solutions. LaserTech Pro's vision is to push the limits of laser
								technology and set new standards in the industry.
							</p>
							<div className='flex justify-center space-x-12 mb-8'>
								<div className='text-center'>
									<LightbulbIcon className='w-16 h-16 mx-auto mb-2' />
									<p>INNOVATIVE PROCESSES</p>
								</div>
								<div className='text-center'>
									<HandshakeIcon className='w-16 h-16 mx-auto mb-2' />
									<p>INLINE SOLUTIONS</p>
								</div>
								<div className='text-center'>
									<ShieldCheckIcon className='w-16 h-16 mx-auto mb-2' />
									<p>GUARANTEED SAFETY</p>
								</div>
							</div>
							<Button size='lg' className='bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-4'>
								GET A QUOTE
							</Button>
						</div>
					</div>

					{/* Client Logos Section */}
					<div className='w-full h-36 bg-white py-4 hidden lg:block'>
						<div className='container mx-auto mt-10'>
							<div className='flex flex-wrap justify-center items-center gap-8'>
								<img
									src='https://seekvectorlogo.net/wp-content/uploads/2020/02/arconic-vector-logo.png'
									alt='Arconic'
									className='h-8 object-contain'
								/>
								<img
									src='https://meridian.org/wp-content/uploads/2019/02/Meridian_secondary_logo_color_RGB.jpg'
									alt='Meridian'
									className='h-8 object-contain'
								/>
								<img
									src='https://photos.prnewswire.com/prnfull/20141104/156537LOGO'
									alt='Rassini'
									className='h-8 object-contain'
								/>
								<img
									src='https://vtlogo.com/wp-content/uploads/2020/06/northvolt-ab-vector-logo.png'
									alt='Northvolt'
									className='h-8 object-contain'
								/>
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4SKjL71AvXLMYbElhAxgIlQiDWSh840fjQ&s'
									alt='Rio Tinto'
									className='h-8 object-contain'
								/>
								<img
									src='https://www.raceenginesuppliers.com/Portals/0/EasyDNNnews/2220/img-akasol_logo.svg.jpg'
									alt='Akasol'
									className='h-8 object-contain'
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className='py-24 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<h2 className='text-4xl font-bold text-center mb-16 text-blue-900'>
							Why Industry Leaders Choose LaserTech Pro
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
							{features.map((feature) => (
								<Card
									key={feature.id}
									className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500'
								>
									<CardHeader>
										<div className='w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mb-4'>
											<LightbulbIcon className='w-8 h-8' />
										</div>
										<CardTitle className='text-2xl font-bold text-blue-900'>{feature.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className='text-gray-600'>{feature.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Product Categories Section */}
				<section className='py-24 bg-gradient-to-br from-emerald-50 to-blue-50'>
					<div className='container mx-auto px-4'>
						<h2 className='text-4xl font-bold text-center mb-16 text-blue-900'>Cutting-Edge Laser Technologies</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
							{products.map((product) => (
								<Card
									key={product.id}
									className='overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white'
								>
									<img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
									<CardHeader>
										<CardTitle className='text-xl font-bold text-blue-900'>{product.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className='text-gray-600'>{product.description}</p>
									</CardContent>
									<CardFooter>
										<Link
											to={`/products?category=${product.title.split('Laser')[1].trim().toLowerCase()}`}
											className='w-full'
										>
											<Button
												variant='outline'
												className='w-full text-emerald-700 border-emerald-700 hover:bg-emerald-50'
											>
												Learn More
											</Button>
										</Link>
									</CardFooter>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='bg-gradient-to-r from-emerald-700 to-blue-900 text-white py-20'>
					<div className='container mx-auto px-4 text-center'>
						<h2 className='text-4xl font-bold mb-6'>Ready to Transform Your Production?</h2>
						<p className='text-xl mb-8 max-w-2xl mx-auto'>
							Our experts are standing by to provide a personalized consultation and demonstrate how LaserTech Pro can
							revolutionize your manufacturing processes.
						</p>
						<Button size='lg' className='bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4'>
							Request a Demo
						</Button>
					</div>
				</section>

				{/* Testimonial Section */}
				<section className='py-24 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<h2 className='text-4xl font-bold text-center mb-16 text-blue-900'>What Our Clients Say</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
							{testimonial.map((testimonial) => (
								<Card key={testimonial.id} className='bg-white shadow-lg border-l-4 border-emerald-500'>
									<CardContent className='pt-8'>
										<p className='text-gray-600 italic mb-4'>"{testimonial.quote}"</p>
										<div className='flex items-center'>
											<img src={testimonial.image} alt='Client' className='w-12 h-12 rounded-full mr-4' />
											<div>
												<p className='font-bold text-blue-900'>{testimonial.name}</p>
												<p className='text-sm text-gray-500'>{testimonial.title}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default HomePage
