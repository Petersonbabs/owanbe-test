"use client";

import React from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function PrivacyPolicyPage() {
  const contentRef = useScrollAnimation({ animation: "fadeIn", duration: 0.8 });

  return (
    <div className="bg-white">
      <section className="py-6 md:py-8 px-[5%]">
        <div className=" mx-auto">
          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className="space-y-8"
          >
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-4">
                <span className="text-black">PRIVACY </span>
                <span className="text-[#F2B22F]">POLICY</span>
              </h1>
            </div>

            <div className="space-y-8 text-black">
              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  Introduction
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  Mofai Foods (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) values your privacy and is committed to
                  protecting your personal information. This Privacy Policy
                  explains how we collect, use, store, disclose, and protect
                  your personal data when you interact with us, whether through
                  our website, mobile platforms, social media, or during
                  purchases and marketing activities. By accessing our services
                  or providing your personal information, you agree to the terms
                  of this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  2. Who We Are
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  Mofai Foods is a company specialising in Nigerian and African
                  food products. Our mission is to bring authentic African
                  flavours to the global market, with operations expanding
                  across the United Kingdom, United States, Canada, Brazil, and
                  other African countries.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  3. Information We Collect
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-2">
                      a. Personal Identification Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                      <li>
                        Name, contact details (email, phone number, address)
                      </li>
                      <li>Date of birth (where necessary)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-2">
                      b. Transactional Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                      <li>
                        Payment details (processed securely via third-party
                        providers)
                      </li>
                      <li>Purchase history and order preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-2">
                      c. Technical Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                      <li>
                        IP address, browser type, device identifiers, and
                        cookies
                      </li>
                      <li>
                        Log data related to visits and interactions on our
                        website
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-2">
                      d. Marketing and Communication Preferences
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                      <li>Feedback, inquiries, and responses to surveys</li>
                      <li>Preferences regarding marketing communications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  4. How We Use Your Information
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  We process your data for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>To process and deliver orders and manage payments</li>
                  <li>To respond to inquiries and provide customer support</li>
                  <li>
                    To improve our website, services, and product offerings
                  </li>
                  <li>
                    To send promotional materials, newsletters, and marketing
                    updates (with your consent)
                  </li>
                  <li>
                    To comply with legal obligations or enforce our terms of
                    service
                  </li>
                  <li>
                    To analyze market trends and improve marketing strategies
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  5. Legal Basis for Processing
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  Depending on your location, we process your personal data
                  based on one or more of the following legal grounds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>Consent (e.g., subscribing to newsletters)</li>
                  <li>Contractual necessity (e.g., fulfilling an order)</li>
                  <li>
                    Legal obligations (e.g., tax or accounting compliance)
                  </li>
                  <li>
                    Legitimate interests (e.g., improving services and
                    preventing fraud)
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  6. Data Sharing and Disclosure
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  We do not sell or rent your personal data. However, we may
                  share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>
                    Service providers who assist with payment processing,
                    logistics, and marketing
                  </li>
                  <li>Regulatory authorities where required by law</li>
                  <li>
                    Business partners and affiliates, under strict
                    confidentiality agreements, for service enhancement
                  </li>
                </ul>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  All third-party processors are bound by data protection
                  agreements ensuring compliance with the General Data
                  Protection Regulation (GDPR), Nigeria Data Protection
                  Regulation (NDPR), and other relevant privacy laws.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  7. International Data Transfers
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  Given our global operations, your personal data may be
                  transferred to and processed in countries outside your
                  jurisdiction. We ensure such transfers comply with applicable
                  data protection standards through appropriate safeguards, such
                  as Standard Contractual Clauses or equivalent mechanisms.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  8. Data Retention
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  We retain your personal data only for as long as necessary to
                  fulfil the purposes for which it was collected, including any
                  legal, accounting, or reporting requirements. Once data is no
                  longer needed, it will be securely deleted or anonymised.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  9. Data Security
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  We implement appropriate technical and organizational measures
                  to safeguard your information against unauthorized access,
                  alteration, disclosure, or destruction. These include
                  encryption, secure servers, and access controls.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  10. Your Rights
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the following
                  rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>To access and request copies of your data</li>
                  <li>To request correction or deletion of your data</li>
                  <li>
                    To object to or restrict certain processing activities
                  </li>
                  <li>To withdraw consent at any time (where applicable)</li>
                  <li>
                    To lodge a complaint with your local data protection
                    authority
                  </li>
                </ul>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  Requests can be made by contacting us via the details below.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  11. Cookies and Tracking Technologies
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  We use cookies and similar technologies to enhance your
                  browsing experience, analyze website performance, and
                  personalize content. You can adjust your cookie settings
                  through your browser at any time.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  12. Children&apos;s Privacy
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  Our services are not directed at children under the age of 16.
                  We do not knowingly collect personal information from
                  children. If we become aware of such a collection, we will
                  delete the data promptly.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  13. Changes to This Policy
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  We may update this Privacy Policy periodically to reflect
                  changes in legal, technical, or business developments. The
                  latest version will always be available on our website with
                  the updated effective date.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  14. Contact Us
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or how your data is handled, please
                  contact:
                </p>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed font-semibold">
                  Mofai Foods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
