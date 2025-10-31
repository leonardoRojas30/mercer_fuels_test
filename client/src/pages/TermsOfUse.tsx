import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertCircle, Link as LinkIcon, Bug, Copyright, Lock, Scale, Phone } from "lucide-react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Terms of Use - Mercer Fuels | Legal Terms & Conditions</title>
        <meta name="description" content="Read Mercer Fuels' Terms of Use. Learn about our website usage policies, liability limitations, and legal terms for our heating oil services in Cape Breton, Nova Scotia." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
            <p className="text-lg text-white/90">
              Please read our website terms and conditions carefully
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
                <CardTitle className="text-2xl font-bold">MERCERFUELS.COM - TERMS OF USE</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p className="text-muted-foreground">
                  Last Updated: January 2025
                </p>
              </CardContent>
            </Card>

            {/* 1. Legal Notice */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  1. Legal Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The information that follows comprises the terms of use of the Mercer Fuels Limited ("Mercer Fuels") website: mercerfuels.com. Please read carefully as your access and use of our website are subject to these terms and conditions.
                </p>
                <p>
                  Should you not agree with any of the terms herein, please do not access or use our website; otherwise, your use and access signal your acceptance of these terms. Should you have any questions concerning the terms herein, please contact us directly via email or phone (see section 10 below).
                </p>
                <p>
                  This website is not intended for use by individuals who are under the age of 19. Use of this website is void where prohibited by law.
                </p>
              </CardContent>
            </Card>

            {/* 2. Information Accuracy */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  2. Information Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  For your convenience, we provide a range of information on our website. While we strive to ensure accuracy and reliability, we cannot guarantee that all information provided therein is accurate, complete or current at the time of your use/access.
                </p>
                <p>
                  Further, information on our website does not constitute legal, financial and/or insurance advice. You are relying on this information at your own risk. From time to time, information on our website, such as prices and policy terms and conditions among other matters, may change without prior notice.
                </p>
                <p>
                  Please contact us directly for the latest information regarding our products and services (see section 10 below).
                </p>
              </CardContent>
            </Card>

            {/* 3. Limitation of Liability */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  3. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Mercer Fuels and its third party suppliers, service providers and contractors are not liable for any damages whatsoever suffered, either directly or indirectly, as a result of your ability or inability to use our website and access the content therein.
                </p>
                <p>
                  It is your responsibility to ensure that you have provided Mercer Fuels with the correct account, online order and/or service/delivery address information when using our website. Mercer Fuels and its third party suppliers, service providers and contractors are not liable for any damage whatsoever suffered that is related to your provision of incorrect information via our website.
                </p>
              </CardContent>
            </Card>

            {/* 4. Product and Service Availability */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  4. Product and Service Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our products and services are only available in parts of Cape Breton County, Nova Scotia. It is important to recognize that additional terms and conditions apply to purchases of products and services available on our website.
                </p>
                <p>
                  Please contact us if you are uncertain about availability in your area (see section 10 below).
                </p>
              </CardContent>
            </Card>

            {/* 5. Hyperlinks */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-primary" />
                  5. Hyperlinks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Any hyperlinks on our website are provided therein for your convenience only. This does not imply an endorsement thereof or an affiliation therewith. Mercer Fuels has no control over the content provided by any linked/third party site as each remains the sole responsibility of its owner/operator.
                </p>
              </CardContent>
            </Card>

            {/* 6. Viruses and Malware */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5 text-primary" />
                  6. Viruses and Malware
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  While Mercer Fuels makes reasonable efforts to ensure that our website is free from viruses and malware, we cannot guarantee it. Should you encounter such an issue while accessing our site, you remain responsible for any costs associated with related service or repairs.
                </p>
              </CardContent>
            </Card>

            {/* 7. Intellectual Property */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Copyright className="h-5 w-5 text-primary" />
                  7. Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Mercer's, Mercer Fuels, mercerfuels.com, and related words and logos, as well as the names of other products or services of Mercer Fuels, are trade names, trade-marks or registered trade-marks of Mercer Fuels Limited.
                </p>
                <p>
                  The names of other companies, products or services described on our website may similarly be subject to trade-mark protection. Any unauthorized use of these trade names or trade-marks is strictly prohibited.
                </p>
                <p className="font-semibold">
                  All contents of this website are Copyright © 2025, Mercer Fuels or its licensors. All rights reserved.
                </p>
              </CardContent>
            </Card>

            {/* 8. Privacy Policy/Use of Personal Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  8. Privacy Policy/Use of Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By using and accessing our website, you are deemed to have read and accepted Mercer Fuels' Privacy Policy. You are also deemed to have found the terms therein reasonable.
                </p>
                <p>
                  By accepting the terms of the Privacy Policy, you are also consenting to the collection, use and disclosure of personal information by Mercer Fuels or its agents/representatives in accordance with said Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* 9. Governing Law */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  9. Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The laws of the Province of Nova Scotia, along with applicable federal laws of Canada, govern our provision of this website and its contents, as well as your use of the website and its contents.
                </p>
                <p>
                  The courts of the Province of Nova Scotia will maintain non-exclusive jurisdiction over any legal disputes relating to this website.
                </p>
              </CardContent>
            </Card>

            {/* 10. Contact Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  10. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Should you have any questions, comments or feedback in relation to this website and your use thereof, including the terms described herein, please contact us at:
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
