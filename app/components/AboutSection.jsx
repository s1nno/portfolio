import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div style={styles.container}>
      <Image
        src="/images/scubadiver.jpeg"
        alt="profile pic"
        width={500}
        height={500}
        layout="intrinsic"
      />
      <p style={styles.paragraph}>
        I am a computer science student from the University of Central Florida
        with a passion in full stack development. I have expeirience with
        JavaScript/TypeScript, React, Node, Express, Java, Python HTML, CSS, and
        C. I am a very quick learner and I am always looking to expand my skill
        set!
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    marginRight: "20px", // Adjust the spacing between the image and the paragraph
  },
  paragraph: {
    flex: 1, // This makes sure the paragraph takes up the remaining space
  },
};
export default AboutSection;
