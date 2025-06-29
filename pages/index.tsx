import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ALX Listing App
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to the booking application
        </p>
        <Link 
          href="/booking" 
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
        >
          Go to Booking Page
        </Link>
      </div>
    </div>
  );
} 