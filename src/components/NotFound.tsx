const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="mt-6 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
        >
          Go back to Home
        </a>
      </div>
    );
  };
  
  export default NotFound;
  