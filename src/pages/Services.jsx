import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Heart, 
  Brain, 
  Shield, 
  Zap, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Leaf,
      title: 'Panchakarma Therapy',
      description: 'Complete detoxification and rejuvenation through five traditional purification processes.',
      duration: '14-21 days',
      price: 'From ₹5,00',
      image: 'https://3.imimg.com/data3/LT/HY/MY-14456724/panchakarma-treatment.png',
      benefits: [
        'Deep tissue detoxification',
        'Improved immunity',
        'Enhanced mental clarity',
        'Balanced doshas'
      ],
      includes: [
        'Consultation & Assessment',
        'Personalized Treatment Plan',
        'Daily Therapies',
        'Herbal Medicines',
        'Diet & Lifestyle Guidance'
      ]
    },
    {
      icon: Heart,
      title: 'Cardiovascular Care',
      description: 'Natural treatments for heart health, blood pressure management, and circulation improvement.',
      duration: '3-6 months',
      price: 'From ₹15,000',
      image: 'https://admin.nmcth.edu/upload/images/departments/2024/03/29/1711706119invasive-cardiology.jpg',
      benefits: [
        'Lower blood pressure naturally',
        'Improved heart function',
        'Better circulation',
        'Reduced cholesterol'
      ],
      includes: [
        'Cardiac Assessment',
        'Herbal Formulations',
        'Yoga & Meditation',
        'Dietary Guidelines',
        'Regular Monitoring'
      ]
    },
    {
      icon: Brain,
      title: 'Stress & Mental Wellness',
      description: 'Holistic approach to managing stress, anxiety, depression, and improving mental health.',
      duration: '2-4 months',
      price: 'From ₹500',
      image: 'https://www.rafflesmedicalgroup.com/wp-content/uploads/2021/04/7-Essential-Tips-for-Mental-Wellness.jpg',
      benefits: [
        'Reduced stress & anxiety',
        'Better sleep quality',
        'Enhanced focus',
        'Emotional balance'
      ],
      includes: [
        'Psychological Assessment',
        'Meditation Training',
        'Herbal Supplements',
        'Lifestyle Counseling',
        'Follow-up Sessions'
      ]
    },
    {
      icon: Shield,
      title: 'Immunity & Wellness',
      description: 'Strengthen your natural defenses and maintain optimal health with preventive care.',
      duration: '1-3 months',
      price: 'From ₹500',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pVfo_uitB0ySxcVM-OV8W-h3X8fLRoUz9CKpM0bHjsQ3UKWYaCiI0CuczXjOgvYgznc&usqp=CAU',
      benefits: [
        'Enhanced immunity',
        'Disease prevention',
        'Increased energy',
        'Better overall health'
      ],
      includes: [
        'Health Assessment',
        'Immunity Boosters',
        'Seasonal Treatments',
        'Preventive Guidelines',
        'Health Monitoring'
      ]
    }
  ];

  const specialtyServices = [
    {
      title: 'Women\'s Health',
      description: 'Specialized care for menstrual disorders, fertility, pregnancy, and menopause.',
      icon: Heart
    },
    {
      title: 'Digestive Health',
      description: 'Treatment for IBS, acidity, constipation, and other digestive disorders.',
      icon: Zap
    },
    {
      title: 'Skin & Hair Care',
      description: 'Natural solutions for acne, eczema, psoriasis, hair loss, and skin aging.',
      icon: Star
    },
    {
      title: 'Joint & Muscle Pain',
      description: 'Effective treatments for arthritis, back pain, sports injuries, and muscle stiffness.',
      icon: Shield
    },
    {
      title: 'Weight Management',
      description: 'Sustainable weight loss and management through Ayurvedic principles.',
      icon: Leaf
    },
    {
      title: 'Chronic Disease Care',
      description: 'Management of diabetes, hypertension, thyroid disorders, and autoimmune conditions.',
      icon: Brain
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-blue-200 from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className=" font-bold italic text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Ayurvedic Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive natural healthcare solutions tailored to your unique constitution 
              and health needs, combining ancient wisdom with modern care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" font-bold italic text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Treatment Programs
            </h2>
            <p className="text-xl text-gray-600">
              Our signature treatments designed for comprehensive healing and wellness
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className=" font-bold italic text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text--600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-200 p-4 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-700 mb-2" />
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-800">{service.duration}</p>
                    </div>
                    <div className="bg-blue-200 p-4 rounded-lg">
                      <Heart className="w-5 h-5 text-blue-600 mb-2" />
                      <p className="text-sm text-black-600">Starting Price</p>
                      <p className="font-semibold text-gray-800">{service.price}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/appointments"
                    // className="border-2 border-black bg-blue-500 text-black  px-8 py-3 rounded-full font-medium hover:bg-blue-00 transition-colors duration-200 inline-flex items-center hover: "
                    // className=" px-6 py-2 rounded-full font-medium hover:bg-orange-500 transition-colors duration-100 "
                  className="border-2 border-blue bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center"

                  >
                    Book Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className=" border-2 border-blue-400 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                      <h5 className="font-semibold text-gray-800 mb-2">Treatment Includes:</h5>
                      <div className="space-y-1">
                        {service.includes.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                            <span className="text-gray-600 text-xs">{item}</span>
                          </div>
                        ))}
                        <p className="text-xs text-gray-500 mt-2">+ {service.includes.length - 3} more...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Specialized Treatment Areas
            </h2>
            <p className="text-xl text-gray-600">
              Expert care for specific health conditions and wellness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <div key={index} className=" border-2 border-blue-400 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/appointments"
                  className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center text-sm"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure the best outcomes for your health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Comprehensive assessment of your health history, current condition, and constitution.'
              },
              {
                step: '02',
                title: 'Personalized Plan',
                description: 'Custom treatment plan designed specifically for your unique needs and health goals.'
              },
              {
                step: '03',
                title: 'Treatment Phase',
                description: 'Implementation of therapies, medications, and lifestyle modifications as per the plan.'
              },
              {
                step: '04',
                title: 'Follow-up Care',
                description: 'Regular monitoring, adjustments, and ongoing support to ensure lasting wellness.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      
    </div>
  );
};

export default Services;