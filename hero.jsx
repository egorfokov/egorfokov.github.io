// Crimson — Hero + Manifesto + Stats

function CrimsonHero({ theme }) {
  const C = window.FOKOV_FULL;
  const { ACCENT, BG, SURFACE, TEXT, MUTED, LINE, fontDisplay, fontUI, fontMono } = theme;

  return (
    <div>
      {/* ── HERO ── */}
      <div style={{ position: 'relative', height: 660, overflow: 'hidden' }}>
        <img src={C.images.portrait} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85) contrast(1.05)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.1) 30%, rgba(10,10,10,0.25) 60%, ${BG} 100%)` }} />

        {/* corner crosshairs */}
        <div style={{ position: 'absolute', top: 88, left: 16 }}><CrCross color={ACCENT} /></div>
        <div style={{ position: 'absolute', top: 88, right: 16 }}><CrCross color={ACCENT} /></div>
        <div style={{ position: 'absolute', bottom: 30, left: 16 }}><CrCross color={ACCENT} /></div>
        <div style={{ position: 'absolute', bottom: 30, right: 16 }}><CrCross color={ACCENT} /></div>

        {/* top bar */}
        <div style={{ position: 'absolute', top: 64, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="cr-pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT, boxShadow: `0 0 12px ${ACCENT}` }} />
            <span style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.2em', color: TEXT }}>УКРАИНА · {C.city.toUpperCase()}</span>
          </div>
          <span style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.18em', color: MUTED }}>EST/2026</span>
        </div>

        {/* eyebrow + name */}
        <div style={{ position: 'absolute', left: 16, right: 16, bottom: 40 }}>
          <CrEyebrow color={ACCENT} mono={fontMono}>SWIM · GYM · MASSAGE</CrEyebrow>
          <h1 style={{ fontFamily: fontDisplay, fontSize: 84, lineHeight: 0.86, margin: '14px 0 0', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
            FOKOV<br /><span style={{ color: ACCENT }}>YEHOR.</span>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.45, color: 'rgba(245,241,236,0.85)', margin: '16px 0 0', maxWidth: 300 }}>
            Массажист. Тренер по плаванию и фитнесу.<br />
            Создатель приложения <span style={{ color: ACCENT, fontWeight: 600 }}>GymBro</span>.
          </p>

          <div style={{ marginTop: 22, display: 'flex', gap: 8 }}>
            <a href={C.links.telegram} className="cr-tap" style={{ background: ACCENT, color: '#0A0A0A', padding: '12px 16px', fontFamily: fontUI, fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Записаться <span>→</span>
            </a>
            <a href="#about" className="cr-ghost" style={{ background: 'transparent', color: TEXT, padding: '12px 16px', border: `1px solid ${LINE}`, fontFamily: fontUI, fontWeight: 600, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Узнать больше
            </a>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, overflow: 'hidden', padding: '14px 0', background: BG }}>
        <div className="cr-marquee" style={{ display: 'flex', whiteSpace: 'nowrap', gap: 32, fontFamily: fontDisplay, fontSize: 24, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          {Array.from({ length: 2 }).map((_, k) =>
          <div key={k} style={{ display: 'flex', gap: 32 }}>
              <span>Swim</span><span style={{ color: ACCENT }}>✦</span>
              <span>Sport massage</span><span style={{ color: ACCENT }}>✦</span>
              <span>Gym</span><span style={{ color: ACCENT }}>✦</span>
              <span>Triathlon</span><span style={{ color: ACCENT }}>✦</span>
              <span>Recovery</span><span style={{ color: ACCENT }}>✦</span>
              <span>GymBro</span><span style={{ color: ACCENT }}>✦</span>
            </div>
          )}
        </div>
      </div>

      {/* ── BIG STATS ── */}
      <div style={{ padding: '36px 20px 0' }}>
        <CrEyebrow color={ACCENT} mono={fontMono}>В ЦИФРАХ</CrEyebrow>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: LINE, border: `1px solid ${LINE}` }}>
          {C.bigStats.map((s, i) =>
          <div key={i} style={{ background: BG, padding: '20px 16px', minHeight: 110, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: fontDisplay, fontSize: 52, color: ACCENT, lineHeight: 0.9, letterSpacing: '-0.01em' }}>{s.v}</div>
              <div style={{ fontSize: 11, color: TEXT, letterSpacing: '0.04em', textTransform: 'lowercase' }}>{s.l}</div>
            </div>
          )}
        </div>
      </div>

      {/* ── MANIFESTO ── */}
      <div id="about" style={{ padding: '52px 20px 0' }}>
        <CrEyebrow color={ACCENT} mono={fontMono}>МАНИФЕСТ</CrEyebrow>
        <h2 style={{ fontFamily: fontDisplay, fontSize: 52, lineHeight: 0.94, margin: '14px 0 0', textTransform: 'uppercase' }}>
          Я не тренирую<br />«для отчёта».<br /><span style={{ color: ACCENT }}>Я тренирую<br />для результата.</span>
        </h2>

        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ background: SURFACE, border: `1px solid ${LINE}`, padding: 14 }}>
            <div style={{ fontFamily: fontMono, fontSize: 10, color: ACCENT, letterSpacing: '0.16em' }}>+ ДА</div>
            <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {C.manifesto.do.map((x, i) =>
              <li key={i} style={{ fontSize: 12, lineHeight: 1.4, display: 'flex', gap: 8 }}>
                  <span style={{ color: ACCENT, fontWeight: 700 }}>—</span>{x}
                </li>
              )}
            </ul>
          </div>
          <div style={{ background: 'transparent', border: `1px solid ${LINE}`, padding: 14 }}>
            <div style={{ fontFamily: fontMono, fontSize: 10, color: MUTED, letterSpacing: '0.16em' }}>— НЕТ</div>
            <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {C.manifesto.dont.map((x, i) =>
              <li key={i} style={{ fontSize: 12, lineHeight: 1.4, display: 'flex', gap: 8, color: MUTED }}>
                  <span>×</span>{x}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>);

}

window.CrimsonHero = CrimsonHero;