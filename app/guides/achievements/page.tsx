import Image from "next/image"
import Link from "next/link"
import { Trophy, ArrowLeft } from "lucide-react"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 pt-20">
      <div className="container py-12">
        <Link href="/guides" className="flex items-center mb-6 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>返回指南</span>
        </Link>

        <h1 className="text-4xl font-bold mb-8">游戏成就</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Trophy className="h-6 w-6 text-amber-600 mr-2" />
            成就列表与解锁方法
          </h2>
          
          <p className="mb-6">
            《A Game About Digging A Hole》包含10个可解锁的成就。以下是所有成就及其获取方法，祝你好运！
          </p>

          <div className="space-y-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">BOOOOM!</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 使用100个炸药</p>
              <p className="text-gray-700">
                您可以在升级台花费$100购买炸药。同时在挖掘过程中，隐藏的矿井和宝箱也会提供炸药。
                炸药可以帮助您快速清理大面积区域，特别是在寻找矿石或需要快速挖掘时非常有用。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">I AM SHOVEL !</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 挖掘4000次</p>
              <p className="text-gray-700">
                通过不断挖掘和升级您的铲子来提高挖掘速度，这一成就需要持续的努力和时间投入。
                升级铲子是达成这一成就的关键，因为更高级的铲子能够更快地积累挖掘次数。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Long Fall</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 连续下落至少4秒</p>
              <p className="text-gray-700">
                直接向下挖掘一个深洞，然后跳入其中即可完成此成就。请注意，从高处跳下会造成摔落伤害，
                确保您有足够的生命值或在接近游戏结束时尝试此成就。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Moneymaker</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 赚取$20,000</p>
              <p className="text-gray-700">
                通过出售钻石和其他贵重矿石可以赚取最多的钱。升级您的背包空间，
                这样您可以一次携带更多物品去售卖，从而更快地积累财富。
                深层区域通常有更多贵重矿石，所以深入挖掘是关键。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Old Crate</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 打开车库中的箱子</p>
              <p className="text-gray-700">
                您需要找到两把钥匙才能解锁车库中的箱子。这些钥匙埋在您的草坪下。
                当您接近钥匙时，信号会发出提示音，告诉您正在接近重要物品。
                寻找钥匙的策略可参考我们的<Link href="/guides/strategies" className="text-blue-600 hover:underline">策略指南</Link>。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Rainbow</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 收集5个彩虹矿石</p>
              <p className="text-gray-700">
                彩虹矿石是游戏中最难找到的矿石之一。很多玩家在第一次游戏中无法找到任何彩虹矿石，
                因此您可能需要进行第二轮游戏才能获得它们。彩虹矿石通常出现在较深的层次，
                所以深入挖掘并仔细搜索每个区域是关键。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Stonemason</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 收集100块石头</p>
              <p className="text-gray-700">
                石头是您在后院开始挖掘时发现的闪亮白色矿石，获取这一成就相对简单。
                在游戏早期阶段就可以专注于收集石头，很快就能达到100块的目标。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">The Fastest</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 在30分钟内完成游戏</p>
              <p className="text-gray-700">
                通过速通游戏来获得这一成就，只需专注于挖掘并足够深入找到鼹鼠。之后，
                在30分钟内跑向宝藏即可获得此成就。这一成就需要熟练掌握游戏机制和优秀的规划能力。
                查看我们的<Link href="/guides/speedrun" className="text-blue-600 hover:underline">速通技巧</Link>获取更多帮助。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">TREASURE</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 在躲避鼹鼠的同时找到宝藏</p>
              <p className="text-gray-700">
                这是游戏的主要目标。通过挖掘足够深直到找到鼹鼠区域，然后巧妙地绕过它们找到宝藏。
                关键是要有耐心并观察鼹鼠的移动模式，等待合适的时机行动。
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Wasted</h3>
              <p className="mb-2"><strong>解锁条件</strong>: 浪费50个矿石</p>
              <p className="text-gray-700">
                当您的背包已满时，您可以点击任何矿石来浪费它。您需要这样做50次才能获得此成就。
                虽然您不能对贵重矿石执行此操作，但可以在花园的顶层周围挖掘找到石头，
                然后在背包已满的情况下点击它们，这样可以在不造成重大损失的情况下完成成就。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">成就模式</h2>
          <p className="mb-4">
            在第一次通关游戏后，您还可以解锁成就模式，在车库中会显示所有上述列出的成就。
            这为您提供了追踪进度的便捷方式，让您清楚地了解还需要完成哪些成就。
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="font-medium">提示：完成所有成就是掌握游戏各个方面的绝佳方式，从基础挖掘技能到高级策略和速度挑战。</p>
          </div>
          
          <h3 className="text-xl font-bold mb-4">成就解锁视频教程</h3>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/eeU0ywuLU-Q" 
              title="A Game About Digging A Hole - All Achievements Guide" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-600">
            观看这个全面的视频教程，了解如何解锁游戏中的所有成就，包括最具挑战性的那些成就。
          </p>
        </div>
      </div>
    </div>
  )
} 