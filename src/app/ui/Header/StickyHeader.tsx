export default function StickyHeader(){

    return(
<div className="bg-white shadow p-4">
    <div className="container mx-auto flex justify-between items-center">
         {/* Logo  */}
        <div className="text-2xl font-bold text-gray-800">BrandName</div>

         {/* Navigation  */}
        <nav className="space-x-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-gray-800">Home</a>
            <a href="#" className="hover:text-gray-800">Shop</a>
            <a href="#" className="hover:text-gray-800">About</a>
            <a href="#" className="hover:text-gray-800">Blog</a>
            <a href="#" className="hover:text-gray-800">Contact</a>
            <a href="#" className="hover:text-gray-800">Pages</a>
        </nav>

         {/* Right Section (Login/Register, Search, Cart, Wishlist)  */}
        <div className="flex items-center space-x-4 text-blue-500 text-sm">
            <a href="#" className="flex items-center space-x-1 hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 10a4 4 0 110-8 4 4 0 010 8zm-6 8a6 6 0 0112 0H4z" clip-rule="evenodd" />
                </svg>
                <span>Login / Register</span>
            </a>
            <a href="#" className="hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.707 13.707a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z" />
                </svg>
            </a>
            <a href="#" className="hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="10.5" cy="10.5" r="7.5"></circle>
                    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                </svg>
            </a>
            <a href="#" className="flex items-center hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 6h14l-1.5 9h-11z" />
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                </svg>
                <span className="ml-1 text-sm">1</span>
            </a>
            <a href="#" className="flex items-center hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 01-1.6 8.5 5.5 5.5 0 11-9.6 0 5.5 5.5 0 01-1.6-8.5" />
                </svg>
                <span className="ml-1 text-sm">1</span>
            </a>
        </div>
    </div>
</div>
    )

}