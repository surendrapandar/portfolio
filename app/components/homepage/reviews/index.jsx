import React from "react";
import Image from "next/image";

const reviews = [
  {
    name: "John Smith",
    role: "Startup Founder",
    image: "/reviews/person1.jpg", // Add placeholder images
    review:
      "Working with them was a game-changer for our startup. They delivered our MVP ahead of schedule and the quality was exceptional.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "/reviews/person2.jpg",
    review:
      "Their technical expertise combined with business understanding helped us launch our product successfully. Great communication throughout!",
  },
  {
    name: "Mike Wilson",
    role: "Tech Entrepreneur",
    image: "/reviews/person3.jpg",
    review:
      "They not only built our platform but also helped us understand the technical aspects in simple terms. Highly recommended!",
  },
];

function Reviews() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          People Love Working With Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-white font-semibold">{review.name}</h3>
                  <p className="text-blue-400">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-300">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
