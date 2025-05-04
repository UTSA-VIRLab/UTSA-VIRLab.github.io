---
layout: default
title: Home
nav:
  title: Home
  order: 0
  tooltip: Back to the lab’s homepage
---


The Vision and Immersive Realities Lab (VIRLab) at UTSA is an innovative research facility that explores the cutting-edge intersections of technology, human perception, and immersive experiences. VIRLab's interdisciplinary approach encompasses Computer Vision and Immersive Realities, including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR). The lab leverages its discoveries to impact diverse fields, including healthcare, rehabilitation, virtual training, and serious gaming, with a core mission of enhancing human quality of life through immersive technologies.

At the heart of VIRLab's operations is an exceptional team of research students, spanning both graduate and undergraduate levels. Together, they collaborate to craft immersive experiences that push the boundaries of human-computer interaction. Their collective ambition is to make AR, VR, and MR more accessible, intuitive, and adaptable across diverse sectors. Within the healthcare sector, VIRLab concentrates its efforts on exploring the application of immersive technologies in therapy, diagnostics, and training. For instance, augmented reality finds application in assisting post-stroke patients in enhancing their range of motion through rehabilitation exercises integrated into serious games. In the realm of education, immersive VR STEM laboratories are designed to provide students with an interactive and collaborative learning experience.

The lab is well-equipped with state-of-the-art hardware and software, including high-resolution headsets, motion tracking systems, and RGB-D cameras, empowering researchers to develop and evaluate increasingly lifelike immersive environments. Among the various research projects within VIRLab's scope are endeavors like 3D human pose estimation, multi-camera calibration, 3D reconstruction, mesh generation and simplification, and 3D serious game design.

Several of our ongoing research initiatives are generously funded/supported by the US National Science Foundation (NSF). A detailed list of the research projects can be found [here](https://utsa-virlab.github.io/projects/), while a detailed list of related publications can be found [here](https://utsa-virlab.github.io/research/).


<div class="slideshow-container">
  {% for s in site.data.slider %}
    <div class="mySlides fade">
      <div class="numbertext">{{ forloop.index }} / {{ site.data.slider | size }}</div>
      <img src="{{ s.image | relative_url }}" alt="{{ s.caption }}">
      <div class="text">{{ s.caption }}</div>
    </div>
  {% endfor %}

<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>
</div>

<div class="dots-container">
  {% for s in site.data.slider %}
    <span class="dot" onclick="currentSlide({{ forloop.index }})"></span>
  {% endfor %}
</div>

<script src="{{ '/_scripts/home.js' | relative_url }}" defer></script>

# {% include icon.html icon="fa-regular fa-envelope" %} Contact


<div class="contact-columns">

  <!-- LEFT COLUMN -->
  <div class="contact-info">
    <ul>
      <li>
        <strong>Email:</strong><br>
        <a href="mailto:kevin.desai@utsa.edu">kevin.desai@utsa.edu</a>
      </li>
      <li>
        <strong>Office:</strong><br>
        Room 340J, UTSA San Pedro I
      </li>
      <li>
        <strong>Address:</strong><br>
        <a href="https://www.google.com/maps/place/506+Dolorosa+St,+San+Antonio,+TX+78204" target="_blank">
          506 Dolorosa St, San Antonio, TX 78204
        </a>
      </li>
    </ul>
  </div>

  <!-- RIGHT COLUMN (MAP) -->
  <div class="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.0412861547794!2d-98.49647888488427!3d29.424353181901956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58ea08d4d325%3A0xb3d637aef7fa7cb5!2sUTSA%20-%20San%20Pedro%20I!5e0!3m2!1sen!2sus!4v1610077190824!5m2!1sen!2sus"
      loading="lazy">
    </iframe>
  </div>

</div>

{% include section.html %}

