"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { menuItems } from "../../Constants/data";
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="sticky top-0 w-full bg-white py-2 mx-auto font-poppins z-50">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
				<div className="inline-flex items-center space-x-2">
					<span className="overflow-hidden">
						<img
							src="https://curiousdevelopers.in/wp-content/uploads/2023/05/CDC-High-Resolution-Circle-Logo-Transparent-Background-75x75.png"
							className="mr-3 transform hover:rotate-180 transition duration-200 ease-in-out h-10"
							alt="Header logo "
						/>
					</span>
					<span className="font-normal">Mentors Connect</span>
				</div>
				<div className="hidden lg:block">
					<ul className="inline-flex space-x-8">
						{menuItems.map((item) => (
							<li key={item.name}>
								<a
									href="#"
									className=" transition-colors duration-200 hover:text-[#8800ff] text-sm font-[400] text-gray-800">
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="hidden lg:block">
					<button
						type="button"
						className=" mr-3 rounded-md bg-[#8800ff] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8200ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
						Organization
					</button>
					<button
						type="button"
						className=" transition-colors duration-200 rounded-md bg-[#8800ff] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8200ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
						Become Mentor
					</button>
				</div>

				{/* Mobile View Menu */}
				<div className="lg:hidden">
					<Menu
						onClick={toggleMenu}
						className="h-6 w-6 cursor-pointer text-black"
					/>
				</div>
				{isMenuOpen && (
					<div className=" absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pb-6 pt-5">
								<div className="flex items-center justify-between">
									<div className="inline-flex items-center space-x-2">
										<span>
											<span className="overflow-hidden">
												<img
													src="https://curiousdevelopers.in/wp-content/uploads/2023/05/CDC-High-Resolution-Circle-Logo-Transparent-Background-75x75.png"
													className="mr-3 transform hover:rotate-180 transition duration-200 ease-in-out h-10"
													alt="Header logo "
												/>
											</span>
										</span>
										<span className="font-bold">Mentors Connect</span>
									</div>
									<div className="-mr-2">
										<button
											type="button"
											onClick={toggleMenu}
											className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
											<span className="sr-only">Close menu</span>
											<X className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-4">
										{menuItems.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50">
												<span className="ml-3 text-base font-medium text-gray-900">
													{item.name}
												</span>
											</a>
										))}
									</nav>
								</div>
								<button
									type="button"
									className="mt-4 w-full rounded-md bg-[#8800ff] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8200ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
									Organization
								</button>
								<button
									type="button"
									className="mt-4 w-full rounded-md bg-[#8800ff] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8200ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
									Become a Mentor
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
