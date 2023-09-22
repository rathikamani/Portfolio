import Header from '../Header/Header';
import About from '../About/About'
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import MyWork from '../MyWork/MyWork';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';





const Main = (() => {
    return <>
        <div>
            <Header />
        </div>
        <div>
            <About />
        </div>
        <div>
            <Banner />
        </div>
        <div>
            <Contact />
        </div>
        <div>
            <Home />
        </div>
        <div>
            <MyWork />
        </div>
        <div>
            <Services />
        </div>
        <div><Skills /></div>

    </>
});

export default Main;