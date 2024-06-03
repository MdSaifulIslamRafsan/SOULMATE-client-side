import { motion } from 'framer-motion';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
const PremiumMemberCard = ({ card }) => {
    const { biodata_id ,  profile_image, biodata_type, age, occupation, permanent_division_name } = card;
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded overflow-hidden shadow-lg bg-white"
        >
            <motion.img
                src={profile_image}
                alt="Profile"
                className="w-full h-52 overflow-hidden bg-cover object-cover px-2"
            />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2"> Biodata id : {biodata_id}</h2>
                <permanent_division_name className="text-gray-700 text-base">Gender : {biodata_type}</permanent_division_name>
                <p className="text-gray-700 text-base">
                    Age: {age}
                </p>
                <p className="text-gray-700 text-base">
                    Occupation: {occupation}
                </p>
                <p className="text-gray-700 text-base">
                    Division: {permanent_division_name}
                </p>
                <AwesomeButton style={{marginTop: '10px'}} href='/login' type="primary" className='w-full'>View Profile</AwesomeButton>
            </div>
        </motion.div>
    );
};

export default PremiumMemberCard;
