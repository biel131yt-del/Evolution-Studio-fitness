"use client";

import { useEffect, useState } from "react";

const WHATSAPP = "555198125760";
const waLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const MSG_GERAL = "Olá! Vi o site da Evolution Studio Fitness e quero agendar minha aula experimental! 💚";
const MSG_AULA = (aula: string) =>
  `Olá! Quero agendar uma aula experimental de ${aula} na Evolution Studio Fitness! 💚`;

const AULAS = [
  {
    nome: "Jump",
    emoji: "🤸‍♀️",
    tag: "Mais procurada",
    desc: "Mini-trampolim, música alta e queima absurda. Amiga do joelho e inimiga do estresse.",
    beneficios: ["Queima até 600 kcal/aula", "Glúteos e pernas durinhas", "Zero tédio"],
    intensidade: "Alta",
  },
  {
    nome: "Step",
    emoji: "⬆️",
    tag: "Coordenação + pernas",
    desc: "Subidas, coreografias e condicionamento. Perfeito para quem quer perna torneada e mente ligada.",
    beneficios: ["Define pernas e glúteos", "Melhora coordenação", "Condicionamento rápido"],
    intensidade: "Média-Alta",
  },
  {
    nome: "Funcional",
    emoji: "💪",
    tag: "Força real",
    desc: "Treino com peso do corpo, elásticos e acessórios. Força para carregar compra, filho, rotina – vida real.",
    beneficios: ["Corpo firme e forte", "Previne lesões", "Emagrece de verdade"],
    intensidade: "Adaptável",
  },
  {
    nome: "Localizados",
    emoji: "🔥",
    tag: "Foco total",
    desc: "Abdômen, pernas e glúteos no detalhe. Aquele treino que pega e dá resultado no espelho.",
    beneficios: ["Barriga mais seca", "Bumbum na nuca", "Postura melhor"],
    intensidade: "Média",
  },
  {
    nome: "HIIT Dance",
    emoji: "💃",
    tag: "Diversão que seca",
    desc: "Dança + intervalos de alta intensidade. Você sua sorrindo e nem vê a hora passar.",
    beneficios: ["Emagrece dançando", "Autoestima lá em cima", "Não precisa saber dançar"],
    intensidade: "Alta e divertida",
  },
  {
    nome: "Mobilidade",
    emoji: "🧘‍♀️",
    tag: "Dor zero",
    desc: "Alongamento ativo, articulações livres e postura alinhada. Essencial para quem trabalha sentada ou sente dores.",
    beneficios: ["Alivia dores", "Melhora postura", "Longevidade ativa"],
    intensidade: "Leve",
  },
];

const DEPOIMENTOS = [
  {
    nome: "Lidiane Barretto",
    user: "@lidiane.barretto",
    texto: "Maravilhosa, parabéns Daí, desejo mais sucesso. Fazer parte dessa história e conhecer a tua essência e entrega no que faz é grandioso. Uma das escolhas que meu 💖 ama!",
  },
  {
    nome: "Naiara Rubim",
    user: "@profinha_naiararubim",
    texto: "Gratidão por tudo! Amando o novo espaço. Deus é maravilhoso, parabéns por toda dedicação de sempre 😍💚",
  },
  {
    nome: "Juliana Mello",
    user: "@mellojuliana_",
    texto: "Amo fazer parte disso! Sucesso ❤️❤️❤️",
  },
];

