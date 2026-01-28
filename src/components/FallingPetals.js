import '../App.css';

function FallingPetals() {
  // Generate multiple petals with different delays and speeds
  const petals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${10 + Math.random() * 10}s`,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="falling-petals-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="rose-petal"
          style={{
            left: petal.left,
            animationDelay: petal.animationDelay,
            animationDuration: petal.animationDuration,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2 Q14 4 16 3 Q15 7 18 9 Q14 9 12 12 Q10 9 6 9 Q9 7 8 3 Q10 4 12 2 Z"
              fill="#FFFFFF"
              opacity="0.7"
            />
            <path
              d="M12 2 Q13 3 14 2.5 Q13.5 5 15 6 Q13 6 12 8 Q11 6 9 6 Q10.5 5 10 2.5 Q11 3 12 2 Z"
              fill="#FFFFFF"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default FallingPetals;
