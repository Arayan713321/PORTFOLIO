// ===================================
// ENHANCED SPLASH SCREEN LOGIC
// ===================================

class SplashScreen {
    constructor() {
        this.duration = 1800; // 1.8 seconds (clean and fast)
        this.hasShown = this.checkIfShown();
    }

    checkIfShown() {
        return sessionStorage.getItem('splashShown') === 'true';
    }

    shouldShow() {
        return !this.hasShown;
    }

    createParticles() {
        const particlesHTML = [];
        for (let i = 0; i < 8; i++) {
            const left = Math.random() * 100;
            const delay = Math.random() * 6;
            const duration = 6 + Math.random() * 3;
            particlesHTML.push(`
        <div class="particle" style="
          left: ${left}%;
          animation-delay: ${delay}s;
          animation-duration: ${duration}s;
        "></div>
      `);
        }
        return particlesHTML.join('');
    }

    create() {
        const splash = document.createElement('div');
        splash.className = 'splash-screen';
        splash.innerHTML = `
      <div class="splash-particles">
        ${this.createParticles()}
      </div>
      <div class="splash-content">
        <div class="splash-profile">
          <img src="/assets/images/arayan-profile.png" alt="Arayan Kumar Shaw" class="splash-profile-img" />
        </div>
        <h1 class="splash-logo">Arayan Kumar Shaw</h1>
        <p class="splash-tagline">Mobile, Full-Stack & AI Engineer</p>
        <div class="splash-progress">
          <div class="splash-progress-fill"></div>
        </div>
      </div>
    `;

        document.body.appendChild(splash);
        document.body.classList.add('splash-active');

        return splash;
    }

    show() {
        if (!this.shouldShow()) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            const splash = this.create();

            // Auto-hide after duration
            setTimeout(() => {
                this.hide(splash, resolve);
            }, this.duration);
        });
    }

    hide(splash, callback) {
        // Add exit animation
        splash.classList.add('exiting');

        // Wait for animation
        setTimeout(() => {
            splash.classList.add('hidden');
            document.body.classList.remove('splash-active');

            // Mark as shown
            sessionStorage.setItem('splashShown', 'true');

            // Remove from DOM
            setTimeout(() => {
                splash.remove();
                if (callback) callback();
            }, 800);
        }, 800);
    }
}

const splashScreen = new SplashScreen();

export default splashScreen;
