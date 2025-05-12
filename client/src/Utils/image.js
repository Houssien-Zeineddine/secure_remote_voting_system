// Utils/image.js
export const API_HOST = "http://127.0.0.1:8000";
export function buildImageUrl(path) {
  if (!path) return null;
  // if the backend ever returns a full URL, don’t re-prefix
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  // ensure no leading slash duplications
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${API_HOST}/${p}`;
}
;