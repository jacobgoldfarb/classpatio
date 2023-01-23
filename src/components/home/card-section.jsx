import { CardContainer } from './card-container'

const cardDetails = [
    {
      classTitle: "Art Combo 1 (Painting and Drawing)",
      instructorName: "Elana Kim",
      description: "Children have a natural desire to create. Our Art Combo 1 class is designed to help the youngest students combine that innate creativity with the basic principles of art. In this class, children jump into the process of creation, learn how to utilize art as a method of communication, and get hands-on experience with painting and drawing.",
      thumbnailUrl: "https://clazoo-storage.s3.us-east-2.amazonaws.com/se3mwc7pvafl6abhrhqymuh6d0r3?X-Amz-Expires=86400",
      instructorThumbnailUrl: "https://clazoo-storage.s3.us-east-2.amazonaws.com/yu7ozen9r3qt99vituj1z6a8x93h?X-Amz-Expires=86400",
      classRatings: {
        educational: 5,
        fun: 5,
        difficulty: 2,
      }
    },
    {
      classTitle: "Art",
      instructorName: "Elana Kim",
      description: "This is art class",
      thumbnailUrl: "https://clazoo-storage.s3.us-east-2.amazonaws.com/bd4gonwnzj1uhsrnvl0soohldfjf?X-Amz-Expires=86400",
      instructorThumbnailUrl: "https://clazoo-storage.s3.us-east-2.amazonaws.com/yu7ozen9r3qt99vituj1z6a8x93h?X-Amz-Expires=86400",
      classRatings: {
        educational: 5,
        fun: 5,
        difficulty: 2,
      }
    },
    {
      classTitle: "Art II",
      instructorName: "Elana Kim",
      description: "This is art class",
      thumbnailUrl: "https://clazoo-storage.s3.us-east-2.amazonaws.com/5nc34r5pjdanyfu6wc0eh1kfab98?X-Amz-Expires=86400",
      instructorThumbnailUrl: "https://clazoo-storage.s3.us-east-2.amazonaws.com/yu7ozen9r3qt99vituj1z6a8x93h?X-Amz-Expires=86400",
      classRatings: {
        educational: 5,
        fun: 5,
        difficulty: 2,
      }
    },
    
    
  ]

export default function CardSection({clickedCard}) {
    return (
      <div className="py-20 bg-gradient-to-br from-blue-500 to-rose-700 text-center pt-20">
      <header className="font-header text-white text-3xl mx-5 mt-10 font-light">
        <div>Introducing <span className="font-bold">good screen time.</span></div>
        <div className="w-1/2 mx-auto text-center text-xl mt-4 font-light">Replace games and nonsense with extracurricular activities that lead to higher levels of achievement.</div>
      </header>
      <CardContainer cardDetails={cardDetails} handleCardClick={clickedCard}/>
    </div>
    )
  }