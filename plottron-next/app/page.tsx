import Header from '@/components/Header'
import InfiniteCanvas from '@/components/InfiniteCanvas'
import { canvasData } from '@/data/canvasData'
import '@/styles/infinite-canvas.css'

export default function Home() {
  return (
    <main className="infinite-canvas-page">
      <Header />
      <InfiniteCanvas items={canvasData} />
    </main>
  )
}