import React from 'react';
import Container from '@/components/Container';
import { HiOutlineLocationMarker, HiOutlineSearch, HiPhone } from 'react-icons/hi';
import { RiDirectionLine } from 'react-icons/ri';
import { LuArrowUpDown } from 'react-icons/lu';
import WhyChooseFurrmaa from '@/components/WhyChooseFurrmaa';

const Vet = () => {
    const categories = [
        "All", "Veterinarians", "Pet Shops", "Hospitals",
        "Pet Hotels / Hostels", "NGOs", "Shelters",
        "Rescue Centers", "Pet Cremation"
    ];

    const serviceProviders = Array(8).fill({
        name: "DOG MART",
        distance: "0.6 km away",
        address: "Plot No 173 200, NRI Cir, Sanganer, Sector 17, Pratap Nagar, Jaipur, Rajasthan",
        image: "/images/Vet/dogshop.png" // Replace with actual path
    });

    return (
        <section className="bg-white py-6 md:py-8">
            <Container>
                <div className='px-6'>
                    {/* Top Header Section */}

                    <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between mb-6 md:mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 shrink-0">Vet Services</h1>

                        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
                            {/* Search Bar */}
                            <div className="relative flex-grow w-full md:w-auto md:max-w-md">
                                <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                                <input
                                    type="text"
                                    placeholder="Search Vet Services"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300 text-sm"
                                />
                            </div>

                            {/* Controls Row for Mobile */}
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                {/* Sort By */}
                                <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 bg-white hover:bg-gray-50 transition flex-1 md:flex-none">
                                    <span>Sort By</span>
                                    <LuArrowUpDown className="text-gray-400" />
                                </button>

                                {/* Location Picker */}
                                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-1.5 bg-white shadow-sm flex-1 md:flex-none justify-between md:justify-start">
                                    <div className="flex items-center gap-1 overflow-hidden">
                                        <HiOutlineLocationMarker className="text-gray-400 text-lg shrink-0" />
                                        <span className="text-xs text-gray-600 font-medium truncate max-w-[100px] md:max-w-[150px]">
                                            Pratap Nagar, Jaipur
                                        </span>
                                    </div>
                                    <button className="bg-[#95E562] text-black text-[10px] font-bold px-3 py-1 rounded-lg uppercase hover:opacity-90 shrink-0">
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Categories Horizontal Scroll */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all
                                ${idx === 0
                                        ? 'bg-[#1e293b] text-white shadow-md'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Services Grid: 1 Column Mobile, 2 Columns Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {serviceProviders.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-row gap-3 p-3 md:gap-4 md:p-4 bg-white border rounded-2xl transition-all hover:shadow-md
                                ${idx === 2 ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100'}`}
                            >
                                {/* Image Placeholder - Fixed Size on Mobile */}
                                <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-between min-w-0">
                                    <div>
                                        <h3 className="text-base md:text-lg font-extrabold text-gray-900 uppercase truncate leading-tight mb-1">
                                            {item.name}
                                        </h3>

                                        <div className="flex items-center gap-1 text-gray-400 text-xs mb-1.5 font-medium">
                                            <HiOutlineLocationMarker className="shrink-0" />
                                            <span className="truncate">{item.distance}</span>
                                        </div>

                                        <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed line-clamp-2 font-medium">
                                            {item.address}
                                        </p>
                                    </div>

                                    {/* Buttons Row */}
                                    <div className="flex items-center gap-3 mt-3">
                                        <button className="flex items-center justify-center gap-1.5 bg-[#8B5FBF] text-white px-4 py-2 rounded-full text-[11px] md:text-xs font-bold hover:bg-[#7c3aed] transition shadow-sm min-w-[80px]">
                                            <HiPhone className="text-sm" />
                                            Call
                                        </button>

                                        <button className="flex items-center gap-1.5 text-gray-600 text-[11px] md:text-xs font-bold hover:text-gray-900 transition">
                                            <RiDirectionLine className="text-lg" />
                                            Direction
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <WhyChooseFurrmaa />
        </section>
    );
};

export default Vet;