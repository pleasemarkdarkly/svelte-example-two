<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  body {
      @apply text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 font-sans;
      @apply leading-normal tracking-normal text-base font-normal break-words;
  }
  main {
      @apply px-8 py-16 mx-auto max-w-5xl;
  }
  button {
      @apply py-2 px-6 rounded border border-gray-500;
      @apply hover:border-gray-600 hover:shadow-md;
      @apply focus:outline-none;
  }
</style>
