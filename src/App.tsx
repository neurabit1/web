import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import "./index.css";

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "es");

  const content = {
    es: {
      welcome: "Bienvenido a NeuraBit",
      description: "Aprende Inteligencia Artificial sin complicaciones. Herramientas, consejos y demos para todos. De cero a pro, explicado como si fuera tu colega.",
      follow: "Síguenos en Instagram",
      aboutTitle: "Sobre NeuraBit",
      aboutText: "NeuraBit nació para hacer que la IA sea comprensible para todos. En un mundo donde la tecnología avanza más rápido de lo que la gente puede asimilar, nuestra misión es explicarla de forma sencilla, visual y práctica. Ya sea por curiosidad o para construir tu futuro con IA, este es tu sitio.",
      toolsTitle: "Herramientas Recomendadas",
      tools: [
        "🧠 ChatGPT – Para escribir cualquier cosa en segundos",
        "📊 Notion AI – Para automatizar tus notas y tareas",
        "🎨 Midjourney – Para generar imágenes impactantes con texto",
        "🎥 Pika Labs – Para crear vídeos a partir de texto"
      ],
      ctaTitle: "Suscríbete a Nuestra Newsletter",
      ctaText: "Recibe cada semana consejos, herramientas y tutoriales sobre IA en tu correo.",
      ctaBtn: "Suscríbete ahora"
    },
    en: {
      welcome: "Welcome to NeuraBit",
      description: "Learn Artificial Intelligence without complications. Tools, tips and demos for everyone. From zero to pro, explained like you're my friend.",
      follow: "Follow us on Instagram",
      aboutTitle: "About NeuraBit",
      aboutText: "NeuraBit was born to make AI understandable for everyone. In a world where technology advances faster than people can keep up, our mission is to break it down simply, visually, and practically. Whether you're just curious or want to build your future with AI, this is your home.",
      toolsTitle: "Top Tools This Week",
      tools: [
        "🧠 ChatGPT – For writing anything in seconds",
        "📊 Notion AI – For automating your notes and workflows",
        "🎨 Midjourney – For generating stunning images with text",
        "🎥 Pika Labs – For creating videos from prompts"
      ],
      ctaTitle: "Subscribe to Our Newsletter",
      ctaText: "Get weekly AI tips, tools, and tutorials delivered to your inbox.",
      ctaBtn: "Subscribe Now"
    },
    fr: {
      welcome: "Bienvenue sur NeuraBit",
      description: "Apprenez l'intelligence artificielle sans complications. Outils, astuces et démonstrations pour tous. Du niveau débutant à expert, expliqué comme à un ami.",
      follow: "Suivez-nous sur Instagram",
      aboutTitle: "À propos de NeuraBit",
      aboutText: "NeuraBit est né pour rendre l'IA compréhensible pour tous. Dans un monde où la technologie évolue plus vite que les gens ne peuvent suivre, notre mission est de la simplifier de manière visuelle et pratique. Que vous soyez curieux ou que vous souhaitiez construire votre avenir avec l'IA, vous êtes au bon endroit.",
      toolsTitle: "Outils de la semaine",
      tools: [
        "🧠 ChatGPT – Pour écrire n'importe quoi en quelques secondes",
        "📊 Notion AI – Pour automatiser vos notes et flux de travail",
        "🎨 Midjourney – Pour générer des images impressionnantes à partir de texte",
        "🎥 Pika Labs – Pour créer des vidéos à partir de prompts"
      ],
      ctaTitle: "Abonnez-vous à notre newsletter",
      ctaText: "Recevez chaque semaine des astuces, outils et tutoriels IA dans votre boîte mail.",
      ctaBtn: "Je m'abonne"
    },
    de: {
      welcome: "Willkommen bei NeuraBit",
      description: "Lerne Künstliche Intelligenz ohne Komplikationen. Tools, Tipps und Demos für alle – von Anfänger bis Profi, einfach erklärt.",
      follow: "Folge uns auf Instagram",
      aboutTitle: "Über NeuraBit",
      aboutText: "NeuraBit wurde gegründet, um KI für alle verständlich zu machen. In einer Welt, in der sich Technologie schneller entwickelt als wir folgen können, ist es unser Ziel, sie einfach, visuell und praktisch zu erklären. Ob du neugierig bist oder deine Zukunft mit KI gestalten willst – hier bist du richtig.",
      toolsTitle: "Top-Tools dieser Woche",
      tools: [
        "🧠 ChatGPT – Zum Schreiben von Texten in Sekunden",
        "📊 Notion AI – Zur Automatisierung deiner Notizen und Workflows",
        "🎨 Midjourney – Zum Erstellen beeindruckender Bilder aus Text",
        "🎥 Pika Labs – Zum Erstellen von Videos aus Prompts"
      ],
      ctaTitle: "Abonniere unseren Newsletter",
      ctaText: "Erhalte wöchentlich Tipps, Tools und Tutorials rund um KI in dein Postfach.",
      ctaBtn: "Jetzt abonnieren"
    },
    it: {
      welcome: "Benvenuto su NeuraBit",
      description: "Impara l'intelligenza artificiale senza complicazioni. Strumenti, consigli e demo per tutti. Da zero a esperto, spiegato come a un amico.",
      follow: "Seguici su Instagram",
      aboutTitle: "Chi è NeuraBit",
      aboutText: "NeuraBit è nato per rendere l'IA comprensibile a tutti. In un mondo in cui la tecnologia avanza più velocemente delle persone, la nostra missione è semplificarla in modo visivo e pratico. Se sei curioso o vuoi costruire il tuo futuro con l'IA, questo è il posto giusto.",
      toolsTitle: "Strumenti della Settimana",
      tools: [
        "🧠 ChatGPT – Per scrivere qualsiasi cosa in pochi secondi",
        "📊 Notion AI – Per automatizzare note e flussi di lavoro",
        "🎨 Midjourney – Per generare immagini sorprendenti da testo",
        "🎥 Pika Labs – Per creare video da prompt"
      ],
      ctaTitle: "Iscriviti alla nostra newsletter",
      ctaText: "Ricevi ogni settimana suggerimenti, strumenti e tutorial sull'IA nella tua casella di posta.",
      ctaBtn: "Iscriviti ora"
    },
    zh: {
      welcome: "欢迎来到 NeuraBit",
      description: "轻松学习人工智能。适用于所有人的工具、技巧和演示。从零基础到专业，像朋友一样解释给你听。",
      follow: "关注我们的 Instagram",
      aboutTitle: "关于 NeuraBit",
      aboutText: "NeuraBit 的使命是让每个人都能理解人工智能。在这个技术发展比人类更快的世界里，我们的目标是用简单、直观、实用的方式进行解释。无论你是好奇，还是想用人工智能打造未来，这里就是你的归属。",
      toolsTitle: "本周推荐工具",
      tools: [
        "🧠 ChatGPT – 秒写任何内容",
        "📊 Notion AI – 自动化笔记和工作流程",
        "🎨 Midjourney – 文生图的神器",
        "🎥 Pika Labs – 输入文字就能生成视频"
      ],
      ctaTitle: "订阅我们的通讯",
      ctaText: "每周接收人工智能相关技巧、工具和教程。",
      ctaBtn: "立即订阅"
    },
    ar: {
      welcome: "مرحبًا بك في NeuraBit",
      description: "تعلم الذكاء الاصطناعي بسهولة. أدوات ونصائح وعروض لكل المستويات. من المبتدئ إلى المحترف، بأسلوب بسيط كما لو كان صديقك يشرح لك.",
      follow: "تابعنا على إنستغرام",
      aboutTitle: "حول NeuraBit",
      aboutText: "وُلدت NeuraBit لجعل الذكاء الاصطناعي مفهومًا للجميع. في عالم يتقدم فيه التكنولوجيا أسرع من قدرة البشر على المواكبة، مهمتنا هي تبسيط الذكاء الاصطناعي بصريًا وعمليًا. سواء كنت فضوليًا أو ترغب في بناء مستقبلك باستخدام الذكاء الاصطناعي، هذا هو المكان المناسب لك.",
      toolsTitle: "أفضل الأدوات لهذا الأسبوع",
      tools: [
        "🧠 ChatGPT – لكتابة أي شيء خلال ثوانٍ",
        "📊 Notion AI – لأتمتة الملاحظات وسير العمل",
        "🎨 Midjourney – لإنشاء صور مذهلة من النص",
        "🎥 Pika Labs – لإنشاء فيديوهات من التعليمات النصية"
      ],
      ctaTitle: "اشترك في النشرة الإخبارية",
      ctaText: "احصل على نصائح وأدوات ودروس أسبوعية حول الذكاء الاصطناعي على بريدك الإلكتروني.",
      ctaBtn: "اشترك الآن"
    }
  };

  type LanguageKey = "es" | "en" | "fr" | "de" | "it" | "zh" | "ar";
  const t = content[lang as LanguageKey];
  const languageOptions = ["es", "en", "fr", "de", "it", "zh", "ar"];

  return (
    <>
      <div
        id="intro-overlay"
        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      >
        <audio autoPlay>
          <source src="/typewriter.mp3" type="audio/mpeg" />
        </audio>
      </div>

      <script>
        {`
          setTimeout(() => {
            const overlay = document.getElementById('intro-overlay');
            if (overlay) overlay.style.display = 'none';
          }, 2500);
        `}
      </script>
      {/* Animation overlay */}
      <div id="intro-overlay" className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-fadeOut">
      </div>
    <div className={`min-h-screen bg-black text-white flex flex-col items-center px-4 py-10 text-center space-y-20 ${lang === 'ar' ? 'rtl text-right' : ''}`}>
      <div className="absolute top-4 right-4 space-x-2">
        {languageOptions.map((code) => (
          <button
            key={code}
            onClick={() => {
            setLang(code);
            localStorage.setItem("lang", code);
          }}
            className={`py-1 px-3 rounded ${lang === code ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"}`}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <section className="flex flex-col items-center">
        <img src={logo} alt="NeuraBit Logo" className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto mb-6 mx-auto" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t.welcome}</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-sm sm:max-w-md md:max-w-xl mb-8">{t.description}</p>
        <a
          href="https://www.instagram.com/neurabit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition-all"
        >
          {t.follow}
        </a>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t.aboutTitle}</h2>
        <p className="text-base sm:text-lg text-gray-300">{t.aboutText}</p>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t.toolsTitle}</h2>
        <ul className="text-base sm:text-lg text-gray-300 space-y-2">
          {t.tools.map((tool: string, index: number) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{t.ctaTitle}</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6">{t.ctaText}</p>
        <a
          href="https://newsletter.neurabit.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition-all"
        >
          {t.ctaBtn}
        </a>
      </section>
{/* CONTADOR DE USUARIOS */}
<section className="text-center">
  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
    +<span id="user-counter">0</span> usuarios ya aprenden IA con NeuraBit
  </h2>
</section>

{/* PROYECTOS DESTACADOS */}
<section className="max-w-5xl mx-auto py-10 px-4">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Proyectos Destacados</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-all">
      <h3 className="text-xl font-semibold mb-2">DeepBlue IA</h3>
      <p className="text-gray-300 text-sm">Un motor de ajedrez con IA y visualización del pensamiento paso a paso.</p>
    </div>
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-all">
      <h3 className="text-xl font-semibold mb-2">SmartHealth</h3>
      <p className="text-gray-300 text-sm">Entrenador y nutricionista con IA personalizada para mejorar tu salud.</p>
    </div>
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-all">
      <h3 className="text-xl font-semibold mb-2">SmartEstate</h3>
      <p className="text-gray-300 text-sm">IA aplicada al sector inmobiliario: recomendaciones, predicciones y chatbot 24/7.</p>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="w-full py-6 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} NeuraBit. All rights reserved.</p>
      </footer>
    </div>
    <script>
  {`
    const counter = document.getElementById('user-counter');
    let value = 0;
    const target = 3200;
    const step = Math.ceil(target / 100);
    const interval = setInterval(() => {
      value += step;
      if (value >= target) {
        value = target;
        clearInterval(interval);
      }
      if (counter) counter.textContent = value.toLocaleString();
    }, 25);
  `}
</script>

    </>
  );
}
