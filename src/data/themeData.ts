import SasukeBody from "@/assets/sasuke-body.png";
import SasukeEyes from "@/assets/sasuke-eyes.png";
import NarutoBody from "@/assets/naruto-body.png";
import NarutoEyes from "@/assets/naruto-eyes.png";

export type ThemeId = "sasuke" | "naruto";
type ThemeImageAsset = typeof SasukeBody;

// Asset naming convention for every theme:
// - <theme>-body.png
// - <theme>-eyes.png
// Example:
// - sasuke-body.png / sasuke-eyes.png
// - naruto-body.png / naruto-eyes.png

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  displayName: string;
  palette: {
    background: string;
    backgroundSoft: string;
    backgroundDeep: string;
    panel: string;
    panelSoft: string;
    panelAlt: string;
    panelStrong: string;
    primary: string;
    primarySoft: string;
    text: string;
    muted: string;
    border: string;
    glow: string;
  };
  character: {
    body: ThemeImageAsset;
    eyes: ThemeImageAsset;
    alt: string;
    stageScale: number;
    leftEye: {
      top: number;
      left: number;
      width: number;
      height: number;
    };
    rightEye: {
      top: number;
      left: number;
      width: number;
      height: number;
    };
    maxOffset: number;
    offsetY: number;
  };
  soundtrack: {
    url: string;
    volume: number;
  };
  intro: {
    videoUrl: string;
    title: string;
    subtitle: string;
  };
}

export const themeData: Record<ThemeId, ThemeConfig> = {
  sasuke: {
    id: "sasuke",
    name: "sasuke",
    displayName: "Sasuke",
    palette: {
      background: "#0C172A",
      backgroundSoft: "#111F36",
      backgroundDeep: "#080D18",
      panel: "#101B30",
      panelSoft: "#141E32",
      panelAlt: "#16202F",
      panelStrong: "#090D18",
      primary: "#CFADE9",
      primarySoft: "#A58AB9",
      text: "#ECECEC",
      muted: "#94A3B8",
      border: "rgba(255,255,255,0.1)",
      glow: "rgba(207,173,233,0.14)",
    },
    character: {
      body: SasukeBody,
      eyes: SasukeEyes,
      alt: "Sasuke",
      stageScale: 1,
      leftEye: {
        top: 57,
        left: 30,
        width: 28,
        height: 28,
      },
      rightEye: {
        top: 60,
        left: 67,
        width: 28,
        height: 28,
      },
      maxOffset: 3,
      offsetY: -3,
    },
    soundtrack: {
      url: "https://res.cloudinary.com/animesh-jha/video/upload/v1692112832/portfolio/sasuke-theme_bae4pv.mp3",
      volume: 0.2,
    },
    intro: {
      videoUrl:
        "https://res.cloudinary.com/animesh-jha/video/upload/v1692903774/portfolio/Aimages_-_seirem_dnhojq.mp4",
      title: "Enter the Sharingan",
      subtitle: "",
    },
  },
  naruto: {
    id: "naruto",
    name: "naruto",
    displayName: "Naruto",
    palette: {
      background: "#0C1420",
      backgroundSoft: "#151F2E",
      backgroundDeep: "#0A1018",
      panel: "#1B2432",
      panelSoft: "#231C24",
      panelAlt: "#1D2637",
      panelStrong: "#121923",
      primary: "#F77F1F",
      primarySoft: "#FFB13B",
      text: "#F3E7C7",
      muted: "#B7AA8B",
      border: "rgba(247,127,31,0.22)",
      glow: "rgba(247,127,31,0.14)",
    },
    character: {
      body: NarutoBody,
      eyes: NarutoEyes,
      alt: "Naruto",
      stageScale: 1.7,
      leftEye: {
        top: 54,
        left: 44,
        width: 22,
        height: 22,
      },
      rightEye: {
        top: 53.5,
        left: 66,
        width: 22,
        height: 22,
      },
      maxOffset: 3,
      offsetY: -2,
    },
    soundtrack: {
      // Replace with Naruto theme audio URL once uploaded to Cloudinary.
      url: "",
      volume: 0.22,
    },
    intro: {
      // Replace with Naruto intro video URL once uploaded to Cloudinary.
      videoUrl: "https://res.cloudinary.com/animesh-jha/video/upload/v1782230637/naruto_intro_kimqij.mp4",
      title: "Enter the Hidden Leaf",
      subtitle: "",
    },
  },
};

export const themeOrder: ThemeId[] = ["sasuke", "naruto"];
