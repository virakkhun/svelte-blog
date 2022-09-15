<script lang="ts">
	import { onMount } from "svelte";


  onMount(() => {
    document.title =  'Contact'
  })
</script>
<div class="lg:h-auto h-screen">
  <div class="p-10 rounded-md mx-auto my-20 bg-dark border border-white/10 shadow-lg md:w-1/2 w-4/5">
    <p class="font-bold text-white">Contact Us</p>
    <div class="border-b border-white/20 my-4"></div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="email" class="text-white">Email</label>
        <input 
          type="email" 
          id="email"
          class="w-full border border-dark/20 hover:border-orange/20 transition-all py-3 px-4 placholder:text-gray-200 text-white bg-white/10 backdrop-blur-md rounded outline-none focus:border-orange/50"
          placeholder="Email"
          autocomplete="off"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="message" class="text-white">Message</label>
        <textarea 
          rows="5"
          type="message" 
          id="message"
          class="w-full border border-dark/20 hover:border-orange/20 transition-all py-3 px-4 placholder:text-gray-200 text-white bg-white/10 backdrop-blur-md rounded outline-none focus:border-orange/50"
          placeholder="Message"
          autocomplete="off"
        />
      </div>

      <button class="max-w-fit px-5 py-2 rounded bg-orange/50 backdrop-blur-md border border-white/20 text-white font-semibold bg-filter cursor-pointer">Submit</button>
    </div>
  </div>
</div>

<style>
  .bg-filter:hover {
    transition: all 300ms ease-out;
    filter: drop-shadow(0 0 1em #fa9053);
  }
</style>