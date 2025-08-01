export default function Pricing() {
  const plans = [
    { name:'Basic', price:'Free', features:['Search KOLs','Daily snapshots'] },
    { name:'Pro', price:'$29/mo', features:['Real-time alerts','Advanced analytics'] },
    { name:'Enterprise', price:'Custom', features:['White-label','Dedicated support'] }
  ];
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <p className="text-gray-600 mt-2">Scale with pricing that fits your needs.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map(({name,price,features})=>(
          <div key={name} className="border rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">{name}</h3>
            <p className="text-4xl font-bold mb-6">{price}</p>
            <ul className="mb-6 space-y-2">
              {features.map(f=><li key={f} className="flex items-center"><span className="mr-2 text-green-500">✓</span>{f}</li>)}
            </ul>
            <button className="w-full py-3 bg-brand text-white rounded-lg hover:bg-brand-dark transition">Select</button>
          </div>
        ))}
      </div>
    </section>
  );
}
