import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | A Game About Digging A Hole",
  description: "Terms of Service for A Game About Digging A Hole website",
  keywords: "A Game About Digging A Hole, download A Game About Digging A Hole, a game about digging a hole free, скачать a game about digging a hole",
  alternates: {
    canonical: '/terms',
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 pt-20">
      <div className="container py-12 mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-6">
              Welcome to A Game About Digging A Hole website. By accessing or using our website, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Website Status</h2>
            <p className="mb-6">
              <strong>This is an unofficial fan website.</strong> We are not affiliated with, endorsed by, or officially connected to the developers or publishers of "A Game About Digging A Hole." This website is created and maintained by enthusiastic fans to provide information and resources about the game.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Information Accuracy</h2>
            <p className="mb-6">
              While we strive to provide accurate and up-to-date information about the game, we cannot guarantee the completeness, reliability, or accuracy of all content. The information provided is for general informational purposes only.
            </p>

            <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
            <p className="mb-6">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Interfere with or disrupt the operation of the website</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to distribute malware, viruses, or other malicious content</li>
              <li>Scrape, data mine, or otherwise extract data from the website in an automated manner</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-6">
              All game-related content, including names, characters, images, and logos, are trademarks and copyrights of their respective owners. Our use of such material is intended to fall under "fair use" for informational and fan community purposes.
            </p>
            <p className="mb-6">
              Original content created specifically for this website is the property of the website owners unless otherwise stated.
            </p>

            <h2 className="text-2xl font-semibold mb-4">External Links</h2>
            <p className="mb-6">
              Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Modifications to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these Terms of Service at any time. We will notify users of any changes by updating the date at the bottom of this page. Continued use of the website after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied, and will not be liable for any damages of any kind arising from the use of this website.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please contact us through our social media channels listed in the footer.
            </p>

            <div className="border-t pt-4 mt-8">
              <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 