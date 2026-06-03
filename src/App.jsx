import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  TrendingDown, 
  DollarSign, 
  Plus, 
  Trash2, 
  FileText,
  BarChart3,
  Zap,
  Lightbulb,
  Target,
  Globe,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

// ==========================================
// DICCIONARIOS DE TRADUCCIÓN (ES / EN)
// ==========================================
const translations = {
  es: {
    title: "FinanSmart",
    version: "V4.4 Hybrid Pro",
    tabFico: "Analizador FICO Dual",
    tabDeudas: "Acelerador de Deudas",
    configTitle: "Configuración de Perfil Crediticio",
    configSub: "Los cambios en tus deudas afectan la utilización automáticamente.",
    lblHistorial: "1. Historial de Pagos (Payment History)",
    lblUtilizacion: "2. Utilización de Crédito (Amounts Owed)",
    lblAntiguedad: "3. Antigüedad en el Buró (Length of Credit History)",
    lblMix: "4. Diversificación de Líneas (Credit Mix)",
    lblInquiries: "5. Consultas Recientes (New Credit / Inquiries)",
    selDefault: "Selecciona una opción...",
    calcScore: "Calcular Ambos Modelos",
    waitingData: "Esperando datos de entrada",
    waitingSub: "Completa el formulario para generar la auditoría de crédito simultánea.",
    reportTitle: "Auditoría Dual de Puntuación FICO",
    sideBySide: "Comparación Lado a Lado",
    traditionalModel: "FICO Tradicional (8/9)",
    trendedModel: "FICO 10 T (Tendencial)",
    dictamenTitle: "Naturaleza del Dictamen Bancario",
    impactTitle: "Impacto Métrico en Situación Actual",
    strategyTitle: "Estrategia de Optimización Recomendada",
    maxWeight: "Peso Máx.",
    tuEstado: "Tu Estado",
    carteraTitle: "Cartera de Pasivos (Tus Deudas)",
    btnAñadir: "Añadir Deuda",
    lblMonto: "Monto ($)",
    lblInteres: "Interés (% APR)",
    lblPagoMin: "Pago Mínimo ($)",
    lblInyeccionMensual: "Inyección de Pago Extra Mensual",
    lblInyeccionUnica: "Inyección de Pago Único (Sola vez)",
    btnCalcularDeudas: "Calcular Estrategia de Amortización",
    ahorroInteres: "Ahorro en Intereses",
    tiempoSalvado: "Tiempo Salvado",
    resumenProyeccion: "Resumen de Proyección Consolidada",
    tiempoReg: "Tiempo de Liquidación Regular:",
    tiempoAce: "Tiempo con Estrategia Acelerada:",
    interesReg: "Interés Total (Plan Mínimo):",
    interesAce: "Interés Total (Plan Acelerado):",
    alertaAmortizacion: "¡Peligro de Amortización Negativa!",
    alertaAmortizacionDesc: "El pago mínimo ingresado es demasiado bajo en alguna de tus cuentas. El balance crecerá en lugar de disminuir debido a los intereses acumulados.",
    footerText: "© 2026 FinanSmart Professional SPA • Analizador Financiero de Datos Tendenciales",
    meses: "meses",
    // Rangos Nominales FICO
    r_exceptional: "Excepcional",
    r_verygood: "Muy Bueno",
    r_good: "Bueno",
    r_fair: "Regular",
    r_poor: "Pobre",
    // Opciones Dropdowns
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
  },
  en: {
    title: "FinanSmart",
    version: "V4.4 Hybrid Pro",
    tabFico: "Dual FICO Analyzer",
    tabDeudas: "Debt Accelerator",
    configTitle: "Credit Profile Configuration",
    configSub: "Changes in your debts will automatically affect credit utilization.",
    lblHistorial: "1. Payment History",
    lblUtilizacion: "2. Credit Utilization (Amounts Owed)",
    lblAntiguedad: "3. Length of Credit History",
    lblMix: "4. Credit Mix",
    lblInquiries: "5. New Credit (Recent Hard Inquiries)",
    selDefault: "Select an option...",
    calcScore: "Calculate Both Models",
    waitingData: "Waiting for Input Data",
    waitingSub: "Complete the form to generate the simultaneous credit audit.",
    reportTitle: "Dual FICO Score Audit Report",
    sideBySide: "Side-by-Side Comparison",
    traditionalModel: "Traditional FICO (8/9)",
    trendedModel: "FICO 10 T (Trended Data)",
    dictamenTitle: "Underwriting & Banking Analysis",
    impactTitle: "Metric Impact on Current Situation",
    strategyTitle: "Recommended Optimization Strategy",
    maxWeight: "Max Weight",
    tuEstado: "Your Status",
    carteraTitle: "Liability Portfolio (Your Debts)",
    btnAñadir: "Add Debt",
    lblMonto: "Amount ($)",
    lblInteres: "Interest (% APR)",
    lblPagoMin: "Min Payment ($)",
    lblInyeccionMensual: "Monthly Extra Payment Injection",
    lblInyeccionUnica: "Lump-Sum Single Injection",
    btnCalcularDeudas: "Calculate Amortization Strategy",
    ahorroInteres: "Interest Savings",
    tiempoSalvado: "Time Saved",
    resumenProyeccion: "Consolidated Projection Summary",
    tiempoReg: "Regular Payoff Time:",
    tiempoAce: "Accelerated Strategy Time:",
    interesReg: "Total Interest (Minimum Plan):",
    interesAce: "Total Interest (Accelerated Plan):",
    alertaAmortizacion: "Negative Amortization Hazard!",
    alertaAmortizacionDesc: "The minimum payment entered is too low on one or more accounts. The balance will grow instead of decreasing due to accumulated interest.",
    footerText: "© 2026 FinanSmart Professional SPA • Trended Data Financial Systems",
    meses: "months",
    // FICO Nominal Ranges
    r_exceptional: "Exceptional",
    r_verygood: "Very Good",
    r_good: "Good",
    r_fair: "Fair",
    r_poor: "Poor",
    // Dropdown Options
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
  }
};

