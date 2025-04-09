'use client';

import { useState, useEffect, forwardRef, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import './Header.css';
import OptimizedImageCaseInsensitive from '../OptimizedImageCaseInsensitive';

// Import icons from MUI
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

// Import logo images
// You'll need to move these to the public folder or src/assets
const logo = '/assets/images/logo/Cyborg-logo-9-09.png';
const logoDark = '/assets/images/logo/Cyborg-logo 10-10.png';
const logode = '/assets/images/germany_round_icon_640.png';
const logouk = '/assets/images/united_kingdom_round_icon_640.png';

const Header = forwardRef(({ className = '' }, ref) => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  // Add state to track if client hydration has happened
  const [hasMounted, setHasMounted] = useState(false);

  // Set hasMounted to true once the component has mounted
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Initialize client-side state
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    setIsSmallScreen(window.innerWidth <= 400);
  }, []);

  const currentLang = i18n.language;
  const isGerman = currentLang === 'de';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 400);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const changeLanguage = (lng) => {
    // Extract the path without language prefix
    const pathWithoutLang = pathname.replace(/^\/(en|de)/, '');
    // Change language and navigate
    i18n.changeLanguage(lng);
    router.push(`/${lng}${pathWithoutLang}`);
  };

  const goToHome = () => {
    router.push(`/${currentLang}`);
  };

  const isActiveLink = (link) => {
    const linkPathname = link.split('#')[0].replace(/\/$/, '');
    const currentPathnameCleaned = pathname.replace(/\/$/, '');
    return currentPathnameCleaned === linkPathname;
  };

  const isActiveSubmenuLink = (link) => {
    if (typeof window === 'undefined') return false;
    
    const linkHash = link.split('#')[1] ? `#${link.split('#')[1]}` : '';
    const currentHash = window.location.hash;
    return currentHash === linkHash && isActiveLink(link);
  };

  // Smooth scroll handler for hash links
  const scrollToHash = (e, hash) => {
    e.preventDefault();
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL with hash
      window.history.pushState(null, '', `#${hash}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        ref.current &&
        !ref.current.contains(event.target) &&
        !event.target.closest('.hamburger')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, ref]);

  // Short heading for small screens vs. normal heading
  const topBarMessage = useMemo(() => {
    // During server-side rendering or before client hydration, use a consistent value 
    // to avoid hydration mismatch
    if (!hasMounted) {
      return isGerman 
        ? 'Wir sind 24/7 für Sie da!' 
        : 'We are available 24/7!';
    }
    
    // After hydration, we can use the responsive logic
    if (isGerman) {
      return isSmallScreen ? '24/7 für Sie da!' : 'Wir sind 24/7 für Sie da!';
    } else {
      return isSmallScreen ? 'Available 24/7!' : 'We are available 24/7!';
    }
  }, [isGerman, isSmallScreen, hasMounted]);

  // Custom HashLink component for Next.js
  const HashLink = ({ children, to, className, onClick }) => {
    const [path, hash] = to.split('#');
    
    const handleClick = (e) => {
      if (hash) {
        // If we're already on the right page, just scroll
        if (pathname === path) {
          scrollToHash(e, hash);
        } else {
          // If we need to navigate first, do that and handle scroll after
          router.push(path, { scroll: false }).then(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      }
      
      if (onClick) onClick();
    };
    
    return (
      <Link href={to} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`top-bar ${className}`}>
        <div className="top-bar-content">
          <span className="top-bar-message">{topBarMessage}</span>
          <div className="top-bar-contact-group">
            <span className="top-bar-contact">
              <EmailIcon
                fontSize="small"
                className="top-bar-icon email-icon"
                aria-hidden="true"
              />
              <a href="mailto:info@cyborg-it.de">info@cyborg-it.de</a>
            </span>
            <span className="top-bar-contact">
              <a
                href="https://wa.me/995597011309"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon
                  fontSize="small"
                  className="top-bar-icon whatsapp-icon"
                />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Rule between Top Bar and Header */}
      <hr className={`topbar-hr ${className}`} />

      {/* Main Header */}
      <header ref={ref} className={`header ${isScrolled ? 'scrolled' : ''} ${className}`}>
        <div className="header-container">
          {/* Mobile Language Switcher */}
          {isMobile && (
            <div className="language-switch mobile-language-switch exclude-spider">
              <button
                className={currentLang === 'de' ? 'active' : ''}
                onClick={() => changeLanguage('de')}
                aria-label="German Language"
              >
                <OptimizedImageCaseInsensitive
                  src={logode}
                  alt="German flag for language selection"
                  width={50}
                  height={50}
                />
              </button>
              <button
                className={currentLang === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
                aria-label="English Language"
              >
                <OptimizedImageCaseInsensitive
                  src={logouk}
                  alt="English flag for language selection"
                  width={50}
                  height={50}
                />
              </button>
            </div>
          )}

          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <button
              className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}

          {/* Logo */}
          <div
            className="logo-container"
            onClick={goToHome}
            style={{ cursor: 'pointer' }}
          >
            <OptimizedImageCaseInsensitive
              src={isScrolled ? logoDark : logo}
              alt="Cyborg Automation logo"
              width={250}
              height={90}
            />
          </div>

          {/* Desktop Navigation and Language Switcher */}
          {!isMobile && (
            <>
              <nav>
                <ul className="main-menu">
                  <li>
                    <Link
                      href={`/${currentLang}/about-us`}
                      className={isActiveLink(`/${currentLang}/about-us`) ? 'active' : ''}
                    >
                      {t('menu.about_us')}
                    </Link>
                  </li>

                  {/* IT Consulting Dropdown */}
                  <li
                    className={`dropdown ${
                      openDropdown === 'it-consulting' ? 'open' : ''
                    }`}
                    onMouseEnter={() => setOpenDropdown('it-consulting')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={`/${currentLang}/it-consulting`}
                      className={
                        isActiveLink(`/${currentLang}/it-consulting`)
                          ? 'active'
                          : ''
                      }
                      aria-haspopup="true"
                      aria-expanded={openDropdown === 'it-consulting'}
                    >
                      {t('menu.it_consulting')}
                    </Link>
                    <ul className="submenu">
                      <li>
                        <HashLink
                          to={`/${currentLang}/it-consulting#from-idea-to-implementation`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/it-consulting#from-idea-to-implementation`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('it_consulting.from_idea_to_implementation')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/it-consulting#it-strategy`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/it-consulting#it-strategy`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('it_consulting.it_strategy')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/it-consulting#software-consulting`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/it-consulting#software-consulting`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('it_consulting.software_consulting')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/it-consulting#it-security`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/it-consulting#it-security`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('it_consulting.it_security')}
                        </HashLink>
                      </li>
                    </ul>
                  </li>

                  {/* Web Development Dropdown */}
                  <li
                    className={`dropdown ${
                      openDropdown === 'web-development' ? 'open' : ''
                    }`}
                    onMouseEnter={() => setOpenDropdown('web-development')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={`/${currentLang}/web-development`}
                      className={
                        isActiveLink(`/${currentLang}/web-development`)
                          ? 'active'
                          : ''
                      }
                      aria-haspopup="true"
                      aria-expanded={openDropdown === 'web-development'}
                    >
                      {t('menu.web_development')}
                    </Link>
                    <ul className="submenu">
                      <li>
                        <HashLink
                          to={`/${currentLang}/web-development#wordpress`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/web-development#wordpress`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('web_development.wordpress')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/web-development#react-applications`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/web-development#react-applications`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('web_development.react_applications')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/web-development#angular-development`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/web-development#angular-development`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('web_development.angular_development')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/web-development#e-commerce`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/web-development#e-commerce`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('web_development.e_commerce')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/web-development#custom-software`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/web-development#custom-software`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('web_development.custom_software')}
                        </HashLink>
                      </li>
                    </ul>
                  </li>

                  {/* Zoho Consulting Dropdown */}
                  <li
                    className={`dropdown ${
                      openDropdown === 'zoho-consulting' ? 'open' : ''
                    }`}
                    onMouseEnter={() => setOpenDropdown('zoho-consulting')}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={`/${currentLang}/zoho-consulting`}
                      className={
                        isActiveLink(`/${currentLang}/zoho-consulting`)
                          ? 'active'
                          : ''
                      }
                      aria-haspopup="true"
                      aria-expanded={openDropdown === 'zoho-consulting'}
                    >
                      {t('menu.zoho_consulting')}
                    </Link>
                    <ul className="submenu">
                      <li>
                        <HashLink
                          to={`/${currentLang}/zoho-consulting#zoho-crm`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/zoho-consulting#zoho-crm`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('zoho_consulting.zoho_crm')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/zoho-consulting#zoho-marketing`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/zoho-consulting#zoho-marketing`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('zoho_consulting.zoho_marketing')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/zoho-consulting#zoho-finance`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/zoho-consulting#zoho-finance`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('zoho_consulting.zoho_finance')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/zoho-consulting#zoho-human-resources`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/zoho-consulting#zoho-human-resources`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('zoho_consulting.zoho_human_resources')}
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to={`/${currentLang}/zoho-consulting#custom-development`}
                          className={
                            isActiveSubmenuLink(
                              `/${currentLang}/zoho-consulting#custom-development`
                            )
                              ? 'active'
                              : ''
                          }
                        >
                          {t('zoho_consulting.custom_development')}
                        </HashLink>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      href={`/${currentLang}/contact-us`}
                      className={isActiveLink(`/${currentLang}/contact-us`) ? 'active' : ''}
                    >
                      {t('menu.contact_us')}
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Language Switcher for Desktop */}
              <div className="language-switch desktop-language-switch exclude-spider">
                <button
                  className={currentLang === 'de' ? 'active' : ''}
                  onClick={() => changeLanguage('de')}
                  aria-label="German Language"
                >
                  <OptimizedImageCaseInsensitive
                    src={logode}
                    alt="German flag for language selection"
                    width={50}
                    height={50}
                  />
                </button>
                <button
                  className={currentLang === 'en' ? 'active' : ''}
                  onClick={() => changeLanguage('en')}
                  aria-label="English Language"
                >
                  <OptimizedImageCaseInsensitive
                    src={logouk}
                    alt="English flag for language selection"
                    width={50}
                    height={50}
                  />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Slide-Down Mobile Menu */}
        {isMobile && (
          <div className={`mobile-menu-slide ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-main-menu">
              <li>
                <Link
                  href={`/${currentLang}/about-us`}
                  className={isActiveLink(`/${currentLang}/about-us`) ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('menu.about_us')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}/it-consulting`}
                  className={isActiveLink(`/${currentLang}/it-consulting`) ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('menu.it_consulting')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}/web-development`}
                  className={isActiveLink(`/${currentLang}/web-development`) ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('menu.web_development')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}/zoho-consulting`}
                  className={isActiveLink(`/${currentLang}/zoho-consulting`) ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('menu.zoho_consulting')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLang}/contact-us`}
                  className={isActiveLink(`/${currentLang}/contact-us`) ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('menu.contact_us')}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
});

Header.displayName = 'Header';

export default Header; 