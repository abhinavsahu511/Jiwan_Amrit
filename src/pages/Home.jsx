import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import {
  Users,
  Award,
  Heart,
  Clock,
  Leaf,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Play
} from 'lucide-react';

import Image from '../images/2.jpeg';  // Adjust path as needed

const Home = () => {
  const stats = [
    { icon: Users, label: 'Happy Patients', value: 10000 },
    { icon: Award, label: 'Years Experience', value: 15 },
    { icon: Heart, label: 'Success Rate', value: 95 },
    { icon: Clock, label: 'Emergency Support', value: 24 },
  ];
const services = [
  {
    title: 'Panchakarma Therapy',
    description: 'Complete detoxification and rejuvenation through traditional five-fold purification process.',
    image: 'https://images.pexels.com/photos/3865787/pexels-photo-3865787.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Herbal Medicine',
    description: 'Natural healing with carefully prepared herbal formulations tailored to your constitution.',
    image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Lifestyle Counseling',
    description: 'Personalized guidance on diet, exercise, and daily routines for optimal health.',
    image: 'https://images.pexels.com/photos/4145032/pexels-photo-4145032.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];
  const testimonials = [
    {
      name: 'Priya Sharma',
      condition: 'Chronic Pain Relief',
      text: 'After years of conventional treatments, VaidyJi\'s ayurvedic approach finally gave me the relief I was seeking.',
      rating: 5
    },
    {
      name: 'Raj Patel',
      condition: 'Digestive Health',
      text: 'The personalized treatment plan completely transformed my digestive health. Highly recommended!',
      rating: 5
    },
    {
      name: 'Meera Singh',
      condition: 'Stress Management',
      text: 'The holistic approach to stress management has significantly improved my quality of life.',
      rating: 5
    },
     {
      name: 'Aman Mishra',
      condition: 'Stress Management',
      text: 'Managing stress holistically has made a meaningful difference in my quality of life.',
      rating: 5
    },
     {
      name: 'Suraj Mishra',
      condition: 'Diabetes.',
      text: 'The holistic approach to managing my diabetes has helped me maintain better blood sugar levels and improved my overall well-being.',

      rating: 5
    },
    {
      name: 'Abhay Mishra',
      condition: 'Chronic Pain Relief',
      text: 'Years of conventional treatment offered little relief, but VaidyJi Ayurvedic approach finally gave me the results I was hoping for.',
      rating: 5
    },
  ];

  return (
    <div className='position: fixed;'>
      {/* Hero Section */}
      <section className="relative bg-blue-200 from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className=" font-bold italic text-4xl md:text-6xl font-bold text-black-800 mb-6 leading-tight">
                Ancient Wisdom
                <span className=" font-bold italic text-blue-400"> Modern Care</span>
              </h1>
              <p className="text-xl text-black-600 mb-8 leading-relaxed">
                Experience the healing power of Ayurveda with our expert practitioners. 
                Personalized treatments for complete wellness and natural healing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointments"
                  className=" border-2 bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                {/* <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-emerald-600 hover:text-white transition-all duration-200 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video
                </button> */}
                <a
                  href="https://www.youtube.com/watch?v=ZIus_3EIORg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Video
                </a>    
              </div>
            </div>
            <div className="relative">
              <img
                src={Image}
                alt="Ayurvedic Treatment"
                // className="rounded-2xl shadow-2xl"
                 className="rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] ring-4 transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Leaf className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">100% Natural</p>
                    <p className="text-sm text-gray-600">Herbal Treatments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  <CountUp
                    key={value}                // added to reset on value change
                    start={0}
                    end={value}
                    duration={2}
                    separator=","
                    suffix={label === 'Success Rate' ? '%' : label === 'Emergency Support' ? '/7' : '+'}
                    enableScrollSpy={true}    // triggers count on scroll into view
                  />
                </div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" font-bold italic  text-3xl md:text-4xl font-bold text-black-800 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-black-600 max-w-2xl mx-auto">
              Comprehensive Ayurvedic treatments tailored to restore balance and promote natural healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ title, description, image }, index) => (
              <div
                key={index}
                // className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-4"
                className="bg-white rounded-xl shadow-lg border-2 border-blue-400 overflow-hidden hover:shadow-xxl transition-all duration-200 transform hover:-translate-y-4"

              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <Link
                    to="/services"
                    className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}                              
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className=" font-bold italic text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose JivanAmrit Ayurveda?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine traditional Ayurvedic wisdom with modern diagnostic techniques 
                to provide the most effective and personalized healthcare solutions.
              </p>
              
              <div className="space-y-4">
                {[
                  'Certified and experienced Ayurvedic practitioners',
                  'Personalized treatment plans based on individual constitution',
                  'Premium quality herbal medicines and formulations',
                  'Comprehensive wellness programs and lifestyle guidance',
                  'Modern facilities with traditional treatment methods'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div                 className="bg-white rounded-xl shadow-lg border-2 border-blue-400 overflow-hidden hover:shadow-xxl transition-all duration-200 transform hover:-translate-y-4"

>
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ayurvedic Doctor"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Licensed</p>
                  <p className="text-sm opacity-90">& Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-200 from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" font-bold italic text-3xl md:text-4xl font-bold text-black-800 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-black-600">
              Real stories from people whose lives have been transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ name, condition, text, rating }, index) => (
              <div
                key={index}
              // className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 "
              //  className="bg-white border-2 border-blue-500 rounded-xl shadow-lg p-6 transform transition-all duration-500 translate-x-0 hover:translate-x-4 hover:shadow-xl"

              className="bg-white border-2 border-blue-500 rounded-xl shadow-lg p-6 transform transition-all duration-500 translate-x-0 hover:translate-x-4 hover:shadow-xxl"

              >
                <div className="flex items-center mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{name}</p>
                  <p className="text-sm text-emerald-600">{condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className=" font-bold italic text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-black-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards natural wellness. Book your consultation today 
            and discover the power of Ayurvedic healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointments"
              // className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            className=" border-2 bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"

            >
              Schedule Consultation
            </Link>
            <Link
              to="/contact"
              className=" border-2 bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"

              // className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-emerald-600 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
