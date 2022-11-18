import React from "react";
import recent_desktop from "../assets/images/image-web-3-desktop.jpg";
import recent_mobile from "../assets/images/image-web-3-mobile.jpg";
import article_1 from "../assets/images/image-retro-pcs.jpg";
import article_2 from "../assets/images/image-top-laptops.jpg";
import article_3 from "../assets/images/image-gaming-growth.jpg";
function Main() {
  return (
    <div className="main">
      <div className="row-1">
        <div className="recent-article">
          <img className="recent_desktop" src={recent_desktop} alt="web3"></img>
          <img className="recent_mobile" src={recent_mobile} alt="web3"></img>
          <div className="row-1-info">
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="read-more">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="new">
          <h2 className="new-title">New</h2>
          <div className="new-article">
            <h3>Hydrogen VS Electric Cars </h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="new-article">
            <h3> The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="new-article">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="article">
          <div className="article-img">
            <img src={article_1}></img>
          </div>
          <div className="article-main">
            <p className="count">01</p>
            <h4 className="article-title">Reviving Retro PCs</h4>
            <p className="article-description">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="article">
          <div className="article-img">
            <img src={article_2}></img>
          </div>
          <div className="article-main">
            <p className="count">02</p>
            <h4 className="article-title">Top 10 Laptops of 2022</h4>
            <p className="article-description">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="article">
          <div className="article-img">
            <img src={article_3}></img>
          </div>
          <div className="article-main">
            <p className="count">03</p>
            <h4 className="article-title">The Growth of Gaming</h4>
            <p className="article-description">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
