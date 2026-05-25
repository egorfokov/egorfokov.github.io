// Crimson — Voices (reviews) + FAQ + Contact

function CrimsonVoices({ theme }) {
  const C = window.FOKOV_FULL;
  const { ACCENT, BG, SURFACE, TEXT, MUTED, LINE, fontDisplay, fontMono } = theme;

  return (
    <div>
      <CrSectionHead no="05" title="VOICES · ОТЗЫВЫ" theme={theme} />
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ fontFamily: fontDisplay, fontSize: 52, lineHeight: 0.92, margin: 0, textTransform: 'uppercase' }}>
          Не отзывы.<br/><span style={{ color: ACCENT }}>Истории.</span>
        </h2>

        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 1, background: LINE, border: `1px solid ${LINE}` }}>
          {C.reviews.map((r, i) => (
            <div key={i} style={{ background: SURFACE, padding: '20px 18px' }}>
              <div style={{ fontFamily: fontDisplay, fontSize: 50, color: ACCENT, lineHeight: 0.5, height: 28 }}>"</div>
              <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.5 }}>{r.text}</p>
              <div style={{ marginTop: 16, paddingTop: 12, borderTop: `1px solid ${LINE}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: ACCENT, color: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fontDisplay, fontSize: 14 }}>
                    {r.name.charAt(0)}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</span>
                </div>
                <span style={{ fontFamily: fontMono, fontSize: 9, color: MUTED, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{r.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CrimsonFAQ({ theme }) {
  const C = window.FOKOV_FULL;
  const { ACCENT, BG, SURFACE, TEXT, MUTED, LINE, fontDisplay, fontMono } = theme;
  const [open, setOpen] = React.useState(0);

  return (
    <div>
      <CrSectionHead no="06" title="FAQ · ВОПРОСЫ" theme={theme} />
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ fontFamily: fontDisplay, fontSize: 52, lineHeight: 0.92, margin: 0, textTransform: 'uppercase' }}>
          Часто<br/><span style={{ color: ACCENT }}>спрашивают.</span>
        </h2>

        <div style={{ marginTop: 22, border: `1px solid ${LINE}` }}>
          {C.faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} onClick={() => setOpen(isOpen ? -1 : i)} style={{ borderTop: i === 0 ? 'none' : `1px solid ${LINE}`, padding: '16px 14px', cursor: 'pointer', background: isOpen ? SURFACE : 'transparent', transition: 'background .25s' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: fontMono, fontSize: 9, color: ACCENT, letterSpacing: '0.18em', marginBottom: 4 }}>
                      Q.{String(i+1).padStart(2,'0')}
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.35, fontWeight: 600 }}>{f.q}</div>
                  </div>
                  <div style={{ fontFamily: fontDisplay, fontSize: 22, color: ACCENT, lineHeight: 1, marginTop: 8, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .25s' }}>+</div>
                </div>
                <div style={{ maxHeight: isOpen ? 200 : 0, overflow: 'hidden', transition: 'max-height .3s ease' }}>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: MUTED, margin: '12px 0 0' }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CrimsonContact({ theme }) {
  const C = window.FOKOV_FULL;
  const { ACCENT, BG, SURFACE, TEXT, MUTED, LINE, fontDisplay, fontMono, fontUI } = theme;

  return (
    <div>
      <CrSectionHead no="07" title="CONTACT · ЗАПИСЬ" theme={theme} />
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ fontFamily: fontDisplay, fontSize: 76, lineHeight: 0.86, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
          Записаться<br/><span style={{ color: ACCENT }}>сейчас.</span>
        </h2>
        <p style={{ fontSize: 13, color: MUTED, margin: '14px 0 24px', lineHeight: 1.5 }}>
          Пиши в любой удобный канал — отвечу в течение часа в рабочее время.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { l: 'Telegram', sub: '@fokov_yehor', icon: '✈', href: C.links.telegram, primary: true },
            { l: 'Instagram', sub: '@fokov.yehor', icon: '◐', href: C.links.instagram },
            { l: 'WhatsApp', sub: '+7 (___) ___-__-__', icon: '✆', href: C.links.whatsapp },
            { l: 'GymBro', sub: 'моё приложение', icon: '◆', href: C.links.app },
          ].map((x, i) => (
            <a key={i} href={x.href} className="cr-ghost" style={{
              background: x.primary ? ACCENT : SURFACE,
              color: x.primary ? '#0A0A0A' : TEXT,
              padding: '16px 18px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              textDecoration: 'none',
              border: `1px solid ${x.primary ? ACCENT : LINE}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: x.primary ? '#0A0A0A' : ACCENT,
                  color: x.primary ? ACCENT : '#0A0A0A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                }}>{x.icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{x.l}</div>
                  <div style={{ fontSize: 11, color: x.primary ? 'rgba(10,10,10,0.7)' : MUTED, fontFamily: fontMono, marginTop: 3, letterSpacing: '0.04em' }}>{x.sub}</div>
                </div>
              </div>
              <span className="cr-arrow" style={{ color: x.primary ? '#0A0A0A' : ACCENT, fontSize: 20 }}>→</span>
            </a>
          ))}
        </div>

        {/* hours */}
        <div style={{ marginTop: 22, padding: 16, border: `1px solid ${LINE}`, background: SURFACE }}>
          <div style={{ fontFamily: fontMono, fontSize: 10, color: ACCENT, letterSpacing: '0.18em' }}>ЧАСЫ РАБОТЫ</div>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              { l: 'УТРО', v: C.bookingHours.am },
              { l: 'ДЕНЬ', v: C.bookingHours.pm },
              { l: 'ВЕЧЕР', v: C.bookingHours.ev },
            ].map((h, i) => (
              <div key={i}>
                <div style={{ fontFamily: fontMono, fontSize: 9, color: MUTED, letterSpacing: '0.16em' }}>{h.l}</div>
                <div style={{ fontFamily: fontDisplay, fontSize: 18, color: TEXT, marginTop: 4, letterSpacing: '0.02em' }}>{h.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* big closing block */}
        <div style={{ marginTop: 40, paddingTop: 30, borderTop: `1px solid ${LINE}` }}>
          <div style={{ fontFamily: fontDisplay, fontSize: 140, color: ACCENT, lineHeight: 0.85, textTransform: 'uppercase', letterSpacing: '-0.04em' }}>
            FY
          </div>
          <div style={{ marginTop: 14, fontFamily: fontMono, fontSize: 10, color: MUTED, letterSpacing: '0.18em' }}>
            FOKOV YEHOR — TRAINER · MASSEUR · FOUNDER
          </div>
        </div>

        {/* footer */}
        <div style={{ marginTop: 30, paddingTop: 18, borderTop: `1px solid ${LINE}`, display: 'flex', justifyContent: 'space-between', fontFamily: fontMono, fontSize: 10, letterSpacing: '0.15em', color: MUTED }}>
          <span>© FOKOV / 2026</span>
          <span>ALL RIGHTS</span>
        </div>
      </div>
    </div>
  );
}

window.CrimsonVoices = CrimsonVoices;
window.CrimsonFAQ = CrimsonFAQ;
window.CrimsonContact = CrimsonContact;
