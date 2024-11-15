import { Button } from "~/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">I'm Bored</h1>
        <Button variant={"glow"} size={"lg"}>Click me</Button>
      </div>
    </main>
  )
}
