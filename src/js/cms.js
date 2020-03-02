import React from 'react';
import CMS from 'netlify-cms-app';

// Import main site styles as a string to inject into the CMS preview pane
import styles from '!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css';

import HomePreview from './cms-preview-templates/home';
import AboutPreview from './cms-preview-templates/about';
import TestimonialsPreview from './cms-preview-templates/testimonials';
import ProjectListPreview from './cms-preview-templates/project-list';
import ProjectSinglePreview from './cms-preview-templates/project-single';
import JoinPreview from './cms-preview-templates/join';
import ContactPreview from './cms-preview-templates/contact';

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate('home', HomePreview);
CMS.registerPreviewTemplate('about', AboutPreview);
CMS.registerPreviewTemplate('testimonials', TestimonialsPreview);
CMS.registerPreviewTemplate('project-list', ProjectListPreview);
CMS.registerPreviewTemplate('project-single', ProjectSinglePreview);
CMS.registerPreviewTemplate('join', JoinPreview);
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.init();
