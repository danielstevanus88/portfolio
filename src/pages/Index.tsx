import Hero from "@/components/portfolio/Hero";
import TableOfContents from "@/components/portfolio/TableOfContents";
import Section from "@/components/portfolio/Section";
import ProjectCard from "@/components/portfolio/ProjectCard";
import TechnicalBlock from "@/components/portfolio/TechnicalBlock";
import Subsection from "@/components/portfolio/Subsection";
import LeadershipCard from "@/components/portfolio/LeadershipCard";
import Footer from "@/components/portfolio/Footer";

// Import images
import gameClashUndead from "@/assets/game-clash-undead.jpg";
import raytracerRender from "@/assets/raytracer-render.jpg";
import lightTracer from "@/assets/light-tracer.jpg";
import gamePetClash from "@/assets/game-pet-clash.jpg";
import proceduralTerrain from "@/assets/procedural-terrain.jpg";

const portfolioData = {
  personal: {
    name: "Alex Chen",
    title: "Software & Game Developer",
    tagline:
      "Passionate about crafting immersive game experiences and pushing the boundaries of real-time graphics. Specializing in gameplay systems, rendering pipelines, and procedural generation.",
    email: "alex.chen@email.com",
    phone: "+1 (555) 123-4567",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  tableOfContents: [
    {
      number: "01",
      title: "Game Projects",
      subtitle: "Roblox, Unity, and original game development",
      href: "#games",
    },
    {
      number: "02",
      title: "Graphics & Rendering",
      subtitle: "Ray tracing, light simulation, and shader development",
      href: "#graphics",
    },
    {
      number: "03",
      title: "Technical Deep Dives",
      subtitle: "Procedural generation, CSG, and physics simulations",
      href: "#technical",
    },
    {
      number: "04",
      title: "Leadership & Other Work",
      subtitle: "Team management, apps, and extracurricular projects",
      href: "#leadership",
    },
  ],
};

const Index = () => {
  return (
    <main className="relative">
      {/* Hero / Cover */}
      <Hero {...portfolioData.personal} />

      {/* Table of Contents */}
      <TableOfContents items={portfolioData.tableOfContents} />

      {/* Section 01: Game Projects */}
      <Section
        id="games"
        number="01"
        title="Game Projects"
        subtitle="A selection of games developed for various platforms"
      >
        {/* Featured Project: Clash of The Undead */}
        <ProjectCard
          title="Clash of The Undead"
          platform="Roblox"
          year="2024"
          featured
          description={[
            "A large-scale multiplayer strategy game featuring undead armies clashing in epic battles. Players command legions of skeletons, zombies, and dark knights across procedurally generated battlefields.",
            "Built with a custom ECS architecture for handling thousands of units simultaneously. Implemented a sophisticated AI system for enemy pathfinding and tactical decision-making.",
          ]}
          features={[
            "Real-time multiplayer battles with up to 100 players",
            "Custom networking layer with client-side prediction",
            "Procedurally generated maps and terrain",
            "Advanced unit AI with formation systems",
            "In-game economy and progression system",
            "Shop system with cosmetic items and upgrades",
          ]}
          images={[
            {
              src: gameClashUndead,
              alt: "Clash of The Undead gameplay",
              caption: "Large-scale battle scene with undead armies",
            },
          ]}
          awards={["Featured on Roblox Front Page", "1M+ total visits"]}
        />

        <Subsection title="Gameplay Systems">
          <p className="text-editorial text-ink-light mb-6">
            Developed comprehensive gameplay systems including real-time
            combat mechanics, resource management, and player progression.
            The combat system features action-queue based attacks with
            frame-perfect hit detection and combo chains.
          </p>
        </Subsection>

        <Subsection title="UI & Shop Systems">
          <p className="text-editorial text-ink-light">
            Created a modular UI framework supporting dynamic layouts,
            animations, and localization. The shop system integrates with
            Roblox's economy APIs for secure in-game purchases.
          </p>
        </Subsection>

        <div className="rule my-12" />

        {/* Pet Clash */}
        <ProjectCard
          title="Pet Clash"
          platform="Roblox"
          year="2023"
          description={[
            "A vibrant pet collection and battle game where players discover, train, and battle with unique creatures. Features a gacha-style collection system with over 200 unique pets.",
            "Implemented a turn-based battle system with elemental advantages, special abilities, and evolution mechanics.",
          ]}
          features={[
            "200+ collectible pets with unique abilities",
            "Turn-based strategic combat",
            "Pet evolution and fusion systems",
            "Trading marketplace between players",
            "Daily quests and seasonal events",
          ]}
          images={[
            {
              src: gamePetClash,
              alt: "Pet Clash arena battle",
              caption: "Pet arena with active battle",
            },
          ]}
        />

        <div className="rule my-12" />

        {/* Mister I */}
        <ProjectCard
          title="Mister I"
          platform="Unity"
          year="2022"
          description={[
            "A first-person puzzle game exploring perspective manipulation and optical illusions. Players solve increasingly complex puzzles by viewing scenes from specific angles to reveal hidden paths.",
            "Inspired by Monument Valley and Antichamber, the game challenges players' spatial reasoning through impossible architecture and forced perspective mechanics.",
          ]}
          features={[
            "Perspective-based puzzle mechanics",
            "Non-Euclidean geometry puzzles",
            "Original soundtrack and ambient audio",
            "Custom shader effects for visual transitions",
          ]}
          awards={["Game Jam Winner - Best Innovation"]}
        />
      </Section>

      {/* Section 02: Graphics & Rendering */}
      <Section
        id="graphics"
        number="02"
        title="Graphics & Rendering"
        subtitle="Explorations in computer graphics and real-time rendering"
      >
        <TechnicalBlock
          title="3D Ray Tracer"
          description={[
            "A physically-based ray tracer built from scratch in C++. Implements Monte Carlo path tracing with importance sampling for realistic global illumination.",
            "Supports various material types including diffuse, specular, dielectric, and subsurface scattering. Features acceleration structures (BVH) for real-time preview of complex scenes.",
          ]}
          technicalDetails="Implemented using modern C++17 with SIMD optimizations for vector operations. Multi-threaded tile-based rendering enables efficient CPU utilization."
          formula={`// Path tracing core loop
Color trace(Ray ray, int depth) {
    if (depth >= MAX_DEPTH) return BLACK;
    
    Hit hit = scene.intersect(ray);
    if (!hit) return environment(ray);
    
    Color emitted = hit.material.emit();
    Color scattered = hit.material.scatter(ray, hit);
    
    return emitted + scattered * trace(reflect_ray, depth + 1);
}`}
          images={[
            {
              src: raytracerRender,
              alt: "Ray traced Cornell box",
              caption: "Cornell box with caustics and global illumination",
            },
          ]}
          awards={["Dean's Award for Technical Excellence"]}
        />

        <TechnicalBlock
          title="2D Light Tracer"
          description={[
            "A 2D light transport simulator demonstrating optical phenomena including refraction, dispersion, and caustics. Built as an educational tool to visualize how light interacts with different media.",
            "Simulates wavelength-dependent refraction using Sellmeier equations for accurate chromatic dispersion through prisms and lenses.",
          ]}
          technicalDetails="Real-time simulation at 60fps using compute shaders for parallel ray marching. Supports interactive scene editing with immediate visual feedback."
          formula={`// Snell's law with dispersion
n(λ) = sqrt(1 + B₁λ²/(λ²-C₁) + B₂λ²/(λ²-C₂))
sin(θ₂) = (n₁/n₂) × sin(θ₁)`}
          images={[
            {
              src: lightTracer,
              alt: "Light dispersion simulation",
              caption: "Chromatic dispersion through a prism",
            },
          ]}
        />
      </Section>

      {/* Section 03: Technical Deep Dives */}
      <Section
        id="technical"
        number="03"
        title="Technical Deep Dives"
        subtitle="Advanced techniques and research projects"
      >
        <TechnicalBlock
          title="Procedural Generation Systems"
          description={[
            "Developed comprehensive procedural generation systems for terrain, dungeons, and game content. Implemented various noise algorithms including Perlin, Simplex, and Worley noise for organic terrain features.",
            "Created a modular graph-based system for dungeon generation using Binary Space Partitioning and cellular automata for natural cave systems.",
          ]}
          technicalDetails="The terrain system generates infinite worlds using chunked LOD meshes with seamless stitching. Biome blending uses multi-octave noise with domain warping for natural transitions."
          formula={`// Fractal Brownian Motion
fbm(p) = Σ (amplitude^i × noise(frequency^i × p))
       i=0..octaves`}
          images={[
            {
              src: proceduralTerrain,
              alt: "Procedural terrain wireframe",
              caption: "Procedurally generated terrain mesh",
            },
          ]}
        />

        <TechnicalBlock
          title="Constructive Solid Geometry"
          description={[
            "Implemented a CSG library for real-time boolean operations on meshes. Supports union, intersection, and difference operations with proper normal handling and UV preservation.",
            "Used for in-game building systems allowing players to create complex structures from primitive shapes with real-time mesh updates.",
          ]}
          technicalDetails="BSP-tree based implementation with robust edge case handling for coplanar faces. Optimized for real-time use with caching and incremental updates."
        />

        <TechnicalBlock
          title="Texture & Normal Mapping"
          description={[
            "Developed custom shader pipelines for PBR materials with albedo, normal, roughness, and ambient occlusion maps. Implemented parallax occlusion mapping for enhanced surface detail.",
          ]}
          technicalDetails="GLSL shaders with efficient tangent-space normal mapping. Includes self-shadowing parallax mapping with binary search refinement."
        />

        <TechnicalBlock
          title="Light Physics Simulations"
          description={[
            "Created educational simulations demonstrating light behavior including reflection, refraction, total internal reflection, and polarization. Used for physics coursework and demonstrations.",
          ]}
        />
      </Section>

      {/* Section 04: Leadership & Other Work */}
      <Section
        id="leadership"
        number="04"
        title="Leadership & Other Work"
        subtitle="Team management, applications, and additional projects"
      >
        <LeadershipCard
          title="Game Development Club"
          role="President & Founder"
          period="2022 - Present"
          description={[
            "Founded and lead the university's game development club with 50+ active members. Organize weekly workshops, game jams, and industry speaker events.",
          ]}
          highlights={[
            "Hosted 3 successful game jams with 100+ participants",
            "Established partnerships with local game studios",
            "Mentored 20+ students on their first game projects",
          ]}
        />

        <LeadershipCard
          title="Study Companion App"
          role="Lead Developer"
          period="2023"
          description={[
            "Built a cross-platform study app featuring spaced repetition, progress tracking, and collaborative study groups. 10,000+ downloads on iOS and Android.",
          ]}
          highlights={[
            "React Native with TypeScript",
            "Firebase backend with real-time sync",
            "Featured in university app showcase",
          ]}
        />

        <LeadershipCard
          title="Hackathon Projects"
          role="Team Lead"
          period="2021 - 2024"
          description={[
            "Led teams in multiple hackathons, winning several awards for innovative solutions in healthcare, education, and sustainability.",
          ]}
          highlights={[
            "1st Place - HealthHack 2023: AI-powered symptom checker",
            "Best Technical Implementation - EduTech 2022",
            "Sustainability Award - GreenCode 2023",
          ]}
        />
      </Section>

      {/* Footer */}
      <Footer
        name={portfolioData.personal.name}
        email={portfolioData.personal.email}
        github={portfolioData.personal.github}
        linkedin={portfolioData.personal.linkedin}
      />
    </main>
  );
};

export default Index;
