import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Link, useRouter } from '@tanstack/react-router'
import { Menu, Search } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import type React from 'react'
import { useEffect, useState } from 'react'

interface BreadcrumbItem {
	label: string
	path: string
}

interface BreadcrumbProps {
	items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	if (items.length === 0) {
		return null
	}

	return (
		<nav className='mt-12' aria-label='Breadcrumb'>
			<ol className='inline-flex items-center space-x-1 md:space-x-3'>
				<li className='inline-flex items-center'>
					<Link to='/' className='inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-800'>
						Home
					</Link>
				</li>
				{items.map((item) => (
					<li key={item.path}>
						<div className='flex items-center'>
							<ChevronRight className='w-4 h-4 text-gray-400' />
							<Link to={item.path} className='ml-1 text-sm font-medium text-emerald-600 hover:text-emerald-800 md:ml-2'>
								{item.label}
							</Link>
						</div>
					</li>
				))}
			</ol>
		</nav>
	)
}

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='bg-white text-emerald-800 py-4 shadow-md relative z-50'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-4'>
						<h1 className='text-2xl font-bold text-emerald-700'>LaserTech Pro</h1>
					</div>

					<nav className='hidden md:block'>
						<NavigationMenu>
							<NavigationMenuList className='space-x-2'>
								<NavigationMenuItem>
									<Link to='/'>
										<NavigationMenuLink className='px-4 py-2 rounded-md text-emerald-700 hover:bg-emerald-50 transition-colors'>
											Home
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuTrigger className='px-4 py-2 rounded-md text-emerald-700 hover:bg-emerald-50 transition-colors'>
										Products
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className='bg-white p-4 rounded-md shadow-lg w-64'>
											<li className='mb-4'>
												<Link to='/products' className='block p-2 rounded-md hover:bg-emerald-50 transition-colors'>
													<div className='font-medium text-emerald-700'>Explore Our Products</div>
													<p className='text-sm text-emerald-600'>Discover our range of laser solutions.</p>
												</Link>
											</li>
											<li>
												<Link
													to='/products?category=marking'
													className='block p-2 rounded-md hover:bg-emerald-50 transition-colors text-emerald-700'
												>
													Laser Marking
												</Link>
											</li>
											<li>
												<Link
													to='/products?category=cutting'
													className='block p-2 rounded-md hover:bg-emerald-50 transition-colors text-emerald-700'
												>
													Laser Cutting
												</Link>
											</li>
											<li>
												<Link
													to='/products?category=cleaning'
													className='block p-2 rounded-md hover:bg-emerald-50 transition-colors text-emerald-700'
												>
													Laser Cleaning
												</Link>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link to='/about'>
										<NavigationMenuLink className='px-4 py-2 rounded-md text-emerald-700 hover:bg-emerald-50 transition-colors'>
											About Us
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<Link to='/contact'>
										<NavigationMenuLink className='px-4 py-2 rounded-md text-emerald-700 hover:bg-emerald-50 transition-colors'>
											Contact
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</nav>

					<div className='hidden md:flex items-center space-x-2'>
						<div className='relative'>
							<Input
								type='search'
								placeholder='Search...'
								className='pl-10 pr-4 py-2 border-2 border-emerald-500 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent'
							/>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-500' />
						</div>
					</div>

					<Button
						variant='ghost'
						size='icon'
						className='md:hidden text-emerald-700 hover:bg-emerald-50'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu className='h-6 w-6' />
					</Button>
				</div>

				{isMenuOpen && (
					<div className='md:hidden mt-4 bg-white p-4 rounded-md shadow-md'>
						<nav className='flex flex-col space-y-2'>
							<Link to='/' className='text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-md transition-colors'>
								Home
							</Link>
							<Link
								to='/products'
								className='text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-md transition-colors'
							>
								Products
							</Link>
							<Link to='/about' className='text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-md transition-colors'>
								About Us
							</Link>
							<Link
								to='/contact'
								className='text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-md transition-colors'
							>
								Contact
							</Link>
						</nav>
						<div className='mt-4 relative'>
							<Input
								type='search'
								placeholder='Search...'
								className='w-full pl-10 pr-4 py-2 border-2 border-emerald-500 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent'
							/>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-500' />
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

const Footer: React.FC = () => {
	return (
		<footer className='bg-emerald-800 text-white py-8'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div>
						<h3 className='text-lg font-semibold mb-4'>About LaserTech Pro</h3>
						<p className='text-emerald-200'>
							LaserTech Pro is a leading provider of laser marking, cutting, cleaning, and welding solutions. Our
							mission is to push the boundaries of laser technology and set new industry standards.
						</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link to='/products' className='text-emerald-200 hover:text-white'>
									Products
								</Link>
							</li>
							<li>
								<Link to='/about' className='text-emerald-200 hover:text-white'>
									About Us
								</Link>
							</li>
							<li>
								<Link to='/' className='text-emerald-200 hover:text-white'>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Contact Information</h3>
						<p className='text-emerald-200'>123 Laser Street, Tech City, TC 12345</p>
						<p className='text-emerald-200'>Phone: (123) 456-7890</p>
						<p className='text-emerald-200'>Email: info@lasertechpro.com</p>
					</div>
				</div>
				<div className='mt-8 pt-8 border-t border-emerald-700 text-center text-emerald-300'>
					<p>&copy; 2024 LaserTech Pro. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const router = useRouter()
	const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([])
	const [isHomePage, setIsHomePage] = useState(true)

	useEffect(() => {
		const path = router.state.location.pathname
		setIsHomePage(path === '/')

		const pathSegments = path.split('/').filter(Boolean)
		const newBreadcrumbItems = pathSegments.map((segment, index) => ({
			label: segment.charAt(0).toUpperCase() + segment.slice(1),
			path: `/${pathSegments.slice(0, index + 1).join('/')}`,
		}))
		setBreadcrumbItems(newBreadcrumbItems)
	}, [router.state.location.pathname])

	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			{!isHomePage && (
				<div className='bg-gradient-to-r from-emerald-50 to-blue-50'>
					<div className='container mx-auto px-4'>
						<Breadcrumb items={breadcrumbItems} />
					</div>
				</div>
			)}
			<main className={`flex-grow ${isHomePage ? '' : 'bg-gradient-to-r from-emerald-50 to-blue-50'}`}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
