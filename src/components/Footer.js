import React from 'react'

export default function Footer() {
    return (
        <footer>
        <div class="footer-logo">
          <picture>
            <img src="/assets/images/logo.svg" alt="sunnyside-logo" srcset="" />
          </picture>
        </div>
        <div class="links">
          <a href="http://">About</a>
          <a href="http://">Services</a>
          <a href="http://">Projects</a>
        </div>
        <div class="social-media-links">
          <a href="http://"> 
            <picture>
              <img src="/assets/images/icon-facebook.svg" alt="facebook-logo" srcset="" />
            </picture>
          </a>
          <a href="http://"> 
            <picture>
              <img src="/assets/images/icon-instagram.svg" alt="instagram-logo" srcset="" />
            </picture>
          </a>
          <a href="http://"> 
            <picture>
              <img src="/assets/images/icon-twitter.svg" alt="twitter-logo" srcset="" />
            </picture>
          </a>
          <a href="http://"> 
            <picture>
              <img src="/assets/images/icon-pinterest.svg" alt="pinterest-logo" srcset="" />
            </picture>
          </a>
        </div>
      </footer>
    )
}
