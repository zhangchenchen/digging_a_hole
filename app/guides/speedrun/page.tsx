import Link from "next/link";
import { Clock, ChevronLeft, Timer, Bolt, Award } from "lucide-react";

export default function SpeedrunPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 pt-20">
      <div className="container py-12">
        <Link 
          href="/guides"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span>Back to Guides</span>
        </Link>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <Clock className="h-8 w-8 text-amber-600 mr-3" />
            <h1 className="text-3xl font-bold">Speedrun Techniques: Complete in Under 30 Minutes</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="my-8">
              <p className="text-sm text-gray-500 mt-2">
                Video tutorial showing a sub-30 minute speedrun
              </p>
            </div>

            <h2>Introduction to Speedrunning</h2>
            <p>
              One of the most challenging achievements in <em>A Game About Digging A Hole</em> is "The Fastest," which requires 
              you to complete the game in under 30 minutes. While it may seem impossible at first, with the right strategy, 
              it's absolutely achievable! This guide will walk you through proven approaches to earning this prestigious achievement.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 my-8">
              <h3 className="text-amber-800 flex items-center"><Timer className="h-5 w-5 mr-2" /> Best Time Records</h3>
              <p>Some players have reported completing the game in as little as:</p>
              <ul className="mb-0">
                <li><strong>22 minutes</strong> - with one death</li>
                <li><strong>23 minutes</strong> - optimized path</li>
                <li><strong>27 minutes</strong> - standard speedrun approach</li>
                <li><strong>29 minutes</strong> - comfortable achievement pace</li>
              </ul>
            </div>

            <h2>Key Speedrun Strategies</h2>
            
            <h3>Keep Track of Time</h3>
            <p>
              Set a timer when you start your run. Since the goal is to finish within 30 minutes, it's important to know 
              if you're on pace. If you're clearly not going to make it, restart rather than waste more time. Save your 
              game periodically when things are going well.
            </p>
            
            <h3>Focus on Vertical Progress</h3>
            <p>
              The most important strategy is to dig straight down as efficiently as possible. Don't waste time exploring 
              horizontally or pursuing side objectives. Every second counts in a speedrun, so maintain a laser focus on 
              depth progress.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h4 className="text-blue-800 font-bold">DO</h4>
                <ul className="mb-0">
                  <li>Dig straight down</li>
                  <li>Prioritize shovel upgrades</li>
                  <li>Use dynamite for rocks</li>
                  <li>Take advantage of caves</li>
                  <li>Save often</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h4 className="text-red-800 font-bold">DON'T</h4>
                <ul className="mb-0">
                  <li>Hunt for mine shafts</li>
                  <li>Search for keys</li>
                  <li>Explore horizontally</li>
                  <li>Wait for inventory to fill</li>
                  <li>Waste time collecting low-value items</li>
                </ul>
              </div>
            </div>
            
            <h3>Upgrade Priorities</h3>
            <p>
              Proper upgrade sequencing is crucial for a successful speedrun. Here's the optimal approach:
            </p>
            
            <ol>
              <li>
                <strong>Shovel Upgrades</strong>: Make this your absolute top priority. Aim to get the drill as quickly as possible, as it dramatically increases your digging speed.
              </li>
              <li>
                <strong>Jetpack</strong>: A moderate upgrade (around 80 strength) makes traversing back to the surface much faster, saving precious minutes.
              </li>
              <li>
                <strong>Battery</strong>: Upgrade to around 800-1600 capacity. This provides enough power for extended digging sessions.
              </li>
              <li>
                <strong>Inventory</strong>: 12-15 slots is sufficient for a speedrun. Don't waste money on excessive capacity.
              </li>
            </ol>

            <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-100">
              <h4 className="text-blue-800 font-bold flex items-center">
                <Bolt className="h-5 w-5 mr-2" /> Pro Tip: Hollow Spaces
              </h4>
              <p className="mb-0">
                Cave systems and hollow spaces are your best friends during a speedrun. They not only save you the effort of digging 
                but also often contain valuable ores. The higher-value minerals you find, the more you can invest in crucial upgrades.
                Starting from copper, you can make decent profits, so be sure to mine any ore you encounter.
              </p>
            </div>

            <h3>Mole Evasion Tactics</h3>
            <p>
              Moles can significantly slow down your run if they spot you. Their field of vision is quite wide, and getting caught 
              wastes valuable time. If a mole sees you:
            </p>
            <ul>
              <li>Reload from a save if you're tight on time</li>
              <li>Always use the dash ability to evade them</li>
              <li>Move when their backs are turned</li>
              <li>Keep to the edges of tunnels where possible</li>
            </ul>
            
            <h3>Final Digging: The One-Way Trip</h3>
            <p>
              Once you reach around 70 meters depth, health and battery become much less important. At this point:
            </p>
            <ul>
              <li>Use remaining money for dynamite and lighting (keep enough for one battery charge)</li>
              <li>Make a final push without worrying about returning to the surface</li>
              <li>If you run out of power, you'll respawn at the surface - recharge and continue digging</li>
              <li>Focus entirely on reaching the end goal</li>
            </ul>

            <h3>Time Benchmarks</h3>
            <p>
              To stay on track, aim for these depth milestones:
            </p>
            <ul>
              <li>16 minutes remaining: Reach 25 meters depth</li>
              <li>8 minutes remaining: Reach platinum/diamond depth (acquire drill)</li>
              <li>5 minutes remaining: Make final descent to reach the treasure</li>
            </ul>
            <p>
              Remember, most of your time is spent in the first 25 meters since tools are basic and materials are less valuable. 
              The run gets faster as you progress deeper.
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-8 border border-green-100">
              <h4 className="text-green-800 font-bold flex items-center">
                <Award className="h-5 w-5 mr-2" /> Other Notable Achievements
              </h4>
              <p>
                While focusing on your speedrun, you might also consider these achievements:
              </p>
              <ul className="mb-0">
                <li>
                  <strong>BOOOOM!</strong> - You don't need to destroy rocks to throw 100 dynamites. Just buy and throw them!
                </li>
                <li>
                  <strong>Long Fall</strong> - Fall without landing for 4 seconds. Widen the hole, use the jetpack to rise from 
                  the center, and then fall for extra distance.
                </li>
              </ul>
            </div>

            <h3>Conclusion</h3>
            <p>
              Completing the game in under 30 minutes is challenging but achievable with focus and strategy. 
              The presence of caverns and rocks plays a significant role, so luck is also a factor. If your first attempt 
              doesn't succeed, analyze what slowed you down and adjust your approach for the next run.
            </p>
            <p>
              Good luck, and happy speed digging!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 