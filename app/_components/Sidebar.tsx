export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64">
      <div className="flex h-full flex-col overflow-y-auto px-6 py-6">
        <div className="mt-10">
          <h1>AJ</h1>
          <h1>Ancheta</h1>
          <p className="text-main-secondary mb-8 mt-8">
            I&apos;m a <span className="text-coral font-bold">Front-End Developer</span> with a background in
            Astrophysics and passion for art.
          </p>
        </div>
        <div className="flex h-full grow flex-col justify-center">
          <ul className="text-2xl">
            <li className="my-2">Tools</li>
            <li className="my-2">Projects</li>
            <li className="my-2">About</li>
            <li className="my-2">Education</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
