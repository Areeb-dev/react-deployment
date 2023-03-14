import React, { useState, useEffect } from "react";
import circleImage1 from '../../assets/Images/Circle-Design-01_1Circle Design 01.webp'
import circleImage2 from '../../assets/Images/Circle-Design-02_1Circle Design 02.webp'
import circleImage3 from '../../assets/Images/Circle-Design-03_1Circle Design 03.webp'
import about1 from '../../assets/Images/About-Image-01_1About Image 01.webp'
import about2 from '../../assets/Images/About-Image-02_1About Image 02.webp'

const AboutUs = () => {
    return (
        <div>
            <div
                data-w-id="604edd17-092b-35df-a4bf-168a7d79ece0"
                className="section white-section"
            >
                <div id="Art" className="container white-container">
                    <div className="relative">
                        <div className="center-text">
                            <div className="art-title-holder">
                                <div className="fade-in-move-on-scroll">
                                    <h1 class="title-clean">People are creating
                                    </h1>
                                    <h1 class="title-clean dimmed">crazy digital art</h1>
                                </div>
                            </div>
                        </div>
                        <div className="generate-section-holder">
                            <div className="generate-section">
                                <div className="generate-section-text-holder">
                                    <div className="generate-section-text-container">
                                        <div className="generate-title">
                                            <div className="purple-text">/Generate:</div>
                                        </div>
                                        <div className="generate-title-holder">
                                            <div className="generate-main-text">
                                                Experience your digital self
                                            </div>
                                        </div>
                                        <div className="generate-description-holder">
                                            <p className="paragraph-s">
                                                Lorem ipsum dolor sit amet consectetur. In condimentum in
                                                ornare gravida mi. Neque amet feugiat eget pretium convallis
                                                pellentesque ipsum non tempus. <br />
                                                <br />
                                                Mauris pellentesque maecenas tellus at amet suspendisse
                                                imperdiet. Tristique egestas elementum venenatis molestie.
                                                Rutrum cras tellus quis iaculis risus sed erat montes.
                                            </p>
                                        </div>
                                    </div> 
                                </div>
                                <div className="generate-section-image-holder">
                                    <img
                                        src={circleImage1}
                                        loading="lazy"
                                        alt=""
                                        className="generate-image"
                                    />
                                </div>
                            </div>
                            <div className="generate-section">
                                <div
                                    id="w-node-d8993a6a-20e3-6f04-daf8-3b82a2b9e258-e80fff32"
                                    className="generate-section-image-holder"
                                >
                                    <img
                                        src={circleImage2}
                                        loading="lazy"
                                        alt=""
                                        className="generate-image"
                                    />
                                </div>
                                <div className="generate-section-text-holder">
                                    <div className="generate-section-text-container">
                                        <div className="generate-title">
                                            <div className="yellow-text">/Generate:</div>
                                        </div>
                                        <div className="generate-title-holder">
                                            <div className="generate-main-text">
                                                Join the growing community
                                            </div>
                                        </div>
                                        <div className="generate-description-holder">
                                            <p className="paragraph-s">
                                                Lorem ipsum dolor sit amet consectetur. In condimentum in
                                                ornare gravida mi. Neque amet feugiat eget pretium convallis
                                                pellentesque ipsum non tempus. <br />
                                                <br />
                                                Mauris pellentesque maecenas tellus at amet suspendisse
                                                imperdiet. Tristique egestas elementum venenatis molestie.
                                                Rutrum cras tellus quis iaculis risus sed erat montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="generate-section">
                                <div className="generate-section-text-holder">
                                    <div className="generate-section-text-container">
                                        <div className="generate-title">
                                            <div className="purple-text red">/Generate:</div>
                                        </div>
                                        <div className="generate-title-holder">
                                            <div className="generate-main-text">
                                                Unleash your creativity
                                            </div>
                                        </div>
                                        <div className="generate-description-holder">
                                            <p className="paragraph-s">
                                                Lorem ipsum dolor sit amet consectetur. In condimentum in
                                                ornare gravida mi. Neque amet feugiat eget pretium convallis
                                                pellentesque ipsum non tempus. <br />
                                                <br />
                                                Mauris pellentesque maecenas tellus at amet suspendisse
                                                imperdiet. Tristique egestas elementum venenatis molestie.
                                                Rutrum cras tellus quis iaculis risus sed erat montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="generate-section-image-holder">
                                    <img
                                        src={circleImage3}
                                        loading="lazy"
                                        alt=""
                                        className="generate-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="white-background" />
                </div>
                <div className="yellow-background" />
            </div>
            <div className="section white-background-section">
            <div className="container">
                <div className="about-us-section-holder">
                    <div className="about-us-text-holder">
                        <div className="fade-in-move-on-scroll">
                            <h1 className="title-clean">Aipperal is revolutionizing the field of AI image generation with its innovative solutions.</h1>
                        </div>
                    </div>
                    <div className="about-us-grid-section">
                        <div className="about-us-grid">
                            <div id="w-node-_394d2e5f-fbd0-a45d-e96c-b4822bd54d1c-e80fff32" className="about-us-image-holder">
                                <img src={about1} loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 44vw, (max-width: 991px) 45vw, (max-width: 1439px) 46vw, 627px" alt="" className="about-us-image" />
                            </div>
                            <div id="w-node-ce1de107-6610-a28f-6425-f2e2b7bfe727-e80fff32" className="about-us-images">
                                <div className="about-us-image-holder">
                                    <img src={about2} loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 44vw, (max-width: 991px) 45vw, (max-width: 1439px) 46vw, 627px" alt="" className="about-us-image" />
                                </div>
                                <div className="about-us-text">Our AI algorithm uses its trained knowledge of image creation to generate a unique images <span className="grey-text">that meets the your specifications and expectations.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="About" className="about-div" />
        </div>
    </div>
    );
}

export default AboutUs;