import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | A Game About Digging A Hole",
  description: "Privacy Policy for A Game About Digging A Hole website"
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 pt-20">
      <div className="container py-12 mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-6">
              Welcome to the Privacy Policy page for A Game About Digging A Hole website. This page explains our stance on data collection and privacy.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-6">
              <strong>We do not collect any personal information from our users.</strong> Our website does not require login credentials, account creation, or any form of personal data submission. We operate as a simple informational website without any user data tracking mechanisms.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Role</h2>
            <p className="mb-6">
              This website is an unofficial information hub for the game &quot;A Game About Digging A Hole.&quot; We are not affiliated with the official game developers and operate independently to provide information, resources, and community support for game enthusiasts.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <p className="mb-6">
              Our website does not use cookies or any other tracking technologies to collect information about your browsing behavior.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p className="mb-6">
              Our website may contain links to third-party websites, including social media platforms. These external sites have their own privacy policies, and we encourage users to review those policies when visiting third-party websites. We are not responsible for the privacy practices of other sites.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about our Privacy Policy, please contact us through our social media channels listed in the footer.
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