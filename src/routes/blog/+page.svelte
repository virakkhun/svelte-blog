<script lang="ts">
	import Circle from "../../components/spinner/circle.svelte";
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';

  interface IData {
    userId: number
    id: number
    title: string
    body: string
  }

  let data: IData[] = []
  let y: number = 0
  let barIndicator = 0
  let isLoading = true

  const fetchData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    const res = await fetch(url, {
      method: 'GET'
    })

    const result = await res.json()

    if(result) {
      data = result
      isLoading = false
    }

  }

  const travelToTop = () => {
    document.title = 'Blog'
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  onMount(async () => {
    setTimeout(async () => {
      await fetchData()
    }, 2000);

    window.addEventListener('scroll', () => {
      y = window.scrollY
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      barIndicator = (winScroll / height) * 100
    })
  })
</script>

<div>
  <div class="relative">
    <div class="h-1 bg-white w-0 sticky top-12 z-100 filter" style:width={`${barIndicator}%`}></div>
    {#if isLoading}
      <div transition:fade="{{delay: 250, duration: 300}}" class="w-full justify-center items-center my-20">
        <div class="h-screen mx-auto w-20">
          <Circle />
        </div>
      </div>
    {/if}
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 w-4/5 mx-auto my-10">
      {#each data as d}
        <div class="flex flex-col gap-2 p-2 rounded-md bg-black/20 backdrop-blur-md border border-orange/30 hoverFilter max-h-auto truncate">
          <p class="bg-dark text-white rounded-full p-2 w-10 h-10 text-center border border-white/10 shadow-lg">{d.id}</p>
          <p class="font-bold text-white">{d.title}</p>
          <p>{d.body}</p>
        </div>      
      {/each}
    </div>
    {#if y > 200}
      <button class="rounded-md border border-blue/20 backdrop-blur-md fixed bottom-4 right-4 p-3 cursor-pointer z-100" on:click={travelToTop}>Top</button>
    {/if}
  </div>
</div>