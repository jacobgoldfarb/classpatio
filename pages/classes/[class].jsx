import Navbar from '../../src/components/navbar'
import RatingDots from '../../src/components/util/rating-dots'
import { Carousel } from 'react-responsive-carousel';

const classInfo = {
    name: "Art Combo 1 (Painting and Drawing)",
    byLine: "by Elena Yim",
    description: "Children have a natural desire to create. Our Art Combo 1 class is designed to help the youngest students combine that innate creativity with the basic principles of art. In this class, children jump into the process of creation, learn how to utilize art as a method of communication, and get hands-on experience with painting and drawing.",
    instructorBlurb: "Elena Yim was born in Lima, Peru. She graduated from OCAD in the Drawing and Painting Department, participating in the Florence Off-Campus Program in her last year, and has also received a BFA Honours in Art Education from Concordia University. After her studies, she painted props for a glow in the dark mini-golf company, The Putting Edge, and worked on murals and set design for the Phoenix Concert Theatre. Her own personal artwork is inspired by the body: photomicrographic images of microorganisms that inhabit the body, the graceful movements of the body, and the connection and interdependence between body and nature. Her practice involves sketching, collecting, and photography. She mainly paints with oils, acrylics, and inks, but also experiments with materials such as fibres, wires, and found objects. Elena finds pleasure in teaching children and believes a child’s self confidence develops through stimulation, trust, exploration, and dialogue. In her opinion, art making is not only about pretty pictures, but thinking outside the box, delving into ones imagination, and learning throughout the creative process. It is a skill to be used in everyday life. Her love for art and her interest in working with children lead her to Art One Academy, a great combination of both interests.",
}

export default function Class() {
    return (
    <>
        <Navbar/>
        <div className="py-20 pt-20 h-max w-screen
        bg-gradient-to-br from-blue-600 to-rose-600 
        ">
            <div className="w-5/6 bg-white mt-20 mx-auto rounded-xl p-8"> 
                <IntroSection/>
                <hr/>
                <SpecificationSection/>
                <hr/>
                <MeetTheInstructorSection/>
                <hr/>
                <ReviewsSection/>
                <hr/>
                <GallerySection/>
            </div>

        </div>
    </>
    )
}

function IntroSection() {
    return (
    <div className="my-6 flex flex-row">
        <div className="mr-8">
            <div className="text-xl font-bold">{classInfo.name}</div>
            <div>{classInfo.byLine}</div>
            <div className="mt-4">{classInfo.description}</div>
        </div>
        <div className="w-5/6 flex-auto">
            <div className="min-w-max text-white text-center font-bold bg-green-600 rounded-3xl p-4 mb-4 cursor-pointer transition transform hover:scale-110 hover:shake">Get Registration Details</div>
            <div><span className="font-bold">When: </span>Mondays and Wednesdays at 5:30pm</div>
            <div><span className="font-bold">Who: </span>Children ages 4-6</div>
            <div><span className="font-bold">Group size: </span>6 - 10</div>
            <div><span className="font-bold">Cost: </span>$22 CAD per class or $160 CAD per 10 class package</div>
        </div>
    </div>
    )
}

function SpecificationSection() {
    return (
    <div className="my-6 flex flex-row">
        <div className="mx-8">
            <div className="text-gray-400">Certifications</div>
            <div>
                <div className="font-bold text-sm">
                    <div className="my-4">APPROVED BY CLASS PATIO EXPERTS</div>
                    <div className="my-4">APPROVED BY 10+ PARENTS</div>
                    <div className="my-4">NOT YET APPROVED BY 10+ KIDS</div>
                </div>
                
            </div>
        </div>
        <div className="mx-8">
            <div className="text-gray-400">Classification</div>
            <div className="my-4">
                <div className="flex my-2 items-center">
                    <div className="mr-6">Education</div>
                    <RatingDots numFilled={4}/>
                </div>
                <div className="flex my-2 items-center">
                    <div>Difficulty</div>
                    <RatingDots numFilled={3}/>
                </div>
                <div className="flex my-2 items-center">
                    <div>Fun</div>
                    <RatingDots numFilled={5}/>
                </div>
            </div>
        </div>
        <div className="mx-8">
            <div className="text-gray-400">Tags</div>
        </div>
    </div>
    )
}

function MeetTheInstructorSection() {
    return (
    <div className="my-6">
        <div className="text-xl font-bold">Meet the Instructor</div>
        <div className="mt-4">{classInfo.instructorBlurb}</div>
    </div>
    )
}

function ReviewsSection() {
    return (
    <div className="my-6">
        <div className="text-xl font-bold">Feedback & Testemonials</div>
    </div>
    )
}

function GallerySection() {
    return (
    <div className="my-6">
        <div className="text-xl font-bold">Gallery</div>
        <Carousel>
            <div key="img1">
                <img src="https://clazoo-storage.s3.us-east-2.amazonaws.com/se3mwc7pvafl6abhrhqymuh6d0r3?X-Amz-Expires=86400" />
                <p>Legend 1</p>
            </div>
            <div key="img2">
                <img src="https://clazoo-storage.s3.us-east-2.amazonaws.com/5nc34r5pjdanyfu6wc0eh1kfab98?X-Amz-Expires=86400" />
                <p>Legend 2</p>
            </div>
        </Carousel>
    </div>
    )
}