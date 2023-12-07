import Image from 'next/image'
import { getProjects } from './_utils/getProjects'
import { Sidebar } from './_components/Sidebar'

export default function Home() {
  // const projects = await getProjects()
  // console.log(projects)
  return (
    <main>
      <Sidebar />
    </main>
  )
}
