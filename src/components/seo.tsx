import { NextSeo } from "next-seo";
import React from "react";

export const SeoComponent = () => {
  return (
    <>
      <NextSeo
        title="Luka Gligorevic | Frontend Developer"
        description="Luka Gligorevic's portfolio. Frontend Developer based in Bijeljina, Bosnia, specializing in web development and modern JavaScript frameworks."
        canonical="https://www.gligor99.xyz"
        openGraph={{
          url: "https://www.gligor99.xyz",
          title: "Luka Gligorevic | Frontend Developer",
          description:
            "Frontend Developer based in Bijeljina, Bosnia, specializing in web development and modern JavaScript frameworks",
          images: [
            {
              url: "https://gligor99.xyz/images/profile-picture.jpeg",
              width: 800,
              height: 600,
              alt: "Luka Gligorevic Portfolio",
              type: "image/jpeg",
            },
          ],
          site_name: "Luka Gligorevic Portfolio",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Luka Gligorevic",
            url: "https://www.gligor99.xyz",
            jobTitle: "Frontend Developer",
            sameAs: [
              "https://www.linkedin.com/in/lukagligorevic",
              "https://github.com/gligor99",
            ],
          }),
        }}
      />
    </>
  );
};
