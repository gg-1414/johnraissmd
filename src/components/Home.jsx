import React from 'react';
import '../stylesheets/Content.css'
import '../stylesheets/Home.css'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const Home = () => (
  <div className="content">
    <Fade bottom>
      <div className="clearfix home__header">
        <span>Certified</span>
        <h1>Child and Adult Psychiatry & Psychopharmacology</h1>
      </div>
    </Fade>
    <section className="home__description">
      <Fade bottom>
        <h2 style={{ paddingLeft:'350px' }}>I am a licensed physician who is board certified in two medical specialties: general psychiatry and child & adolescent psychiatry.</h2>
        <p>The disorders I diagnose and treat include:</p>
      </Fade>
        <ul>
          <Reveal effect="fadeInUp">
            <li><a href="#">Mood Disorders</a></li>
            <li><a href="#">Anxiety Disorders</a></li>
            <li><a href="#">Attention Deficit Hyperactivity Disorder</a></li>
            <li><a href="#">Sleep Problems</a></li>
            <li><a href="#">Psychotic Disorders</a></li>
            <li><a href="#">Autistic Spectrum Disorders</a></li>
          </Reveal>
  			</ul>
    </section>
    <section className="home__message">
      <Reveal effect="fadeInUp">
      <p>Like the rest of human life, the field of psychiatry is constantly changing. Most of the medications I use today were not in existence when I finished my residency. It is important for a psychiatrist to keep up with new developments. To this end, I read several journals and newsletters, and I obtain my continuing medical education hours from sources that are independent of the pharmaceutical industry.</p>
      <p>I look forward to meeting with you and delivering the highest quality care.</p>
      <p>John C. Raiss, MD</p>
      </Reveal>
    </section>
    <section className="home__latestBlogs">
      <div>
        <h1>Latest Blog Posts</h1>
        <div className="home__blogPost">
          <h4>Thinking about marijuana</h4>
          <p>A writer asked me to respond to some questions about marijuana. Here’s what I wrote...</p>
          <p className="read-more-btn">Read more...</p>
        </div>
        <div className="home__blogPost">
          <h4>Stoll redux, or for real?</h4>
          <p>I just read a potentially practice changing  article in Bipolar Disorders: Adjunctive probiotic microorganisms to prevent rehospitalization in patients with acute mania: A randomized controlled trial, by Dickerson et al...</p>
          <p className="read-more-btn">Read more...</p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
