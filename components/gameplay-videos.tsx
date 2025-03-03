"use client"

import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "./language-provider"
import Autoplay from "embla-carousel-autoplay"

export function GameplayVideos() {
  const { t } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()
  
  const videos = [
    {
      id: "o7CHV8Osx-M",
      titleKey: "gameplay.video1",
      startTime: "1731"
    },
    {
      id: "nplaADtRwfQ",
      titleKey: "gameplay.video2",
      startTime: ""
    },
    {
      id: "rWAuJZXrClo",
      titleKey: "gameplay.video3",
      startTime: ""
    },
    {
      id: "ZQCg0qBKn1M",
      titleKey: "gameplay.video4",
      startTime: ""
    },
    {
      id: "8wHFON5eBm8",
      titleKey: "gameplay.video5",
      startTime: ""
    },
    {
      id: "IL_D1Vmqa5k",
      titleKey: "gameplay.video6",
      startTime: ""
    }
  ]

  // 创建自动播放插件实例 - 当鼠标悬停时将暂停
  const autoplayPlugin = Autoplay({
    delay: 5000,  // 5秒切换一次
    stopOnInteraction: false, // 用户交互后继续自动播放
    stopOnMouseEnter: true, // 鼠标悬停时暂停
    rootNode: (emblaRoot: any) => emblaRoot // 使轮播能够监听鼠标事件
  })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">{t("gameplay.title")}</h2>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true // 允许自由拖动，更平滑
            }}
            plugins={[autoplayPlugin]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src={`https://www.youtube.com/embed/${video.id}${video.startTime ? `?start=${video.startTime}` : ''}`}
                          title={t(video.titleKey)}
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium">{t(video.titleKey)}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <CarouselPrevious 
                className="h-12 w-12 rounded-full bg-white shadow-lg border-2 border-amber-500 pointer-events-auto"
                variant="outline"
              />
              <CarouselNext 
                className="h-12 w-12 rounded-full bg-white shadow-lg border-2 border-amber-500 pointer-events-auto"
                variant="outline"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

