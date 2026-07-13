import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

/**
 * GoCsGallery
 * -----------------------------------------------------------------------
 * A text-link trigger (drop it wherever "Live site" currently sits on the
 * project card) that opens a fullscreen lightbox with a bottom filmstrip
 * for clicking through images/clips.
 *
 * Replace `defaultItems` with your real screenshots/GIFs — each item
 * needs `src` (url), `alt`, and a short `caption`. Mark motion clips with
 * `type: "gif"` to get the clip badge on the thumbnail.
 *
 * Usage:
 *   <GoCsGallery items={myImages} label="Gallery" />
 * -----------------------------------------------------------------------
 */

export interface GalleryItem {
  src: string | null;
  alt: string;
  caption: string;
  type?: "image" | "gif";
}

export interface GoCsGalleryProps {
  items?: GalleryItem[];
  label?: string;
}

const palette = {
  panel: "#1C1F26",
  panelHover: "#23262F",
  border: "#2E323C",
  accent: "#E8A33D",
  accentDim: "#8A6323",
  cyan: "#4FD1C5",
  text: "#EDEBE6",
  muted: "#8B8F98",
} as const;

const fontFace = `
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600&family=Inter:wght@400;500&display=swap');
`;

const defaultItems: GalleryItem[] = [
  { src: null, alt: "2D round playback view", caption: "2D round playback — powered by Konva", type: "gif" },
  { src: null, alt: "Team stats dashboard", caption: "Team stats dashboard", type: "image" },
  { src: null, alt: "Match notes panel", caption: "Shared match notes", type: "image" },
  { src: null, alt: "Architecture overview", caption: "Go backend → parser → MariaDB → React", type: "image" },
];

function Placeholder({ label, small }: { label: string; small?: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `repeating-linear-gradient(135deg, ${palette.panel}, ${palette.panel} 8px, ${palette.panelHover} 8px, ${palette.panelHover} 16px)`,
        color: palette.muted,
        fontFamily: "Inter, sans-serif",
        fontSize: small ? 9 : 12,
        letterSpacing: "0.03em",
        textTransform: "uppercase",
        textAlign: "center",
        padding: small ? 4 : 12,
        lineHeight: 1.3,
      }}
    >
      {label}
    </div>
  );
}

function Corners({ color = palette.cyan }: { color?: string }) {
  const armStyle: React.CSSProperties = {
    position: "absolute",
    width: 16,
    height: 16,
    borderColor: color,
  };
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <span style={{ ...armStyle, top: 8, left: 8, borderTop: "2px solid", borderLeft: "2px solid" }} />
      <span style={{ ...armStyle, top: 8, right: 8, borderTop: "2px solid", borderRight: "2px solid" }} />
      <span style={{ ...armStyle, bottom: 8, left: 8, borderBottom: "2px solid", borderLeft: "2px solid" }} />
      <span style={{ ...armStyle, bottom: 8, right: 8, borderBottom: "2px solid", borderRight: "2px solid" }} />
    </div>
  );
}

export default function GoCsGallery({ items = defaultItems, label = "Gallery" }: GoCsGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const filmstripRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => ((i ?? 0) - 1 + items.length) % items.length),
    [items.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => ((i ?? 0) + 1) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, prev, next]);

  useEffect(() => {
    if (!isOpen || !filmstripRef.current) return;
    const active = filmstripRef.current.querySelector('[data-active="true"]');
    active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [openIndex, isOpen]);

  const activeItem = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <style>{fontFace}</style>

      <button
        onClick={() => setOpenIndex(0)}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          color: palette.text,
          fontFamily: "Inter, sans-serif",
          fontSize: 14,
          cursor: "pointer",
          textDecoration: "underline",
          textUnderlineOffset: 3,
          opacity: 0.85,
        }}
      >
        {label}
      </button>

      {isOpen && activeItem && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,11,14,0.94)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "24px 24px 0",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: 900,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <button onClick={close} aria-label="Close" style={closeBtnStyle}>
              <X color={palette.text} size={18} />
            </button>

            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                border: `1px solid ${palette.accentDim}`,
                borderRadius: 6,
                overflow: "hidden",
                background: palette.panel,
              }}
            >
              {activeItem.src ? (
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              ) : (
                <Placeholder label={activeItem.alt} />
              )}
              <Corners />

              <button onClick={prev} aria-label="Previous image" style={navBtnStyle("left")}>
                <ChevronLeft color={palette.text} size={22} />
              </button>
              <button onClick={next} aria-label="Next image" style={navBtnStyle("right")}>
                <ChevronRight color={palette.text} size={22} />
              </button>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                color: palette.text,
                fontFamily: "'Chakra Petch', sans-serif",
              }}
            >
              <span style={{ fontWeight: 500, fontSize: 14 }}>{activeItem.caption}</span>
              <span style={{ color: palette.muted, fontSize: 13 }}>
                {String((openIndex as number) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div
            ref={filmstripRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              gap: 8,
              padding: "16px 4px",
              overflowX: "auto",
              maxWidth: 900,
              width: "100%",
              scrollbarWidth: "thin",
            }}
          >
            {items.map((item, i) => (
              <button
                key={i}
                data-active={i === openIndex}
                onClick={() => setOpenIndex(i)}
                aria-label={`View ${item.alt}`}
                style={{
                  position: "relative",
                  flex: "0 0 90px",
                  height: 54,
                  padding: 0,
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: palette.panel,
                  border: i === openIndex ? `2px solid ${palette.accent}` : `1px solid ${palette.border}`,
                  opacity: i === openIndex ? 1 : 0.55,
                  transition: "opacity 140ms ease, border-color 140ms ease",
                }}
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : (
                  <Placeholder label={item.alt} small />
                )}
                {item.type === "gif" && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 3,
                      left: 3,
                      display: "flex",
                      alignItems: "center",
                      background: "rgba(20,22,27,0.85)",
                      color: palette.accent,
                      borderRadius: 3,
                      padding: 2,
                    }}
                  >
                    <PlayCircle size={9} />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function navBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 10,
    transform: "translateY(-50%)",
    background: "rgba(20,22,27,0.75)",
    border: `1px solid ${palette.border}`,
    borderRadius: "50%",
    width: 38,
    height: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };
}

const closeBtnStyle: React.CSSProperties = {
  position: "absolute",
  top: -40,
  right: 0,
  background: palette.panel,
  border: `1px solid ${palette.border}`,
  borderRadius: "50%",
  width: 34,
  height: 34,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};