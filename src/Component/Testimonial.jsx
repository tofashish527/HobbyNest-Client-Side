// import React from 'react';

// const Testimonial 

// = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Testimonial;


// Component/Testimonials.jsx
import { Slide } from 'react-awesome-reveal';

const testimonials = [
  {
    name: 'Sara M.',
    message: 'Joining the photography group completely changed my weekends. I found my creative side again!',
  },
  {
    name: 'Dev R.',
    message: 'The cooking community here is super friendly and helpful. I’ve learned more in 2 months than I did all year.',
  },
  {
    name: 'Lina K.',
    message: 'From gardening tips to book swaps, this platform connects hobbyists like never before.',
  },
  {
    name: 'Arjun P.',
    message: 'I’ve never felt more connected. The painting group jams are the best part of my week.',
  },
];

export default function Testimonial() {
  return (
    <div className="bg-gray-50 py-12 px-4 rounded-lg shadow-md max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Members Say</h2>

      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <Slide
            key={index}
            direction={index % 2 === 0 ? 'left' : 'right'}
            triggerOnce
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic">“{testimonial.message}”</p>
              <p className="text-right mt-4 font-semibold text-blue-600">— {testimonial.name}</p>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}
