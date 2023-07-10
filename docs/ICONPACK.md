 ## Icon Pack list

  Here we describe all our SVG fragment identifiers. 
  
 >⚠️ The `svg/` folder is just to render the icons in this MD.


## Usage

Add the `vtex.store-icons` to your dependencies in `manifest.json`. 

This an example that shows you how to use it. 

```javascript
  import React from 'react'

  import Icon from 'vtex.store-icons'

  const IconSearch = ({ ...props }) => {
    return <Icon id="hpa-search" {...props} />
  }

  IconSearch.propTypes =  {
    /** Icon size, aspect ratio 1:1 */
    size: PropTypes.number,
    /** Icon viewBox. Default 0, 0, 16, 16 */
    viewBox: PropTypes.string,
    /** Define if will be used a active or muted className */
    isActive: PropTypes.bool,
    /** Active color class */
    activeClassName: PropTypes.string,
    /** Muted color class */
    mutedClassName: PropTypes.string,
  }
  export default IconSearch

 ```


 
## SVG Prefixes 

The following prefixes help to understand what a specific icon means. 

* bnd - Brand;
* hpa - High Priority Actions;
* mpa - Midle Priority Actions;
* sti - Status Indicator;
* inf - Informative;
* nav - Navigation
  

### SVG Fragments

