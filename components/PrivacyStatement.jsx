import React from 'react'
import Accordion from "./Accordion";


function PrivacyStatement() {
    <div>PrivacyStatement</div>
    return (
        <div className=" mb-5 frequentlyAccordian">
          <div className="col-span-2 mt-5  mb-auto lg:mr-6">
            <div className="m-3">
            <h1 className="font-bold p-3 divide-y">Frequently Asked Questions</h1>
            <div className="accordion  divide-y border rounded hover:cursor-pointer">
              {accordionData.map(({ title, content ,ind}) => (
                <Accordion title={title} content={content} key={`PrivacyStatement${ind}`} />
              ))}
            </div>
          </div>
          </div>
        </div>
      );
  
}

export default PrivacyStatement

const accordionData = [
    {
      title: "Privacy Statement",
      content: `First things first – your privacy is important to us. That might be the kind of thing all these notices say, but we mean it. You place your trust in us by using Rentalcars.com services and we value that trust. That means we’re committed to protecting and safeguarding any personal data you give us. We act in our customers’ best interest and we are transparent about the processing of your personal data.
      This document describes how we use and process your personal data, provided in a readable and transparent manner. It also tells you what rights you can exercise in relation to your personal data (such as the right to object) and how you can contact us. Please also read our `,
    },
    {
      title: "How old do I have to be to rent a car?",
      content: `For most car hire companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70, you might have to pay an additional fee.`,
    },
    {
      title: "Can I book a hire car for someone else?",
      content: `Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation.`,
    },
    {
      title: "How do I find the cheapest car hire deal?",
      content: `We work with all the major international car hire brands (and lots of smaller local companies) to bring you a huge choice of cars at the very best prices. That's how we can find you cheap car hire deals at over 60,000 locations worldwide. To compare prices and find your ideal car at an unbeatable price, just use our search form.`,
    },
    {
      title: "What should I look for when I'm choosing a car?",
      content: `Space: You'll enjoy your rental far more if you choose a car with plenty of room for your passengers and luggage.
      Fuel policy: Not planning on driving much? A Like for like fuel policy can save you a lot of money.
      Location: You can't beat an 'on-airport' pick-up for convenience, but an 'off-airport' pick-up with a shuttle bus can be much cheaper.`,
    },
    {
      title: "Are all fees included in the rental price?",
      content: `The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes, airport surcharges and any road fees. You'll pay for any ‘extras' when you pick your car up, along with any young driver, additional driver or one-way fees – but we'll explain any additional costs before you book your car (and taking your own child seats or GPS can be an easy way to reduce your costs). For more details on what's included, just check the Ts&Cs of any car you're looking at.`,
    },
  ];