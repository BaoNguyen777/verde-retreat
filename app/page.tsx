import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BedDouble, Check,
  Leaf, MapPin, Sparkles, Users, Waves, Wind
} from "lucide-react";

const stays = [
  {
    number: "01",
    name: "Garden Pool Villa",
    category: "ONE BEDROOM · PRIVATE POOL",
    size: "92 m²",
    guests: "2 guests",
    price: "₫4.200.000",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1500&q=90&fit=crop",
    note: "A secluded garden sanctuary, made for slow mornings and long afternoons by your own pool.",
    features: ["Private plunge pool", "Tropical garden", "Outdoor rain shower"],
  },
  {
    number: "02",
    name: "Canopy Forest Suite",
    category: "FOREST VIEW · PRIVATE DECK",
    size: "68 m²",
    guests: "2 guests",
    price: "₫3.100.000",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1500&q=90&fit=crop",
    note: "Wake to the sounds of the island, with a quiet deck looking out into the green canopy.",
    features: ["Forest-facing deck", "Rain shower", "Breakfast for two"],
  },
  {
    number: "03",
    name: "Horizon Residence",
    category: "TWO BEDROOMS · OCEAN VIEW",
    size: "140 m²",
    guests: "4 guests",
    price: "₫6.800.000",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1500&q=90&fit=crop",
    note: "Room to gather, space to retreat. A generous hideaway for families and friends.",
    features: ["Ocean-facing terrace", "Separate living room", "Private pool"],
  },
];

