import type { PersonalData } from "lib/types/main";

const PersonalInfo = ({ personalInfo }: { personalInfo: PersonalData }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>name</td>
          <td>{personalInfo?.name}</td>
          <td>phone</td>
          <td>{personalInfo.phone}</td>
        </tr>
        <tr>
          <td>company</td>
          <td>{personalInfo.company?.name}</td>
          <td>email</td>
          <td>{personalInfo.email}</td>
        </tr>
        <tr>
          <td>website</td>
          <td>{personalInfo.website}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PersonalInfo;
