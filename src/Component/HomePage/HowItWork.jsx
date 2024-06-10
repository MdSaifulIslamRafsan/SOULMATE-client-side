

const HowItWorks = () => {
  return (
    <section className="py-12  my-5 bg-gray-100">
      <div className="mx-auto max-w-[1440px]  lg:w-10/12 w-11/12 ">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">For Premium Users</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Account Creation:</strong> Sign up and create a detailed profile.</li>
              <li><strong>Search Functionality:</strong> Search by age range, division, and type. Sort by age and marriage date.</li>
              <li><strong>Full Information Access:</strong> View all contact information of other users.</li>
              <li><strong>Profile Updates:</strong> Edit and update your biodata.</li>
              <li><strong>Add to Favorites:</strong> Save profiles to your favorites list.</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">For Normal Users</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Account Creation:</strong> Sign up and create a detailed profile.</li>
              <li><strong>Search Functionality:</strong> Search by age range, division, and type. Sort by age and marriage date.</li>
              <li><strong>Request Contact Info:</strong> Click the {`"Request Contact"`} button to proceed to the checkout page for payment and admin approval.</li>
              <li><strong>Profile Updates:</strong> Edit and update your biodata.</li>
              <li><strong>Add to Favorites:</strong> Save profiles to your favorites list.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
