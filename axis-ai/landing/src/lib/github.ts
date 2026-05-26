const REPO = "Shaykhouna/axis-ai";

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

export interface LatestRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  assets: ReleaseAsset[];
}

export async function fetchLatestRelease(): Promise<LatestRelease | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    if (!res.ok) return null;
    return (await res.json()) as LatestRelease;
  } catch {
    return null;
  }
}

export interface DownloadCard {
  os: "macOS (Apple Silicon)" | "macOS (Intel)" | "Windows" | "Linux";
  filename: string;
  url: string;
  sizeMb: number;
}

// Maps the random ordering of release assets into UI-friendly cards.
export function extractDownloads(release: LatestRelease | null): DownloadCard[] {
  if (release === null) return [];
  const cards: DownloadCard[] = [];
  for (const a of release.assets) {
    const sizeMb = Math.round(a.size / 1024 / 1024 * 10) / 10;
    if (a.name.endsWith("aarch64.dmg")) {
      cards.push({ os: "macOS (Apple Silicon)", filename: a.name, url: a.browser_download_url, sizeMb });
    } else if (a.name.endsWith("x64.dmg")) {
      cards.push({ os: "macOS (Intel)", filename: a.name, url: a.browser_download_url, sizeMb });
    } else if (a.name.endsWith("x64-setup.exe")) {
      cards.push({ os: "Windows", filename: a.name, url: a.browser_download_url, sizeMb });
    } else if (a.name.endsWith("amd64.AppImage")) {
      cards.push({ os: "Linux", filename: a.name, url: a.browser_download_url, sizeMb });
    }
  }
  const order = ["macOS (Apple Silicon)", "macOS (Intel)", "Windows", "Linux"];
  cards.sort((a, b) => order.indexOf(a.os) - order.indexOf(b.os));
  return cards;
}