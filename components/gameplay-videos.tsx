export function GameplayVideos() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">See the Game in Action</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual YouTube embed */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Gameplay Video 1</p>
              {/* Actual implementation would use:
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/VIDEO_ID" 
                title="Gameplay Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual YouTube embed */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Gameplay Video 2</p>
              {/* Actual implementation would use YouTube iframe */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

