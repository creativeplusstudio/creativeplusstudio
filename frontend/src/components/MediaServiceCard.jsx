import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function MediaServiceCard({ service }) {
  const isVideo = service.media.endsWith('.mp4'); // Check for MP4 format

  return (
    <Link to={service.link} aria-label={`Learn more about ${service.title}`} prefetch="intent">
      <div className="rounded-xl overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 border border-slate-200">
        {/* Media Section: Video or GIF */}
        <div className="w-full h-60 overflow-hidden mb-4">
          {isVideo ? (
            <video
              src={service.media}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
              aria-label={`${service.title} media preview`}
            />
          ) : (
            <img
              src={service.media}
              alt={`${service.title} preview`}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Title and Description */}
        <div className="p-4 bg-gradient-to-r from-orange-100 to-orange-200 rounded-b-xl">
          <h3 className="text-2xl font-bold mb-2 text-slate-800 text-center" itemProp="name">{service.title}</h3>
          <p className="text-base text-center text-slate-600" itemProp="description">{service.description}</p>
        </div>
      </div>
    </Link>
  );
}

MediaServiceCard.propTypes = {
  service: PropTypes.shape({
    link: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired, // GIF or MP4
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MediaServiceCard;
