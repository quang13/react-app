import ProfileConsoles from "./consoles";
import PersonalDetailComponent from "./personal-detail";

export default function ProfileComponent() {
  return (
    <div className="profile">
      <PersonalDetailComponent />
      <h3 style={{ marginTop: "40px" }} />
      <ProfileConsoles />
    </div>
  );
}
