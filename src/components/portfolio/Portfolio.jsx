import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";

import { motion } from "framer-motion";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [activeFilter, setActiveFilter] = useState(0);
    const filterItems = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category.includes(categoryItem);
        });

        setItems(updatedItems);
    };

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">Projects</h2>

            <div className="portfolio__filters">
                <span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Machine Learning & Data Science"); setActiveFilter(1) }}>
                   Machine Learning & Data Science
                </span>
                <span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Full Stack"); setActiveFilter(2) }}>
                    Full Stack
                </span>
                <span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("UI/UX"); setActiveFilter(3) }}>
                    UI/UX
                </span>
                <span className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Signal Processing"); setActiveFilter(4) }}>
                    Signal Processing
                </span>
            </div>

            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, desc, category, url, repositoryUrl } = elem;

                    return (
                        <motion.div
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="portfolio__card"
                            key={id}>
                            <div className="portfolio__thumbnail">
                                <img src={image} alt="" className="portfolio__img" />
                                <div className="portfolio__mask"></div>
                            </div>

                            <span className="portfolio__category">{category.join(', ')}</span>
                            <h3 className="portfolio__title">{title}</h3>
                            <h3 className="portfolio__desc">{desc}</h3>
                            <a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
                                <RiLink className="portfolio__button-icon" />
                            </a>
                            <a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
                                <RiGithubLine className="portfolio__button-icon" />
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
