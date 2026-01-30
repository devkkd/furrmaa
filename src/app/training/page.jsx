"use client"
import React, { useState } from 'react';
import Container from '@/components/Container';
import { FaPlay, FaLock } from 'react-icons/fa';
import LessonCard from '@/components/LessonCard';
import { trainingPrograms } from '@/data/trainingData';
import WhyChooseFurrmaa from '@/components/WhyChooseFurrmaa';

const PetTrainingPage = () => {
    const [selectedPlan, setSelectedPlan] = useState('basic');

    // ===== PLANS =====

 const trainingProgram = trainingPrograms;

    const currentPlan = trainingProgram.find(
        p => p.program === selectedPlan
    );

    const currentLessons = currentPlan.sessions;

    const lessonsPerWeek = 7;
    const lessonWeeks = [];

    for (let i = 0; i < currentLessons.length; i += lessonsPerWeek) {
        lessonWeeks.push(currentLessons.slice(i, i + lessonsPerWeek));
    }



    return (
        <section className="bg-white py-12">
            <Container>
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-4xl font-extrabold text-black mb-2">Pet Training</h1>
                    <p className="text-gray-600 font-medium">Start where your pet feels comfortable</p>
                </header>

                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {trainingProgram.map((tier) => (
                        <div
                            key={tier.id}
                            onClick={() => setSelectedPlan(tier.program)}
                            className={` ${tier.program === "basic"
                                ? "bg-gradient-to-b from-[#FFE5B4] to-[#FFCC80]"
                                : tier.program === "intermediate"
                                    ? "bg-gradient-to-b from-[#DC928B] to-[#B8685B]"
                                    : tier.program === "advanced"
                                        ? "bg-gradient-to-b from-[#7F7CFF] to-[#4C4AEF]"
                                        : ""
                                } rounded-[32px] p-8 relative overflow-hidden h-[320px] shadow-sm cursor-pointer`}
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className={`text-2xl font-extrabold ${tier.textColor}`}>{tier.title}</h2>
                                        {tier.isFree ? (
                                            <span className="bg-white/90 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Free</span>
                                        ) : (
                                            <div className="bg-white/20 p-2 rounded-full">
                                                <FaLock className="text-white text-xs" />
                                            </div>
                                        )}
                                    </div>
                                    <p className={`text-sm ${tier.textColor} opacity-80 mb-6 max-w-[200px]`}>
                                        {tier.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {tier.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="bg-white/20 text-[9px] font-bold px-3 py-1 rounded-full border border-white/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button className={`flex items-center gap-2 font-extrabold text-sm ${tier.textColor}`}>
                                    Let's Start ➔
                                </button>
                            </div>
                            <img src={tier.image} alt={tier.title} className="absolute bottom-0 right-0 w-48" />
                        </div>
                    ))}
                </div>

                {/* Progress */}
                <div className={`${selectedPlan === "basic"
                    ? "bg-gradient-to-b from-[#FFE5B4] to-[#FFCC80] text-black"
                    : selectedPlan === "intermediate"
                        ? "bg-gradient-to-b from-[#DC928B] to-[#B8685B] text-white"
                        : selectedPlan === "advanced"
                            ? "bg-gradient-to-b from-[#7F7CFF] to-[#4C4AEF] text-white"
                            : ""
                    } rounded-[24px] p-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6`}>
                    <div>
                        <h3 className="text-2xl font-extrabold  mb-4">
                            {currentPlan?.title}
                        </h3>
                        <p className="text-lg font-bold  opacity-80 uppercase tracking-widest">
                            Lessons
                        </p>
                    </div>
                    <div className="bg-[#a3e635]/40 p-6 rounded-2xl w-full md:w-[450px]">
                        <div className="flex justify-between text-xs font-bold text-gray-800 mb-2">
                            <span>Learning Progress</span>
                            <span>0%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-[#a3e635] h-full w-[0%]"></div>
                        </div>
                    </div>
                </div>

                {/* Lessons */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {currentLessons.map((lesson,index) => ( 
                            
                            <LessonCard
                                key={lesson.id}
                                lesson={lesson}
                                plan={selectedPlan}
                                
                            />
                        ))}

                    </div>
                </div>

            </Container>
            <WhyChooseFurrmaa/>
        </section>
    );
};

export default PetTrainingPage;
