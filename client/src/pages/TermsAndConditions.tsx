import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms and Conditions | Elevate Growth Solutions"
        description="Terms and Conditions for Elevate Growth Solutions. Read our terms of service for using our marketing services and website."
      />
      <Navbar />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-primary mb-8" data-testid="text-terms-title">
            Terms and Conditions
          </h1>
          
          <div className="space-y-8 font-serif text-foreground">
            <p className="text-lg leading-relaxed">
              Please read these Terms and Conditions carefully before using Our Service.
            </p>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">1. Interpretation and Definitions</h2>
              
              <h3 className="font-display font-semibold text-xl text-foreground mb-3 mt-6">Interpretation</h3>
              <p className="text-lg leading-relaxed mb-4">
                Words with capitalized initials have meanings defined below. These definitions apply whether the terms appear in singular or plural.
              </p>

              <h3 className="font-display font-semibold text-xl text-foreground mb-3 mt-6">Definitions</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li><strong>Affiliate:</strong> Any entity that controls, is controlled by, or is under common control with a party.</li>
                <li><strong>Country:</strong> Refers to Utah, United States.</li>
                <li><strong>Company:</strong> Refers to Elevate Growth Solutions LLC, 7533 S Center View Ct Ste 210, West Jordan, UT 84084, also referred to as "the Company," "We," "Us," or "Our."</li>
                <li><strong>Device:</strong> Any device that can access the Service, such as a computer, cellphone, or tablet.</li>
                <li><strong>Service:</strong> Refers to the Website and any services (consulting, marketing, coaching, or related) provided by the Company.</li>
                <li><strong>Website:</strong> Refers to Elevate Growth Solutions, accessible at https://www.elevategrowth.solutions</li>
                <li><strong>You:</strong> The individual accessing or using the Service, or the legal entity on whose behalf that individual is acting.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">2. Acknowledgment</h2>
              <p className="text-lg leading-relaxed mb-3">
                These Terms govern the relationship between You and the Company and set out the rules and obligations related to the use of our Service.
              </p>
              <p className="text-lg leading-relaxed mb-3">
                By accessing or using the Service, You agree to be bound by these Terms. If You disagree with any part, please do not use the Service.
              </p>
              <p className="text-lg leading-relaxed mb-3">
                You represent that You are at least 18 years old. We do not permit individuals under 18 to use the Service.
              </p>
              <p className="text-lg leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy, which outlines how we collect and use Your personal data.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">3. Links to Other Websites</h2>
              <p className="text-lg leading-relaxed">
                Our Service may contain links to third-party websites or services not owned or controlled by the Company. We assume no responsibility for the content, policies, or practices of any third-party websites. You acknowledge that any use of third-party services is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">4. Termination</h2>
              <p className="text-lg leading-relaxed">
                We may terminate or suspend access to the Service immediately, without prior notice, for any reason, including a breach of these Terms. Upon termination, Your right to use the Service will cease immediately.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">5. Limitation of Liability</h2>
              <p className="text-lg leading-relaxed mb-3">
                To the maximum extent permitted by law, the Company and its suppliers shall not be liable for any indirect, incidental, special, or consequential damages—including loss of profits, data, or goodwill—arising from or related to the use of the Service.
              </p>
              <p className="text-lg leading-relaxed">
                In no event shall our total liability exceed $100 or the amount paid by You through the Service, whichever is greater.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">6. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
              <p className="text-lg leading-relaxed">
                The Service is provided "as is" and "as available," without warranties of any kind. We do not guarantee that the Service will be uninterrupted, error-free, or free of harmful components. Your use is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">7. Intellectual Property</h2>
              <p className="text-lg leading-relaxed">
                All content, designs, branding, and materials created by or for Elevate Growth Solutions—including logos, templates, blog posts, graphics, and marketing deliverables—are the intellectual property of the Company or its licensors. You may not reproduce, copy, modify, or distribute any of our materials without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">8. Payments and Refunds</h2>
              <p className="text-lg leading-relaxed mb-3">
                Fees for our services will be clearly outlined in proposals, invoices, or contracts. All payments are due as specified and are non-refundable unless otherwise agreed in writing. Failure to pay may result in delayed or suspended services.
              </p>
              <p className="text-lg leading-relaxed">
                We reserve the right to change our pricing and payment terms with prior notice.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">9. Indemnification</h2>
              <p className="text-lg leading-relaxed">
                You agree to indemnify and hold harmless Elevate Growth Solutions LLC and its affiliates, employees, and partners from any claims, damages, liabilities, or legal fees arising from your use of the Service, your violation of these Terms, or your infringement of any third-party rights.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">10. Governing Law</h2>
              <p className="text-lg leading-relaxed">
                These Terms are governed by the laws of the State of Utah, United States, without regard to conflict of laws principles. Use of the Service may be subject to other local, state, or international laws.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">11. Dispute Resolution</h2>
              <p className="text-lg leading-relaxed">
                If you have a concern or dispute, you agree to contact us first to attempt informal resolution. If that fails, legal action may be pursued under the jurisdiction of Utah courts.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">12. European Union (EU) Users</h2>
              <p className="text-lg leading-relaxed">
                If you are an EU resident, you are entitled to the protections of the country in which you reside, in addition to those listed here.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">13. U.S. Export Compliance</h2>
              <p className="text-lg leading-relaxed">
                You represent and warrant that you are not located in a country subject to U.S. government embargo or on a U.S. government restricted party list.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">14. Severability and Waiver</h2>
              <p className="text-lg leading-relaxed">
                If any part of these Terms is held invalid or unenforceable, the rest shall remain in effect. Our failure to enforce any right under these Terms is not a waiver of that right.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">15. Changes to These Terms</h2>
              <p className="text-lg leading-relaxed">
                We reserve the right to update or modify these Terms at any time. If changes are material, we will provide notice at least 30 days before they take effect. Continued use of the Service after the changes take effect means you accept the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-4">16. Contact Us</h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us by visiting our{" "}
                <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
