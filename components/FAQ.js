'use client'
import React, { useState } from 'react'

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    return (
        <>
            {/* FAQ */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        {
                            question: "How do I start supporting a creator?",
                            answer: "Simply visit a creator's profile page and choose your support amount. You can use local payment methods like eWallet or UPI for quick and easy transactions."
                        },
                        {
                            question: "What fees does the platform charge?",
                            answer: "We maintain transparent pricing with low fees to ensure creators keep most of their earnings. Specific rates are clearly displayed during the payment process."
                        },
                        {
                            question: "Is my payment information secure?",
                            answer: "Yes, we use industry-standard encryption and security measures to protect all transactions. Your financial information is never stored on our servers."
                        },
                        {
                            question: "How do creators receive their payouts?",
                            answer: "Creators can choose from various local payout methods including bank transfers, eWallets, and other regional options for quick and convenient fund transfers."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg shadow-lg">
                            <button
                                className="w-full text-left p-6 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center cursor-pointer">
                                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                                    <span className="text-purple-400 text-xl">
                                        {openFAQ === index ? '-' : '+'}
                                    </span>
                                </div>
                            </button>
                            {openFAQ === index && (
                                <div className="px-6 pb-6">
                                    <p className="text-gray-300">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default FAQ
