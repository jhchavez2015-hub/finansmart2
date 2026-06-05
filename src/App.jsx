import React, { useState, useEffect } from 'react';
import {
  CreditCard, TrendingDown, DollarSign, Plus, Trash2, FileText,
  BarChart3, Zap, Lightbulb, Target, Globe, AlertTriangle,
  ShieldAlert, CheckCircle2, RotateCcw, Download, ChevronRight,
  Info, TrendingUp, Wallet, Mail, ExternalLink, Star, X
} from 'lucide-react';

const translations = {
  es: {
    title: "FinanSmart", version: "V4.5 Hybrid Pro",
    tabFico: "Analizador FICO Dual", tabDeudas: "Acelerador de Deudas",
    configTitle: "Configuración de Perfil Crediticio",
    configSub: "Los cambios en tus deudas afectan la utilización automáticamente.",
    lblHistorial: "1. Historial de Pagos (Payment History)",
    lblUtilizacion: "2. Utilización de Crédito (Amounts Owed)",
    lblAntiguedad: "3. Antigüedad en el Buró (Length of Credit History)",
    lblMix: "4. Diversificación de Líneas (Credit Mix)",
    lblInquiries: "5. Consultas Recientes (New Credit / Inquiries)",
    selDefault: "Selecciona una opción...",
    calcScore: "Calcular Ambos Modelos", resetForm: "Reiniciar",
    waitingData: "Esperando datos de entrada",
    waitingSub: "Completa el formulario para generar la auditoría de crédito simultánea.",
    reportTitle: "Auditoría Dual de Puntuación FICO",
    traditionalModel: "FICO Tradicional (8/9)", trendedModel: "FICO 10 T (Tendencial)",
    impactTitle: "Impacto Métrico en Situación Actual",
    strategyTitle: "Estrategia de Optimización Recomendada",
    maxWeight: "Peso Máx.",
    carteraTitle: "Cartera de Pasivos (Tus Deudas)", btnAñadir: "Añadir Deuda",
    lblMonto: "Monto ($)", lblInteres: "Interés (% APR)", lblPagoMin: "Pago Mínimo ($)",
    lblInyeccionMensual: "Inyección de Pago Extra Mensual",
    lblInyeccionUnica: "Inyección de Pago Único (Sola vez)",
    btnCalcularDeudas: "Calcular Estrategia de Amortización",
    btnExportar: "Exportar",
    ahorroInteres: "Ahorro en Intereses", tiempoSalvado: "Tiempo Salvado",
    resumenProyeccion: "Resumen de Proyección Consolidada",
    tiempoReg: "Liquidación Regular:", tiempoAce: "Estrategia Acelerada:",
    interesReg: "Interés Total (Mínimo):", interesAce: "Interés Total (Acelerado):",
    alertaAmortizacion: "¡Peligro de Amortización Negativa!",
    alertaAmortizacionDesc: "El pago mínimo es demasiado bajo. El balance crecerá por los intereses acumulados.",
    footerText: "© 2025 FinanSmart Professional SPA",
    footerDisclaimer: "Solo para propósitos educativos. No constituye asesoría financiera.",
    meses: "meses",
    r_exceptional: "Excepcional", r_verygood: "Muy Bueno", r_good: "Bueno",
    r_fair: "Regular", r_poor: "Pobre",
    h_excelente: "Always on time (Clean History)",
    h_bueno: "An isolated missed payment",
    h_regular: "Frequent 30-60 days late payments",
    h_malo: "Accounts sent to Collections / Bankruptcy",
    u_auto: "Cálculo Automático basado en tus deudas actuales",
    u_bajo: "Excelente: Utilización por debajo del 30%",
    u_mod: "Moderado: Entre el 30% y el 50% de uso",
    u_alto: "Peligro: Uso elevado entre 50% y 90%",
    u_critico: "Crítico: Tarjetas al límite (Maxed out)",
    a_larga: "Mature: Más de 5 años operando",
    a_media: "Intermediate: Entre 2 y 5 años de historial",
    a_corta: "New: Less than 2 years in the system",
    m_optimo: "Mix Óptimo (Tarjetas + Préstamo Fijo/Auto)",
    m_soloUno: "Solo cuentas de tipo revolving (Tarjetas)",
    i_0: "0 Inquiries en los últimos 6 meses",
    i_pocas: "Pocas consultas (1 a 3 aplicaciones)",
    i_muchas: "Búsqueda intensiva (Más de 4 consultas)",
    disclaimerTitle: "Descargo de Responsabilidad",
    disclaimerBody1: "FinanSmart es una herramienta educativa diseñada para ayudarte a entender conceptos financieros básicos como la puntuación FICO y la gestión de deudas.",
    disclaimerBody2: "La información NO constituye asesoría financiera, legal, ni fiscal profesional. Los cálculos son aproximaciones y pueden no reflejar tu situación crediticia real.",
    disclaimerBody3: "Tu puntaje real puede variar significativamente según factores evaluados por Experian, Equifax y TransUnion.",
    disclaimerBody4: "Antes de tomar decisiones financieras importantes, consulta con un asesor certificado (CFP) o consejero de crédito acreditado.",
    disclaimerAccept: "Entiendo y acepto los términos",
    disclaimerEducational: "🎓 Solo uso educativo • No es asesoría financiera",
    // Newsletter
    newsletterTitle: "💡 Educación Financiera Gratis",
    newsletterSub: "Tips semanales para mejorar tu crédito y eliminar deudas más rápido.",
    newsletterBtn: "Suscribirse al Newsletter",
    newsletterBadge: "Gratis · Sin spam",
    // Afiliados
    affiliateTitle: "Herramientas Recomendadas",
    affiliateSub: "Recursos que usamos y recomendamos para mejorar tu salud financiera.",
    affiliateDisclosure: "* Links de afiliado — sin costo extra para ti.",
    affiliateBtn: "Ver Oferta",
  },
  en: {
    title: "FinanSmart", version: "V4.5 Hybrid Pro",
    tabFico: "Dual FICO Analyzer", tabDeudas: "Debt Accelerator",
    configTitle: "Credit Profile Configuration",
    configSub: "Changes in your debts will automatically affect credit utilization.",
    lblHistorial: "1. Payment History",
    lblUtilizacion: "2. Credit Utilization (Amounts Owed)",
    lblAntiguedad: "3. Length of Credit History",
    lblMix: "4. Credit Mix",
    lblInquiries: "5. New Credit (Recent Hard Inquiries)",
    selDefault: "Select an option...",
    calcScore: "Calculate Both Models", resetForm: "Reset",
    waitingData: "Waiting for Input Data",
    waitingSub: "Complete the form to generate the simultaneous credit audit.",
    reportTitle: "Dual FICO Score Audit Report",
    traditionalModel: "Traditional FICO (8/9)", trendedModel: "FICO 10 T (Trended Data)",
    impactTitle: "Metric Impact on Current Situation",
    strategyTitle: "Recommended Optimization Strategy",
    maxWeight: "Max Weight",
    carteraTitle: "Liability Portfolio (Your Debts)", btnAñadir: "Add Debt",
    lblMonto: "Amount ($)", lblInteres: "Interest (% APR)", lblPagoMin: "Min Payment ($)",
    lblInyeccionMensual: "Monthly Extra Payment Injection",
    lblInyeccionUnica: "Lump-Sum Single Injection",
    btnCalcularDeudas: "Calculate Amortization Strategy",
    btnExportar: "Export",
    ahorroInteres: "Interest Savings", tiempoSalvado: "Time Saved",
    resumenProyeccion: "Consolidated Projection Summary",
    tiempoReg: "Regular Payoff Time:", tiempoAce: "Accelerated Strategy Time:",
    interesReg: "Total Interest (Minimum):", interesAce: "Total Interest (Accelerated):",
    alertaAmortizacion: "Negative Amortization Hazard!",
    alertaAmortizacionDesc: "The minimum payment is too low. The balance will grow due to accumulated interest.",
    footerText: "© 2025 FinanSmart Professional SPA",
    footerDisclaimer: "For educational purposes only. Not financial advice.",
    meses: "months",
    r_exceptional: "Exceptional", r_verygood: "Very Good", r_good: "Good",
    r_fair: "Fair", r_poor: "Poor",
    h_excelente: "Always on time (Clean History)",
    h_bueno: "An isolated missed payment",
    h_regular: "Frequent 30-60 days late payments",
    h_malo: "Accounts sent to Collections / Bankruptcy",
    u_auto: "Automatic Calculation based on your current debts",
    u_bajo: "Excellent: Utilization below 30%",
    u_mod: "Moderate: Between 30% and 50% usage",
    u_alto: "Danger: High usage between 50% and 90%",
    u_critico: "Critical: Cards maxed out",
    a_larga: "Mature: More than 5 years active",
    a_media: "Intermediate: Between 2 and 5 years of history",
    a_corta: "New: Less than 2 years in the system",
    m_optimo: "Optimal Mix (Cards + Installment Loan/Auto)",
    m_soloUno: "Only revolving accounts (Credit Cards only)",
    i_0: "0 Inquiries in the last 6 months",
    i_pocas: "Few inquiries (1 to 3 applications)",
    i_muchas: "Intensive search (4+ inquiries)",
    disclaimerTitle: "Disclaimer",
    disclaimerBody1: "FinanSmart is an educational tool designed to help you understand basic financial concepts such as FICO scoring and debt management.",
    disclaimerBody2: "The information does NOT constitute professional financial, legal, or tax advice. Calculations are approximations and may not reflect your real credit situation.",
    disclaimerBody3: "Your actual score may vary significantly depending on factors evaluated by Experian, Equifax, and TransUnion.",
    disclaimerBody4: "Before making important financial decisions, always consult a Certified Financial Planner (CFP) or accredited credit counselor.",
    disclaimerAccept: "I understand and accept the terms",
    disclaimerEducational: "🎓 Educational use only • Not financial advice",
    newsletterTitle: "💡 Free Financial Education",
    newsletterSub: "Weekly tips to improve your credit score and eliminate debt faster.",
    newsletterBtn: "Subscribe to Newsletter",
    newsletterBadge: "Free · No spam",
    affiliateTitle: "Recommended Tools",
    affiliateSub: "Resources we use and recommend to improve your financial health.",
    affiliateDisclosure: "* Affiliate links — no extra cost to you.",
    affiliateBtn: "See Offer",
  }
};

