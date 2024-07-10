import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to NexusMart</h1>
        <p className="text-lg">
          NexusMart is your premier destination for the latest in electronics, gadgets, and accessories. We pride ourselves on delivering high-quality products and exceptional customer service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg">
          NexusMart was founded in [Year] by a team of tech enthusiasts who recognized the need for a reliable and innovative online store for electronics. Our journey began with a simple idea: to create a marketplace where customers can find the best technology products at competitive prices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Mission and Vision</h2>
        <p className="text-lg">
          <strong>Mission:</strong> Our mission is to provide high-quality electronics, gadgets, and accessories while ensuring an exceptional shopping experience for our customers.<br />
          <strong>Vision:</strong> Our vision is to be the leading online retailer in the tech industry, known for our innovation, customer service, and commitment to quality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 text-lg">
          <li><strong>Integrity:</strong> We believe in honesty and transparency in all our dealings.</li>
          <li><strong>Innovation:</strong> We constantly seek to innovate and bring the latest technology to our customers.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <img src="team-member-1.jpg" alt="John Doe" className="mb-2 rounded-lg" />
            <h3 className="text-xl font-semibold">John Doe - CEO</h3>
            <p className="text-lg">John is the visionary behind NexusMart, leading the team with his passion for technology and innovation.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <img src="team-member-2.jpg" alt="Jane Smith" className="mb-2 rounded-lg" />
            <h3 className="text-xl font-semibold">Jane Smith - CTO</h3>
            <p className="text-lg">Jane is our tech guru, ensuring that our platform is always up-to-date and running smoothly.</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Customer Commitment</h2>
        <p className="text-lg">
          At NexusMart, we are dedicated to providing the best shopping experience for our customers. We offer a seamless and secure shopping process, fast shipping, and responsive customer support.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg">
          Feel free to reach out to us at <a href="mailto:info@nexusmart.com" className="text-blue-500">info@nexusmart.com</a> for any inquiries. Follow us on social media for the latest updates and promotions.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