const FAQS = [
  {
    q: "Nunca treinei. Posso fazer aula coletiva?",
    a: "Sim! 90% das alunas começaram do zero. As aulas têm adaptação para iniciantes e a professora Daiane acompanha de perto. Você vai no seu ritmo e evolui rápido com o grupo te puxando.",
  },
  {
    q: "Como funciona a aula experimental?",
    a: "Você chama no WhatsApp, escolhe a modalidade (Jump, Step, Funcional, Localizados, HIIT Dance ou Mobilidade), agenda o dia e vem treinar. Traga roupa confortável, garrafinha e muita energia. Chegue 15 min antes.",
  },
  {
    q: "Quais os horários?",
    a: "Segunda a sexta, das 08:00 às 22:00. Sábado e domingo fechado. Em feriados os horários podem mudar – sempre confirmamos no WhatsApp e Instagram.",
  },
  {
    q: "Onde fica o Studio?",
    a: "Av. Perimetral Sul, 20 – Piratini, Charqueadas-RS (Aços Finos), CEP 96745-000. Fácil acesso, ambiente novo inaugurado em 24/05/2025.",
  },
  {
    q: "Preciso levar algum material?",
    a: "Não. O Studio tem todos os equipamentos (mini-trampolins, steps, colchonetes, elásticos). Só venha de tênis e roupa de treino.",
  },
  {
    q: "Homens podem treinar?",
    a: "O foco hoje são turmas coletivas mistas com ambiente acolhedor para todos. Chame no WhatsApp e pergunte pela turma ideal para seu objetivo.",
  },
];

const HORARIOS = [
  { dia: "Segunda-feira", hora: "08:00 – 22:00", abre: true },
  { dia: "Terça-feira", hora: "08:00 – 22:00", abre: true },
  { dia: "Quarta-feira", hora: "08:00 – 22:00", abre: true },
  { dia: "Quinta-feira", hora: "08:00 – 22:00", abre: true },
  { dia: "Sexta-feira", hora: "08:00 – 22:00", abre: true },
  { dia: "Sábado", hora: "Fechado", abre: false },
  { dia: "Domingo", hora: "Fechado", abre: false },
];

