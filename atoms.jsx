// Crimson — shared atoms (theme + reusable bits + tokens hook)

window.useCrimsonTheme = function (accent) {
  return React.useMemo(() => ({
    ACCENT: accent || '#E63946',
    BG: '#0A0A0A',
    SURFACE: '#141414',
    SURFACE2: '#1C1C1C',
    SURFACE3: '#242424',
    TEXT: '#F5F1EC',
    MUTED: 'rgba(245,241,236,0.55)',
    DIM: 'rgba(245,241,236,0.35)',
    LINE: 'rgba(245,241,236,0.10)',
    LINE2: 'rgba(245,241,236,0.18)',
    fontDisplay: '"Anton", "Bebas Neue", "Helvetica Neue", Impact, sans-serif',
    fontUI: '"Inter Tight", "Helvetica Neue", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", "SF Mono", ui-monospace, monospace',
  }), [accent]);
};

window.CrimsonGlobalStyles = function ({ accent }) {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

      .cr-marquee { animation: cr-mq 28s linear infinite; }
      @keyframes cr-mq { from{transform:translateX(0)} to{transform:translateX(-50%)} }

      .cr-tap { transition: transform .15s ease, background .15s, color .15s, border-color .15s; }
      .cr-tap:active { transform: scale(.97); }
      .cr-ghost { transition: transform .15s, background .15s, color .15s, border-color .15s; }
      .cr-ghost:hover { background: ${accent}; color: #0A0A0A; border-color: ${accent}; }
      .cr-ghost:hover .cr-arrow { color: #0A0A0A; }

      .cr-link:hover { color: ${accent}; }

      .cr-fade-in { animation: cr-fi .8s ease both; }
      @keyframes cr-fi { from{opacity:0; transform:translateY(8px)} to{opacity:1; transform:none} }

      .cr-shimmer-line {
        position: relative; height: 1px; overflow: hidden;
        background: rgba(245,241,236,0.10);
      }
      .cr-shimmer-line::after {
        content:''; position:absolute; inset:0; width:30%;
        background: linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%);
        animation: cr-sh 4s ease-in-out infinite;
      }
      @keyframes cr-sh { 0%{transform:translateX(-100%)} 100%{transform:translateX(400%)} }

      .cr-pulse { animation: cr-p 2s ease-in-out infinite; }
      @keyframes cr-p { 0%,100%{opacity:1} 50%{opacity:.35} }

      /* Hide scrollbars on internal scrollers */
      .cr-clean::-webkit-scrollbar { width: 0; height: 0; }
      .cr-clean { scrollbar-width: none; }
    `}</style>
  );
};

// Eyebrow used above section blocks
window.CrEyebrow = function ({ children, color, mono }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      fontFamily: mono, fontSize: 10, letterSpacing: '0.2em',
      color, textTransform: 'uppercase',
    }}>
      <span style={{ width: 14, height: 1, background: color }} />
      {children}
    </div>
  );
};

// Section header — number, title, optional subtitle
window.CrSectionHead = function ({ no, title, sub, theme }) {
  return (
    <div style={{ padding: '56px 20px 18px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: sub ? 8 : 0 }}>
        <div style={{ fontFamily: theme.fontMono, fontSize: 11, color: theme.MUTED, letterSpacing: '0.14em' }}>
          — {no}
        </div>
        <div style={{ fontFamily: theme.fontMono, fontSize: 10, color: theme.MUTED, letterSpacing: '0.22em' }}>
          {title}
        </div>
      </div>
      {sub && (
        <div style={{ fontFamily: theme.fontMono, fontSize: 10, color: theme.ACCENT, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 4 }}>
          {sub}
        </div>
      )}
    </div>
  );
};

// Crosshair corner marker
window.CrCross = function ({ size = 12, color, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" style={style}>
      <path d="M0 6h12M6 0v12" stroke={color} strokeWidth="1" />
    </svg>
  );
};
