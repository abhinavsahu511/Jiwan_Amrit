import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    concerns: '',
    previousTreatment: '',
    allergies: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment booking:', formData);
    setIsSubmitted(true);
  };

  const services = [
    'Initial Consultation',
    'Panchakarma Therapy',
    'Cardiovascular Care',
    'Stress & Mental Wellness',
    'Immunity & Wellness',
    'Women\'s Health',
    'Digestive Health',
    'Skin & Hair Care',
    'Joint & Muscle Pain',
    'Weight Management',
    'Chronic Disease Care'
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Appointment Booked Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for choosing VaidyJi. We have received your appointment request and 
              will contact you within 24 hours to confirm your booking.
            </p>
            <div className="bg-emerald-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• You'll receive a confirmation call within 24 hours</li>
                <li>• Please arrive 15 minutes before your appointment</li>
                <li>• Bring any relevant medical reports or prescriptions</li>
                <li>• Follow any pre-consultation guidelines we provide</li>
              </ul>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-200"
            >
              Book Another Appointment
            </button>
          </div>
        </div>A
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-blue-200 from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className=" font-bold italic text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-black-600 leading-relaxed">
              Take the first step towards natural healing. Schedule a consultation 
              with our expert Ayurvedic practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Sidebar Info */}
              <div className="lg:col-span-1">
                <div className="bg-blue-200 rounded-2xl p-6 mb-8">
                  <h3 className=" font-bold italic text-xl font-bold text-gray-800 mb-4">Consultation Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Duration</p>
                        <p className="text-sm text-gray-600">45-60 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <User className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Consultation Fee</p>
                        <p className="text-sm text-gray-600">₹1,000 (Adjustable with treatment)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">What to Bring</p>
                        <p className="text-sm text-gray-600">Medical reports, current medications, health history</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-200 rounded-2xl p-6">
                  <h3 className=" font- bold italic text-xl font-bold text-black-800 mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-black-600">+91 9984276035</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-15 h-15 text-blue-600" />
                      <span className="text-black-600">vaidyajiofficial@gmail.com</span>
                    </div>
                  </div>
                  <p className="text-sm text-black-600 mt-4">
                    Our team is available Monday to Saturday, 9:00 AM to 7:00 PM to assist you.
                  </p>
                </div>
              </div>

              {/* Appointment Form */}
              <div className="lg:col-span-2">
                <div className="bg-blue-100 border border-gray-200 rounded-2xl shadow-lg p-8">
                  <h2 className=" font-bold italic text-2xl font-bold text-gray-800 mb-6">Schedule Your Consultation</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-black-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Appointment Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-black700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-black-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors "
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-black-700 mb-2">
                        Service/Treatment *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Health Information */}
                    <div>
                      <label htmlFor="concerns" className="block text-sm font-medium text-black-700 mb-2">
                        Primary Health Concerns *
                      </label>
                      <textarea
                        id="concerns"
                        name="concerns"
                        value={formData.concerns}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Please describe your main health concerns or symptoms"
                      />
                    </div>

                    <div>
                      <label htmlFor="previousTreatment" className="block text-sm font-medium text-black-700 mb-2">
                        Previous Treatments (Optional)
                      </label>
                      <textarea
                        id="previousTreatment"
                        name="previousTreatment"
                        value={formData.previousTreatment}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Any previous treatments or medications you've tried"
                      />
                    </div>

                    <div>
                      <label htmlFor="allergies" className="block text-sm font-medium text-black-700mb-2">
                        Allergies or Medical Conditions (Optional)
                      </label>
                      <textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Please mention any known allergies or existing medical conditions"
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-black-700-600">
                        <strong>Note:</strong> By booking this appointment, you agree to our terms and conditions. 
                        Please arrive 15 minutes early for your consultation. Cancellations must be made at least 
                        24 hours in advance.
                      </p>
                    </div>

                    <button
                      type="submit"
                  className=" bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center"
                    >
                      Book Appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;