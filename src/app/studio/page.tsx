"use client";

import { storeSound } from "@/app/recoil/atoms/storeSound";
import narutoArt from "@/assets/naruto-body.png";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  RESUME,
  StudioPage,
  StudioProduct,
  studioAboutParas,
  studioBeliefs,
  studioCaseStudies,
  studioJobs,
  studioLabels,
  studioLeadCase,
  studioPages,
  studioProducts,
  studioServices,
  studioStats,
} from "@/data/studioData";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CursorFluid, Reveal, ScrambleText } from "./effects";
import "./studio.css";

const panel: CSSProperties = {
  border: "1px solid #1f1f26",
  background: "#0d0d10",
};

const VOTE_KEY = "studio-version-vote";

const SectionHead = ({
  tag,
  index,
  note,
}: {
  tag: string;
  index: string;
  note: string;
}) => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 8,
      }}
    >
      <span style={{ color: "#e5484d", fontSize: 14, letterSpacing: ".08em" }}>
        &lt;
        <ScrambleText text={tag} />
        &gt;
      </span>
      <span style={{ color: "#3d3b45", fontSize: 12, letterSpacing: ".2em" }}>
        {index} / 06
      </span>
    </div>
    <div
      style={{
        color: "#55525e",
        fontSize: 12,
        letterSpacing: ".14em",
        marginBottom: 48,
      }}
    >
      {note}
    </div>
  </>
);

const SectionClose = ({ tag, extra }: { tag: string; extra?: ReactNode }) => (
  <div style={{ color: "#3d3b45", fontSize: 13, marginTop: 60 }}>
    &lt;/{tag}&gt; {extra}
  </div>
);

