"use client"
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Container from '@/components/Container'

const RequestForCremation = () => {
    const { id } = useParams() // cremation center ID

    const [formData, setFormData] = useState({
        fullName: 'John Deo',
        mobileNumber: '1234567890',
        address: '100, abcd strret, abc city',
        petSpecies: 'Dog',
        petName: 'Kuru',
        breed: 'Lebra',
        age: '8',
        sex: 'Male'
    })

    const speciesOptions = ["Dog", "Cat", "Others"]

    const isFormIncomplete =
        !formData.fullName.trim() ||
        !formData.mobileNumber.trim() ||
        !formData.address.trim() ||
        !formData.petName.trim()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            cremationCenterId: id, // 🔥 core requirement
            ...formData
        }

        console.log("Submitting cremation request:", payload)

        // later:
        // await fetch('/api/cremation-request', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(payload)
        // })
    }

    return (
        <section className="bg-white py-10 min-h-[80vh]">
            <Container>
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm">
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                        Request for Cremation
                    </h1>

                    <div className="space-y-10">
                        {/* Owner Information */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 ml-1">Owner Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 border border-gray-200 rounded-xl bg-gray-50/30 focus:outline-none focus:ring-1 focus:ring-gray-300 text-[15px]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Mobile Number</label>
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 border border-gray-200 rounded-xl bg-gray-50/30 focus:outline-none focus:ring-1 focus:ring-gray-300 text-[15px]"
                                    />
                                </div>

                                <div className="md:col-span-1 space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3.5 border border-gray-200 rounded-xl bg-gray-50/30 focus:outline-none focus:ring-1 focus:ring-gray-300 text-[15px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Pet Information */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 ml-1">Pet Information</h3>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Pet Species</label>
                                    <div className="flex flex-wrap gap-3">
                                        {speciesOptions.map((species) => (
                                            <button
                                                key={species}
                                                type="button"
                                                onClick={() =>
                                                    setFormData(prev => ({ ...prev, petSpecies: species }))
                                                }
                                                className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all
                                                    ${formData.petSpecies === species
                                                        ? 'bg-[#1e293b] text-white shadow-md'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                            >
                                                {species}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Pet Name</label>
                                        <input
                                            type="text"
                                            name="petName"
                                            value={formData.petName}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 border border-gray-200 rounded-xl bg-gray-50/30 focus:outline-none focus:ring-1 focus:ring-gray-300 text-[15px]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Breed</label>
                                        <input
                                            type="text"
                                            name="breed"
                                            value={formData.breed}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 border border-gray-200 rounded-xl bg-gray-50/30 focus:outline-none focus:ring-1 focus:ring-gray-300 text-[15px]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Age (Years)</label>
                                        <input
                                            type="text"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 border border-gray-200 rounded-xl bg-gray-50/30 focus:outline-none focus:ring-1 focus:ring-gray-300 text-[15px]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Sex</label>
                                        <input
                                            type="text"
                                            name="sex"
                                            value={formData.sex}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3.5 border border-gray-200 rounded-xl bg-gray-50/30 focus:outline-none focus:ring-1 focus:ring-gray-300 text-[15px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-center pt-6">
                            <button
                                onClick={handleSubmit}
                                disabled={isFormIncomplete}
                                className={`px-12 py-4 rounded-full font-bold text-white transition-all flex items-center gap-2
                                    ${isFormIncomplete
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-[#1e293b] hover:bg-[#0f172a] shadow-lg active:scale-95'}`}
                            >
                                Submit Request for Cremation ➔
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default RequestForCremation
