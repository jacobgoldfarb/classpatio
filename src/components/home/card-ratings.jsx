import RatingDots from '../util/rating-dots'

export default function CardRatings({ratings}) {
    return (
        <div className="flex flex-col ml-3 mb-3">
            <div className="flex flex-row">
                <div>Educational</div>
                <RatingDots numFilled={ratings.educational}/>
            </div>
            <div className="flex flex-row">
                <div>Difficulty</div>
                <RatingDots numFilled={ratings.difficulty}/>
            </div>
            <div className="flex flex-row">
                <div>Fun</div>
                <RatingDots numFilled={ratings.fun}/>
            </div>
        </div>
    )
}