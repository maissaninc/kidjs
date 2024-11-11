import rotateIconPortrait from '../assets/rotate-portrait.svg';
import rotateIconLandscape from '../assets/rotate-landscape.svg';
import lockOrientationIcon from '../assets/rotation-lock.svg';

export default class OrientationOverlay {

    /**
     * this.domElement shown when orientation is incorrect.
     *
     * @constructor
     * @param {int} x - Initial x coordinate
     * @param {int} y - Initial y coordinate
     */
    constructor() {
        this.domElement = document.createElement('div');
        this.domElement.style.position = 'fixed';
        this.domElement.style.top = '0px';
        this.domElement.style.left = '0px';
        this.domElement.style.width = '100%';
        this.domElement.style.height = '100%';
        this.domElement.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        this.domElement.style.backdropFilter = 'blur(10px)';
        this.domElement.style.display = 'none';
        this.domElement.style.flexDirection = 'column';
        this.domElement.style.alignItems = 'center';
        this.domElement.style.justifyContent = 'center';
        this.domElement.style.zIndex = 1000;

        let icons = document.createElement('div');
        icons.style.display = 'flex';
        icons.style.alignItems = 'center';
        icons.style.marginBottom = '15px';

        icons.appendChild(this.stepElement(1));
        this.rotateIcon = document.createElement('img');
        this.rotateIcon.style.width = '100px';
        this.rotateIcon.style.height = '100px';
        this.rotateIcon.style.marginRight = '30px';
        icons.appendChild(this.rotateIcon);

        icons.appendChild(this.stepElement(2));
        let lockIcon = document.createElement('img');
        lockIcon.src = lockOrientationIcon;
        lockIcon.style.width = '100px';
        lockIcon.style.height = '100px';
        icons.appendChild(lockIcon); 

        this.message = document.createElement('div');
        this.message.style.fontFamily = '"Public Sans", Helvetica, sans-serif';
        this.message.style.fontSize = '36px';
        this.message.style.fontWeight = 'bold';

        this.domElement.appendChild(icons);
        this.domElement.appendChild(this.message);

        document.body.appendChild(this.domElement);

        screen.orientation.addEventListener('change', this.onOrientationChanged.bind(this));
        this.onOrientationChanged();
    }

    /**
     * Generate step number element.
     * 
     * @param {int} step 
     */
    stepElement(step) {
        let element = document.createElement('div');
        element.style.display = 'flex';
        element.style.alignItems = 'center';
        element.style.justifyContent = 'center';
        element.style.width = '30px';
        element.style.height = '30px';
        element.style.borderRadius = '30px';
        element.style.backgroundColor = '#000';
        element.style.color = '#fff';
        element.style.fontFamily = '"Public Sans", Helvetica, sans-serif';
        element.style.fontSize = '16px';
        element.style.marginRight = '8px';
        element.style.position = 'relative';
        element.style.top = '8px';
        element.textContent = step;
        return element;
    }

    /**
     * Show incorrect orientation overlay.
     * 
     * @param {string} orientation - Required orientation
     */
    show(orientation) {
        this.message.textContent = `This app is designed for ${orientation}`;
        this.rotateIcon.src = orientation == 'portrait' ? rotateIconPortrait : rotateIconLandscape;
        this.domElement.style.display = 'flex';
    }

    /**
     * Hide incorrect orientation overlay.
     */
    hide() {
        this.domElement.style.display = 'none';
    }

    /**
     * Orientation changed
     */
    onOrientationChanged() {
        this.hide();
        console.log(screen.orientation.type);
        if (window._kidjs_.settings.orientation == 'portrait' && (
            screen.orientation.type == 'landscape' ||
            screen.orientation.type == 'landscape-primary' ||
            screen.orientation.type == 'landscape-secondary'
        )) {
            this.show('portrait');
        }
        if (window._kidjs_.settings.orientation == 'landscape' && (
            screen.orientation.type == 'portrait' ||
            screen.orientation.type == 'portrait-primary' ||
            screen.orientation.type == 'portrait-secondary'
        )) {
            this.show('landscape');
        }
    }
}