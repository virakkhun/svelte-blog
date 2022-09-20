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
  let currentPost: string | null = ''

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

    setTimeout(() => {
      if(typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if(entry.isIntersecting) {
              entry.target.classList.toggle('show', entry.isIntersecting)
            }
          })
        }, {
          threshold: 0.5
        })
    
        document.querySelectorAll('article').forEach(sec => {
          observer.observe(sec)
        })
      }
    }, 2500);

  })
</script>

<div>
  <div class="relative">
    <div class="h-0.5 bg-white w-0 sticky top-0 z-100 bg-filter" style:width={`${barIndicator}%`}></div>
    {#if isLoading}
      <div transition:fade="{{delay: 250, duration: 300}}" class="w-full justify-center items-center my-20">
        <div class="h-screen mx-auto w-20">
          <Circle />
        </div>
      </div>
    {/if}
    <div class="flex items-start gap-4 mx-auto my-10 w-4/5">
      <div class="w-4/5 flex flex-col gap-3">
        {#each data as d}
          <article class="flex flex-col gap-2 p-2 rounded-md bg-black/20 backdrop-blur-md border border-orange/30 hoverFilter max-h-auto translate-x-20 article">
            <h5 id={String(d.id)} class="bg-dark text-white rounded-full p-2 w-10 h-10 text-center border border-white/10 shadow-lg">{d.id}</h5>
            <p class="font-bold text-white">{d.title}</p>
            <p class="text-gray-300">{d.body}</p>
          </article>      
        {/each}
      </div>
      <div class="w-1/5 sticky top-12 grid grid-cols-5 gap-2">
        {#each data as d}
          <a href={`#${d.id}`} class="{currentPost === String(d.id) ? 'bg-white text-orange' : 'text-white no-underline'}">{d.id}</a>
        {/each}
      </div>
    </div>
    {#if y > 200}
      <button class="rounded-md border border-blue/20 backdrop-blur-md fixed bottom-4 right-4 p-3 cursor-pointer z-100" on:click={travelToTop}>Top</button>
    {/if}
  </div>
</div>

<style>
  .bg-filter {
    transition: all 100ms ease-out;
	  filter: drop-shadow(0 0 2rem #ff0ffe);
  }
</style>

