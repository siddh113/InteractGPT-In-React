import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div>
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
            <div className="image">
                <img src={assets.user_icon} alt="" />
            </div>
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev!!</span></p>
                <p>How Can I help you today?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places in United Kingdom.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>What is quantum computing?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>Suggest me some recipes for dinner.</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p>Improve the readability of sollowing code.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>

                <p className="bottom-info">
                    Gemini may display inaacurate info, including people, Please double-check.
                </p>
            </div>
        </div>          
    </div>
    </div>
  )
}

export default Main