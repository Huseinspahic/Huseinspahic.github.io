// Lucide icon loader for inline SVGs
// Usage: lucideIcon('icon-name') returns SVG markup string
function lucideIcon(name, size = 22, color = 'currentColor') {
  // List of icons used (add more as needed)
  const icons = {
    briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 3v4M8 3v4m-6 8h20"/></svg>`,
    wrench: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench" viewBox="0 0 24 24"><path d="M14.7 6.3a5 5 0 0 0-6.6 6.6l-5.1 5.1a2 2 0 1 0 2.8 2.8l5.1-5.1a5 5 0 0 0 6.6-6.6z"/></svg>`,
    rocket: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket" viewBox="0 0 24 24"><path d="M4.5 16.5 3 21l4.5-1.5M19.5 16.5 21 21l-4.5-1.5"/><path d="M12 17v4"/><path d="M12 3c-2.5 2.5-7 7.61-7 11.5a7 7 0 0 0 14 0C19 10.61 14.5 5.5 12 3z"/><circle cx="12" cy="12" r="2"/></svg>`
  };
  return icons[name] || '';
}
