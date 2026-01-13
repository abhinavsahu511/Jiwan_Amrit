import { Heart, Award, Users, Leaf, Clock, Shield } from 'lucide-react';
import Image from '../images/1.jpeg';  // Adjust path as needed
import Image5 from '../images/13.jpg';  // Adjust path as needed

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, understanding, and genuine care for their wellbeing.'
    },
    {
      icon: Leaf,
      title: 'Natural Healing',
      description: 'Our approach focuses on harnessing the power of nature for sustainable health solutions.'
    },
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: 'With years of experience and deep knowledge, we provide reliable and effective treatments.'
    },
    {
      icon: Users,
      title: 'Holistic Approach',
      description: 'We consider the whole person - mind, body, and spirit - in our treatment approach.'
    }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Chief Ayurvedic Physician',
      qualification: 'BAMS, MD (Ayurveda)',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Panchakarma', 'Digestive Disorders', 'Stress Management']
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Senior Ayurvedic Consultant',
      qualification: 'BAMS, MS (Ayurveda)',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Women\'s Health', 'Skin Disorders', 'Weight Management']
    },
    {
      name: 'Dr. Amit Verma',
      title: 'Panchakarma Specialist',
      qualification: 'BAMS, Dip. in Panchakarma',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Panchakarma Therapy', 'Detoxification', 'Pain Management']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      {/* <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About VaidyJi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dedicated to preserving and practicing the ancient science of Ayurveda 
              with modern healthcare standards for over 15 years.
            </p>
          </div>
        </div>
      </section> */}
      <section
   className="bg-cover bg-center bg-no-repeat bg-fixed min-h-[600px] flex items-center justify-center"
  style={{
    backgroundImage: `url('https://indianayurvedaacademy.com/wp-content/uploads/2024/06/Ayurveda-Blog.jpg')`,
  }}
>
  <div className=" bg-opacity-50 p-8 rounded-lg">
    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
      About Us
       </h1>
      
    <div className='text-orange-400 text-3xl flex justify-center'>JivanAmrit</div>
    </div>
</section>
<div className='flex justify-center py-8'>
  <div className="space-y-4 text-gray-600 leading-relaxed">
<p ><strong><b><i>Jivan Amrit Ayurveda</i></b> </strong>is a leading Ayurvedic clinic in Gonda,
 India, offering<br/> a range of treatments for various health conditions. Our 
 experienced practitioners <br/>
 ocus on identifying and treating the root cause of your health issues using <br/> 
traditional Ayurvedic principles. Visit us today for a consultation and experience<br/>
the healing power of Ayurveda.</p>


<p>To provide accessible, affordable, and effective Ayurvedic treatments for 
a wide <br/>range of health conditions. encompassing various therapeutic modalities.</p>

</div>
</div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className=" font-bold italic text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  VaidyJi was founded with a vision to make authentic Ayurvedic healthcare 
                  accessible to everyone. Our journey began with Dr. Rajesh Kumar's passion 
                  for traditional healing methods and his desire to help people achieve 
                  optimal health naturally.
                </p>
                <p>
                  Over the years, we have grown into a comprehensive wellness center that 
                  combines time-tested Ayurvedic principles with modern diagnostic techniques. 
                  Our approach is rooted in the belief that true healing comes from treating 
                  the root cause, not just the symptoms.
                </p>
                <p>
                  Today, VaidyJi stands as a beacon of authentic Ayurvedic practice, 
                  having helped thousands of patients reclaim their health and vitality 
                  through personalized, natural treatments.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={Image}
                alt="Ayurvedic Consultation"
                // className="rounded-2xl shadow-2xl"
                className="rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] ring-4 transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-200 text-black-600 p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="py-20">
        <div>
          <img src={Image5} />
        </div>
       </section>
      {/* Our Values Section */}
      <section className="py-20 bg-blue-200 margin-top: 40px">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" font-bold italic text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do in our practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-100 rounded-2xl p-8">
              <div className="bg-teal-200 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold italic text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide authentic, effective, and accessible Ayurvedic healthcare 
                that empowers individuals to achieve optimal health and wellness 
                through natural healing methods and personalized care.
              </p>
            </div>
            
            <div className="bg-blue-100 rounded-2xl p-8">
              <div className="bg-teal-200 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className=" font-bold italic text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading Ayurvedic wellness center that bridges ancient 
                wisdom with modern healthcare, creating a world where natural 
                healing is the foundation of preventive and curative medicine.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Meet Our Team */}
      <section className="py-20 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" font-bold italic text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced practitioners dedicated to your health and wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{doctor.title}</p>
                  <p className="text-gray-600 text-sm mb-2">{doctor.qualification}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {doctor.experience}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-blue-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className=" font-bold italic text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Certifications & Affiliations
            </h2>
            <p className="text-xl text-gray-600">
              Recognized and certified by leading healthcare organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-blue-200 rounded-lg p-6 mb-4">
                <Award className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <p className="text-sm font-medium text-gray-700">Ministry of AYUSH</p>
              <p className="text-xs text-gray-500">Government of India</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-200 rounded-lg p-6 mb-4">
                <Shield className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <p className="text-sm font-medium text-gray-700">NABH Accredited</p>
              <p className="text-xs text-gray-500">Quality Healthcare</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-200 rounded-lg p-6 mb-4">
                <Heart className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <p className="text-sm font-medium text-gray-700">AYUSH Certified</p>
              <p className="text-xs text-gray-500">Ayurvedic Medicine</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-200 rounded-lg p-6 mb-4">
                <Users className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <p className="text-sm font-medium text-gray-700">NAMA Member</p>
              <p className="text-xs text-gray-500">Ayurvedic Practitioners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;