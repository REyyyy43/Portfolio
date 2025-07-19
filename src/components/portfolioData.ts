// Datos de portafolio para Home
export const archivos = [
  '/src/assets/prueba_1.jpg',
  '/src/assets/prueba_2.jpg',
  '/src/assets/prueba_6.jpg',
  '/src/assets/prueba_4.jpg',
  '/src/assets/prueba_9.jpg',
  '/src/assets/prueba_10.jpg',
  '/src/assets/prueba_19.jpg',
  '/src/assets/prueba_17.jpg',
  '/src/assets/prueba_11.jpg',
  '/src/assets/prueba_12.jpg',
  '/src/assets/prueba_18.jpg',
  '/src/assets/prueba_8.jpg',
  '/src/assets/prueba_14.jpg',
  '/src/assets/prueba_16.jpg',
  '/src/assets/prueba_7.jpg',
  '/src/assets/prueba_15.jpg',
  '/src/assets/prueba_5.jpg',
  '/src/assets/prueba_3.jpg',
  '/src/assets/prueba_20.jpg',
  '/src/assets/prueba_21.jpg',
  '/src/assets/prueba_24.jpg',
];

export const paginasWeb = archivos.slice(0, 11);
export const disenoUXUI = [
  ...archivos.slice(11, 16),
  ...archivos.slice(16, 21).filter(img => !img.includes('prueba_3.jpg') && !img.includes('prueba_24.jpg')),
];
export const edicionVideo = [
  '/src/assets/prueba_22.mp4',
  '/src/assets/prueba_25.mp4',
  '/src/assets/prueba_26.mp4',
  '/src/assets/prueba_27.mp4',
  '/src/assets/prueba_28.mp4',
];

export const paginasWebLinks = [
  'https://github.com/REyyyy43/DollarsHub',
  'https://ecommerce-product-page-nine-nu.vercel.app',
  'https://docs.realworld.build',
  'https://safetyculture.com',
  'https://www.taskade.com',
  'https://github.com/REyyyy43/RexDotWork',
  'https://www.airwallex.com/us',
  'https://www.xero.com/au/',
  'https://rex-dot-work.vercel.app/',
  'https://rex-dot-work.vercel.app/',
  'https://www.gangain.com.ar/',
];