// ── AFFILIATE DATA ─────────────────────────────────────────────
// Reemplaza los href con tus links reales de afiliado
const affiliates = [
  {
    id: 1,
    icon: "💳",
    nameEs: "Self Credit Builder",
    nameEn: "Self Credit Builder",
    descEs: "Construye historial crediticio sin tarjeta de crédito tradicional.",
    descEn: "Build credit history without a traditional credit card.",
    tag: "Credit Building",
    color: "indigo",
    href: "https://www.self.inc/",   // ← reemplaza con tu link de afiliado
  },
  {
    id: 2,
    icon: "📊",
    nameEs: "Credit Karma",
    nameEn: "Credit Karma",
    descEs: "Monitorea tu score FICO gratis con alertas en tiempo real.",
    descEn: "Monitor your FICO score for free with real-time alerts.",
    tag: "Score Monitor",
    color: "emerald",
    href: "https://www.creditkarma.com/",  // ← reemplaza con tu link de afiliado
  },
  {
    id: 3,
    icon: "🏦",
    nameEs: "Chime Banking",
    nameEn: "Chime Banking",
    descEs: "Cuenta bancaria sin comisiones con tarjeta Secured para crédito.",
    descEn: "Fee-free banking with a Secured card to build credit.",
    tag: "Banking",
    color: "violet",
    href: "https://www.chime.com/",  // ← reemplaza con tu link de afiliado
  },
];

// ── NEWSLETTER URL ─────────────────────────────────────────────
// Reemplaza con tu link real (Beehiiv, Substack, Mailchimp, etc.)
const NEWSLETTER_URL = "https://finansmart.beehiiv.com/subscribe"; // ← reemplaza

