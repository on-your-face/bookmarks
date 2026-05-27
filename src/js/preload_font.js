export async function preloadFonts() {
   const fontsToLoad = ['1rem OpenSans', '1rem Lora-Regular'];

   await Promise.all(fontsToLoad.map((font) => document.fonts.load(font)));
}
