export default function Features() {
  const data = [
    { title:'Analytics', desc:'On-chain token movement charts', icon:'/analytics.svg' },
    { title:'Leaderboards', desc:'Rank influencers by volume & engagement', icon:'/leaderboard.svg' },
    { title:'Privacy', desc:'No private key storage—ever', icon:'/shield.svg' }
  ];
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {data.map(({title,desc,icon})=>(
          <div key={title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition">
            <img src={icon} alt="" className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
