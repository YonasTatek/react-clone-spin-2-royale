import React,{useState} from 'react'

export default function Header() {
  const [show, setshow] = useState({a:"unset",b:"none"});
  const swap=()=>{
    var temp=show;
         setshow({a:temp.b,b:temp.a})
  }
  return (
    <header>
    <div class="nav-bar">
    <div>
      <picture>
        <a href="/index.html">
          <img src="/assets/images/logo.svg" alt="sunnyside-logo" srcset="" />
        </a>
      </picture>
    </div>
    <nav class="nav-links">
      <a href="http://">About</a>
      <a href="http://">Services</a>
      <a href="http://">Projects</a>
      <a href="http://">Contact</a>
    </nav>
    <div class="hamburger" id="hamburger"  onClick={swap}>
      <picture>
        <img src="/assets/images/icon-hamburger.svg" alt="Navigation menu" srcset="" />
      </picture>
    </div>
    
    </div>
    <div class="hero">
      <div class="nav-box" style={{display:show.b}} id="nav-box">
        <nav class="nav-links">
          <a href="http://">About</a>
          <a href="http://">Services</a>
          <a href="http://">Projects</a>
          <a href="http://">Contact</a>
        </nav>
      </div>
      <h1 class="hero-heading" style={{display:show.a}} id="hero-heading">We are creatives</h1>
    <picture>
      <img class="hero-arrow" style={{display:show.a}} id="hero-arrow" src="/assets/images/icon-arrow-down.svg" alt="arrow-down" srcset="" />
    </picture>
  </div>
  </header>
  )
}
