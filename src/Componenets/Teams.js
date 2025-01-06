import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./css/team.css";
import person1 from "../assests/person1.png";
import person2 from "../assests/person2.png";
import person3 from "../assests/person3.png";
import person4 from "../assests/person4.png";
import person5 from "../assests/person5.png";
import person6 from "../assests/person6.png";

const teamMembers = [
  { img: person1, name: "John Doe", role: "CEO" },
  { img: person2, name: "Jane Smith", role: "COO" },
  { img: person3, name: "Michael Brown", role: "CTO" },
  { img: person4, name: "Sarah Wilson", role: "CFO" },
  { img: person5, name: "David Miller", role: "Director" },
  { img: person6, name: "Emma Davis", role: "Manager" },
];

const TeamCard = ({ img, name, role }) => (
  <div className="team-card-img">
    <img src={img} alt={`${name} - ${role}`} />
    <h5>{name}</h5>
    <p>{role}</p>
  </div>
);

const Teams = () => {
  const mainContainerRef = useRef(null);
  const headerRef = useRef(null);
  const teamCardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      mainContainerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      teamCardsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 1 }
    );
  }, []);

  return (
    <section className="main-team-container" ref={mainContainerRef}>
      <div className="team-container">
        <div className="team-header" ref={headerRef}>
          <h3>
            Our trusted immigration <br />
            <span>support team</span>
          </h3>
          <p>
            Transmds is the world's leading global logistics provider we
            support industry and trade in the global exchange of merchandise.
          </p>
        </div>
        <div className="team-card">
          {teamMembers.slice(0, 2).map((member, index) => (
            <TeamCard key={`team-1-${index}`} {...member} ref={el => teamCardsRef.current[index] = el} />
          ))}
        </div>
      </div>

      <div className="team-grid">
        <div className="team-card2">
          {teamMembers.slice(2).map((member, index) => (
            <TeamCard key={`team-2-${index}`} {...member} ref={el => teamCardsRef.current[index + 2] = el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;