export const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

export const capitalizeTitle = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const BASE_URL = "http://13.36.171.143:8000";
export default function getProfilePictureUrl(path) {
  if (!path) return null;
  return `${BASE_URL}/storage/${path}`;
}