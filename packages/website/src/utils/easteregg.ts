import { t } from 'i18next';

/**
 * logDecoration
 */
export const logDecoration = () => {
  const message = `
  Hello There ! 👋\n
  ${t('easteregg.log.message')}\n
  https://github.com/AnTSaSk\n
  https://www.linkedin.com/in/alexis-besson-web/\n
  `;
  const styles = ['font-size: 12px', 'color: #117340'].join(';');

  console.log('%c%s', styles, message);
};
