export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Vind Bedrijven in Nederland
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example categories */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Restaurants</h2>
            <p className="text-gray-600">Ontdek de beste restaurants</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Winkels</h2>
            <p className="text-gray-600">Vind lokale winkels</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Services</h2>
            <p className="text-gray-600">Professionele diensten</p>
          </div>
        </div>
      </main>
    </div>
  );
}