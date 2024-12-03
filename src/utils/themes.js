// export function toggleTheme() {
//     const htmlElement = document.documentElement;
  
//     if (htmlElement.classList.contains('dark')) {
//       htmlElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     } else {
//       htmlElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     }
//   }
  
//   // Set initial theme
//   export function initializeTheme() {
//     if (
//       localStorage.getItem('theme') === 'dark' ||
//       (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
//     ) {
//       document.documentElement.classList.add('dark');
//     }
//   }