export default function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState('score');
  
  // --- ESTADOS: SIMULADOR Y REPORTE ---
  const [scoreAnswers, setScoreAnswers] = useState({
    historial: '',
    utilizacion: 'auto', 
    antiguedad: '',
    tipos: '',
    consultas: ''
  });
  const [reporteScore, setReporteScore] = useState(null);

  // --- INICIALIZAR ESTADO USANDO LOCALSTORAGE ---
  const [debts, setDebts] = useState(() => {
    const savedDebts = localStorage.getItem('finansmart_debts');
    if (savedDebts) {
      try {
        return JSON.parse(savedDebts);
      } catch (e) {
        console.error("Error cargando deudas de localStorage", e);
      }
    }
    return [
      { id: 1, nombre: 'Credit Card A', balance: '5000', interesAnual: '24', pagoMensual: '200' },
      { id: 2, font: 'Business Line', balance: '12000', interesAnual: '14', pagoMensual: '350' }
    ];
  });

  const [globalPagoExtra, setGlobalPagoExtra] = useState(() => {
    return localStorage.getItem('finansmart_pago_extra') || '200';
  });
  
  const [pagoUnicoSolaVez, setPagoUnicoSolaVez] = useState(() => {
    return localStorage.getItem('finansmart_pago_unico') || '1500';
  });

  const [debtResult, setDebtResult] = useState(null);
  const [hayAmortizacionNegativa, setHayAmortizacionNegativa] = useState(false);

  // --- EFECTO A: GUARDAR AUTOMÁTICAMENTE LAS DEUDAS CUANDO CAMBIEN ---
  useEffect(() => {
    localStorage.setItem('finansmart_debts', JSON.stringify(debts));
    
    let peligro = false;
    debts.forEach(d => {
      const bal = parseFloat(d.balance) || 0;
      const rate = ((parseFloat(d.interesAnual) || 0) / 100) / 12;
      const pmt = parseFloat(d.pagoMensual) || 0;
      if (bal > 0 && pmt <= bal * rate) {
        peligro = true;
      }
    });
    setHayAmortizacionNegativa(peligro);
  }, [debts]);

  // --- EFECTO B: GUARDAR PARÁMETROS GLOBALES DE PAGO ---
  useEffect(() => {
    localStorage.setItem('finansmart_pago_extra', globalPagoExtra);
  }, [globalPagoExtra]);

  useEffect(() => {
    localStorage.setItem('finansmart_pago_unico', pagoUnicoSolaVez);
  }, [pagoUnicoSolaVez]);

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const handleScoreChange = (e) => {
    setScoreAnswers({ ...scoreAnswers, [e.target.name]: e.target.value });
  };

  const handleDebtInputChange = (id, field, value) => {
    const cleanValue = value.replace(/[^0-9.]/g, '');
    setDebts(debts.map(d => d.id === id ? { ...d, [field]: cleanValue } : d));
  };

  const agregarDeuda = () => {
    const nuevoId = debts.length > 0 ? Math.max(...debts.map(d => d.id)) + 1 : 1;
    setDebts([...debts, { id: nuevoId, nombre: `Deuda / Debt ${nuevoId}`, balance: '3000', interesAnual: '18', pagoMensual: '100' }]);
  };

  const eliminarDeuda = (id) => setDebts(debts.filter(d => d.id !== id));

  const obtenerUtilizacionAutomatica = () => {
    const deudaTotal = debts.reduce((sum, d) => sum + (parseFloat(d.balance) || 0), 0);
    const ratio = (deudaTotal / 40000) * 100; 
    if (ratio < 30) return 'bajo';
    if (ratio < 50) return 'moderado';
    if (ratio < 85) return 'alto';
    return 'critico';
  };

  const obtenerRangoNominal = (score) => {
    if (score >= 800) return { texto: t.r_exceptional, color: 'text-emerald-400' };
    if (score >= 740) return { texto: t.r_verygood, color: 'text-teal-400' };
    if (score >= 670) return { texto: t.r_good, color: 'text-amber-400' };
    if (score >= 580) return { texto: t.r_fair, color: 'text-orange-400' };
    return { texto: t.r_poor, color: 'text-rose-500' };
  };

  const calcularCreditScore = (e) => {
    e.preventDefault();
    const { historial, utilizacion, antiguedad, tipos, consultas } = scoreAnswers;

    if (!historial || !utilizacion || !antiguedad || !tipos || !consultas) {
      alert(lang === 'es' ? "Por favor, responde todas las preguntas." : "Please answer all questions.");
      return;
    }

    const utilizacionReal = utilizacion === 'auto' ? obtenerUtilizacionAutomatica() : utilizacion;
    const maxPuntos = { historial: 192.5, utilizacion: 165, antiguedad: 82.5, tipos: 55, consultas: 55 };
    
    const puntosTradicional = {
      historial: { excelente: 192.5, bueno: 154, regular: 96.25, malo: 38.5 }[historial],
      utilizacion: { bajo: 165, moderado: 132, alto: 66, critico: 16.5 }[utilizacionReal],
      antiguedad: { larga: 82.5, media: 57.75, corta: 24.75 }[antiguedad],
      tipos: { multiples: 55, soloUno: 27.5 }[tipos],
      consultas: { ningun: 55, pocas: 38.5, muchas: 11 }[consultas]
    };
    const scoreTradicional = Math.round(300 + puntosTradicional.historial + puntosTradicional.utilizacion + puntosTradicional.antiguedad + puntosTradicional.tipos + puntosTradicional.consultas);

    const puntos10T = {
      historial: { excelente: 192.5, bueno: 145, regular: 85, malo: 25 }[historial],
      utilizacion: { bajo: 165, moderado: 140, alto: 80, critico: 15 }[utilizacionReal],
      antiguedad: { larga: 82.5, media: 60, corta: 20 }[antiguedad],
      tipos: { multiples: 55, soloUno: 30 }[tipos],
      consultas: { ningun: 55, pocas: 40, muchas: 10 }[consultas]
    };
    const score10T = Math.round(300 + puntos10T.historial + puntos10T.utilizacion + puntos10T.antiguedad + puntos10T.tipos + puntos10T.consultas);

    const dictamenTradicional = lang === 'es' 
      ? "Mide la solvencia estática ('foto fija'). Ideal para solicitudes tradicionales de tarjetas y préstamos de auto."
      : "Measures static creditworthiness ('snapshot'). Standard for credit cards and auto loan applications.";

    const dictamen10T = lang === 'es'
      ? "Analiza la película de los últimos 24 meses. Castiga severamente si arrastras balances de manera crónica sin amortizar."
      : "Analyzes the last 24 months of historical balances. Heavily penalizes carrying chronic revolving debt.";

    let consejosGenerados = [];
    if (historial === 'regular' || historial === 'malo') {
      consejosGenerados.push({
        titulo: lang === 'es' ? "Configurar Autopay Inmediato" : "Set Up Instant Autopay",
        detalle: lang === 'es' ? "Los retrasos destruyen el modelo Tradicional al instante." : "Late payments destroy the Traditional model instantly."
      });
    }
    if (utilizacionReal === 'alto' || utilizacionReal === 'critico') {
      consejosGenerados.push({
        titulo: lang === 'es' ? "Reducción de balances mediante el acelerador" : "Reduce balances via Debt Accelerator",
        detalle: lang === 'es' ? "Tu nivel de deuda actual está asfixiando tu puntaje. Liquidar balances liberará hasta 150 puntos." : "Your current debt level is suffocating your score. Paying down balances will release up to 150 points."
      });
    }

    setReporteScore({
      scoreTradicional,
      score10T,
      dictamenTradicional,
      dictamen10T,
      consejos: consejosGenerados.length > 0 ? consejosGenerados : [
        { titulo: lang === 'es' ? "Optimización Avanzada" : "Advanced Optimization", detalle: lang === 'es' ? "Mantén tu utilización general por debajo del 10% para estabilidad bilateral." : "Keep overall utilization below 10% for bilateral stability." }
      ],
      desglose: [
        { nombre: 'Payment History', trad: puntosTradicional.historial, tend: puntos10T.historial, max: maxPuntos.historial },
        { nombre: 'Amounts Owed (Utilization)', trad: puntosTradicional.utilizacion, tend: puntos10T.utilizacion, max: maxPuntos.utilizacion },
        { nombre: 'Length of Credit History', trad: puntosTradicional.antiguedad, tend: puntos10T.antiguedad, max: maxPuntos.antiguedad },
        { font: 'Credit Mix', trad: puntosTradicional.tipos, tend: puntos10T.tipos, max: maxPuntos.tipos },
        { nombre: 'New Credit (Inquiries)', trad: puntosTradicional.consultas, tend: puntos10T.consultas, max: maxPuntos.consultas },
      ]
    });
  };

  const calcularEstrategiaGlobal = (e) => {
    e.preventDefault();
    if (hayAmortizacionNegativa) {
      alert(lang === 'es' ? "Corrige los pagos mínimos que no cubren los intereses antes de proceder." : "Fix minimum payments that don't cover interest before proceeding.");
      return;
    }

    let activeReg = debts.map(d => ({
      balance: parseFloat(d.balance) || 0,
      r: ((parseFloat(d.interesAnual) || 0) / 100) / 12,
      pmt: parseFloat(d.pagoMensual) || 0
    })).filter(d => d.balance > 0);

    let mesesRegular = 0;
    let totalInteresesRegular = 0;

    while (activeReg.length > 0 && mesesRegular < 360) {
      mesesRegular++;
      activeReg = activeReg.filter(d => {
        const interesMes = d.balance * d.r;
        totalInteresesRegular += interesMes;
        const pagoEfectivo = Math.min(d.pmt, d.balance + interesMes);
        d.balance = (d.balance + interesMes) - pagoEfectivo;
        return d.balance > 0.01;
      });
    }

    let activeAce = debts.map(d => ({
      balance: parseFloat(d.balance) || 0,
      r: ((parseFloat(d.interesAnual) || 0) / 100) / 12,
      pmt: parseFloat(d.pagoMensual) || 0
    })).filter(d => d.balance > 0)
       .sort((a, b) => b.r - a.r);

    let mesesAcelerado = 0;
    let totalInteresesAcelerado = 0;
    const inyeccionMensualFija = parseFloat(globalPagoExtra) || 0;
    let pagoUnicoDisponible = parseFloat(pagoUnicoSolaVez) || 0;

    while (activeAce.length > 0 && mesesAcelerado < 360) {
      mesesAcelerado++;
      let bolsaPagoExtraMes = inyeccionMensualFija;

      if (mesesAcelerado === 1 && pagoUnicoDisponible > 0) {
        bolsaPagoExtraMes += pagoUnicoDisponible;
      }

      activeAce.forEach(d => {
        const interesMes = d.balance * d.r;
        totalInteresesAcelerado += interesMes;
        d.balance += interesMes;
      });

      activeAce.forEach(d => {
        const pagoMinimoEfectivo = Math.min(d.pmt, d.balance);
        d.balance -= pagoMinimoEfectivo;
      });

      for (let d of activeAce) {
        if (d.balance > 0 && bolsaPagoExtraMes > 0) {
          const pagoExtraEfectivo = Math.min(bolsaPagoExtraMes, d.balance);
          d.balance -= pagoExtraEfectivo;
          bolsaPagoExtraMes -= pagoExtraEfectivo;
        }
      }

      activeAce = activeAce.filter(d => d.balance > 0.01);
    }

    setDebtResult({
      mesesRegular: mesesRegular,
      interesesRegular: Math.max(0, totalInteresesRegular),
      mesesAcelerado: mesesAcelerado,
      interesesAcelerado: Math.max(0, totalInteresesAcelerado),
      mesesAhorrados: Math.max(0, mesesRegular - mesesAcelerado),
      dineroAhorrado: Math.max(0, totalInteresesRegular - totalInteresesAcelerado)
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      
      {/* GLOBAL HEADER */}
      <header className="border-b border-slate-800 bg-slate-900/90 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-indigo-500 to-indigo-600 p-2 rounded-xl">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">
              {t.title} <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full ml-1">{t.version}</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="flex gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button onClick={() => setActiveTab('score')} className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === 'score' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}>
                <CreditCard className="h-3.5 w-3.5" /> {t.tabFico}
              </button>
              <button onClick={() => setActiveTab('deuda')} className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeTab === 'deuda' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}>
                <TrendingDown className="h-3.5 w-3.5" /> {t.tabDeudas}
              </button>
            </nav>

            <button onClick={toggleLanguage} className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs px-3 py-1.5 rounded-xl transition font-bold text-slate-300">
              <Globe className="h-3.5 w-3.5 text-indigo-400" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </header>

      {/* CONTENEDOR CENTRAL */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* PESTAÑA ANALIZADOR SCORE */}
        {activeTab === 'score' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-slate-800/40 border border-slate-800 p-6 rounded-2xl h-fit">
              <h2 className="text-sm font-bold flex items-center gap-2 mb-1 text-white"><Target className="text-indigo-400 h-4 w-4" /> {t.configTitle}</h2>
              <p className="text-[11px] text-slate-400 mb-5">{t.configSub}</p>

              <form onSubmit={calcularCreditScore} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.lblHistorial}</label>
                  <select name="historial" value={scoreAnswers.historial} onChange={handleScoreChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none">
                    <option value="">{t.selDefault}</option>
                    <option value="excelente">{t.h_excelente}</option>
                    <option value="bueno">{t.h_bueno}</option>
                    <option value="regular">{t.h_regular}</option>
                    <option value="malo">{t.h_malo}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.lblUtilizacion}</label>
                  <select name="utilizacion" value={scoreAnswers.utilizacion} onChange={handleScoreChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-indigo-400 font-medium focus:outline-none">
                    <option value="auto">🔄 {t.u_auto}</option>
                    <option value="bajo">{t.u_bajo}</option>
                    <option value="moderado">{t.u_mod}</option>
                    <option value="alto">{t.u_alto}</option>
                    <option value="critico">{t.u_critico}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.lblAntiguedad}</label>
                  <select name="antiguedad" value={scoreAnswers.antiguedad} onChange={handleScoreChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none">
                    <option value="">{t.selDefault}</option>
                    <option value="larga">{t.a_larga}</option>
                    <option value="media">{t.a_media}</option>
                    <option value="corta">{t.a_corta}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.lblMix}</label>
                  <select name="tipos" value={scoreAnswers.tipos} onChange={handleScoreChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none">
                    <option value="">{t.selDefault}</option>
                    <option value="multiples">{t.m_optimo}</option>
                    <option value="soloUno">{t.m_soloUno}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.lblInquiries}</label>
                  <select name="consultas" value={scoreAnswers.consultas} onChange={handleScoreChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none">
                    <option value="">{t.selDefault}</option>
                    <option value="ningun">{t.i_0}</option>
                    <option value="pocas">{t.i_pocas}</option>
                    <option value="muchas">{t.i_muchas}</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-lg flex items-center justify-center gap-2 mt-4">
                  {t.calcScore} <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

            {/* SECCIÓN ANALÍTICA DUAL */}
            <div className="lg:col-span-7 space-y-6">
              {reporteScore ? (
                <div className="space-y-6">
                  <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6">
                    <h3 className="text-xs font-bold tracking-wider uppercase flex items-center gap-2 text-indigo-400 mb-4 border-b border-slate-800 pb-3">
                      <FileText className="h-4 w-4" /> {t.reportTitle}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl text-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.traditionalModel}</span>
                        <h4 className="text-4xl font-black text-indigo-400 mt-2">{reporteScore.scoreTradicional}</h4>
                        
                        <div className={`text-xs font-bold mt-1 uppercase tracking-wide ${obtenerRangoNominal(reporteScore.scoreTradicional).color}`}>
                          [{obtenerRangoNominal(reporteScore.scoreTradicional).texto}]
                        </div>
                        
                        <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">{reporteScore.dictamenTradicional}</p>
                      </div>

                      <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl text-center">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{t.trendedModel}</span>
                        <h4 className="text-4xl font-black text-emerald-400 mt-2">{reporteScore.score10T}</h4>
                        
                        <div className={`text-xs font-bold mt-1 uppercase tracking-wide ${obtenerRangoNominal(reporteScore.score10T).color}`}>
                          [{obtenerRangoNominal(reporteScore.score10T).texto}]
                        </div>
                        
                        <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">{reporteScore.dictamen10T}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-300 tracking-wide uppercase border-b border-slate-800/50 pb-2">{t.impactTitle}</h4>
                      {reporteScore.desglose.map((item, idx) => {
                        const pctTrad = (item.trad / item.max) * 100;
                        const pctTend = (item.tend / item.max) * 100;
                        return (
                          <div key={idx} className="space-y-1 bg-slate-950/30 p-3 rounded-xl border border-slate-800/50">
                            <div className="flex justify-between text-xs font-semibold">
                              <span className="text-slate-300 text-[11px]">{item.nombre || item.font}</span>
                              <span className="text-slate-400 text-[10px]">{t.maxWeight}: {item.max}</span>
                            </div>
                            
                            <div className="space-y-1 mt-1.5">
                              <div className="flex justify-between text-[10px] text-slate-500">
                                <span>{t.traditionalModel}</span>
                                <span className="font-bold text-indigo-400">{Math.round(item.trad)} pts</span>
                              </div>
                              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${pctTrad}%` }}></div>
                              </div>
                            </div>

                            <div className="space-y-1 mt-1">
                              <div className="flex justify-between text-[10px] text-slate-500">
                                <span>{t.trendedModel}</span>
                                <span className="font-bold text-emerald-400">{Math.round(item.tend)} pts</span>
                              </div>
                              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${pctTend}%` }}></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6">
                    <h4 className="text-xs font-bold text-indigo-400 mb-4 tracking-wide uppercase flex items-center gap-2"><Lightbulb className="h-4 w-4 text-amber-400" />{t.strategyTitle}</h4>
                    <div className="space-y-3">
                      {reporteScore.consejos.map((c, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800 flex gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-xs font-bold text-indigo-400 border border-indigo-500/20">{i + 1}</span>
                          <div>
                            <h5 className="text-xs font-bold text-slate-200 mb-0.5">{c.titulo}</h5>
                            <p className="text-[11px] text-slate-400 leading-relaxed">{c.detalle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-800/10 border border-slate-800 border-dashed rounded-2xl h-full min-h-[350px] flex flex-col items-center justify-center p-6 text-center">
                  <FileText className="h-9 w-9 text-slate-700 mb-2" />
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.waitingData}</h4>
                  <p className="text-xs text-slate-500 max-w-xs mt-1">{t.waitingSub}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PESTAÑA ACELERADOR DE DEUDA */}
        {activeTab === 'deuda' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between bg-slate-800/20 p-4 rounded-xl border border-slate-800">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.carteraTitle}</h3>
                <button onClick={agregarDeuda} className="flex items-center gap-1 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 border border-indigo-500/30 px-3 py-1 rounded-xl text-xs font-bold transition">
                  <Plus className="h-3.5 w-3.5" /> {t.btnAñadir}
                </button>
              </div>

              {hayAmortizacionNegativa && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex gap-3 items-start animate-pulse">
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold">{t.alertaAmortizacion}</h5>
                    <p className="text-[11px] text-rose-300/80 mt-0.5 leading-relaxed">{t.alertaAmortizacionDesc}</p>
                  </div>
                </div>
              )}

              <form onSubmit={calcularEstrategiaGlobal} className="space-y-3">
                {debts.map((debt) => (
                  <div key={debt.id} className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl space-y-3">
                    <div className="flex justify-between items-center border-b border-slate-800/60 pb-2">
                      <input type="text" value={debt.nombre} onChange={(e) => setDebts(debts.map(d => d.id === debt.id ? { ...d, nombre: e.target.value } : d))} className="bg-transparent border-none font-bold text-xs text-indigo-400 focus:outline-none w-2/3" />
                      {debts.length > 1 && (<button type="button" onClick={() => eliminarDeuda(debt.id)} className="text-slate-500 hover:text-rose-400 transition"><Trash2 className="h-3.5 w-3.5" /></button>)}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] text-slate-400 font-bold mb-1">{t.lblMonto}</label>
                        <input type="text" value={debt.balance} onChange={(e) => handleDebtInputChange(debt.id, 'balance', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-indigo-500 focus:outline-none font-semibold" required />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 font-bold mb-1">{t.lblInteres}</label>
                        <input type="text" value={debt.interesAnual} onChange={(e) => handleDebtInputChange(debt.id, 'interesAnual', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-indigo-500 focus:outline-none font-semibold" required />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 font-bold mb-1">{t.lblPagoMin}</label>
                        <input type="text" value={debt.pagoMensual} onChange={(e) => handleDebtInputChange(debt.id, 'pagoMensual', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-indigo-500 focus:outline-none font-semibold" required />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-indigo-500/5 border border-indigo-500/20 p-4 rounded-xl mt-4 space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-indigo-300 mb-1">{t.lblInyeccionMensual}</label>
                    <input type="text" value={globalPagoExtra} onChange={(e) => setGlobalPagoExtra(e.target.value.replace(/[^0-9.]/g, ''))} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold text-indigo-400 focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1"><Zap className="h-3.5 w-3.5" />{t.lblInyeccionUnica}</label>
                    <input type="text" value={pagoUnicoSolaVez} onChange={(e) => setPagoUnicoSolaVez(e.target.value.replace(/[^0-9.]/g, ''))} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold text-emerald-400 focus:outline-none focus:border-emerald-500" />
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-lg">
                  {t.btnCalcularDeudas}
                </button>
              </form>
            </div>

            {/* PANEL LATERAL DE RESULTADOS */}
            <div className="lg:col-span-6 space-y-4">
              {debtResult ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl">
                      <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">{t.ahorroInteres}</span>
                      <h4 className="text-2xl font-black mt-1 text-emerald-400">${debtResult.dineroAhorrado.toLocaleString('en-US', { maximumFractionDigits: 2 })}</h4>
                    </div>
                    <div className="bg-indigo-950/20 border border-indigo-500/20 p-4 rounded-xl">
                      <span className="text-[10px] text-indigo-400 uppercase font-bold tracking-wider">{t.tiempoSalvado}</span>
                      <h4 className="text-2xl font-black mt-1 text-indigo-400">{debtResult.mesesAhorrados} {t.meses}</h4>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/40 border border-slate-800 p-5 rounded-2xl">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-3">{t.resumenProyeccion}</h4>
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between py-2 border-b border-slate-800"><span className="text-slate-400">{t.tiempoReg}</span><span className="font-semibold text-slate-200">{debtResult.mesesRegular} {t.meses}</span></div>
                      <div className="flex justify-between py-2 border-b border-slate-800"><span className="text-indigo-400 font-semibold">{t.tiempoAce}</span><span className="font-bold text-indigo-400">{debtResult.mesesAcelerado} {t.meses}</span></div>
                      <div className="flex justify-between py-2 border-b border-slate-800"><span className="text-slate-400">{t.interesReg}</span><span className="font-semibold text-rose-400">${debtResult.interesesRegular.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
                      <div className="flex justify-between py-2"><span className="text-indigo-400 font-semibold">{t.interesAce}</span><span className="font-bold text-indigo-400">${debtResult.interesesAcelerado.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span></div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-slate-800/10 border border-slate-800 border-dashed rounded-2xl h-full min-h-[300px] flex flex-col items-center justify-center p-6 text-center">
                  <DollarSign className="h-9 w-9 text-slate-700 mb-2" />
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{lang === 'es' ? 'Proyección Inactiva' : 'Projection Inactive'}</h4>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 text-center py-6 text-[10px] text-slate-600">
        <p>{t.footerText}</p>
      </footer>
    </div>
  );
}