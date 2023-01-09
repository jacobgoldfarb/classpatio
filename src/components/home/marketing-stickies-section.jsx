const stickiesContent = [
    {
        title: "CREATIVE STIMULATION",
        body: "Not only are extracurriculars a good way to stand build lifelong skills, they can also help stimulate a child's brain and provide a thirst for learning.",
        rotation: "rotate-3",
        backgroundColor: "bg-purple-400"

    },
    {
        title: "VIRTUAL FRIENDS",
        body: "Let’s be honest, making friends can be hard, but one of the easiest ways to make friends is through extracurricular activities!",
        rotation: "-rotate-3",
        backgroundColor: "bg-rose-400"

    },
    {
        title: "COLLABORATIVE LEARNING",
        body: "When you participate in extracurricular activities, you’ll get the opportunity to explore a range of interests and unlock passions you never knew you had!",
        rotation: "rotate-2",
        backgroundColor: "bg-indigo-500"

    }
]

export default function MarketingStickiesSection() {
    return (
    <div>
        <div className="flex flex-row justify-center -mb-20">
            {
                stickiesContent.map(({title, body, rotation, backgroundColor}, idx) => (
                    <MarketingSticky key={idx} title={title} body={body} rotation={rotation} backgroundColor={backgroundColor}/>
                ))
            }
        </div>
        <div className="text-white font-semibold text-2xl text-center
            mb-4 py-16
            bg-gradient-to-br from-blue-500 to-rose-700">
            Online art experiences have a lot to offer.
        </div>
    </div>
    )
}

function MarketingSticky({title, body, rotation, backgroundColor}) {
    return <div className={`flex flex-col w-72 mx-4 p-12 mb-12 -mx-2
        shadow-xl text-white transform transition ${backgroundColor} ${rotation}
        hover:rotate-0
        `}>
        <div className="text-xl font-bold mb-4">{title}</div>
        <div>
            {body}
        </div>
    </div>
}