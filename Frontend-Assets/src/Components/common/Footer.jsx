import React from 'react'

const Footer = () => {
  return (
    // <!-- Component: Five Columns Footer with Logo -->
    <footer className="text-start text-slate-500">
      {/* <!-- Main footer --> */}
      <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100">
        <div className="sm:container px-3 mx-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-4" aria-labelledby="footer-header">
              <a id="WindUI-5-logo" aria-label="WindUI logo" aria-current="page" className="flex items-center gap-2 mb-6 text-base font-medium leading-6 whitespace-nowrap focus:outline-none text-slate-700" href="javascript:void(0)">
                <img src="https://curiousdevelopers.in/wp-content/uploads/2023/05/CDC-High-Resolution-Circle-Logo-Transparent-Background-75x75.png" className="h-12 sm:h-16 transform hover:rotate-180 transition duration-200 ease-in-out" alt="" />
                Mentors Connect
              </a>
              <p className='text-left'>Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.</p>
            </div>
            <nav className="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-product-5-logo">
              <h3 className="mb-6 text-base font-medium text-slate-700" id="footer-product-5-logo">Product</h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Features </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Customers </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Why us? </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Pricing </a>
                </li>
              </ul>
            </nav>
            <nav className="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-docs-5-logo">
              <h3 className="mb-6 text-base font-medium text-slate-700" id="footer-docs-5-logo">Docs & Help</h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Documentation</a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Training </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> System status </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> FAQ's </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Help Center </a>
                </li>
              </ul>
            </nav>
            <nav className="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-about-5-logo">
              <h3 className="mb-6 text-base font-medium text-slate-700" id="footer-about-5-logo">About us</h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> About us </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Careers </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Leadership </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Blog</a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Events </a>
                </li>
              </ul>
            </nav>
            <nav className="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-get-in-touch-5-logo">
              <h3 className="mb-6 text-base font-medium text-slate-700" id="footer-get-in-touch-5-logo">Get in touch</h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Contact </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Support </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Partners </a>
                </li>
                <li className="mb-2 leading-6">
                  <a href="javascript:void(0)" className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"> Join research </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    // <!-- End Five Columns Footer with Logo -->
  )
}

export default Footer