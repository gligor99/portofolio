import { BackgroundBeamsWithCollision } from "@/components/ui/beams";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlipWords } from "@/components/ui/flip-words";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollToSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = () => {
    if (scrollToSectionRef.current) {
      scrollToSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleParallaxEffect = () => {
      const parallaxSections =
        document.querySelectorAll<HTMLElement>(".parallax-section");
      parallaxSections.forEach((section) => {
        const speed = parseFloat(section.dataset.speed || "0.5");
        const offset = window.pageYOffset;
        section.style.transform = `translateY(${offset * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleParallaxEffect);
    return () => {
      window.removeEventListener("scroll", handleParallaxEffect);
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Section 1 */}
      <div className="mx-auto snap-start w-screen h-screen">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col items-center justify-center w-full h-full z-50">
            <TextHoverEffect text="@gligor99" />
            <Button className="mb-20" onClick={handleScrollToSection}>
              Scroll for more
            </Button>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Section 2 with Parallax */}
      <div
        ref={scrollToSectionRef}
        className="mx-auto snap-start relative w-screen md:h-screen bg-blue-500"
      >
        <section className="py-16 bg-gray-50 dark:bg-gray-900 h-full w-full flex justify-center items-center">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6 sm:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-48 h-48 relative rounded-full overflow-hidden">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D4D03AQHxeN8H1smMww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708796371072?e=1739404800&v=beta&t=6_6S6_9-Zpe7xSS-goLeJAqxE79dkedOqKPlahQUNSA"
                      alt="Profile picture"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2">
                      <FlipWords words={["Luka Gligorevic", "@gligor99"]} />
                    </h1>
                    <p className="text-xl text-muted-foreground mb-4">
                      Front-End Developer
                    </p>
                    <p className="text-muted-foreground mb-6">
                      📍 Bijeljina, Bosnia and Herzegovina
                    </p>
                    <div className="space-y-4">
                      <p>
                        As a Frontend Developer, I am deeply passionate about
                        creating intuitive and engaging user experiences that
                        make a lasting impact. I believe in the power of design
                        and development to bridge the gap between users and
                        technology, delivering solutions that are both
                        functional and visually appealing.
                      </p>

                      <p>
                        Exploring new technologies and integrating them into
                        innovative projects is at the core of my professional
                        journey. I am driven by a curiosity to understand
                        emerging tools and frameworks, ensuring that my work
                        stays relevant in an ever-evolving industry. This
                        enthusiasm allows me to approach challenges with fresh
                        perspectives and adapt quickly to new trends.
                      </p>

                      <p>
                        Staying ahead of industry developments is not just a
                        professional goal for me—it’s a personal passion. I am
                        committed to continuous learning, constantly honing my
                        skills through hands-on experimentation, thoughtful
                        research, and collaboration with others.
                        Self-improvement is a priority, as I believe there is
                        always room to grow and innovate.
                      </p>

                      <p>
                        My focus lies in delivering user-centered designs that
                        align with both business objectives and user needs. By
                        blending technical expertise with a deep understanding
                        of user behavior, I strive to exceed expectations and
                        transform ideas into impactful digital experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                  <Button variant="outline" size="icon">
                    <a
                      href="https://github.com/gligor99"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon">
                    <a
                      href="https://linkedin.com/in/lukagligorevic"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon">
                    <a
                      href="mailto:gligor@mail.com"
                      rel="noopener noreferrer"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
