import FAQ from '@/components/FAQ';
import Link from 'next/link';
import React from 'react'

const About = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Empowering creators to connect directly with their supporters through transparent, easy-to-use funding.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg">
          <p className="text-gray-300 mb-4 leading-relaxed">
            At Get Me a Tea, our mission is to revolutionize the way creators and supporters connect. We believe that every creator deserves the freedom to pursue their passion without financial barriers, and every supporter should have the power to directly impact the work they love.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            We're building a platform that eliminates the complexities of traditional funding models. By providing a simple, transparent way for creators to receive support from their followers, we're fostering a community where creativity thrives and meaningful connections are made.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Join us in creating a world where creators can focus on what they do best, and supporters can directly contribute to the art, content, and innovation they cherish.
          </p>
        </div>
      </section>

      {/* Why Creators Love Us */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Creators Love Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">No Complex Memberships</h3>
            <p className="text-gray-300">Direct support from your fans without complicated tier systems or long-term commitments.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Multi-Country Payment Support</h3>
            <p className="text-gray-300">Accept payments from supporters in Nepal, India, and beyond with local payment methods.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Low Fees & Transparent Pricing</h3>
            <p className="text-gray-300">Keep more of what you earn with our competitive fees and clear pricing structure.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Easy Payouts</h3>
            <p className="text-gray-300">Receive your earnings quickly through familiar local payment methods like eWallet and UPI.</p>
          </div>
        </div>
      </section>

      {/* Why Supporters Choose Us */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Supporters Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Support Creators Directly</h3>
            <p className="text-gray-300">Your contributions go straight to the creators you love, with no middlemen taking a cut.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Local Payment Methods</h3>
            <p className="text-gray-300">Pay using familiar options like eWallet, UPI, and other regional payment systems.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">No Long-Term Commitment</h3>
            <p className="text-gray-300">Support creators on your terms - one-time or recurring, whenever you choose.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Secure Payments</h3>
            <p className="text-gray-300">Your transactions are protected with industry-standard security measures.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Transparency</h3>
            <p className="text-gray-300">Clear fees, open communication, and honest practices in everything we do.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Trust</h3>
            <p className="text-gray-300">Building lasting relationships between creators and supporters through reliability.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Community</h3>
            <p className="text-gray-300">Fostering a supportive ecosystem where creativity and appreciation thrive.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3 text-red-400">Growth</h3>
            <p className="text-gray-300">Helping creators and supporters grow together through meaningful connections.</p>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-linear-to-r from-purple-600 to-pink-600 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Support Creators?</h2>
          <p className="text-lg mb-6 text-gray-100">Join thousands of supporters making a difference today.</p>
          <Link
            href="/login"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

export async function generateMetadata() {
  return {
    title: 'About Us - Get Me A Tea',
    description: 'Learn about Get Me a Tea - empowering creators to connect directly with supporters through transparent, easy-to-use funding.',
    openGraph: {
      title: 'About Us - Get Me A Tea',
      description: 'Learn about Get Me a Tea - empowering creators to connect directly with supporters through transparent, easy-to-use funding.',
      type: 'website',
    },
  }
}