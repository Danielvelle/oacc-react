import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, ChevronRight, Shield, Wrench,
  CheckCircle2, Layers, Droplets, Battery, Menu, X
} from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-2xl border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-lg font-black tracking-[4px] text-white">OACC</a>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-navy-dark/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-6 md:p-0 gap-1 md:items-center border-b md:border-0 border-border`}>
          {['Tjenester', 'Om oss', 'Prosess', 'Kontakt'].map(t => (
            <a key={t} href={`#${t.toLowerCase().replace(' ', '-')}`}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-white transition px-3 py-2 md:py-1 rounded-md">
              {t}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)}
            className="ml-0 md:ml-2 mt-2 md:mt-0 text-sm font-semibold bg-copper text-navy-dark px-5 py-2 rounded-lg hover:bg-copper-light transition text-center">
            Bestill time
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-copper/[.04] via-transparent to-navy-dark pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-copper/[.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 py-24 relative z-10 grid lg:grid-cols-[1fr_360px] gap-12 items-center w-full">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fade} className="text-xs font-semibold tracking-[3px] uppercase text-muted mb-6">
            Monteringsverksted — Tveita, Oslo
          </motion.p>
          <motion.h1 variants={fade} className="text-[clamp(40px,6vw,72px)] font-black leading-[1.02] tracking-[-2px] mb-6">
            Verkstedet taxi-Oslo<br />
            <span className="text-copper">stoler paa.</span>
          </motion.h1>
          <motion.p variants={fade} className="text-[17px] text-muted leading-relaxed max-w-[520px] mb-8">
            Vi monterer taksameterutstyr, folierer, coater og reparerer elbil-batterier.
            For loyvehavere, taxisentraler, bedrifter og privatpersoner i Oslo og Akershus.
          </motion.p>
          <motion.div variants={fade} className="flex flex-wrap gap-3">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-copper text-navy-dark font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-copper-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,165,116,.2)] transition-all">
              Bestill time <ChevronRight size={16} />
            </a>
            <a href="tel:+4741529874" className="inline-flex items-center gap-2 bg-surface border border-border text-light font-semibold text-sm px-7 py-3.5 rounded-lg hover:border-border-light hover:bg-surface-light transition">
              <Phone size={15} /> 415 29 874
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-2">
          {[
            { label: 'Spesialisert paa', value: 'Taximontering', accent: true },
            { label: 'Lokasjon', value: 'Tveita, Oslo' },
            { label: 'Kunder', value: 'Taxi, bedrift, privat' },
            { label: 'Garanti', value: 'Levert til avtalt tid' },
          ].map((m, i) => (
            <motion.div key={i} variants={fade}
              className={`bg-surface border border-border rounded-xl px-5 py-4 hover:border-border-light transition group ${m.accent ? 'border-l-2 !border-l-copper' : ''}`}>
              <span className="block text-[10px] font-semibold uppercase tracking-[2px] text-dim mb-1">{m.label}</span>
              <span className="text-[15px] font-bold text-white group-hover:text-copper transition">{m.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = ['Taksameter-spesialister', 'Levert til avtalt tid', 'Taxi, bedrift og privat', 'Tveita, Oslo']
  return (
    <div className="border-y border-border bg-surface py-5">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-3">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-muted">
            <CheckCircle2 size={14} className="text-copper" />{t}
          </div>
        ))}
      </div>
    </div>
  )
}

