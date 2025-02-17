import React from "react";
import PropTypes from 'prop-types';

function ProfileCard({ member }) {
  return (
    <div className=" p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 text-center border border-slate-200">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-orange-500">
        <img
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h4 className="text-xl font-semibold text-slate-700">{member.name}</h4>
      <p className="text-orange-500 font-medium mb-2">{member.role}</p>
      <p className="text-slate-700 text-sm">{member.bio}</p>
    </div>
  );
}

ProfileCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileCard;
