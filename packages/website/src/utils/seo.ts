/**
 * getCurrentUrl
 *
 * @returns {string}
 */
export const getCurrentUrl = (): string => {
  let currentUrl = import.meta.env.PUBLIC_APP_HOST_URL;

  if (window && (window.location.pathname || window.location.search)) {
    currentUrl = new URL(
      `${window.location.pathname}${window.location.search}`,
      currentUrl,
    );
  }

  return currentUrl.toString();
};
