export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">© 2025 TrackKol. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
        </div>
      </div>
    </footer>
  );
}
