import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Blog.css"; // Import the Blog CSS
import "./css/index.css";

export const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      <h1>Competitions</h1>
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/300"
            alt="Card 1"
            className="card-image"
          />
          <h2 className="card-title">INNOVATION</h2>
          <p className="card-description">
            This is the description for Card 1. Learn more about this topic.
          </p>
          <div className="card-footer">
            <button
              className="card-button"
              onClick={() => navigate("/innovation")}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/300"
            alt="Card 2"
            className="card-image"
          />
          <h2 className="card-title">CODING AND ENGINEERING</h2>
          <p className="card-description">
            This is the description for Card 2. Learn more about this topic.
          </p>
          <div className="card-footer">
            <button
              className="card-button"
              onClick={() => navigate("/coding-and-engineering")}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/300"
            alt="Card 3"
            className="card-image"
          />
          <h2 className="card-title">QUIZ AND MATH APTITUDE</h2>
          <p className="card-description">
            This is the description for Card 3. Learn more about this topic.
          </p>
          <div className="card-footer">
            <button
              className="card-button"
              onClick={() => navigate("/quiz-and-math-aptitude")}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/300"
            alt="Card 4"
            className="card-image"
          />
          <h2 className="card-title">GAMING</h2>
          <p className="card-description">
            This is the description for Card 4. Learn more about this topic.
          </p>
          <div className="card-footer">
            <button
              className="card-button"
              onClick={() => navigate("/gaming")}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/300"
            alt="Card 5"
            className="card-image"
          />
          <h2 className="card-title">ROBOTICS</h2>
          <p className="card-description">
            This is the description for Card 5. Learn more about this topic.
          </p>
          <div className="card-footer">
            <button
              className="card-button"
              onClick={() => navigate("/robotics")}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};