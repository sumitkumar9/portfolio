import Header from './Header';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';

/**
 * Layout component that wraps all pages
 * Provides consistent header, footer, and page structure
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 */
const Layout = ({ children }) => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-dark-primary group/design-root overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Layout;
