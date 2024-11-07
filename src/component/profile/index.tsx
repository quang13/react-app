import ProfileConsoles from "./profile-consoles";
import PersonalDetailComponent from "./personal-detail";

export default function ProfileComponent() {
  return (
    <div className="profile">
      <PersonalDetailComponent />
      <h3 style={{ marginTop: "40px" }} />
      <ProfileConsoles />
      <p style={{ marginTop: "40px" }}>
        I divide the components as follows: - header (src/layout/header.tsx) is
        the common header for the entire app. The profile page is divided into
        smaller components: Including the index.tsx file to summarize the
        components that I wrote for the profile. And: - Component
        personal-detail (src/component/profile/personal-detail) - Component
        profile-consoles (src/component/profile/consoles) Dividing like this
        will be more effective because I know where each part is, easy to
        maintain and extend without having to worry about other changes to the
        entire profile page.
      </p>
    </div>
  );
}
