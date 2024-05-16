import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

export function CollapsibleCost({
  costs,
  cost,
  onCostChange,
  collapsedCost,
  toggleCost,
}) {
  //    cost

  const actionCost = (e) => {
    const selectedValue = e.target.value;
    onCostChange(selectedValue);
  };

  return (
    <div className="dropdownFilter mb-3">
      <Button onClick={toggleCost} className="filterBtn" variant="dark">
        <div>
          <i className="fa-solid fa-tag me-2"></i>
          Cost
        </div>
        <i
          className={
            collapsedCost ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-up'
          }
        ></i>
      </Button>
      {!collapsedCost && (
        <div className="filterOptions">
          <li>
            <label>
              <input
                className="me-2"
                type="checkbox"
                value="all"
                checked={cost === 'all'}
                onChange={actionCost}
              />
              All
            </label>
          </li>
          {costs.map((c, index) => (
            <li key={index}>
              <label>
                <input
                  className="me-2"
                  type="checkbox"
                  value={c}
                  checked={cost === c}
                  onChange={actionCost}
                />
                {c}
              </label>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export function CollapsibleRating({
  ratings,
  rating,
  onRatingChange,
  collapsedRating,
  toggleRating,
}) {
  //   review

  const actionRating = (rating) => {
    const selectedValue = rating;
    onRatingChange(selectedValue);
  };

  console.log('rating', rating);

  return (
    <div className="dropdownFilter">
      <Button onClick={toggleRating} className="filterBtn" variant="dark">
        <div>
          <i className="fa-solid fa-star me-2"></i>
          Avg Reviews
        </div>
        <i
          className={
            collapsedRating ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-up'
          }
        ></i>
      </Button>
      {!collapsedRating && (
        <div className="filterOptions">
          {ratings.map((r) => (
            <li key={r.name}>
              <div
                onClick={() => actionRating(r.rating)}
                className={`${
                  Number(rating) === r.rating
                    ? 'text-danger text-decoration-none'
                    : 'text-decoration-none'
                }`}
                style={{ cursor: 'pointer' }}
              >
                <Rating caption={' & up'} rating={r.rating}></Rating>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

/* 


    <div className="dropdownFilter">
      <Button onClick={toggleRating} className="filterBtn">
        {' '}
        Avg Reviews
        <i
          className={
            collapsedRating ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-up'
          }
        ></i>
      </Button>
      {!collapsedRating && (
        <div className="filterOptions">
          <ul className="list-unstyled">
            {ratings.map((r, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={r.rating}
                    checked={Number(selectedRating) === r.rating}
                    onChange={actionRating}
                  />
                  <Rating caption={' & up'} rating={r.rating}></Rating>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

*/
