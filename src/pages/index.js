import Head from 'next/head';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Experience from '../components/Experience/Experience';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
    return (
        <>
            <Head>
                <title>Daniel Beck | Software Developer Portfolio</title>
                <meta
                    name="description"
                    content="Daniel Beck's software development portfolio, project work, experience, technologies, and certifications."
                />
            </Head>
            <Layout>
                <Section grid>
                    <Hero />
                    <BgAnimation />
                </Section>
                <Timeline />
                <Experience />
                <Projects />
                <Technologies />
                <Acomplishments />
            </Layout>
        </>
    );
};

export default Home;
