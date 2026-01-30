import React from 'react';
import Container from '@/components/Container';
import { HiCheckCircle } from 'react-icons/hi';

const SubscriptionPage = () => {
    // Static feature data from the UI reference
    const features = [
        "Smart Training Modules",
        "Multiple Pet Profiles",
        "50+ Expert-Led Lessons & Videos",
        "Beginner to Advanced Skill Progression",
        "Track Learning Progress",
        "Bookmark & Continue Watching"
    ];

    return (
        <section className="bg-white py-8 md:py-8 min-h-screen">
            <Container>
                <div className="max-w-7xl mx-auto px-6 md:px-9">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        
                        {/* Left Side: Content & Hero Image */}
                        <div className="flex-1">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight">
                                    Unlock All Intermediate & <br /> Advanced Training Videos 🐾🎓
                                </h2>
                                <p className="md:text-xl text-gray-800 font-medium">
                                    Get full access to every lesson and boost your pet's training journey.
                                </p>
                            </div>

                            {/* Hero Image */}
                            <div className=" absolute left-55 md:left-0 md:relative max-w-md mx-auto lg:mx-0 pt-3">
                                <img 
                                    src="/images/CardTwo/inter.png" 
                                    alt="Jumping Puppy Training" 
                                    className="w-[75%] md:w-[70%] h-auto object-contain transform -rotate-12 md:-rotate-6 hover:rotate-0 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Right Side: Pricing Card */}
                        <div className="w-full lg:w-[450px]">
                            <div className="bg-white border border-gray-100 rounded-[40px] p-8 md:p-10 shadow-2xl shadow-blue-50/50">
                                {/* Trial Badge */}
                                <div className="mb-8">
                                    <span className="bg-[#a3e635] text-black text-sm font-bold px-6 py-2.5 rounded-full shadow-sm">
                                        3-Day Free Trial
                                    </span>
                                </div>

                                {/* Feature List */}
                                <div className="space-y-6 mb-10">
                                    <h3 className="text-2xl font-extrabold text-black">What You Get</h3>
                                    <ul className="space-y-4">
                                        {features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3 group">
                                                <HiCheckCircle className="text-[#a3e635] text-2xl shrink-0" />
                                                <span className="text-gray-800 font-bold text-[15px]">
                                                    {feature} {feature === "Track Learning Progress" && "✓"}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Price Box */}
                                <div className="bg-[#a3e635] rounded-[32px] p-4 md:p-8 text-center space-y-2 mb-8 shadow-inner">
                                    <h4 className="text-3xl font-extrabold text-black">Only ₹999</h4>
                                    <p className="text-[13px] font-bold text-black/80">
                                        (One-Time Access)
                                    </p>
                                    <p className="text-[11px] font-bold text-black/60 leading-tight">
                                        No hidden fees. Lifetime access to all premium
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full bg-[#1e293b] text-white py-4 rounded-full font-bold text-sm shadow-lg hover:bg-black transition-all active:scale-95">
                                    Continue to Free Trail ➔
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SubscriptionPage;