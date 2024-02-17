import dashboardImg2 from "../public/Images/dashboardImg1.jpg";

const Hero = () => {
  return (
    <section >
      <div style={{ textAlign: "center", color: "white", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h1 style={{ color: "white", opacity: 0.5, fontSize: 70, fontWeight: 600 }}>EXPLORE</h1>
        <button>Plan your Trip</button>
      </div>
      <div className="img">
        <img
          src={dashboardImg2.src}
          alt="camp"
          style={{ width: "100vw" }}
        />
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
