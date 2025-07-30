import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const UploadDocuments: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: ''
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    'Air Ticketing',
    'Visa Processing',
    'Tour Package',
    'Hajj & Umrah',
    'Hotel Booking',
    'Travel Insurance',
    'Group Travel'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the file upload
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Upload Documents
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Securely upload your documents for visa processing, ticket booking, or any other services. 
          We ensure complete confidentiality of your personal information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Upload Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <FileText className="w-6 h-6 text-yellow-500 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Document Upload Form</h3>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-600 mb-2">Documents Submitted Successfully!</h4>
              <p className="text-gray-600">We'll review your documents and contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Documents * (PDF, JPG, PNG - Max 10MB each)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-500 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Click to upload files
                  </label>
                  <p className="text-gray-500 text-sm mt-2">or drag and drop your files here</p>
                  {files && (
                    <div className="mt-4 text-left">
                      <p className="text-sm font-medium text-gray-700 mb-2">Selected Files:</p>
                      {Array.from(files).map((file, index) => (
                        <div key={index} className="text-sm text-gray-600 flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-yellow-500" />
                          {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Submit Documents
              </button>
            </form>
          )}
        </div>

        {/* Information Panel */}
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-blue-900">Important Information</h3>
            </div>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                All documents must be clear and readable
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Maximum file size: 10MB per file
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Accepted formats: PDF, JPG, PNG
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                We'll review and respond within 24 hours
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-4">Required Documents</h3>
            <div className="space-y-4 text-yellow-800">
              <div>
                <h4 className="font-medium">For Visa Processing:</h4>
                <p className="text-sm">Passport, Photos, Bank Statement, NOC, etc.</p>
              </div>
              <div>
                <h4 className="font-medium">For Air Ticketing:</h4>
                <p className="text-sm">Passport copy, Visa (if required)</p>
              </div>
              <div>
                <h4 className="font-medium">For Tour Packages:</h4>
                <p className="text-sm">Passport, ID Card, Photos</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Need Help?</h3>
            <p className="text-green-800 text-sm mb-4">
              Our support team is here to assist you with the document upload process.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-green-700">📞 Call: 01941038484</p>
              <p className="text-green-700">📧 Email: emeairinternational@gmail.com</p>
              <p className="text-green-700">💬 WhatsApp: 01941038484</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;