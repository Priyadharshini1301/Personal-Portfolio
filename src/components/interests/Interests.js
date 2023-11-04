import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { interestsData } from "../../data/data";

const Interests = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black text-center"
    >
      <div className="text-center">
        <Title title={<span className="font-bold text-2xl">Interests</span>} des="Exploring new things" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {interestsData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Interests;