export default function StudioPage() {
  const [page, setPage] = useState<StudioPage>("studio");
  const [navOpen, setNavOpen] = useState(false);
  const [product, setProduct] = useState<StudioProduct | null>(null);
  const [introDismissed, setIntroDismissed] = useState(false);
  const [sound, setSound] = useRecoilState(storeSound);
  const [vote, setVote] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVote(localStorage.getItem(VOTE_KEY));
  }, []);

  const go = (next: StudioPage, prod: StudioProduct | null = null) => {
    setPage(next);
    setProduct(prod);
    setNavOpen(false);
    scrollRef.current?.scrollTo(0, 0);
  };

  const activePage = page === "detail" ? "products" : page;
  const chIdx = studioPages.indexOf(activePage as (typeof studioPages)[number]);
  const chapterLabel = `0${chIdx + 1} — ${
    studioLabels[chIdx].charAt(0) + studioLabels[chIdx].slice(1).toLowerCase()
  }`;
  const detail = product ?? studioProducts[0];
  const prevChapter = chIdx > 0 ? studioPages[chIdx - 1] : null;
  const nextChapter =
    chIdx < studioPages.length - 1 ? studioPages[chIdx + 1] : null;

  // keyboard chapter navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && nextChapter) go(nextChapter);
      if (e.key === "ArrowLeft" && prevChapter) go(prevChapter);
      if (e.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextChapter, prevChapter]);

  const castVote = (version: "v1" | "v2") => {
    setVote(version);
    localStorage.setItem(VOTE_KEY, version);
    fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Portfolio Visitor",
        email: "visitor@arkionlabs.in",
        subject: "Portfolio version vote",
        content: `A viewer voted for ${
          version === "v1" ? "Version 1 (anime world)" : "Version 2 (the studio)"
        }.`,
      }),
    }).catch(() => {});
  };

  return (
    <div
      ref={scrollRef}
      className="studio-root fixed inset-0 z-[100] overflow-y-auto"
    >
      <CursorFluid />

      {/* splash */}
      {!introDismissed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background:
              "radial-gradient(ellipse 70% 55% at 50% 42%, #17090b 0%, #0a0a0c 65%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            textAlign: "center",
            padding: 24,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 120,
              height: 120,
              animation: "st-fadeUp .6s ease both",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid rgba(229,72,77,.5)",
                animation: "st-ringSpin 14s linear infinite",
                borderTopColor: "#e5484d",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 16,
                borderRadius: "50%",
                border: "1px solid rgba(229,72,77,.3)",
                animation: "st-ringSpin 9s linear infinite reverse",
                borderBottomColor: "#e5484d",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 44,
                borderRadius: "50%",
                background: "#e5484d",
                boxShadow: "0 0 34px rgba(229,72,77,.55)",
                animation: "st-pulse 2.4s ease-in-out infinite",
              }}
            />
          </div>
          <div style={{ animation: "st-fadeUp .6s ease .15s both" }}>
            <div
              style={{
                color: "#8a8794",
                fontSize: 12,
                letterSpacing: ".35em",
                marginBottom: 10,
              }}
            >
              {"// INITIALIZING"}
            </div>
            <div
              style={{
                color: "#e8e6e3",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: ".12em",
              }}
            >
              <ScrambleText text="ANIMESH JHA" />
            </div>
            <div
              style={{
                color: "#e5484d",
                fontSize: 13,
                letterSpacing: ".3em",
                marginTop: 8,
              }}
            >
              ARKION LABS
            </div>
          </div>
          <button
            onClick={() => setIntroDismissed(true)}
            className="st-splash-enter"
            style={{
              animation: "st-fadeUp .6s ease .3s both",
              background: "transparent",
              color: "#e8e6e3",
              border: "1px solid #33313b",
              padding: "14px 34px",
              fontSize: 14,
              letterSpacing: ".18em",
              cursor: "pointer",
            }}
          >
            [ ENTER THE STUDIO ]
          </button>
          <button
            onClick={() => setIntroDismissed(true)}
            className="st-skip"
            style={{
              animation: "st-skipIn .4s ease .9s both",
              background: "none",
              border: "none",
              color: "#55525e",
              fontSize: 12,
              letterSpacing: ".14em",
              cursor: "pointer",
            }}
          >
            skip intro →
          </button>
          <Link
            href="/"
            style={{
              animation: "st-skipIn .4s ease 1.2s both",
              color: "#3d3b45",
              fontSize: 11,
              letterSpacing: ".12em",
            }}
          >
            ← switch to version 1 (anime world)
          </Link>
        </div>
      )}

      {/* scanlines */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.015) 0 1px, transparent 1px 3px)",
        }}
      />

      <div style={{ minHeight: "100vh" }}>
        {/* top bar */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "14px 22px",
            background: "rgba(10,10,12,.85)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid #1a1a20",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button
              onClick={() => setNavOpen(true)}
              aria-label="Open navigation"
              className="st-burger lg:!hidden"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 6,
              }}
            >
              <span
                style={{ display: "block", width: 24, height: 2, background: "#e8e6e3" }}
              />
              <span
                style={{ display: "block", width: 16, height: 2, background: "#e5484d" }}
              />
              <span
                style={{ display: "block", width: 24, height: 2, background: "#e8e6e3" }}
              />
            </button>
            <button
              onClick={() => go("studio")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                letterSpacing: ".22em",
                color: "#8a8794",
                padding: 0,
              }}
            >
              <span style={{ color: "#e5484d" }}>AJ</span> {"// ARKION LABS"}
            </button>
          </div>

          {/* inline chapter nav — one click to anywhere (desktop) */}
          <nav className="hidden lg:flex" style={{ gap: 22, alignItems: "center" }}>
            {studioPages.map((pg, i) => (
              <button
                key={pg}
                onClick={() => go(pg)}
                className={`st-toplink${pg === activePage ? " active" : ""}`}
              >
                <span style={{ opacity: 0.55, marginRight: 6 }}>0{i + 1}</span>
                {studioLabels[i]}
              </button>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link
              href="/"
              title="Switch to Version 1 — the anime-themed portfolio"
              className="st-sound"
              style={{
                border: "1px solid #26242e",
                color: "#8a8794",
                fontSize: 12,
                padding: "6px 12px",
                letterSpacing: ".1em",
              }}
            >
              <span style={{ color: "#e5484d" }}>V2</span>
              <span className="hidden sm:inline"> · view V1</span>
            </Link>
            <button
              onClick={() => setSound(!sound)}
              className="st-sound"
              style={{
                background: "none",
                border: "1px solid #26242e",
                color: "#8a8794",
                fontSize: 12,
                padding: "6px 12px",
                cursor: "pointer",
                letterSpacing: ".1em",
              }}
            >
              {sound ? "♪ ON" : "♪ OFF"}
            </button>
          </div>
        </header>

        {/* sidebar nav (mobile / fallback) */}
        {navOpen && (
          <>
            <div
              onClick={() => setNavOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 70,
                background: "rgba(5,5,7,.7)",
                backdropFilter: "blur(3px)",
              }}
            />
            <nav
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 80,
                width: 300,
                maxWidth: "85vw",
                background: "#0d0d10",
                borderRight: "1px solid #1f1f26",
                padding: "28px 0",
                display: "flex",
                flexDirection: "column",
                animation: "st-fadeUp .25s ease both",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 26px 22px",
                  borderBottom: "1px solid #1a1a20",
                }}
              >
                <span style={{ fontSize: 12, letterSpacing: ".35em", color: "#e5484d" }}>
                  NAVIGATE
                </span>
                <button
                  onClick={() => setNavOpen(false)}
                  className="st-nav-close"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#8a8794",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                >
                  ✕
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", paddingTop: 14 }}>
                {studioPages.map((pg, i) => (
                  <button
                    key={pg}
                    onClick={() => go(pg)}
                    className="st-nav-item"
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 14,
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      padding: "14px 26px",
                      cursor: "pointer",
                      borderLeft: `2px solid ${
                        pg === activePage ? "#e5484d" : "transparent"
                      }`,
                    }}
                  >
                    <span style={{ fontSize: 11, color: "#55525e", letterSpacing: ".1em" }}>
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        letterSpacing: ".14em",
                        color: pg === activePage ? "#e5484d" : "#e8e6e3",
                      }}
                    >
                      {studioLabels[i]}
                    </span>
                  </button>
                ))}
              </div>
              <div
                style={{
                  marginTop: "auto",
                  padding: "22px 26px",
                  borderTop: "1px solid #1a1a20",
                  color: "#55525e",
                  fontSize: 11,
                  letterSpacing: ".12em",
                }}
              >
                {EMAIL}
              </div>
            </nav>
          </>
        )}

        <main style={{ maxWidth: 1080, margin: "0 auto", padding: "90px 24px 40px" }}>
          {/* ============ 01 STUDIO ============ */}
          {page === "studio" && (
            <div className="st-fade-up" key="studio">
              <SectionHead
                tag="studio"
                index="01"
                note="// for recruiters · clients · product users — pick your track below"
              />

              <div style={{ position: "relative", padding: "12px 0 56px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    right: -40,
                    width: 380,
                    height: 380,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(229,72,77,.14) 0%, transparent 65%)",
                    pointerEvents: "none",
                  }}
                />
                <div style={{ color: "#8a8794", fontSize: 14, marginBottom: 14 }}>
                  Founder, Arkion Labs <span style={{ color: "#3d3b45" }}>|</span> Senior
                  Full Stack Developer
                </div>
                <h1
                  style={{
                    margin: "0 0 26px",
                    fontSize: "clamp(38px, 7vw, 64px)",
                    fontWeight: 700,
                    letterSpacing: ".02em",
                    lineHeight: 1.1,
                    cursor: "default",
                  }}
                >
                  <ScrambleText text="ANIMESH" />
                  <br />
                  <span style={{ color: "#e5484d" }}>
                    <ScrambleText text="JHA" />
                  </span>
                  <span
                    style={{
                      animation: "st-blink 1.1s step-end infinite",
                      color: "#e5484d",
                    }}
                  >
                    _
                  </span>
                </h1>
                <p
                  style={{
                    maxWidth: 560,
                    margin: 0,
                    color: "#b8b5c0",
                    fontSize: 16,
                  }}
                >
                  I build enterprise SaaS platforms professionally — and AI products
                  independently, through{" "}
                  <span style={{ color: "#e8e6e3" }}>Arkion Labs</span>, my one-person
                  product studio.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                  gap: 14,
                  marginBottom: 56,
                }}
              >
                {studioStats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.07}>
                    <div className="st-card" style={{ ...panel, padding: "22px 20px" }}>
                      <div style={{ fontSize: 30, fontWeight: 700, color: "#e5484d" }}>
                        {s.num}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#8a8794",
                          letterSpacing: ".06em",
                          marginTop: 6,
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <button
                  onClick={() => go("products")}
                  className="st-btn-primary"
                  style={{
                    background: "#e5484d",
                    color: "#0a0a0c",
                    border: "1px solid #e5484d",
                    padding: "15px 26px",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    cursor: "pointer",
                  }}
                >
                  EXPLORE PRODUCTS →
                </button>
                <button
                  onClick={() => go("work")}
                  className="st-btn-outline"
                  style={{
                    background: "transparent",
                    color: "#e8e6e3",
                    border: "1px solid #33313b",
                    padding: "15px 26px",
                    fontSize: 14,
                    letterSpacing: ".1em",
                    cursor: "pointer",
                  }}
                >
                  SEE MY WORK
                </button>
                <button
                  onClick={() => go("services")}
                  className="st-btn-outline"
                  style={{
                    background: "transparent",
                    color: "#e8e6e3",
                    border: "1px solid #33313b",
                    padding: "15px 26px",
                    fontSize: 14,
                    letterSpacing: ".1em",
                    cursor: "pointer",
                  }}
                >
                  HIRE ME
                </button>
                <a
                  href={RESUME}
                  download
                  className="st-btn-outline"
                  style={{
                    background: "transparent",
                    color: "#e8e6e3",
                    border: "1px solid #33313b",
                    padding: "15px 26px",
                    fontSize: 14,
                    letterSpacing: ".1em",
                  }}
                >
                  ⤓ RESUME
                </a>
              </div>
              <SectionClose tag="studio" />
            </div>
          )}

          {/* ============ 02 ABOUT ============ */}
          {page === "about" && (
            <div className="st-fade-up" key="about">
              <SectionHead tag="about" index="02" note="// the human, not the resume" />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 44,
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 44,
                  }}
                >
                  <div style={{ maxWidth: 620 }}>
                    <h2
                      style={{
                        margin: "0 0 24px",
                        fontSize: "clamp(26px, 4vw, 36px)",
                        fontWeight: 700,
                        lineHeight: 1.25,
                      }}
                    >
                      I think in systems and products — and I build full specs before I
                      write code.
                    </h2>
                    {studioAboutParas.map((para, i) => (
                      <Reveal key={i} delay={i * 0.08}>
                        <p
                          style={{
                            color: "#b8b5c0",
                            margin: i === studioAboutParas.length - 1 ? 0 : "0 0 18px",
                          }}
                        >
                          {para}
                        </p>
                      </Reveal>
                    ))}
                  </div>
                  <div style={{ maxWidth: 360, width: "100%", justifySelf: "center" }}>
                    <Reveal delay={0.1}>
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "3/4",
                          position: "relative",
                          border: "1px solid #1f1f26",
                          borderRadius: 4,
                          background:
                            "radial-gradient(ellipse 80% 60% at 50% 40%, #17090b 0%, #0d0d10 70%)",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={narutoArt}
                          alt="Anime-style character art of the founder"
                          fill
                          style={{ objectFit: "contain", objectPosition: "bottom" }}
                          sizes="(max-width: 768px) 85vw, 360px"
                        />
                      </div>
                      <div
                        style={{
                          color: "#55525e",
                          fontSize: 11,
                          letterSpacing: ".12em",
                          marginTop: 10,
                        }}
                      >
                        {"// fig.01 — the founder, illustrated"}
                      </div>
                    </Reveal>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 14,
                  }}
                >
                  {studioBeliefs.map((b, i) => (
                    <Reveal key={b.tag} delay={i * 0.08}>
                      <div className="st-card" style={{ ...panel, padding: 20 }}>
                        <div
                          style={{
                            color: "#e5484d",
                            fontSize: 12,
                            letterSpacing: ".14em",
                            marginBottom: 8,
                          }}
                        >
                          {b.tag}
                        </div>
                        <div style={{ color: "#b8b5c0", fontSize: 13 }}>{b.text}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <SectionClose tag="about" />
            </div>
          )}

          {/* ============ 03 PRODUCTS (index) ============ */}
          {page === "products" && (
            <div className="st-fade-up" key="products">
              <SectionHead
                tag="products"
                index="03"
                note="// for people who want to use what I build"
              />

              <p style={{ maxWidth: 600, color: "#b8b5c0", margin: "0 0 44px" }}>
                Five products, built and run by Arkion Labs. Three are AI products you
                can use today or join early; two are open-core developer tools —
                self-host free, pay for hosted.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: 16,
                }}
              >
                {studioProducts.map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.07}>
                    <div
                      onClick={() => go("detail", p)}
                      className="st-prod-card"
                      style={
                        {
                          ...panel,
                          padding: 26,
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          gap: 14,
                          height: "100%",
                          "--accent": p.accent,
                          "--glow": p.glow,
                        } as CSSProperties
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span style={{ fontSize: 20, color: p.accent }}>{p.icon}</span>
                        <span
                          style={{
                            fontSize: 10,
                            letterSpacing: ".14em",
                            color: p.accent,
                            border: `1px solid ${p.accent}`,
                            padding: "3px 8px",
                          }}
                        >
                          {p.type}
                        </span>
                      </div>
                      <div>
                        <div
                          style={{ fontSize: 19, fontWeight: 700, letterSpacing: ".04em" }}
                        >
                          {p.name}
                        </div>
                        <div style={{ color: "#8a8794", fontSize: 13, marginTop: 6 }}>
                          {p.pitch}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "auto",
                          paddingTop: 10,
                          borderTop: "1px solid #1a1a20",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 11,
                            letterSpacing: ".1em",
                            color: p.statusColor,
                          }}
                        >
                          ● {p.status}
                        </span>
                        <span style={{ fontSize: 12, color: "#e8e6e3" }}>{p.cta} →</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <SectionClose tag="products" />
            </div>
          )}

          {/* ============ 03b PRODUCT DETAIL ============ */}
          {page === "detail" && (
            <div className="st-fade-up" key={`detail-${detail.id}`}>
              <button
                onClick={() => go("products")}
                className="st-ghost"
                style={{
                  background: "none",
                  border: "none",
                  color: "#8a8794",
                  fontSize: 13,
                  letterSpacing: ".1em",
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: 32,
                }}
              >
                ← back to /products
              </button>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 40,
                }}
              >
                <span
                  style={{ color: detail.accent, fontSize: 14, letterSpacing: ".08em" }}
                >
                  &lt;product id=&quot;{detail.id}&quot;&gt;
                </span>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: ".14em",
                    color: detail.accent,
                    border: `1px solid ${detail.accent}`,
                    padding: "3px 8px",
                  }}
                >
                  {detail.type}
                </span>
              </div>

              <div style={{ marginBottom: 52 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    flexWrap: "wrap",
                    marginBottom: 16,
                  }}
                >
                  <span style={{ fontSize: 28, color: detail.accent }}>
                    {detail.icon}
                  </span>
                  <h1
                    style={{
                      margin: 0,
                      fontSize: "clamp(30px, 5vw, 46px)",
                      fontWeight: 700,
                      cursor: "default",
                    }}
                  >
                    <ScrambleText text={detail.name} />
                  </h1>
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: ".1em",
                      color: detail.statusColor,
                      border: "1px solid #26242e",
                      padding: "5px 10px",
                    }}
                  >
                    ● {detail.status}
                  </span>
                </div>
                <p style={{ maxWidth: 620, color: "#b8b5c0", fontSize: 17, margin: 0 }}>
                  {detail.what}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 36,
                  maxWidth: 680,
                }}
              >
                {[
                  { tag: "why", body: detail.why },
                  { tag: "who", body: detail.who },
                ].map((sec, i) => (
                  <Reveal key={sec.tag} delay={i * 0.08}>
                    <div
                      style={{
                        color: detail.accent,
                        fontSize: 13,
                        letterSpacing: ".08em",
                        marginBottom: 10,
                      }}
                    >
                      &lt;{sec.tag}&gt;
                    </div>
                    <p style={{ color: "#b8b5c0", margin: 0 }}>{sec.body}</p>
                  </Reveal>
                ))}
                <Reveal delay={0.12}>
                  <div
                    style={{
                      color: detail.accent,
                      fontSize: 13,
                      letterSpacing: ".08em",
                      marginBottom: 10,
                    }}
                  >
                    &lt;how&gt;
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {detail.how.map((h) => (
                      <div
                        key={h}
                        style={{
                          display: "flex",
                          gap: 12,
                          color: "#b8b5c0",
                          fontSize: 14,
                        }}
                      >
                        <span style={{ color: detail.accent }}>›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.16}>
                  <div
                    style={{
                      border: "1px solid #26242e",
                      background: "#0d0d10",
                      padding: 28,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 18,
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: "#e8e6e3",
                          fontSize: 15,
                          fontWeight: 700,
                          letterSpacing: ".06em",
                        }}
                      >
                        {detail.tryHead}
                      </div>
                      <div style={{ color: "#8a8794", fontSize: 13, marginTop: 4 }}>
                        {detail.trySub}
                      </div>
                    </div>
                    <a
                      href={detail.ctaHref}
                      target={detail.ctaHref.startsWith("http") ? "_blank" : undefined}
                      rel={
                        detail.ctaHref.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="st-cta-link"
                      style={{
                        background: detail.accent,
                        color: "#0a0a0c",
                        padding: "13px 24px",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: ".1em",
                      }}
                    >
                      {detail.ctaBig} →
                    </a>
                  </div>
                </Reveal>
              </div>
              <SectionClose tag="product" />
            </div>
          )}

          {/* ============ 04 WORK ============ */}
          {page === "work" && (
            <div className="st-fade-up" key="work">
              <SectionHead
                tag="work"
                index="04"
                note="// for recruiters & clients — proof I can be trusted with serious systems"
              />

              {/* lead case study */}
              <div
                style={{
                  border: "1px solid rgba(229,72,77,.4)",
                  background:
                    "linear-gradient(180deg, rgba(229,72,77,.05), transparent 40%), #0d0d10",
                  padding: 34,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{ color: "#e5484d", fontSize: 12, letterSpacing: ".14em" }}
                  >
                    ★ FEATURED CASE STUDY
                  </span>
                  <span
                    style={{ color: "#55525e", fontSize: 11, letterSpacing: ".1em" }}
                  >
                    {studioLeadCase.status}
                  </span>
                </div>
                <h2
                  style={{
                    margin: "0 0 22px",
                    fontSize: "clamp(24px, 4vw, 32px)",
                    fontWeight: 700,
                  }}
                >
                  {studioLeadCase.title}
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: 12,
                    marginBottom: 26,
                  }}
                >
                  {studioLeadCase.metrics.map((m, i) => (
                    <Reveal key={m.label} delay={i * 0.08}>
                      <div style={{ border: "1px solid #26242e", padding: 16 }}>
                        <div style={{ color: "#e5484d", fontSize: 22, fontWeight: 700 }}>
                          {m.num}
                        </div>
                        <div style={{ color: "#8a8794", fontSize: 11, marginTop: 4 }}>
                          {m.label}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 22,
                  }}
                >
                  {studioLeadCase.sections.map((s, i) => (
                    <Reveal key={s.tag} delay={0.1 + i * 0.05}>
                      <div
                        style={{
                          color: "#e5484d",
                          fontSize: 12,
                          letterSpacing: ".08em",
                          marginBottom: 6,
                        }}
                      >
                        &lt;{s.tag}&gt;
                      </div>
                      <div style={{ color: "#b8b5c0", fontSize: 13 }}>{s.text}</div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* other case studies */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: 16,
                  marginBottom: 56,
                }}
              >
                {studioCaseStudies.map((c, i) => (
                  <Reveal key={c.name} delay={i * 0.08}>
                    <div
                      className="st-card"
                      style={{ ...panel, padding: 26, height: "100%" }}
                    >
                      <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>
                        {c.name}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          fontSize: 13,
                        }}
                      >
                        <div>
                          <span style={{ color: "#e5484d" }}>problem:</span>{" "}
                          <span style={{ color: "#b8b5c0" }}>{c.problem}</span>
                        </div>
                        <div>
                          <span style={{ color: "#e5484d" }}>my role:</span>{" "}
                          <span style={{ color: "#b8b5c0" }}>{c.role}</span>
                        </div>
                        <div>
                          <span style={{ color: "#e5484d" }}>impact:</span>{" "}
                          <span style={{ color: "#b8b5c0" }}>{c.impact}</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* experience timeline */}
              <div
                style={{
                  color: "#e5484d",
                  fontSize: 14,
                  letterSpacing: ".08em",
                  marginBottom: 26,
                }}
              >
                &lt;experience&gt;
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {studioJobs.map((j, i) => (
                  <Reveal key={j.company} delay={i * 0.06}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "110px 1fr",
                        gap: 20,
                        padding: "20px 0",
                        borderBottom: "1px solid #1a1a20",
                      }}
                    >
                      <div
                        style={{
                          color: "#55525e",
                          fontSize: 12,
                          letterSpacing: ".06em",
                          paddingTop: 2,
                        }}
                      >
                        {j.years}
                      </div>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            gap: 12,
                            alignItems: "baseline",
                            flexWrap: "wrap",
                          }}
                        >
                          <span style={{ fontWeight: 700, fontSize: 15 }}>
                            {j.company}
                          </span>
                          <span style={{ color: "#8a8794", fontSize: 13 }}>{j.role}</span>
                        </div>
                        <div style={{ color: "#8a8794", fontSize: 13, marginTop: 6 }}>
                          {j.blurb}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6,
                            marginTop: 10,
                          }}
                        >
                          {j.skills.map((sk) => (
                            <span
                              key={sk}
                              style={{
                                fontSize: 10,
                                letterSpacing: ".08em",
                                color: "#8a8794",
                                border: "1px solid #26242e",
                                padding: "3px 8px",
                              }}
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <SectionClose tag="work" />
            </div>
          )}

          {/* ============ 05 SERVICES ============ */}
          {page === "services" && (
            <div className="st-fade-up" key="services">
              <SectionHead
                tag="services"
                index="05"
                note="// for clients — hire the studio, not just the engineer"
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: 16,
                  marginBottom: 52,
                }}
              >
                <Reveal>
                  <div
                    className="st-card"
                    style={{
                      ...panel,
                      padding: 30,
                      borderTop: "2px solid #e5484d",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        color: "#e5484d",
                        fontSize: 12,
                        letterSpacing: ".14em",
                        marginBottom: 14,
                      }}
                    >
                      MODEL 01 — SCOPED PROJECTS
                    </div>
                    <h3 style={{ margin: "0 0 14px", fontSize: 20 }}>
                      Full builds, end to end
                    </h3>
                    <p style={{ color: "#b8b5c0", fontSize: 13, margin: "0 0 18px" }}>
                      AI products, SaaS platforms, backend architecture — spec&apos;d,
                      built, and shipped as a complete engagement. No public fixed price;
                      every serious build starts with a conversation.
                    </p>
                    <div style={{ color: "#e8e6e3", fontSize: 14, fontWeight: 700 }}>
                      → let&apos;s talk scope
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div
                    className="st-card"
                    style={{
                      ...panel,
                      padding: 30,
                      borderTop: "2px solid #46c98c",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        color: "#46c98c",
                        fontSize: 12,
                        letterSpacing: ".14em",
                        marginBottom: 14,
                      }}
                    >
                      MODEL 02 — HOURLY / RETAINER
                    </div>
                    <h3 style={{ margin: "0 0 14px", fontSize: 20 }}>
                      Ongoing &amp; advisory
                    </h3>
                    <p style={{ color: "#b8b5c0", fontSize: 13, margin: "0 0 18px" }}>
                      Code review, technical advisory, smaller features, or ongoing
                      support — billed hourly or as a monthly retainer.
                    </p>
                    <div style={{ color: "#e8e6e3", fontSize: 14, fontWeight: 700 }}>
                      $40/hr{" "}
                      <span style={{ color: "#8a8794", fontWeight: 400 }}>
                        · retainers on request
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div
                style={{
                  color: "#e5484d",
                  fontSize: 14,
                  letterSpacing: ".08em",
                  marginBottom: 22,
                }}
              >
                &lt;offerings&gt;
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 14,
                  marginBottom: 52,
                }}
              >
                {studioServices.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.07}>
                    <div
                      className="st-card"
                      style={{
                        border: "1px solid #1f1f26",
                        padding: 20,
                        height: "100%",
                      }}
                    >
                      <div style={{ color: "#e5484d", fontSize: 16, marginBottom: 10 }}>
                        {s.icon}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
                        {s.name}
                      </div>
                      <div style={{ color: "#8a8794", fontSize: 12 }}>{s.desc}</div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div
                  style={{
                    border: "1px solid #26242e",
                    background: "#0d0d10",
                    padding: 30,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 18,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>
                      Have something in mind?
                    </div>
                    <div style={{ color: "#8a8794", fontSize: 13, marginTop: 4 }}>
                      Email me the brief — I reply with questions, not a sales pitch.
                    </div>
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="st-email-btn"
                    style={{
                      background: "#e5484d",
                      color: "#0a0a0c",
                      padding: "14px 26px",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: ".1em",
                    }}
                  >
                    EMAIL THE BRIEF →
                  </a>
                </div>
              </Reveal>
              <SectionClose tag="services" />
            </div>
          )}

          {/* ============ 06 THANKS ============ */}
          {page === "thanks" && (
            <div className="st-fade-up" key="thanks">
              <SectionHead
                tag="thanks"
                index="06"
                note="// choose how this continues"
              />

              <h2
                style={{
                  margin: "0 0 40px",
                  fontSize: "clamp(26px, 4vw, 38px)",
                  fontWeight: 700,
                  maxWidth: 640,
                  lineHeight: 1.3,
                }}
              >
                The portfolio ends here.
                <br />
                <span style={{ color: "#e5484d" }}>
                  The conversation doesn&apos;t.
                </span>
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 16,
                  marginBottom: 56,
                }}
              >
                {[
                  {
                    num: "01",
                    path: "/products",
                    title: "Build Products",
                    desc: "Try what Arkion Labs is shipping — or get in early.",
                    goTo: "products" as StudioPage,
                  },
                  {
                    num: "02",
                    path: "/work",
                    title: "Lead Teams",
                    desc: "Hiring full-time? The case studies are the interview.",
                    goTo: "work" as StudioPage,
                  },
                  {
                    num: "03",
                    path: "/services",
                    title: "Refine Experiences",
                    desc: "Bring a brief — scoped builds or ongoing advisory.",
                    goTo: "services" as StudioPage,
                  },
                ].map((card, i) => (
                  <Reveal key={card.num} delay={i * 0.08}>
                    <button
                      onClick={() => go(card.goTo)}
                      className="st-thanks-card"
                      style={{
                        textAlign: "left",
                        background: "#0d0d10",
                        border: "1px solid #1f1f26",
                        padding: 28,
                        cursor: "pointer",
                        color: "#e8e6e3",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          color: "#e5484d",
                          fontSize: 12,
                          letterSpacing: ".14em",
                          marginBottom: 12,
                        }}
                      >
                        {card.num} → {card.path}
                      </div>
                      <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>
                        {card.title}
                      </div>
                      <div style={{ color: "#8a8794", fontSize: 12 }}>{card.desc}</div>
                    </button>
                  </Reveal>
                ))}
              </div>

              {/* version poll */}
              <Reveal>
                <div
                  style={{
                    border: "1px solid rgba(229,72,77,.35)",
                    background:
                      "linear-gradient(180deg, rgba(229,72,77,.05), transparent 50%), #0d0d10",
                    padding: 28,
                    marginBottom: 56,
                  }}
                >
                  <div
                    style={{
                      color: "#e5484d",
                      fontSize: 12,
                      letterSpacing: ".14em",
                      marginBottom: 8,
                    }}
                  >
                    &lt;one last question&gt;
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>
                    Which version did you like more?
                  </div>
                  <div style={{ color: "#8a8794", fontSize: 13, marginBottom: 18 }}>
                    This portfolio ships in two flavours — your pick decides which one
                    survives.
                  </div>
                  {vote ? (
                    <div style={{ color: "#4cc38a", fontSize: 13, letterSpacing: ".08em" }}>
                      ✓ vote logged — you picked{" "}
                      {vote === "v1" ? "Version 1 (anime world)" : "Version 2 (the studio)"}
                      . Thank you!
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                      <button className="st-vote" onClick={() => castVote("v1")}>
                        <span style={{ color: "#e5484d" }}>V1</span> — anime world
                        <div style={{ color: "#55525e", fontSize: 11, marginTop: 4 }}>
                          particles, characters, theme music
                        </div>
                      </button>
                      <button className="st-vote" onClick={() => castVote("v2")}>
                        <span style={{ color: "#e5484d" }}>V2</span> — the studio
                        <div style={{ color: "#55525e", fontSize: 11, marginTop: 4 }}>
                          terminal aesthetic, chapters, scanlines
                        </div>
                      </button>
                      <Link
                        href="/"
                        className="st-ghost"
                        style={{
                          alignSelf: "center",
                          color: "#8a8794",
                          fontSize: 12,
                          letterSpacing: ".1em",
                        }}
                      >
                        revisit version 1 first →
                      </Link>
                    </div>
                  )}
                </div>
              </Reveal>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a
                  href={`mailto:${EMAIL}`}
                  className="st-contact-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid #26242e",
                    padding: "12px 18px",
                    fontSize: 13,
                    color: "#e8e6e3",
                  }}
                >
                  <span style={{ color: "#e5484d" }}>@</span> {EMAIL}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="st-contact-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid #26242e",
                    padding: "12px 18px",
                    fontSize: 13,
                    color: "#e8e6e3",
                  }}
                >
                  <span style={{ color: "#e5484d" }}>in</span> animeshjha97
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="st-contact-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid #26242e",
                    padding: "12px 18px",
                    fontSize: 13,
                    color: "#e8e6e3",
                  }}
                >
                  <span style={{ color: "#e5484d" }}>&lt;/&gt;</span> AnimeshJha97
                </a>
                <a
                  href={RESUME}
                  download
                  className="st-contact-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid #26242e",
                    padding: "12px 18px",
                    fontSize: 13,
                    color: "#e8e6e3",
                  }}
                >
                  <span style={{ color: "#e5484d" }}>⤓</span> resume.pdf
                </a>
              </div>
              <SectionClose
                tag="thanks"
                extra={<span style={{ color: "#26242e" }}>{"// EOF"}</span>}
              />
            </div>
          )}

          {/* prev / next chapter — always one click away */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 14,
              marginTop: 48,
              paddingTop: 24,
              borderTop: "1px solid #1a1a20",
            }}
          >
            {prevChapter ? (
              <button className="st-step" onClick={() => go(prevChapter)}>
                ← 0{studioPages.indexOf(prevChapter) + 1} /{prevChapter}
              </button>
            ) : (
              <span />
            )}
            {nextChapter ? (
              <button className="st-step" onClick={() => go(nextChapter)}>
                next: 0{studioPages.indexOf(nextChapter) + 1} /{nextChapter} →
              </button>
            ) : (
              <button className="st-step" onClick={() => go("studio")}>
                ↺ back to /studio
              </button>
            )}
          </div>
          <div
            className="hidden lg:block"
            style={{
              color: "#3d3b45",
              fontSize: 11,
              letterSpacing: ".12em",
              marginTop: 14,
              textAlign: "right",
            }}
          >
            tip: ← / → arrow keys switch chapters
          </div>
        </main>

        <footer
          style={{
            borderTop: "1px solid #1a1a20",
            padding: "22px 24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            maxWidth: 1080,
            margin: "0 auto",
            color: "#3d3b45",
            fontSize: 11,
            letterSpacing: ".12em",
          }}
        >
          <span>© 2026 ANIMESH JHA · ARKION LABS</span>
          <span>{chapterLabel}</span>
        </footer>
      </div>
    </div>
  );
}
