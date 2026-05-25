// Crimson — Massage section: prices + process

function CrimsonMassage({ theme }) {
  const C = window.FOKOV_FULL;
  const { ACCENT, BG, SURFACE, SURFACE2, TEXT, MUTED, LINE, fontDisplay, fontMono } = theme;
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <CrSectionHead no="02" title="MASSAGE · ПРАЙС" theme={theme} />
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ fontFamily: fontDisplay, fontSize: 64, lineHeight: 0.88, margin: 0, textTransform: 'uppercase' }}>
          Руки,<br/>которые<br/><span style={{ color: ACCENT }}>возвращают.</span>
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: MUTED, margin: '14px 0 22px' }}>
          Сертифицированные техники. Работа с триггерами, фасциями, лимфой, рефлексогенными зонами. Цены — стартовые, итог зависит от длительности и состояния.
        </p>

        {/* image strip */}
        <div style={{ position: 'relative', height: 200, overflow: 'hidden', marginBottom: 22 }}>
          <img src={C.images.massage} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.7) contrast(1.05)' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 30%, ${BG} 100%)` }} />
          <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: fontMono, fontSize: 10, letterSpacing: '0.18em', color: ACCENT }}>
            STUDIO · 60–90 MIN
          </div>
        </div>

        {/* price cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {C.massage.map((m, i) => {
            const isActive = active === i;
            return (
              <div key={i} onClick={() => setActive(i)}
                style={{
                  background: isActive ? ACCENT : SURFACE,
                  color: isActive ? '#0A0A0A' : TEXT,
                  padding: 16,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'background .25s, color .25s',
                  border: isActive ? `1px solid ${ACCENT}` : `1px solid ${LINE}`,
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: fontMono, fontSize: 10, opacity: 0.6, letterSpacing: '0.16em' }}>
                    {String(i+1).padStart(2,'0')}/05
                  </div>
                  <div style={{ fontFamily: fontMono, fontSize: 10, opacity: 0.6, letterSpacing: '0.14em' }}>
                    {m.en.toUpperCase()}
                  </div>
                </div>
                <div style={{ fontFamily: fontDisplay, fontSize: 36, lineHeight: 1, marginTop: 12, letterSpacing: '0.01em', textTransform: 'uppercase' }}>
                  {m.ru}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.45, opacity: 0.78, marginTop: 10, paddingRight: 20 }}>
                  {m.desc}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, paddingTop: 12, borderTop: `1px solid ${isActive ? 'rgba(10,10,10,0.2)' : LINE}` }}>
                  <span style={{ fontSize: 12, opacity: 0.75 }}>⏱ {m.dur}</span>
                  <span style={{ fontFamily: fontDisplay, fontSize: 22, letterSpacing: '0.02em' }}>{m.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* combo offer */}
        <div style={{ marginTop: 14, padding: 16, background: SURFACE2, border: `1px dashed ${ACCENT}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontFamily: fontMono, fontSize: 10, color: ACCENT, letterSpacing: '0.18em' }}>+ COMBO</div>
            <div style={{ fontFamily: fontDisplay, fontSize: 20, color: ACCENT }}>−15%</div>
          </div>
          <div style={{ fontFamily: fontDisplay, fontSize: 22, lineHeight: 1.05, marginTop: 8, textTransform: 'uppercase' }}>
            Курс из 5 сессий
          </div>
          <div style={{ fontSize: 12, color: MUTED, marginTop: 6, lineHeight: 1.45 }}>
            Подходит, если хочешь системно работать с восстановлением или готовишься к старту.
          </div>
        </div>

        {/* process */}
        <div style={{ marginTop: 36 }}>
          <CrEyebrow color={ACCENT} mono={fontMono}>КАК ЭТО РАБОТАЕТ</CrEyebrow>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
            {C.process.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 0', borderTop: i === 0 ? `1px solid ${LINE}` : 'none', borderBottom: `1px solid ${LINE}` }}>
                <div style={{ fontFamily: fontDisplay, fontSize: 34, color: ACCENT, lineHeight: 0.9, minWidth: 44 }}>
                  .{String(p.n).padStart(2,'0')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: fontDisplay, fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.01em' }}>
                    {p.t}
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.45, color: MUTED, marginTop: 4 }}>
                    {p.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.CrimsonMassage = CrimsonMassage;
