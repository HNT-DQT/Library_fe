import './Layout.css';
import MainHeader from './MainHeader';
import Footer from './Footer';

function PublicLayout() {
  return (
    <div className='public-layout'>
      <div className='header'>
        INTERNET ARCHIVE
      </div>
      <MainHeader />
      <div className='content'>

      </div>
      <Footer />
    </div>
  )
}

export default PublicLayout;