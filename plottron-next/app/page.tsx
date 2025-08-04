import Header from '../components/Header'
import AcceleratorHub from '../components/AcceleratorHub'
import { canvasData } from '../data/canvasData'

export default function Home() {
  return (
    <>
      <Header />
      <main className="accelerator-page">
        <AcceleratorHub items={canvasData} />
      </main>
    </>
  )
}