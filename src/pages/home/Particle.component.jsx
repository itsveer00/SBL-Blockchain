import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particle = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            // await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
        const canvas = document.querySelector("#tsparticles canvas");

        if (canvas) {
            canvas.style.zIndex = "-10";
        }
    };


    const particles_options = {
        height: {
            value: "100vh",
        },
        background: {
            color: {
                value: "#00001a",
                // value: "#0d47a1",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 3,
                },
                repulse: {
                    distance: 190,
                    duration: 0.6,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 170,
                enable: true,
                opacity: 0.5,
                width: 1,
                blink: false,
                consent: false,
            },
            move: {
                direction: "none",
                enable: true,
                // outModes: {
                //     default: "bounce",
                // },
                outModes: {
                    default: "out",
                },
                random: false,
                speed: 2,
                straight: false,
                vibrate: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 120,
            },
            opacity: {
                value: 0.2,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
        reduceDuplicates: true,
    }

    if (init) {
        return (
            <>
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}

                    options={particles_options}
                />
            </>
        );
    }

    // return <></>;
};

export default Particle