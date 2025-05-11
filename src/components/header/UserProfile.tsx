
import React from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Settings, LogOut, User, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface UserProfileProps {
  user: {
    name: string;
    role: string;
    region: string;
    avatar?: string;
  };
  onLogout?: () => void;
  onSettings?: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  onLogout = () => {},
  onSettings = () => {}
}) => {
  const initials = user.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 p-0">
          <div className="flex items-center gap-2">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium">{user.name}</p>
              <div className="flex items-center gap-1">
                <Badge variant="secondary" className="h-5 text-xs">
                  {user.region}
                </Badge>
                <Badge 
                  className="h-5 text-xs bg-health-primary text-white hover:bg-health-primary/90"
                >
                  {user.role}
                </Badge>
              </div>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-xs">{initials}</AvatarFallback>
            </Avatar>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onSettings}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Shield className="mr-2 h-4 w-4" />
            <span>Permissions</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
