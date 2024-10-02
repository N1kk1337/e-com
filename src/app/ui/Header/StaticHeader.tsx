export default function StaticHeader() {
    return (
        <div className="bg-gray-100 p-4 w-full flex items-center justify-between">
            <div className="flex space-x-4">
                <a href="tel:555-555-5555" className="text-blue-500 hover:text-blue-700">PHONE</a>
                <a href="mailto:example@example.com" className="text-blue-500 hover:text-blue-700">EMAIL</a>
                <div className="text-sm text-gray-600">SOME MICRO BANNER</div>
            </div>
            <div className="flex items-center space-x-4">
                <a className="text-gray-700">Follow us:</a>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Instagram</button>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">YouTube</button>
                <button className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900">Facebook</button>
            </div>
        </div>
    );
}