
export default function RatingDots({numFilled}) {
    const emptyDots = 5 - numFilled
    return (
        <div className="flex flex-row ml-auto mr-24">
            {[...Array(numFilled).keys()].map((idx) => (
                <div key={idx} className='bg-violet-700 w-3 h-3 rounded-xl mx-0.5 transform hover:scale-125'/>
            ))}
            {[...Array(emptyDots).keys()].map((idx) => (
                <div key={idx} className='bg-gray-200 w-3 h-3 rounded-xl mx-0.5'/>
            ))}
        </div>
    )
}