| Icon                                    | ID                         |
| --------------------------------------- | -------------------------- |
| ![bnd-logo](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/bnd-logo.svg)  | bnd-logo | 
| ![mpa-expand](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/mpa-expand.svg)  | mpa-expand | 
| ![hpa-arrow-back](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-arrow-back.svg)  | hpa-arrow-back | 
| ![hpa-arrow-from-bottom](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-arrow-from-bottom.svg)  | hpa-arrow-from-bottom | 
| ![hpa-arrow-to-bottom](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-arrow-to-bottom.svg)  | hpa-arrow-to-bottom | 
| ![hpa-calendar](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-calendar.svg)  | hpa-calendar | 
| ![hpa-cart](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-cart.svg)  | hpa-cart | 
| ![hpa-delete](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-delete.svg)  | hpa-delete | 
| ![hpa-hamburguer-menu](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-hamburguer-menu.svg)  | hpa-hamburguer-menu | 
| ![hpa-location-marker](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-location-marker.svg)  | hpa-location-marker | 
| ![hpa-play](https://github.com/vtex-apps/store-icons/blob/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-play.svg)  | hpa-play | 
| ![hpa-profile](https://github.com/vtex-apps/store-icons/blob/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-profile.svg)  | hpa-profile | 
| ![hpa-save](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-save.svg)  | hpa-save | 
| ![hpa-search](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-search.svg)  | hpa-search | 
| ![hpa-telemarketing](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/hpa-telemarketing.svg)  | hpa-telemarketing | 
| ![info-help-filled](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/inf-help--filled.svg)  | inf-help--filled | 
| ![info-help-outline](https://raw.githubusercontent.com/vtex-apps/store-icons/bb60df29809a4edbc13b3e0febd6a3d9eb996ab4/docs/inf-help--outline.svg)  | inf-help--outline | 
| ![](./inf-star.svg)  | inf-star | 
| ![](./inf-tooltip--filled.svg)  | inf-tooltip--filled | 
| ![](./inf-tooltip--outline.svg)  | inf-tooltip--outline | 
| ![](./inf-warning--filled.svg)  | inf-warning--filled | 
| ![](./inf-warning--outline.svg)  | inf-warning--outline | 
| ![](./mpa-angle--down.svg)  | mpa-angle--down | 
| ![](./mpa-angle--up.svg)  | mpa-angle--up | 
| ![](./mpa-arrows.svg)  | mpa-arrows | 
| ![](./mpa-bag.svg)  | mpa-bag | 
| ![](./mpa-bars.svg)  | mpa-bars | 
| ![](./mpa-bookmark--filled.svg)  | mpa-bookmark--filled | 
| ![](./mpa-bookmark--outline.svg)  | mpa-bookmark--outline | 
| ![](./mpa-clone--filled.svg)  | mpa-clone--filled | 
| ![](./mpa-clone--outline.svg)  | mpa-clone--outline | 
| ![](./mpa-cog.svg)  | mpa-cog | 
| ![](./mpa-columns.svg)  | mpa-columns | 
| ![](./mpa-credit-card.svg)  | mpa-credit-card | 
| ![](./mpa-edit--filled.svg)  | mpa-edit--filled | 
| ![](./mpa-edit--outline.svg)  | mpa-edit--outline | 
| ![](./mpa-elypsis.svg)  | mpa-elypsis | 
| ![](./mpa-exchange.svg)  | mpa-exchange | 
| ![](./mpa-export.svg)  | mpa-export | 
| ![](./mpa-external-link--line.svg)  | mpa-external-link--line | 
| ![](./mpa-external-link--outline.svg)  | mpa-external-link--outline | 
| ![](./mpa-eyesight--filled--off.svg)  | mpa-eyesight--filled--off | 
| ![](./mpa-eyesight--filled--on.svg)  | mpa-eyesight--filled--on | 
| ![](./mpa-eyesight--outline--off.svg)  | mpa-eyesight--outline--off | 
| ![](./mpa-eyesight--outline--on.svg)  | mpa-eyesight--outline--on | 
| ![](./mpa-filter--filled.svg)  | mpa-filter--filled | 
| ![](./mpa-filter--outline.svg)  | mpa-filter--outline | 
| ![](./mpa-filter-settings.svg)  | mpa-filter-settings | 
| ![](./mpa-gallery.svg)  | mpa-gallery | 
| ![](./mpa-globe.svg)  | mpa-globe | 
| ![](./mpa-heart.svg)  | mpa-heart | 
| ![](./mpa-link.svg)  | mpa-link | 
| ![](./mpa-list-items.svg)  | mpa-list-items | 
| ![](./mpa-location-input.svg)  | mpa-location-input | 
| ![](./mpa-minus--filled.svg)  | mpa-minus--filled | 
| ![](./mpa-minus--line.svg)  | mpa-minus--line | 
| ![](./mpa-minus--outline.svg)  | mpa-minus--outline | 
| ![](./mpa-plus--filled.svg)  | mpa-plus--filled | 
| ![](./mpa-plus--line.svg)  | mpa-plus--line | 
| ![](./mpa-plus--outline.svg)  | mpa-plus--outline | 
| ![](./mpa-remove.svg)  | mpa-remove | 
| ![](./mpa-settings.svg)  | mpa-settings | 
| ![](./mpa-single-item.svg)  | mpa-single-item | 
| ![](./mpa-store.svg)  | mpa-store | 
| ![](./mpa-swap.svg)  | mpa-swap | 
| ![](./nav-arrow--left.svg)  | nav-arrow--left | 
| ![](./nav-arrow--right.svg)  | nav-arrow--right | 
| ![](./nav-caret--down.svg)  | nav-caret--down | 
| ![](./nav-caret--left.svg)  | nav-caret--left | 
| ![](./nav-caret--right.svg)  | nav-caret--right | 
| ![](./nav-caret--up.svg)  | nav-caret--up | 
| ![](./nav-home.svg)  | nav-home | 
| ![](./nav-minus.svg)  | nav-minus | 
| ![](./nav-plus.svg)  | nav-plus | 
| ![](./nav-thin-caret--left.svg)  | nav-thin-caret--left | 
| ![](./nav-thin-caret--right.svg)  | nav-thin-caret--right | 
| ![](./sti-check--filled.svg)  | sti-check--filled | 
| ![](./sti-check--line.svg)  | sti-check--line | 
| ![](./sti-check--outline.svg)  | sti-check--outline | 
| ![](./sti-clock.svg)  | sti-clock | 
| ![](./sti-close--filled.svg)  | sti-close--filled | 
| ![](./sti-close--line.svg)  | sti-close--line | 
| ![](./sti-close--outline.svg)  | sti-close--outline | 
| ![](./sti-discount.svg)  | sti-discount | 
| ![](./sti-equals.svg)  | sti-equals | 
| ![](./sti-loading.svg)  | sti-loading | 
