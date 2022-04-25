import { Avatar, AvatarProps, Border } from "./styledComponents";

const ProfileAvatar: React.FC<AvatarProps> = ({ radius, image }) => {
  return (
    <Border>
      <Avatar
        {...{
          radius,
          image,
        }}
      />
    </Border>
  );
};

export default ProfileAvatar;
