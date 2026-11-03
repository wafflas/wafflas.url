"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
} from "react";

const HomeIntroPlaybackContext = createContext<(() => boolean) | null>(null);

export function HomeIntroPlaybackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasPlayed = useRef(false);

  const claimPlayback = useCallback(() => {
    if (hasPlayed.current) return false;

    hasPlayed.current = true;
    return true;
  }, []);

  return (
    <HomeIntroPlaybackContext.Provider value={claimPlayback}>
      {children}
    </HomeIntroPlaybackContext.Provider>
  );
}

export function useHomeIntroPlayback() {
  const claimPlayback = useContext(HomeIntroPlaybackContext);

  if (!claimPlayback) {
    throw new Error(
      "useHomeIntroPlayback must be used inside HomeIntroPlaybackProvider",
    );
  }

  return claimPlayback;
}
