import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const API_KEY = process.env.MAILCHIMP_API_KEY!;
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
        const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX!;

        const data = {
            email_address: email,
            status: "subscribed",
        };

        const response = await fetch(
            `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `apikey ${API_KEY}`,
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            const err = await response.json();
            console.log(err)
            return NextResponse.json(
                { error: err.detail || "Failed to subscribe" },
                { status: 400 }
            );
        }

        return NextResponse.json({ message: "Subscribed successfully!" });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}
