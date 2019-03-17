import React from 'react';
import '../stylesheets/Content.css'
import '../stylesheets/Home.css'

const Home = () => (
  <div className="content">
    <div className="clearfix home__header">
      <span>Certified</span>
      <h1>Child and Adult Psychiatry & Psychopharmacology</h1>
    </div>
    <section className="home__description">
      <h2 style={{ paddingLeft:'350px' }}>I am a licensed physician who is board certified in two medical specialties: general psychiatry and child & adolescent psychiatry.</h2>
      <p>The disorders I diagnose and treat include:</p>
      <ul>
        <li><a href="#">Mood Disorders</a></li>
        <li><a href="#">Anxiety Disorders</a></li>
        <li><a href="#">Attention Deficit Hyperactivity Disorder</a></li>
        <li><a href="#">Sleep Problems</a></li>
        <li><a href="#">Psychotic Disorders</a></li>
        <li><a href="#">Autistic Spectrum Disorders</a></li>
			</ul>
    </section>
    <section className="home__message">
      <p>Like the rest of human life, the field of psychiatry is constantly changing. Most of the medications I use today were not in existence when I finished my residency. It is important for a psychiatrist to keep up with new developments. To this end, I read several journals and newsletters, and I obtain my continuing medical education hours from sources that are independent of the pharmaceutical industry.</p>
      <p>I look forward to meeting with you and delivering the highest quality care.</p>
      <p>John C. Raiss, MD</p>
    </section>
  </div>
);

export default Home;