const rituals = [
  {
    number: "01",
    eyebrow: "THE TABLE",
    title: "Island, served slowly.",
    copy: "Fresh island produce, just-caught seafood and thoughtful menus that follow the seasons.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=88&fit=crop",
  },
  {
    number: "02",
    eyebrow: "THE GARDEN",
    title: "A little closer to green.",
    copy: "Wander beneath the palms, breathe in the morning air and let the day find its own pace.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=88&fit=crop",
  },
  {
    number: "03",
    eyebrow: "THE SEA",
    title: "Stay for the blue hour.",
    copy: "Follow the changing light to the shore, where the island slips gently into evening.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=88&fit=crop",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function VerdeRetreatPage() {
  return (
    <main id="top" className="overflow-hidden bg-[#f3ecdf] text-[#12313a]">
      <header className="site-header absolute inset-x-0 top-0 z-30 text-white">
        <div className="mx-auto flex h-[88px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a href="#top" aria-label="Verde Retreat home" className="brand-mark">
            VERDE<span>®</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
            <a href="#stay">THE STAYS</a>
            <a href="#story">OUR PLACE</a>
            <a href="#rituals">EXPERIENCES</a>
          </nav>
          <a href="#enquire" className="header-cta">
            <span>PLAN YOUR STAY</span><ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section className="hero relative flex min-h-[760px] items-end overflow-hidden bg-[#263e32] px-5 pb-14 pt-36 text-white sm:px-8 lg:min-h-[900px] lg:px-14 lg:pb-20">
        <Image
          src="https://images.unsplash.com/photo-1777004682148-a0c5d339109e?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=90&w=3000"
          alt="A tranquil tropical resort pool surrounded by lush greenery"
          fill priority unoptimized sizes="100vw"
          className="hero-image object-cover object-center"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-[1360px]">
          <div className="mb-8 flex items-center gap-3 text-[9px] tracking-[.28em] text-[#e2e4d5]">
            <span className="h-px w-9 bg-[#d5d9c6]" /> PHU QUOC · VIETNAM
          </div>
          <h1 className="hero-title max-w-5xl font-serif text-[clamp(4.3rem,10.5vw,10rem)] leading-[.79] tracking-[-.065em]">
            Escape into<br /><em className="font-normal">the blue.</em>
          </h1>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/30 pt-6 sm:flex-row sm:items-end">
            <p className="max-w-[360px] text-[13px] leading-7 text-white/80">
              Salt air, slow afternoons and vivid island sunsets. Discover a fresh perspective on the art of escaping to Phu Quoc.
            </p>
            <a href="#story" className="hero-link">
              DISCOVER VERDE <ArrowDown size={15} />
            </a>
          </div>
        </div>
        <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] lg:block">
          <span className="text-[8px] tracking-[.3em] text-white/70">10°13&apos; N — 103°58&apos; E</span>
        </div>
        <div className="absolute bottom-8 right-8 z-10 hidden text-right text-[8px] tracking-[.22em] text-white/60 sm:block">
          <span>SUNSET ISLAND EDITION</span>
        </div>
      </section>

      <section className="intro-strip border-b border-[#dcded3] bg-[#f3ecdf]">
        <div className="mx-auto grid max-w-[1360px] gap-7 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:grid-cols-3 lg:px-14 lg:py-10">
          <div className="flex items-center gap-4"><MapPin className="text-[#d27a55]" size={19}/><div><p className="eyebrow">A LITTLE OFF THE MAP</p><p className="mt-1 text-[12px]">Phu Quoc, Vietnam</p></div></div>
          <div className="flex items-center gap-4"><Leaf className="text-[#d27a55]" size={19}/><div><p className="eyebrow">ROOTED IN NATURE</p><p className="mt-1 text-[12px]">Gardens, forest and sea</p></div></div>
          <div className="flex items-center gap-4"><Wind className="text-[#d27a55]" size={19}/><div><p className="eyebrow">MADE FOR SLOW LIVING</p><p className="mt-1 text-[12px]">Private villas & suites</p></div></div>
        </div>
      </section>

      <section id="story" className="story-section mx-auto grid max-w-[1480px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-20 lg:px-14 lg:py-32">
        <div className="flex flex-col justify-center">
          <SectionEyebrow>A NEW COASTAL PERSPECTIVE</SectionEyebrow>
          <h2 className="editorial-heading mt-7 max-w-[620px] font-serif text-5xl leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[6.4rem]">
            A little<br />more <em className="font-normal">ocean.</em>
          </h2>
          <p className="mt-8 max-w-[440px] text-[13px] leading-7 text-[#647b7d]">
            Verde is a place to return to what matters. The warmth of the sun, the sound of leaves moving in the breeze, and the luxury of having nowhere else to be.
          </p>
          <a href="#stay" className="text-link mt-9 w-fit">FIND YOUR PLACE <ArrowUpRight size={15}/></a>
          <div className="mt-14 grid max-w-[390px] grid-cols-2 border-t border-[#d5d8cf] pt-5">
            <div><p className="font-serif text-4xl">18</p><p className="eyebrow mt-2">PRIVATE STAYS</p></div>
            <div><p className="font-serif text-4xl">01</p><p className="eyebrow mt-2">ISLAND TO EXPLORE</p></div>
          </div>
        </div>
        <div className="story-image-wrap relative min-h-[480px] sm:min-h-[650px]">
          <Image src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=90&fit=crop" alt="A serene pool framed by tropical resort greenery" fill unoptimized sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover"/>
          <div className="image-caption"><span>01 — A SENSE OF PLACE</span><span>VERDE RETREAT · PHU QUOC</span></div>
        </div>
      </section>

      <section id="stay" className="stay-section bg-[#dce7e3] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div><SectionEyebrow>YOUR OWN PRIVATE WORLD</SectionEyebrow><h2 className="editorial-heading mt-5 font-serif text-5xl tracking-[-.055em] sm:text-7xl">The stays.</h2></div>
            <p className="max-w-[360px] text-[12px] leading-6 text-[#647b7d]">Different spaces, one shared feeling: the freedom to slow down and settle in.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {stays.map((stay) => (
              <article key={stay.number} className="stay-card group">
                <div className="stay-image relative aspect-[4/4.6] overflow-hidden bg-[#d8ded2]">
                  <Image src={stay.image} alt={stay.name} fill unoptimized sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.045]"/>
                  <span className="absolute left-5 top-5 bg-[#f3ecdf] px-3 py-2 text-[8px] tracking-[.17em]">{stay.category}</span>
                  <span className="stay-number absolute bottom-4 right-5 font-serif text-5xl text-white">{stay.number}</span>
                </div>
                <div className="pt-6">
                  <div className="flex items-start justify-between gap-4"><h3 className="font-serif text-[2rem] leading-none tracking-[-.035em]">{stay.name}</h3><span className="pt-1 text-[10px] text-[#647b7d]">{stay.size}</span></div>
                  <p className="mt-4 min-h-[52px] text-[11px] leading-6 text-[#647b7d]">{stay.note}</p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#c8d4d1] py-4 text-[10px] text-[#647b7d]"><span className="inline-flex items-center gap-2"><UsersIcon />{stay.guests}</span><span className="inline-flex items-center gap-2"><BedDouble size={13}/>{stay.number === "03" ? "2 bedrooms" : "1 king bed"}</span></div>
                  <div className="flex items-end justify-between border-t border-[#c8d4d1] pt-4">
                    <div><p className="eyebrow">FROM / NIGHT</p><p className="mt-1 text-[14px]">{stay.price}</p></div>
                    <a href="#enquire" aria-label={"Enquire about " + stay.name} className="round-link"><ArrowUpRight size={17}/></a>
                  </div>
                  <ul className="mt-5 space-y-2">{stay.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-[10px] text-[#647b7d]"><Check size={12} className="text-[#d27a55]"/>{feature}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-[9px] leading-5 text-[#879287]">Rates shown are illustrative template content. Confirm seasonal pricing and availability with the retreat before publishing.</p>
        </div>
      </section>

      <section id="rituals" className="px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><SectionEyebrow>FOLLOW YOUR OWN RHYTHM</SectionEyebrow><h2 className="editorial-heading mt-5 max-w-3xl font-serif text-5xl tracking-[-.055em] sm:text-7xl">Little moments.<br/><em className="font-normal">Lasting memories.</em></h2></div>
            <p className="max-w-[310px] pb-1 text-[12px] leading-6 text-[#647b7d]">The best parts of a journey are often the moments you never planned.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {rituals.map((ritual) => (
              <article key={ritual.number} className="ritual-card group">
                <div className="relative aspect-[4/4.7] overflow-hidden bg-[#d8ded2]"><Image src={ritual.image} alt={ritual.title} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]"/></div>
                <div className="mt-5 flex items-center justify-between"><SectionEyebrow>{ritual.eyebrow}</SectionEyebrow><span className="font-serif text-xl text-[#d27a55]">{ritual.number}</span></div>
                <h3 className="mt-3 font-serif text-[1.8rem] tracking-[-.03em]">{ritual.title}</h3>
                <p className="mt-2 max-w-sm text-[11px] leading-6 text-[#647b7d]">{ritual.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section relative overflow-hidden bg-[#12313a] px-5 py-24 text-center text-white sm:px-8 lg:py-36">
        <div className="relative z-10 mx-auto max-w-4xl"><Sparkles className="mx-auto mb-8 text-[#f0b28d]" size={21}/><p className="eyebrow text-[#f0b28d]">A NOTE TO YOUR FUTURE SELF</p><blockquote className="mt-7 font-serif text-4xl leading-[1.08] tracking-[-.04em] sm:text-6xl lg:text-7xl">“Somewhere between the forest and the sea, you will find your pace again.”</blockquote><p className="mt-9 text-[8px] tracking-[.25em] text-white/55">THE VERDE WAY</p></div>
        <span className="absolute -bottom-24 left-1/2 -translate-x-1/2 font-serif text-[24rem] leading-none text-white/[.025]">V</span>
      </section>

      <section id="enquire" className="enquire-section grid bg-[#f3ecdf] lg:grid-cols-[1.1fr_.9fr]">
        <div className="flex flex-col justify-center px-5 py-20 sm:px-10 lg:px-20 lg:py-32">
          <SectionEyebrow>YOUR ISLAND TIME STARTS HERE</SectionEyebrow>
          <h2 className="editorial-heading mt-6 max-w-2xl font-serif text-5xl leading-[.94] tracking-[-.055em] sm:text-7xl">Your next<br/>chapter is <em className="font-normal">here.</em></h2>
          <p className="mt-7 max-w-md text-[12px] leading-7 text-[#647b7d]">Tell us what a perfect escape looks like. Our team can help you find the right space and plan your stay.</p>
          <a href="#stay" className="text-link mt-9 w-fit">EXPLORE THE STAYS <ArrowRight size={15}/></a>
        </div>
        <div className="enquire-image relative min-h-[420px] sm:min-h-[560px]">
          <Image src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&q=90&fit=crop" alt="Gentle tropical sea at golden hour" fill unoptimized sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover"/>
          <div className="absolute inset-0 bg-[#1c382d]/15"/>
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white"><div><p className="eyebrow text-white/70">PHU QUOC · VIETNAM</p><p className="mt-2 font-serif text-3xl">See you by the sea.</p></div><Waves size={25}/></div>
        </div>
      </section>

      <footer className="bg-[#0d2730] px-5 py-10 text-white sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-10 md:flex-row md:items-end">
            <div><a href="#top" className="brand-mark text-3xl">VERDE<span>®</span></a><p className="mt-3 text-[8px] tracking-[.2em] text-white/50">A QUIETER PLACE ON PHU QUOC ISLAND</p></div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[9px] tracking-[.14em] text-white/65"><a href="#stay">THE STAYS</a><a href="#story">OUR PLACE</a><a href="#rituals">EXPERIENCES</a><a href="#enquire">ENQUIRIES</a></div>
            <a href="#top" className="flex items-center gap-2 text-[9px] tracking-[.14em] text-white/70">BACK TO TOP <ArrowUpRight size={13}/></a>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 text-[8px] tracking-[.13em] text-white/40 sm:flex-row"><span>PHU QUOC ISLAND · VIETNAM</span><span>© 2026 VERDE RETREAT</span></div>
        </div>
      </footer>
    </main>
  );
}

function UsersIcon() {
  return <Users size={13}/>;
}
