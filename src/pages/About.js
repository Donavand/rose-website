import '../App.css';

function About() {
  return (
    <section className="about-section">
      <h2>About Our Candles</h2>
      <div className="about-content">
        <p className="about-intro">
          At House of Rose, we believe that the art of candle making transcends mere illumination—it is an expression of refined elegance and sensory sophistication. Each candle in our collection is meticulously crafted to transform your space into a sanctuary of luxury and tranquility.
        </p>
        <div className="about-details">
          <div className="about-feature">
            <h3>Artisanal Excellence</h3>
            <p>
              Our candles are hand-poured using the finest premium waxes, ensuring a clean, even burn that honors the integrity of our carefully curated fragrances. Every vessel is selected with discerning taste, complementing the most sophisticated of interiors.
            </p>
          </div>
          <div className="about-feature">
            <h3>Luxurious Fragrances</h3>
            <p>
              We source only the most exquisite essential oils and fragrance blends from around the world. Each scent is thoughtfully composed to evoke emotion, memory, and a sense of refined indulgence—from the delicate notes of rose petals to the warm embrace of amber and vanilla.
            </p>
          </div>
          <div className="about-feature">
            <h3>Timeless Elegance</h3>
            <p>
              House of Rose candles are designed to be more than mere accessories; they are heirloom pieces that elevate the everyday ritual of lighting a candle into a moment of sophisticated self-care. Each flicker of flame becomes a testament to the art of living beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
