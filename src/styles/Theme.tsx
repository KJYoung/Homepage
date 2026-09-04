import { createGlobalStyle } from "styled-components";

// The site's visual language is defined here. Components should consume these
// semantic tokens instead of introducing new literal colors.
const Theme = createGlobalStyle`
  :root {
    /* University of Michigan brand */
    --umich-navy: #00274c;
    --umich-navy-hover: #001c35;
    --umich-maize: #ffcb05;
    --umich-maize-deep: #e5b700;
    --umich-maize-wash: #fff8d8;
    --umich-maize-glow: rgba(255, 203, 5, 0.24);
    --umich-maize-glow-strong: rgba(255, 203, 5, 0.58);
    --umich-navy-wash: rgba(0, 39, 76, 0.06);

    /* Semantic surfaces */
    --color-canvas: #f8fafc;
    --color-surface: #ffffff;
    --color-surface-subtle: #f4f7fa;
    --color-surface-muted: #eaf0f5;
    --color-surface-navy: #00274c;

    /* Semantic content */
    --color-text: #172b3f;
    --color-text-strong: #00274c;
    --color-text-muted: #5c6e7f;
    --color-text-faint: #82909e;
    --color-link: #155f9f;
    --color-link-hover: #00274c;
    --color-on-navy: #ffffff;

    /* Controls and structure */
    --color-border: #d6e0e8;
    --color-border-strong: #b9cad9;
    --color-focus: #ffcb05;
    --color-success: #2d7a46;
    --color-danger: #b42318;
    --color-info: #155f9f;
    --color-overlay: rgba(0, 24, 47, 0.62);
    --color-overlay-strong: rgba(0, 24, 47, 0.88);
    --color-dark-surface: #17212b;
    --color-dark-surface-raised: #24313d;
    --color-on-dark: #edf3ff;
    --color-on-dark-link: #b9dcf5;
    --color-dark-control: rgba(0, 24, 47, 0.54);
    --color-dark-control-hover: rgba(0, 24, 47, 0.76);
    --color-dark-badge: rgba(0, 24, 47, 0.62);
    --color-dark-rail: rgba(255, 255, 255, 0.06);
    --color-dark-border: rgba(255, 255, 255, 0.15);
    --color-contrast: #000000;
    --color-surface-glass: rgba(255, 255, 255, 0.9);
    --color-surface-glass-subtle: rgba(255, 255, 255, 0.14);
    --color-surface-glass-light: rgba(255, 255, 255, 0.75);
    --color-surface-header: rgba(255, 255, 255, 0.96);
    --color-surface-header-mobile: rgba(255, 255, 255, 0.97);
    --color-scrollbar: rgba(92, 110, 127, 0.48);
    --color-image-scrollbar: rgba(92, 110, 127, 0.5);
    --color-on-navy-muted: rgba(255, 255, 255, 0.78);
    --color-on-navy-faint: rgba(255, 255, 255, 0.64);
    --color-on-navy-border: rgba(255, 255, 255, 0.12);
    --highlight-inset: inset 0 1px 0 rgba(255, 255, 255, 0.82);
    --highlight-inset-soft: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
    --shadow-subtle: 0 3px 12px rgba(0, 39, 76, 0.07);
    --shadow-card: 0 10px 26px rgba(0, 39, 76, 0.12);
    --shadow-modal: 0 24px 58px rgba(0, 24, 47, 0.42);
    --shadow-neutral: 0 4px 8px rgba(0, 0, 0, 0.1);

    /* Feedback */
    --notification-default: var(--umich-navy);
    --notification-default-deep: var(--umich-navy-hover);
    --notification-success: var(--color-success);
    --notification-success-deep: #1f5b34;
    --notification-danger: var(--color-danger);
    --notification-danger-deep: #8d1b13;
    --notification-info: var(--color-info);
    --notification-warning: var(--umich-maize-deep);
    --notification-awesome: #5a4aa3;
    --notification-awesome-deep: #403374;

    /* Legacy aliases kept for shared primitive components. */
    --hp-back: var(--color-canvas);
    --hp-back-darker: var(--color-surface-muted);
    --hp-white: var(--color-surface);
    --hp-black: var(--color-text);
    --hp-gray: var(--color-text-muted);
    --hp-purple: var(--umich-navy);
    --hp-green: var(--color-success);
    --hp-blue: var(--color-link);
    --hp-blue-hover: var(--color-link-hover);
    --hp-blue-active: var(--umich-navy-hover);
    --hp-lightblue: #74a8cf;
    --hp-red: var(--color-danger);
    --hp-red-darker: var(--notification-danger-deep);
    --hp-modal-background: var(--color-overlay);
    --hp-text: var(--color-text);
    --hp-subtext: var(--color-text-muted);
    --hp-text-blue: var(--color-link);
    --hp-footer: var(--color-surface-navy);
    --hp-header-left: rgba(255, 203, 5, 0.22);
    --hp-header-right: rgba(0, 39, 76, 0.16);
    --bibtex-bg: var(--color-surface-muted);
    --bibtex-fg: var(--color-text);
  }
`;

export default Theme;
