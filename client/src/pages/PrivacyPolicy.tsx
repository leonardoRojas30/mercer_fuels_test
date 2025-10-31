import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Lock, Eye, Database, UserCheck, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Privacy Policy - Mercer Fuels | Your Privacy & Data Protection</title>
        <meta name="description" content="Learn how Mercer Fuels collects, uses, and protects your personal information. Our privacy policy details our commitment to safeguarding your data and privacy." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/90">
              Your privacy and personal information protection
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">MERCER FUELS LIMITED - PRIVACY POLICY</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p className="text-muted-foreground">
                  Last Updated: January 2025
                </p>
              </CardContent>
            </Card>

            {/* 1. Introduction */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  1. Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  At Mercer Fuels Limited ("Mercer Fuels") we value and respect your privacy and personal information. The "Privacy Policy" that follows is intended to summarize what personal information we collect, and how we use, disclose and safeguard this information.
                </p>
                <p>
                  As specified in section 8 of our website Terms of Use, your access and use of our website constitute acceptance of our Privacy Policy and the terms herein. If you do not agree with any of the Privacy Policy terms herein, please refrain from using/accessing our website and providing us with personal/sensitive information.
                </p>
                <p>
                  Should you require clarification, please contact us for further information (see section 7 below).
                </p>
              </CardContent>
            </Card>

            {/* 2. Future Amendments */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  2. Future Amendments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We reserve the right to modify this Privacy Policy at any time with or without further modification to the Terms of Use. However, when amendments to the Privacy Policy are formalized, we will notify customers via our website and/or via email.
                </p>
                <p>
                  To be clear, your continued use of the website after any such changes would constitute an acceptance of the revised Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* 3. Collecting Personal Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  3. Collecting Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Personal information is information that can uniquely identify an individual ("Personal Information"). This may include your full name, contact information including your email address and phone number, your residential or commercial address, your bank account and credit card information, as well as any other Personal Information that you may provide.
                </p>
                <p>
                  Mercer Fuels receives this type of information when you voluntarily provide it in person, via our website, over the phone or via another form of correspondence during purchases or otherwise, or when you register for a product or service.
                </p>
                <p>
                  Using our third party software, we also automatically collect technological information including, but not limited to, your domain name, IP address, cookie data, operating system, search queries you've entered on our website, the pages you've visited on our website, and the browser you've used to do so.
                </p>
                <p>
                  This information allows us to better meet and anticipate the needs of our customer base and improve the overall management of our company and performance of our website. To be clear, the amount and type of information that your web browser provides depends on your own browser's settings. Please refer to your browser's instructions if you would like to change or restrict this permission.
                </p>
                <p>
                  Ultimately, the type of Personal Information we collect in a given circumstance depends on a variety of factors, including the product you've purchased, payment considerations, and the service you've requested.
                </p>
              </CardContent>
            </Card>

            {/* 4. Our Use and Disclosure of Personal Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  4. Our Use and Disclosure of Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Personal Information that we collect may be used for the purposes for which it was originally collected, in accordance with this Privacy Policy and governing law, or for other purposes to which you knowingly assent.
                </p>
                <p>
                  This includes, but is not limited to, disclosing your Personal Information internally within our company or to third party service providers and contractors where the service, product purchase, shipping or installation, promotional activity, or customer request/query requires it.
                </p>
                <p>
                  We may also disclose your Personal Information in order to carry out any other purpose required and legally authorized or to which you knowingly consent. We reserve the right to transfer Personal Information in the event that we merge with or are acquired by another entity.
                </p>
              </CardContent>
            </Card>

            {/* 5. Protection of Personal Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  5. Protection of Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  At Mercer Fuels, we consider the security and protection of your Personal Information to be paramount. To protect it, we maintain physical, organizational and technological safeguards appropriate in the circumstances.
                </p>
                <p>
                  This means that the mechanism or approach we employ to safeguard your Personal Information is based on the level of sensitivity of the information in question and our organizational construct for the specific service or product.
                </p>
                <p>
                  Personal Information may only be accessed by persons within our organization who need this information in order to provide you with the services you require or have requested.
                </p>
                <p>
                  As per section 4 above, we provide third party service providers and contractors with your Personal Information where warranted, but we only provide as much information as is necessary for them to complete their contracted task.
                </p>
                <p>
                  Further, we retain Personal Information only as long as is required given the service request or purchase in question, or as is required under statutory law. We remove and securely destroy Personal Information once it is no longer needed by our company.
                </p>
              </CardContent>
            </Card>

            {/* 6. Access and Correction */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  6. Access and Correction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  You have the right to access your Personal Information that you have provided us. Further, you may request a correction should you believe there is an inaccuracy or error in the Personal Information that we have collected.
                </p>
                <p>
                  To do either, please contact us (see section 7 below).
                </p>
              </CardContent>
            </Card>

            {/* 7. Contact Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  7. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Should you have any questions, comments or feedback in relation to this Privacy Policy, including the terms described herein, please contact us at:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Email: <a href="mailto:contact@mercerfuels.com" className="text-primary hover:underline">contact@mercerfuels.com</a></li>
                  <li>Sydney: <a href="tel:902-539-4242" className="text-primary hover:underline">902-539-4242</a></li>
                  <li>Glace Bay: <a href="tel:902-849-2677" className="text-primary hover:underline">902-849-2677</a></li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
