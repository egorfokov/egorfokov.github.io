// Crimson — GymBro app section with phone mockup

function CrimsonApp({ theme }) {
  const C = window.FOKOV_FULL;
  const { ACCENT, BG, SURFACE, SURFACE2, TEXT, MUTED, LINE, fontDisplay, fontMono, fontUI } = theme;

  // App screen mock — small phone inside section
  const AppMock = () => (
    <div style={{
      width: 200, height: 410,
      background: '#0A0A0A',
      borderRadius: 26,
      border: `2px solid ${ACCENT}`,
      boxShadow: `0 24px 60px rgba(230,57,70,0.25), inset 0 0 0 4px #0A0A0A`,
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0,
    }}>
      {/* notch */}
      <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 56, height: 14, borderRadius: 10, background: '#0A0A0A', zIndex: 5 }} />

      {/* status bar */}
      <div style={{ padding: '8px 14px 0', display: 'flex', justifyContent: 'space-between', fontSize: 9, color: TEXT, fontFamily: fontMono }}>
        <span>9:41</span>
        <span>●●●</span>
      </div>

      {/* header */}
      <div style={{ padding: '14px 14px 8px' }}>
        <div style={{ fontFamily: fontMono, fontSize: 8, color: MUTED, letterSpacing: '0.18em' }}>СЕГОДНЯ · ВТ</div>
        <div style={{ fontFamily: fontDisplay, fontSize: 20, color: TEXT, marginTop: 4, textTransform: 'uppercase', lineHeight: 1, letterSpacing: '0.01em' }}>
          Грудь · Трицепс
        </div>
        <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
          <span style={{ fontSize: 8, padding: '2px 6px', background: ACCENT, color: '#0A0A0A', fontFamily: fontMono, letterSpacing: '0.1em' }}>5 БЛОКОВ</span>
          <span style={{ fontSize: 8, padding: '2px 6px', border: `1px solid ${LINE}`, color: MUTED, fontFamily: fontMono, letterSpacing: '0.1em' }}>~75 МИН</span>
        </div>
      </div>

      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {C.appScreens.todayWorkout.blocks.map((b, i) => (
          <div key={i} style={{ background: i === 0 ? ACCENT : SURFACE, color: i === 0 ? '#0A0A0A' : TEXT, padding: '8px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontFamily: fontMono, fontSize: 8, opacity: 0.7 }}>{b.tag}</span>
              <span style={{ fontWeight: 600 }}>{b.ex}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontFamily: fontMono, fontSize: 9 }}>{b.sets}</span>
              <span style={{ fontFamily: fontMono, fontSize: 8, opacity: 0.7 }}>{b.kg}</span>
            </div>
          </div>
        ))}
      </div>

      {/* bottom tab */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#161616', borderTop: `1px solid ${LINE}`, padding: '10px 14px 14px', display: 'flex', justifyContent: 'space-around', fontFamily: fontMono, fontSize: 8, letterSpacing: '0.14em' }}>
        <span style={{ color: ACCENT }}>● план</span>
        <span style={{ color: MUTED }}>лог</span>
        <span style={{ color: MUTED }}>чат</span>
        <span style={{ color: MUTED }}>я</span>
      </div>
    </div>
  );

  return (
    <div>
      <CrSectionHead no="04" title="GYMBRO · MY APP" theme={theme} />
      <div style={{ padding: '0 20px' }}>
        <div style={{ background: ACCENT, color: '#0A0A0A', padding: '24px 20px 20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -50, right: -60, fontFamily: fontDisplay, fontSize: 280, color: 'rgba(10,10,10,0.07)', lineHeight: 1, letterSpacing: '-0.04em' }}>G</div>

          <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.2em' }}>MY APP · {C.app.status}</div>

          <h2 style={{ fontFamily: fontDisplay, fontSize: 88, lineHeight: 0.82, margin: '10px 0 0', letterSpacing: '-0.02em', textTransform: 'uppercase', position: 'relative' }}>
            Gym<br/>Bro.
          </h2>

          <p style={{ fontSize: 15, lineHeight: 1.4, margin: '14px 0 0', fontWeight: 500, maxWidth: 280 }}>
            {C.app.pitch} Тренер задаёт программу — клиент выполняет, не теряя ни подхода.
          </p>

          {/* phone mock + bullets */}
          <div style={{ marginTop: 22, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <AppMock />
            <div style={{ flex: 1, paddingTop: 4 }}>
              {C.app.bullets.map((b, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ fontFamily: fontMono, fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', opacity: 0.65 }}>
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.3, marginTop: 2, fontWeight: 500 }}>
                    {b}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(10,10,10,0.2)' }}>
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.16em', marginBottom: 8 }}>СКОРО НА ПЛАТФОРМАХ</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <button className="cr-tap" style={{ background: '#0A0A0A', color: TEXT, border: 0, padding: '14px 12px', fontFamily: fontUI, fontWeight: 600, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>App Store</span><span>↗</span>
              </button>
              <button className="cr-tap" style={{ background: '#0A0A0A', color: TEXT, border: 0, padding: '14px 12px', fontFamily: fontUI, fontWeight: 600, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Google Play</span><span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.CrimsonApp = CrimsonApp;
