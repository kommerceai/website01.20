import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Grow Your Business Naturally
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sustainable marketing strategies that attract and retain customers organically.
            </p>
            <Link 
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Content Marketing</h3>
              <p className="text-gray-600">
                Create valuable content that resonates with your audience and drives organic traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
              <p className="text-gray-600">
                Improve your search rankings and visibility with proven SEO strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Social Media Growth</h3>
              <p className="text-gray-600">
                Build authentic connections and engage with your community naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Organic Marketing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Growth</h3>
              <p className="text-gray-600">
                Build lasting relationships with your audience through authentic engagement and value-driven strategies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cost-Effective</h3>
              <p className="text-gray-600">
                Maximize your ROI with strategies that continue to deliver results long after implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Organically?</h2>
          <p className="text-xl mb-8">
            Let's create a sustainable marketing strategy for your business.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
