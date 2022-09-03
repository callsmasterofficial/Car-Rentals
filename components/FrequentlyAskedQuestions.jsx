import React from "react";
import PrivacyStatement from '../components/PrivacyStatement'

function FrequentlyAskedQuestions() {
  return (
    <div className="border-2 rounded mb-4">
        <div className="p-4">
      <h1 className="text-xl font-bold ">frequently asked Questions</h1>
      <p className="my-3">
        Use the search functio or browse the site to find an answer to your
        question.
      </p>
      <p className="my-1">Begin by selecting a help topic from the list</p>
      <div className="border-2 rounded  border-black  w-100%">
        <select className="select-option p-2 hover:cursor-pointer">
          <option value="volvo">Most Popular</option>
          <option value="saab">Driver Requirements & Responsibilities</option>
          <option value="opel">Fuel, Mileage & Travel Plans</option>
          <option value="audi">Insurance, Cover & Protection</option>
          <option value="audi">Optional Extras</option>
          <option value="audi">Payment, Fees & Confirmation</option>
          <option value="audi">Changing Your Booking</option>
          <option value="audi">Picking-up & Dropping-off</option>
          <option value="audi">After Your Rental</option>
          <option value="audi">Account & Sign In</option>

        </select>
      </div>
      </div>

      <div>
      <PrivacyStatement/>

      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
