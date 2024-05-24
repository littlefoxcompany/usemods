<template>
    <main>
        <div class="hidden ios:flex">iOS</div>
        <div class="hidden android:flex">Android</div>
        <div class="hidden mac:flex">Mac</div>
        <div class="hidden windows:flex">Windows</div>
        <div class="hidden linux:flex">Linux</div>
        <div class="hidden chrome:flex">Chrome</div>
        <div class="hidden firefox:flex">Firefox</div>
        <div class="hidden safari:flex">Safari</div>
        <div class="hidden edge:flex">Edge</div>
        <div class="hidden mobile:flex">Mobile</div>
        <div class="hidden tablet:flex">Tablet</div>
        <div class="hidden desktop:flex">Desktop</div>
        <div class="hidden portrait:flex">Portrait</div>
        <div class="hidden landscape:flex">Landscape</div>
    </main>
</template>

<script setup lang="ts">
onMounted(() => {
    addDeviceClasses();
});
</script>
