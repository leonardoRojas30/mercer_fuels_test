import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Wrench, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Frequently Asked Questions - FAQ | Mercer Fuels</title>
        <meta name="description" content="Find answers to common questions about ordering oil, furnace maintenance, payment options, and more. Get 24/7 support at (902) 539-4242." />
        <meta name="keywords" content="heating oil FAQ, furnace questions, oil delivery Cape Breton, automatic delivery, furnace insurance, payment options" />
        <link rel="canonical" href="https://mercerfuels.com/faq" />
        
        <meta property="og:title" content="Frequently Asked Questions | Mercer Fuels" />
        <meta property="og:description" content="Get answers to your heating oil and furnace questions. 24/7 support available." />
        <meta property="og:url" content="https://mercerfuels.com/faq" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <HelpCircle className="w-16 h-16 mx-auto text-chart-2" />
            <h1 className="text-4xl md:text-5xl font-bold" data-testid="heading-faq">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Find answers to common questions about our services, or call us 24/7 at{" "}
              <a href="tel:902-539-4242" className="font-bold text-chart-2 hover:underline">
                (902) 539-4242
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Ordering Oil and Payment */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3" data-testid="heading-ordering">
                <Phone className="w-8 h-8 text-chart-2" />
                Ordering Oil and Payment
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="order-oil" data-testid="faq-order-oil">
                  <AccordionTrigger className="text-lg font-semibold">How do I order oil?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can order online at{" "}
                    <a href="/orderonline" className="text-chart-2 font-semibold hover:underline">
                      mercerfuels.com/orderonline
                    </a>
                    , even if it is your very first order! You can also call{" "}
                    <a href="tel:902-539-4242" className="text-chart-2 font-semibold hover:underline">
                      902-539-4242
                    </a>{" "}
                    24/7 to speak to a member of our team and place your order.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="minimum-order" data-testid="faq-minimum-order">
                  <AccordionTrigger className="text-lg font-semibold">What is the minimum oil order?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The minimum order is $250.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="automatic-delivery" data-testid="faq-automatic-delivery">
                  <AccordionTrigger className="text-lg font-semibold">What is automatic delivery?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Automatic delivery is hassle free home heating. Our driver will fill your oil tank periodically and make sure you never run out of oil! No need for you to ever check your tank or place an order!{" "}
                    <a href="/automatic-delivery" className="text-chart-2 font-semibold hover:underline">
                      Sign up for automatic delivery
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="budget-plans" data-testid="faq-budget-plans">
                  <AccordionTrigger className="text-lg font-semibold">How do the equal payment budget plans work?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    This plan is useful, because it helps you avoid big bills in the Winter, especially around the holidays! Equal payment budget plans start annually in September. Mercer Fuels will estimate your fuel costs for the year and divide it into 10 equal monthly payments. Your credit card or bank account on file will be charged the monthly payment from September to June. If there is a balance owing after the 10 months, we will contact you to make arrangements. If there is a credit, we can apply it to the next year's plan.{" "}
                    <a href="/budgetplan" className="text-chart-2 font-semibold hover:underline">
                      Sign up for an equal payment budget plan
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tank-fill-cost" data-testid="faq-tank-fill-cost">
                  <AccordionTrigger className="text-lg font-semibold">How much is it to fill an oil tank?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A standard sized oil tank is 910 Liters. Depending on the price per liter, you can calculate the cost.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="oil-price" data-testid="faq-oil-price">
                  <AccordionTrigger className="text-lg font-semibold">What is your oil price today?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The price of oil changes frequently. If you want to know today's price, give us a call at{" "}
                    <a href="tel:902-539-4242" className="text-chart-2 font-semibold hover:underline">
                      902-539-4242
                    </a>{" "}
                    or email{" "}
                    <a href="mailto:contact@mercerfuels.com" className="text-chart-2 font-semibold hover:underline">
                      contact@mercerfuels.com
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-methods" data-testid="faq-payment-methods">
                  <AccordionTrigger className="text-lg font-semibold">How can I pay for my oil?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can pay with a credit card online at{" "}
                    <a href="/billpayment" className="text-chart-2 font-semibold hover:underline">
                      mercerfuels.com/billpayment
                    </a>
                    . You can send an e-transfer to{" "}
                    <a href="mailto:payments@mercerfuels.com" className="text-chart-2 font-semibold hover:underline">
                      payments@mercerfuels.com
                    </a>{" "}
                    (Please include your address in the memo). You can pay with online banking by adding Mercer Fuels Ltd. as a Payee and use your 4 digit account number. Finally, you can give cash to the delivery driver or visit one of our payment centers at 64 Brookland St in Sydney or at the Petro Canada Station in Glace Bay, 195 Reserve St!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-number" data-testid="faq-account-number">
                  <AccordionTrigger className="text-lg font-semibold">What is my account number?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Your account number is a number between 1 and 99999. The number appears on your delivery invoices and statements. For online banking payments, please use a 4 or 5 digit number i.e. if your account number is 27 or 27-1, use 0027. Do not include the number after the hyphen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="order-frequency" data-testid="faq-order-frequency">
                  <AccordionTrigger className="text-lg font-semibold">How often do I need to order oil?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Every home is different, so there is no straightforward answer. We recommend ordering oil at least once per month from October-April. If your hot water is heated by your furnace, you will need to make sure you have oil in the Spring and Summer months. The easiest option is to{" "}
                    <a href="/automatic-delivery" className="text-chart-2 font-semibold hover:underline">
                      sign up for automatic delivery
                    </a>
                    , and you won't need to think about it!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Furnace and Heating Equipment */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3" data-testid="heading-furnace">
                <Wrench className="w-8 h-8 text-chart-2" />
                Furnace and Heating Equipment
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="furnace-not-working" data-testid="faq-furnace-not-working">
                  <AccordionTrigger className="text-lg font-semibold">My furnace is not working, what should I do?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Before calling us, first check if you have oil. Secondly, make sure that the "Emergency Switch" (red lightswitch) was not switched off. If it is off, switch it on and your furnace should start. Thirdly, hit the red reset button on your furnace. Make sure to only do this once. If none of these steps fix your problem, you can call us 24/7 at{" "}
                    <a href="tel:902-539-4242" className="text-chart-2 font-semibold hover:underline">
                      902-539-4242
                    </a>{" "}
                    for help.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="bleed-furnace" data-testid="faq-bleed-furnace">
                  <AccordionTrigger className="text-lg font-semibold">How do I bleed my furnace?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can hire an insured technician to bleed your furnace by calling{" "}
                    <a href="tel:902-539-4242" className="text-chart-2 font-semibold hover:underline">
                      902-539-4242
                    </a>
                    . You can also try to do it yourself, there are many instructional videos on Youtube!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="furnace-insurance" data-testid="faq-furnace-insurance">
                  <AccordionTrigger className="text-lg font-semibold">What is furnace insurance?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Furnace Insurance is the best way to keep your furnace running smoothly and protect you from unexpected expenses! An annual furnace cleaning and inspection is included. This helps your furnace run efficiently, saving you on oil and increasing the lifespan of your furnace. As well, over 20 furnace components are covered!{" "}
                    <a href="/insurance" className="text-chart-2 font-semibold hover:underline">
                      Sign up for Furnace Insurance
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="clean-frequency" data-testid="faq-clean-frequency">
                  <AccordionTrigger className="text-lg font-semibold">How often should I clean my furnace?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We recommend cleaning your furnace annually. This will increase the lifespan of your furnace and reduce your oil consumption, saving you money in the long run!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cleaning-process" data-testid="faq-cleaning-process">
                  <AccordionTrigger className="text-lg font-semibold">What is involved in a furnace cleaning?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The insured technician will clean the nozzle, change the filter and inspect your furnace for any potential problems!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cleaning-cost" data-testid="faq-cleaning-cost">
                  <AccordionTrigger className="text-lg font-semibold">How much is a furnace cleaning?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Depending on the type of filter required, the price ranges from $140-$160.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tank-cost" data-testid="faq-tank-cost">
                  <AccordionTrigger className="text-lg font-semibold">How much are oil tanks?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-3">
                      Mercer Fuels offers flexible payment plans for double bottom steel oil tanks:
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li><strong>3-year inside tank:</strong> $94/month</li>
                      <li><strong>3-year outside tank:</strong> $110/month</li>
                      <li><strong>2-year inside tank:</strong> $129/month</li>
                      <li><strong>2-year outside tank:</strong> $150/month</li>
                    </ul>
                    <p>
                      All plans include certified installation, old tank removal, and all taxes. Fiberglass tanks and pay-in-full options are also available. Contact us at{" "}
                      <a href="tel:902-539-4242" className="text-chart-2 font-semibold hover:underline">
                        902-539-4242
                      </a>{" "}
                      for a custom quote.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tank-lifespan" data-testid="faq-tank-lifespan">
                  <AccordionTrigger className="text-lg font-semibold">How long do oil tanks last?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The steel oil tanks that Mercer Fuels installs come with a 25 year warranty. However, every insurance company has different requirements. Most insurance companies will not cover a tank for more than 15 years. It is best to call your home insurance company and find out how long they will cover you for.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="heating-equipment" data-testid="faq-heating-equipment">
                  <AccordionTrigger className="text-lg font-semibold">Do you sell furnaces and other heating equipment?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! We arrange for the installation of new furnaces, hot water heaters and all other oil heat related components. We offer 2-5 year payment plans on all installations as well!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="technicians" data-testid="faq-technicians">
                  <AccordionTrigger className="text-lg font-semibold">Who are your furnace technicians?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We hire local companies like Otto Strong Burner Service, Hickey and Lynk Oil Burner Service and more.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fiberglass-tank" data-testid="faq-fiberglass-tank">
                  <AccordionTrigger className="text-lg font-semibold">Is a fiberglass oil tank worth it?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Fiberglass oil tanks cost more money than steel tanks, but if your insurance company will cover a fiberglass tank for 10 or more extra years (compared to steel), it is economically more feasible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="water-heater-type" data-testid="faq-water-heater-type">
                  <AccordionTrigger className="text-lg font-semibold">How can I tell if my hot water heater is oil or electric?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You're standing in front of your water heater – now how do you tell if it's an electric or oil fired model? Start by looking for an access panel on the side of the water heater. If you remove it and see a blue flame, that's a pilot light, which only oil fired models have. Connected pipes are also indicators of oil, while an electric water heater will simply have a cord going into the top or side of the unit.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* The Company */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3" data-testid="heading-company">
                <Shield className="w-8 h-8 text-chart-2" />
                The Company
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="locally-owned" data-testid="faq-locally-owned">
                  <AccordionTrigger className="text-lg font-semibold">Are you 100% locally owned and operated?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Todd Mercer is a third generation owner, based in Sydney River. Mercer Fuels staff are from Sydney, Glace Bay, Coxheath, Reserve Mines, Whitney Pier, Dominion, Framboise, Bras D'Or and Birch Grove!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="office-location" data-testid="faq-office-location">
                  <AccordionTrigger className="text-lg font-semibold">Where is your office?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our main office is at 64 Brookland St. in Sydney, across from Hashem's Scrapyard. We also have a payment center in Glace Bay at Petro-Canada, 195 Reserve St.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="weekend-hours" data-testid="faq-weekend-hours">
                  <AccordionTrigger className="text-lg font-semibold">Are you open on the weekend?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our office is closed on the weekends, but our delivery drivers work on the weekends in the Winter months! You can call{" "}
                    <a href="tel:902-539-4242" className="text-chart-2 font-semibold hover:underline">
                      902-539-4242
                    </a>{" "}
                    24/7 to request a weekend order with our local staff and/or answering service.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phone-answering" data-testid="faq-phone-answering">
                  <AccordionTrigger className="text-lg font-semibold">Who answers your phones?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    During business hours our local office staff answer the phones. After hours, we have a locally based answering service taking your calls. You are always speaking with someone local when you call Mercer Fuels!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Other */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3" data-testid="heading-other">
                <HelpCircle className="w-8 h-8 text-chart-2" />
                Other
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="tv-draw" data-testid="faq-tv-draw">
                  <AccordionTrigger className="text-lg font-semibold">How does your TV draw work?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We give away a TV to one of our customers every month from November – March! If you receive oil from Mercer Fuels in a contest month (even if you are on automatic delivery), you are automatically entered in the draw.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="salvation-army" data-testid="faq-salvation-army">
                  <AccordionTrigger className="text-lg font-semibold">Do you deliver oil for the Salvation Army Heat Fund?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We do! Feel free to call us at{" "}
                    <a href="tel:902-539-4242" className="text-chart-2 font-semibold hover:underline">
                      902-539-4242
                    </a>{" "}
                    if you need help with your application.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="text-reminders" data-testid="faq-text-reminders">
                  <AccordionTrigger className="text-lg font-semibold">What are text message reminders?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    If you ever run out of oil or forget to clean your furnace, text message reminders will help. During the Winter months we can text you every 2 or 3 weeks to remind you to check your oil tank gauge and order oil if needed. We can also send you an annual reminder to book a furnace cleaning.{" "}
                    <a href="/textreminders" className="text-chart-2 font-semibold hover:underline">
                      Sign up for Mercer Fuels Text Message Reminders
                    </a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90">
              Our friendly team is here to help you 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild
                size="lg"
                variant="default"
                className="bg-chart-2 text-white font-bold shadow-lg border-0"
                data-testid="button-call-us"
              >
                <a href="tel:902-539-4242">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (902) 539-4242
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground font-bold"
                data-testid="button-become-customer"
              >
                <a href="/become-a-customer">
                  Become a Customer
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
