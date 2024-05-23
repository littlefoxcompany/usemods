// title: Tailwind
// description: Utilities to use our utilities with their utilities
// lead: I heard you like classes

import plugin from 'tailwindcss/plugin';

const devices: Set<string> = new Set([
    'ios',
    'windows',
    'linux',
    'android',
    'mac',
    'chrome',
    'firefox',
    'safari',
    'edge',
    'mobile',
    'tablet',
    'desktop',
    'portrait',
    'landscape',
]);

export const modDevices = plugin(function ({ addVariant, e }) {
    devices.forEach((device) => {
        addVariant(device, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }: { className: string }) => {
                return `.${device} .${e(`${device}${separator}${className}`)}`;
            });
        });
    });
});