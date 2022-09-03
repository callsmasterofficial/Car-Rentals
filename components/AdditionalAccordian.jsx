import React from 'react'
import Accordion2 from "./Accordian2";


function AdditionalAccordian() {
  return (
    <div className='w-[90%] mx-auto lg:w-[80%] mt-12 additionalAccordiaArea'>
              <div className="col-span-2 mt-5 border border-gray-600 rounded-lg lg:ml-6 mb-5">
      <div className="m-3">
      <h1 className="font-bold m-4 divide-y">Additional Information</h1>
        <div className="accordion m-4 divide-y">
          {accordionData2.map(({ title, item1, item2, item3,item4,item5,item6,item7,item8,item9,item10,ind }) => (
            <Accordion2 title={title} item1={item1} item2={item2} item3={item3} item4={item4} item5={item5} item6={item6} item7={item7} item8={item8} item9={item9} item10={item10} key={`accordian${ind}`}/>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalAccordian

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