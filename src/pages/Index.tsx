import Hero from "@/components/portfolio/Hero";
import TableOfContents from "@/components/portfolio/TableOfContents";
import Section from "@/components/portfolio/Section";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Subsection from "@/components/portfolio/Subsection";
import LeadershipCard from "@/components/portfolio/LeadershipCard";
import Footer from "@/components/portfolio/Footer";

// Import images
// Clash of the Undead
import cotuThumbnail from "@/assets/cotu_thumbnail.jpg";
import cotuThumbnail2 from "@/assets/cotu_thumbnail2.jpg";
import cotuGameplay from "@/assets/cotu_gameplay.png";
import cotuGameplay2 from "@/assets/cotu_gameplay2.png";
import cotuGameplay3 from "@/assets/cotu_gameplay3.png";

// Mister I
import misteriGameplay from "@/assets/misteri_gameplay.png";
import misteriGameplay2 from "@/assets/misteri_gameplay2.png";
import misteriGameplay3 from "@/assets/misteri_gameplay3.png";
import misteriGameplay4 from "@/assets/misteri_gameplay4.png";

// Pet Clash
import petclashLobby from "@/assets/petclash_lobby.png";
import petclashPetmodels from "@/assets/petclash_petmodels.png";
import petclashShop from "@/assets/petclash_shop.png";
import petclashMaingameplay from "@/assets/petclash_maingameplay.png";

// 3D Ray Tracer
import raytracer3dDinosaur from "@/assets/3d_dinosaur.jpg";
import raytracer3dProcedural from "@/assets/3d_procedural.jpg";
import raytracer3dCsgCombination from "@/assets/3d_csg_combination.jpg";
import raytracer3dPacman from "@/assets/3d_pacman.jpg";
import raytracer3dMapping from "@/assets/3d_mapping.jpg";

// 2D Light Tracer
import photonVideo from "@/assets/photon.mp4";
import lighttracer2dMovingphoton from "@/assets/2d_movingphoton.jpg";
import lighttracer2dGravitational from "@/assets/2d_gravitational.jpg";
import lighttracer2dDispersion from "@/assets/2d_dispersion.jpg";
import lighttracer2dLightcolor from "@/assets/2d_lightcolor.jpg";

// Planetze
import planetzeSplash from "@/assets/planetze_splashscreen.png";
import planetzeLogin from "@/assets/planetze_login.png";
import planetzeStats from "@/assets/planetze_stats.png";
import planetzeStats2 from "@/assets/planetze_stats2.png";

const portfolioData = {
  personal: {
    name: "Daniel Stevanus",
    title: "Software & Game Developer",
    tagline:
      "Passionate about crafting immersive game experiences and pushing the boundaries of real-time graphics. Specializing in gameplay systems, rendering pipelines, and procedural generation.",
    github: "https://github.com/danielstevanus88",
    linkedin: "https://www.linkedin.com/in/danielstevanus/",
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
      title: "Software Projects",
      subtitle: "Tools, graphics, simulations, and technical systems",
      href: "#software",
    },
    {
      number: "03",
      title: "Experience",
      subtitle: "Leadership, apps, and other work",
      href: "#experience",
    },
  ],
};

