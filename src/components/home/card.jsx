import CardRatings from './card-ratings'

export default function Card({classTitle, instructorName, descPreview, thumbnailUrl, handleLearnMore, id, index, classRatings}) {

    const learnMorePrompt = "View Booking Options"

    function getImage() {
        return <div 
        className="
            rounded-t-xl 
            w-full 
            h-28 
            bg-cover 
            bg-top 
            bg-no-repeat
        " 
        style={{
            backgroundImage: `url(${thumbnailUrl})`,
        }} />
    }

  return (
      <div 
        className={`
            min-w-1/6 w-1/6 max-w-1/6 bg-white shadow-lg
            rounded-xl text-sm text-left flex flex-col cursor-pointer 
            transition transform hover:scale-105 
        `} 
        onClick={() => handleLearnMore(index)}
        style={{
            minHeight: "22rem",
            maxHeight: "22rem",
            minWidth: "20rem"
        }}
        >
        {getImage()}
        <hr className="mb-2"/>
        <div>
            <div className="font-medium mx-3">
                {classTitle} 
            </div>
            <div className='mr-auto text-left mt-1 px-3 font-light'>
               {`by ${instructorName}`}
            </div>
            <div className="m-3 text-sm font-light">
                {descPreview}
            </div>
            <CardRatings ratings={classRatings}/>
        </div>  
        <div className="
        rounded-lg 
        mt-auto mx-auto my-3  px-3 py-2
        w-3/4 cursor-pointer flex 
        transition transform hover:scale-105 
        items-center bg-indigo-700" onClick={() => handleLearnMore(id)}>
            <div className="mx-auto text-white">
                {learnMorePrompt} 
            </div>
        </div>
          
      </div>
  )
}

