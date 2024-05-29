<template>
    <main>
        <div class="hidden ios:flex">Sweet iPhone</div>
        <div class="hidden android:flex">Cool Android</div>
        <div class="hidden mac:flex">Oh expensive Mac</div>
        <div class="hidden windows:flex">Are you at work?</div>
        <div class="hidden linux:flex">Hi Jess</div>
        <div class="hidden chrome:flex">Nice Chrome</div>
        <div class="hidden safari:flex">Safari how hip</div>
        <div class="hidden edge:flex">You use Edge? Like on purpose?</div>
        <div class="hidden firefox:flex">Jess is back</div>
        <div class="hidden mobile:flex">Some kinda mobile</div>
        <div class="hidden tablet:flex">Some kinda tablet</div>
        <div class="hidden desktop:flex">Some kinda desktop</div>
        <div class="hidden bot:flex">Bot</div>
        <div class="hidden human:flex">Not a Bot</div>
    </main>
</template>

<script setup lang="ts">
import { isIos, isAndroid, isMac, isWindows, isLinux, isChrome, isSafari, isEdge, isFirefox, isMobile, isTablet, isDesktop, isBot, isHuman } from '@/utils/detect'

// Please don't write code like this
console.log(isIos())
console.log(isAndroid())
console.log(isMac())
console.log(isWindows())
console.log(isLinux())
console.log(isChrome())
console.log(isSafari())
console.log(isFirefox())
console.log(isEdge())
console.log(isMobile())
console.log(isTablet())
console.log(isDesktop())
console.log(isBot())
console.log(isHuman())

