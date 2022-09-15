<script lang="ts">
	import { onMount } from "svelte";
  import HomeBanner from '../assets/images/home-banner.svg'

  onMount(() => {
    document.title = 'Home'
  })
</script>

<div>
  <div class="mx-auto lg:w-1/2 md:w-3/4 w-4/5 my-10 flex justify-center items-center flex-col gap-10 lg:h-auto h-screen">
    <img src="{HomeBanner}" alt="HomeBanner" class="hoverFilter w-3/4 mx-auto">
    <p class="text-white font-bold text-2xl hoverFilter">Welcome to Svelte Blog</p>
    <p class="text-white text-center">
      This is the blog website to post everything about 
      <a href="https://svelte.dev/" class="text-orange-500 font-bold">Svelte</a>
    </p>
    <p class="text-center px-10 text-white">Everyone can share a post about Svelte, Svelte is the most love language of all time because of its simplicity and powerful.</p>
  </div>
</div>
