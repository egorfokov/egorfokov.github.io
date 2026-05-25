// Crimson — Training: pool & gym + weekly schedule

function CrimsonTraining({ theme }) {
  const C = window.FOKOV_FULL;
  const { ACCENT, BG, SURFACE, TEXT, MUTED, LINE, fontDisplay, fontMono } = theme;

  const slotColor = (label) => {
    if (label === 'Бассейн') return ACCENT;
    if (label === 'Зал') return TEXT;
    if (label === 'Массаж') return '#F5C26B';
    if (label === 'Открытая вода') return '#5DC2FF';
    return MUTED;
  };

  return (
    <div>
      <CrSectionHead no="03" title="TRAINING · ВОДА И ЖЕЛЕЗО" theme={theme} />
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ fontFamily: fontDisplay, fontSize: 80, lineHeight: 0.85, margin: 0, textTransform: 'uppercase' }}>
          Вода.<br/><span style={{ color: ACCENT }}>Железо.</span>
        </h2>

        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {C.training.map((t, i) => (
            <div key={i} style={{ position: 'relative', height: 300, overflow: 'hidden', background: SURFACE }}>
              <img src={t.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.25) contrast(1.05)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.88) 100%)' }} />
              <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: fontMono, fontSize: 10, letterSpacing: '0.18em', color: ACCENT }}>
                0{i+1} / {t.en.toUpperCase()}
              </div>
              <div style={{ position: 'absolute', top: 14, right: 14, fontFamily: fontMono, fontSize: 10, letterSpacing: '0.14em', color: 'rgba(245,241,236,0.7)' }}>
                {i === 0 ? 'GROUP · 1-ON-1' : 'PERSONAL'}
              </div>
              <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
                <div style={{ fontFamily: fontDisplay, fontSize: 60, lineHeight: 0.9, textTransform: 'uppercase' }}>
                  {t.place}
                </div>
                <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {t.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 12, color: 'rgba(245,241,236,0.88)', display: 'flex', gap: 8 }}>
                      <span style={{ color: ACCENT }}>—</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* prices for training */}
        <div style={{ marginTop: 22 }}>
          <CrEyebrow color={ACCENT} mono={fontMono}>СТОИМОСТЬ ТРЕНИРОВОК</CrEyebrow>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: LINE, border: `1px solid ${LINE}` }}>
            {[
              { t: 'Бассейн · 60 мин', p: 'от 4 000 ₽', tag: '1-on-1' },
              { t: 'Группа · 60 мин', p: 'от 2 500 ₽', tag: 'до 4 чел' },
              { t: 'Зал · 60 мин', p: 'от 3 500 ₽', tag: 'персонал.' },
              { t: 'Абонемент', p: '−20%', tag: '8 трен.' },
            ].map((x, i) => (
              <div key={i} style={{ background: SURFACE, padding: 14, minHeight: 96, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: fontMono, fontSize: 9, color: MUTED, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{x.tag}</div>
                <div>
                  <div style={{ fontFamily: fontDisplay, fontSize: 22, color: ACCENT, lineHeight: 0.9 }}>{x.p}</div>
                  <div style={{ fontSize: 11, color: TEXT, marginTop: 6 }}>{x.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* weekly schedule */}
        <div style={{ marginTop: 36 }}>
          <CrEyebrow color={ACCENT} mono={fontMono}>РАСПИСАНИЕ НА НЕДЕЛЮ</CrEyebrow>
          <div style={{ marginTop: 14, border: `1px solid ${LINE}`, background: SURFACE }}>
            {/* header */}
            <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 1fr', borderBottom: `1px solid ${LINE}`, padding: '10px 12px' }}>
              <div></div>
              {['AM', 'PM', 'EVE'].map((h, i) => (
                <div key={i} style={{ fontFamily: fontMono, fontSize: 9, color: MUTED, letterSpacing: '0.18em' }}>
                  {h}
                </div>
              ))}
            </div>
            {C.schedule.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 1fr', padding: '12px', borderTop: i === 0 ? 'none' : `1px solid ${LINE}`, alignItems: 'center' }}>
                <div style={{ fontFamily: fontDisplay, fontSize: 16, color: ACCENT, letterSpacing: '0.02em' }}>
                  {row.d}
                </div>
                {[row.am, row.pm, row.ev].map((slot, j) => (
                  <div key={j} style={{ fontSize: 11, color: slotColor(slot), fontWeight: slot === '—' ? 400 : 600 }}>
                    {slot}
                  </div>
                ))}
              </div>
            ))}
            <div style={{ padding: '10px 12px', borderTop: `1px solid ${LINE}`, fontSize: 11, color: MUTED, lineHeight: 1.4 }}>
              Окна для записи: {C.bookingHours.am} · {C.bookingHours.pm} · {C.bookingHours.ev}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.CrimsonTraining = CrimsonTraining;
