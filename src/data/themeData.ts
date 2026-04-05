import SasukeBody from "@/assets/sasuke-body.png";
import SasukeEyes from "@/assets/eyes.png";
import SasukePoster from "@/assets/sasuke.png";

export type ThemeId = "sasuke";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  displayName: string;
  palette: {
    background: string;
    primary: string;
    text: string;
    muted: string;
  };
  character: {
    body: typeof SasukeBody;
    eyes: typeof SasukeEyes;
    alt: string;
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
    poster: typeof SasukePoster;
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
      primary: "#CFADE9",
      text: "#ECECEC",
      muted: "#94A3B8",
    },
    character: {
      body: SasukeBody,
      eyes: SasukeEyes,
      alt: "Sasuke",
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
      poster: SasukePoster,
      title: "Enter the Sharingan",
      subtitle: "",
    },
  },
};

export const themeOrder: ThemeId[] = ["sasuke"];
