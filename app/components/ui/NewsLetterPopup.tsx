"use client"
import { useEffect, useState } from "react"

export default function NewsletterPopup() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    // Show popup only on first visit
    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("newsletter_popup_shown")
        if (!hasSeenPopup) {
            setTimeout(() => {
                setShow(true)
            }, 1000)
        }
    }, [])

    const closePopup = () => {
        setShow(false)
        localStorage.setItem("newsletter_popup_shown", "true")
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            if (res.ok) {
                setSuccess(true)
                localStorage.setItem("newsletter_popup_shown", "true")
                setTimeout(() => setShow(false), 2000)
            }
        } catch (error) {
            console.error(error)
        }

        setLoading(false)
    }

    if (!show) return null

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                
                <div className="text-4xl mb-4">🎉</div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Don’t Miss Out on Fresh Meals & Exclusive Offers!
                </h2>

                <p className="text-gray-600 mb-6">
                    Join our community and be the first to know about new meals, catering updates,
                    discounts, and special announcements.
                </p>

                {success ? (
                    <p className="text-green-700 font-semibold mb-4">
                        🎉 You’re subscribed!
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="border w-full px-4 py-3 rounded-md mb-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#09451a] text-white w-full py-3 rounded-md font-semibold"
                        >
                            {loading ? "Subscribing..." : "Subscribe Now"}
                        </button>
                    </form>
                )}

                <button
                    onClick={closePopup}
                    className="text-gray-600 mt-4 underline"
                >
                    Not now
                </button>
            </div>
        </div>
    )
}
