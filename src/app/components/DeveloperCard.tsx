// components/DeveloperCard.tsx
import Image from "next/image";
import { Developer } from "../lib/types";

interface DeveloperCardProps {
  developer: Developer;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ developer }) => {
  return (
    <div className="border bg-white border-gray-300 rounded-lg p-6 shadow-md font-montserrat mb-4">
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <div className="sm:w-3/4">
          <h2 className="text-xl font-semibold mb-4">{developer.full_name}</h2>
          <div className="flex flex-row gap-2">
            <p className="font-semibold mb-1">Age:</p> {developer.age}
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold mb-1">Birth Date:</p>{" "}
            {developer.birth_date}
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold mb-1">Phone Number:</p>{" "}
            {developer.phone_number}
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold mb-1">Nationality:</p>{" "}
            {developer.nacionality}
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold mb-1">Stack:</p> {developer.stack}
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold mb-1">Main Stack Technology:</p>{" "}
            {developer.main_stack_technology}
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold mb-1">GitHub:</p>
            <a
              href={developer.github_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              {developer.github_profile}
            </a>
          </div>
        </div>
        <div className="w-28 h-28 flex items-center justify-center mt-4 sm:mt-0">
          <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
            <Image
              src={developer.profile_image}
              alt={`${developer.full_name} Profile`}
              layout="responsive"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <p className="mt-4 text-justify">{developer.summary}</p>
    </div>
  );
};

export default DeveloperCard;
