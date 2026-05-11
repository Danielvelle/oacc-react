import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Cal, { getCalApi } from '@calcom/embed-react'
import { Phone, CheckCircle2, Layers, Droplets, Shield, Battery, Wrench, Mail, MapPin, Clock, Menu, X, ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react'

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } } }
const stg = { visible: { transition: { staggerChildren: 0.07 } } }

/* ─── NAV ─── */

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-2xl border-b border-line/60">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">
        <a href="#" className="text-[15px] font-black tracking-[6px] text-ink">OACC</a>
        <button className="md:hidden text-ink-secondary" onClick={() => setOpen(!open)}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <div className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-[72px] inset-x-0 bg-bg/98 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none p-6 md:p-0 gap-1 md:items-center border-b md:border-0 border-line`}>
          {[['Tjenester','#tjenester'],['Hvorfor oss','#hvorfor'],['Prosjekter','#prosjekter'],['Bestill tid','#bestill'],['Kontakt','#kontakt']].map(([l,h])=>(
            <a key={l} href={h} onClick={()=>setOpen(false)} className="text-[13px] font-medium text-ink-secondary hover:text-ink elegant-transition px-4 py-2">{l}</a>
          ))}
          <a href="#bestill" onClick={()=>setOpen(false)}
            className="md:ml-5 mt-3 md:mt-0 text-[11px] font-bold tracking-[2px] uppercase bg-ink text-bg px-6 py-3 rounded-lg hover:bg-ink/80 elegant-transition text-center">
            Bestill tid
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ─── HERO ─── */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(168,118,74,0.06)_0%,transparent_50%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_10%_80%,rgba(168,118,74,0.03)_0%,transparent_50%)]"/>
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 pt-[160px] lg:pt-[200px] pb-16 min-h-screen flex flex-col">
        <div className="flex-1 grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
          <motion.div initial="hidden" animate="visible" variants={stg}>
            <motion.div variants={fade} className="flex items-center gap-4 mb-16">
              <span className="w-12 h-[1px] bg-brand"/>
              <span className="text-[10px] font-semibold tracking-[5px] uppercase text-brand">Monteringsverksted — Tveita, Oslo</span>
            </motion.div>

            <motion.h1 variants={fade} className="mb-10">
              <span className="block font-display text-[clamp(42px,6.5vw,80px)] font-bold leading-[0.96] tracking-[-2px] text-ink">
                Alt bilen din trenger,
              </span>
              <span className="block font-display text-[clamp(42px,6.5vw,80px)] font-bold leading-[0.96] tracking-[-2px] text-ink">
                samlet på ett sted.
              </span>
            </motion.h1>

            <motion.p variants={fade} className="text-[17px] lg:text-[19px] font-light text-ink-secondary leading-[1.85] max-w-[540px] mb-14 tracking-[-0.2px]">
              Vi leverer, monterer og klargjør utstyr for taxidrift, i tillegg til tjenester som foliering, keramisk coating, polering, batteriservice for elbil og gummimatter. Alt blir kvalitetssikret, testet og gjort klart for utlevering.
            </motion.p>

            <motion.div variants={fade} className="flex flex-wrap items-center gap-5">
              <a href="#bestill" className="group inline-flex items-center gap-3 bg-ink text-bg font-semibold text-[13px] px-9 py-[18px] rounded-xl hover:bg-ink/85 elegant-transition shadow-[var(--shadow-medium)]">
                Bestill tid direkte <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform"/>
              </a>
              <a href="tel:+4741529874" className="inline-flex items-center gap-3 text-[14px] font-medium text-ink-secondary hover:text-ink elegant-transition group">
                <span className="w-12 h-12 rounded-full border border-line flex items-center justify-center group-hover:border-brand/40 elegant-transition">
                  <Phone size={16} className="text-brand"/>
                </span>
                415 29 874
              </a>
            </motion.div>
          </motion.div>

          {/* Credential panel */}
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.4,ease:[0.4,0,0.2,1]}}
            className="hidden lg:block mt-8">
            <div className="bg-surface border border-line/80 rounded-2xl overflow-hidden shadow-[var(--shadow-medium)]">
              <div className="px-8 pt-8 pb-6 border-b border-line bg-surface-muted/30">
                <span className="text-[11px] font-bold tracking-[3px] uppercase text-brand">Det du kan forvente</span>
              </div>
              {[
                {v:'Fast pris, ingen tillegg', s:'Tilbudet du får er endelig. Vi legger ikke på for «uforutsette ting».'},
                {v:'Ferdig når avtalt', s:'Vi oppgir realistisk tid og holder den.'},
                {v:'Én leverandør, hele jobben', s:'Montering, folering, coating og klargjøring. Alt samlet hos oss.'},
                {v:'Kvalitetssikret og testet', s:'Alt vi leverer er kontrollert og klart for bruk før utlevering.'},
              ].map((m,i) => (
                <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6+i*0.1}}
                  className="px-8 py-6 border-b border-line/60 last:border-0 group hover:bg-surface-muted/40 elegant-transition">
                  <span className="block text-[15px] font-semibold text-ink group-hover:text-brand elegant-transition mb-1">{m.v}</span>
                  <span className="block text-[12px] text-ink-muted leading-[1.6]">{m.s}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}
          className="border-t border-line/60 pt-8 mt-auto">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {['Montering','Taksameter','Folering','Keramisk coating','Polering','Elbil-batteri','Gummitrekk','Klargjøring'].map((t,i)=>(
              <span key={i} className="text-[11px] font-semibold text-ink-muted/60 tracking-wide">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── TAXI ─── */

function TaxiSignature() {
  return (
    <section id="tjenester" className="relative py-32 lg:py-40 bg-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_75%_30%,rgba(168,118,74,0.08)_0%,transparent_50%)] pointer-events-none"/>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:'-80px'}} variants={stg}>
          <motion.div variants={fade} className="flex items-center gap-4 mb-10">
            <span className="w-14 h-[1px] bg-brand"/>
            <span className="text-[10px] font-bold tracking-[5px] uppercase text-brand">Taksameter-montering</span>
          </motion.div>

          <motion.div variants={fade} className="mb-20 max-w-[720px]">
            <h2 className="font-display text-[clamp(34px,5vw,56px)] font-bold leading-[1.05] tracking-[-1.5px] text-white mb-8">
              Komplett oppsett for taxidrift.
            </h2>
            <p className="text-[17px] font-light text-white/50 leading-[1.9] max-w-[520px]">
              Vi monterer taksameter, takskilt, betalingsterminal og kvitteringsskriver. Alt plomberes, testes og klargjøres etter sentralens krav. Bilen leveres godkjent og klar.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1.7fr_1fr] gap-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {t:'Taksameter og plombering', d:'Montering, kalibrering og plombering. Vi gjør det for Oslo Taxi, NorgesTaxi, Christiania Taxi og alle andre sentraler i regionen.'},
                {t:'Takskilt og LED-belysning', d:'Vi har skilt og lys på lager for de fleste sentraler. Montert etter gjeldende krav, ferdig samme dag som resten.'},
                {t:'Betalingsterminal og kvittering', d:'Terminal, skriver og oppsett mot sentralens system. Vi tester at alt fungerer før du henter bilen.'},
                {t:'Profilering og klargjøring', d:'Folering med sentralens design, gummimatter, innvendig vask. Bilen ser ut som den skal når den forlater verkstedet.'},
              ].map((item,i) => (
                <motion.div key={i} variants={fade}
                  className="border border-white/[0.08] rounded-2xl p-7 hover:border-brand/25 hover:bg-white/[0.02] elegant-transition group">
                  <h3 className="text-[15px] font-semibold text-white mb-3 group-hover:text-brand elegant-transition">{item.t}</h3>
                  <p className="text-[13px] text-white/35 leading-[1.8]">{item.d}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fade} className="border border-white/[0.08] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-[22px] font-display font-bold text-white block mb-2">Komplett taxi-pakke</span>
                <span className="text-[13px] text-white/35 block mb-8">Alt i én bestilling. Én kontaktperson. Én faktura.</span>
                {[
                  'Taksameter med plombering',
                  'Takskilt og LED',
                  'Betalingsterminal',
                  'Kvitteringsskriver',
                  'Sentralprofilering',
                  'Test og godkjenning',
                ].map((item,i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/[0.05] last:border-0">
                    <CheckCircle2 size={14} className="text-brand/60 shrink-0"/>
                    <span className="text-[13px] text-white/60">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 bg-brand text-white font-bold text-[12px] tracking-[1px] uppercase px-7 py-4 rounded-xl hover:bg-brand-light elegant-transition shadow-[var(--shadow-brand)] w-full justify-center">
                Få pris på komplett pakke <ArrowUpRight size={14}/>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── SERVICES ─── */

function Services() {
  const svcs = [
    {icon:<Layers size={22}/>, t:'Folering', d:'Personbiler, firmabiler og taxier. Matt, satin, glans, krom eller bedriftsdekor. Folien vi legger har 5 års holdbarhet og legges uten bobler eller kanter som løfter seg.'},
    {icon:<Droplets size={22}/>, t:'Polering', d:'Tresteg maskinpolering som fjerner riper, svimerker og oksidasjon. Resultatet er en lakk som ser ut som den gjorde da bilen ble levert fra fabrikken.'},
    {icon:<Shield size={22}/>, t:'Keramisk coating', d:'Binder seg til lakken og lager et hardt, usynlig skjold mot vann, veisalt, fugleskitt og UV. Varer i flere år. Bilen holder seg renere mellom vask.'},
    {icon:<Battery size={22}/>, t:'Elbil-batteri', d:'Feilsøking og reparasjon av battericeller, eller komplett bytte av batteripakke. Vi håndterer Tesla, Nissan Leaf, VW ID-serien, BMW iX og flere.'},
    {icon:<Wrench size={22}/>, t:'Gummitrekk', d:'Tilpassede gummimatter for gulv og bagasjerom. Beskytter interiøret mot slitasje og gir bilen et ryddigere inntrykk over tid.'},
  ]
  return (
    <section className="py-32 lg:py-40 bg-bg">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}} variants={stg}>
          <motion.div variants={fade} className="flex items-center gap-4 mb-10">
            <span className="w-14 h-[1px] bg-line"/>
            <span className="text-[10px] font-bold tracking-[5px] uppercase text-ink-muted">Tjenester</span>
          </motion.div>
          <motion.h2 variants={fade} className="font-display text-[clamp(30px,4vw,48px)] font-bold tracking-[-1px] text-ink mb-5">
            Montering, folering og bilpleie.
          </motion.h2>
          <motion.p variants={fade} className="text-[16px] font-light text-ink-secondary mb-16 max-w-[480px] leading-[1.8]">
            Vi har spesialisert oss på et begrenset antall tjenester. Det gjør at vi kan levere høyere kvalitet på hver enkelt av dem.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-4">
            {svcs.map((svc,i) => (
              <motion.div key={i} variants={fade}
                className="bg-surface border border-line/80 rounded-2xl p-8 hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 elegant-transition group">
                <div className="w-12 h-12 rounded-xl bg-brand-glow border border-brand/10 flex items-center justify-center text-brand/60 mb-6 group-hover:text-brand group-hover:bg-brand/10 elegant-transition">
                  {svc.icon}
                </div>
                <h3 className="text-[18px] font-semibold text-ink mb-3">{svc.t}</h3>
                <p className="text-[14px] text-ink-muted leading-[1.8]">{svc.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── WHY US ─── */

function WhyUs() {
  return (
    <section id="hvorfor" className="py-32 lg:py-40 bg-bg-warm">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}} variants={stg}
          className="grid lg:grid-cols-[1.15fr_1fr] gap-20 lg:gap-32 items-start">
          <div>
            <motion.div variants={fade} className="flex items-center gap-4 mb-10">
              <span className="w-14 h-[1px] bg-line"/>
              <span className="text-[10px] font-bold tracking-[5px] uppercase text-ink-muted">Hvorfor OACC</span>
            </motion.div>
            <motion.h2 variants={fade} className="font-display text-[clamp(34px,5vw,56px)] font-bold leading-[1.05] tracking-[-1.5px] text-ink mb-10">
              Forskjellen merkes når noe faktisk fungerer.
            </motion.h2>
            <motion.p variants={fade} className="text-[16px] font-light text-ink-secondary leading-[1.9] mb-5">
              Vi gjør montering, folering og bilpleie. Ingenting mer. Det betyr at folkene som jobber på bilen din har gjort akkurat denne typen jobb mange ganger før.
            </motion.p>
            <motion.p variants={fade} className="text-[16px] font-light text-ink-secondary leading-[1.9]">
              Det betyr også at vi ikke trenger lang oppstartstid. Vi vet hva som skal gjøres, vi har utstyret, og vi leverer uten unødvendige forsinkelser.
            </motion.p>
          </div>

          <motion.div variants={stg} className="lg:border-l lg:border-line lg:pl-14 lg:pt-2">
            {[
              {n:'01', t:'Montert riktig', d:'Ingen halvferdig jobb. Ingen telefonsamtaler etterpå om noe som burde vært gjort annerledes.'},
              {n:'02', t:'Prisen holder', d:'Du får et tilbud med fast pris. Det er den prisen du betaler. Vi legger ikke på ekstra.'},
              {n:'03', t:'Tiden holder', d:'Vi sier når bilen er klar, og den er klar da. Ikke dagen etter. Ikke neste uke.'},
              {n:'04', t:'Én person å forholde seg til', d:'Fra bestilling til henting snakker du med én person. Ikke en resepsjon, ikke et skjema.'},
            ].map((p,i) => (
              <motion.div key={i} variants={fade} className="py-8 border-b border-line/60 last:border-0 group">
                <div className="flex gap-6 items-start">
                  <span className="font-display text-[18px] font-bold text-brand/30 w-8 shrink-0 group-hover:text-brand/60 elegant-transition">{p.n}</span>
                  <div>
                    <strong className="block text-[16px] font-semibold text-ink mb-2 group-hover:text-brand elegant-transition">{p.t}</strong>
                    <span className="text-[14px] text-ink-muted leading-[1.8]">{p.d}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── AUDIENCE ─── */

function Audience() {
  return (
    <section className="py-32 lg:py-40 bg-bg">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}} variants={stg}>
          <motion.div variants={fade} className="flex items-center gap-4 mb-10">
            <span className="w-14 h-[1px] bg-line"/>
            <span className="text-[10px] font-bold tracking-[5px] uppercase text-ink-muted">Kunder</span>
          </motion.div>
          <motion.h2 variants={fade} className="font-display text-[clamp(30px,4vw,48px)] font-bold tracking-[-1px] text-ink mb-16">
            Vi jobber med både bedrift og privat.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {t:'Løyvehavere og taxieiere', d:'Komplett taksameter-montering, skilting, terminal og profilering. Vi leverer bilen godkjent og klar til drift.'},
              {t:'Taxisentraler', d:'Vi håndterer flere biler samtidig og følger sentralens spesifikasjoner. Fast avtale med forutsigbar kapasitet og pris.'},
              {t:'Bedrifter med bilflåte', d:'Firmabilene skal se profesjonelle ut og holde seg slik. Vi folierer, profilerer og vedlikeholder flåten under én avtale.'},
              {t:'Privatpersoner', d:'Folering, polering, coating eller batterijobb. Du får nøyaktig samme kvalitet og oppfølging som bedriftskundene våre.'},
            ].map((a,i) => (
              <motion.div key={i} variants={fade}
                className="bg-surface border border-line/80 rounded-2xl p-8 hover:shadow-[var(--shadow-medium)] elegant-transition group">
                <h3 className="text-[16px] font-semibold text-ink mb-3 group-hover:text-brand elegant-transition">{a.t}</h3>
                <p className="text-[14px] text-ink-muted leading-[1.8]">{a.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── CASES ─── */

function Cases() {
  const cases = [
    {title:'Ny løyvebil klar på 48 timer', vehicle:'Toyota Camry Hybrid', client:'Løyvehaver, Oslo Taxi', scope:'Taksameter, takskilt, terminal, kvittering, plombering og profilering med Oslo Taxi-dekor', result:'Godkjent og i trafikk samme uke', bg:'from-[#2a2520] to-[#1e2028]', wide:true},
    {title:'Matt helfolering for transportselskap', vehicle:'Mercedes V-Klasse', client:'Persontransport AS', scope:'Komplett helfolering i matt sort. Dører, tak, støtfangere og speilhus.', result:'Levert på 3 virkedager', bg:'from-[#282420] to-[#22242c]'},
    {title:'Coating før første vinter', vehicle:'Tesla Model Y', client:'Privatkunde, Bærum', scope:'Tosteg maskinpolering etterfulgt av keramisk coating i to lag', result:'Lakken beskyttet gjennom to vintre uten synlige skader', bg:'from-[#202428] to-[#28222c]'},
    {title:'8 nye taxier, 3 uker, alt inkludert', vehicle:'Skoda Superb iV', client:'NorgesTaxi, Oslo', scope:'Taksameter, skilting, terminaler og profilering på 8 biler levert fortløpende', result:'Alle 8 levert innenfor avtalt tidsramme', bg:'from-[#242228] to-[#2c2630]', wide:true},
  ]
  return (
    <section id="prosjekter" className="py-32 lg:py-40 bg-dark text-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}} variants={stg}>
          <motion.div variants={fade} className="flex items-center gap-4 mb-10">
            <span className="w-14 h-[1px] bg-brand"/>
            <span className="text-[10px] font-bold tracking-[5px] uppercase text-white/30">Gjennomførte oppdrag</span>
          </motion.div>
          <motion.h2 variants={fade} className="font-display text-[clamp(30px,4vw,48px)] font-bold tracking-[-1px] text-white mb-16">
            Noen av jobbene vi har levert.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {cases.map((c,i) => (
              <motion.div key={i} variants={fade}
                className={`rounded-2xl overflow-hidden relative group ${c.wide?'md:col-span-2':''}`}>
                <div className={`aspect-video bg-gradient-to-br ${c.bg} min-h-[300px]`}/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"/>
                <div className="absolute bottom-0 inset-x-0 p-10 z-10">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-[10px] font-bold tracking-[3px] uppercase text-brand">{c.client}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"/>
                    <span className="text-[11px] text-white/35">{c.vehicle}</span>
                  </div>
                  <h3 className="font-display text-[22px] font-bold text-white mb-3 group-hover:text-brand elegant-transition">{c.title}</h3>
                  <p className="text-[13px] text-white/35 leading-[1.7] max-w-[540px] mb-4">{c.scope}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-brand/70">
                    <CheckCircle2 size={14}/> {c.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── PROCESS ─── */

function Process() {
  return (
    <section className="py-32 lg:py-40 bg-bg-warm">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}} variants={stg}>
          <motion.div variants={fade} className="flex items-center gap-4 mb-10">
            <span className="w-14 h-[1px] bg-line"/>
            <span className="text-[10px] font-bold tracking-[5px] uppercase text-ink-muted">Slik bestiller du</span>
          </motion.div>
          <motion.h2 variants={fade} className="font-display text-[clamp(30px,4vw,48px)] font-bold tracking-[-1px] text-ink mb-16">
            Du beskriver jobben. Vi gir deg en fast pris.
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-surface border border-line/80 rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
            {[
              {n:'01', t:'Fortell oss hva du trenger', d:'Ring, send e-post eller fyll ut skjemaet. Oppgi bilmerke, årsmodell og hvilken jobb du vil ha gjort.'},
              {n:'02', t:'Motta fast tilbud', d:'Vi svarer med en fast pris og et leveringstidspunkt. Det er den prisen du betaler.'},
              {n:'03', t:'Lever bilen', d:'Kjør bilen til oss på Tveita. Vi gir beskjed underveis og varsler når den er klar.'},
              {n:'04', t:'Hent ferdig bil', d:'Vi går gjennom arbeidet sammen når du henter. Du kjører fra verkstedet med et ferdig resultat.'},
            ].map((step,i) => (
              <motion.div key={i} variants={fade}
                className="p-9 border-r border-b border-line/60 last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r group hover:bg-surface-muted/40 elegant-transition">
                <div className="font-display text-[36px] font-bold text-brand/20 mb-6 group-hover:text-brand/40 elegant-transition">{step.n}</div>
                <h3 className="text-[16px] font-semibold text-ink mb-3">{step.t}</h3>
                <p className="text-[13px] text-ink-muted leading-[1.8]">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── BOOKING ─── */

function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#A8764A',
            'cal-text': '#1C1B18',
            'cal-text-emphasis': '#1C1B18',
            'cal-border-subtle': '#E2DFD6',
            'cal-bg': '#F8F6F1',
            'cal-bg-emphasis': '#FFFFFF',
          },
          dark: {
            'cal-brand': '#C8956C',
            'cal-text': '#E8E4DC',
            'cal-text-emphasis': '#F7F4EE',
            'cal-border-subtle': '#2A2824',
            'cal-bg': '#1A1A1A',
            'cal-bg-emphasis': '#222222',
          }
        },
        hideEventTypeDetails: false,
      })
    })()
  }, [])

  return (
    <section id="bestill" className="py-32 lg:py-40 bg-bg-warm">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}} variants={stg}>
          <motion.div variants={fade} className="flex items-center gap-4 mb-10">
            <span className="w-14 h-[1px] bg-brand"/>
            <span className="text-[10px] font-bold tracking-[5px] uppercase text-brand">Bestill tid</span>
          </motion.div>
          <motion.div variants={fade} className="max-w-[600px] mb-14">
            <h2 className="font-display text-[clamp(30px,4vw,48px)] font-bold tracking-[-1px] text-ink mb-5">
              Velg tjeneste og tid som passer deg.
            </h2>
            <p className="text-[16px] font-light text-ink-secondary leading-[1.8]">
              Bestillingen går rett inn i kalenderen vår. Du mottar bekreftelse på e-post med tidspunkt og detaljer. Trenger du å endre tid? Ring oss, så ordner vi det.
            </p>
          </motion.div>

          {/* Cal.com inline embed */}
          <motion.div variants={fade}
            className="bg-surface border border-line/80 rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] min-h-[500px]">
            <Cal
              calLink="monteringbooking"
              calOrigin="https://cal.eu"
              style={{ width: '100%', height: '100%', overflow: 'auto', minHeight: '500px' }}
              config={{
                layout: 'month_view',
                theme: 'light',
              }}
            />
          </motion.div>

          <motion.div variants={fade} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[13px] text-ink-muted">
            <div className="flex items-center gap-2">
              <CalendarDays size={15} className="text-brand"/>
              <span>Åpent for booking mandag–fredag 08:00–17:00</span>
            </div>
            <span className="hidden sm:block text-ink-faint">·</span>
            <div className="flex items-center gap-2">
              <Phone size={15} className="text-brand"/>
              <span>Foretrekker du telefon? Ring <a href="tel:+4741529874" className="font-medium text-ink hover:text-brand elegant-transition">415 29 874</a></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── CONTACT ─── */

function Contact() {
  const [status, setStatus] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const name = d.get('name') as string, email = d.get('email') as string, message = d.get('message') as string
    if (!name||!email||!message) { setStatus('error'); return }
    const subj = encodeURIComponent(`Forespørsel fra ${name}`)
    const body = encodeURIComponent(`Navn: ${name}\nE-post: ${email}\nTelefon: ${d.get('phone')||'Ikke oppgitt'}\nTjeneste: ${d.get('service')||'Ikke valgt'}\nKundetype: ${d.get('ctype')||'Ikke valgt'}\n\nMelding:\n${message}`)
    window.location.href = `mailto:post@oacc.no?subject=${subj}&body=${body}`
    setStatus('ok'); e.currentTarget.reset()
  }
  const ic = 'w-full bg-bg border border-line rounded-xl px-4 py-3.5 text-[14px] text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand/40 focus:ring-2 focus:ring-brand-glow elegant-transition'

  return (
    <section id="kontakt" className="py-32 lg:py-40 bg-bg-warm">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}} variants={stg}
          className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          <div>
            <motion.div variants={fade} className="flex items-center gap-4 mb-10">
              <span className="w-14 h-[1px] bg-line"/>
              <span className="text-[10px] font-bold tracking-[5px] uppercase text-ink-muted">Kontakt</span>
            </motion.div>
            <motion.h2 variants={fade} className="font-display text-[clamp(30px,4vw,48px)] font-bold tracking-[-1px] text-ink mb-6">
              Beskriv jobben. Vi gir deg en pris.
            </motion.h2>
            <motion.p variants={fade} className="text-[16px] font-light text-ink-secondary leading-[1.9] mb-12">
              Fyll inn bilmerke, hva du trenger og når det passer. Vi svarer med et fast tilbud — vanligvis innen noen timer på hverdager. Tilbudet er uforpliktende.
            </motion.p>
            <motion.div variants={stg} className="space-y-6">
              {[
                {icon:<Phone size={16}/>, l:'Telefon', v:'+47 415 29 874', href:'tel:+4741529874'},
                {icon:<Mail size={16}/>, l:'E-post', v:'post@oacc.no', href:'mailto:post@oacc.no'},
                {icon:<MapPin size={16}/>, l:'Verksted', v:'Tvetenveien, Tveita, 0671 Oslo'},
                {icon:<Clock size={16}/>, l:'Åpningstider', v:'Mandag–fredag 08:00–17:00'},
              ].map((c,i) => (
                <motion.div key={i} variants={fade} className="flex gap-4 items-start group">
                  <div className="w-11 h-11 rounded-xl bg-surface border border-line flex items-center justify-center text-brand/50 group-hover:text-brand group-hover:border-brand/20 elegant-transition shrink-0 shadow-[var(--shadow-soft)]">
                    {c.icon}
                  </div>
                  <div>
                    <span className="block text-[9px] font-semibold tracking-[3px] uppercase text-ink-faint mb-1">{c.l}</span>
                    {c.href ? <a href={c.href} className="text-[15px] font-medium text-ink hover:text-brand elegant-transition">{c.v}</a> : <span className="text-[15px] font-medium text-ink">{c.v}</span>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.form variants={fade} onSubmit={handleSubmit}
            className="bg-surface border border-line/80 rounded-2xl p-9 shadow-[var(--shadow-soft)]">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div><label className="block text-[9px] font-semibold tracking-[3px] uppercase text-ink-faint mb-2">Navn</label><input name="name" required placeholder="Fullt navn" className={ic}/></div>
              <div><label className="block text-[9px] font-semibold tracking-[3px] uppercase text-ink-faint mb-2">Telefon</label><input name="phone" placeholder="+47" className={ic}/></div>
            </div>
            <div className="mb-4"><label className="block text-[9px] font-semibold tracking-[3px] uppercase text-ink-faint mb-2">E-post</label><input name="email" type="email" required placeholder="din@epost.no" className={ic}/></div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div><label className="block text-[9px] font-semibold tracking-[3px] uppercase text-ink-faint mb-2">Tjeneste</label>
                <select name="service" className={ic+' appearance-none'}><option value="">Velg tjeneste</option><option>Taksameter komplett</option><option>Taxi-pakke (alt inkludert)</option><option>Folering</option><option>Polering</option><option>Keramisk coating</option><option>Elbil-batteri</option><option>Gummitrekk</option><option>Annet / usikker</option></select></div>
              <div><label className="block text-[9px] font-semibold tracking-[3px] uppercase text-ink-faint mb-2">Kundetype</label>
                <select name="ctype" className={ic+' appearance-none'}><option value="">Velg type</option><option>Løyvehaver / taxieier</option><option>Taxisentral</option><option>Bedrift med bilflåte</option><option>Privat</option></select></div>
            </div>
            <div className="mb-7"><label className="block text-[9px] font-semibold tracking-[3px] uppercase text-ink-faint mb-2">Hva trenger du?</label><textarea name="message" required rows={4} placeholder="Bilmerke, årsmodell, hvilken jobb, ønsket tidspunkt..." className={ic+' resize-y min-h-[110px]'}/></div>
            <button type="submit" className="w-full bg-ink text-bg font-bold text-[13px] tracking-[1px] uppercase py-[18px] rounded-xl hover:bg-ink/85 elegant-transition flex items-center justify-center gap-2 shadow-[var(--shadow-medium)]">
              Send og motta tilbud <ArrowRight size={14}/>
            </button>
            <p className="text-[11px] text-ink-faint text-center mt-4">Uforpliktende. Svar vanligvis innen noen timer.</p>
            {status==='ok'&&<p className="text-[13px] text-green-700 text-center mt-3">E-postklienten din ble åpnet.</p>}
            {status==='error'&&<p className="text-[13px] text-red-600 text-center mt-3">Fyll inn alle obligatoriske felter.</p>}
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── FOOTER ─── */

function Footer() {
  return (
    <footer className="border-t border-line bg-bg pt-20 pb-10">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-[14px] font-black tracking-[6px] text-ink mb-4">OACC</div>
            <p className="text-[13px] text-ink-muted leading-[1.9]">Oslo Akershus Car Communication.<br/>Monteringsverksted på Tveita.<br/>Taksameter, folering og bilpleie.</p>
          </div>
          <div>
            <h4 className="text-[9px] font-bold tracking-[4px] uppercase text-ink-faint mb-5">Tjenester</h4>
            <div className="flex flex-col gap-3">
              {['Taksameter-montering','Komplett taxi-pakke','Folering','Polering','Keramisk coating','Elbil-batteri','Gummitrekk'].map(l=>(
                <a key={l} href="#tjenester" className="text-[13px] text-ink-muted hover:text-brand elegant-transition">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[9px] font-bold tracking-[4px] uppercase text-ink-faint mb-5">Kunder</h4>
            <div className="flex flex-col gap-3">
              {['Løyvehavere og taxieiere','Taxisentraler','Bedrifter med bilflåte','Privatpersoner'].map(l=>(
                <a key={l} href="#kontakt" className="text-[13px] text-ink-muted hover:text-brand elegant-transition">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[9px] font-bold tracking-[4px] uppercase text-ink-faint mb-5">Kontakt</h4>
            <div className="flex flex-col gap-3 text-[13px] text-ink-muted">
              <a href="tel:+4741529874" className="hover:text-brand elegant-transition">+47 415 29 874</a>
              <a href="mailto:post@oacc.no" className="hover:text-brand elegant-transition">post@oacc.no</a>
              <span>Tvetenveien, Tveita</span>
              <span>0671 Oslo</span>
              <span>Man–fre 08:00–17:00</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-line/60 text-center">
          <span className="text-[11px] text-ink-faint">&copy; 2026 OACC – Oslo Akershus Car Communication</span>
        </div>
      </div>
    </footer>
  )
}

/* ─── APP ─── */

export default function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <TaxiSignature/>
      <Services/>
      <WhyUs/>
      <Audience/>
      <Cases/>
      <Process/>
      <Booking/>
      <Contact/>
      <Footer/>
    </>
  )
}
