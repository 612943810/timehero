import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About TimeHero</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Your Time Management Companion</h2>
          <p>TimeHero is a powerful and intuitive timer application designed to help you manage your time effectively. Whether you're working on a project, studying, or just need to keep track of time, TimeHero provides a simple yet powerful solution.</p>
        </section>

        <section className="about-section">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Simple and intuitive interface</li>
            <li>Accurate time tracking</li>
            <li>Start, pause, and reset functionality</li>
            <li>Responsive design for all devices</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <p>Using TimeHero is straightforward:</p>
          <ol className="how-it-works">
            <li>Click "Start" to begin timing</li>
            <li>Pause anytime with the "Pause" button</li>
            <li>Reset the timer with the "Reset" button</li>
            <li>Track your time in seconds</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default About;
