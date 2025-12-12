'use client';

import { useState } from 'react';

export default function ReviewSection() {
  const [showMore, setShowMore] = useState(false);

  const videos = [
    '/gifs/Beloved Moment (1).gif',
    '/gifs/Beloved Moment 3 (2).gif',
    '/gifs/Beloved Moment 3 (4).gif',
    '/gifs/Beloved Moment.gif',
    '/gifs/5.gif',
    '/gifs/6.gif',
    '/gifs/7.gif',
    '/gifs/8.gif',
    '/gifs/9.gif'
  ];

  const reviews = [
    { name: 'Sarah M.', location: 'USA', review: 'Seeing my grandmother\'s wedding photo come to life brought tears to my eyes. It\'s like stepping back in time.', rating: 5, image: '/reviews/1.png' },
    { name: 'John D.', location: 'UK', review: 'Amazing technology! The video quality is incredible and the movement looks so natural.', rating: 5, image: '/reviews/2.png' },
    { name: 'Maria L.', location: 'Spain', review: 'Perfect way to preserve family memories. My kids love watching their great-grandparents come alive.', rating: 4, image: '/reviews/3.png' },
    { name: 'David K.', location: 'Canada', review: 'The AI is incredibly realistic. Worth every penny for bringing old photos to life.', rating: 5, image: '/reviews/4.png' },
    { name: 'Emma R.', location: 'Australia', review: 'Emotional experience seeing my late father move again. Technology at its finest.', rating: 5, image: '/reviews/5.png' },
    { name: 'Alex P.', location: 'Germany', review: 'Quick delivery and amazing results. The whole family was amazed by the quality.', rating: 4, image: '/reviews/6.png' },
    { name: 'Lisa T.', location: 'France', review: 'Brought my wedding photo to life beautifully. Such a magical experience!', rating: 5, image: '/reviews/7.png' },
    { name: 'Mike S.', location: 'Italy', review: 'Professional quality results. The movement is so smooth and natural looking.', rating: 5, image: '/reviews/8.png' },
    { name: 'Anna B.', location: 'Netherlands', review: 'Easy to use and fantastic results. Highly recommend for anyone wanting to preserve memories.', rating: 4, image: '/reviews/9.png' }
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const totalCards = isMobile ? 6 : 9;
  const initialCards = isMobile ? 3 : 6;
  const displayedReviews = showMore ? reviews.slice(0, totalCards) : reviews.slice(0, initialCards);

  return (
    <section className="py-20" style={{ backgroundColor: 'lab(23 28.14 -32.02)' }} id="Reviewes">
      <div className="container mx-auto px-4">
        
        {/* Part 1 - Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Stories, Real Magic
          </h2>
          <p className="text-xl text-white/90 mb-4">
                            Where photos turn into stories, and stories turn into feelings.
          </p>
          <p className="text-white/80 max-w-3xl mx-auto">
            Join thousands of people who have experienced the joy of seeing their cherished photos come alive with natural, lifelike movement.
          </p>
          
        </div>

        {/* Part 2 - Review Cards */}
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-6 md:px-0 lg:grid-cols-3">
          {displayedReviews.map((review, index) => (
            <div key={index} className="flex h-fit flex-col items-start gap-4 rounded-2xl border border-white/15 bg-slate-900/30 p-6 backdrop-blur-xl">
              
              {/* Video */}
              <div className="pointer-events-none relative w-full">
                <div className="h-fit max-w-[450px]">
                  <div className="relative h-fit overflow-hidden rounded-[14px]">
                    <img 
                      src={videos[index % videos.length]} 
                      alt=""
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-2">
                <img 
                  className="flex-center size-[45px] flex-shrink-0 rounded-full bg-blue-600/20" 
                  src={review.image} 
                  alt="" 
                />
                <div>
                  <p className="font-semibold text-white opacity-80">{review.name}</p>
                  <div className="text-xs text-white opacity-50">{review.location}</div>
                </div>
              </div>

              {/* Review Text */}
              <div className="flex-grow">
                <p className="text-sm text-white opacity-80 md:text-base/7">
                  {review.review}
                </p>
              </div>

              {/* Rating */}
              <div className="mt-auto flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className={`text-xl ${star <= review.rating ? 'text-yellow-400' : 'text-gray-400'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-white opacity-80">{review.rating}/5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Part 3 - Load More/Show Less Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="bg-white text-purple-500 px-8 py-3 rounded-[50px] font-semibold hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-2 mx-auto"
          >
            <span>{showMore ? 'Show Less' : 'Load More'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMore ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}