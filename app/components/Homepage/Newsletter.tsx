"use client";

import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) {
            setMessage(data.error || "Subscription failed.");
        } else {
            setMessage("🎉 You have successfully subscribed!");
            setEmail("");
        }
    };

    return (
        <section className="bg-[#d32e12] py-12 px-6 md:px-12" id="newsletter">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            NEWSLETTER
                        </h2>
                        <p className="text-white opacity-90">
                            Subscribe to get latest updates and offers
                        </p>
                    </div>

                    <div>
                        {/* FORM */}
                        <form
                            onSubmit={handleSubmit}
                            className="w-full md:w-auto flex flex-col sm:flex-row"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="px-4 bg-[#ffffff50] py-3 rounded-md mb-3 sm:mb-0 sm:mr-2 w-full md:w-80 focus:outline-white"
                                required
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-white text-[#d32e12] font-bold px-6 py-3 rounded-md transition-colors disabled:opacity-50"
                            >
                                {loading ? "Please wait..." : "SUBSCRIBE"}
                            </button>
                        </form>
                        {message && (
                            <p className="text-white mt-2 text-sm">{message}</p>
                        )}
                    </div>
                </div>

                {/* FEEDBACK MESSAGE */}
            </div>
        </section>
    );
};

export default Newsletter;
