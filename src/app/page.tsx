export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center bg-slate-50 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Hello world
        </h1>
        <h1 className="mt-4 dark:text-slate-400">
          The best platform to build serverless apps on in 2023
        </h1>

        <button className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-semibold text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-400 dark:text-slate-950">
          Sign in
        </button>
      </div>
    </div>
  )
}