export default function Page() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [todayIdx, setTodayIdx] = useState<number | null>(null);
  const words = ["JUMP 🔥", "HIIT DANCE 💃", "FUNCIONAL 💪", "STEP ⬆️", "LOCALIZADOS 🍑", "MOBILIDADE 🧘‍♀️"];
  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const d = new Date().getDay();
    setTodayIdx(d === 0 ? 6 : d === 6 ? 5 : d - 1);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-[76px] md:pb-0">
      {/* TOP BAR */}
      <div className="bg-[#2bff00] px-2 py-2 text-center text-[12px] font-bold leading-tight text-black sm:text-[13px]">
        🔥 VAGAS LIMITADAS por turma — Agende sua AULA EXPERIMENTAL 👇
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3">
          <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
            <img src="/logo.jpg" alt="Evolution Studio Fitness - Daiane Goulart" className="h-10 w-10 shrink-0 rounded-xl object-cover ring-1 ring-[#2bff00]/60 sm:h-11 sm:w-11" />
            <div className="leading-tight">
              <p className="text-[14px] font-black tracking-tight sm:text-[15px]">EVOLUTION <span className="text-[#2bff00]">STUDIO</span></p>
              <p className="silver-text text-[10px] font-bold tracking-[0.2em] sm:text-[11px]">DAIANE GOULART</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-300 md:flex">
            <a href="#aulas" className="hover:text-[#2bff00]">Aulas</a>
            <a href="#diferenciais" className="hover:text-[#2bff00]">Por que nós</a>
            <a href="#horarios" className="hover:text-[#2bff00]">Horários</a>
            <a href="#depoimentos" className="hover:text-[#2bff00]">Alunas</a>
            <a href="#localizacao" className="hover:text-[#2bff00]">Onde fica</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href={waLink(MSG_GERAL)} target="_blank" className="rounded-full bg-[#2bff00] px-4 py-2.5 text-[13px] font-black text-black shadow-[0_0_25px_rgba(43,255,0,.5)] active:scale-95 sm:px-5 sm:text-sm">
              Agendar
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-lg md:hidden" aria-label="Menu">
              ☰
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-4 py-4 md:hidden">
            <div className="grid gap-3 text-sm font-semibold">
              {[
                ["#aulas", "Aulas coletivas"],
                ["#diferenciais", "Por que a Evolution"],
                ["#horarios", "Horários"],
                ["#depoimentos", "Depoimentos"],
                ["#localizacao", "Localização"],
                ["#faq", "Dúvidas"],
              ].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl bg-white/5 px-4 py-3">{label}</a>
              ))}
              <a href={waLink(MSG_GERAL)} target="_blank" className="rounded-xl bg-[#2bff00] px-4 py-3 text-center font-black text-black">💚 Agendar aula experimental</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO PAAAM */}
      <section
        id="inicio"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setMouse({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
        }}
        className="relative overflow-hidden"
      >
        {/* fundo */}
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="hero-grid absolute inset-0" />
        <div className="animate-orb-a absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-[#2bff00]/25 blur-[130px]" />
        <div className="animate-orb-b absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#2bff00]/15 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(600px 300px at ${50 + mouse.x * 30}% ${30 + mouse.y * 30}%, rgba(43,255,0,.18), transparent 70%)` }}
        />
        {/* texto gigante ao fundo */}
        <div className="pointer-events-none absolute top-16 left-0 w-max whitespace-nowrap font-black text-[18vw] leading-none text-white/[0.04] md:text-[11rem]">
          <div className="animate-marquee flex gap-10">
            {[0, 1].map((k) => (
              <span key={k}>EVOLUTION • EVOLUTION • EVOLUTION •&nbsp;</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-10 pt-8 sm:pt-10 md:grid-cols-[1.1fr_.9fr] md:pt-16 lg:pt-20">
          {/* ESQUERDA */}
          <div className="min-w-0">
            <div className="anim-fade-up d1 mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#2bff00]/50 bg-black/70 px-3 py-2 text-[11px] font-black text-white shadow-[0_0_30px_rgba(43,255,0,.3)] sm:px-4 sm:text-xs">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#2bff00]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2bff00]" />
              </span>
              <span className="truncate">🔥 SÓ 8 VAGAS POR TURMA ESSA SEMANA</span>
            </div>

            <p className="anim-fade-up d2 text-[11px] font-black tracking-[0.3em] text-[#b6ff5c] sm:text-sm sm:tracking-[0.35em]">
              EVOLUTION STUDIO • DAIANE GOULART
            </p>
            <h1 className="mt-2 font-black leading-[0.9] tracking-tighter">
              <span className="anim-fade-up d2 block text-[3.4rem] sm:text-7xl lg:text-8xl">TREINE.</span>
              <span className="anim-fade-up d3 evo-gradient-text evo-text-glow block text-[3.4rem] sm:text-7xl lg:text-8xl">DANCE.</span>
              <span className="anim-fade-up d4 text-stroke-green block text-[3.4rem] sm:text-7xl lg:text-8xl">EVOLUA.</span>
            </h1>

            <div className="anim-fade-up d5 mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur">
              <span className="text-2xl">⚡</span>
              <p className="text-base font-bold sm:text-lg">
                Hoje tem: <span className="text-[#2bff00]">{words[wordIdx]}</span>
                <span className="caret ml-1 inline-block h-5 w-[2px] translate-y-1 bg-[#2bff00]" />
              </p>
            </div>

            <p className="anim-fade-up d5 mt-4 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Aulas coletivas que <strong className="text-white">secam, definem e viciam</strong>. Jump, Step, Funcional, Localizados, HIIT Dance e Mobilidade — com música alta e professora junto. <strong className="text-white">Iniciante é bem-vinda.</strong>
            </p>

            <div className="anim-fade-up d6 mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink(MSG_GERAL)}
                target="_blank"
                className="btn-shine animate-pulse-ring rounded-2xl bg-[#2bff00] px-8 py-4 text-center text-[17px] font-black text-black shadow-[0_15px_60px_-10px_rgba(43,255,0,.8)] active:scale-[0.98] sm:py-5 sm:text-lg hover:sm:scale-[1.02] hover:bg-white"
              >
                💬 QUERO MINHA AULA GRÁTIS
              </a>
              <a href="#aulas" className="rounded-2xl border border-white/20 bg-black/60 px-8 py-4 text-center text-[15px] font-bold backdrop-blur active:scale-[0.98] sm:text-base hover:border-[#2bff00]">
                Ver aulas ↓
              </a>
            </div>
            <p className="anim-fade-up d6 mt-3 text-xs font-bold text-zinc-400">
              ✅ Resposta em ~5 min no WhatsApp • 📞 +55 51 9812-5760 • Sem cartão
            </p>

            <div className="anim-fade-up d6 mt-6 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {["L", "N", "J", "M"].map((l, i) => (
                  <div key={i} className="grid h-11 w-11 place-items-center rounded-full border-2 border-black bg-gradient-to-br from-zinc-700 to-zinc-900 font-black text-[#b6ff5c]">{l}</div>
                ))}
                <div className="grid h-11 w-11 place-items-center rounded-full border-2 border-black bg-[#2bff00] text-xs font-black text-black">100+</div>
              </div>
              <div className="text-sm">
                <p className="font-black text-white">★★★★★ 5.0 das alunas</p>
                <a href="https://www.instagram.com/evolutionstudiofitnes" target="_blank" className="font-bold text-[#b6ff5c] hover:underline">@evolutionstudiofitnes • ver provas →</a>
              </div>
            </div>
          </div>

          {/* DIREITA – palco 3D */}
          <div className="anim-fade-up d4 relative mx-auto w-full max-w-[420px] pb-6" style={{ perspective: 1000 }}>
            <div className="animate-spin-slow absolute -inset-4 rounded-[3rem] bg-[conic-gradient(from_0deg,transparent_0_70%,rgba(43,255,0,.4)_85%,transparent_100%)] blur-[1px] sm:-inset-6" />
            <div
              className="relative overflow-hidden rounded-[2rem] border-2 border-[#2bff00]/60 bg-black shadow-[0_0_100px_-20px_rgba(43,255,0,.7)] transition-transform duration-200"
              style={{ transform: `rotateY(${mouse.x * 12}deg) rotateX(${-mouse.y * 12}deg)` }}
            >
              <img src="/logo.jpg" alt="Evolution Studio Fitness – logo DG Daiane Goulart" className="aspect-square w-full object-cover" />
              {/* equalizador */}
              <div className="absolute left-0 right-0 top-0 flex items-start justify-between bg-gradient-to-b from-black/80 to-transparent p-4">
                <div className="flex h-8 items-end gap-1">
                  {[0.9, 0.5, 0.7, 1, 0.4, 0.8, 0.6].map((d, i) => (
                    <span key={i} className="eq-bar w-1.5 rounded-full bg-[#2bff00]" style={{ height: 28, animationDelay: `${i * 0.13}s`, animationDuration: `${d}s` }} />
                  ))}
                </div>
                <span className="rounded-full bg-[#2bff00] px-3 py-1 text-[11px] font-black text-black">🔴 AO VIVO NO STUDIO</span>
              </div>
              <div className="bg-gradient-to-t from-black via-black/85 to-transparent p-5 pt-10">
                <p className="text-sm font-black text-[#b6ff5c]">📍 NOSSO ESPAÇO NO PIRATINI</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-300">Studio novo em Charqueadas, com turmas pequenas, som alto e aquela energia que te faz querer voltar amanhã.</p>
                <div className="mt-3 flex gap-2">
                  <a href="https://www.instagram.com/reel/DKivBtgAHwK/" target="_blank" className="flex-1 rounded-xl bg-white px-4 py-2.5 text-center text-xs font-black text-black hover:bg-[#2bff00]">▶ VER REEL INAUGURAÇÃO</a>
                  <a href={waLink(MSG_GERAL)} target="_blank" className="flex-1 rounded-xl bg-[#2bff00] px-4 py-2.5 text-center text-xs font-black text-black hover:bg-white">AGENDAR →</a>
                </div>
              </div>
            </div>

            {/* cards flutuantes */}
            <div className="animate-float absolute left-1 top-10 rounded-2xl border border-white/10 bg-black/90 px-3 py-2.5 shadow-2xl backdrop-blur sm:-left-4 sm:px-4 sm:py-3">
              <p className="text-xl font-black text-[#2bff00] sm:text-2xl">-600<span className="text-sm">kcal</span></p>
              <p className="text-[11px] font-bold text-zinc-300">1 aula de Jump 🤸‍♀️</p>
            </div>
            <div className="animate-float absolute right-1 top-1/3 rounded-2xl border border-[#2bff00]/40 bg-[#2bff00] px-3 py-2.5 text-black shadow-[0_0_40px_rgba(43,255,0,.6)] sm:-right-3 sm:px-4 sm:py-3" style={{ animationDelay: "1s" }}>
              <p className="text-[13px] font-black sm:text-sm">💃 HIIT DANCE</p>
              <p className="text-[11px] font-bold">seca dançando</p>
            </div>
            <div className="absolute inset-x-3 -bottom-1 flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black/90 px-4 py-3 shadow-2xl backdrop-blur sm:inset-x-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-[#2bff00]" />
                <p className="text-[11px] font-black sm:text-xs">ABERTO HOJE • 08h ÀS 22h</p>
              </div>
              <p className="truncate text-[11px] font-bold text-zinc-400">Piratini • Charqueadas</p>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="relative mx-auto max-w-6xl px-4 pb-6">
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-black/70 p-4 backdrop-blur md:grid-cols-4">
            {[
              ["6", "MODALIDADES"],
              ["24/05/25", "INAUGURADO"],
              ["08h–22h", "SEG A SEX"],
              ["5.0★", "ALUNAS AMAM"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-white/[0.04] px-4 py-3 text-center">
                <p className="text-2xl font-black text-[#2bff00]">{n}</p>
                <p className="text-[11px] font-bold tracking-widest text-zinc-400">{l}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs font-bold text-zinc-500">↓ role e veja como funciona ↓</p>
        </div>

        {/* MARQUEE */}
        <div className="relative overflow-hidden border-y border-[#2bff00]/25 bg-[#0b0b0b] py-3">
          <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-black tracking-wider">
            {[0, 1].map((k) => (
              <span key={k} className="flex gap-8 text-sm">
                {["JUMP 🤸‍♀️", "STEP ⬆️", "FUNCIONAL 💪", "LOCALIZADOS 🔥", "HIIT DANCE 💃", "MOBILIDADE 🧘‍♀️"].map((m) => (
                  <span key={m + k} className="text-[#2bff00]">● {m}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AULAS */}
      <section id="aulas" className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-center text-xs font-black tracking-[0.3em] text-[#2bff00]">AULAS COLETIVAS</p>
        <h2 className="mt-2 text-center text-3xl font-black sm:text-4xl">Escolha sua energia. <span className="silver-text">A gente cuida do resto.</span></h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">Todas com música, grupo animado e adaptação para iniciantes. Toque para agendar direto no WhatsApp.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AULAS.map((a) => (
            <div key={a.nome} className="card-glow rounded-3xl border border-white/10 bg-[#111311] p-6">
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#2bff00]/15 text-3xl">{a.emoji}</div>
                <span className="rounded-full bg-[#2bff00]/15 px-3 py-1 text-[11px] font-bold text-[#b6ff5c]">{a.tag}</span>
              </div>
              <h3 className="mt-4 text-2xl font-black">{a.nome}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-500">Intensidade: <span className="text-[#2bff00]">{a.intensidade}</span></p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{a.desc}</p>
              <ul className="mt-3 space-y-1.5">
                {a.beneficios.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-zinc-200"><span className="text-[#2bff00]">✓</span> {b}</li>
                ))}
              </ul>
              <a href={waLink(MSG_AULA(a.nome))} target="_blank" className="mt-5 block rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-black hover:bg-[#2bff00] hover:text-black">
                Quero experimentar {a.nome} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-black tracking-[0.3em] text-[#2bff00]">POR QUE A EVOLUTION?</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Não é academia fria. É <span className="evo-gradient-text">time.</span></h2>
            <div className="mt-6 space-y-4">
              {[
                ["👩‍🏫 Professora presente de verdade", "Daiane Goulart acompanha, corrige e motiva. Você nunca treina sozinha."],
                ["👯 Turmas pequenas, energia gigante", "Vaga limitada por turma = atenção + amizades que te puxam a não faltar."],
                ["🏠 Espaço novo e acolhedor", "Inaugurado em 24/05/2025 com mobília planejada, som alto e parede DG instagramável."],
                ["🔄 Nunca enjoa", "6 modalidades para variar na semana: um dia dança, outro força, outro mobilidade."],
                ["📍 Perto de você no Piratini", "Na Av. Perimetral Sul, 20 – Charqueadas. Sem desculpa de distância."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div>
                    <p className="font-black">{t}</p>
                    <p className="mt-1 text-sm text-zinc-400">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-3xl border border-[#2bff00]/30 bg-gradient-to-b from-[#2bff00]/15 to-transparent p-8 text-center">
            <p className="text-5xl">💚</p>
            <h3 className="mt-2 text-2xl font-black">Aula experimental</h3>
            <p className="mt-2 text-zinc-300">Venha sentir a energia. Sem compromisso, sem taxa escondida. Só traga sua garrafinha.</p>
            <div className="mt-4 rounded-2xl bg-black/60 p-4 text-left text-sm">
              <p className="font-bold text-[#b6ff5c]">O que acontece quando você chama:</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-zinc-300">
                <li>Você escolhe a aula (ex: Jump)</li>
                <li>A gente confirma dia e horário</li>
                <li>Você treina e se apaixona</li>
              </ol>
            </div>
            <a href={waLink(MSG_GERAL)} target="_blank" className="mt-6 rounded-2xl bg-[#2bff00] px-6 py-4 font-black text-black hover:bg-white">CHAMAR NO WHATSAPP AGORA</a>
            <p className="mt-2 text-xs text-zinc-400">📞 +55 51 9812-5760 • Resposta rápida</p>
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section id="horarios" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-3xl font-black">Horários que cabem <span className="text-[#2bff00]">na sua rotina</span></h2>
        <p className="mt-2 text-center text-sm text-zinc-400">Segunda a sexta 08:00–22:00 • Feriados podem variar – confirme no WhatsApp</p>
        <div className="mx-auto mt-6 max-w-2xl overflow-hidden rounded-3xl border border-white/10">
          {HORARIOS.map((h, i) => {
            const isToday = i === todayIdx;
            return (
              <div key={h.dia} className={`flex items-center justify-between px-5 py-4 text-sm ${i % 2 ? "bg-white/[0.02]" : ""} ${isToday ? "bg-[#2bff00]/10 border-l-4 border-l-[#2bff00]" : ""}`}>
                <span className={`font-bold ${isToday ? "text-[#2bff00]" : ""}`}>{h.dia} {isToday && "• HOJE"}</span>
                <span className={`rounded-full px-3 py-1 font-bold ${h.abre ? "bg-[#2bff00]/15 text-[#b6ff5c]" : "bg-white/10 text-zinc-400"}`}>{h.hora}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <a href={waLink("Olá! Qual o melhor horário de Jump / HIIT essa semana? 💚")} target="_blank" className="inline-block rounded-full border border-[#2bff00]/50 px-6 py-3 text-sm font-bold text-[#2bff00] hover:bg-[#2bff00] hover:text-black">
            Perguntar melhor turma da semana →
          </a>
        </div>
      </section>

      {/* ESPACO / INAUGURACAO */}
      <section id="espaco" className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-black tracking-[0.3em] text-[#2bff00]">NOSSO ESPAÇO</p>
          <h2 className="mt-2 text-3xl font-black">Um sonho inaugurado em 24/05/2025 ✨</h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-zinc-400 sm:text-base">Família, alunas e muita energia. Olha quem já faz parte dessa história 👇</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-[#2bff00]/30 bg-[#111311]">
              <img src="/turma.jpg" alt="Turma Evolution Studio Fitness reunida no studio" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <p className="font-black text-[#b6ff5c]">💚 NOSSA TURMA</p>
                <p className="mt-1 text-sm text-zinc-400">Time reunido no studio. Aqui ninguém treina sozinha.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111311]">
              <img src="/familia.jpg" alt="Família na parede Evolution Studio Fitness" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <p className="font-black text-white">🖤 NOSSA PAREDE EVOLUTION</p>
                <p className="mt-1 text-sm text-zinc-400">A recepção com a logo na parede verde — ponto de foto oficial.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111311] sm:col-span-2 lg:col-span-1">
              <img src="/daiane-aluna.jpg" alt="Professora Daiane Goulart com aluna" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <p className="font-black text-white">👩‍🏫 PROFE JUNTO</p>
                <p className="mt-1 text-sm text-zinc-400">Daiane presente, corrigindo e motivando em cada aula.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a href="https://www.instagram.com/reel/DKivBtgAHwK/" target="_blank" className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-black text-black hover:bg-[#2bff00]">Ver reel original no Instagram</a>
            <a href={waLink("Olá! Vi o espaço novo da Evolution e quero conhecer! Quando posso ir? 💚")} target="_blank" className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-bold">Quero conhecer o espaço</a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-3xl font-black">Quem treina, <span className="evo-gradient-text">fica.</span></h2>
        <p className="mt-2 text-center text-sm text-zinc-400">Comentários reais do Instagram da inauguração</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <div key={d.user} className="rounded-3xl border border-white/10 bg-[#111311] p-6">
              <p className="text-[#2bff00]">★★★★★</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">“{d.texto}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#2bff00]/20 font-black text-[#2bff00]">{d.nome[0]}</div>
                <div>
                  <p className="text-sm font-bold">{d.nome}</p>
                  <p className="text-xs text-zinc-500">{d.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCALIZACAO */}
      <section id="localizacao" className="border-t border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-black tracking-[0.3em] text-[#2bff00]">ONDE FICA</p>
            <h2 className="mt-2 text-3xl font-black">Pertinho de você no Piratini</h2>
            <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed">
              📍 <strong>Aços Finos – Av. Perimetral Sul, 20 – Piratini</strong><br />
              Charqueadas – RS, 96745-000<br />
              <span className="text-zinc-400">Seg a Sex 08:00–22:00 • Sáb/Dom fechado</span><br />
              📞 +55 51 9812-5760
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a href="https://www.google.com/maps/search/?api=1&query=Av.+Perimetral+Sul,+20+-+Piratini,+Charqueadas+-+RS" target="_blank" className="rounded-2xl bg-[#2bff00] px-6 py-3 text-center text-sm font-black text-black">📍 Abrir no Google Maps</a>
              <a href={waLink("Olá! Como faço para chegar na Evolution Studio? 📍")} target="_blank" className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-bold">Pedir localização no Zap</a>
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a href="https://www.instagram.com/evolutionstudiofitnes" target="_blank" className="font-bold text-[#b6ff5c] hover:underline">📸 @evolutionstudiofitnes</a>
              <span className="text-zinc-600">•</span>
              <a href="https://www.instagram.com/reel/DKivBtgAHwK/" target="_blank" className="font-bold text-zinc-300 hover:underline">Ver inauguração</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Mapa Evolution Studio Fitness"
              src="https://www.google.com/maps?q=Av.+Perimetral+Sul,+20+-+Charqueadas+RS&output=embed"
              className="h-[340px] w-full grayscale invert-[0.9]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-center text-3xl font-black">Dúvidas? <span className="text-[#2bff00]">A gente responde.</span></h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`overflow-hidden rounded-2xl border ${faqOpen === i ? "border-[#2bff00]/50" : "border-white/10"} bg-[#111311]`}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold">
                {f.q}
                <span className="text-[#2bff00]">{faqOpen === i ? "−" : "+"}</span>
              </button>
              {faqOpen === i && <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-300">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 pb-10 sm:pb-14">
        <div className="hero-glow mx-auto max-w-6xl rounded-[2rem] border border-[#2bff00]/40 bg-gradient-to-b from-[#2bff00]/20 to-black p-6 text-center sm:p-12">
          <img src="/logo.jpg" alt="DG Daiane Goulart" className="mx-auto h-20 w-20 rounded-3xl object-cover ring-2 ring-[#2bff00]" />
          <h2 className="mx-auto mt-4 max-w-2xl text-[1.7rem] font-black leading-tight sm:text-5xl">Pare de adiar. <span className="evo-gradient-text">Comece dançando.</span></h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-zinc-300 sm:text-base">1ª aula experimental com turma limitada. Chame agora e garanta sua vaga essa semana – leva 10 segundos.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={waLink(MSG_GERAL)} target="_blank" className="rounded-2xl bg-[#2bff00] px-8 py-4 text-[15px] font-black text-black shadow-[0_10px_50px_-10px_rgba(43,255,0,.8)] active:scale-[0.98] sm:text-base hover:bg-white">💬 QUERO MINHA VAGA NO WHATSAPP</a>
            <a href="https://www.instagram.com/evolutionstudiofitnes" target="_blank" className="rounded-2xl border border-white/20 bg-black/50 px-8 py-4 text-[15px] font-bold sm:text-base">Ver Instagram</a>
          </div>
          <p className="mt-4 text-xs text-zinc-500">Evolution Studio Fitness • Daiane Goulart • Charqueadas-RS • Ao clicar você fala direto com o Studio</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="logo" className="h-10 w-10 rounded-xl object-cover" />
            <div className="text-xs text-zinc-400">
              <p className="font-black text-white">EVOLUTION STUDIO FITNESS</p>
              <p>Daiane Goulart • Av. Perimetral Sul, 20 – Charqueadas-RS</p>
            </div>
          </div>
          <p className="text-xs text-zinc-600">Site modelo por GA DEV SYSTEMS • Feito para converter visita em agendamento 💚</p>
        </div>
      </footer>

      {/* FLOAT WHATS – acima da barra mobile */}
      <a href={waLink(MSG_GERAL)} target="_blank" aria-label="WhatsApp" className="fixed bottom-[86px] right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#2bff00] text-2xl text-black shadow-[0_0_30px_rgba(43,255,0,.7)] active:scale-95 md:bottom-5 md:right-5 md:h-14 md:w-14 hover:md:scale-105">
        ✆
      </a>

      {/* BARRA FIXA MOBILE – fechar negócio */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#2bff00]/30 bg-black/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <a href={waLink(MSG_GERAL)} target="_blank" className="btn-shine rounded-xl bg-[#2bff00] px-4 py-3.5 text-center text-[15px] font-black leading-none text-black active:scale-[0.98]">
            💬 AGENDAR AULA GRÁTIS
            <span className="mt-1 block text-[11px] font-bold opacity-80">7 vagas restantes essa semana</span>
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Av.+Perimetral+Sul,+20+-+Piratini,+Charqueadas+-+RS" target="_blank" aria-label="Como chegar" className="grid w-[54px] place-items-center rounded-xl border border-white/20 bg-white/10 text-xl active:scale-95">
            📍
          </a>
        </div>
      </div>
    </div>
  );
}
