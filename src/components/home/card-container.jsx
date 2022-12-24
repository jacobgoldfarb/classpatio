import React from "react";
import Card from "./card";
export function CardContainer({
  cardDetails,
  handleCardClick
}) {
  const colors = ['violet-300', 'amber-200', 'emerald-400', 'rose-300', 'sky-300', 'orange-300', 'red-300']

  const truncateLongDesc = (text) => {
    if (!text) { return text }
    const MAX_LEN = 200
    if (text.length > MAX_LEN) {
      text = text.substring(0, MAX_LEN) + "..."
    }
    return text
  }

  const schoolsLogoLookup = require('../../utils/school_thumbnail_lookup.json');


  return <div className={"w-full mx-auto mt-12 mb-10 items-center flex flex-wrap justify-center gap-14 "}>
    {cardDetails?.map((detail, index) => {
      const descriptionPreview = truncateLongDesc(detail.description);
      return <Card 
        key={index} 
        id={index} 
        index={index} 
        programName={detail.programName} 
        instructorName={detail.instructorName} 
        descPreview={descriptionPreview} 
        thumbnailUrl={detail.thumbnailUrl} 
        topColor={colors[index % colors.length]} 
        handleLearnMore={handleCardClick} />;
    })}
  </div>;
}
