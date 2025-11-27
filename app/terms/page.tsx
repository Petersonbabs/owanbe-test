"use client";

import React from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function TermsPage() {
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
                <span className="text-black">TERMS AND </span>
                <span className="text-[#F2B22F]">CONDITIONS</span>
              </h1>
            </div>

            <div className="space-y-8 text-black">
              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  Welcome to Mofai Foods!
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  These Terms and Conditions (&quot;Terms&quot;) govern your use
                  of our website, online store, and related services. By
                  accessing or using our website, you agree to comply with and
                  be bound by these Terms. Please read them carefully before
                  using our services.
                </p>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  If you do not agree with any part of these Terms, please do
                  not use our website or make any purchase.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  1. About Us
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  Mofai Foods (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) is a company specialising in Nigerian and
                  African food products, dedicated to delivering authentic
                  flavours to global markets, including the United Kingdom,
                  United States, Canada, Brazil, and other African countries.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  2. Eligibility
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  By using our website, you confirm that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>
                    You are at least 18 years old or have legal capacity to
                    enter into binding contracts;
                  </li>
                  <li>
                    You agree to use our services in accordance with these Terms
                    and applicable laws.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  3. Use of Our Website
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  You agree to use the Mofai Foods website only for lawful
                  purposes. You must not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>Engage in fraudulent, abusive, or illegal activities;</li>
                  <li>
                    Interfere with or disrupt the website&apos;s functionality;
                  </li>
                  <li>
                    Copy, distribute, or modify any part of the website without
                    our prior written consent.
                  </li>
                </ul>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  We reserve the right to suspend or terminate your access to
                  our website for any violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  4. Product Information
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  We make every effort to display our products accurately,
                  including descriptions, pricing, and availability. However, we
                  do not guarantee that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>
                    The product descriptions, colours, or images are 100%
                    accurate;
                  </li>
                  <li>All products will always be in stock.</li>
                </ul>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  Prices and availability are subject to change without notice.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  5. Orders and Payment
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-2">
                      a. Placing Orders:
                    </h3>
                    <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                      When you place an order, you agree that all information
                      provided (name, address, payment details) is accurate and
                      complete.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-2">
                      b. Payment:
                    </h3>
                    <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                      We accept secure payments through trusted third-party
                      payment processors. By providing your payment details, you
                      authorize us (and our payment providers) to process your
                      payment for the total purchase amount.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-2">
                      c. Order Confirmation:
                    </h3>
                    <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                      After placing your order, you will receive an email
                      confirmation. This confirmation does not signify
                      acceptance of your order; it only acknowledges that we
                      received it. We reserve the right to accept or decline any
                      order at our discretion.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  6. Shipping and Delivery
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>
                    Delivery timelines may vary based on your location and
                    product availability.
                  </li>
                  <li>
                    We are not responsible for delays caused by customs, courier
                    services, or unforeseen circumstances.
                  </li>
                  <li>Risk of loss or damage passes to you upon delivery.</li>
                </ul>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  International orders may be subject to customs duties or
                  import taxes, which are the buyer&apos;s responsibility.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  7. Returns and Refunds
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  We aim for 100% customer satisfaction. If you receive a
                  defective or incorrect product:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>Notify us within 7 days of receiving your order.</li>
                  <li>
                    Products must be returned unused, unopened, and in their
                    original packaging.
                  </li>
                </ul>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  Certain perishable food items may not be eligible for return
                  or refund for health and safety reasons.
                </p>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  Refunds will be issued to your original payment method once
                  the return is verified. For full details, please refer to our
                  Refund and Returns Policy (available on our website).
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  8. Promotions and Discounts
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  Promotional offers, discount codes, and special deals are
                  subject to specific terms and may be withdrawn or modified at
                  any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  9. Intellectual Property
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  All content on the Mofai Foods website, including logos, text,
                  images, graphics, recipes, and designs is the intellectual
                  property of Mofai Foods or its licensors.
                </p>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  You may not copy, reproduce, distribute, or use any of this
                  material without prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  10. Limitation of Liability
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[0.9rem] md:text-[0.95rem] leading-relaxed ml-4">
                  <li>
                    Mofai Foods is not liable for any indirect, incidental, or
                    consequential damages arising from your use of our website
                    or products.
                  </li>
                  <li>
                    Our total liability for any claim shall not exceed the
                    amount you paid for the product in question.
                  </li>
                </ul>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  Some jurisdictions do not allow certain limitations, so these
                  exclusions may not apply to you.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  11. Indemnification
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  You agree to indemnify and hold harmless Mofai Foods, its
                  directors, employees, and affiliates from any claim, loss,
                  liability, or expense (including legal fees) arising from your
                  violation of these Terms or misuse of our services.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  12. Data Protection and Privacy
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  Your use of our website is also governed by our Privacy
                  Policy, which explains how we collect and process your
                  personal data. By using our website, you consent to the
                  collection and use of your data in accordance with that
                  policy.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  13. Third-Party Links
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  Our website may contain links to third-party websites or
                  services that are not operated by us. We are not responsible
                  for their content, privacy practices, or terms. You access
                  them at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  14. Termination
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  We may suspend or terminate your access to our services at any
                  time, with or without notice, if you violate these Terms or
                  engage in unlawful conduct.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  15. Governing Law
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  These Terms shall be governed by and construed in accordance
                  with the laws of the Federal Republic of Nigeria, without
                  prejudice to applicable international consumer protection laws
                  in the countries where Mofai Foods operates (including the UK,
                  US, Canada, and Brazil).
                </p>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mt-4">
                  Disputes shall be subject to the exclusive jurisdiction of the
                  courts in Nigeria, unless otherwise required by local consumer
                  protection laws.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  16. Changes to These Terms
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                  We may update these Terms periodically to reflect business,
                  legal, or technical changes. The updated Terms will be posted
                  on our website with the revised date. Continued use of our
                  services after changes take effect constitutes your acceptance
                  of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-4">
                  17. Contact Information
                </h2>
                <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed mb-4">
                  If you have any questions or concerns about these Terms,
                  please contact Mofai foods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
