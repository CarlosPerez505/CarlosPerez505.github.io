import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Google reCAPTCHA
import emailjs from 'emailjs-com';
import SubmitButton from "@/components/ui/SubmitButton.jsx";

const Contact = () => {

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || '';
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || '';
    const USER_ID = import.meta.env.VITE_USER_ID || '';

    // Log to ensure environment variables are loaded
    console.log('Service ID:', SERVICE_ID, 'Template ID:', TEMPLATE_ID, 'User ID:', USER_ID);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [formStatus, setFormStatus] = useState(''); // State for form submission status
    const [loading, setLoading] = useState(false); // Track form submission state

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaVerified) {
            alert('Please verify the CAPTCHA before submitting the form.');
            return;
        }

        setLoading(true);
        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                e.target,
                USER_ID,
                { 'g-recaptcha-response': recaptchaToken } // Pass reCAPTCHA token
            );
            console.log('Email sent:', result.text);
            setFormStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear form
        } catch (error) {
            console.error('Error:', error);
            setFormStatus(`Failed to send the message: ${error.text || 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };


    const [recaptchaToken, setRecaptchaToken] = useState('');

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
        setRecaptchaToken(value); // Store the reCAPTCHA token
    };


    return (
        <div className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4 w-full max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-lg font-bold text-gray-900">
                    🎉 All users who register will be <span className="text-blue-500">entered into our launch plan</span> and receive <span className="text-green-500">three months of free access</span>!
                    After the trial, a subscription fee will be <span className="text-red-500">negotiated</span>.
                    The contest ends when the <span className="text-purple-500 font-extrabold">clock reaches 0</span>. Join today! ⏰
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY}
                        onChange={handleCaptchaChange}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={!captchaVerified || loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>

            {formStatus && (
                <p className={`mt-4 text-center text-sm ${formStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                    {formStatus}
                </p>
            )}
        </div>
    );
};

export default Contact;
