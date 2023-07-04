import React, {useState} from 'react';
import SidebarRight from '@/components/sidebarRight/sidebarRight';
import SidebarLeft from '@/components/sidebarLeft/sidebarLeft';
import HeadSearch from '@/components/headSearch/headSearch';

export default function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [cookiesEnabled, setCookiesEnabled] = useState(true);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [language, setLanguage] = useState('English');

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
        console.log('[Dark Mode] Button clicked');
    };

    const handleCookiesToggle = () => {
        setCookiesEnabled(!cookiesEnabled);
        console.log('[Cookies] Button clicked');
    };

    const handleNotificationsToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
        console.log('[Notifications] Button clicked');
    };

    const handleLanguageChange = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
        console.log(`[Language] Changed to ${selectedLanguage}`);
    };

    return (
        <>
            <SidebarLeft selectedIndex={5}/>
            <HeadSearch/>

            <div className={`flex flex-col md:flex-row ${darkMode ? 'bg-black text-white' : ''}`}>
                <div className="w-48 hidden lg:block shrink-0"/>
                <div className="flex flex-col items-start p-4 space-y-4 grow">
                    <h1 className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-500'}`}>Settings</h1>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="rounded-full w-8 h-4 transition-colors duration-300 ease-in-out bg-gray-400"
                            checked={darkMode}
                            onChange={handleDarkModeToggle}
                        />
                        <span>{darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="rounded-full w-8 h-4 transition-colors duration-300 ease-in-out bg-gray-400"
                            checked={cookiesEnabled}
                            onChange={handleCookiesToggle}
                        />
                        <span>{cookiesEnabled ? 'Disable Cookies' : 'Enable Cookies'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="rounded-full w-8 h-4 transition-colors duration-300 ease-in-out bg-gray-400"
                            checked={notificationsEnabled}
                            onChange={handleNotificationsToggle}
                        />
                        <span>{notificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}</span>
                    </div>
                    <div>
                        <select
                            className="rounded-md px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-white"
                            value={language}
                            onChange={(e) => handleLanguageChange(e.target.value)}
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="German">German</option>
                        </select>
                    </div>
                </div>
                <SidebarRight/>
            </div>
        </>
    );
}
