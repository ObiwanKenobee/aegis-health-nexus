
import React, { useState } from 'react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ur', name: 'Urdu' },
  { code: 'ha', name: 'Hausa' },
  { code: 'sw', name: 'Swahili' }
];

interface LanguageSwitcherProps {
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage = 'en',
  onLanguageChange = () => {},
}) => {
  const [language, setLanguage] = useState(currentLanguage);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    onLanguageChange(lang);
  };

  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === language);
    return lang ? lang.name : 'English';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{getCurrentLanguageName()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            className={language === lang.code ? "bg-muted" : ""}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
