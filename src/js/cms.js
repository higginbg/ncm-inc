import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import AboutPreview from "./cms-preview-templates/about";
import BioPreview from "./cms-preview-templates/bio";
import TestimonialsPreview from "./cms-preview-templates/testimonials";
import ProjectsLandingPreview from "./cms-preview-templates/projects-landing";
import ProjectsSinglePreview from "./cms-preview-templates/projects-single";
import JoinPreview from "./cms-preview-templates/join";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("bio", BioPreview);
CMS.registerPreviewTemplate("testimonials", TestimonialsPreview);
CMS.registerPreviewTemplate("projects-landing", ProjectsLandingPreview);
CMS.registerPreviewTemplate("projects-single", ProjectsSinglePreview);
CMS.registerPreviewTemplate("join", JoinPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
