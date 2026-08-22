/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Every value reads from the custom property defined in globals.css, so
      // the palette has exactly one source of truth.
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-oss': 'var(--accent-oss)',
        'status-live': 'var(--status-live)',
        'status-wait': 'var(--status-wait)',
        'status-wip': 'var(--status-wip)',
      },
      // Text and border tokens get their own scales: `--text-faint` and
      // `--border-faint` would otherwise collide on one shared colour name.
      textColor: {
        text: 'var(--text)',
        body: 'var(--text-body)',
        muted: 'var(--text-muted)',
        dim: 'var(--text-dim)',
        faint: 'var(--text-faint)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        border: 'var(--border)',
        faint: 'var(--border-faint)',
        mid: 'var(--border-mid)',
        strong: 'var(--border-strong)',
      },
      fontFamily: {
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      // The design's tracking scale, keyed by hundredths of an em:
      // `tracking-14` is `.14em`. These recur on every eyebrow and label.
      letterSpacing: {
        '02': '.02em',
        '06': '.06em',
        '08': '.08em',
        '10': '.1em',
        '12': '.12em',
        '14': '.14em',
        '18': '.18em',
        '20': '.2em',
        '22': '.22em',
        '30': '.3em',
        '35': '.35em',
      },
      maxWidth: {
        content: '1080px',
      },
    },
  },
  plugins: [],
}
