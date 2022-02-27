<template>
  <form
    action="#"
    class="flex flex-col items-start gap-4 p-3 mx-auto md:w-6/12"
  >
    <h1 class="text-xl font-semibold text-slate-700">Login</h1>

    <div class="flex flex-col w-full">
      <label for="name">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="bg-slate-50 rounded-sm w-full"
      />
    </div>

    <div class="flex flex-col w-full">
      <label for="name">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="bg-slate-50 rounded-sm w-full"
      />
    </div>

    <button class="button bg-indigo-500 py-2 px-4 rounded text-white">
      Login
    </button>
  </form>
</template>