const Index = () => {
  return (
    <main className="relative">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={photonVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

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
          year="2025"
          featured
          description={[
            "A Roblox game developed solely by myself which achieved over 80k players within a month. The game loop went from farming materials, building turrets, to killing zombies.",
            "The game is also filled with engaging riddles, pranks, and features where player can explore and be surprised.",
            "Build! Defend! Survive!",
          ]}
          features={[
            "Player loot materials by breaking rocks or trunks",
            "Player build walls and turrets to defend against zombies",
            "Player craft weapon to increase its attack power, loot speed, and gain special effects",
          ]}
          images={[
            {
              src: cotuThumbnail,
              alt: "Game Thumbnail",
              caption: "Bright color, more player engagement, and picture the gameloop in a single thumbnail",
            },
            {
              src: cotuThumbnail2,
              alt: "Boss Event Thumbnail",
              caption: "Dark and full of mystery which align with the boss theme that will give a spark of the backstory of zombies",
            },
            {
              src: cotuGameplay,
              alt: "Gameplay: Material Looting",
              caption: "Breaking rocks and trunks to gather materials",
            },
            {
              src: cotuGameplay2,
              alt: "Gameplay: Building Defense",
              caption: "Constructing walls and turrets",
            },
            {
              src: cotuGameplay3,
              alt: "Gameplay: Zombie Combat",
              caption: "Defending against zombie waves",
            },
          ]}
          awards={["80k+ players within a month"]}
        >
          <Subsection title="Gameplay">
            <ul className="space-y-3 text-editorial text-ink-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Player loot materials by breaking rocks or trunks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Player build walls and turrets to defend against zombies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Player craft weapon to increase its attack power, loot speed, and gain special effects.</span>
              </li>
            </ul>
          </Subsection>
        </ProjectCard>

        <div className="rule my-12" />

        {/* Mister I */}
        <ProjectCard
          title="Mister I"
          platform="Unity"
          year="2022"
          featured
          description={[
            "A horror game developed by myself upon graduating from high school. Made with passion and Unity :D",
            "Core gameplay includes solving riddles, finding key items, and avoiding ghost.",
          ]}
          features={[
            "Explore rooms",
            "Solve riddles",
            "Hide from the ghost, Pocong",
          ]}
          images={[
            {
              src: misteriGameplay,
              alt: "Mister I - Room Exploration",
              caption: "Exploring dark and mysterious rooms",
            },
            {
              src: misteriGameplay2,
              alt: "Mister I - Riddle Solving",
              caption: "Solving intricate riddles and puzzles",
            },
            {
              src: misteriGameplay3,
              alt: "Mister I - Ghost Encounter",
              caption: "Encountering Pocong, the ghost",
            },
            {
              src: misteriGameplay4,
              alt: "Mister I - Hiding Mechanic",
              caption: "Hiding to survive the ghost",
            },
          ]}
        >
          <Subsection title="Gameplay">
            <ul className="space-y-3 text-editorial text-ink-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Explore rooms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Solve riddles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Hide from the ghost, Pocong.</span>
              </li>
            </ul>
          </Subsection>
        </ProjectCard>

        <div className="rule my-12" />

        {/* Pet Clash */}
        <ProjectCard
          title="Pet Clash"
          platform="Roblox"
          year="202X"
          featured
          description={[
            "A Roblox game (still under development) which is led by me and developed together with my team.",
            "Catch. Tame. Train. CLASH!",
            "Players can catch and train animals and fuse them to create a mutated pet with unique skills that are ready to battle.",
            "Realtime battles with cooldown on each pet abilities.",
          ]}
          features={[
            "Find animals, then catch and train them",
            "Fuse animals and get them ready to CLASH!",
            "Win battles and enjoy the rewards",
            "Realtime battle with unique pet abilities and cooldowns",
          ]}
          images={[
            {
              src: petclashLobby,
              alt: "Pet Clash - Lobby",
              caption: "Game lobby where players prepare for battle",
            },
            {
              src: petclashPetmodels,
              alt: "Pet Clash - Pet Models",
              caption: "Various pet models and their unique designs",
            },
            {
              src: petclashShop,
              alt: "Pet Clash - Shop",
              caption: "In-game shop for purchasing items and upgrades",
            },
            {
              src: petclashMaingameplay,
              alt: "Pet Clash - Main Gameplay",
              caption: "Core gameplay mechanics and battle system",
            },
          ]}
        >
          <Subsection title="Gameplay">
            <ul className="space-y-3 text-editorial text-ink-light mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Find animals, then catch and train them.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Fuse animals and get them ready to CLASH!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Win battles and enjoy the rewards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>Realtime battle with unique pet abilities and cooldowns.</span>
              </li>
            </ul>
            <p className="text-editorial text-ink-light">
              I animated movements (attack, idle) for over 30 different type of pets on Roblox from the Lion, Dragon to the supernatural being, Angel, Grim Reaper and much more. (Almost got a headache, lol)
            </p>
          </Subsection>
        </ProjectCard>
      </Section>

      {/* Section 02: Software Projects */}
      <Section
        id="software"
        number="02"
        title="Software Projects"
        subtitle="Tools, graphics, simulations, and technical systems"
      >
        <ProjectCard
          title="3D Ray Tracer"
          platform="C"
          year="2023"
          featured
          description={[
            "Developed a 3D ray tracer engine in C entirely from scratch (without graphics libraries), implementing reflection, refraction, and the Phong illumination model for realistic shading of objects such as cubes, spheres, and cylinders.",
          ]}
          features={[
            "Reflection, refraction, and Phong illumination model",
            "Procedural generation with Perlin, Simplex, and Worley noise",
            "Constructive Solid Geometry (CSG) boolean operations",
            "PBR materials with texture and normal mapping",
            "Parallax occlusion mapping for enhanced detail",
          ]}
          images={[
            {
              src: raytracer3dDinosaur,
              alt: "Dinosaur from Primitives",
              caption: "Dinosaur built from primitive objects",
            },
            {
              src: raytracer3dProcedural,
              alt: "Procedural Terrain",
              caption: "Procedurally generated terrain",
            },
            {
              src: raytracer3dCsgCombination,
              alt: "Constructive Solid Geometry",
              caption: "Constructive solid geometry demonstration",
            },
            {
              src: raytracer3dPacman,
              alt: "CSG Pacman",
              caption: "Pacman created using CSG operations",
            },
            {
              src: raytracer3dMapping,
              alt: "Alpha Mapping",
              caption: "Alpha mapping texture technique",
            },
          ]}
        >
          <Subsection title="Procedural Generation">
            <p className="text-editorial text-ink-light mb-4">
              Developed comprehensive procedural generation systems for terrain, dungeons, and game content. Implemented various noise algorithms including Perlin, Simplex, and Worley noise for organic terrain features.
            </p>
            <p className="text-editorial text-ink-light">
              The terrain system generates infinite worlds using chunked LOD meshes with seamless stitching. Biome blending uses multi-octave noise with domain warping for natural transitions.
            </p>
          </Subsection>

          <Subsection title="Constructive Solid Geometry">
            <p className="text-editorial text-ink-light mb-4">
              Implemented a CSG library for real-time boolean operations on meshes. Supports union, intersection, and difference operations with proper normal handling and UV preservation.
            </p>
            <p className="text-editorial text-ink-light">
              BSP-tree based implementation with robust edge case handling for coplanar faces. Optimized for real-time use with caching and incremental updates.
            </p>
          </Subsection>

          <Subsection title="Texture & Normal Mapping">
            <p className="text-editorial text-ink-light">
              Developed custom shader pipelines for PBR materials with albedo, normal, roughness, and ambient occlusion maps. GLSL shaders with efficient tangent-space normal mapping, including self-shadowing parallax mapping with binary search refinement.
            </p>
          </Subsection>
        </ProjectCard>

        <div className="rule my-12" />

        <ProjectCard
          title="2D Light Tracer"
          platform="C / MATLAB / OpenGL"
          year="2023"
          featured
          description={[
            "Developed a fully functional 2D light tracer capable of rendering scenes involving multiple objects and lightsources.",
            "Integrated OpenGL enabling real-time render of 150 rays with draggable objects and realtime light trace update.",
          ]}
          features={[
            "Real-time rendering of 150 rays with OpenGL",
            "Draggable objects with realtime light trace updates",
            "Wavelength-dependent refraction for chromatic dispersion",
            "Gravitational lensing simulation in MATLAB and C",
            "Reflection, transmission, and refraction rendering",
          ]}
          images={[
            {
              src: photonVideo,
              alt: "Photon Animation",
              caption: "Animated photon traversing through the scene",
              type: "video",
            },
            {
              src: lighttracer2dLightcolor,
              alt: "2D Light Tracer - Real-time Rendering",
              caption: "Real-time rendering with draggable objects",
            },
            {
              src: lighttracer2dGravitational,
              alt: "Gravitational Lensing",
              caption: "Gravitational lensing effect of a black hole on 2D light",
            },
            {
              src: lighttracer2dMovingphoton,
              alt: "Moving Photon Animation",
              caption: "Photon traversing through scene with reflection and refraction",
            },
            {
              src: lighttracer2dDispersion,
              alt: "Light Dispersion",
              caption: "White light dispersed into rainbow-colored wavelengths",
            },
          ]}
        >
          <Subsection title="Gravitational Lensing Simulation">
            <p className="text-editorial text-ink-light">
              Simulated the gravitational lensing effect of a black hole on 2D light using MATLAB, and implemented the simulation in C for visualization and rendering.
            </p>
          </Subsection>

          <Subsection title="Photon Animation">
            <p className="text-editorial text-ink-light">
              Rendered a movie of a moving photon as it traverse through the scene, reflected, transmitted, and refracted into rainbow-colored photon.
            </p>
          </Subsection>

          <Subsection title="Wavelength Dispersion">
            <p className="text-editorial text-ink-light mb-4">
              The white light rays can be dispersed into multiple lights of different wavelength, hence different colors.
            </p>
            <p className="text-editorial text-ink-light">
              Each wavelength has an effect to the light refraction behavior making them refracted to different directions (angle). This is why we can see a rainbow-like lights when a white light go through a particular object material.
            </p>
          </Subsection>
        </ProjectCard>

        <div className="rule my-12" />

        <ProjectCard
          title="Planetze – CO2 Tracking Platform"
          platform="Java / Android Studio / Firebase"
          year="2024"
          featured
          imageLayout="portrait"
          description={[
            "Selected as one of 38 projects for an industry showcase to Mapleexcellence Inc. for real-world applicability.",
            "Scrum Master for a 5-person team: ran sprint planning, stand-ups, and retrospectives in Jira; tracked velocity/burndown and unblocked delivery risks to ship on schedule.",
          ]}
          features={[
            "Implemented Git workflow with feature branches, pull requests, and code reviews",
            "Integrated Google Pay API for secure in-app credit purchases",
            "Firebase authentication and real-time data sync",
            "Designed data model with access patterns for low-latency reads/writes",
            "Built automated tests with JUnit/Mockito for core logic",
            "Validated regressions across releases",
          ]}
          images={[
            {
              src: planetzeSplash,
              alt: "Planetze - Splash Screen",
              caption: "App splash screen with branding",
            },
            {
              src: planetzeLogin,
              alt: "Planetze - Login",
              caption: "Firebase authentication login screen",
            },
            {
              src: planetzeStats,
              alt: "Planetze - CO2 Analytics",
              caption: "CO2 emission tracking and analytics",
            },
            {
              src: planetzeStats2,
              alt: "Planetze - Statistics Dashboard",
              caption: "Detailed statistics and insights",
            },
          ]}
          awards={["Selected for Industry Showcase to Mapleexcellence Inc."]}
        >
          <Subsection title="Scrum Leadership & Development Process">
            <p className="text-editorial text-ink-light mb-4">
              Served as Scrum Master for a 5-person team: ran sprint planning, stand-ups, and retrospectives in Jira; tracked velocity/burndown and unblocked delivery risks to ship on schedule.
            </p>
            <p className="text-editorial text-ink-light">
              Implemented Git workflow with feature branches, pull requests, and code reviews to ensure code quality and team collaboration.
            </p>
          </Subsection>

          <Subsection title="Technical Implementation">
            <p className="text-editorial text-ink-light mb-4">
              Integrated Google Pay API for secure in-app credit purchases and Firebase for authentication plus real-time data sync. Designed data model and access patterns for low-latency reads/writes.
            </p>
            <p className="text-editorial text-ink-light">
              Built automated tests with JUnit/Mockito for core logic including auth flows, input validation, and failure handling. Validated regressions across releases to maintain reliability.
            </p>
          </Subsection>
        </ProjectCard>
      </Section>

      {/* Section 03: Experience */}
      <Section
        id="experience"
        number="03"
        title="Experience"
        subtitle="Teaching and professional work"
      >
        <LeadershipCard
          title="Teaching Assistant"
          role="University of Toronto"
          period="Sep 2024 – Present"
          description={[
            "Teaching Assistant for CSCB36 (Theory of Computation), CSCA67 (Discrete Mathematics), CSCA08/CSCA48 (Intro CS in Python/C); delivered weekly office hours and facilitated review sessions for 500+ students/term.",
            "Explained and debugged student work across automata/regular languages, reductions, asymptotics, induction, graphs, recursion, memory/pointers, and C/Python program correctness; provided structured walkthroughs to help students translate concepts into implementable solutions.",
          ]}
          highlights={[
            "Delivered weekly office hours and review sessions for 500+ students/term",
            "Covered topics: automata, regular languages, reductions, asymptotics, induction, graphs, recursion, memory/pointers",
            "Graded 500+ questions (assignments/tests/exams) within 2-week deadlines",
            "Used detailed rubrics and targeted written feedback to improve student performance",
            "Reduced regrade requests through clear, structured feedback",
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
