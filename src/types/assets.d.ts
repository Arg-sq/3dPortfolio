declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.gltf" {
  const src: string;
  export default src;
}

declare module "ityped" {
  export function init(
    el: HTMLElement | null,
    options: {
      strings: string[];
      showCursor?: boolean;
      cursorChar?: string;
      typeSpeed?: number;
      backSpeed?: number;
      backDelay?: number;
      startDelay?: number;
      loop?: boolean;
      disableBackTyping?: boolean;
      onFinished?: () => void;
    }
  ): void;
}
