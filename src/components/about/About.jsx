import React from 'react';
import './About.css';
import Image from '../../assets/work-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Manasi, and I'm based in New York, United States. I am pursuing my masters in Electrical Engineering and specializing
                            in Machine Learning and Data Science at Columbia University.<br /><br />
                            It's been a beautiful journery and I hope to grow even more as a Software Engineer and Data Scientist.
                            I believe in finding lasting solutions creatively and try to develop user centered products.<br></br>
                            My current focus is on expanidng my portfolio by building more projects that I can add on here. <br /><br />
                            Here are a few technologies I’ve been working with:
                        </p>
                        <ul className="about__list">
                            <li>Python</li>
                            <li>R</li>
                            <li>Tensorflow</li>
                            <li>Keras</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Java</li>
                            <li>MySQL</li>
                            <li>PySpark</li>
                            <li>GCP</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Django</li>
                            <li>REST framework</li>
                            <li>Tableau</li>
                            <li>Airflow</li>
                            <li>Git</li>
                            <li>Jira</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

           { /*<AboutBox />*/}
        </section>
    )
}

export default About