import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  const { name, budget_name, card_type, expiry, limit, status } = card;

  return (
    <div className="card rounded-lg shadow-2xl border-2 border-gray-400">
      <div>
        <h1 className="text-2xl text-gray-950">{name}</h1>
        <div className="flex  items-center gap-4">
          <h1 className="text-[14px] text-gray-400">{budget_name}</h1>
          <div className="h-1 w-1 rounded-full bg-slate-400 " />
          <h1 className="text-[14px] text-gray-400">{card_type}</h1>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="text-[14px] text-gray-400">value</div>
        <div className="text-[14px] text-gray-400">Month</div>
        <div className="text-[14px] text-gray-400">Expiry</div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-[14px] text-gray-900">
          {card.spent.value} {card.spent.currency}
        </div>
        <div className="text-[14px] text-gray-900">Monthly</div>
        <div className="text-[14px] text-gray-900">{expiry}</div>
      </div>

      <div className="h-2 w-60border-2 border-gray-950 bg-red-800 mt-2 rounded-xl relative " />
      <div className="h-2 w-36 border-1 border-blue-950 bg-blue-800 mt-2 rounded-xl absolute top-[132px] left-[137px] " />

      <div className="flex   items-center justify-between mt-3">
        <div className="h-1 w-1 rounded-full bg-red-950 mt-1" />
        <h1 className="ml-[-150px]">spent</h1>
        <h1>
          {card.spent.value} {card.spent.currency}
        </h1>
      </div>

      <div className="flex   items-center justify-between mt-2">
        <div className="h-1 w-1 rounded-full bg-blue-950 mt-1" />
        <h1 className="ml-[-135px]">Balance</h1>
        <h1>
          {card.spent.value} {card.spent.currency}
        </h1>
      </div>
      <div className="status ml-2">
        <span className="text-gray-950">status</span> : {status}
      </div>
    </div>
  );
};

export default Card;
