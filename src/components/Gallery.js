import React from 'react'

export default function Gallery() {
    return (
        <section class="picture-collage">
        <div class="collage">
         <picture>
           <img src="/assets/images/desktop/image-gallery-milkbottles.jpg" alt="milkbottles" srcset="" />
         </picture>
         <picture>
           <img src="/assets/images/desktop/image-gallery-orange.jpg" alt="oranges" srcset="" />
         </picture>
        </div>
        <div class="collage">
         <picture>
           <img src="/assets/images/desktop/image-gallery-cone.jpg" alt="ice-cream-cone" srcset="" />
         </picture>
         <picture>
           <img src="/assets/images/desktop/image-gallery-sugarcubes.jpg" alt="sugercubes" srcset="" />
         </picture>
        </div>
       </section>
    )
}
