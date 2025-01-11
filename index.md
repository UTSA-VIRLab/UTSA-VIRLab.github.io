---
---

# UTSA VIRLab


The Vision and Immersive Realities Lab (VIRLab) at UTSA is an innovative research facility that explores the cutting-edge intersections of technology, human perception, and immersive experiences. VIRLab's interdisciplinary approach encompasses Computer Vision and Immersive Realities, including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR). The lab leverages its discoveries to impact diverse fields, including healthcare, rehabilitation, virtual training, and serious gaming, with a core mission of enhancing human quality of life through immersive technologies.

At the heart of VIRLab's operations is an exceptional team of research students, spanning both graduate and undergraduate levels. Together, they collaborate to craft immersive experiences that push the boundaries of human-computer interaction. Their collective ambition is to make AR, VR, and MR more accessible, intuitive, and adaptable across diverse sectors. Within the healthcare sector, VIRLab concentrates its efforts on exploring the application of immersive technologies in therapy, diagnostics, and training. For instance, augmented reality finds application in assisting post-stroke patients in enhancing their range of motion through rehabilitation exercises integrated into serious games. In the realm of education, immersive VR STEM laboratories are designed to provide students with an interactive and collaborative learning experience.

The lab is well-equipped with state-of-the-art hardware and software, including high-resolution headsets, motion tracking systems, and RGB-D cameras, empowering researchers to develop and evaluate increasingly lifelike immersive environments. Among the various research projects within VIRLab's scope are endeavors like 3D human pose estimation, multi-camera calibration, 3D reconstruction, mesh generation and simplification, and 3D serious game design.

Several of our ongoing research initiatives are generously funded/supported by the US National Science Foundation (NSF). A detailed list of the research projects can be found [here](https://utsa-virlab.github.io/projects/), while a detailed list of related publications can be found [here](https://utsa-virlab.github.io/projects/).

{%
  include button.html
  type="docs"
  link="https://greene-lab.gitbook.io/lab-website-template-docs"
%}
{%
  include button.html
  type="github"
  text="On GitHub"
  link="greenelab/lab-website-template"
%}

{% include section.html %}

## Highlights

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="team"
  title="Our Team"
  text=text
%}
