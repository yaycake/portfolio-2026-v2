import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="hero">
    <h1 class="hero-title">Hi, I'm Grace.</h1>
    <p class="hero-subtitle">
      I enjoy creating <strong>human-centered designs</strong><br>
      for the <span class="highlight">new agentic world</span>.
    </p>
    <button class="cta-button">Contact Me</button>
    <nav class="social-links">
      <a href="#" class="social-link">LinkedIn</a>
      <a href="#" class="social-link">Resume</a>
      <a href="#" class="social-link">Email</a>
      <a href="#" class="social-link">Github</a>
    </nav>
  </div>

  <section class="works-section">
    <h2 class="works-heading">Select Works</h2>

    <!-- Featured Project -->
    <div class="project-card featured">
      <div class="project-info">
        <div class="project-meta">
          <div class="project-header">
            <div class="project-company">
              <img src="/icons/patlytics-black.svg" alt="Patlytics" class="company-icon">
              <span class="company-name">Patlytics</span>
            </div>
            <span class="project-year">2024 - 2026</span>
          </div>
          <p class="project-role">Founding Designer</p>
        </div>
        <p class="project-description">
          <span class="highlight">Designed and built</span> an enterprise AI powered IP platform from <span class="highlight">0 - 1</span>
        </p>
        <button class="read-more-btn">Read More</button>
      </div>
      <div class="project-image">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" alt="Patlytics project">
      </div>
    </div>

    <!-- Second Row - Two Column -->
    <div class="two-column-grid">
      <div class="project-card">
        <div class="project-meta">
          <div class="project-header">
            <div class="project-company">
              <img src="/icons/viewabo-black.svg" alt="Viewabo" class="company-icon">
              <span class="company-name">Viewabo</span>
            </div>
            <span class="project-year">2021-2023</span>
          </div>
          <p class="project-role">Founding Designer</p>
        </div>
        <div class="project-hover-content">
          <p class="project-description-text">Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque dui sagittis adipiscing lacinia nulla nisl.</p>
          <a href="#" class="read-more-link">
            Read more
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="project-thumbnail">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" alt="Viewabo project">
        </div>
      </div>

      <div class="project-card">
        <div class="project-meta">
          <div class="project-header">
            <div class="project-company">
              <img src="/icons/ubisoft-black.svg" alt="Ubisoft" class="company-icon">
              <span class="company-name">Ubisoft</span>
            </div>
            <span class="project-year">2018</span>
          </div>
          <p class="project-role">Design</p>
        </div>
        <div class="project-hover-content">
          <p class="project-description-text">Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque dui sagittis adipiscing lacinia nulla nisl.</p>
          <a href="#" class="read-more-link">
            Read more
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="project-thumbnail">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" alt="Ubisoft project">
        </div>
      </div>
    </div>

    <!-- Third Row - Three Column -->
    <div class="three-column-grid">
      <div class="project-card">
        <div class="project-meta">
          <div class="project-header">
            <div class="project-company">
              <img src="/icons/skyrock-black.svg" alt="Skyrock" class="company-icon">
              <span class="company-name">Skyrock</span>
            </div>
            <span class="project-year">2020 - 2021</span>
          </div>
          <p class="project-role">Director</p>
        </div>
        <div class="project-hover-content">
          <p class="project-description-text">Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque dui sagittis adipiscing lacinia nulla nisl.</p>
          <a href="#" class="read-more-link">
            Read more
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="project-thumbnail">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" alt="Skyrock project">
        </div>
      </div>

      <div class="project-card">
        <div class="project-meta">
          <div class="project-header">
            <div class="project-company">
              <img src="/icons/orm-black.svg" alt="ORM" class="company-icon">
              <span class="company-name">ORM</span>
            </div>
            <span class="project-year">2019</span>
          </div>
          <p class="project-role">Design & Front End</p>
        </div>
        <div class="project-hover-content">
          <p class="project-description-text">Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque dui sagittis adipiscing lacinia nulla nisl.</p>
          <a href="#" class="read-more-link">
            Read more
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="project-thumbnail">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" alt="ORM project">
        </div>
      </div>

      <div class="project-card">
        <div class="project-meta">
          <div class="project-header">
            <div class="project-company">
              <img src="/icons/lewagon-black.svg" alt="Le Wagon" class="company-icon">
              <span class="company-name">Le Wagon</span>
            </div>
            <span class="project-year">2018</span>
          </div>
          <p class="project-role">Product Design & Front End</p>
        </div>
        <div class="project-hover-content">
          <p class="project-description-text">Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque dui sagittis adipiscing lacinia nulla nisl.</p>
          <a href="#" class="read-more-link">
            Read more
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        <div class="project-thumbnail">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" alt="Le Wagon project">
        </div>
      </div>
    </div>
  </section>
`
