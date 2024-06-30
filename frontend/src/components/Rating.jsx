import React from 'react';

export default function Rating(prop) {
  const { rating, numReviews, caption } = prop;
  return (
    <div className="rating">
      <span>{!caption && rating}&nbsp;</span>
      {/* <span>{rating}&nbsp;&nbsp;</span> */}
      <span>
        <i
          className={
            rating >= 1
              ? 'fa-solid fa-star'
              : rating >= 0.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fa-solid fa-star'
              : rating >= 1.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fa-solid fa-star'
              : rating >= 2.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fa-solid fa-star'
              : rating >= 3.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fa-solid fa-star'
              : rating >= 4.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        />
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span className="reviewsCount">{' (' + numReviews + ')'}</span>
      )}
    </div>
  );
}
