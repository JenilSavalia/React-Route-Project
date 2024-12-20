import React from 'react'

const BankHome = () => {
  return (
    <div className="bg-gray-100 min-h-screen">


      {/* Hero Section */}
      <section className="bg-white text-gray-700 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to <span className="text-blue-600">BankDb 🏦</span>
            </h2>
            <p className="text-lg mb-6">
              Your one-stop solution for finding bank details, IFSC codes, and exploring state or district-wise bank information.
            </p>
          </div>



        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h4 className="text-xl font-bold mb-2">State-wise Search</h4>
              <p>Explore all banks in a specific state with ease.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h4 className="text-xl font-bold mb-2">District-wise Search</h4>
              <p>Find detailed bank information for your district.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h4 className="text-xl font-bold mb-2">IFSC Lookup</h4>
              <p>Quickly find IFSC codes and related bank details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} BankDB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default BankHome