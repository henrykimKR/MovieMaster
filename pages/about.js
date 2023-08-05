import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

// This function gets called at build time
export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve, reject) => {
    fetch(
      "https://plum-frightened-bream.cyclic.app/api/movies/573a139af29313caabcf0d74"
    )
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { movie: data } });
      });
  });
}

export default function About({ movie }) {
  return (
    <>
      <PageHeader text="About the Developer : Seonghoon Kim" />
      <Card>
        <Card.Body>
          I am a passionate developer with a strong interest in web development.
          With several years of experience in building robust and scalable
          applications, I strive to create innovative solutions that deliver a
          seamless user experience. My expertise lies in front-end development
          using modern technologies such as React and Next.js. <br />
          <br />
          <br />
          It&apos;s difficult to choose a favourite, but{" "}
          <Link href="/movies/Titanic" legacyBehavior>
            <a>&quot;Titanic&quot;</a>
          </Link>{" "}
          (1997) is one that I always enjoy watching. <br />
          <br />
        </Card.Body>
        <MovieDetails movie={movie} />
      </Card>
    </>
  );
}
