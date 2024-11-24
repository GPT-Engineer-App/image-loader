import { Building2, Ruler, Shield, Truck } from "lucide-react";
import { Button } from "../components/ui/button";
import FacilityFeature from "../components/FacilityFeature";

const Index = () => {
  const features = [
    {
      icon: Building2,
      title: "Modern Facility",
      description: "State-of-the-art warehouse space with modern amenities",
    },
    {
      icon: Ruler,
      title: "Flexible Space",
      description: "Customizable storage solutions for your business needs",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock monitoring and secure access",
    },
    {
      icon: Truck,
      title: "Easy Access",
      description: "Strategic location with convenient loading docks",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <img
          src="http://cdnt3m-a.akamaihd.net/tem/warehouse/951/103/3/9511033_006_lt.jpg"
          alt="Warehouse Facility"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50" />
        <div className="absolute inset-0 container flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Warehouse Space
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Modern storage solutions designed for your business success
          </p>
          <Button className="w-fit" size="lg">
            Schedule a Tour
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Facility Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FacilityFeature key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-accent">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Facility Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Dimensions</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-secondary">Total Area</span>
                  <span className="font-medium">50,000 sq ft</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-secondary">Ceiling Height</span>
                  <span className="font-medium">40 ft</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-secondary">Loading Docks</span>
                  <span className="font-medium">8 units</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-secondary">Access Control</span>
                  <span className="font-medium">24/7</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-secondary">CCTV Coverage</span>
                  <span className="font-medium">Full</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-secondary">Security Staff</span>
                  <span className="font-medium">On-site</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Amenities</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-secondary">Office Space</span>
                  <span className="font-medium">Available</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-secondary">Parking</span>
                  <span className="font-medium">100+ spots</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-secondary">Climate Control</span>
                  <span className="font-medium">Yes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in this space?</h2>
          <p className="text-secondary mb-8">
            Contact us to schedule a tour or learn more about this facility
          </p>
          <Button size="lg" className="w-full md:w-auto">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
