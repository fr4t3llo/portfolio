import {
  siAndroid,
  siApple,
  siCloudinary,
  siCplusplus,
  siDart,
  siDocker,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGooglecloud,
} from "simple-icons";

const icons = {
  flutter: siFlutter,
  dart: siDart,
  firebase: siFirebase,
  googlecloud: siGooglecloud,
  cloudinary: siCloudinary,
  git: siGit,
  cplusplus: siCplusplus,
  docker: siDocker,
  figma: siFigma,
  android: siAndroid,
  apple: siApple,
} as const;

export type TechKey = keyof typeof icons;

export default function TechIcon({ name }: { name: TechKey }) {
  const icon = icons[name];
  return (
    <li
      title={icon.title}
      className="flex size-[46px] items-center justify-center rounded-sm bg-surface"
    >
      <svg
        role="img"
        aria-label={icon.title}
        viewBox="0 0 24 24"
        className="size-5"
        fill={`#${icon.hex}`}
      >
        <path d={icon.path} />
      </svg>
    </li>
  );
}
