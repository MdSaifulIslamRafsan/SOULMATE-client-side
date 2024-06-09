import { useState } from 'react';
import Select from 'react-select';
const BiodataType = [
    { value: '', label: 'Select Biodata Type', isDisabled: true  },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];
  const heightOptions = [];
  for (let i = 41; i <= 65; i++) {
    const heightInInches = (i / 10).toFixed(1);
    heightOptions.push({ value: `${heightInInches}"`, label: `${heightInInches} inches` });
  }
  const weightOptions = [];
  for (let i = 40; i <= 150; i++) {
    weightOptions.push({ value: i, label: `${i} kg` });
  }
  const ageOptions = [];
  for (let i = 18; i <= 100; i++) {
    ageOptions.push({ value: i, label: `${i} years` });
  }
  const occupationOptions = [
    { value: 'Engineer', label: 'Engineer' },
    { value: 'Doctor', label: 'Doctor' },
    { value: 'Teacher', label: 'Teacher' },
    { value: 'Software Developer', label: 'Software Developer' },
    { value: 'Nurse', label: 'Nurse' },
    { value: 'Accountant', label: 'Accountant' },
    { value: 'Lawyer', label: 'Lawyer' },
    { value: 'Artist', label: 'Artist' },
    { value: 'Marketing Manager', label: 'Marketing Manager' },
    { value: 'Chef', label: 'Chef' },
    { value: 'Entrepreneur', label: 'Entrepreneur' },
    { value: 'Architect', label: 'Architect' },
    { value: 'Writer', label: 'Writer' },
    { value: 'Pilot', label: 'Pilot' },
    { value: 'Dentist', label: 'Dentist' },
    { value: 'Police Officer', label: 'Police Officer' },
    { value: 'Firefighter', label: 'Firefighter' },
    { value: 'Graphic Designer', label: 'Graphic Designer' },
    { value: 'Consultant', label: 'Consultant' },
    { value: 'Social Worker', label: 'Social Worker' },
    { value: 'Other', label: 'Other' },
  ];
  const raceOptions = [
    { value: 'Asian', label: 'Asian' },
    { value: 'Black or African American', label: 'Black or African American' },
    { value: 'Hispanic or Latino', label: 'Hispanic or Latino' },
    { value: 'White', label: 'White' },
    { value: 'Native American or American Indian', label: 'Native American or American Indian' },
    { value: 'Native Hawaiian or Other Pacific Islander', label: 'Native Hawaiian or Other Pacific Islander' },
    { value: 'Other', label: 'Other' },
  ];
  const heightRangeOptions = [
    { value: '5\'0" - 5\'4"', label: '5\'0" - 5\'4"' },
    { value: '5\'5" - 5\'8"', label: '5\'5" - 5\'8"' },
    { value: '5\'9" - 6\'1"', label: '5\'9" - 6\'1"' },
    { value: '6\'2" - 6\'5"', label: '6\'2" - 6\'5"' },
  ];
  const divisionOptions = [
    { value: 'Dhaka', label: 'Dhaka' },
    { value: 'Chattogram', label: 'Chattogram' },
    { value: 'Rangpur', label: 'Rangpur' },
    { value: 'Barisal', label: 'Barisal' },
    { value: 'Khulna', label: 'Khulna' },
    { value: 'Mymensingh', label: 'Mymensingh' },
    { value: 'Sylhet', label: 'Sylhet' },
  ];
  const weightRangeOptions = [
    { value: '40-45kg', label: '40-45 kg' },
    { value: '45-50kg', label: '45-50 kg' },
    { value: '50-55kg', label: '50-55 kg' },
    { value: '55-60kg', label: '55-60 kg' },
    { value: '60-65kg', label: '60-65 kg' },
    { value: '65-70kg', label: '65-70 kg' },
    { value: '70-75kg', label: '70-75 kg' },
    { value: '75-80kg', label: '75-80 kg' },
    { value: '80-85kg', label: '80-85 kg' },
    { value: '85-90kg', label: '85-90 kg' },
    { value: '90-95kg', label: '90-95 kg' },
    { value: '95-100kg', label: '95-100 kg' },
    { value: '100-110kg', label: '100-110 kg' },
    { value: '110-120kg', label: '110-120 kg' },
  ];
  const ageRangeOptions = [
    { value: '18-20', label: '18-20' },
    { value: '21-25', label: '21-25' },
    { value: '26-30', label: '26-30' },
    { value: '31-35', label: '31-35' },
    { value: '36-40', label: '36-40' },
    { value: '41-45', label: '41-45' },
    { value: '46-50', label: '46-50' },
    { value: '51-55', label: '51-55' },
    { value: '56-60', label: '56-60' },
    { value: '61-65', label: '61-65' },
    { value: '66-70', label: '66-70' },
    { value: '71-75', label: '71-75' },
    { value: '76-80', label: '76-80' },
    { value: '81-85', label: '81-85' },
    { value: '86-90', label: '86-90' },
    { value: '91-95', label: '91-95' },
    { value: '96-100', label: '96-100' },
  ];

const EditBoidata = () => {

    const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="max-w-[1440px]  mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold mb-4">Biodata Form</h1>
      <form>
    
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="BiodataType"
            >
              Biodata Type
            </label>
            <Select
        defaultValue={BiodataType[0]}
        onChange={setSelectedOption}
        options={BiodataType}
      />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              required=""
            />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="profileImage"
            >
              Profile Image Link or Image input
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="profileImage"
              name="profileImage"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="dateOfBirth"
            >
              Date of Birth
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              required=""
            />
          </div>
        </div>

        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="height">
              Height
            </label>
            <Select
        defaultValue={heightOptions[0]}
        onChange={setSelectedOption}
        options={heightOptions}
      />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="weight">
              Weight
            </label>
            <Select
      options={weightOptions}
      defaultValue={weightOptions[0]} 
    />
          </div>
        </div>

        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <Select
            placeholder="Select Age"
      options={ageOptions}
      isRequired 
    />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="occupation"
            >
              Occupation
            </label>
            <Select
      options={occupationOptions}
      placeholder="Select Occupation"
    />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="race">
              Race
            </label>
            <Select
      options={raceOptions}
      placeholder="Select Race"
    />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="fathersName"
            >
              {`Father's Name`}
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="fathersName"
              name="fathersName"
              required=""
            />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="mothersName"
            >
              {`Mother's Name`}
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="mothersName"
              name="mothersName"
              required=""
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="permanentDivision"
            >
              Permanent Division
            </label>
            <Select
      options={divisionOptions}
      placeholder="Select Permanent Division"
      isSearchable
      isClearable
      isRequired
    />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="presentDivision"
            >
              Present Division
            </label>
            <Select
      options={divisionOptions}
      placeholder="Select Present Division"
      isSearchable
      isClearable
      isRequired
    />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="expectedPartnerAge"
            >
              Expected Partner Age
            </label>
            <Select
      options={ageRangeOptions}
      placeholder="Select Expected Partner Age Range"
    />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="expectedPartnerHeight"
            >
              Expected Partner Height
            </label>
            <Select
      options={heightRangeOptions}
      placeholder="Select Expected Partner Height"
    />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="expectedPartnerWeight"
            >
              Expected Partner Weight
            </label>
            <Select
      options={weightRangeOptions}
      placeholder="Select Expected Partner Weight"
    />
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="contactEmail"
            >
              Contact Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="email"
              id="contactEmail"
              name="contactEmail"
              readOnly=""
              defaultValue="user@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              required=""
            />
          </div>
        </div>

        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save 
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBoidata;
