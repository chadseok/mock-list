import type { PersonalData } from "lib/types/main";

const PersonalInfo = ({ personalInfo }: { personalInfo: PersonalData }) => {
  return (
    <table className="w-full my-8">
      <tbody>
        <tr>
          <td className="font-bold text-slate-500">name</td>
          <td>{personalInfo?.name}</td>
          <td className="font-bold text-slate-500">phone</td>
          <td>{personalInfo.phone}</td>
        </tr>
        <tr>
          <td className="font-bold text-slate-500">company</td>
          <td>{personalInfo.company?.name}</td>
          <td className="font-bold text-slate-500">email</td>
          <td>{personalInfo.email}</td>
        </tr>
        <tr>
          <td className="font-bold text-slate-500">website</td>
          <td>{personalInfo.website}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PersonalInfo;