function TaxiSection() {
  return (
    <section id="tjenester" className="relative py-24 bg-surface/50 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-copper/[.02] to-transparent pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
          className="grid lg:grid-cols-[1fr_320px] gap-14 items-start">
          <div>
            <motion.p variants={fade} className="text-xs font-bold tracking-[3px] uppercase text-copper mb-4">Vaart kjerneomraade</motion.p>
            <motion.h2 variants={fade} className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.5px] mb-5">
              Komplett taksameter-<br />montering i Oslo.
            </motion.h2>
            <motion.p variants={fade} className="text-[15px] text-muted leading-relaxed max-w-[520px] mb-8">
              Vi setter opp bilen din med alt utstyr som kreves — taksameter, takskilt, betalingsterminal,
              kvitteringsskriver og plombering. Tilpasset din sentral, godkjent fra dag en.
            </motion.p>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { t: 'Taksameter og plombering', s: 'Godkjent for alle sentraler' },
                { t: 'Takskilt og LED-lys', s: 'Etter sentralens krav' },
                { t: 'Betalingsterminal', s: 'Komplett med kvittering' },
                { t: 'Rask levering', s: 'Bilen tilbake i drift raskt' },
              ].map((p, i) => (
                <motion.div key={i} variants={fade} className="bg-navy-dark border border-border rounded-lg p-4 hover:border-border-light transition">
                  <strong className="block text-sm font-bold text-white mb-0.5">{p.t}</strong>
                  <span className="text-[11px] text-dim">{p.s}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.a variants={fade} href="#kontakt"
              className="inline-flex items-center gap-2 bg-copper text-navy-dark font-semibold text-sm px-6 py-3 rounded-lg hover:bg-copper-light transition">
              Bestill taksameter-montering <ChevronRight size={16} />
            </motion.a>
          </div>
          <motion.div variants={stagger} className="flex flex-col gap-2.5">
            {[
              { big: 'Alle sentraler', sm: 'i Oslo og Akershus' },
              { big: 'Komplett pakke', sm: 'Montert, testet, godkjent' },
              { big: 'Alle bilmerker', sm: 'Tesla, Toyota, Mercedes, VW, Skoda' },
            ].map((s, i) => (
              <motion.div key={i} variants={fade} className="bg-navy-dark border border-border rounded-lg p-5">
                <div className="text-lg font-extrabold text-white mb-0.5">{s.big}</div>
                <div className="text-xs text-dim">{s.sm}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  const svcs = [
    { icon: <Layers size={22} />, t: 'Folering', d: 'Helfolering, delfolering og bedriftsprofilering. Kvalitetsfolie fra ledende produsenter. Hel farge, matt, satin eller krom.' },
    { icon: <Droplets size={22} />, t: 'Polering', d: 'Maskinpolering som fjerner riper, oksidasjon og svimerker. Lakken faar tilbake dybden og glansen.' },
    { icon: <Shield size={22} />, t: 'Keramisk coating', d: 'Langvarig beskyttelse mot vann, smuss, UV og kjemikalier. Holder i aar med normalt vedlikehold.' },
    { icon: <Battery size={22} />, t: 'Elbil-batteri', d: 'Feilsoking, cellebytte og komplett batteripakke. Tesla, Nissan, VW, BMW og andre merker.' },
    { icon: <Wrench size={22} />, t: 'Gummitrekk', d: 'Tilpasset gummitrekk for gulv og bagasjerom. Beskytter og gir et profesjonelt interioor.' },
  ]
  return (
    <section className="py-24 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          <motion.p variants={fade} className="text-xs font-bold tracking-[3px] uppercase text-dim mb-4">Tjenester</motion.p>
          <motion.h2 variants={fade} className="text-[clamp(26px,3.5vw,38px)] font-extrabold tracking-[-0.5px] mb-10">Alt vi gjor. Ingenting mer.</motion.h2>
          <div className="grid md:grid-cols-3 gap-3">
            {svcs.map((s, i) => (
              <motion.div key={i} variants={fade}
                className="bg-surface border border-border rounded-xl p-7 hover:border-border-light hover:-translate-y-0.5 transition-all group">
                <div className="text-copper mb-4 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
                <h3 className="text-[17px] font-bold mb-2">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WhyUs() {
  const points = [
    { n: '01', t: 'Ferdig forste gang', d: 'Ingen halvveis jobb. Ingen retur for aa fikse noe som burde vaert gjort riktig fra start.' },
    { n: '02', t: 'Avtalt tid, holdt tid', d: 'Realistiske tidsrammer. Vi holder det vi lover. Saerlig viktig for taxi og bedrifter.' },
    { n: '03', t: 'Spesialisert kompetanse', d: 'Montering, folering og bilpleie. Vi gjor ikke service, dekkskift eller EU-kontroll.' },
    { n: '04', t: 'Alle kundetyper', d: 'Taxieiere, sentraler, bedriftsflaater, privatpersoner. Samme standard uansett.' },
  ]
  return (
    <section id="om-oss" className="py-24 bg-surface/50 border-b border-border">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
        className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <motion.p variants={fade} className="text-xs font-bold tracking-[3px] uppercase text-dim mb-4">Hvorfor OACC</motion.p>
          <motion.h2 variants={fade} className="text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.5px] mb-5">
            Presisjon er ikke<br />en bonus. Det er<br />standarden.
          </motion.h2>
          <motion.p variants={fade} className="text-[15px] text-muted leading-relaxed mb-3">
            Vi spesialiserer oss paa montering, folering og bilpleie. Ikke alt mulig annet. Det betyr at vi er gode
            paa det vi gjor, og at du faar et resultat som holder.
          </motion.p>
          <motion.p variants={fade} className="text-[15px] text-muted leading-relaxed">
            For taxieiere betyr det en bil som er klar til drift — riktig montert, til avtalt tid.
            For bedrifter betyr det en flaate som ser profesjonell ut. For deg betyr det at jobben er gjort ordentlig.
          </motion.p>
        </div>
        <motion.div variants={stagger} className="flex flex-col gap-5">
          {points.map((p, i) => (
            <motion.div key={i} variants={fade} className="flex gap-4 items-start group">
              <span className="text-sm font-extrabold text-copper w-7 shrink-0 pt-0.5">{p.n}</span>
              <div>
                <strong className="block text-[15px] font-bold text-white mb-1 group-hover:text-copper transition">{p.t}</strong>
                <span className="text-sm text-muted leading-relaxed">{p.d}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function Audience() {
  return (
    <section className="py-24 border-b border-border">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
        className="max-w-[1200px] mx-auto px-6">
        <motion.p variants={fade} className="text-xs font-bold tracking-[3px] uppercase text-dim mb-4">Kunder</motion.p>
        <motion.h2 variants={fade} className="text-[clamp(26px,3.5vw,38px)] font-extrabold tracking-[-0.5px] mb-10">Hvem vi jobber for.</motion.h2>
        <div className="grid md:grid-cols-2 gap-3">
          <motion.div variants={fade}
            className="md:col-span-2 bg-gradient-to-br from-surface to-copper/[.03] border border-copper/20 rounded-xl p-8 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[2px] uppercase text-copper">Vaar stoerste kundegruppe</span>
            <h3 className="text-xl font-extrabold">Taxieiere og loyvehavere</h3>
            <p className="text-sm text-muted leading-relaxed max-w-[560px]">
              Komplett montering fra taksameter til profilering. Vi kjenner kravene til Oslo Taxi, NorgesTaxi,
              Christiania Taxi og andre sentraler. Ny bil eller oppgradering — vi haandterer alt.
            </p>
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-copper text-navy-dark font-semibold text-sm px-6 py-3 rounded-lg hover:bg-copper-light transition self-start mt-1">
              Kontakt oss om taxi <ChevronRight size={16} />
            </a>
          </motion.div>
          {[
            { t: 'Taxisentraler', d: 'Volum og konsistens. Vi haandterer flere biler etter sentralens standarder og tidsplan.' },
            { t: 'Bedrifter med bilflaate', d: 'Folering, profilering og lakkbeskyttelse. Flaaten representerer selskapet profesjonelt.' },
            { t: 'Privatpersoner', d: 'Folering, polering, coating eller batterijobb. Samme presisjon som vi leverer til proffer.' },
          ].map((a, i) => (
            <motion.div key={i} variants={fade}
              className="bg-surface border border-border rounded-xl p-6 hover:border-border-light transition">
              <h3 className="text-base font-bold mb-2">{a.t}</h3>
              <p className="text-sm text-muted leading-relaxed">{a.d}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Process() {
  const steps = [
    { n: '01', t: 'Kontakt', d: 'Ring, send skjema eller e-post. Beskriv hva du trenger.' },
    { n: '02', t: 'Tilbud', d: 'Fast pris og tidsestimat. Ingen skjulte kostnader.' },
    { n: '03', t: 'Utforelse', d: 'Jobben gjores til avtalt tid. Du holdes oppdatert.' },
    { n: '04', t: 'Levering', d: 'Vi gaar gjennom arbeidet. Du henter en ferdig bil.' },
  ]
  return (
    <section id="prosess" className="py-24 bg-surface/50 border-b border-border">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
        className="max-w-[1200px] mx-auto px-6">
        <motion.p variants={fade} className="text-xs font-bold tracking-[3px] uppercase text-dim mb-4">Prosess</motion.p>
        <motion.h2 variants={fade} className="text-[clamp(26px,3.5vw,38px)] font-extrabold tracking-[-0.5px] mb-10">Fire steg. Ingen overraskelser.</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, i) => (
            <motion.div key={i} variants={fade}
              className="bg-navy-dark border border-border rounded-xl p-6 text-center hover:border-border-light transition group">
              <div className="text-3xl font-black text-copper mb-3 group-hover:scale-110 transition-transform">{s.n}</div>
              <h3 className="text-sm font-bold mb-2">{s.t}</h3>
              <p className="text-xs text-muted leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function Showcase() {
  const projects = [
    { t: 'Komplett taxi-oppsett', s: 'Toyota Camry Hybrid — Oslo Taxi', wide: true, bg: 'from-[#1a1520] to-[#0f1923]' },
    { t: 'Helfolering matt sort', s: 'Mercedes V-Klasse', bg: 'from-[#18140e] to-[#1c1a22]' },
    { t: 'Keramisk coating', s: 'Tesla Model Y', bg: 'from-[#0e1218] to-[#181520]' },
    { t: 'Polering og forsegling', s: 'BMW iX xDrive50', bg: 'from-[#1a1215] to-[#151820]' },
    { t: 'Taksameter + folering', s: 'Skoda Superb — NorgesTaxi', wide: true, bg: 'from-[#111518] to-[#1a1420]' },
  ]
  return (
    <section className="py-24 border-b border-border">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
        className="max-w-[1200px] mx-auto px-6">
        <motion.p variants={fade} className="text-xs font-bold tracking-[3px] uppercase text-dim mb-4">Prosjekter</motion.p>
        <motion.h2 variants={fade} className="text-[clamp(26px,3.5vw,38px)] font-extrabold tracking-[-0.5px] mb-10">Utvalgte jobber.</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {projects.map((p, i) => (
            <motion.div key={i} variants={fade}
              className={`rounded-xl overflow-hidden relative group cursor-default ${p.wide ? 'md:col-span-2' : ''}`}>
              <div className={`aspect-video bg-gradient-to-br ${p.bg}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <strong className="block text-sm font-bold text-white mb-0.5 group-hover:text-copper transition">{p.t}</strong>
                <span className="text-xs text-muted">{p.s}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function CtaBanner() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          className="bg-gradient-to-br from-surface to-copper/[.04] border border-copper/15 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold mb-3">Klar for aa bestille?</h2>
          <p className="text-sm text-muted mb-8 max-w-md mx-auto">Ring oss direkte eller send en henvendelse. Vi svarer raskt.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-copper text-navy-dark font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-copper-light transition">
              Send henvendelse <ChevronRight size={16} />
            </a>
            <a href="tel:+4741529874" className="inline-flex items-center gap-2 bg-transparent border border-white/15 text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:border-white/30 transition">
              <Phone size={15} /> Ring 415 29 874
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = e.currentTarget
    const d = new FormData(f)
    const name = d.get('name') as string, email = d.get('email') as string, message = d.get('message') as string
    if (!name || !email || !message) { setStatus('error'); return }
    const subj = encodeURIComponent(`Henvendelse fra ${name}`)
    const body = encodeURIComponent(`Navn: ${name}\nE-post: ${email}\nTelefon: ${d.get('phone') || 'Ikke oppgitt'}\nTjeneste: ${d.get('service') || 'Ikke valgt'}\nKundetype: ${d.get('ctype') || 'Ikke valgt'}\n\nMelding:\n${message}`)
    window.location.href = `mailto:post@oacc.no?subject=${subj}&body=${body}`
    setStatus('ok'); f.reset()
  }
  const ic = 'w-full bg-navy-dark border border-border rounded-lg px-3.5 py-2.5 text-sm text-light placeholder:text-dim focus:outline-none focus:border-copper focus:ring-2 focus:ring-copper-glow transition'

  return (
    <section id="kontakt" className="py-24 bg-surface/50">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}
        className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <motion.p variants={fade} className="text-xs font-bold tracking-[3px] uppercase text-dim mb-4">Kontakt</motion.p>
          <motion.h2 variants={fade} className="text-[clamp(26px,3.5vw,38px)] font-extrabold tracking-[-0.5px] mb-4">Snakk med oss.</motion.h2>
          <motion.p variants={fade} className="text-[15px] text-muted leading-relaxed mb-8">Fortell oss hva du trenger. Vi svarer vanligvis innen noen timer paa hverdager.</motion.p>
          <motion.div variants={stagger} className="flex flex-col gap-4">
            {[
              { icon: <Phone size={16} />, label: 'Telefon', value: '+47 415 29 874', href: 'tel:+4741529874' },
              { icon: <Mail size={16} />, label: 'E-post', value: 'post@oacc.no', href: 'mailto:post@oacc.no' },
              { icon: <MapPin size={16} />, label: 'Adresse', value: 'Tvetenveien, Tveita, Oslo' },
              { icon: <Clock size={16} />, label: 'Apent', value: 'Mandag–fredag 08:00–17:00' },
            ].map((c, i) => (
              <motion.div key={i} variants={fade} className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-navy-dark border border-border flex items-center justify-center text-copper shrink-0">{c.icon}</div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[1px] text-dim">{c.label}</span>
                  {c.href ? <a href={c.href} className="text-sm text-light hover:text-copper transition">{c.value}</a> : <span className="text-sm text-light">{c.value}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.form variants={fade} onSubmit={handleSubmit} className="bg-surface border border-border rounded-xl p-7">
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div><label className="block text-[10px] font-semibold uppercase tracking-[1px] text-dim mb-1">Navn</label><input name="name" required placeholder="Fullt navn" className={ic} /></div>
            <div><label className="block text-[10px] font-semibold uppercase tracking-[1px] text-dim mb-1">Telefon</label><input name="phone" placeholder="+47" className={ic} /></div>
          </div>
          <div className="mb-3"><label className="block text-[10px] font-semibold uppercase tracking-[1px] text-dim mb-1">E-post</label><input name="email" type="email" required placeholder="din@epost.no" className={ic} /></div>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div><label className="block text-[10px] font-semibold uppercase tracking-[1px] text-dim mb-1">Tjeneste</label>
              <select name="service" className={ic + ' appearance-none'}><option value="">Velg</option><option>Taksameterutstyr</option><option>Taxi komplett</option><option>Folering</option><option>Polering</option><option>Coating</option><option>Elbil-batteri</option><option>Gummitrekk</option><option>Annet</option></select></div>
            <div><label className="block text-[10px] font-semibold uppercase tracking-[1px] text-dim mb-1">Kundetype</label>
              <select name="ctype" className={ic + ' appearance-none'}><option value="">Velg</option><option>Taxieier / loyvehaver</option><option>Taxisentral</option><option>Bedrift</option><option>Privat</option></select></div>
          </div>
          <div className="mb-4"><label className="block text-[10px] font-semibold uppercase tracking-[1px] text-dim mb-1">Melding</label><textarea name="message" required rows={4} placeholder="Bilmerke, tjeneste, onsket tidspunkt..." className={ic + ' resize-y min-h-[80px]'} /></div>
          <button type="submit" className="w-full bg-copper text-navy-dark font-semibold text-sm py-3.5 rounded-lg hover:bg-copper-light transition flex items-center justify-center gap-2">Send henvendelse <ChevronRight size={16} /></button>
          <p className="text-[11px] text-dim text-center mt-2">Vi svarer vanligvis innen samme virkedag.</p>
          {status === 'ok' && <p className="text-xs text-green-400 text-center mt-2">E-postklienten din ble aapnet.</p>}
          {status === 'error' && <p className="text-xs text-red-400 text-center mt-2">Fyll inn alle obligatoriske felter.</p>}
        </motion.form>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border bg-navy-dark py-14">
      <div className="max-w-[1200px] mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="text-base font-black tracking-[4px] text-white mb-2">OACC</div>
          <p className="text-xs text-dim leading-relaxed">Oslo Akershus Car Communication<br />Monteringsverksted — Tveita, Oslo</p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[2px] text-muted mb-3">Tjenester</h4>
          <div className="flex flex-col gap-1.5">
            {['Taksameterutstyr','Folering','Polering og coating','Elbil-batteri','Gummitrekk'].map(l=><a key={l} href="#tjenester" className="text-xs text-dim hover:text-copper transition">{l}</a>)}
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[2px] text-muted mb-3">Kunder</h4>
          <div className="flex flex-col gap-1.5">
            {['Taxieiere','Taxisentraler','Bedrifter','Privatpersoner'].map(l=><a key={l} href="#kontakt" className="text-xs text-dim hover:text-copper transition">{l}</a>)}
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[2px] text-muted mb-3">Kontakt</h4>
          <div className="flex flex-col gap-1.5 text-xs text-dim">
            <a href="tel:+4741529874" className="hover:text-copper transition">+47 415 29 874</a>
            <a href="mailto:post@oacc.no" className="hover:text-copper transition">post@oacc.no</a>
            <span>Tveita, Oslo</span>
            <span>Man–fre 08–17</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 pt-6 border-t border-border">
        <p className="text-[11px] text-dim text-center">&copy; 2026 OACC. Alle rettigheter reservert.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <TaxiSection />
      <Services />
      <WhyUs />
      <Audience />
      <Process />
      <Showcase />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  )
}
