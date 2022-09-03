import React from "react";
import Accordion2 from "./Accordian2";
import Accordion from "./Accordion";


function FrequentlyAccordian() {
  const accordionData = [
    {
      title: "What do I need to hire a car?",
      content: `To book your car, all you need is a credit or debit card. When you pick the car up, you'll need:
      Your voucher / eVoucher, to show that you've paid for the car.
      The main driver's credit / debit card, with enough available funds for the car's deposit.
      Each driver's full, valid driving licence, which they've held for at least 12 months (often 24).
      Your passport and any other ID the car hire company needs to see.`,
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

  const accordionData2 = [
    {
      title: "Related Searches",
      item1: "item 1",
      item2: "item 2",
      item3: "item 3",
      item4: "item 4",
      item5: "item 5",
      item6: "item 6",
      item7: "item 7",
      item8: "item 8",
      item9: "item 9",
      item10: "item 10",
    },
    {
      title: "Popular Destinations",
      item1: "item 1",
      item2: "item 2",
      item3: "item 3",
      item4: "item 4",
      item5: "item 5",
      item6: "item 6",
      item7: "item 7",
      item8: "item 8",
      item9: "item 9",
      item10: "item 10",
    },
    {
      title: "Airports",
      item1: "item 1",
      item2: "item 2",
      item3: "item 3",
      item4: "item 4",
      item5: "item 5",
      item6: "item 6",
      item7: "item 7",
      item8: "item 8",
      item9: "item 9",
      item10: "item 10",
    },
    {
      title: "Car Hire Companies",
      item1: "item 1",
      item2: "item 2",
      item3: "item 3",
      item4: "item 4",
      item5: "item 5",
      item6: "item 6",
      item7: "item 7",
      item8: "item 8",
      item9: "item 9",
      item10: "item 10",
    },
  ];

  return (
    <div className="grid grid-cols-4 mb-5 frequentlyAccordian w-[90%] mx-auto lg:w-[80%] mt-12 FrequentlyAccordian">
      <div className="col-span-2 mt-5 border border-gray-600 rounded-lg mb-auto lg:mr-6">
        <div className="m-3">
        <h1 className="font-bold p-3 divide-y">Frequently Asked Questions</h1>
        <div className="accordion  divide-y hover:cursor-pointer">
          {accordionData.map(({ title, content ,index}) => (
            <Accordion title={title} content={content} 
            key={`FrequentlyAccordian${index}`}/>
          ))}
        </div>
      </div>
      </div>
      <div className="col-span-2 mt-5 mb-auto border border-gray-600 rounded-lg lg:ml-6">
      <div className="m-3">
      <h1 className="font-bold m-4 divide-y p-3">Additional Information</h1>
        <div className="accordion  divide-y hover:cursor-pointer">
          {accordionData2.map(({ title, item1, item2, item3,item4,item5,item6,item7,item8,item9,item10 ,index}) => (
            <Accordion2 title={title} item1={item1} item2={item2} item3={item3} item4={item4} item5={item5} item6={item6} item7={item7} item8={item8} item9={item9} item10={item10} key={`FrequentlyAccordian2${index}`} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAccordian;
