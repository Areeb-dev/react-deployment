import React from 'react'
import { Footer, Header } from '../../Components'
import dog1 from '../../assets/Images/Card-Image-01_1Card Image 01.webp'
import card_icon1 from '../../assets/Images/Card-Icon-01.svg'
import card_image from '../../assets/Images/Card-Image-02_1Card Image 02.webp'
import logo1 from '../../assets/Images/Logo-01.svg'
import logo2 from '../../assets/Images/Logo-02.svg'
import logo3 from '../../assets/Images/Logo-03.svg'
import bg_img from '../../assets/Images/Card-BG-Image-02_1Card BG Image 02.webp'
import fast_1 from '../../assets/Images/Fast_1Fast.webp'
import text_img from '../../assets/Images/Text-To-Imag_1Text To Imag.webp'
import { useHistory } from 'react-router-dom'
import allPaths from '../../Config/paths'
import imageUnknown from '../../assets/Images/Card-Background-01_1Card Background 01.webp'
import imageUnknown2 from '../../assets/Images/Card-BG-Image-02_1Card BG Image 02.webp'
import imageUnknown3 from '../../assets/Images/CTA-BG_1CTA BG.webp'
import Animation from './Animation'
import AboutUs from './AboutUs'
import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector(state => state?.authReducer?.user)

    const history = useHistory()
  
    return (
        <div className='main_container'>
            <Header />
            <div>
                <div className="section">
                    <div class="container">
                        <div className="hero-section-holder">
                            <div className="hero-section-container">
                                <div
                                    // data-w-id="0dabe78f-c28a-3c19-82dc-e745e446ddc5" 
                                    className="hero-section-title"
                                >
                                    <div className="hero-text">  
                                        <h1 className="title-clean-heading">Where AI meets.</h1>
                                        <h1 className="title-clean-heading">Apparel</h1>
                                    </div>
                                </div>
                                <div
                                    // data-w-id="8803bc6d-2947-006f-10ff-e59d8980546c" 
                                    class="hero-section-paragraph-holder">
                                    <div>Unleash Your Creativity with Aipperal</div>
                                </div>
                                <div className="hero-section-button-holder">
                                    <a
                                        onClick={() => history.push(allPaths?.SIGN_UP)}
                                        // href="sign-up.html"
                                        // data-w-id="ff84e654-cfa7-b063-c63e-c9b9600e62e1"
                                        className="button big w-button"
                                    >
                                        Try It out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Animation />
                </div>
                <div id="Drops" className="section overflow-hidden-mobile">
                    <div className="container">
                        <div className="drops-section-holder">
                            <div className="center-text">
                                <div className="title-holder">
                                    <div className="fade-in-move-on-scroll">
                                        <h1 className="title-clean">Drops.</h1>
                                    </div>
                                    <div className="fade-in-move-on-scroll">
                                        <h1 className="title-clean dimmed">Designed by us.</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="grey-cards-holder">
                                <div data-w-id="eaf7432c-fa80-bdc6-2db3-6199aa2326cb" className="grey-cards-wrapper">
                                    <div className="grey-cards-content-holder">
                                        <div className="grey-card-text-holder">
                                            <div className="grey-card-icon-holder"><img src={card_icon1} className="grey-card-icon" /></div>
                                            <div className="card-title-holder">
                                                <h2 className="white-title">Aipperal is able to generate unique, realistic images</h2>
                                            </div>
                                            <div className="card-paraghraph-holder">
                                                <p className="card-paragraph">We render images and artwork based on a text description. &nbsp;It has the ability to combine various concepts, attributes, and styles in its creations.</p>
                                            </div>
                                            <div className="replaces-holder">
                                                <div className="replace-text">Replaces:</div>
                                                <div className="replace-logo-holder">
                                                    <div className="replace-logo-wrapper"><img src={logo1} className="replace-logo" /></div>
                                                    <div className="replace-logo-wrapper"><img src={logo2} className="replace-logo" /></div>
                                                    <div className="replace-logo-wrapper"><img src={logo3} className="replace-logo" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grey-card-image-holder"><img src={dog1} className="grey-card-image" /></div>
                                    </div>
                                    {/* IMG */}
                                    <div className="background-decor-holder">
                                        <img src={imageUnknown} loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1294px" alt="" className="background-decor" /></div>
                                </div>
                                <div className="grey-cards-wrapper">
                                    <div className="grey-cards-content-holder">
                                        <div className="grey-card-text-holder">
                                            <div className="grey-card-icon-holder"><img src={card_icon1} className="grey-card-icon" /></div>
                                            <div className="card-title-holder">
                                                <h2 className="white-title">Customizable image generation</h2>
                                            </div>
                                            <div className="card-paraghraph-holder">
                                                <p className="card-paragraph">Our AI algorithm allows users to specify certain parameters or constraints for image generation, such as the size or color of the output image.</p>
                                            </div>
                                            <div className="replaces-holder">
                                                <ol role="list" className="list w-list-unstyled">
                                                    <li>
                                                        <div className="list-item-holder">
                                                            <div className="list-circle" />
                                                            <div className="list-text">Upload your images</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="list-item-holder">
                                                            <div className="list-circle" />
                                                            <div className="list-text">Give it a promt</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="list-item-holder">
                                                            <div className="list-circle" />
                                                            <div className="list-text">Share the results</div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="grey-card-image-holder"><img src={card_image} className="grey-card-image" /></div>
                                    </div>
                                    <div className="background-decor-holder">
                                        <img src={imageUnknown2} loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1294px" alt="" className="background-decor" /></div>
                                </div>
                                <div className="small-cards-holder">
                                    <div id="w-node-fb6e61c5-348f-515a-51ba-509ea31acd9b-e80fff32" className="small-cards">
                                        <div className="small-cards-image-holder"><img src={fast_1} className="small-cards-image" /></div>
                                        <div className="small-cards-content-holder">
                                            <div className="small-card-text">Lighting Fast. <span className="grey-text">Just start with an idea and see how fast it evolves</span></div>
                                        </div>
                                    </div>
                                    <div id="w-node-_472e4dc8-aac6-32c2-d384-9ed9dd06f470-e80fff32" data-w-id="472e4dc8-aac6-32c2-d384-9ed9dd06f470" className="small-cards">
                                        <div className="small-cards-image-holder"><img src={text_img} className="small-cards-image" /></div>
                                        <div className="small-cards-content-holder">
                                            <div className="small-card-text">Text to image.<span className="grey-text"> Imagine, ask, create, no limit.</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AboutUs/>
                <div id="Join" className="section white-background-section">
                    <div className="container">
                        <div className="cta-holder">
                            <div className="cta-container">
                                <div className="cta-content-holder">
                                    <div className="cta-title-holder">
                                        <div className="fade-in-move-on-scroll">
                                            <h1 className="title-clean">Start your journey</h1>
                                        </div>
                                        <div className="fade-in-move-on-scroll">
                                            <h1 className="title-clean dimmed">ask the ai to design</h1>
                                        </div>
                                    </div>
                                    <div className="cta-wrapper">
                                        <div className="cta-input-holder">
                                            <div className="purple-text">/Generate:</div>
                                            <div className="text-auto-wrapper">
                                                <div className="text-auto-switch-holder">
                                                    <div data-w-id="38262d42-4484-51ac-09f5-d3df3ad06d9b" className="text-auto-switch">
                                                        <div className="text-auto">A old ship sailing through space</div>
                                                    </div>
                                                    {/* <div data-w-id="2e41bed5-5d8a-4edb-32ca-0a5e0c07e0a8" className="text-auto-switch">
                                                        <div className="text-auto">Planet made out of gold</div>
                                                    </div>
                                                    <div data-w-id="d1a430e6-e5b6-a277-2573-f44cf17219e6" className="text-auto-switch">
                                                        <div className="text-auto">A super hero anime girl</div>
                                                    </div>
                                                    <div data-w-id="7b6c2d93-0cd9-42be-cc18-9f4f0149c097" className="text-auto-switch">
                                                        <div className="text-auto">Long hair samurai with katana</div>
                                                    </div>
                                                    <div data-w-id="e03bcc45-89b1-6257-4050-b320944b1719" className="text-auto-switch">
                                                        <div className="text-auto">A old ship sailing through space</div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <a onClick={()=>history.push(allPaths.BUILD)} className="button full w-button">Build</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="background-decor-holder"><img src={imageUnknown3} loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 93vw, (max-width: 991px) 94vw, (max-width: 1439px) 95vw, 1294px" alt="" className="background-decor" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}

export default Home