// ── DISCLAIMER MODAL ──────────────────────────────────────────
function DisclaimerModal({ lang, onAccept }) {
  const t = translations[lang];
  return (
    <div style={{position:'fixed',inset:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'center',padding:'1rem',background:'rgba(0,0,0,0.8)',backdropFilter:'blur(6px)'}}>
      <div style={{background:'#0f172a',border:'1px solid rgba(245,158,11,0.4)',borderRadius:'1rem',maxWidth:'32rem',width:'100%',boxShadow:'0 25px 50px rgba(0,0,0,0.7)',overflow:'hidden'}}>
        <div style={{background:'linear-gradient(135deg,rgba(245,158,11,0.2),rgba(249,115,22,0.1))',borderBottom:'1px solid rgba(245,158,11,0.3)',padding:'1rem 1.5rem',display:'flex',alignItems:'center',gap:'0.75rem'}}>
          <div style={{background:'rgba(245,158,11,0.2)',padding:'0.5rem',borderRadius:'0.75rem',border:'1px solid rgba(245,158,11,0.3)'}}>
            <ShieldAlert style={{width:'1.25rem',height:'1.25rem',color:'#fbbf24'}} />
          </div>
          <div>
            <h2 style={{margin:0,fontSize:'0.875rem',fontWeight:700,color:'#fcd34d',letterSpacing:'0.05em'}}>{t.disclaimerTitle}</h2>
            <p style={{margin:0,fontSize:'0.625rem',color:'rgba(251,191,36,0.7)'}}>{t.disclaimerEducational}</p>
          </div>
        </div>
        <div style={{padding:'1.25rem 1.5rem',display:'flex',flexDirection:'column',gap:'0.75rem',maxHeight:'20rem',overflowY:'auto'}}>
          {[t.disclaimerBody1,t.disclaimerBody2,t.disclaimerBody3,t.disclaimerBody4].map((text,i)=>(
            <div key={i} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
              <span style={{flexShrink:0,width:'1.25rem',height:'1.25rem',borderRadius:'50%',background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.625rem',fontWeight:700,color:'#fbbf24',marginTop:'0.125rem'}}>{i+1}</span>
              <p style={{margin:0,fontSize:'0.75rem',color:'#cbd5e1',lineHeight:1.6}}>{text}</p>
            </div>
          ))}
        </div>
        <div style={{padding:'0.75rem 1.5rem 1.25rem',borderTop:'1px solid #1e293b'}}>
          <button onClick={onAccept} style={{width:'100%',background:'linear-gradient(135deg,#f59e0b,#f97316)',color:'#0f172a',fontWeight:700,padding:'0.75rem',borderRadius:'0.75rem',fontSize:'0.875rem',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',transition:'all 0.2s'}}>
            <CheckCircle2 style={{width:'1rem',height:'1rem'}} />
            {t.disclaimerAccept}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── SCORE BADGE ───────────────────────────────────────────────
function ScoreBadge({ score, label, color }) {
  const getColor = () => {
    if (score >= 800) return { grad: 'linear-gradient(135deg,#10b981,#14b8a6)', arc: '#10b981' };
    if (score >= 740) return { grad: 'linear-gradient(135deg,#14b8a6,#06b6d4)', arc: '#14b8a6' };
    if (score >= 670) return { grad: 'linear-gradient(135deg,#f59e0b,#eab308)', arc: '#f59e0b' };
    if (score >= 580) return { grad: 'linear-gradient(135deg,#f97316,#f59e0b)', arc: '#f97316' };
    return { grad: 'linear-gradient(135deg,#f43f5e,#ef4444)', arc: '#f43f5e' };
  };
  const { grad, arc } = getColor();
  const pct = Math.min(100, Math.max(0, ((score - 300) / 550) * 100));
  const circ = 2 * Math.PI * 36;
  const dash = (pct / 100) * circ * 0.75;
  return (
    <div style={{background:'rgba(15,23,42,0.6)',border:'1px solid #1e293b',padding:'1rem',borderRadius:'0.75rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <span style={{fontSize:'0.625rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:color==='indigo'?'#818cf8':'#34d399'}}>{label}</span>
      <div style={{position:'relative',marginTop:'0.5rem'}}>
        <svg width="100" height="70" viewBox="0 0 100 70">
          <path d="M 10 65 A 40 40 0 0 1 90 65" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round"/>
          <path d="M 10 65 A 40 40 0 0 1 90 65" fill="none" stroke={arc} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${dash} ${circ}`} style={{transition:'stroke-dasharray 0.8s ease-out'}}/>
        </svg>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'0.75rem'}}>
          <span style={{fontSize:'1.875rem',fontWeight:900,background:grad,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{score}</span>
        </div>
      </div>
    </div>
  );
}

// ── NEWSLETTER BANNER ─────────────────────────────────────────
function NewsletterBanner({ lang }) {
  const t = translations[lang];
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div style={{background:'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.1))',border:'1px solid rgba(99,102,241,0.3)',borderRadius:'1rem',padding:'1rem 1.25rem',marginBottom:'1.5rem',display:'flex',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}>
      <div style={{background:'linear-gradient(135deg,#6366f1,#8b5cf6)',padding:'0.625rem',borderRadius:'0.75rem',flexShrink:0}}>
        <Mail style={{width:'1.25rem',height:'1.25rem',color:'white'}} />
      </div>
      <div style={{flex:1,minWidth:'200px'}}>
        <p style={{margin:0,fontSize:'0.8125rem',fontWeight:700,color:'#e2e8f0'}}>{t.newsletterTitle}</p>
        <p style={{margin:0,fontSize:'0.6875rem',color:'#94a3b8',marginTop:'0.125rem'}}>{t.newsletterSub}</p>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:'0.5rem',flexShrink:0}}>
        <span style={{fontSize:'0.6rem',fontWeight:700,color:'#a5b4fc',background:'rgba(99,102,241,0.15)',border:'1px solid rgba(99,102,241,0.3)',padding:'0.25rem 0.5rem',borderRadius:'9999px'}}>{t.newsletterBadge}</span>
        <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer"
          style={{background:'linear-gradient(135deg,#6366f1,#8b5cf6)',color:'white',fontWeight:700,fontSize:'0.75rem',padding:'0.5rem 1rem',borderRadius:'0.625rem',textDecoration:'none',display:'flex',alignItems:'center',gap:'0.375rem',transition:'opacity 0.2s',whiteSpace:'nowrap'}}>
          {t.newsletterBtn} <ExternalLink style={{width:'0.75rem',height:'0.75rem'}} />
        </a>
        <button onClick={()=>setDismissed(true)} style={{background:'transparent',border:'none',cursor:'pointer',color:'#475569',padding:'0.25rem',display:'flex',alignItems:'center',borderRadius:'0.375rem'}}>
          <X style={{width:'0.875rem',height:'0.875rem'}} />
        </button>
      </div>
    </div>
  );
}

// ── AFFILIATE SECTION ─────────────────────────────────────────
function AffiliateSection({ lang }) {
  const t = translations[lang];
  const colorMap = {
    indigo: { bg:'rgba(99,102,241,0.08)', border:'rgba(99,102,241,0.25)', tag:'rgba(99,102,241,0.15)', tagText:'#a5b4fc', btn:'linear-gradient(135deg,#6366f1,#4f46e5)' },
    emerald:{ bg:'rgba(16,185,129,0.08)',  border:'rgba(16,185,129,0.25)',  tag:'rgba(16,185,129,0.15)',  tagText:'#6ee7b7',  btn:'linear-gradient(135deg,#10b981,#059669)' },
    violet: { bg:'rgba(139,92,246,0.08)', border:'rgba(139,92,246,0.25)', tag:'rgba(139,92,246,0.15)', tagText:'#c4b5fd', btn:'linear-gradient(135deg,#8b5cf6,#7c3aed)' },
  };
  return (
    <div style={{marginTop:'2rem',background:'rgba(15,23,42,0.5)',border:'1px solid #1e293b',borderRadius:'1rem',padding:'1.25rem'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'0.75rem',flexWrap:'wrap',gap:'0.5rem'}}>
        <div>
          <h4 style={{margin:0,fontSize:'0.75rem',fontWeight:700,color:'#e2e8f0',display:'flex',alignItems:'center',gap:'0.5rem'}}>
            <Star style={{width:'0.875rem',height:'0.875rem',color:'#fbbf24'}} />
            {t.affiliateTitle}
          </h4>
          <p style={{margin:0,fontSize:'0.6875rem',color:'#64748b',marginTop:'0.25rem'}}>{t.affiliateSub}</p>
        </div>
        <span style={{fontSize:'0.6rem',color:'#475569',fontStyle:'italic'}}>{t.affiliateDisclosure}</span>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'0.75rem'}}>
        {affiliates.map(a => {
          const c = colorMap[a.color];
          return (
            <div key={a.id} style={{background:c.bg,border:`1px solid ${c.border}`,borderRadius:'0.75rem',padding:'0.875rem',display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                <span style={{fontSize:'1.25rem'}}>{a.icon}</span>
                <div>
                  <p style={{margin:0,fontSize:'0.75rem',fontWeight:700,color:'#e2e8f0'}}>{lang==='es'?a.nameEs:a.nameEn}</p>
                  <span style={{fontSize:'0.6rem',fontWeight:700,color:c.tagText,background:c.tag,padding:'0.125rem 0.375rem',borderRadius:'9999px'}}>{a.tag}</span>
                </div>
              </div>
              <p style={{margin:0,fontSize:'0.6875rem',color:'#94a3b8',lineHeight:1.5,flexGrow:1}}>{lang==='es'?a.descEs:a.descEn}</p>
              <a href={a.href} target="_blank" rel="noopener noreferrer sponsored"
                style={{background:c.btn,color:'white',fontWeight:700,fontSize:'0.6875rem',padding:'0.5rem 0.75rem',borderRadius:'0.5rem',textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'center',gap:'0.375rem',transition:'opacity 0.2s'}}>
                {t.affiliateBtn} <ExternalLink style={{width:'0.625rem',height:'0.625rem'}} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── APP PRINCIPAL ─────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [activeTab, setActiveTab] = useState('score');
  const [scoreAnswers, setScoreAnswers] = useState({ historial:'', utilizacion:'auto', antiguedad:'', tipos:'', consultas:'' });
  const [reporteScore, setReporteScore] = useState(null);

  const [debts, setDebts] = useState(() => {
    try { const s = localStorage.getItem('finansmart_debts'); if(s) return JSON.parse(s); } catch(e){}
    return [
      { id:1, nombre:'Credit Card A', balance:'5000', interesAnual:'24', pagoMensual:'200' },
      { id:2, nombre:'Business Line', balance:'12000', interesAnual:'14', pagoMensual:'350' }
    ];
  });
  const [globalPagoExtra, setGlobalPagoExtra] = useState(()=>localStorage.getItem('finansmart_pago_extra')||'200');
  const [pagoUnicoSolaVez, setPagoUnicoSolaVez] = useState(()=>localStorage.getItem('finansmart_pago_unico')||'1500');
  const [debtResult, setDebtResult] = useState(null);
  const [hayAmortizacionNegativa, setHayAmortizacionNegativa] = useState(false);

  useEffect(()=>{
    const accepted = sessionStorage.getItem('finansmart_disclaimer_accepted');
    if(!accepted) setShowDisclaimer(true);
  },[]);

  const handleAcceptDisclaimer = () => {
    sessionStorage.setItem('finansmart_disclaimer_accepted','true');
    setShowDisclaimer(false);
  };

  useEffect(()=>{
    localStorage.setItem('finansmart_debts', JSON.stringify(debts));
    let peligro = false;
    debts.forEach(d=>{
      const bal = parseFloat(d.balance)||0;
      const rate = ((parseFloat(d.interesAnual)||0)/100)/12;
      const pmt = parseFloat(d.pagoMensual)||0;
      if(bal>0 && pmt<=bal*rate) peligro=true;
    });
    setHayAmortizacionNegativa(peligro);
  },[debts]);

  useEffect(()=>{ localStorage.setItem('finansmart_pago_extra', globalPagoExtra); },[globalPagoExtra]);
  useEffect(()=>{ localStorage.setItem('finansmart_pago_unico', pagoUnicoSolaVez); },[pagoUnicoSolaVez]);

  const obtenerUtilizacionAutomatica = () => {
    const total = debts.reduce((s,d)=>s+(parseFloat(d.balance)||0),0);
    const r = (total/40000)*100;
    if(r<30) return 'bajo'; if(r<50) return 'moderado'; if(r<85) return 'alto'; return 'critico';
  };

  const obtenerRangoNominal = (score) => {
    if(score>=800) return {texto:t.r_exceptional, color:'#10b981'};
    if(score>=740) return {texto:t.r_verygood, color:'#14b8a6'};
    if(score>=670) return {texto:t.r_good, color:'#f59e0b'};
    if(score>=580) return {texto:t.r_fair, color:'#f97316'};
    return {texto:t.r_poor, color:'#f43f5e'};
  };

  const calcularCreditScore = (e) => {
    e.preventDefault();
    const {historial,utilizacion,antiguedad,tipos,consultas} = scoreAnswers;
    if(!historial||!utilizacion||!antiguedad||!tipos||!consultas){
      alert(lang==='es'?"Por favor, responde todas las preguntas.":"Please answer all questions."); return;
    }
    const uReal = utilizacion==='auto' ? obtenerUtilizacionAutomatica() : utilizacion;
    const max = {historial:192.5,utilizacion:165,antiguedad:82.5,tipos:55,consultas:55};
    const trad = {
      historial:{excelente:192.5,bueno:154,regular:96.25,malo:38.5}[historial],
      utilizacion:{bajo:165,moderado:132,alto:66,critico:16.5}[uReal],
      antiguedad:{larga:82.5,media:57.75,corta:24.75}[antiguedad],
      tipos:{multiples:55,soloUno:27.5}[tipos],
      consultas:{ningun:55,pocas:38.5,muchas:11}[consultas]
    };
    const scoreTrad = Math.round(300+trad.historial+trad.utilizacion+trad.antiguedad+trad.tipos+trad.consultas);
    const tend = {
      historial:{excelente:192.5,bueno:145,regular:85,malo:25}[historial],
      utilizacion:{bajo:165,moderado:140,alto:80,critico:15}[uReal],
      antiguedad:{larga:82.5,media:60,corta:20}[antiguedad],
      tipos:{multiples:55,soloUno:30}[tipos],
      consultas:{ningun:55,pocas:40,muchas:10}[consultas]
    };
    const score10T = Math.round(300+tend.historial+tend.utilizacion+tend.antiguedad+tend.tipos+tend.consultas);
    let consejos=[];
    if(historial==='regular'||historial==='malo') consejos.push({titulo:lang==='es'?"Configurar Autopay Inmediato":"Set Up Instant Autopay",detalle:lang==='es'?"Los retrasos destruyen el modelo Tradicional al instante.":"Late payments destroy the Traditional model instantly."});
    if(uReal==='alto'||uReal==='critico') consejos.push({titulo:lang==='es'?"Reducir balances con el Acelerador":"Reduce balances via Debt Accelerator",detalle:lang==='es'?"Tu deuda actual está asfixiando tu puntaje. Liquidar libera hasta 150 puntos.":"Your current debt is suffocating your score. Paying down releases up to 150 points."});
    setReporteScore({
      scoreTrad, score10T,
      dictamenTrad: lang==='es'?"Mide la solvencia estática ('foto fija'). Ideal para tarjetas y préstamos de auto.":"Measures static creditworthiness ('snapshot'). Standard for credit cards and auto loans.",
      dictamen10T: lang==='es'?"Analiza los últimos 24 meses. Castiga si arrastras balances crónicamente.":"Analyzes last 24 months. Heavily penalizes carrying chronic revolving debt.",
      consejos: consejos.length>0 ? consejos : [{titulo:lang==='es'?"Optimización Avanzada":"Advanced Optimization",detalle:lang==='es'?"Mantén tu utilización por debajo del 10% para estabilidad bilateral.":"Keep overall utilization below 10% for bilateral stability."}],
      desglose:[
        {nombre:'Payment History', trad:trad.historial, tend:tend.historial, max:max.historial},
        {nombre:'Amounts Owed (Utilization)', trad:trad.utilizacion, tend:tend.utilizacion, max:max.utilizacion},
        {nombre:'Length of Credit History', trad:trad.antiguedad, tend:tend.antiguedad, max:max.antiguedad},
        {nombre:'Credit Mix', trad:trad.tipos, tend:tend.tipos, max:max.tipos},
        {nombre:'New Credit (Inquiries)', trad:trad.consultas, tend:tend.consultas, max:max.consultas},
      ]
    });
  };

  const exportarReporte = () => {
    if(!reporteScore) return;
    const lines = [`FinanSmart - ${t.reportTitle}`,`Date: ${new Date().toLocaleDateString()}`,'',
      `${t.traditionalModel}: ${reporteScore.scoreTrad}`,`${t.trendedModel}: ${reporteScore.score10T}`,'',
      ...reporteScore.desglose.map(d=>`${d.nombre}: FICO ${Math.round(d.trad)} | 10T ${Math.round(d.tend)} / Max ${d.max}`),'',
      ...reporteScore.consejos.map((c,i)=>`${i+1}. ${c.titulo}: ${c.detalle}`),'',
      `⚠️ ${lang==='es'?'Solo fines educativos.':'For educational purposes only.'}`];
    const blob = new Blob([lines.join('\n')],{type:'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download=`finansmart-report-${Date.now()}.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  const calcularEstrategiaGlobal = (e) => {
    e.preventDefault();
    if(hayAmortizacionNegativa){ alert(lang==='es'?"Corrige los pagos mínimos.":"Fix minimum payments first."); return; }
    let aReg = debts.map(d=>({balance:parseFloat(d.balance)||0,r:((parseFloat(d.interesAnual)||0)/100)/12,pmt:parseFloat(d.pagoMensual)||0})).filter(d=>d.balance>0);
    let mReg=0, iReg=0;
    while(aReg.length>0&&mReg<360){ mReg++;
      aReg=aReg.filter(d=>{ const i=d.balance*d.r; iReg+=i; d.balance=(d.balance+i)-Math.min(d.pmt,d.balance+i); return d.balance>0.01; });
    }
    let aAce = debts.map(d=>({balance:parseFloat(d.balance)||0,r:((parseFloat(d.interesAnual)||0)/100)/12,pmt:parseFloat(d.pagoMensual)||0})).filter(d=>d.balance>0).sort((a,b)=>b.r-a.r);
    let mAce=0, iAce=0;
    const inyM = parseFloat(globalPagoExtra)||0;
    let inyU = parseFloat(pagoUnicoSolaVez)||0;
    while(aAce.length>0&&mAce<360){ mAce++;
      let bolsa = inyM + (mAce===1?inyU:0);
      aAce.forEach(d=>{ const i=d.balance*d.r; iAce+=i; d.balance+=i; });
      aAce.forEach(d=>{ d.balance-=Math.min(d.pmt,d.balance); });
      for(let d of aAce){ if(d.balance>0&&bolsa>0){ const x=Math.min(bolsa,d.balance); d.balance-=x; bolsa-=x; } }
      aAce=aAce.filter(d=>d.balance>0.01);
    }
    setDebtResult({ mesesRegular:mReg, interesesRegular:Math.max(0,iReg), mesesAcelerado:mAce, interesesAcelerado:Math.max(0,iAce), mesesAhorrados:Math.max(0,mReg-mAce), dineroAhorrado:Math.max(0,iReg-iAce) });
  };

  // ── STYLES (inline para garantizar colores en Vercel) ────────
  const S = {
    app: { minHeight:'100vh', background:'#020617', color:'#f1f5f9', fontFamily:'system-ui,sans-serif' },
    disclaimerBar: { background:'linear-gradient(90deg,rgba(245,158,11,0.15),rgba(249,115,22,0.1))', borderBottom:'1px solid rgba(245,158,11,0.25)', padding:'0.375rem 1rem', textAlign:'center', fontSize:'0.625rem', color:'rgba(251,191,36,0.9)', fontWeight:500 },
    header: { borderBottom:'1px solid #1e293b', background:'rgba(2,6,23,0.95)', position:'sticky', top:0, zIndex:40, backdropFilter:'blur(12px)' },
    headerInner: { maxWidth:'72rem', margin:'0 auto', padding:'0 1rem', height:'3.5rem', display:'flex', alignItems:'center', justifyContent:'space-between' },
    logo: { display:'flex', alignItems:'center', gap:'0.75rem' },
    logoIcon: { background:'linear-gradient(135deg,#6366f1,#8b5cf6,#7c3aed)', padding:'0.5rem', borderRadius:'0.75rem', boxShadow:'0 0 20px rgba(99,102,241,0.3)' },
    logoText: { fontWeight:700, fontSize:'1rem', color:'white', letterSpacing:'-0.025em' },
    badge: { fontSize:'0.5625rem', fontWeight:700, color:'#a5b4fc', background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.25)', padding:'0.125rem 0.5rem', borderRadius:'9999px', marginLeft:'0.5rem' },
    nav: { display:'flex', gap:'0.25rem', background:'#0f172a', padding:'0.25rem', borderRadius:'0.75rem', border:'1px solid #1e293b' },
    tabActive: { background:'linear-gradient(135deg,#4f46e5,#6366f1)', color:'white', padding:'0.375rem 0.75rem', borderRadius:'0.5rem', fontSize:'0.75rem', fontWeight:600, border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.375rem', boxShadow:'0 0 20px rgba(99,102,241,0.4)' },
    tabInactive: { background:'transparent', color:'#94a3b8', padding:'0.375rem 0.75rem', borderRadius:'0.5rem', fontSize:'0.75rem', fontWeight:600, border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.375rem' },
    warnBtn: { background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.3)', color:'#fbbf24', fontSize:'0.625rem', padding:'0.375rem 0.625rem', borderRadius:'0.75rem', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.25rem', fontWeight:700 },
    langBtn: { background:'#1e293b', border:'1px solid #334155', color:'#cbd5e1', fontSize:'0.75rem', padding:'0.375rem 0.75rem', borderRadius:'0.75rem', cursor:'pointer', display:'flex', alignItems:'center', gap:'0.375rem', fontWeight:700 },
    main: { maxWidth:'72rem', margin:'0 auto', padding:'2rem 1rem' },
    grid2: { display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2rem' },
    card: { background:'rgba(15,23,42,0.6)', border:'1px solid #1e293b', borderRadius:'1rem', padding:'1.5rem' },
    cardGradBorder: { background:'rgba(15,23,42,0.6)', border:'1px solid #1e293b', borderRadius:'1rem', padding:'1.5rem', position:'relative' },
    label: { display:'block', fontSize:'0.6875rem', fontWeight:600, color:'#cbd5e1', marginBottom:'0.375rem' },
    select: { width:'100%', background:'rgba(15,23,42,0.8)', border:'1px solid rgba(51,65,85,0.8)', borderRadius:'0.75rem', padding:'0.5rem 0.75rem', fontSize:'0.75rem', color:'#e2e8f0', outline:'none' },
    input: { width:'100%', background:'rgba(15,23,42,0.8)', border:'1px solid rgba(51,65,85,0.8)', borderRadius:'0.5rem', padding:'0.375rem 0.625rem', fontSize:'0.75rem', color:'white', fontWeight:600, outline:'none', boxSizing:'border-box' },
    btnPrimary: { background:'linear-gradient(135deg,#4f46e5,#7c3aed)', color:'white', fontWeight:700, padding:'0.625rem 1rem', borderRadius:'0.75rem', fontSize:'0.75rem', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', width:'100%', transition:'all 0.2s' },
    btnSecondary: { background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.3)', color:'#a5b4fc', padding:'0.25rem 0.625rem', borderRadius:'0.5rem', fontSize:'0.625rem', fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:'0.25rem' },
    btnDanger: { background:'rgba(244,63,94,0.1)', border:'1px solid rgba(244,63,94,0.25)', color:'#fb7185', padding:'0.375rem', borderRadius:'0.5rem', cursor:'pointer', display:'flex', alignItems:'center' },
    progressTrack: { width:'100%', background:'#0f172a', height:'0.375rem', borderRadius:'9999px', overflow:'hidden' },
    footer: { borderTop:'1px solid #1e293b', padding:'1.5rem', marginTop:'2rem', textAlign:'center' },
  };

  return (
    <div style={S.app}>
      <style>{`
        @keyframes fadeInUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        .score-reveal{animation:fadeInUp 0.4s ease-out}
        .prog{transition:width 0.6s ease-out}
        select option{background:#0f172a;color:#e2e8f0}
        a:hover{opacity:0.85}
        button:hover{opacity:0.9}
      `}</style>

      {showDisclaimer && <DisclaimerModal lang={lang} onAccept={handleAcceptDisclaimer}/>}

      {/* HEADER */}
      <header style={S.header}>
        <div style={S.disclaimerBar}>
          ⚠️ {lang==='es'?'Herramienta educativa. No constituye asesoría financiera profesional.':'Educational tool. Does not constitute professional financial advice.'}
        </div>
        <div style={S.headerInner}>
          <div style={S.logo}>
            <div style={S.logoIcon}><BarChart3 style={{width:'1rem',height:'1rem',color:'white'}}/></div>
            <span style={S.logoText}>{t.title}<span style={S.badge}>{t.version}</span></span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
            <nav style={S.nav}>
              <button style={activeTab==='score'?S.tabActive:S.tabInactive} onClick={()=>setActiveTab('score')}>
                <CreditCard style={{width:'0.875rem',height:'0.875rem'}}/>{t.tabFico}
              </button>
              <button style={activeTab==='deuda'?S.tabActive:S.tabInactive} onClick={()=>setActiveTab('deuda')}>
                <TrendingDown style={{width:'0.875rem',height:'0.875rem'}}/>{t.tabDeudas}
              </button>
            </nav>
            <button style={S.warnBtn} onClick={()=>setShowDisclaimer(true)}>
              <ShieldAlert style={{width:'0.75rem',height:'0.75rem'}}/>Aviso
            </button>
            <button style={S.langBtn} onClick={()=>setLang(lang==='es'?'en':'es')}>
              <Globe style={{width:'0.875rem',height:'0.875rem',color:'#818cf8'}}/>{lang==='es'?'EN':'ES'}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main style={S.main}>

        {/* NEWSLETTER BANNER */}
        <NewsletterBanner lang={lang}/>

        {/* TAB FICO */}
        {activeTab==='score' && (
          <div style={S.grid2}>
            {/* FORM */}
            <div style={{...S.cardGradBorder, alignSelf:'start'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'0.25rem'}}>
                <h2 style={{margin:0,fontSize:'0.8125rem',fontWeight:700,color:'white',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                  <Target style={{width:'1rem',height:'1rem',color:'#818cf8'}}/>{t.configTitle}
                </h2>
                <button style={S.btnSecondary} onClick={()=>{setScoreAnswers({historial:'',utilizacion:'auto',antiguedad:'',tipos:'',consultas:''});setReporteScore(null);}}>
                  <RotateCcw style={{width:'0.75rem',height:'0.75rem'}}/>{t.resetForm}
                </button>
              </div>
              <p style={{fontSize:'0.6875rem',color:'#64748b',marginBottom:'1.25rem',marginTop:'0.25rem'}}>{t.configSub}</p>
              <form onSubmit={calcularCreditScore} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                {[
                  {label:t.lblHistorial,name:'historial',opts:[['excelente',t.h_excelente],['bueno',t.h_bueno],['regular',t.h_regular],['malo',t.h_malo]]},
                  {label:t.lblAntiguedad,name:'antiguedad',opts:[['larga',t.a_larga],['media',t.a_media],['corta',t.a_corta]]},
                  {label:t.lblMix,name:'tipos',opts:[['multiples',t.m_optimo],['soloUno',t.m_soloUno]]},
                  {label:t.lblInquiries,name:'consultas',opts:[['ningun',t.i_0],['pocas',t.i_pocas],['muchas',t.i_muchas]]},
                ].map(({label,name,opts})=>(
                  <div key={name}>
                    <label style={S.label}>{label}</label>
                    <select name={name} value={scoreAnswers[name]} onChange={e=>setScoreAnswers({...scoreAnswers,[e.target.name]:e.target.value})} style={S.select}>
                      <option value="">{t.selDefault}</option>
                      {opts.map(([v,l])=><option key={v} value={v}>{l}</option>)}
                    </select>
                  </div>
                ))}
                <div>
                  <label style={S.label}>{t.lblUtilizacion}</label>
                  <select name="utilizacion" value={scoreAnswers.utilizacion} onChange={e=>setScoreAnswers({...scoreAnswers,utilizacion:e.target.value})} style={{...S.select,color:'#818cf8',fontWeight:500}}>
                    <option value="auto">🔄 {t.u_auto}</option>
                    <option value="bajo">{t.u_bajo}</option>
                    <option value="moderado">{t.u_mod}</option>
                    <option value="alto">{t.u_alto}</option>
                    <option value="critico">{t.u_critico}</option>
                  </select>
                </div>
                <button type="submit" style={S.btnPrimary}>
                  <Zap style={{width:'0.875rem',height:'0.875rem'}}/>{t.calcScore}<ChevronRight style={{width:'0.875rem',height:'0.875rem'}}/>
                </button>
              </form>
            </div>

            {/* RESULTS */}
            <div style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
              {reporteScore ? (
                <div className="score-reveal" style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
                  <div style={S.card}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1rem',paddingBottom:'0.75rem',borderBottom:'1px solid #1e293b'}}>
                      <h3 style={{margin:0,fontSize:'0.75rem',fontWeight:700,color:'#818cf8',display:'flex',alignItems:'center',gap:'0.5rem',textTransform:'uppercase',letterSpacing:'0.05em'}}>
                        <FileText style={{width:'1rem',height:'1rem'}}/>{t.reportTitle}
                      </h3>
                      <button onClick={exportarReporte} style={{...S.btnSecondary,color:'#34d399'}}>
                        <Download style={{width:'0.75rem',height:'0.75rem'}}/>{t.btnExportar}
                      </button>
                    </div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1.25rem'}}>
                      <ScoreBadge score={reporteScore.scoreTrad} label={t.traditionalModel} color="indigo"/>
                      <ScoreBadge score={reporteScore.score10T} label={t.trendedModel} color="emerald"/>
                    </div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem',marginBottom:'1.25rem'}}>
                      {[
                        {score:reporteScore.scoreTrad,model:t.traditionalModel,dict:reporteScore.dictamenTrad,bg:'rgba(99,102,241,0.05)',border:'rgba(99,102,241,0.2)'},
                        {score:reporteScore.score10T,model:t.trendedModel,dict:reporteScore.dictamen10T,bg:'rgba(16,185,129,0.05)',border:'rgba(16,185,129,0.2)'},
                      ].map(({score,model,dict,bg,border},i)=>{
                        const r = obtenerRangoNominal(score);
                        return (
                          <div key={i} style={{background:bg,border:`1px solid ${border}`,padding:'0.75rem',borderRadius:'0.75rem'}}>
                            <p style={{margin:0,fontSize:'0.625rem',color:'#64748b',textTransform:'uppercase',fontWeight:700,letterSpacing:'0.05em',marginBottom:'0.25rem'}}>{model}</p>
                            <p style={{margin:0,fontSize:'0.6875rem',fontWeight:700,color:r.color,marginBottom:'0.375rem'}}>{r.texto}</p>
                            <p style={{margin:0,fontSize:'0.625rem',color:'#94a3b8',lineHeight:1.5}}>{dict}</p>
                          </div>
                        );
                      })}
                    </div>
                    <p style={{fontSize:'0.625rem',fontWeight:700,color:'#64748b',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'0.75rem'}}>{t.impactTitle}</p>
                    <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                      {reporteScore.desglose.map((item,idx)=>(
                        <div key={idx} style={{background:'rgba(15,23,42,0.4)',padding:'0.75rem',borderRadius:'0.75rem',border:'1px solid rgba(30,41,59,0.4)'}}>
                          <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.6875rem',fontWeight:600,marginBottom:'0.5rem'}}>
                            <span style={{color:'#cbd5e1'}}>{item.nombre}</span>
                            <span style={{color:'#64748b',fontSize:'0.625rem'}}>{t.maxWeight}: {item.max}</span>
                          </div>
                          {[{l:'FICO 8/9',v:item.trad,c:'#6366f1',t:'#818cf8'},{l:'FICO 10T',v:item.tend,c:'#10b981',t:'#34d399'}].map(({l,v,c,t:tc})=>(
                            <div key={l} style={{marginBottom:'0.375rem'}}>
                              <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.625rem',color:'#64748b',marginBottom:'0.25rem'}}>
                                <span>{l}</span><span style={{fontWeight:700,color:tc}}>{Math.round(v)} pts</span>
                              </div>
                              <div style={S.progressTrack}>
                                <div className="prog" style={{height:'100%',background:c,borderRadius:'9999px',width:`${(v/item.max)*100}%`}}/>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={S.card}>
                    <h4 style={{margin:0,fontSize:'0.75rem',fontWeight:700,color:'#818cf8',textTransform:'uppercase',letterSpacing:'0.05em',display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'1rem'}}>
                      <Lightbulb style={{width:'1rem',height:'1rem',color:'#fbbf24'}}/>{t.strategyTitle}
                    </h4>
                    {reporteScore.consejos.map((c,i)=>(
                      <div key={i} style={{padding:'0.875rem',borderRadius:'0.75rem',background:'linear-gradient(90deg,rgba(99,102,241,0.05),transparent)',border:'1px solid rgba(99,102,241,0.15)',display:'flex',gap:'0.75rem',marginBottom:'0.75rem'}}>
                        <span style={{flexShrink:0,width:'1.25rem',height:'1.25rem',borderRadius:'50%',background:'rgba(99,102,241,0.15)',border:'1px solid rgba(99,102,241,0.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.625rem',fontWeight:700,color:'#818cf8'}}>{i+1}</span>
                        <div><h5 style={{margin:0,fontSize:'0.75rem',fontWeight:700,color:'#e2e8f0',marginBottom:'0.25rem'}}>{c.titulo}</h5>
                        <p style={{margin:0,fontSize:'0.6875rem',color:'#94a3b8',lineHeight:1.5}}>{c.detalle}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{...S.card,border:'1px dashed #1e293b',minHeight:'24rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:'0.5rem'}}>
                  <div style={{background:'rgba(30,41,59,0.5)',padding:'1rem',borderRadius:'1rem',marginBottom:'0.5rem'}}>
                    <TrendingUp style={{width:'2.5rem',height:'2.5rem',color:'#334155'}}/>
                  </div>
                  <h4 style={{margin:0,fontSize:'0.875rem',fontWeight:700,color:'#475569'}}>{t.waitingData}</h4>
                  <p style={{margin:0,fontSize:'0.75rem',color:'#334155',maxWidth:'20rem'}}>{t.waitingSub}</p>
                  <div style={{display:'flex',gap:'0.5rem',marginTop:'1rem',flexWrap:'wrap',justifyContent:'center'}}>
                    {[['800+','#10b981','rgba(16,185,129,0.2)'],['740-799','#14b8a6','rgba(20,184,166,0.2)'],['670-739','#f59e0b','rgba(245,158,11,0.2)'],['580-669','#f97316','rgba(249,115,22,0.2)'],['<580','#f43f5e','rgba(244,63,94,0.2)']].map(([r,c,bg])=>(
                      <span key={r} style={{fontSize:'0.5625rem',fontWeight:700,padding:'0.25rem 0.5rem',borderRadius:'0.5rem',border:`1px solid ${c}40`,background:bg,color:c}}>{r}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB DEUDA */}
        {activeTab==='deuda' && (
          <div style={S.grid2}>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <div style={{...S.card,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <h3 style={{margin:0,fontSize:'0.75rem',fontWeight:700,color:'#cbd5e1',textTransform:'uppercase',letterSpacing:'0.05em',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                  <Wallet style={{width:'1rem',height:'1rem',color:'#818cf8'}}/>{t.carteraTitle}
                </h3>
                <button onClick={()=>{const id=debts.length>0?Math.max(...debts.map(d=>d.id))+1:1;setDebts([...debts,{id,nombre:`Debt ${id}`,balance:'3000',interesAnual:'18',pagoMensual:'100'}]);}} style={{...S.btnSecondary,color:'#818cf8'}}>
                  <Plus style={{width:'0.875rem',height:'0.875rem'}}/>{t.btnAñadir}
                </button>
              </div>
              {hayAmortizacionNegativa && (
                <div style={{padding:'1rem',borderRadius:'0.75rem',background:'rgba(244,63,94,0.1)',border:'1px solid rgba(244,63,94,0.3)',color:'#fb7185',display:'flex',gap:'0.75rem',alignItems:'flex-start'}}>
                  <AlertTriangle style={{width:'1.25rem',height:'1.25rem',flexShrink:0,marginTop:'0.125rem'}}/>
                  <div><h5 style={{margin:0,fontSize:'0.75rem',fontWeight:700}}>{t.alertaAmortizacion}</h5>
                  <p style={{margin:0,fontSize:'0.6875rem',color:'rgba(251,113,133,0.8)',marginTop:'0.25rem',lineHeight:1.5}}>{t.alertaAmortizacionDesc}</p></div>
                </div>
              )}
              <form onSubmit={calcularEstrategiaGlobal} style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                {debts.map(debt=>(
                  <div key={debt.id} style={{...S.card,padding:'1rem'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:'0.5rem',borderBottom:'1px solid #1e293b',marginBottom:'0.75rem'}}>
                      <input type="text" value={debt.nombre} onChange={e=>setDebts(debts.map(d=>d.id===debt.id?{...d,nombre:e.target.value}:d))}
                        style={{background:'transparent',border:'none',fontWeight:700,fontSize:'0.75rem',color:'#818cf8',outline:'none',width:'70%'}}/>
                      {debts.length>1 && <button type="button" onClick={()=>setDebts(debts.filter(d=>d.id!==debt.id))} style={S.btnDanger}><Trash2 style={{width:'0.875rem',height:'0.875rem'}}/></button>}
                    </div>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'0.75rem'}}>
                      {[['balance',t.lblMonto],['interesAnual',t.lblInteres],['pagoMensual',t.lblPagoMin]].map(([field,label])=>(
                        <div key={field}>
                          <label style={{...S.label,fontSize:'0.625rem',color:'#64748b'}}>{label}</label>
                          <input type="text" value={debt[field]} onChange={e=>setDebts(debts.map(d=>d.id===debt.id?{...d,[field]:e.target.value.replace(/[^0-9.]/g,'')}:d))} style={S.input} required/>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div style={{background:'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(139,92,246,0.05))',border:'1px solid rgba(99,102,241,0.2)',padding:'1rem',borderRadius:'0.75rem',display:'flex',flexDirection:'column',gap:'0.75rem'}}>
                  <div>
                    <label style={{...S.label,color:'#a5b4fc'}}>{t.lblInyeccionMensual}</label>
                    <input type="text" value={globalPagoExtra} onChange={e=>setGlobalPagoExtra(e.target.value.replace(/[^0-9.]/g,''))} style={{...S.input,color:'#818cf8'}}/>
                  </div>
                  <div>
                    <label style={{...S.label,color:'#34d399',display:'flex',alignItems:'center',gap:'0.375rem'}}><Zap style={{width:'0.875rem',height:'0.875rem'}}/>{t.lblInyeccionUnica}</label>
                    <input type="text" value={pagoUnicoSolaVez} onChange={e=>setPagoUnicoSolaVez(e.target.value.replace(/[^0-9.]/g,''))} style={{...S.input,color:'#34d399'}}/>
                  </div>
                </div>
                <button type="submit" style={S.btnPrimary}><TrendingDown style={{width:'1rem',height:'1rem'}}/>{t.btnCalcularDeudas}</button>
              </form>
            </div>

            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              {debtResult ? (
                <div className="score-reveal" style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                    <div style={{background:'rgba(5,46,22,0.3)',border:'1px solid rgba(16,185,129,0.25)',padding:'1rem',borderRadius:'0.75rem'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'0.5rem'}}>
                        <div style={{background:'rgba(16,185,129,0.15)',padding:'0.375rem',borderRadius:'0.5rem'}}><DollarSign style={{width:'0.875rem',height:'0.875rem',color:'#34d399'}}/></div>
                        <span style={{fontSize:'0.625rem',color:'#34d399',textTransform:'uppercase',fontWeight:700,letterSpacing:'0.05em'}}>{t.ahorroInteres}</span>
                      </div>
                      <h4 style={{margin:0,fontSize:'1.5rem',fontWeight:900,color:'#34d399'}}>${debtResult.dineroAhorrado.toLocaleString('en-US',{maximumFractionDigits:0})}</h4>
                    </div>
                    <div style={{background:'rgba(30,27,75,0.3)',border:'1px solid rgba(99,102,241,0.25)',padding:'1rem',borderRadius:'0.75rem'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'0.5rem'}}>
                        <div style={{background:'rgba(99,102,241,0.15)',padding:'0.375rem',borderRadius:'0.5rem'}}><Zap style={{width:'0.875rem',height:'0.875rem',color:'#818cf8'}}/></div>
                        <span style={{fontSize:'0.625rem',color:'#818cf8',textTransform:'uppercase',fontWeight:700,letterSpacing:'0.05em'}}>{t.tiempoSalvado}</span>
                      </div>
                      <h4 style={{margin:0,fontSize:'1.5rem',fontWeight:900,color:'#818cf8'}}>{debtResult.mesesAhorrados} <span style={{fontSize:'0.875rem',fontWeight:600}}>{t.meses}</span></h4>
                    </div>
                  </div>
                  <div style={S.card}>
                    <h4 style={{margin:0,fontSize:'0.75rem',fontWeight:700,color:'#cbd5e1',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'1rem'}}>{t.resumenProyeccion}</h4>
                    {[
                      {label:t.tiempoReg,value:`${debtResult.mesesRegular} ${t.meses}`,color:'#cbd5e1'},
                      {label:t.tiempoAce,value:`${debtResult.mesesAcelerado} ${t.meses}`,color:'#818cf8'},
                      {label:t.interesReg,value:`$${debtResult.interesesRegular.toLocaleString('en-US',{maximumFractionDigits:0})}`,color:'#fb7185'},
                      {label:t.interesAce,value:`$${debtResult.interesesAcelerado.toLocaleString('en-US',{maximumFractionDigits:0})}`,color:'#818cf8'},
                    ].map(({label,value,color},i,arr)=>(
                      <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'0.625rem 0',borderBottom:i<arr.length-1?'1px solid #1e293b':'none',fontSize:'0.75rem'}}>
                        <span style={{color:'#94a3b8'}}>{label}</span>
                        <span style={{color,fontWeight:700}}>{value}</span>
                      </div>
                    ))}
                  </div>
                  <div style={S.card}>
                    <p style={{margin:0,fontSize:'0.625rem',color:'#64748b',textTransform:'uppercase',fontWeight:700,marginBottom:'0.5rem'}}>{lang==='es'?'Reducción de Tiempo':'Time Reduction'}</p>
                    <div style={S.progressTrack}>
                      <div className="prog" style={{height:'0.75rem',background:'linear-gradient(90deg,#6366f1,#10b981)',borderRadius:'9999px',width:`${Math.min(100,(debtResult.mesesAhorrados/Math.max(1,debtResult.mesesRegular))*100)}%`}}/>
                    </div>
                    <p style={{margin:0,textAlign:'right',fontSize:'0.6875rem',fontWeight:700,color:'#34d399',marginTop:'0.25rem'}}>
                      {Math.round((debtResult.mesesAhorrados/Math.max(1,debtResult.mesesRegular))*100)}% {lang==='es'?'más rápido':'faster'}
                    </p>
                  </div>
                </div>
              ) : (
                <div style={{...S.card,border:'1px dashed #1e293b',minHeight:'22rem',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
                  <div style={{background:'rgba(30,41,59,0.5)',padding:'1rem',borderRadius:'1rem',marginBottom:'1rem'}}><DollarSign style={{width:'2.5rem',height:'2.5rem',color:'#334155'}}/></div>
                  <h4 style={{margin:0,fontSize:'0.875rem',fontWeight:700,color:'#475569'}}>{lang==='es'?'Proyección Inactiva':'Projection Inactive'}</h4>
                  <p style={{margin:0,fontSize:'0.75rem',color:'#334155',marginTop:'0.5rem'}}>{lang==='es'?'Ingresa tus deudas y calcula la estrategia óptima.':'Enter your debts and calculate the optimal strategy.'}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* AFFILIATE SECTION */}
        <AffiliateSection lang={lang}/>
      </main>

      {/* FOOTER */}
      <footer style={S.footer}>
        <p style={{margin:0,fontSize:'0.625rem',color:'#334155'}}>{t.footerText}</p>
        <div style={{display:'inline-flex',alignItems:'center',gap:'0.375rem',background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.2)',padding:'0.375rem 0.75rem',borderRadius:'9999px',marginTop:'0.5rem'}}>
          <Info style={{width:'0.75rem',height:'0.75rem',color:'rgba(245,158,11,0.7)'}}/>
          <p style={{margin:0,fontSize:'0.625rem',color:'rgba(245,158,11,0.7)',fontWeight:500}}>{t.footerDisclaimer}</p>
        </div>
      </footer>
    </div>
  );
}
