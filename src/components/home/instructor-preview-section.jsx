
const instructors = [
    {
        name: "Raffi Anderian",
        description: "Raffi Anderian is an artist and illustrator, best known for his award-winning artwork for the Toronto Star Newspaper. Raffi has received dozens of national and international awards. Book one of their classes here.",
        profile_picture_url: ""
    },
    {
        name: "Elana Yim",
        description: "Elena Yim was born in Lima, Peru. She graduated from OCAD in the Drawing and Painting Department, participating in the Florence Off-Campus Program in her last year, and has also received a BFA Honours in Art Education from Concordia University. After her studies, she painted props for a glow in the dark mini-golf company, The Putting Edge, and worked on murals and set design for the Phoenix Concert Theatre. Book one of their classes here.",
        profile_picture_url: ""
    },
]

export default function InstructorPreviewSection() {
    return (
        <>
            <header className="font-header text-center text-3xl mt-10">
                Meet some of our instructors
            </header>
            <div className="mx-20 mt-8">
                {
                    instructors.map((instructor) => (
                        <div className="flex flex-col my-10">
                            <div className="font-semibold">
                                {instructor.name}
                            </div>
                            <div className="mt-4 font-light">
                                {instructor.description}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}