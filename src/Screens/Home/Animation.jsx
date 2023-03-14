import React from 'react'
import ai1 from '../../assets/Images/ai1.webp'
import ai2 from '../../assets/Images/ai2.webp'
import ai3 from '../../assets/Images/ai3.webp'
import ai4 from '../../assets/Images/ai4.webp'
import ai5 from '../../assets/Images/ai5.webp'
import ai6 from '../../assets/Images/ai6.webp'
import ai7 from '../../assets/Images/ai7.webp'
import ai8 from '../../assets/Images/ai8.webp'

const Animation = () => {
    return (
        <div>
            <div class="infinite-ai-images-holder">
                <div class="infinite-ai-images-container">
                    <div class="infinite-ai-images-grid">
                        <div class="infinite-ai-image-wrapper">
                            <img src={ai1} class="infnite-image" />
                            <img src={ai6} class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _02">
                            <img src={ai2} class="infnite-image" />
                            <img src={ai7} class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _03">
                            <img src={ai3} class="infnite-image" />
                            <img src={ai8} class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _02">
                            <img src={ai4} class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper">
                            <img src={ai5} class="infnite-image" />
                            <img src={ai6} class="infnite-image" />
                        </div>
                    </div>
                    <div class="infinite-ai-images-grid">
                        <div class="infinite-ai-image-wrapper">
                            <img src={ai1} class="infnite-image" />
                            <img src={ai6} class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _02">
                            <img src={ai2} class="infnite-image" />
                            <img src={ai7} class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _03">
                            <img src={ai3} class="infnite-image" />
                            <img src={ai8} class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _02">
                            <img src={ai4} class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper">
                            <img src={ai5} class="infnite-image" />
                            <img src={ai6} class="infnite-image" />
                        </div>
                    </div>
                    <div class="infinite-ai-images-grid">
                        <div class="infinite-ai-image-wrapper">
                            <img class="infnite-image" />
                            <img class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _02">
                            <img class="infnite-image" />
                            <img class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _03">
                            <img class="infnite-image" />
                            <img class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper _02">
                            <img class="infnite-image" />
                        </div>
                        <div class="infinite-ai-image-wrapper">
                            <img class="infnite-image" />
                            <img class="infnite-image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-garadient" />
            <div className="right-garadient" />
        </div>
    );
}

export default Animation