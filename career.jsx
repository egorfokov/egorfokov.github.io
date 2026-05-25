// Crimson — Career timeline + credentials with 3D scroll animations

function useScrollReveal(threshold = 0.25) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState('below'); // 'below' | 'visible' | 'above'
  const prevY = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.top;
        const isVisible = entry.isIntersecting;

        if (isVisible) {
          setState('visible');
        } else {
          if (prevY.current !== null) {
            setState(currentY < prevY.current ? 'above' : 'below');
          }
        }
        prevY.current = currentY;
      },
      { threshold, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, state];
}

function TimelineItem({ e, i, isLast, theme }) {
  const { ACCENT, BG, TEXT, MUTED, fontDisplay, fontMono } = theme;
  const [ref, state] = useScrollReveal(0.2);

  const transforms = {
    below: 'perspective(600px) rotateX(28deg) translateY(44px) scale(0.94)',
    visible: 'perspective(600px) rotateX(0deg) translateY(0px) scale(1)',
    above: 'perspective(600px) rotateX(-14deg) translateY(-24px) scale(0.97)',
  };
  const opacities = { below: 0, visible: 1, above: 0.45 };
  const blurs = { below: 'blur(4px)', visible: 'blur(0px)', above: 'blur(1px)' };

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        paddingLeft: 60,
        paddingBottom: 22,
        transform: transforms[state],
        opacity: opacities[state],
        filter: blurs[state],
        transition: state === 'visible'
          ? 'transform 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease, filter 0.45s ease'
          : 'transform 0.35s cubic-bezier(0.55,0,1,0.45), opacity 0.3s ease, filter 0.3s ease',
        transformOrigin: 'center top',
        willChange: 'transform, opacity',
      }}
    >
      {/* dot */}
      <div style={{
        position: 'absolute', left: 24, top: 6, width: 13, height: 13,
        background: isLast ? ACCENT : BG,
        border: `2px solid ${ACCENT}`,
        boxShadow: isLast ? `0 0 12px ${ACCENT}, 0 0 24px ${ACCENT}44` : 'none',
        transition: 'box-shadow 0.4s ease',
      }} />

      <div style={{ fontFamily: fontMono, fontSize: 11, color: ACCENT, letterSpacing: '0.18em', marginTop: 2 }}>
        {e.y}
      </div>
      <div style={{ fontFamily: fontDisplay, fontSize: 24, lineHeight: 1.05, textTransform: 'uppercase', marginTop: 4, letterSpacing: '0.01em' }}>
        {e.t}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.45, color: MUTED, marginTop: 6 }}>
        {e.d}
      </div>
    </div>
  );
}

function CredentialCard({ c, i, theme }) {
  const { ACCENT, SURFACE, TEXT, MUTED, fontDisplay } = theme;
  const [ref, state] = useScrollReveal(0.3);

  const delay = i * 80;

  return (
    <div
      ref={ref}
      style={{
        background: SURFACE,
        padding: 16,
        minHeight: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: state === 'visible'
          ? 'perspective(500px) rotateY(0deg) scale(1) translateY(0px)'
          : state === 'below'
          ? 'perspective(500px) rotateY(8deg) scale(0.92) translateY(30px)'
          : 'perspective(500px) rotateY(-4deg) scale(0.97) translateY(-12px)',
        opacity: state === 'visible' ? 1 : state === 'below' ? 0 : 0.5,
        transition: state === 'visible'
          ? `transform 0.6s ${delay}ms cubic-bezier(0.22,1,0.36,1), opacity 0.5s ${delay}ms ease`
          : `transform 0.3s ease, opacity 0.25s ease`,
        willChange: 'transform, opacity',
      }}
    >
      <div style={{ fontFamily: fontDisplay, fontSize: 38, color: ACCENT, lineHeight: 0.9 }}>{c.tag}</div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{c.label}</div>
        <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{c.sub}</div>
      </div>
    </div>
  );
}

function CrimsonCareer({ theme }) {
  const C = window.FOKOV_FULL;
  const { ACCENT, BG, SURFACE, TEXT, MUTED, LINE, fontDisplay, fontMono } = theme;

  return (
    <div>
      <CrSectionHead no="01" title="CAREER · 17 ЛЕТ" theme={theme} />
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ fontFamily: fontDisplay, fontSize: 56, lineHeight: 0.92, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
          От бортика<br/>до <span style={{ color: ACCENT }}>магистратуры.</span>
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: MUTED, margin: '16px 0 0' }}>
          Не «вошёл в фитнес после офиса». Спорт — это вся моя биография.
        </p>

        {/* timeline */}
        <div style={{ marginTop: 32, position: 'relative' }}>
          {/* vertical line */}
          <div style={{ position: 'absolute', left: 30, top: 8, bottom: 8, width: 1, background: LINE }} />
          {C.timeline.map((e, i) => (
            <TimelineItem
              key={i}
              e={e}
              i={i}
              isLast={i === C.timeline.length - 1}
              theme={theme}
            />
          ))}
        </div>

        {/* credentials grid */}
        <div style={{ marginTop: 22 }}>
          <CrEyebrow color={ACCENT} mono={fontMono}>ДОКУМЕНТЫ</CrEyebrow>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: LINE, border: `1px solid ${LINE}` }}>
            {C.career.map((c, i) => (
              <CredentialCard key={i} c={c} i={i} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.CrimsonCareer = CrimsonCareer;
